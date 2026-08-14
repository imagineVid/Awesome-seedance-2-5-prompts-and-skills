<a href="https://github.com/imagineVid/Awesome-seedance-2-5-prompts-and-skills">
  <img src="public/images/seedance-2-5-prompt-skills-cover.png" alt="Seedance 2.5 Prompt Skills" width="100%" />
</a>

> Seedance 2.5のショットブリーフ、モーションパターン、視聴覚ワークフローを集めた、出典を検証できるライブラリ。
# Awesome Seedance 2.5 Prompts & Skills

[![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome)
[![GitHub stars](https://img.shields.io/github/stars/imagineVid/Awesome-seedance-2-5-prompts-and-skills?style=social)](https://github.com/imagineVid/Awesome-seedance-2-5-prompts-and-skills)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Update README](https://github.com/imagineVid/Awesome-seedance-2-5-prompts-and-skills/actions/workflows/update-readme.yml/badge.svg)](https://github.com/imagineVid/Awesome-seedance-2-5-prompts-and-skills/actions)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](docs/CONTRIBUTING.md)

> ブリーフを読み、結果を見て、クリエイターをたどり、表面的なスタイルではなく演出ロジックを再利用しましょう。

> **クレジットと訂正：** 公開された各ケースには、クリエイターと正規の出典へのリンクがあります。権利は各権利者に帰属します。クレジットの変更や削除はissueでお知らせください。

---

[![English](https://img.shields.io/badge/English-Click%20to%20View-lightgrey)](README.md) [![Español](https://img.shields.io/badge/Espa%C3%B1ol-Click%20to%20View-lightgrey)](README.es.md) [![Português](https://img.shields.io/badge/Portugu%C3%AAs-Click%20to%20View-lightgrey)](README.pt.md) [![Italiano](https://img.shields.io/badge/Italiano-Click%20to%20View-lightgrey)](README.it.md) [![Deutsch](https://img.shields.io/badge/Deutsch-Click%20to%20View-lightgrey)](README.de.md) [![Français](https://img.shields.io/badge/Fran%C3%A7ais-Click%20to%20View-lightgrey)](README.fr.md) [![العربية](https://img.shields.io/badge/%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-Click%20to%20View-lightgrey)](README.ar.md) [![日本語](https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-Current-brightgreen)](README.ja.md) [![한국어](https://img.shields.io/badge/%ED%95%9C%EA%B5%AD%EC%96%B4-Click%20to%20View-lightgrey)](README.ko.md) [![简体中文](https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-Click%20to%20View-lightgrey)](README.zh.md)
[![Nederlands](https://img.shields.io/badge/Nederlands-Click%20to%20View-lightgrey)](README.nl.md) [![Русский](https://img.shields.io/badge/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-Click%20to%20View-lightgrey)](README.ru.md) [![Türkçe](https://img.shields.io/badge/T%C3%BCrk%C3%A7e-Click%20to%20View-lightgrey)](README.tr.md) [![Polski](https://img.shields.io/badge/Polski-Click%20to%20View-lightgrey)](README.pl.md)

---

## Seedance 2.5で制作する

**[ImagineVidでSeedance 2.5ワークフローを開く](https://imaginevid.io/seedance-2-0)**

このリポジトリは話題性ではなく検証可能な根拠を重視します。Seedance 2.5 専用ページが公開されるまでは、リンク先の ImagineVid で利用可能な Seedance 2.0 ワークフローが開きます。

リリース情報だけではモデルの証拠になりません。情報源が Seedance 2.5 を明記し、再現可能な手法を学べるだけのプロンプトと動画を公開している場合のみ収録します。

| 制作上のニーズ | エビデンスライブラリ | ImagineVidワークフロー |
|---------|--------------|---------------------|
| ケースレビュー | プロンプト、結果、出典 | 生成して比較 |
| ディスカバリー | リポジトリ内テキスト検索 | ワークフローから探す |
| 生成 | - | Seedance 2.5を開く |
| 閲覧 | GitHubネイティブMarkdown | ブラウザ制作ワークスペース |
| ビデオワークフロー | - | 制作フィルター |


### 制作ワークフローから探す

- [**マルチモーダル参照演出**](#workflow-multimodal-reference-direction) - 各参照素材に役割を割り当てる - 人物同一性、構図、動き、音、ルックのどれを制御する入力か明記する
- [**長回しのブロッキングとカメラ経路**](#workflow-long-take-blocking-camera-paths) - フレーミング、カメラパス、ブロッキング、テンポ、見せ場、トランジションを軸にしたショットブリーフ。
- [**台詞・フォーリー・音楽のタイミング**](#workflow-dialogue-foley-music-timing) - 台詞、演技、環境音、音楽、同期音がシーンを動かすパフォーマンス中心のプロンプト。
- [**物語の連続性とキャラクター演技**](#workflow-narrative-continuity-character-performance) - 連続性を制約として書く - 人物、衣装、製品形状、空間配置、照明をシーケンス全体で維持する
- [**製品・ファッション・キャンペーンモーション**](#workflow-product-fashion-campaign-motion) - 製品、オファー、衣装、料理、デバイス、ブランドの瞬間を動きの中心に据えるCMクリップ。
- [**動画編集・延長・リスタイル**](#workflow-video-editing-extension-restyling) - 連続性を守りながら、既存映像のスタイル変更、延長、追加、削除、置換、シーンの方向変更を行うワークフロー。

---

## 目次

- [Seedance 2.5で制作する](#seedance-25で制作する)
- [Seedance 2.5とは？](#seedance-25とは)
- [コレクションの状態](#コレクションの状態)
- [注目のビデオプロンプト](#community-featured-prompts)
- [コミュニティのビデオプロンプト](#community-prompt-cases)
- [検証済みケースを投稿する](#検証済みケースを投稿する)
- [ライセンス](#ライセンス)
- [クリエイタークレジット](#クリエイタークレジット)
- [リポジトリの成長](#リポジトリの成長)

---

## Seedance 2.5とは？

**Seedance 2.5** は、2026年7月の報道で明らかになった次期 Seedance 動画モデルの名称です。ByteDance の公開 Seed モデルカタログには、現時点で完全なモデルカード、安定した API 識別子、詳細な公開仕様がありません。そのため本リポジトリでは、確認済みの一次資料とコミュニティの主張を分け、ByteDance が継続的に参照できる資料を公開した時点で対象範囲を更新します。

プロンプト集が扱うのは、実際の結果から検証できる要素です。参照素材の役割、画面上の動作、カメラ経路、ビートのタイミング、台詞と音の指示、連続性、編集意図を重視します。数値による性能主張は、安定した一次情報で確認できるまで収録しません。

- **各参照素材に役割を割り当てる** - 人物同一性、構図、動き、音、ルックのどれを制御する入力か明記する
- **目に見える因果関係を書く** - 各アクションを、画面に現れる動き、反応、環境変化につなげる
- **シーンをビートで組み立てる** - あらすじではなく、観察できる瞬間を順番に記述する
- **音響を演出する** - 台詞、フォーリー、環境音、音楽は場面を進める箇所だけ指定する
- **カメラ経路を明示する** - フレーミング、移動、被写体との距離、重要ショット間の遷移を定義する
- **連続性を制約として書く** - 人物、衣装、製品形状、空間配置、照明をシーケンス全体で維持する

**現在の参考資料：** [Seedance 2.5 release reporting](https://www.theinformation.com/briefings/bytedance-unveils-seedance-2-5-video-model) · [ByteDance Seed model catalog](https://seed.bytedance.com/en/models) · [Available Seedance workflow on ImagineVid](https://imaginevid.io/seedance-2-0)

### プロンプトをショットテンプレートに変える

再利用可能な動画プロンプトでは、シーンの変数と演出ロジックを分けます。被写体、場所、台詞、製品を置き換えながら、検証済みのカメラパス、ビート構成、音の設計、連続性ルールを保ちます。

**テンプレート例：**
```
[DURATION + ASPECT RATIO]。[SUBJECT]が[SETTING]で[VISIBLE ACTION]を行う。カメラ： [FRAMING + MOVE]。Beats: [TIMED ACTIONS]。音声： [DIALOGUE + FOLEY + AMBIENCE]。Preserve: [IDENTITY / PRODUCT / LAYOUT]。Avoid: [FAILURE MODES]。
```

まず1つの動作と1つのカメラアイデアから始めます。時間、音、保持条件は目に見える制作上の課題を解決するときだけ加え、生成ごとに1つの変数だけを変えてください。

---

## コレクションの状態

<div align="center">

| コレクション項目 | 現在値 |
|--------|-------|
| 検証済みケース | **12** |
| 編集部のおすすめ | **2** |
| 生成日時 | **2026年8月14日金曜日 13:14:53 UTC** |

</div>

---

<a id="community-featured-prompts"></a>

## 注目のビデオプロンプト

> 再現性、動きの明瞭さ、制作上の有用性で選定

<a id="prompt-1"></a>

### #1: 静かな街を走るゴールデンアワーの自転車ショット

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Featured](https://img.shields.io/badge/Featured-gold-gold)

#### このワークフローが重要な理由

自然光の住宅街で、一人のサイクリストと穏やかな追従カメラを明瞭に保つコンパクトなショットブリーフです。

#### ローカライズ済みプロンプト

```
ローカライズ版: 以下の英語ソースプロンプトのカメラ、タイミング、主体の一貫性、制約を維持し、表示文字や台詞だけをこの言語に置き換えてください。

A young East Asian woman riding a bicycle through quiet city streets, casually exploring the neighborhood, cinematic, natural daylight, realistic, smooth camera movement.
```

<details>
<summary>元のソースプロンプト</summary>

```
A young East Asian woman riding a bicycle through quiet city streets, casually exploring the neighborhood, cinematic, natural daylight, realistic, smooth camera movement.
```

</details>

#### 動画

<div align="center">
<a href="https://video.twimg.com/ext_tw_video/2074956835250122752/pu/vid/avc1/1280x720/GGVJY84yqzPpP7dZ.mp4?tag=26"><img src="https://pbs.twimg.com/ext_tw_video_thumb/2074956835250122752/pu/img/fiGWvsKanTErJ-Ht.jpg" height="420" alt="静かな街を走るゴールデンアワーの自転車ショット - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/ext_tw_video/2074956835250122752/pu/vid/avc1/1280x720/GGVJY84yqzPpP7dZ.mp4?tag=26)**
</div>

#### エビデンス

- **クリエイター:** [@noorwithwifi](https://x.com/noorwithwifi)
- **正規の出典:** [正規の出典](https://x.com/noorwithwifi/status/2074956913075491029)
- **公開日:** 2026年7月8日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/seedance-2-0)**

---

<a id="prompt-3"></a>

### #2: 2枚の参照画像で作るタイムコード付き工業地帯バトル

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Featured](https://img.shields.io/badge/Featured-gold-gold)
![Reference](https://img.shields.io/badge/Reference-Image%20Needed-orange)

#### このワークフローが重要な理由

二人の格闘家を指定し、ブロッキング、カメラ変更、スロー、衝撃表現、環境反応を14秒にわたって同期する詳細なアクションブリーフです。

#### ローカライズ済みプロンプト

```
ローカライズ版: 以下の英語ソースプロンプトのカメラ、タイミング、主体の一貫性、制約を維持し、表示文字や台詞だけをこの言語に置き換えてください。

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

<details>
<summary>元のソースプロンプト</summary>

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

</details>

#### 動画

<div align="center">
<a href="https://video.twimg.com/amplify_video/2077336525373923328/vid/avc1/1920x1080/wlKvDYYr__Dylt21.mp4?tag=28"><img src="https://pbs.twimg.com/amplify_video_thumb/2077336525373923328/img/X_8KtfVsQRT45Kfa.jpg" height="420" alt="2枚の参照画像で作るタイムコード付き工業地帯バトル - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/amplify_video/2077336525373923328/vid/avc1/1920x1080/wlKvDYYr__Dylt21.mp4?tag=28)**
</div>

#### エビデンス

- **クリエイター:** [@AIReelofficial](https://x.com/AIReelofficial)
- **正規の出典:** [正規の出典](https://x.com/AIReelofficial/status/2077729460644872389)
- **公開日:** 2026年7月16日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/seedance-2-0)**

---

<a id="community-prompt-cases"></a>

## コミュニティのビデオプロンプト

> 出典の日付と編集上の価値の順.

<a id="workflow-multimodal-reference-direction"></a>

### マルチモーダル参照演出 (2)

各参照素材に役割を割り当てる - 人物同一性、構図、動き、音、ルックのどれを制御する入力か明記する

**注目のビデオプロンプト**

- [2枚の参照画像で作るタイムコード付き工業地帯バトル](#prompt-3)

<a id="prompt-7"></a>

#### #1: 新規ケース: A seamless sequence on a vast frozen mountain peak

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### このワークフローが重要な理由

X の公開ソースに基づく再利用可能なプロンプト例。構図、制約、制作意図を明確に保ちます。

##### ローカライズ済みプロンプト

```
ローカライズ版: 以下の英語ソースプロンプトのカメラ、タイミング、主体の一貫性、制約を維持し、表示文字や台詞だけをこの言語に置き換えてください。

A seamless cinematic sequence on a vast frozen mountain peak during blue hour beneath a violent arctic blizzard. Endless snow-covered cliffs, towering glaciers, ancient stone ruins, and a colossal weathered throne carved into the mountain overlook an endless frozen kingdom. Thick snow falls through the air while powerful winds carry swirling ice particles across the landscape. The atmosphere feels ancient, sacred, and forgotten. Kael, a fearless legendary warrior with shoulder-length wavy black hair, sharp amber eyes, a rugged face with a subtle scar above his left eyebrow, walks slowly and confidently through the deep snow toward the ancient throne. He wears weathered black dragon-scale armor with intricate silver engravings, heavy armored boots, leather belts across his chest, and a long tattered black cloak flowing naturally in the wind. A massive glowing blue runic greatsword rests on his back, casting a soft blue light onto the snow. The camera begins with an ultra-wide aerial shot before descending into one smooth forward tracking shot behind Kael. Every footstep leaves deep impressions in the snow. His cloak and hair react naturally to the storm while distant thunder echoes through the mountains. Kael reaches the ancient throne and slowly unsheathes his glowing blue runic greatsword. Without hesitation, he drives the sword into the frozen ground before the throne. The instant the blade touches the ice, brilliant blue energy surges outward in glowing cracks racing across the mountain. The storm suddenly becomes silent. Thousands of ancient spectral warriors begin rising from beneath the snow across the mountain. Their translucent blue armor glows softly as they emerge in complete silence. One after another, they kneel toward Kael, forming an endless ghostly army stretching across the frozen landscape. The camera slowly pulls back and rises high above the mountain, revealing Kael standing alone before the throne with his glowing sword planted in the ice while an enormous spectral army kneels beneath him. Snow continues falling peacefully as blue light illuminates the entire mountain. The sequence ends with a breathtaking ultra-wide aerial view before fading to black. Ultra-photorealistic fantasy filmmaking, Hollywood blockbuster, IMAX scale, cinematic blue-hour lighting, volumetric snowfall, realistic cloth and hair simulation, physically accurate anim.
```

<details>
<summary>元のソースプロンプト</summary>

```
A seamless cinematic sequence on a vast frozen mountain peak during blue hour beneath a violent arctic blizzard. Endless snow-covered cliffs, towering glaciers, ancient stone ruins, and a colossal weathered throne carved into the mountain overlook an endless frozen kingdom. Thick snow falls through the air while powerful winds carry swirling ice particles across the landscape. The atmosphere feels ancient, sacred, and forgotten. Kael, a fearless legendary warrior with shoulder-length wavy black hair, sharp amber eyes, a rugged face with a subtle scar above his left eyebrow, walks slowly and confidently through the deep snow toward the ancient throne. He wears weathered black dragon-scale armor with intricate silver engravings, heavy armored boots, leather belts across his chest, and a long tattered black cloak flowing naturally in the wind. A massive glowing blue runic greatsword rests on his back, casting a soft blue light onto the snow. The camera begins with an ultra-wide aerial shot before descending into one smooth forward tracking shot behind Kael. Every footstep leaves deep impressions in the snow. His cloak and hair react naturally to the storm while distant thunder echoes through the mountains. Kael reaches the ancient throne and slowly unsheathes his glowing blue runic greatsword. Without hesitation, he drives the sword into the frozen ground before the throne. The instant the blade touches the ice, brilliant blue energy surges outward in glowing cracks racing across the mountain. The storm suddenly becomes silent. Thousands of ancient spectral warriors begin rising from beneath the snow across the mountain. Their translucent blue armor glows softly as they emerge in complete silence. One after another, they kneel toward Kael, forming an endless ghostly army stretching across the frozen landscape. The camera slowly pulls back and rises high above the mountain, revealing Kael standing alone before the throne with his glowing sword planted in the ice while an enormous spectral army kneels beneath him. Snow continues falling peacefully as blue light illuminates the entire mountain. The sequence ends with a breathtaking ultra-wide aerial view before fading to black. Ultra-photorealistic fantasy filmmaking, Hollywood blockbuster, IMAX scale, cinematic blue-hour lighting, volumetric snowfall, realistic cloth and hair simulation, physically accurate anim.
```

</details>

##### 動画

<div align="center">
<a href="https://video.twimg.com/amplify_video/2081585276347121664/vid/avc1/1920x1080/mTsw-MR6gwrWSBUY.mp4?tag=29"><img src="https://pbs.twimg.com/amplify_video_thumb/2081585276347121664/img/T7nboWV2ufp0gfxn.jpg" height="420" alt="新規ケース: A seamless sequence on a vast frozen mountain peak - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/amplify_video/2081585276347121664/vid/avc1/1920x1080/mTsw-MR6gwrWSBUY.mp4?tag=29)**
</div>

##### エビデンス

- **クリエイター:** [Zephyra Leigh](https://x.com/ZephyraLeigh)
- **正規の出典:** [正規の出典](https://x.com/ZephyraLeigh/status/2081585413475766574)
- **公開日:** 2026年7月27日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/seedance-2-0)**

---

<a id="workflow-long-take-blocking-camera-paths"></a>

### 長回しのブロッキングとカメラ経路 (5)

フレーミング、カメラパス、ブロッキング、テンポ、見せ場、トランジションを軸にしたショットブリーフ。

<a id="prompt-2"></a>

#### #2: サイバーパンクのハッカーロボットを描く30秒ワンテイク

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### このワークフローが重要な理由

一つの被写体、作業環境、継続動作が長回しへどう展開されるかを検証できる、意図的に簡潔なプロンプトです。

##### ローカライズ済みプロンプト

```
ローカライズ版: 以下の英語ソースプロンプトのカメラ、タイミング、主体の一貫性、制約を維持し、表示文字や台詞だけをこの言語に置き換えてください。

Cyberpunk hacker robot working in front of many monitors.
```

<details>
<summary>元のソースプロンプト</summary>

```
Cyberpunk hacker robot working in front of many monitors.
```

</details>

##### 動画

<div align="center">
<a href="https://video.twimg.com/ext_tw_video/2077113718106648577/pu/vid/avc1/1280x720/twNk6uhZZRnoFngO.mp4?tag=12"><img src="https://pbs.twimg.com/ext_tw_video_thumb/2077113718106648577/pu/img/EyN9swzCeqGu4nZy.jpg" height="420" alt="サイバーパンクのハッカーロボットを描く30秒ワンテイク - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/ext_tw_video/2077113718106648577/pu/vid/avc1/1280x720/twNk6uhZZRnoFngO.mp4?tag=12)**
</div>

##### エビデンス

- **クリエイター:** [@thedoomguy_ai](https://x.com/thedoomguy_ai)
- **正規の出典:** [正規の出典](https://x.com/thedoomguy_ai/status/2077113772959740310)
- **公開日:** 2026年7月14日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/seedance-2-0)**

---

<a id="prompt-5"></a>

#### #3: ワンカットで移ろう四季

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### このワークフローが重要な理由

公開デモの内容を編集的に再構成し、30秒間の環境連続性を検証するプロンプト。

##### ローカライズ済みプロンプト

```
同じ風景を進む30秒の途切れないカメラ移動で、春から夏、夏から秋、秋から冬へ変化させる。経路、ランドマーク、速度は完全に維持し、植生、天候、光、地面、環境音、人の活動だけを自然に移ろわせる。前景の遮蔽、舞う粒子、動機のある旋回で各変化を隠す。カット、形状の跳躍、人物の同一性変化は禁止。冒頭と同じ構図軸で終える。
```

<details>
<summary>元のソースプロンプト</summary>

```
Create one uninterrupted 30-second camera move through the same landscape as spring transforms into summer, summer into autumn, and autumn into winter. Preserve the exact path, landmark positions, and camera speed while vegetation, weather, daylight, ground texture, ambient sound, and human activity evolve naturally with each season. Hide every transition inside foreground occlusion, drifting particles, or a motivated camera turn. No cuts, no geometry jumps, and no sudden identity changes. End from the same compositional axis established at the beginning.
```

</details>

##### 動画

<div align="center">
<a href="https://video.twimg.com/amplify_video/2071689424891527168/vid/avc1/1920x1080/aPpOZyVnA973XFrL.mp4?tag=28"><img src="https://pbs.twimg.com/amplify_video_thumb/2071689424891527168/img/O_QS365XrgEn-pOi.jpg" height="420" alt="ワンカットで移ろう四季 - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/amplify_video/2071689424891527168/vid/avc1/1920x1080/aPpOZyVnA973XFrL.mp4?tag=28)**
</div>

##### エビデンス

- **クリエイター:** [@JSFILMZ0412](https://x.com/JSFILMZ0412)
- **正規の出典:** [正規の出典](https://x.com/JSFILMZ0412/status/2071692606573277428)
- **公開日:** 2026年6月29日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/seedance-2-0)**

---

<a id="prompt-6"></a>

#### #4: 空中で止まるヒョウを動き続けるカメラが回り込む

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### このワークフローが重要な理由

公開されたSeedance 2.5映像を基に、被写体の時間とカメラの時間を分離した劇的な野生動物オービット。

##### ローカライズ済みプロンプト

```
ローカライズ版: 以下の英語ソースプロンプトのカメラ、タイミング、主体の一貫性、制約を維持し、表示文字や台詞だけをこの言語に置き換えてください。

Create a 10-second vertical wildlife-commercial shot in a sunlit savanna. A leopard launches across a narrow rocky gap. At the apex of the jump, freeze the leopard completely in time while dust, grass, and the surrounding environment continue moving naturally. The camera does not stop: sweep from a low side-tracking angle into a smooth 180-degree orbit around the suspended animal, revealing detailed fur, focused eyes, stretched anatomy, and the valley beyond. After the orbit, release time and let the leopard land with believable weight as dust rolls past the lens. Maintain one leopard, coherent terrain, correct limb anatomy, natural parallax, warm late-afternoon light, and continuous ambient wind and impact audio. No cuts, no duplicated animal, no frozen background, no text.
```

<details>
<summary>元のソースプロンプト</summary>

```
Create a 10-second vertical wildlife-commercial shot in a sunlit savanna. A leopard launches across a narrow rocky gap. At the apex of the jump, freeze the leopard completely in time while dust, grass, and the surrounding environment continue moving naturally. The camera does not stop: sweep from a low side-tracking angle into a smooth 180-degree orbit around the suspended animal, revealing detailed fur, focused eyes, stretched anatomy, and the valley beyond. After the orbit, release time and let the leopard land with believable weight as dust rolls past the lens. Maintain one leopard, coherent terrain, correct limb anatomy, natural parallax, warm late-afternoon light, and continuous ambient wind and impact audio. No cuts, no duplicated animal, no frozen background, no text.
```

</details>

##### 動画

<div align="center">
<a href="https://video.twimg.com/ext_tw_video/2079745224570519552/pu/vid/avc1/720x1280/27yst_h2-L4NaPMA.mp4?tag=12"><img src="https://pbs.twimg.com/ext_tw_video_thumb/2079745224570519552/pu/img/rzb_86oXQBV3X7CX.jpg" height="420" alt="空中で止まるヒョウを動き続けるカメラが回り込む - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/ext_tw_video/2079745224570519552/pu/vid/avc1/720x1280/27yst_h2-L4NaPMA.mp4?tag=12)**
</div>

##### エビデンス

- **クリエイター:** [jzcreates](https://x.com/jzcreates)
- **正規の出典:** [正規の出典](https://x.com/jzcreates/status/2079745245713928390)
- **公開日:** 2026年7月22日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/seedance-2-0)**

---

<a id="prompt-8"></a>

#### #5: 新規ケース: Early morning; sunlight filters through the forest canopy, casting

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### このワークフローが重要な理由

X の公開ソースに基づく再利用可能なプロンプト例。構図、制約、制作意図を明確に保ちます。

##### ローカライズ済みプロンプト

```
ローカライズ版: 以下の英語ソースプロンプトのカメラ、タイミング、主体の一貫性、制約を維持し、表示文字や台詞だけをこの言語に置き換えてください。

Early morning; sunlight filters through the forest canopy, casting a glow over the bank of a clear stream. The scene opens with a gentle, cinematic perspective. No faces are shown—only a pair of warm, capable hands. Shot 1: Hands carry a bamboo basket to the edge of the crystal-clear stream, where the water flows gently and small fish dart about. A hand uses a bamboo net to catch a fresh, silvery fish; it flops lightly in the basket, sending droplets of water splashing and sparkling in the sunlight. The atmosphere is natural, calm, and soothing. Shot 2: Moving to a wooden table by the stream, the hands begin preparing the ingredients. The fresh fish is placed on a wooden cutting board and slowly sliced ​​with a sharp knife, revealing the clear texture of the flesh through clean, fluid movements. Next, a block of tender white tofu is gently cut into neat, uniform cubes; the surface of the tofu appears soft and smooth. Shot 3: Tofu and fish soup is prepared in a traditional earthenware pot over a small stove at the edge of the forest. As the water begins to boil, fish slices, tofu, chopped scallions, and fresh vegetables are added. Steam rises gently, the broth turns a milky white, and the fish and tofu tumble softly within the simmering liquid. Shot 4: Finally, the camera closes in on a bowl of the freshly cooked soup. White steam drifts upward, and sunlight catches the surface of the broth; a simple wooden spoon and the bamboo basket sit nearby. The backdrop features the forest, the stream, and leaves swaying in the breeze, evoking a sense of returning to nature and finding peaceful happiness. Style Requirements: Warm, hand-drawn style reminiscent of Hayao Miyazaki’s animated films; delicate watercolor textures; soft, natural lighting; rich forest greens; a soothing, tranquil, and heartwarming atmosphere; a blend of high-quality 2D animation and 3D spatial depth; cinematic camera work; fluid, natural movement; realistic physical interactions; rich detail in the ingredients; 4K cinematic animation quality. Sound Design (Crucial): Use only natural ambient sounds—no background music, no dialogue. Sounds include: the clear sound of the flowing stream; birdsong; leaves rustling in the breeze; dripping water; the soft sounds of the knife slicing fish and tofu; the crackling of burning firewood; the bubbling of the earthenware pot; the sound of the soup simmering..
```

<details>
<summary>元のソースプロンプト</summary>

```
Early morning; sunlight filters through the forest canopy, casting a glow over the bank of a clear stream. The scene opens with a gentle, cinematic perspective. No faces are shown—only a pair of warm, capable hands. Shot 1: Hands carry a bamboo basket to the edge of the crystal-clear stream, where the water flows gently and small fish dart about. A hand uses a bamboo net to catch a fresh, silvery fish; it flops lightly in the basket, sending droplets of water splashing and sparkling in the sunlight. The atmosphere is natural, calm, and soothing. Shot 2: Moving to a wooden table by the stream, the hands begin preparing the ingredients. The fresh fish is placed on a wooden cutting board and slowly sliced ​​with a sharp knife, revealing the clear texture of the flesh through clean, fluid movements. Next, a block of tender white tofu is gently cut into neat, uniform cubes; the surface of the tofu appears soft and smooth. Shot 3: Tofu and fish soup is prepared in a traditional earthenware pot over a small stove at the edge of the forest. As the water begins to boil, fish slices, tofu, chopped scallions, and fresh vegetables are added. Steam rises gently, the broth turns a milky white, and the fish and tofu tumble softly within the simmering liquid. Shot 4: Finally, the camera closes in on a bowl of the freshly cooked soup. White steam drifts upward, and sunlight catches the surface of the broth; a simple wooden spoon and the bamboo basket sit nearby. The backdrop features the forest, the stream, and leaves swaying in the breeze, evoking a sense of returning to nature and finding peaceful happiness. Style Requirements: Warm, hand-drawn style reminiscent of Hayao Miyazaki’s animated films; delicate watercolor textures; soft, natural lighting; rich forest greens; a soothing, tranquil, and heartwarming atmosphere; a blend of high-quality 2D animation and 3D spatial depth; cinematic camera work; fluid, natural movement; realistic physical interactions; rich detail in the ingredients; 4K cinematic animation quality. Sound Design (Crucial): Use only natural ambient sounds—no background music, no dialogue. Sounds include: the clear sound of the flowing stream; birdsong; leaves rustling in the breeze; dripping water; the soft sounds of the knife slicing fish and tofu; the crackling of burning firewood; the bubbling of the earthenware pot; the sound of the soup simmering..
```

</details>

##### 動画

<div align="center">
<a href="https://video.twimg.com/amplify_video/2079123345271136256/vid/avc1/1920x1080/stv5h4mJLVg6P1i_.mp4?tag=29"><img src="https://pbs.twimg.com/amplify_video_thumb/2079123345271136256/img/ZS0OHkasBrQH4Gbs.jpg" height="420" alt="新規ケース: Early morning; sunlight filters through the forest canopy, casting - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/amplify_video/2079123345271136256/vid/avc1/1920x1080/stv5h4mJLVg6P1i_.mp4?tag=29)**
</div>

##### エビデンス

- **クリエイター:** [AIReel](https://x.com/AIReelofficial)
- **正規の出典:** [正規の出典](https://x.com/AIReelofficial/status/2079531584869548309)
- **公開日:** 2026年7月21日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/seedance-2-0)**

---

<a id="prompt-9"></a>

#### #6: ワンカットで描く雪崩からの脱出チェイス

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### このワークフローが重要な理由

明確な時間設計、空撮から地上へのカメラ演出、雪の物理表現、ネイティブ環境音を備えた、出典付きSeedance 2.5ロングテイク用ブリーフ。

##### ローカライズ済みプロンプト

```
ローカライズ版：英語の基準プロンプトにあるカメラ、タイミング、車両の連続性、制約を維持し、画面内テキストや台詞だけを調整してください。

Create a 15-second 16:9 photorealistic action film as one true continuous shot with no cuts, transitions, morphing, or time jumps. Keep the same rally car, driver, road geometry, snow, and lighting throughout.

0.0-2.5s: begin with a high aerial view of a narrow alpine cliff road, sharp switchbacks, distant snow peaks, and an avalanche starting above the route. 2.5-5.5s: descend physically toward the rally car and settle into a close side chase as the tires throw cold powder and the suspension reacts to the uneven ice. 5.5-8.5s: drop beside the spinning rear wheel, then rise over the roof to reveal the avalanche gaining ground behind the car. 8.5-11.5s: arc outward into a wide circling drone-like move and descend into a front-facing backward tracking shot as the car drifts around the last switchback. 11.5-15.0s: keep the camera moving with the car as it clears the tunnel entrance just before the slope collapses behind it; finish on a brief spray of snow and a stable hero frame.

Use cold daylight, realistic tire grip, suspension motion, airborne snow, rock contact, and consistent vehicle scale. Build native sound from engine load, tire chatter, wind, avalanche rumble, snow impact, tunnel reverb, and one restrained final music hit. Preserve believable geography and continuous motion. Avoid duplicate cars, changing road layouts, impossible camera teleportation, artificial camera shake, extra vehicles, logos, captions, watermarks, and cartoon or game-like rendering.
```

<details>
<summary>元のソースプロンプト</summary>

```
Create a 15-second 16:9 photorealistic action film as one true continuous shot with no cuts, transitions, morphing, or time jumps. Keep the same rally car, driver, road geometry, snow, and lighting throughout.

0.0-2.5s: begin with a high aerial view of a narrow alpine cliff road, sharp switchbacks, distant snow peaks, and an avalanche starting above the route. 2.5-5.5s: descend physically toward the rally car and settle into a close side chase as the tires throw cold powder and the suspension reacts to the uneven ice. 5.5-8.5s: drop beside the spinning rear wheel, then rise over the roof to reveal the avalanche gaining ground behind the car. 8.5-11.5s: arc outward into a wide circling drone-like move and descend into a front-facing backward tracking shot as the car drifts around the last switchback. 11.5-15.0s: keep the camera moving with the car as it clears the tunnel entrance just before the slope collapses behind it; finish on a brief spray of snow and a stable hero frame.

Use cold daylight, realistic tire grip, suspension motion, airborne snow, rock contact, and consistent vehicle scale. Build native sound from engine load, tire chatter, wind, avalanche rumble, snow impact, tunnel reverb, and one restrained final music hit. Preserve believable geography and continuous motion. Avoid duplicate cars, changing road layouts, impossible camera teleportation, artificial camera shake, extra vehicles, logos, captions, watermarks, and cartoon or game-like rendering.
```

</details>

##### ソースと結果のフレーム

<table>
<tr>
<td width="50%" valign="top" align="center"><img src="https://pbs.twimg.com/amplify_video_thumb/2080358073772945408/img/QdQ4DkwTFlI-e-Tc.jpg" width="100%" alt="ワンカットで描く雪崩からの脱出チェイス - Image 1"></td>
<td width="50%" valign="top" align="center"><img src="https://pbs.twimg.com/amplify_video_thumb/2080358249719844864/img/Eefi6d1zUqPCw5KH.jpg" width="100%" alt="ワンカットで描く雪崩からの脱出チェイス - Image 2"></td>
</tr>
</table>

##### 動画

<div align="center">
<a href="https://video.twimg.com/amplify_video/2080358249719844864/vid/avc1/1280x720/1s22T4RgtkM-uRH-.mp4?tag=29"><img src="https://pbs.twimg.com/amplify_video_thumb/2080358249719844864/img/Eefi6d1zUqPCw5KH.jpg" height="420" alt="ワンカットで描く雪崩からの脱出チェイス - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/amplify_video/2080358249719844864/vid/avc1/1280x720/1s22T4RgtkM-uRH-.mp4?tag=29)**
</div>

##### エビデンス

- **クリエイター:** [Brent Lynch](https://x.com/BrentLynch)
- **正規の出典:** [正規の出典](https://x.com/BrentLynch/status/2080359232160120942)
- **公開日:** 2026年7月23日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/seedance-2-0)**

---

<a id="workflow-dialogue-foley-music-timing"></a>

### 台詞・フォーリー・音楽のタイミング (2)

台詞、演技、環境音、音楽、同期音がシーンを動かすパフォーマンス中心のプロンプト。

<a id="prompt-4"></a>

#### #7: 異星人到来を描くダークな予告編

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### このワークフローが重要な理由

30秒の短い指示で、深まる謎、世界規模の広がり、一貫した映画的テンポを試す。

##### ローカライズ済みプロンプト

```
異星人が地球へ到来する映画の、シネマティックで暗く謎めいた予告編。
```

<details>
<summary>元のソースプロンプト</summary>

```
A cinematic, dark and mysterious trailer for a movie about aliens arriving on Earth.
```

</details>

##### 動画

<div align="center">
<a href="https://video.twimg.com/amplify_video/2075206120461709312/vid/avc1/1280x720/-Sd8GC06pfI6PfH2.mp4?tag=28"><img src="https://pbs.twimg.com/amplify_video_thumb/2075206120461709312/img/1JPNvld2-yhKpR-8.jpg" height="420" alt="異星人到来を描くダークな予告編 - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/amplify_video/2075206120461709312/vid/avc1/1280x720/-Sd8GC06pfI6PfH2.mp4?tag=28)**
</div>

##### エビデンス

- **クリエイター:** [@synthwavedd](https://x.com/synthwavedd)
- **正規の出典:** [正規の出典](https://x.com/synthwavedd/status/2075206446879265049)
- **公開日:** 2026年7月9日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/seedance-2-0)**

---

<a id="prompt-12"></a>

#### #8: 触感的なASMRリズムで描く押し花 vlog

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### このワークフローが重要な理由

準備から触感的な押し花、自然な会話、本の重み、カード配置、ビデオカメラらしい質感までをつなぐ出典付きSeedance 2.5 UGCブリーフ。

##### ローカライズ済みプロンプト

```
実行結果の一貫性を保つため、基準プロンプトは英語のまま掲載します。以下はローカライズした意図の要約です：

Create a 12-second vertical UGC-style video of an adult creator making a small flower press at a bright wooden desk. Use natural handheld smartphone framing, gentle focus breathing, and quiet room ambience. 0-3s: she places two delicate wildflowers on a cream card and says, “I’m pressing these before the color fades.” 3-6s: show a close-up of her fingertips aligning the stems, the paper fibers, and a small handwritten date card; keep the text limited to the date and make it cleanly readable. 6-9s: she closes a thick sketchbook over the flowers and presses down with both palms, emphasizing the soft paper creak and book weight. 9-12s: cut to a top-down reveal of the arranged card, dried leaves, and a small glass of water while she says, “Now we wait.” Preserve hand anatomy, flower identity, card placement, and natural daylight. Sync the dialogue, paper sounds, book movement, and tiny desk taps. Avoid jumpy edits, invented labels, distorted fingers, floating petals, logos, captions, or watermarks.
```

<details>
<summary>元のソースプロンプト</summary>

```
Create a 12-second vertical UGC-style video of an adult creator making a small flower press at a bright wooden desk. Use natural handheld smartphone framing, gentle focus breathing, and quiet room ambience. 0-3s: she places two delicate wildflowers on a cream card and says, “I’m pressing these before the color fades.” 3-6s: show a close-up of her fingertips aligning the stems, the paper fibers, and a small handwritten date card; keep the text limited to the date and make it cleanly readable. 6-9s: she closes a thick sketchbook over the flowers and presses down with both palms, emphasizing the soft paper creak and book weight. 9-12s: cut to a top-down reveal of the arranged card, dried leaves, and a small glass of water while she says, “Now we wait.” Preserve hand anatomy, flower identity, card placement, and natural daylight. Sync the dialogue, paper sounds, book movement, and tiny desk taps. Avoid jumpy edits, invented labels, distorted fingers, floating petals, logos, captions, or watermarks.
```

</details>

##### 動画

<div align="center">
<a href="https://video.twimg.com/amplify_video/2084268630556983296/vid/avc1/1920x1080/kPWIx5WQsdO1yzGR.mp4?tag=29"><img src="https://pbs.twimg.com/amplify_video_thumb/2084268630556983296/img/OXmdFhcGjZVL1k5f.jpg" height="420" alt="触感的なASMRリズムで描く押し花 vlog - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/amplify_video/2084268630556983296/vid/avc1/1920x1080/kPWIx5WQsdO1yzGR.mp4?tag=29)**
</div>

##### エビデンス

- **クリエイター:** [𝐌](https://x.com/Strength04_X)
- **正規の出典:** [正規の出典](https://x.com/Strength04_X/status/2084269139556761919)
- **公開日:** 2026年8月3日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/seedance-2-0)**

---

<a id="workflow-narrative-continuity-character-performance"></a>

### 物語の連続性とキャラクター演技 (3)

連続性を制約として書く - 人物、衣装、製品形状、空間配置、照明をシーケンス全体で維持する

**注目のビデオプロンプト**

- [静かな街を走るゴールデンアワーの自転車ショット](#prompt-1)

<a id="prompt-10"></a>

#### #9: ハワイを巡るトロピカル旅日記

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### このワークフローが重要な理由

「ハワイを巡るトロピカル旅日記」を検証可能な結果メディアと再利用できる指示で試す、出典付きのケースです。

##### ローカライズ済みプロンプト

```
ローカライズ版：英語の基準プロンプトにある視覚的意図、被写体の連続性、すべての制約を維持します。

A cinematic 30-second tropical travel vlog montage featuring a beautiful 20-year-old East Asian woman with dark hair exploring Hawaii during a dreamy summer vacation. Shot like an authentic luxury travel diary with handheld camera movement, candid moments, soft golden-hour sunlight, dreamy 35mm film aesthetics, warm vintage color grading, shallow depth of field, natural skin texture, atmospheric lighting, and cinematic storytelling. Maintain the same woman throughout every scene: dark hair, youthful appearance, natural makeup, elegant summer outfits, relaxed happy expression. Format: 4K cinematic video, 24fps, 35mm film grain, realistic handheld camera, soft focus, warm color palette, travel documentary style. Scene 1 (0-4s) — Arrival & City Walk: A beautiful Hawaiian morning. The woman walks through a bright tropical city street wearing a flowing floral summer dress and sunglasses. Palm trees line the sidewalk, sunlight reflects off colorful buildings, people walk casually in the background. Camera follows from behind, then transitions into a close-up of her smiling face as wind moves through her hair. Scene 2 (4-8s) — Beach Discovery: She steps onto a wide sandy beach with crystal blue ocean waves behind her. She walks barefoot along the shoreline, holding her dress slightly as waves touch her feet. Low-angle cinematic shots of footsteps in wet sand, ocean reflections, distant volcanic mountains under a clear sky. Scene 3 (8-12s) — Tropical Nature Moments: A cinematic worm's-eye view looking upward through towering palm trees. Golden sunlight streams between the leaves with beautiful lens flares. Cut to a close-up of her standing near a rocky ocean cliff, wind blowing through her hair while she looks peacefully toward the sea. Scene 4 (12-16s) — Beachfront Cafe & Slow Living: She sits alone at a cozy beachfront cafe near the window, drinking a tropical drink while watching waves outside. Soft sunlight enters through the glass. Close-up shots of her hands, coffee cup, ocean view, and thoughtful expression create an intimate travel diary feeling. Scene 5 (16-20s) — Ocean Adventure: She floats peacefully on a surfboard in calm turquoise ocean water. Camera moves around her from water level, showing gentle waves, sunlight sparkling on the sea surface, tropical coastline and mountains in the distance. She laughs naturally while looking toward the camera. Scene 6 (20-24s) — Night Market Exploration: A vibrant Hawaiian night market filled with warm lights, food stalls, and colorful decorations. She walks through the crowd, trying tropical fruit skewers and local street food. Cinematic close-ups of her reaction, glowing lanterns, neon bokeh, and bustling atmosphere. Scene 7 (24-27s) — Golden Sunset Ending: Wide cinematic silhouette shot of her standing on the ocean shore during sunset. Orange and pink skies reflect on the water. Waves gently move around her feet as she watches the sun disappear behind the horizon. Emotional travel film ending. Scene 8 (27-30s) — Hotel Night Reflection: Nighttime high-rise hotel balcony overlooking sparkling tropical city lights. She wears a simple white dress, leaning against the balcony while a warm breeze moves the curtains behind her. Final intimate close-up of her lying on the hotel bed, looking warmly into the camera lens with a peaceful smile. Camera Style: Authentic travel vlog cinematography, handheld camera shake, smooth cinematic transitions, slow push-ins, natural movement, occasional POV shots, realistic autofocus adjustments, subtle motion blur. Visual Style: Dreamy Hawaii vacation film, luxury travel advertisement aesthetic, soft golden sunlight, realistic skin texture, cinematic depth of field, nostalgic 35mm film look, warm atmospheric colors, natural expressions, emotional storytelling. Avoid: cartoon style, CGI look, plastic skin, unrealistic face, inconsistent character appearance, changing hairstyle, extra fingers, distorted body, artificial lighting, oversaturated colors, blurry face, unnatural movements, duplicate people.
```

<details>
<summary>元のソースプロンプト</summary>

```
A cinematic 30-second tropical travel vlog montage featuring a beautiful 20-year-old East Asian woman with dark hair exploring Hawaii during a dreamy summer vacation. Shot like an authentic luxury travel diary with handheld camera movement, candid moments, soft golden-hour sunlight, dreamy 35mm film aesthetics, warm vintage color grading, shallow depth of field, natural skin texture, atmospheric lighting, and cinematic storytelling. Maintain the same woman throughout every scene: dark hair, youthful appearance, natural makeup, elegant summer outfits, relaxed happy expression. Format: 4K cinematic video, 24fps, 35mm film grain, realistic handheld camera, soft focus, warm color palette, travel documentary style. Scene 1 (0-4s) — Arrival & City Walk: A beautiful Hawaiian morning. The woman walks through a bright tropical city street wearing a flowing floral summer dress and sunglasses. Palm trees line the sidewalk, sunlight reflects off colorful buildings, people walk casually in the background. Camera follows from behind, then transitions into a close-up of her smiling face as wind moves through her hair. Scene 2 (4-8s) — Beach Discovery: She steps onto a wide sandy beach with crystal blue ocean waves behind her. She walks barefoot along the shoreline, holding her dress slightly as waves touch her feet. Low-angle cinematic shots of footsteps in wet sand, ocean reflections, distant volcanic mountains under a clear sky. Scene 3 (8-12s) — Tropical Nature Moments: A cinematic worm's-eye view looking upward through towering palm trees. Golden sunlight streams between the leaves with beautiful lens flares. Cut to a close-up of her standing near a rocky ocean cliff, wind blowing through her hair while she looks peacefully toward the sea. Scene 4 (12-16s) — Beachfront Cafe & Slow Living: She sits alone at a cozy beachfront cafe near the window, drinking a tropical drink while watching waves outside. Soft sunlight enters through the glass. Close-up shots of her hands, coffee cup, ocean view, and thoughtful expression create an intimate travel diary feeling. Scene 5 (16-20s) — Ocean Adventure: She floats peacefully on a surfboard in calm turquoise ocean water. Camera moves around her from water level, showing gentle waves, sunlight sparkling on the sea surface, tropical coastline and mountains in the distance. She laughs naturally while looking toward the camera. Scene 6 (20-24s) — Night Market Exploration: A vibrant Hawaiian night market filled with warm lights, food stalls, and colorful decorations. She walks through the crowd, trying tropical fruit skewers and local street food. Cinematic close-ups of her reaction, glowing lanterns, neon bokeh, and bustling atmosphere. Scene 7 (24-27s) — Golden Sunset Ending: Wide cinematic silhouette shot of her standing on the ocean shore during sunset. Orange and pink skies reflect on the water. Waves gently move around her feet as she watches the sun disappear behind the horizon. Emotional travel film ending. Scene 8 (27-30s) — Hotel Night Reflection: Nighttime high-rise hotel balcony overlooking sparkling tropical city lights. She wears a simple white dress, leaning against the balcony while a warm breeze moves the curtains behind her. Final intimate close-up of her lying on the hotel bed, looking warmly into the camera lens with a peaceful smile. Camera Style: Authentic travel vlog cinematography, handheld camera shake, smooth cinematic transitions, slow push-ins, natural movement, occasional POV shots, realistic autofocus adjustments, subtle motion blur. Visual Style: Dreamy Hawaii vacation film, luxury travel advertisement aesthetic, soft golden sunlight, realistic skin texture, cinematic depth of field, nostalgic 35mm film look, warm atmospheric colors, natural expressions, emotional storytelling. Avoid: cartoon style, CGI look, plastic skin, unrealistic face, inconsistent character appearance, changing hairstyle, extra fingers, distorted body, artificial lighting, oversaturated colors, blurry face, unnatural movements, duplicate people.
```

</details>

##### 動画

<div align="center">
<a href="https://video.twimg.com/amplify_video/2084238008266493952/vid/avc1/1280x720/9n4ATo5xaBU_x1vP.mp4?tag=29"><img src="https://pbs.twimg.com/amplify_video_thumb/2084238008266493952/img/hmRCH9_UZ7aXhaeO.jpg" height="420" alt="ハワイを巡るトロピカル旅日記 - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/amplify_video/2084238008266493952/vid/avc1/1280x720/9n4ATo5xaBU_x1vP.mp4?tag=29)**
</div>

##### エビデンス

- **クリエイター:** [Sharon Riley](https://x.com/Just_sharon7)
- **正規の出典:** [正規の出典](https://x.com/Just_sharon7/status/2084238339469615320)
- **公開日:** 2026年8月3日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/seedance-2-0)**

---

<a id="prompt-11"></a>

#### #10: オーガニック食料品店のUGC買い物 vlog

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### このワークフローが重要な理由

セルフィー撮影から商品操作、カート視点、触感のあるディテール、温かいレジ前の締めまでをつなぐ、出典付きSeedance 2.5 UGCブリーフ。

##### ローカライズ済みプロンプト

```
実行結果の一貫性を保つため、基準プロンプトは英語のまま掲載します。以下はローカライズした意図の要約です：

Create a realistic UGC-style lifestyle grocery-shopping vlog filmed vertically on a smartphone with natural handheld movement and subtle camera shake. Open with a young woman entering a modern premium organic grocery store with warm ambient lighting, clean wooden shelves, fresh produce, and a bright minimalist interior. She holds the phone in selfie mode, smiles naturally, and gestures for viewers to follow her. She walks to the refrigerated drinks section, scans the shelves, and picks up a green cold-pressed juice bottle, slowly turning it so the label faces the camera. Cut to a cinematic close-up as she twists the cap open and takes a refreshing sip beside a large sunlit window, smiling with satisfaction. Transition to a POV shot from inside a shopping cart as she pushes it through wide grocery aisles, occasionally looking down into the cart and smiling. Follow with an over-the-shoulder walking shot through beautifully organized shelves filled with premium groceries. Show a close-up of her hand selecting fresh oranges, gently inspecting one, placing it into the cart, then picking up a vivid dragon fruit, rotating it naturally in her hand, admiring its color, and placing it in the cart. Finish with her walking toward checkout while smiling at the camera and pushing the cart under warm golden lighting. Ultra-realistic, authentic creator content, premium grocery aesthetic, natural body language, realistic facial expressions, soft cinematic lighting, shallow depth of field, smooth transitions, realistic store ambience, subtle background music, 4K HDR, 24fps, clean color grading, lifestyle-commercial quality.
```

<details>
<summary>元のソースプロンプト</summary>

```
Create a realistic UGC-style lifestyle grocery-shopping vlog filmed vertically on a smartphone with natural handheld movement and subtle camera shake. Open with a young woman entering a modern premium organic grocery store with warm ambient lighting, clean wooden shelves, fresh produce, and a bright minimalist interior. She holds the phone in selfie mode, smiles naturally, and gestures for viewers to follow her. She walks to the refrigerated drinks section, scans the shelves, and picks up a green cold-pressed juice bottle, slowly turning it so the label faces the camera. Cut to a cinematic close-up as she twists the cap open and takes a refreshing sip beside a large sunlit window, smiling with satisfaction. Transition to a POV shot from inside a shopping cart as she pushes it through wide grocery aisles, occasionally looking down into the cart and smiling. Follow with an over-the-shoulder walking shot through beautifully organized shelves filled with premium groceries. Show a close-up of her hand selecting fresh oranges, gently inspecting one, placing it into the cart, then picking up a vivid dragon fruit, rotating it naturally in her hand, admiring its color, and placing it in the cart. Finish with her walking toward checkout while smiling at the camera and pushing the cart under warm golden lighting. Ultra-realistic, authentic creator content, premium grocery aesthetic, natural body language, realistic facial expressions, soft cinematic lighting, shallow depth of field, smooth transitions, realistic store ambience, subtle background music, 4K HDR, 24fps, clean color grading, lifestyle-commercial quality.
```

</details>

##### 動画

<div align="center">
<a href="https://video.twimg.com/amplify_video/2084264003682127872/vid/avc1/1280x720/1rGrJnPoav8yYZRW.mp4?tag=29"><img src="https://pbs.twimg.com/amplify_video_thumb/2084264003682127872/img/03FN_WBFUXWCdzmT.jpg" height="420" alt="オーガニック食料品店のUGC買い物 vlog - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/amplify_video/2084264003682127872/vid/avc1/1280x720/1rGrJnPoav8yYZRW.mp4?tag=29)**
</div>

##### エビデンス

- **クリエイター:** [Synthia](https://x.com/AIwithSynthia)
- **正規の出典:** [正規の出典](https://x.com/AIwithSynthia/status/2084264050717045019)
- **公開日:** 2026年8月3日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/seedance-2-0)**

---

## 検証済みケースを投稿する

実際の演出パターンを学べるSeedance 2.5のケースを見つけましたか？プロンプト、再生可能な結果、クリエイター、出典、モデルエビデンス、入力モードをGitHub Issuesから送ってください。

### GitHub issue

1. [**ビデオプロンプトを投稿する**](https://github.com/imagineVid/Awesome-seedance-2-5-prompts-and-skills/issues/new?template=submit-prompt.yml)
2. 完全なブリーフ、出典、クリエイター、モデルエビデンス、再生可能なメディアを提示する
3. メンテナーが出所、動画としての価値、対象範囲、重複を確認する
4. 承認されたケースはローカルデータソースに正規化される
5. すべての品質チェックに合格すると、ジェネレーターがケースを公開する

**編集方針：** リリース情報だけではモデルの証拠になりません。情報源が Seedance 2.5 を明記し、再現可能な手法を学べるだけのプロンプトと動画を公開している場合のみ収録します。

投稿前に[CONTRIBUTING.md](docs/CONTRIBUTING.md)を読んでください。

---

## ライセンス

ImagineVidが作成した編集テキストとコードは[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)でライセンスされています。第三者のプロンプト、クリエイターの身元、商標、画像、動画はそれぞれの権利者に帰属し、このライセンスの対象外です。

---

## クリエイタークレジット

<details>
<summary>Community creators we thank (11)</summary>

[@JSFILMZ0412](https://x.com/JSFILMZ0412) · [@noorwithwifi](https://x.com/noorwithwifi) · [@synthwavedd](https://x.com/synthwavedd) · [@thedoomguy_ai](https://x.com/thedoomguy_ai) · [AIReel](https://x.com/AIReelofficial) · [Brent Lynch](https://x.com/BrentLynch) · [jzcreates](https://x.com/jzcreates) · [𝐌](https://x.com/Strength04_X)<br>
[Sharon Riley](https://x.com/Just_sharon7) · [Synthia](https://x.com/AIwithSynthia) · [Zephyra Leigh](https://x.com/ZephyraLeigh)

</details>

---

## リポジトリの成長

[![GitHub stars](https://img.shields.io/github/stars/imagineVid/Awesome-seedance-2-5-prompts-and-skills?style=for-the-badge&logo=github&label=GitHub%20Stars)](https://github.com/imagineVid/Awesome-seedance-2-5-prompts-and-skills/stargazers)

**[リポジトリの成長](https://star-history.com/#imagineVid/Awesome-seedance-2-5-prompts-and-skills&Date)**

---

<div align="center">

**[Seedance 2.5で制作する](https://imaginevid.io/seedance-2-0)** •
**[検証済みケースを投稿する](https://github.com/imagineVid/Awesome-seedance-2-5-prompts-and-skills/issues/new?template=submit-prompt.yml)** •
**[コレクションにスターを付ける](https://github.com/imagineVid/Awesome-seedance-2-5-prompts-and-skills)**

<sub>バージョン管理されたローカルデータから生成： 2026-08-14T13:14:53.128Z</sub>

</div>
