import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const removeLastContact = async () => {
  try {
    // Mevcut iletişimleri oku
    const contacts = await readContacts();

    console.log('🗑️  Son İletişimi Silme');
    console.log('======================');
    console.log(`📊 Mevcut iletişim sayısı: ${contacts.length}`);

    // Eğer hiç iletişim yoksa
    if (contacts.length === 0) {
      console.log('📭 Silinecek iletişim bulunamadı.');
      console.log('💡 Veritabanı zaten boş.');
      console.log('💡 Yeni iletişim eklemek için:');
      console.log('   • npm run add-one (tek iletişim)');
      console.log('   • npm run generate (5 rastgele iletişim)');
      return contacts;
    }

    // Son iletişimi al (silinecek olan)
    const lastContact = contacts[contacts.length - 1];

    console.log('🎯 Silinecek iletişim:');
    console.log(`   👤 Ad: ${lastContact.name}`);
    console.log(`   📧 Email: ${lastContact.email}`);
    console.log(`   📞 Telefon: ${lastContact.phone}`);
    console.log(`   💼 Meslek: ${lastContact.job}`);
    console.log(`   🆔 ID: ${lastContact.id}`);

    // Son elemanı çıkar (pop yerine slice kullanarak orijinal diziyi koruyoruz)
    const updatedContacts = contacts.slice(0, -1);

    // Güncellenmiş listeyi dosyaya yaz
    await writeContacts(updatedContacts);

    console.log('✅ Son iletişim başarıyla silindi!');
    console.log(`📊 Yeni iletişim sayısı: ${updatedContacts.length}`);

    if (updatedContacts.length === 0) {
      console.log('📭 Veritabanı artık boş.');
    } else {
      console.log('💡 Kalan iletişimleri görmek için: npm run get-all');
    }

    return updatedContacts;
  } catch (error) {
    console.error('❌ Son iletişim silinirken hata:', error.message);
    throw error;
  }
};

removeLastContact();
