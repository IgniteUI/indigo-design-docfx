---
title: Cards - デザイン システム コンポーネント
_description: Card コンポーネント シンボルは、シングル オブジェクトを説明するための関連操作で拡張した画像とテキストを含みます。
_keywords: デザイン システム, Sketch, Ignite UI for Angular, コンポーネント, UI ライブラリ, ウィジェット
_language: ja
---

## Cards

Card コンポーネントシンボルは、画像とテキストで単一オブジェクトの情報を表示し、共有、リンク、ブックマークなどの関連するクイック操作をトリガーできます。Card は通常概要を提供し、詳細情報のエントリ ポイントとして、ダッシュボード、テキスト、画像、アイコン、ボタンなどを表示します。 Card は、[Ignite UI for Angular Card コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/card.html)と視覚的に同じものです。

### Card デモ

<img src="../images/card_demo.png" srcset="../images/card_demo@2x.png 2x" />

### 領域

Card には 3 つの領域 (`header` - タイトルとサブタイトルの組み合わせ、`content` - Card の画像と段落、`actions` - Card に関連するクイック操作のあるツールバー) があります。

|           |                                                                                                |
| --------- | ---------------------------------------------------------------------------------------------- |
| `header`  | <img src="../images/card_headerl.png" srcset="../images/card_headerL@2x.png 2x" />             |
| `content` | <img src="../images/card_content_image.png" srcset="../images/card_content_image@2x.png 2x" /> |
| `actions` | <img src="../images/card_actions_icons.png" srcset="../images/card_actions_icons@2x.png 2x" /> |

### ヘッダー

Card ヘッダーは、3 種類のレイアウト (**Large Title** - 大きいタイトルとサブタイトル、Small Title - スモール タイトルとサブタイトル、Small Title - スモール タイトルのみ (サブタイトルなし) をサポートします。

<img src="../images/card_headerl.png" srcset="../images/card_headerL@2x.png 2x" />
<img src="../images/card_headers.png" srcset="../images/card_headerS@2x.png 2x" />
<img src="../images/card_header_title.png" srcset="../images/card_header_title@2x.png 2x" />

### コンテンツ

Card コンテンツは、5 種類のレイアウト (連絡先のようなショートカットの**配列**、タイトルあり/なしの画像、地理的な位置を表すマップ、短い説明のテキストの段落) をサポートします。

<img src="../images/card_content_shortcuts.png" srcset="../images/card_content_shortcuts@2x.png 2x" />
<img src="../images/card_content_image.png" srcset="../images/card_content_image@2x.png 2x" />
<img src="../images/card_content_map.png" srcset="../images/card_content_map@2x.png 2x" />
<img src="../images/card_content_paragraph.png" srcset="../images/card_content_paragraph@2x.png 2x" />

### 操作

Card 操作は 3 種類のレイアウトをサポートします。Flat ボタン数個のみのある**ボタン操作**、アイコン操作 (アイコン 3 つ迄)、アイコンとボタン操作の 2 つの組み合わせ。

<img src="../images/card_actions_buttons.png" srcset="../images/card_actions_buttons@2x.png 2x" />
<img src="../images/card_actions_icons.png" srcset="../images/card_actions_icons@2x.png 2x" />
<img src="../images/card_actions_mixed.png" srcset="../images/card_actions_mixed@2x.png 2x" />

### タイプ

Card で以下のレイアウトのうちの 1 つを利用できます。

|                   |                                                                                                |
| ----------------- | ---------------------------------------------------------------------------------------------- |
| Point of Interest | <img src="../images/card_poi.png" srcset="../images/card_poi@2x.png 2x" />                     |
| Audio Video Card  | <img src="../images/card_av.png" srcset="../images/card_av@2x.png 2x" />                       |
| Normal Pin        | <img src="../images/card_normal-pin.png" srcset="../images/card_normal-pin@2x.png 2x" />       |
| Condensed Pin     | <img src="../images/card_condensed-pin.png" srcset="../images/card_condensed-pin@2x.png 2x" /> |
| Shortcuts         | <img src="../images/card_shortcuts.png" srcset="../images/card_shortcuts@2x.png 2x" />         |
| Simple Card       | <img src="../images/card_simple.png" srcset="../images/card_simple@2x.png 2x" />               |
| Small Card        | <img src="../images/card_small.png" srcset="../images/card_small@2x.png 2x" />                 |
| Square Card       | <img src="../images/card_square.png" srcset="../images/card_square@2x.png 2x" />               |
| Text Card         | <img src="../images/card_text.png" srcset="../images/card_text@2x.png 2x" />                   |
| Timeline Card     | <img src="../images/card_timeline.png" srcset="../images/card_timeline@2x.png 2x" />           |

デザインに合わない場合は、[カスタム カード](cards-custom.md)を作成できます。

### スタイル設定

Card は、さまざまなオーバーライドでヘッダー、コンテンツ、テキスト、アイコン、ボタンの色などの操作領域の制御やカードの背景色の選択などスタイル設定に柔軟性があります。

<img src="../images/card_styling.png" srcset="../images/card_styling@2x.png 2x" />

## 使用方法

Card はより詳細な情報についての概要やエントリ ポイントとなるため、情報をあまり入れすぎないようにします。カード ダッシュボードの作成時にカードを常にサイズ変更しながら配置し、カード間の水平と垂直のギャップを均等にしてレイアウト グリッドを形成します。

| 良い例                                                                     | 悪い例                                                                         |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| <img src="../images/card_do1.png" srcset="../images/card_do1@2x.png 2x" /> | <img src="../images/card_dont1.png" srcset="../images/card_dont1@2x.png 2x" /> |
| <img src="../images/card_do2.png" srcset="../images/card_do2@2x.png 2x" /> | <img src="../images/card_dont2.png" srcset="../images/card_dont2@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [Avatar](avatar.md)
- [Button](button.md)
- [Icon](icon.md)
- [Card Collection Pattern](../patterns/card-collection.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。


