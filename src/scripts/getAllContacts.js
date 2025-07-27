import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log('📋 Tüm İletişimler:');
    console.log('==================');
    if (contacts.length === 0) {
      console.log('📭 Henüz hiç iletişim bilgisi yok.');
      console.log('💡 Yeni iletişim eklemek için: npm run add-one');
      console.log('💡 Birden fazla iletişim oluşturmak için: npm run generate');
    } else {
      console.log(`📊 Toplam ${contacts.length} iletişim bulundu:\n`);

      contacts.forEach((contact, index) => {
        console.log(`   🆔 ${contact.id}`);
        console.log(`${index + 1}. 👤 ${contact.name}`);
        console.log(`   📞 ${contact.phone}`);
        console.log(`   📧 ${contact.email}`);
        console.log(`   💼 ${contact.job}`);
        console.log('   ' + '─'.repeat(40));
      });
    }

    return contacts;
  } catch (error) {
    console.error('❌ İletişimler okunurken hata:', error.message);
    throw error;
  }
};

getAllContacts();
