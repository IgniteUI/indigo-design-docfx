---
title: Chip と Chips Area - Design System コンポーネント
_description: Chip Component シンボルはインタラクティブでコンパクトな表示です。Chips Area コンポーネント シンボルを使用して Chips のコンポーネントのコレクションを表します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# Chip (チップ)

Chip コンポーネントは、タグや連絡先 (メール受信者など) を楕円にコンパクト表示します。チップ は、[Ignite UI for Angular Chip コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/chip.html)と視覚的には同じです。

## Chip のデモ

<img class="responsive-img" src="../images/chip_demo.png" srcset="../images/chip_demo@2x.png 2x" />

## Chip 密度

Chip は 3 つの密度バリアントがサポートされます。

- Comfortable - インタラクティブ シナリオに適しています。e.g. アクション トリガー
- Cosy - 電子メール作成ツールの受信者フィールドなど短い領域に適しています。
- Compact - グリッド セルの値などデータが密集したシナリオに最適です。

<img class="responsive-img" src="../images/chip_comfy.png" srcset="../images/chip_comfy@2x.png 2x" />
<img class="responsive-img" src="../images/chip_cosy.png" srcset="../images/chip_cosy@2x.png 2x" />
<img class="responsive-img" src="../images/chip_compact.png" srcset="../images/chip_compact@2x.png 2x" />

## Chip 状態

ユーザーが Chip を操作すると、デフォルトの**アイドル**状態からフォーカスに、またはその逆に変化します。これには、Hi-Fi プロトタイプへシームレスにフローする動的なインタラクション デザインの作成が可能です。Sketch ではこれを `Symbol Overrides` で実現していますが、Adobe XD では `Component States` パラダイムを使用して簡単に状態を切り替えることができます。

<img class="responsive-img" src="../images/chip_comfy.png" srcset="../images/chip_comfy@2x.png 2x" />
`idle`

<img class="responsive-img" src="../images/chip_focus.png" srcset="../images/chip_focus@2x.png 2x" />
`focus`

## Chip の選択

Chip を選択すると、これを示す特別なチェック アイコンが左端に表示されます。`🔣 Selection Icon` オーバーライドは、この機能をトリガーする手段を提供します。

<img class="responsive-img" src="../images/chip_idle_selected.png" srcset="../images/chip_idle_selected@2x.png 2x" />

## Chip の削除

Chip を削除することが可能であると、これを示す特別なキャンセル アイコンが右端に表示されます。`🔣 Remove Icon` オーバーライドは、この機能をトリガーする手段を提供します。

<img class="responsive-img" src="../images/chip_idle_removable.png" srcset="../images/chip_idle_removable@2x.png 2x" />
`idle and removable`

## Chip コンテンツ

Chip は、prefix および suffix コンテナを介したコンテンツ テンプレートをサポートしており、Chip のメイン テキスト コンテンツの前後にアイコンとテキストを挿入できます。

<img class="responsive-img" src="../images/chip_comfy.png" srcset="../images/chip_comfy@2x.png 2x" />
`Text`

<img class="responsive-img" src="../images/chip_prefix.png" srcset="../images/chip_prefix@2x.png 2x" />
`Prefix`

<img class="responsive-img" src="../images/chip_prefix_suffix.png" srcset="../images/chip_prefix_suffix@2x.png 2x" />
`Prefix+Suffix`

<img class="responsive-img" src="../images/chip_suffix.png" srcset="../images/chip_suffix@2x.png 2x" />
`Suffix`

## Chip のスタイル設定

Chip は、境界線と背景色のさまざまなオプション、およびテキストと Prefix、Suffix、選択、および適用可能な場合はアイコンの色の削除を通じて柔軟にスタイル設定できます。

<img class="responsive-img" src="../images/chip_styling.png" srcset="../images/chip_styling@2x.png 2x" />

## Chips Area (チップ領域)

Chips Area コンポーネントを使用して Chips のコレクションを体系化します。Chips Area は Ignite UI for Angular で使用されるコンテナ領域と同一でヘルプの [Ignite UI for Angular Chip コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/chip.html) トピックで説明します。

### Chips Area のデモ

<img class="responsive-img" src="../images/chips_area_demo.png" srcset="../images/chips_area_demo@2x.png 2x" />

### Chips Area のタイプ

Chips 領域には、次の 2 つの異なるタイプがあります: Chip コレクションが関連していない Chip、および Chip が事前定義された順序で表示される接続した Chip。

<img class="responsive-img" src="../images/chips_area_standard.png" srcset="../images/chips_area_standard@2x.png 2x" />
<img class="responsive-img" src="../images/chips_area_connected.png" srcset="../images/chips_area_connected@2x.png 2x" />

### Chips Area のスタイル設定

Chips Area は Chips の継承スタイルがサポートされますが、コネクター アイコンの色とグリフも変更できます。

<img class="responsive-img" src="../images/chips_area_styling.png" srcset="../images/chips_area_styling@2x.png 2x" />

## 使用方法

Chip を使用する場合、楕円はコンテンツに合わせて自動的にサイズを変更するため、それに応じてインスタンスのサイズを調整するだけで済みます。Chip を関連コンテンツのアクション トリガーとして使用する場合、アクションが 1 つのみまたは設定で選択オプションが 1 つのみの場合は使用しないでください。

| 良い例                                                                         | 悪い例                                                                          |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| |
| <img class="responsive-img" src="../images/chip_do1.png" srcset="../images/chip_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/chip_dont2.png" srcset="../images/chip_dont2@2x.png 2x" /> |
| <img class="responsive-img" src="../images/chip_do3.png" srcset="../images/chip_do3@2x.png 2x" /> | <img class="responsive-img" src="../images/chip_dont3.png" srcset="../images/chip_dont3@2x.png 2x" /> |

Chips Area を使用する場合は、上記の各 Chip コンポーネントの提案に従ってください。また、接続した Chips Area を使用する場合、各チップはアクションとして設定せずに、関連するエンティティ (人の順序付きリストなど) にする必要があります。

| 良い例                                                                                     |悪い例                                                                                      |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| <img class="responsive-img" src="../images/chips_area_do1.png" srcset="../images/chips_area_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/chips_area_dont1.png" srcset="../images/chips_area_dont1@2x.png 2x" /> |



## その他のリソース

関連トピック:

- [Grid](grid.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
