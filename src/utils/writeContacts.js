import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const writeContacts = async (contacts) => {
  try {
    const data = JSON.stringify(contacts, null, 2);
    await fs.writeFile(PATH_DB, data, 'utf8');
  } catch (error) {
    console.error('Error writing contacts:', error.message);
    throw error;
  }
};
