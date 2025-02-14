---
title: Chip と Chips Area - Design System コンポーネント
_description: Chip Component シンボルはインタラクティブでコンパクトな表示です。Chips Area コンポーネント シンボルを使用して Chips のコンポーネントのコレクションを表します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Figma, Ignite UI for Angular, Figma to Angular, Angular, Angular デザイン システム, Figma からコードをエクスポート, Angular 用のデザイン キット, Figma HTML, Figma to HTML, Figma UI kits
_language: ja
---

# Chip (チップ)

Chip コンポーネントは、タグや連絡先 (メール受信者など) を楕円にコンパクト表示します。チップ は、[Ignite UI for Angular Chip コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/chip.html)と視覚的には同じです。

## Chip のデモ

<img class="responsive-img" src="../images/chip_demo.png" srcset="../images/chip_demo@2x.png 2x" />

## Chip サイズ

Chip は 3 つのサイズ バリアントがサポートされます。

- Large - インタラクティブ シナリオに適しています。e.g. アクション トリガー
- Medium - 電子メール作成ツールの受信者フィールドなど短い領域に適しています。
- Small - グリッド セルの値などデータが密集したシナリオに最適です。

<img class="responsive-img" src="../images/chip_size.png" srcset="../images/chip_size@2x.png 2x" />

## Chip タイプ

チップには 2 つのタイプのバリエーションがあります: Default と Primary です。

<img class="responsive-img" src="../images/chip_type.png" srcset="../images/chip_type@2x.png 2x" />

## 操作状態

Chip は、Enabled (有効) または Disabled (無効) の状態で挿入できます。Figma では、プロパティ パネルから Disabled ブール演算を使用して状態を変更できます。

<img class="responsive-img" src="../images/chip_interaction.png" srcset="../images/chip_interaction@2x.png 2x" />

## 状態

ユーザーが Chip を操作すると、デフォルトの **Idle (アイドル)** 状態から Hover (ホバー)、Focused (フォーカス済み)、または Selected (選択済み) に変化します。これには、Hi-Fi プロトタイプへシームレスにフローする動的なインタラクション デザインの作成が可能です。Figma では、これらはプロパティ パネルの State プロパティから選択できます。

<img class="responsive-img" src="../images/chip_state.png" srcset="../images/chip_state@2x.png 2x" />

## Chip の削除

Chip を削除することが可能であると、これを示す特別なキャンセル アイコンが右端に表示されます。Figma では、Remove Icon ブール値プロパティを使用して、削除アイコンを表示/非表示にできます。

<img class="responsive-img" src="../images/chip_idle_removable.png" srcset="../images/chip_idle_removable@2x.png 2x" />

## Chip コンテンツ

Chip は、prefix および suffix コンテナーを介したコンテンツ テンプレートをサポートしており、Chip のメイン ラベルの前後にアイコンとテキストを挿入できます。

Figma では、プロパティ パネルの 「Prefix Icon」 および 「Suffix Icon」 プロパティを使用して、プレフィックス アイコンとサフィックス アイコンを表示または非表示にすることができ、それに応じてレイアウトが自動的に調整されます。

<img class="responsive-img" src="../images/chip_large.png" srcset="../images/chip_large@2x.png 2x" />
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

Chips Area コンポーネントを使用して Chips のコレクションを体系化します。Chips Area は Ignite UI for Angular で使用される Chip Area と同一でヘルプの [Ignite UI for Angular Chip コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/chip.html) トピックで説明します。

<img class="responsive-img" src="../images/chips_area_demo.png" srcset="../images/chips_area_demo@2x.png 2x" />

Chips Area は Chips の継承スタイルがサポートされます。

<img class="responsive-img" src="../images/chips_area_styling.png" srcset="../images/chips_area_styling@2x.png 2x" />

## 使用方法

Chip を使用する場合、楕円はコンテンツに合わせて自動的にサイズを変更するため、それに応じてインスタンスのサイズを調整するだけで済みます。Chip を関連コンテンツのアクション トリガーとして使用する場合、アクションが 1 つのみまたは設定で選択オプションが 1 つのみの場合は使用しないでください。

| 良い例                                                                         | 悪い例                                                                          |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| |
| <img class="responsive-img" src="../images/chip_do1.png" srcset="../images/chip_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/chip_dont1.png" srcset="../images/chip_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/chip_do2.png" srcset="../images/chip_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/chip_dont2.png" srcset="../images/chip_dont2@2x.png 2x" /> |



## その他のリソース

関連トピック:

- [Grid](grid.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
