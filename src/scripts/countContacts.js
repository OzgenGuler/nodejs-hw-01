import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    const count = contacts.length;
    console.log('🔢 İletişim Sayacı');
    console.log('==================');
    console.log(`📊 Toplam iletişim sayısı: ${count}`);
    if (count === 0) {
      console.log('📭 Veritabanında hiç iletişim yok.');
      console.log('💡 İpucu: Yeni iletişim eklemek için:');
      console.log('   • npm run add-one (tek iletişim)');
      console.log('   • npm run generate (5 rastgele iletişim)');
    } else if (count === 1) {
      console.log('👤 Veritabanında 1 iletişim var.');
    } else {
      console.log(`👥 Veritabanında ${count} iletişim var.`);
    }

    return count;
  } catch (error) {
    console.error('❌ İletişim sayısı hesaplanırken hata:', error.message);
    throw error;
  }
};

countContacts();
