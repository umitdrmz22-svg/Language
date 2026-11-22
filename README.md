# Language

Reklamsız, çevrimdışı bir Android dil çalışma defteri. Uygulama dili İngilizce, Almanca, Türkçe veya İspanyolca olabilir. Öğrenme ve açıklama dili birbirinden bağımsız seçilir. Örneğin arayüz Türkçeyken Almanca açıklamalarla İspanyolca çalışılabilir.

## İlk açılış ve günlük kullanım

1. Sağ üstten arayüz dilini seç. **Kursu değiştir** üzerinden bildiğin dili ve öğrenmek istediğin dili belirle.
2. **Kurs** sekmesinde A1–C2 arasından bir seviye aç. Her seviyede dört özgün okuma ve yazma senaryosu vardır. İstediğin seviyeden başlayabilirsin.
3. Bir derste dört kelime veya ifade, bir okuduğunu anlama sorusu, bir çeviri ve bir yazma görevi bulunur. Ders duraklatılabilir. Farklı bir yönde çalıştığında o yönün ilerlemesi açılır.
4. **Tekrar** ekranı zamanı gelen kelimeleri getirir. Doğru hatırlanan bir kelime 1, 3, 7, 15, 30 ve 60 günlük aralıklarla yeniden gelir. Yanlış cevap on dakika sonra yeniden çalışılabilir.
5. **Günlük** seçilen seviyeden her gün bir konu açar. Konu değiştirilebilir. Yazılar cihazda tarih, ders ve öğrenme yönüyle saklanır. Örnek yanıt ve seviyeye özgü kontrol ölçütü öğrencinin kendi yazısını değerlendirmesine yardım eder.
6. **Kurs** sekmesindeki dil bilgisi alıştırmaları hedef dile göre değişir. **Dinleme ve dikte** bölümünde bir cümleyi dinleyip yazabilir ve aslıyla karşılaştırabilirsin. Ses için Android'de ilgili dile ait yerel bir sesin kurulu olması gerekir.

## Kelime Atlası

Her öğrenme yönünde 10.000 farklı hedef kelimeyi çevrimdışı ara. Kelime veya anlamına göre arayabilir, sözcük türünü seçebilir, kelimeyi kaydedebilir ve on soruya kadar süren eşleştirme ve yazım turları yapabilirsin. Altı konu destesinde iki dilde örnek cümle bulunur. Anlamlar, varsa söyleniş bilgisi ve çekimli biçimler kelime ayrıntısında açılır. Zamanı gelen kelimeler ve duraklatılan tur ilgili öğrenme yönünde saklanır. Atlas kelimeleri tek tek CEFR seviyelendirmesinden geçmemiştir. [Veri ve görsel kaynakları](WORD-SOURCES.md).

## İçerik kapsamı

Altı yön desteklenir: DE→ES, ES→DE, DE→EN, EN→DE, EN→ES ve ES→EN. Aynı senaryonun farklı yönleri aynı özgün içerikten üretilir. Her yönde 24 ders, 96 kelime/ifade konumu ve 24 yazma görevi vardır. Her hedef dil ve seviyede üç açıklamalı soru, toplamda 54 dil bilgisi sorusu bulunur.

| Seviye | Dört dersin konusu | Yazarken odak |
| --- | --- | --- |
| A1 | İstasyon, kafede sipariş, komşuyla tanışma, alışveriş listesi | Kişi, yer ve basit ihtiyaç bildirme |
| A2 | Randevu değiştirme, kayıp eşya, otelde oda değiştirme, yol tarifi | Zaman, neden ve kısa istek |
| B1 | Vardiya devri, ev seçme, çalışma alışkanlığı, geciken paket | Olay sırası, gerekçe ve sonuç |
| B2 | Anket yorumu, teslim tarihi, mahalle bahçesi, örtük eleştiri | Kanıt, koşul, görüş ve karşı görüş |
| C1 | Nedensellik, tutanak dili, diplomatik yanıt, katılım engelleri | Bulgu ve çıkarım ayrımı, hitap edilen kişiye göre üslup |
| C2 | Koşullu vaat, örtük ironi, çelişen kaynaklar, aktarımda mesafe | Kaynak sentezi, ima ve belirsizliği koruma |

Bu sürüm her seviyeden örnek çalışma sunar. Kapsamlı A1–C2 müfredatı, standartlaştırılmış seviye ölçümü ve yeterlik sertifikası sunulmaz. Çeviride kayıtlı seçeneklere uymayan bir ifade örnekle karşılaştırmaya açılır. Serbest yazıya otomatik dil yeterliği puanı verilmez.

## Rakiplerden çıkan tasarım kararları

| İncelenen akış | Bu üründeki karar |
| --- | --- |
| Duolingo'nun tek görevli alıştırma ekranı, öğrenme yolu ve beceri tekrarı | Başlangıç ekranında tek devam düğmesi; seviyeler ve dersler bir dokunuşla açılır. |
| Busuu'nun örnek ve alıştırmayı buluşturan dil bilgisi tekrarı | Kısa boşluk doldurma, doğru biçim ve çıkış dilinde açıklama. |
| Babbel'in zamana yayılmış tekrarı ve gündelik senaryoları | Öğrenme yönüne göre bir kelime defteri; hatırlama durumuna göre tekrar tarihi; her senaryoda bir metin üretimi. |

Resmî kaynaklar: [Duolingo ders ekranları](https://blog.duolingo.com/duolingo-101-how-to-learn-a-language-on-duolingo/), [Busuu Grammar Review](https://help.busuu.com/hc/en-us/articles/12575126438674-What-is-Grammar-Review), [Babbel tekrar sistemi](https://support.babbel.com/hc/en-gb/articles/205600228-Vocab-workout-Review), [Avrupa Konseyi CEFR Companion Volume](https://rm.coe.int/common-european-frameworkof-reference-for-languages-learning-teaching/16809ea0d4).

## Geliştirme ve yayın

Android 8.0+ ve güncel Android System WebView kullanılır. Ders içerikleri, arayüz ve uygulama simgesi pakete dahildir. Sunucu, API anahtarı, reklam SDK'sı, satın alma ve hesap gerekmez. Android uygulaması internet veya mikrofon izni istemez. İlerleme ve günlük bu uygulamadaki cihaz verisidir; uygulama verilerini silmek veya uygulamayı kaldırmak bunları siler.

GitHub → Actions → **Android build** yalnız elle başlatılır. **test-apk** kurulabilir bir test paketi oluşturur. **signed-play-aab** seçeneği kalıcı Play yükleme anahtarını temsil eden dört repository secret gerektirir: ANDROID_KEYSTORE_BASE64, ANDROID_KEYSTORE_PASSWORD, ANDROID_KEY_ALIAS, ANDROID_KEY_PASSWORD. Anahtar dosyalarını depoya koyma. Yerel Gradle sürümü 8.11.1, JDK 17, compile/target SDK 36. Üretim kimliği de.defidev.language, test kimliği de.defidev.language.preview.

İçeriği genişletirken öncelik her hedef dil için anadili editörüyle yanıt varyantlarını gözden geçirmek, ardından her kazanım için yeni dinleme metinleri, bağımsız yazma görevleri ve daha uzun okuma metinleri eklemektir. Play açıklamasındaki seviye iddiası doğrulanmış içerik kapsamını yansıtmalıdır.
