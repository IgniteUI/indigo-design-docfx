﻿---
title: Card - デザイン システム コンポーネント
_description: Card コンポーネント シンボルは、シングル オブジェクトを説明するための関連操作で拡張した画像とテキストを含みます。
_keywords: デザイン システム, デザイン システム UX, UI キット, Figma, Figma to Angular, Figma からコードをエクスポート, Figma to HTML, Figma UI キット, Ignite UI for Angular, Angular, Angular デザイン システム, Angular 用のデザイン キット, Figma HTML
_language: ja
---

# Card

Card コンポーネントを使用して、画像、マップ、その他のメディア コンテンツ、およびテキストを介して単一のオブジェクトの情報を表示し、共有、「いいね」、ブックマークなどの関連するクイック操作をトリガーできます。これは通常、より詳細な情報の概要およびエントリ ポイントとして機能します。さまざまなコンテンツとレイアウトのカードを組み合わせて、ダッシュボードを作成できます。Card は、[Ignite UI for Angular Card コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/card.html)と視覚的に同じものです。

## Card のデモ

<img class="responsive-img" src="../images/card_demo.png" srcset="../images/card_demo@2x.png 2x" />

## 領域

Card には 4 つの異なる領域があります: 画像またはマップ メディアを表示する上部の `image`、サムネイル Avatar、Title、Subtitle の組み合わせを保持する `header`、テキスト段落と Card の詳細を示す画像配列を保持する `content`、および Card に関連するクイック操作を備えたツールバーとして機能する `actions` です。

|         |                                                                                                |
| ------- | ---------------------------------------------------------------------------------------------- |
| image   | <img class="responsive-img" src="../images/card_media_image.png" srcset="../images/card_media_image@2x.png 2x" /> |
| header  | <img class="responsive-img" src="../images/card_header.png" srcset="../images/card_header@2x.png 2x" /> |
| content | <img class="responsive-img" src="../images/card_content.png" srcset="../images/card_content@2x.png 2x" /> |
| actions | <img class="responsive-img" src="../images/card_actions_buttons_icons.png" srcset="../images/card_actions_buttons_icons@2x.png 2x" /> |

## 画像

画像の領域は、9 つのバリアントのコレクションをサポートします - 世界の人口密集領域用の 6 つの大陸地図、1 つの World Map、1 つの Navigation Map、および Image です。

<img class="responsive-img" src="../images/card_media_worldmap.png" srcset="../images/card_media_worldmap@2x.png 2x" />

<img class="responsive-img" src="../images/card_media_nav.png" srcset="../images/card_media_nav@2x.png 2x" />

<img class="responsive-img" src="../images/card_media_image.png" srcset="../images/card_media_image@2x.png 2x" />

## ヘッダー

Card ヘッダーは、Avatar Thumbnail、Title、および Subtitle 要素を含むさまざまなレイアウトをサポートします。Figma では、自動レイアウトは、サイド パネルから選択された `header` 要素のプロパティに基づいてカード レイアウトを調整します。

<img class="responsive-img" src="../images/card_header.png" srcset="../images/card_header@2x.png 2x" />

## コンテンツ

コンテンツは、短い説明テキストの Paragraph (段落) と、Contacts (連絡先) などのショートカットの Array をサポートしています。

<img class="responsive-img" src="../images/card_content_paragraph.png" srcset="../images/card_content_paragraph@2x.png 2x" />

<img class="responsive-img" src="../images/card_content_array.png" srcset="../images/card_content_array@2x.png 2x" />

## 操作

- **Figma** では、Card 操作は 4 つの異なるレイアウトで提供されます: **Buttons + Icons (ボタン + アイコン)**、両方とも 2 つのフラット ボタンと 3 つのアイコンを含む逆の **Icons + Buttons (アイコン + ボタン)**、および **Only Buttons (ボタンのみ)** と **Only Icons (アイコンのみ)** のバリアント。すべてのレイアウトには、要素が均等な間隔で配置され、応答性の高い動作のための制約が設定されて構築されることを保証する Justified バリアントがあります。その他の 4 つは自動レイアウトを使用して自動レイアウト調整を行います。さらに、**Only Buttons** および **Only Icons** のバリアントに特化して Button と Icon の位置を定義できる `Content Position` プロパティがあります。

|                   |  両端揃えの操作**オフ**                                            |  両端揃えの操作**オン**                                             |
| ----------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Buttons + Icons   | <img class="responsive-img" src="../images/card_actions_buttons_icons.png" srcset="../images/card_actions_buttons_icons@2x.png 2x" /> | <img class="responsive-img" src="../images/card_actions_just_buttons_icons.png" srcset="../images/card_actions_just_buttons_icons@2x.png 2x" /> |
| Icons + Buttons   | <img class="responsive-img" src="../images/card_actions_icons_buttons.png" srcset="../images/card_actions_icons_buttons@2x.png 2x" /> | <img class="responsive-img" src="../images/card_actions_just_icons_buttons.png" srcset="../images/card_actions_just_icons_buttons@2x.png 2x" /> |
| Only Buttons     | <img class="responsive-img" src="../images/card_actions_buttons_right.png" srcset="../images/card_actions_buttons_right@2x.png 2x" /> <div class="divider--half"></div> <img class="responsive-img" src="../images/card_actions_buttons_left.png" srcset="../images/card_actions_buttons_left@2x.png 2x" /> | <img class="responsive-img" src="../images/card_actions_just_buttons_right.png" srcset="../images/card_actions_just_buttons_right@2x.png 2x" /> <div class="divider--half"></div> <img class="responsive-img" src="../images/card_actions_just_buttons_left.png" srcset="../images/card_actions_just_buttons_left@2x.png 2x" /> |
| Only Icons        | <img class="responsive-img" src="../images/card_actions_icons_right.png" srcset="../images/card_actions_icons_right@2x.png 2x" /> <div class="divider--half"></div> <img class="responsive-img" src="../images/card_actions_icons_left.png" srcset="../images/card_actions_icons_left@2x.png 2x" /> | <img class="responsive-img" src="../images/card_actions_just_icons_right.png" srcset="../images/card_actions_just_icons_right@2x.png 2x" /> <div class="divider--half"></div> <img class="responsive-img" src="../images/card_actions_just_icons_left.png" srcset="../images/card_actions_just_icons_left@2x.png 2x" /> |

## Card レイアウト

Figma の自動レイアウトを使用することにより、Card は特定の領域または要素を除外してさまざまなレイアウトを作成し、最初は同じコンポーネントに基づいてさまざまな異なるカードをサポートできます。

<img class="responsive-img" src="../images/card_demo.png" srcset="../images/card_demo@2x.png 2x" />

## スタイル設定

Card には、画像、ヘッダー、コンテンツ、およびテキスト スタイル、アイコン タイプ、色などの操作領域のオプションやボタン色および Card の背景色の選択などスタイル設定に柔軟性があります。

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
