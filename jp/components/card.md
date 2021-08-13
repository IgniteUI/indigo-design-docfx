---
title: Card - デザイン システム コンポーネント
_description: Card コンポーネント シンボルは、シングル オブジェクトを説明するための関連操作で拡張した画像とテキストを含みます。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# Card

Card コンポーネントを使用して、画像、マップ、その他のメディア コンテンツ、およびテキストを介して単一のオブジェクトの情報を表示し、共有、「いいね」、ブックマークなどの関連するクイック操作をトリガーできます。これは通常、より詳細な情報の概要およびエントリ ポイントとして機能します。さまざまなコンテンツとレイアウトのカードを組み合わせて、ダッシュボードを作成できます。Card は、[Ignite UI for Angular Card コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/card.html)と視覚的に同じものです。

## Card のデモ

<img class="responsive-img" src="../images/card_demo.png" srcset="../images/card_demo@2x.png 2x" />

## 領域

Card には 4 つの異なる領域があります: 画像またはマップ メディアを表示する上部の `image` (画像)、サムネイル Avatar、Title、Subtitle の組み合わせを保持する `header` (ヘッダー)、Card の詳細を示すテキスト段落を保持する `body` (本文)、および Card に関連するクイック操作を備えたツールバーとして機能する `actions` (操作) です。

|         |                                                                                                |
| ------- | ---------------------------------------------------------------------------------------------- |
| image   | <img class="responsive-img" src="../images/card_media_image.png" srcset="../images/card_media_image@2x.png 2x" /> |
| header  | <img class="responsive-img" src="../images/card_header.png" srcset="../images/card_header@2x.png 2x" /> |
| body    | <img class="responsive-img" src="../images/card_body.png" srcset="../images/card_body@2x.png 2x" /> |
| actions | <img class="responsive-img" src="../images/card_actions_buttons_icons.png" srcset="../images/card_actions_buttons_icons@2x.png 2x" /> |

## 画像と本文

画像と本文の Card 領域は、11 のオーバーライドの同じコレクションをサポートします: 人口の多い世界領域の 6 つの大陸地図、1 つの World Map、1 つの Navigation Map、および連絡先、画像、簡単な説明テキストの Paragraph などのショートカットの配列です。

<img class="responsive-img" src="../images/card_media_worldmap.png" srcset="../images/card_media_worldmap@2x.png 2x" />

<img class="responsive-img" src="../images/card_media_nav.png" srcset="../images/card_media_nav@2x.png 2x" />

<img class="responsive-img" src="../images/card_media_image.png" srcset="../images/card_media_image@2x.png 2x" />

<img class="responsive-img" src="../images/card_body.png" srcset="../images/card_body@2x.png 2x" />

## ヘッダー

The Card header supports various layouts, including an Avatar Thumbnail, Title, and Subtitle elements. In Sketch, the smart layout rules adjust the layout accordingly when you set the elements you want to hide to ~No Symbol. In Adobe XD, the use of a Stack lets you achieve the same when you delete unnecessary layers.

<img class="responsive-img" src="../images/card_header.png" srcset="../images/card_header@2x.png 2x" />

## 操作

Card 操作には、6 つの異なるレイアウトがあります: 2 つの Flat Button と 3 つの Icon を備えた **Button + Icon Actions**、その逆に配置された逆 Icon + Button Actions、それらの Justified~ バリアントおよび Justified Button Actions と Justified Icon Actions のみを備えたバリアントです。Each of the six is defined as an override with a smart layout in Sketch, letting you remove elements by setting them to ~No Symbol and have the rest automatically adjust to the desired layout. In Adobe XD, the same variety is available and you may also delete unnecessary layers with a layout that adjusts automatically thanks to the use of a Stack.

<img class="responsive-img" src="../images/card_actions_buttons_icons.png" srcset="../images/card_actions_buttons_icons@2x.png 2x" />

<img class="responsive-img" src="../images/card_actions_icons_buttons.png" srcset="../images/card_actions_icons_buttons@2x.png 2x" />

<img class="responsive-img" src="../images/card_actions_just_buttons_icons.png" srcset="../images/card_actions_just_buttons_icons@2x.png 2x" />

<img class="responsive-img" src="../images/card_actions_just_buttons.png" srcset="../images/card_actions_just_buttons@2x.png 2x" />

<img class="responsive-img" src="../images/card_actions_just_icons_buttons.png" srcset="../images/card_actions_just_icons_buttons@2x.png 2x" />

<img class="responsive-img" src="../images/card_actions_just_icons.png" srcset="../images/card_actions_just_icons@2x.png 2x" />

## Card レイアウト

Through the use of a smart layout in Sketch and a Stack in Adobe XD, the Card can produce various layouts by excluding certain areas or elements within them to support a variety of distinct cards based upon the same Component initially.

<img class="responsive-img" src="../images/card_demo.png" srcset="../images/card_demo@2x.png 2x" />

## スタイル設定

Card には、画像、ヘッダー、本文、およびテキスト スタイル、アイコン タイプ、色などの操作領域のオプションやボタン色および Card の背景色の選択などスタイル設定に柔軟性があります。

<img class="responsive-img" src="../images/card_styling.png" srcset="../images/card_styling@2x.png 2x" />

## 使用方法

Card は通常、概要 UI および詳細情報のエントリ ポイントとして機能します。情報が多すぎて目詰まりしないようにします。ダッシュボードを作成するときは、カードを常にサイズ変更しながら配置し、カード間の水平と垂直のギャップを均等にしてレイアウト グリッドを形成します。

| 良い例                                                                         | 悪い例                                                                          |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| <img class="responsive-img" src="../images/card_do1.png" srcset="../images/card_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/card_dont1.png" srcset="../images/card_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/card_do2.png" srcset="../images/card_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/card_dont2.png" srcset="../images/card_dont2@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [Avatar](avatar.md)
- [Button](button.md)
- [Icon](icon.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
