import {surpriseMePrompts} from '../constants';

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length); // Fixed typo here
    const randomPrompt = surpriseMePrompts[randomIndex];
  
    if (randomPrompt === prompt) {
      return getRandomPrompt(prompt);
    }
  
    return randomPrompt;
  }
  