/**
 * [INPUT]: 依赖 data/categories.json 的六类 Seedance 2.5 工作流 slug
 * [OUTPUT]: 对外提供十四种语言的工作流说明查询函数 workflowDescription
 * [POS]: scripts/utils 的视频分类解释边界，集中管理本地化说明并保持渲染器只关心布局
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */
const DESCRIPTIONS: Record<string, Record<string, string>> = {
  "multimodal-reference-direction": {
    "en": "Assign a job to every reference - State which input controls identity, composition, movement, sound, or visual treatment",
    "es": "Asigna una función a cada referencia - Indica qué entrada controla identidad, composición, movimiento, sonido o tratamiento visual",
    "de": "Jeder Referenz eine Aufgabe geben - Festlegen, welcher Input Identität, Komposition, Bewegung, Ton oder Look steuert",
    "fr": "Attribuez un rôle à chaque référence - Précisez quelle entrée contrôle l'identité, la composition, le mouvement, le son ou le traitement visuel",
    "ja": "各参照素材に役割を割り当てる - 人物同一性、構図、動き、音、ルックのどれを制御する入力か明記する",
    "ko": "각 참조 자료에 역할 지정 - 어떤 입력이 정체성, 구도, 움직임, 사운드 또는 시각 처리를 제어하는지 명시합니다",
    "zh": "为每份参考素材指定职责 - 明确哪项输入负责身份、构图、运动、声音或视觉处理",
    "pt": "Atribua uma função a cada referência - Indique qual entrada controla identidade, composição, movimento, som ou tratamento visual",
    "it": "Assegna un ruolo a ogni riferimento - Indica quale input controlla identità, composizione, movimento, suono o trattamento visivo",
    "ar": "حدّد وظيفة لكل مرجع - وضّح أي إدخال يتحكم في الهوية أو التكوين أو الحركة أو الصوت أو المعالجة البصرية",
    "nl": "Geef elke referentie een taak - Bepaal welke input identiteit, compositie, beweging, geluid of visuele behandeling aanstuurt",
    "ru": "Назначьте роль каждому референсу - Укажите, какой вход управляет личностью, композицией, движением, звуком или визуальной обработкой",
    "tr": "Her referansa bir görev verin - Hangi girdinin kimliği, kompozisyonu, hareketi, sesi veya görsel işlemi yönettiğini belirtin",
    "pl": "Przypisz zadanie każdej referencji - Określ, które wejście steruje tożsamością, kompozycją, ruchem, dźwiękiem lub obróbką wizualną"
  },
  "long-take-blocking-camera-paths": {
    "en": "Shot briefs built around framing, camera path, blocking, pacing, reveals, and transitions.",
    "es": "Briefs de plano basados en encuadre, recorrido de cámara, blocking, ritmo, revelaciones y transiciones.",
    "de": "Shot-Briefings rund um Bildausschnitt, Kamerapfad, Blocking, Tempo, Enthüllungen und Übergänge.",
    "fr": "Briefs de plans construits autour du cadrage, du mouvement de caméra, de la mise en scène, du rythme, des révélations et des transitions.",
    "ja": "フレーミング、カメラパス、ブロッキング、テンポ、見せ場、トランジションを軸にしたショットブリーフ。",
    "ko": "프레이밍, 카메라 경로, 블로킹, 페이싱, 공개 순서, 전환을 중심으로 구성한 샷 브리프입니다.",
    "zh": "围绕构图、镜头路径、调度、节奏、揭示和转场构建的镜头简报。",
    "pt": "Briefings construídos em torno do enquadramento, percurso da câmara, marcação, ritmo, revelações e transições.",
    "it": "Brief per le inquadrature costruiti su composizione, percorso della camera, blocking, ritmo, rivelazioni e transizioni.",
    "ar": "موجزات لقطات تتمحور حول التأطير ومسار الكاميرا والتوزيع والإيقاع والكشف والانتقالات.",
    "nl": "Shotbriefings rond kadrering, camerapad, blocking, tempo, onthullingen en overgangen.",
    "ru": "Брифы кадров с композицией, маршрутом камеры, мизансценой, темпом, раскрытиями и переходами.",
    "tr": "Kadraj, kamera yolu, blocking, tempo, açığa çıkarmalar ve geçişler etrafında kurulan çekim brifleri.",
    "pl": "Briefy ujęć oparte na kadrowaniu, trasie kamery, blockingu, tempie, ujawnieniach i przejściach."
  },
  "dialogue-foley-music-timing": {
    "en": "Performance-led prompts where speech, acting, ambience, music, or synchronized sound carries the scene.",
    "es": "Prompts guiados por la interpretación en los que el habla, la actuación, el ambiente, la música o el sonido sincronizado sostienen la escena.",
    "de": "Performance-orientierte Prompts, in denen Sprache, Schauspiel, Atmosphäre, Musik oder synchroner Ton die Szene tragen.",
    "fr": "Prompts centrés sur l'interprétation, où la parole, le jeu, l'ambiance, la musique ou un son synchronisé portent la scène.",
    "ja": "台詞、演技、環境音、音楽、同期音がシーンを動かすパフォーマンス中心のプロンプト。",
    "ko": "대사, 연기, 분위기음, 음악 또는 동기화된 사운드가 장면을 이끄는 퍼포먼스 중심 프롬프트입니다.",
    "zh": "以对白、表演、环境声、音乐或同步声音推动场景的表演型提示词。",
    "pt": "Prompts em que a fala, a interpretação, o ambiente sonoro, a música ou o som sincronizado conduzem a cena.",
    "it": "Prompt guidati dalla performance, in cui parlato, recitazione, atmosfera, musica o suono sincronizzato sostengono la scena.",
    "ar": "مطالبات يقود فيها الكلام أو التمثيل أو الأجواء أو الموسيقى أو الصوت المتزامن المشهد.",
    "nl": "Performancegerichte prompts waarin spraak, acteren, ambiance, muziek of gesynchroniseerd geluid de scène dragen.",
    "ru": "Промпты на основе исполнения, где речь, актёрская игра, атмосфера, музыка или синхронный звук несут сцену.",
    "tr": "Konuşma, oyunculuk, ambiyans, müzik veya senkron sesin sahneyi taşıdığı performans odaklı promptlar.",
    "pl": "Prompty oparte na występie, w których mowę, aktorstwo, atmosferę, muzykę lub zsynchronizowany dźwięk niesie scena."
  },
  "narrative-continuity-character-performance": {
    "en": "Write continuity as a constraint - Protect identity, wardrobe, product geometry, spatial layout, and lighting across the sequence",
    "es": "Escribe la continuidad como restricción - Protege identidad, vestuario, geometría del producto, espacio e iluminación",
    "de": "Kontinuität als Regel formulieren - Identität, Kleidung, Produktgeometrie, Raum und Licht über die Sequenz schützen",
    "fr": "Formulez la continuité comme une contrainte - Préservez identité, tenue, géométrie du produit, espace et lumière",
    "ja": "連続性を制約として書く - 人物、衣装、製品形状、空間配置、照明をシーケンス全体で維持する",
    "ko": "연속성을 제약으로 작성 - 시퀀스 전반에서 인물, 의상, 제품 형태, 공간 배치와 조명을 보호합니다",
    "zh": "把连续性写成硬约束 - 在整段序列中保护身份、服装、产品几何、空间布局和光线",
    "pt": "Escreva a continuidade como restrição - Preserve identidade, guarda-roupa, geometria do produto, espaço e iluminação",
    "it": "Scrivi la continuità come vincolo - Proteggi identità, costumi, geometria del prodotto, spazio e illuminazione",
    "ar": "اكتب الاستمرارية كقيد - احمِ الهوية والملابس وهندسة المنتج وتخطيط المكان والإضاءة",
    "nl": "Schrijf continuïteit als beperking - Bescherm identiteit, kleding, productgeometrie, ruimte en belichting",
    "ru": "Запишите непрерывность как ограничение - Сохраняйте личность, костюм, геометрию продукта, пространство и свет",
    "tr": "Sürekliliği kısıt olarak yazın - Kimliği, kostümü, ürün geometrisini, mekânı ve ışığı koruyun",
    "pl": "Zapisz ciągłość jako ograniczenie - Chroń tożsamość, kostium, geometrię produktu, przestrzeń i oświetlenie"
  },
  "product-fashion-campaign-motion": {
    "en": "Commercial clips that keep a product, offer, garment, dish, device, or brand moment at the center of the motion.",
    "es": "Clips comerciales que mantienen un producto, una oferta, una prenda, un plato, un dispositivo o un momento de marca en el centro del movimiento.",
    "de": "Werbeclips, die ein Produkt, Angebot, Kleidungsstück, Gericht, Gerät oder einen Markenmoment ins Zentrum der Bewegung stellen.",
    "fr": "Clips publicitaires qui placent au centre du mouvement un produit, une offre, un vêtement, un plat, un appareil ou un moment de marque.",
    "ja": "製品、オファー、衣装、料理、デバイス、ブランドの瞬間を動きの中心に据えるCMクリップ。",
    "ko": "제품, 오퍼, 의상, 요리, 기기 또는 브랜드 순간을 움직임의 중심에 두는 광고 클립입니다.",
    "zh": "让产品、优惠、服装、菜肴、设备或品牌时刻成为运动中心的商业片段。",
    "pt": "Clips comerciais que mantêm um produto, uma oferta, uma peça de vestuário, um prato, um dispositivo ou um momento de marca no centro do movimento.",
    "it": "Clip commerciali che mantengono prodotto, offerta, capo d'abbigliamento, piatto, dispositivo o momento di brand al centro del movimento.",
    "ar": "مقاطع تجارية يبقى فيها المنتج أو العرض أو الزي أو الطبق أو الجهاز أو لحظة العلامة التجارية محور الحركة.",
    "nl": "Commerciële clips waarin een product, aanbod, kledingstuk, gerecht, apparaat of merkmoment centraal staat in de beweging.",
    "ru": "Рекламные клипы, в которых продукт, предложение, одежда, блюдо, устройство или брендовый момент находятся в центре движения.",
    "tr": "Ürünü, teklifi, giysiyi, yemeği, cihazı veya marka anını hareketin merkezinde tutan ticari klipler.",
    "pl": "Klipy komercyjne, które stawiają produkt, ofertę, ubranie, danie, urządzenie lub moment marki w centrum ruchu."
  },
  "video-editing-extension-restyling": {
    "en": "Existing-video workflows that restyle, extend, add, remove, replace, or redirect part of a scene while protecting continuity.",
    "es": "Flujos de vídeo existente que cambian el estilo, amplían, añaden, eliminan, sustituyen o redirigen parte de una escena mientras protegen la continuidad.",
    "de": "Workflows mit bestehendem Video, die einen Teil der Szene restylen, verlängern, hinzufügen, entfernen, ersetzen oder neu ausrichten und dabei die Kontinuität schützen.",
    "fr": "Workflows appliqués à une vidéo existante pour en restyler, prolonger, ajouter, supprimer, remplacer ou réorienter une partie de la scène tout en préservant la continuité.",
    "ja": "連続性を守りながら、既存映像のスタイル変更、延長、追加、削除、置換、シーンの方向変更を行うワークフロー。",
    "ko": "연속성을 보호하면서 기존 영상의 스타일을 바꾸고 확장, 추가, 제거, 교체하거나 장면의 방향을 바꾸는 워크플로입니다.",
    "zh": "重塑、延展、添加、移除、替换或改导现有视频场景，同时保护连续性的工作流。",
    "pt": "Fluxos para vídeo existente que mudam o estilo, prolongam, adicionam, removem, substituem ou redirecionam parte de uma cena, protegendo a continuidade.",
    "it": "Workflow su video esistenti che ne cambiano lo stile, li estendono, aggiungono, rimuovono, sostituiscono o reindirizzano una parte della scena proteggendo la continuità.",
    "ar": "سير عمل للفيديو الموجود يعيد تصميم الأسلوب أو يمدد المشهد أو يضيف أو يزيل أو يستبدل أو يغيّر اتجاه جزء منه مع حماية الاستمرارية.",
    "nl": "Workflows voor bestaand videomateriaal die een scène restylen, verlengen, elementen toevoegen, verwijderen, vervangen of omleiden met behoud van continuïteit.",
    "ru": "Работа с готовым видео: рестайлинг, продление, добавление, удаление, замена или перенаправление части сцены с сохранением непрерывности.",
    "tr": "Sürekliliği koruyarak mevcut videoyu yeniden stillendiren, uzatan, ekleyen, kaldıran, değiştiren veya sahnenin bir kısmını yönlendiren iş akışları.",
    "pl": "Workflowy istniejącego wideo, które restylizują, wydłużają, dodają, usuwają, zastępują lub przekierowują część sceny przy ochronie ciągłości."
  }
};

export function workflowDescription(slug: string, locale: string): string {
  return DESCRIPTIONS[slug]?.[locale] || DESCRIPTIONS[slug]?.en || "";
}
