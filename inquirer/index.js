import { input, select, confirm } from '@inquirer/prompts';

const name = await input({ message: 'What is your name?' });

const projectType = await select({
  message: 'Select project type',
  choices: [
    { name: 'React', value: 'react' },
    { name: 'Vue', value: 'vue' },
    { name: 'Node.js API', value: 'node' }
  ]
});

const ProjectLanguage = await select({
  message: 'Select project language',
  choices: [
    { name: 'JavaScript', value: 'javascript' },
    { name: 'TypeScript', value: 'typescript' }
  ]
});

const proceed = await confirm({ message: 'Do you want to continue?' });