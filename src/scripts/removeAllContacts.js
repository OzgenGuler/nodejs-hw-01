import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const existingContacts = await readContacts();
    const initialCount = existingContacts.length;

    console.log('🗑️ Tüm İletişimleri Silme');
    console.log('==================');
    if (initialCount === 0) {
      console.log('📭 Henüz hiç iletişim bilgisi yok.');
      return [];
    }
    console.log(`📊 Toplam Silinecek İletişim Sayısı: ${initialCount}`);

    await writeContacts([]);

    console.log('✅ Tüm iletişimler başarıyla silindi.');
    console.log('💡 İpucu: Yeni iletişim eklemek için:');
    console.log('   • npm run add-one (tek iletişim)');
    console.log('   • npm run generate (5 rastgele iletişim)');

    const finalContacts = await readContacts();
    console.log(`🔍 Kontrol: Kalan iletişim sayısı: ${finalContacts.length}`);

    return finalContacts;
  } catch (error) {
    console.error('❌ İletişimler silinirken hata:', error.message);
    throw error;
  }
};

removeAllContacts();
