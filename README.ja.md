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
| 検証済みケース | **3** |
| 編集部のおすすめ | **2** |
| 生成日時 | **2026年7月20日月曜日 10:56:39 UTC** |

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

#### ソースプロンプト

```
A young East Asian woman riding a bicycle through quiet city streets, casually exploring the neighborhood, cinematic, natural daylight, realistic, smooth camera movement.
```

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

#### ソースプロンプト

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

### マルチモーダル参照演出 (1)

各参照素材に役割を割り当てる - 人物同一性、構図、動き、音、ルックのどれを制御する入力か明記する

**注目のビデオプロンプト**

- [2枚の参照画像で作るタイムコード付き工業地帯バトル](#prompt-3)

<a id="workflow-long-take-blocking-camera-paths"></a>

### 長回しのブロッキングとカメラ経路 (1)

フレーミング、カメラパス、ブロッキング、テンポ、見せ場、トランジションを軸にしたショットブリーフ。

<a id="prompt-2"></a>

#### #1: サイバーパンクのハッカーロボットを描く30秒ワンテイク

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### このワークフローが重要な理由

一つの被写体、作業環境、継続動作が長回しへどう展開されるかを検証できる、意図的に簡潔なプロンプトです。

##### ソースプロンプト

```
Cyberpunk hacker robot working in front of many monitors.
```

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

<a id="workflow-narrative-continuity-character-performance"></a>

### 物語の連続性とキャラクター演技 (1)

連続性を制約として書く - 人物、衣装、製品形状、空間配置、照明をシーケンス全体で維持する

**注目のビデオプロンプト**

- [静かな街を走るゴールデンアワーの自転車ショット](#prompt-1)

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
<summary>Community creators we thank (3)</summary>

[@AIReelofficial](https://x.com/AIReelofficial) · [@noorwithwifi](https://x.com/noorwithwifi) · [@thedoomguy_ai](https://x.com/thedoomguy_ai)

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

<sub>バージョン管理されたローカルデータから生成： 2026-07-20T10:56:39.258Z</sub>

</div>
