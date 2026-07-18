<a href="https://github.com/imagineVid/Awesome-seedance-2-5-prompts-and-skills">
  <img src="public/images/seedance-2-5-prompt-skills-cover.png" alt="Seedance 2.5 Prompt Skills" width="100%" />
</a>

> Seedance 2.5 için kaynakları doğrulanabilir çekim brifleri, hareket kalıpları ve görsel-işitsel iş akışları kütüphanesi.
# Awesome Seedance 2.5 Promtları ve Becerileri

[![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome)
[![GitHub stars](https://img.shields.io/github/stars/imagineVid/Awesome-seedance-2-5-prompts-and-skills?style=social)](https://github.com/imagineVid/Awesome-seedance-2-5-prompts-and-skills)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Update README](https://github.com/imagineVid/Awesome-seedance-2-5-prompts-and-skills/actions/workflows/update-readme.yml/badge.svg)](https://github.com/imagineVid/Awesome-seedance-2-5-prompts-and-skills/actions)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](docs/CONTRIBUTING.md)

> Brifi inceleyin, sonucu izleyin, üreticiyi takip edin ve yüzeysel stili kopyalamak yerine yönetmenlik mantığını yeniden kullanın.

> **Atıf ve düzeltmeler:** Yayımlanan her örnek üreticisine ve kanonik kaynağa bağlantı verir. Haklar sahiplerinde kalır. Atıf değişikliği veya kaldırma için issue açın.

---

[![English](https://img.shields.io/badge/English-Click%20to%20View-lightgrey)](README.md) [![Español](https://img.shields.io/badge/Espa%C3%B1ol-Click%20to%20View-lightgrey)](README.es.md) [![Português](https://img.shields.io/badge/Portugu%C3%AAs-Click%20to%20View-lightgrey)](README.pt.md) [![Italiano](https://img.shields.io/badge/Italiano-Click%20to%20View-lightgrey)](README.it.md) [![Deutsch](https://img.shields.io/badge/Deutsch-Click%20to%20View-lightgrey)](README.de.md) [![Français](https://img.shields.io/badge/Fran%C3%A7ais-Click%20to%20View-lightgrey)](README.fr.md) [![العربية](https://img.shields.io/badge/%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-Click%20to%20View-lightgrey)](README.ar.md) [![日本語](https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-Click%20to%20View-lightgrey)](README.ja.md) [![한국어](https://img.shields.io/badge/%ED%95%9C%EA%B5%AD%EC%96%B4-Click%20to%20View-lightgrey)](README.ko.md) [![简体中文](https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-Click%20to%20View-lightgrey)](README.zh.md)
[![Nederlands](https://img.shields.io/badge/Nederlands-Click%20to%20View-lightgrey)](README.nl.md) [![Русский](https://img.shields.io/badge/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-Click%20to%20View-lightgrey)](README.ru.md) [![Türkçe](https://img.shields.io/badge/T%C3%BCrk%C3%A7e-Current-brightgreen)](README.tr.md) [![Polski](https://img.shields.io/badge/Polski-Click%20to%20View-lightgrey)](README.pl.md)

---

## Seedance 2.5 ile üret

**[ImagineVid üzerinde Seedance 2.5 iş akışını aç](https://imaginevid.io/seedance-2-0)**

Bu depo lansman heyecanı yerine doğrulanabilir kanıtlar üzerine kuruludur. Seedance 2.5 için özel bir rota açılana kadar bağlantılı ImagineVid sayfası mevcut Seedance 2.0 iş akışını açar.

Lansman iddiası model kanıtı değildir. Bir vaka ancak kaynağı Seedance 2.5'i açıkça tanımlıyor ve yeniden üretilebilir bir yöntemi öğretecek kadar prompt ile video sunuyorsa eklenir.

| Üretim ihtiyacı | Kanıt kütüphanesi | ImagineVid iş akışı |
|---------|--------------|---------------------|
| Örnek inceleme | Prompt, sonuç ve kaynak | Üret ve karşılaştır |
| Keşif | Depo metin araması | İş akışı odaklı keşif |
| Üretim | - | Seedance 2.5'ı aç |
| Okuma | GitHub uyumlu Markdown | Tarayıcı üretim çalışma alanı |
| Video iş akışları | - | Üretim filtreleri |


### Üretim iş akışına göre göz at

- [**Çok modlu referans yönetimi**](#workflow-multimodal-reference-direction) - Her referansa bir görev verin - Hangi girdinin kimliği, kompozisyonu, hareketi, sesi veya görsel işlemi yönettiğini belirtin
- [**Uzun çekim bloklama ve kamera yolları**](#workflow-long-take-blocking-camera-paths) - Kadraj, kamera yolu, blocking, tempo, açığa çıkarmalar ve geçişler etrafında kurulan çekim brifleri.
- [**Diyalog, Foley ve müzik zamanlaması**](#workflow-dialogue-foley-music-timing) - Konuşma, oyunculuk, ambiyans, müzik veya senkron sesin sahneyi taşıdığı performans odaklı promptlar.
- [**Anlatı sürekliliği ve karakter performansı**](#workflow-narrative-continuity-character-performance) - Sürekliliği kısıt olarak yazın - Kimliği, kostümü, ürün geometrisini, mekânı ve ışığı koruyun
- [**Ürün, moda ve kampanya hareketi**](#workflow-product-fashion-campaign-motion) - Ürünü, teklifi, giysiyi, yemeği, cihazı veya marka anını hareketin merkezinde tutan ticari klipler.
- [**Video düzenleme, uzatma ve yeniden stillendirme**](#workflow-video-editing-extension-restyling) - Sürekliliği koruyarak mevcut videoyu yeniden stillendiren, uzatan, ekleyen, kaldıran, değiştiren veya sahnenin bir kısmını yönlendiren iş akışları.

---

## İçindekiler

- [Seedance 2.5 ile üret](#seedance-25-ile-üret)
- [Seedance 2.5 nedir?](#seedance-25-nedir)
- [Koleksiyon durumu](#koleksiyon-durumu)
- [Öne çıkan video promptları](#community-featured-prompts)
- [Topluluk video promptları](#community-prompt-cases)
- [Doğrulanmış örnek gönder](#doğrulanmış-örnek-gönder)
- [Lisans](#lisans)
- [Üretici kredileri](#üretici-kredileri)
- [Depo büyümesi](#depo-büyümesi)

---

## Seedance 2.5 nedir?

**Seedance 2.5**, Temmuz 2026 tarihli haberlerde açıklanan yeni nesil Seedance video modeli için kullanılan addır. ByteDance'in herkese açık Seed model kataloğu henüz tam bir Seedance 2.5 model kartı, kararlı API kimliği veya ayrıntılı açık teknik özellik sunmuyor. Bu nedenle depo, doğrulanmış birincil materyali topluluk iddialarından ayırır ve ByteDance kalıcı belgeler yayımladığında kapsamını günceller.

Prompt kitaplığı, gerçek bir sonuçta incelenebilen unsurlara odaklanır: referansların rolü, görünür eylem, kamera yolu, ritim, diyalog ve ses ipuçları, süreklilik kısıtları ve kurgu niyeti. Sayısal yetenek iddiaları kararlı birincil kaynağa bağlanana kadar koleksiyona alınmaz.

- **Her referansa bir görev verin** - Hangi girdinin kimliği, kompozisyonu, hareketi, sesi veya görsel işlemi yönettiğini belirtin
- **Görünür neden ve sonucu açıklayın** - Her eylemi izleyicinin göreceği hareket, tepki veya çevresel değişimle ilişkilendirin
- **Sahneyi vuruşlara bölün** - Hikâyeyi özetlemek yerine gözlemlenebilir anları sıraya koyun
- **Ses parçasını yönetin** - Diyalog, Foley, ambiyans ve müziği yalnızca sahneyi ilerlettiği yerde belirtin
- **Kamera yolunu tanımlayın** - Kadrajı, hareketi, konu mesafesini ve önemli çekimler arasındaki geçişi belirleyin
- **Sürekliliği kısıt olarak yazın** - Kimliği, kostümü, ürün geometrisini, mekânı ve ışığı koruyun

**Güncel referanslar:** [Seedance 2.5 release reporting](https://www.theinformation.com/briefings/bytedance-unveils-seedance-2-5-video-model) · [ByteDance Seed model catalog](https://seed.bytedance.com/en/models) · [Available Seedance workflow on ImagineVid](https://imaginevid.io/seedance-2-0)

### Promptu çekim şablonuna dönüştür

Yeniden kullanılabilir video promptları sahne değişkenlerini yönetmenlik mantığından ayırır. Konuyu, ortamı, söylenen cümleyi veya ürünü değiştirirken denenmiş kamera yolunu, vuruş yapısını, ses planını ve süreklilik kurallarını koruyun.

**Şablon örüntüsü:**
```
[DURATION + ASPECT RATIO]. [SUBJECT] performs [VISIBLE ACTION] in [SETTING]. Camera: [FRAMING + MOVE]. Beats: [TIMED ACTIONS]. Audio: [DIALOGUE + FOLEY + AMBIENCE]. Preserve: [IDENTITY / PRODUCT / LAYOUT]. Avoid: [FAILURE MODES].
```

Bir eylem ve bir kamera fikriyle başlayın. Zamanlama, ses ve koruma kısıtlarını yalnızca görünür bir üretim ihtiyacını çözdüklerinde ekleyin; sonra üretimler arasında tek seferde bir değişkeni değiştirin.

---

## Koleksiyon durumu

<div align="center">

| Koleksiyon alanı | Güncel değer |
|--------|-------|
| Doğrulanmış örnekler | **3** |
| Editör seçimi | **2** |
| Oluşturulma | **18 Temmuz 2026 Cumartesi 20:55:11 UTC** |

</div>

---

<a id="community-featured-prompts"></a>

## Öne çıkan video promptları

> Yeniden üretilebilirlik, hareket açıklığı ve üretim faydasına göre seçildi

<a id="prompt-1"></a>

### #1: Sakin sokaklarda altın saat bisiklet yolculuğu

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Featured](https://img.shields.io/badge/Featured-gold-gold)

#### İş akışı neden önemli

Doğal ışıklı gündelik bir mahallede tek bisikletçiyi ve yumuşak takip hareketini anlaşılır tutan kısa bir çekim brifi.

#### Kaynak prompt

```
A young East Asian woman riding a bicycle through quiet city streets, casually exploring the neighborhood, cinematic, natural daylight, realistic, smooth camera movement.
```

#### Video

<div align="center">
<a href="https://video.twimg.com/ext_tw_video/2074956835250122752/pu/vid/avc1/1280x720/GGVJY84yqzPpP7dZ.mp4?tag=26"><img src="https://pbs.twimg.com/ext_tw_video_thumb/2074956835250122752/pu/img/fiGWvsKanTErJ-Ht.jpg" height="420" alt="Sakin sokaklarda altın saat bisiklet yolculuğu - Motion preview"></a>

*Videoyu açmak için önizlemeye tıklayın* · **[▶ Videoyu izle →](https://video.twimg.com/ext_tw_video/2074956835250122752/pu/vid/avc1/1280x720/GGVJY84yqzPpP7dZ.mp4?tag=26)**
</div>

#### Kanıt

- **Üretici:** [@noorwithwifi](https://x.com/noorwithwifi)
- **Kanonik kaynak:** [Kanonik kaynak](https://x.com/noorwithwifi/status/2074956913075491029)
- **Yayımlandı:** 8 Temmuz 2026
- **Prompt dili:** en

**[Bu yönlendirmeyle oluştur · ImagineVid](https://imaginevid.io/seedance-2-0)**

---

<a id="prompt-3"></a>

### #2: İki referanslı ve zaman kodlu endüstriyel dövüş

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Featured](https://img.shields.io/badge/Featured-gold-gold)
![Reference](https://img.shields.io/badge/Reference-Image%20Needed-orange)

#### İş akışı neden önemli

İki dövüşçüyü, bloklamayı, kamera değişimlerini, ağır çekimi, darbeleri ve çevre tepkilerini on dört saniyede koordine eden yoğun bir aksiyon brifi.

#### Kaynak prompt

```
Aesthetic Tone: A stark industrial wasteland style featuring low-saturation cool grays and steel-blue hues, contrasted with the heavy, rugged textures of industrial machinery. Lighting & Shadow: Intense overhead lighting (mimicking a cage fight) casts sharp, deep shadows across the concrete floor and the characters' faces, emphasizing a sense of raw power.

[Timeline: Detailed Action & Camera Instructions]

00:00-00:01 | Pre-fight Standoff
[Combat Action]: @ Image1 and @ Image2 assume low-center-of-gravity fighting stances; their muscles are taut and tense.
[Camera Technique]: A horizontal pan (medium shot) sweeps from right to left across both characters, establishing the space of confrontation.
[Visual Effects]: Semi-transparent "GAME START" text floats in mid-air, featuring a metallic sheen and worn, distressed edges.

00:01-00:03 | Flying Kick & Cross-Arm Block
[Combat Action]: @ Image1 rapidly launches a fierce high side-kick at a 45-degree upward angle. @ Image2 instantly slides sideways, crossing arms into a shield-like "X" formation to block the incoming kick with solid, bone-jarring force.
[Camera Technique]: A whip zoom locks onto the point of impact, transitioning to slow motion (quarter speed) at the exact moment the leg and arms collide.
[Visual Effects]: The point of impact triggers a visible air-distortion ripple, accompanied by a scattering of sparks and dust particles generated by the friction.

00:03-00:06 | Close-Quarters Blitz & Facial Impact
[Combat Action]: After absorbing the blow, @ Image2 immediately counters with a rapid-fire "one-inch punch" combo, striking from both left and right. @ Image1 dodges hastily. @ Image2 follows through with a powerful right hook, fueled by hip rotation, that slams into @ Image1's left cheek, causing facial distortion and sending a spray of saliva and blood droplets flying.
[Camera Technique]: Handheld camera work sways with the body, creating a documentary-style shaky-cam aesthetic; micro-second screen shake marks the moment of a heavy punch impact.
[Visual Effects]: High-frequency "impact frames" (staccato light and shadow flashes) occur the instant the face is struck; sweat appears as glowing particles under side lighting.

00:06-00:10 | Pursuit and Liver-Targeting Knee Strike
[Action]: @ Image2 denies the opponent a chance to recover, stepping in to close the distance; the right hand hooks the back of @ Image1's neck and pulls downward while the right knee drives violently upward, delivering a knee strike to the liver. @ Image1 retches, body arching and curling in pain.
[Camera Technique]: Extreme low-angle shot looking upward to emphasize the power and impact of the knee strike.
[Visual Effects]: Realistic fabric indentation and intense creasing appear the moment the knee makes contact.

00:10-00:12 | Head-Clinch Slam
[Action]: @ Image2 locks both hands around @ Image1's head, twists the torso with leg-driven power, and executes a 180-degree arc throw, slamming @ Image1's head and upper body against the concrete ground.
[Camera Technique]: Rapid tilt down; the camera tracks the trajectory of the falling figure.
[Visual Effects]: On impact, localized cracks appear on the ground and a dense cloud of dust and grit explodes outward.

00:12-00:14 | Final Struggle
[Action]: @ Image1 lies in the dust, curled in pain; the right hand weakly clutches the abdomen, the chest heaves with labored breathing, and the eyes lose focus.
[Camera Technique]: Slow overhead close-up; the camera rotates slightly and pulls back with a crane move.
[Visual Effects]: Realistic airborne dust particles float in front of the lens, with subtle film grain across the image.
```

#### Video

<div align="center">
<a href="https://video.twimg.com/amplify_video/2077336525373923328/vid/avc1/1920x1080/wlKvDYYr__Dylt21.mp4?tag=28"><img src="https://pbs.twimg.com/amplify_video_thumb/2077336525373923328/img/X_8KtfVsQRT45Kfa.jpg" height="420" alt="İki referanslı ve zaman kodlu endüstriyel dövüş - Motion preview"></a>

*Videoyu açmak için önizlemeye tıklayın* · **[▶ Videoyu izle →](https://video.twimg.com/amplify_video/2077336525373923328/vid/avc1/1920x1080/wlKvDYYr__Dylt21.mp4?tag=28)**
</div>

#### Kanıt

- **Üretici:** [@AIReelofficial](https://x.com/AIReelofficial)
- **Kanonik kaynak:** [Kanonik kaynak](https://x.com/AIReelofficial/status/2077729460644872389)
- **Yayımlandı:** 16 Temmuz 2026
- **Prompt dili:** en

**[Bu yönlendirmeyle oluştur · ImagineVid](https://imaginevid.io/seedance-2-0)**

---

<a id="community-prompt-cases"></a>

## Topluluk video promptları

> Kaynak tarihi ve editoryal değere göre sıralanır.

<a id="workflow-multimodal-reference-direction"></a>

### Çok modlu referans yönetimi (1)

Her referansa bir görev verin - Hangi girdinin kimliği, kompozisyonu, hareketi, sesi veya görsel işlemi yönettiğini belirtin

**Öne çıkan video promptları**

- [İki referanslı ve zaman kodlu endüstriyel dövüş](#prompt-3)

<a id="workflow-long-take-blocking-camera-paths"></a>

### Uzun çekim bloklama ve kamera yolları (1)

Kadraj, kamera yolu, blocking, tempo, açığa çıkarmalar ve geçişler etrafında kurulan çekim brifleri.

<a id="prompt-2"></a>

#### #1: Siberpunk hacker robotla otuz saniyelik tek çekim

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### İş akışı neden önemli

Tek bir özne, çalışma alanı ve kesintisiz eylemin uzun çekime nasıl yayıldığını incelemek için bilinçli olarak kısa tutulmuş bir prompt.

##### Kaynak prompt

```
Cyberpunk hacker robot working in front of many monitors.
```

##### Video

<div align="center">
<a href="https://video.twimg.com/ext_tw_video/2077113718106648577/pu/vid/avc1/1280x720/twNk6uhZZRnoFngO.mp4?tag=12"><img src="https://pbs.twimg.com/ext_tw_video_thumb/2077113718106648577/pu/img/EyN9swzCeqGu4nZy.jpg" height="420" alt="Siberpunk hacker robotla otuz saniyelik tek çekim - Motion preview"></a>

*Videoyu açmak için önizlemeye tıklayın* · **[▶ Videoyu izle →](https://video.twimg.com/ext_tw_video/2077113718106648577/pu/vid/avc1/1280x720/twNk6uhZZRnoFngO.mp4?tag=12)**
</div>

##### Kanıt

- **Üretici:** [@thedoomguy_ai](https://x.com/thedoomguy_ai)
- **Kanonik kaynak:** [Kanonik kaynak](https://x.com/thedoomguy_ai/status/2077113772959740310)
- **Yayımlandı:** 14 Temmuz 2026
- **Prompt dili:** en

**[Bu yönlendirmeyle oluştur · ImagineVid](https://imaginevid.io/seedance-2-0)**

---

<a id="workflow-narrative-continuity-character-performance"></a>

### Anlatı sürekliliği ve karakter performansı (1)

Sürekliliği kısıt olarak yazın - Kimliği, kostümü, ürün geometrisini, mekânı ve ışığı koruyun

**Öne çıkan video promptları**

- [Sakin sokaklarda altın saat bisiklet yolculuğu](#prompt-1)

## Doğrulanmış örnek gönder

Gerçek bir yönetmenlik kalıbı öğreten bir Seedance 2.5 örneği mi buldunuz? Promptu, oynatılabilir sonucu, üreticiyi, kaynağı, model kanıtını ve giriş modunu GitHub Issues üzerinden gönderin.

### GitHub issue

1. [**Video promptu gönder**](https://github.com/imagineVid/Awesome-seedance-2-5-prompts-and-skills/issues/new?template=submit-prompt.yml)
2. Tam brifi, kaynağı, üreticiyi, model kanıtını ve oynatılabilir medyayı sağlayın
3. Bir maintainer kökeni, video değerini, kapsamı ve kopyaları kontrol eder
4. Onaylanan örnekler yerel veri kaynağına normalize edilir
5. Generator tüm kalite kontrolleri geçince örneği yayımlar

**Editör kuralı:** Lansman iddiası model kanıtı değildir. Bir vaka ancak kaynağı Seedance 2.5'i açıkça tanımlıyor ve yeniden üretilebilir bir yöntemi öğretecek kadar prompt ile video sunuyorsa eklenir.

Göndermeden önce [CONTRIBUTING.md](docs/CONTRIBUTING.md) dosyasını okuyun.

---

## Lisans

ImagineVid'in editoryal metni ve kodu [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) lisanslıdır. Üçüncü taraf promptları, üretici kimlikleri, ticari markalar, görseller ve videolar ilgili sahiplerinde kalır ve bu lisansa dahil değildir.

---

## Üretici kredileri

<details>
<summary>Community creators we thank (3)</summary>

[@AIReelofficial](https://x.com/AIReelofficial) · [@noorwithwifi](https://x.com/noorwithwifi) · [@thedoomguy_ai](https://x.com/thedoomguy_ai)

</details>

---

## Depo büyümesi

[![GitHub stars](https://img.shields.io/github/stars/imagineVid/Awesome-seedance-2-5-prompts-and-skills?style=for-the-badge&logo=github&label=GitHub%20Stars)](https://github.com/imagineVid/Awesome-seedance-2-5-prompts-and-skills/stargazers)

**[Depo büyümesi](https://star-history.com/#imagineVid/Awesome-seedance-2-5-prompts-and-skills&Date)**

---

<div align="center">

**[Seedance 2.5 ile üret](https://imaginevid.io/seedance-2-0)** •
**[Doğrulanmış örnek gönder](https://github.com/imagineVid/Awesome-seedance-2-5-prompts-and-skills/issues/new?template=submit-prompt.yml)** •
**[Koleksiyona yıldız ver](https://github.com/imagineVid/Awesome-seedance-2-5-prompts-and-skills)**

<sub>Sürümlenen yerel veriden oluşturulma zamanı 2026-07-18T20:55:11.720Z</sub>

</div>
