import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const existingContacts = await readContacts();
    const newContact = createFakeContact();
    const updatedContacts = [...existingContacts, newContact];
    await writeContacts(updatedContacts);
    console.log('✅ Yeni iletişim eklendi:', newContact);
    console.log(`📊 Toplam iletişim sayısı: ${updatedContacts.length}`);
    console.log(`Name: ${newContact.name} `);
    console.log(`Phone: ${newContact.phone}`);
    console.log(`Email: ${newContact.email}`);
    console.log(`Job: ${newContact.job}`);
    return newContact;
  } catch (error) {
    console.error('❌ İletişim eklenirken hata:', error.message);
    throw error;
  }
};

addOneContact();
