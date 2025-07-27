import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (count = 5) => {
  try {
    // Mevcut iletişimleri oku
    const existingContacts = await readContacts();

    // Yeni iletişimler oluştur
    const newContacts = [];
    for (let i = 0; i < count; i++) {
      newContacts.push(createFakeContact());
    }

    // Mevcut iletişimlerle birleştir
    const allContacts = [...existingContacts, ...newContacts];

    // Dosyaya yaz
    await writeContacts(allContacts);

    console.log(`✅ ${count} yeni iletişim oluşturuldu!`);
    console.log(`📊 Toplam iletişim sayısı: ${allContacts.length}`);

    return allContacts;
  } catch (error) {
    console.error('❌ İletişim oluşturulurken hata:', error.message);
    throw error;
  }
};

generateContacts();
