#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const skillsRoot = path.join(root, 'skills');
const requiredSections = [
  'Skill Name',
  'Description',
  'When To Use',
  'Inputs Required',
  'Step-by-Step Workflow',
  'Output Format',
  'Success Criteria',
  'Common Mistakes',
  'Example Usage'
];
const requiredDirs = ['examples', 'resources', 'scripts'];
const errors = [];

function fail(message) {
  errors.push(message);
}

function hasMarkdownSection(content, section) {
  return new RegExp('^##\\s+' + section + '\\s*$', 'm').test(content);
}

if (!fs.existsSync(skillsRoot)) {
  fail('Missing skills directory.');
} else {
  const categories = fs.readdirSync(skillsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  let skillCount = 0;
  const seenNames = new Set();

  for (const category of categories) {
    const categoryPath = path.join(skillsRoot, category);
    const skillDirs = fs.readdirSync(categoryPath, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .sort();

    for (const skillSlug of skillDirs) {
      skillCount += 1;
      const skillPath = path.join(categoryPath, skillSlug);
      const displayPath = path.relative(root, skillPath);
      const skillFile = path.join(skillPath, 'SKILL.md');

      if (!fs.existsSync(skillFile)) {
        fail(displayPath + ': missing SKILL.md');
        continue;
      }

      for (const dir of requiredDirs) {
        const dirPath = path.join(skillPath, dir);
        if (!fs.existsSync(dirPath) || !fs.statSync(dirPath).isDirectory()) {
          fail(displayPath + ': missing ' + dir + '/ directory');
        }
      }

      const content = fs.readFileSync(skillFile, 'utf8');
      for (const section of requiredSections) {
        if (!hasMarkdownSection(content, section)) {
          fail(displayPath + '/SKILL.md: missing section "' + section + '"');
        }
      }

      const nameMatch = content.match(/^##\\s+Skill Name\\s*\\n+([^\\n]+)/m);
      if (nameMatch) {
        const name = nameMatch[1].trim();
        if (seenNames.has(name)) {
          fail(displayPath + '/SKILL.md: duplicate skill name "' + name + '"');
        }
        seenNames.add(name);
      }
    }
  }

  if (skillCount < 25) {
    fail('Expected at least 25 skills, found ' + skillCount + '.');
  }

  if (skillCount === 0) {
    fail('No skills found.');
  }
}

if (errors.length > 0) {
  console.error('Skill validation failed:');
  for (const error of errors) {
    console.error('- ' + error);
  }
  process.exit(1);
}

console.log('Skill validation passed.');