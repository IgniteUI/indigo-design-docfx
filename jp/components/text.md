---
title: Text - デザイン システム コンポーネント
_description: Text コンポーネント システムは、非インタラクティブなタイトルや段落テキストを表示します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# Text (テキスト)

Text コンポーネント シンボルは、ニュースやブログ ポストなどインタラクティブでない段落文字列のタイトル コンテンツを表示します。

## Text のデモ

<img class="responsive-img" src="../images/text_demo.png" srcset="../images/text_demo@2x.png 2x" />

## Title と Paragraph

Text には、Titles と Paragraphs のためのバリアントがあります。

<img class="responsive-img" src="../images/text_title.png" srcset="../images/text_title@2x.png 2x" />
<img class="responsive-img" src="../images/text_paragraph.png" srcset="../images/text_paragraph@2x.png 2x" />

## タイトル サイズ

テキスト タイトルは、最小 H6 から最大 H1 の 6 つのプリセット サイズがあります。

<img class="responsive-img" src="../images/text_h1.png" srcset="../images/text_h1@2x.png 2x" />
<img class="responsive-img" src="../images/text_h2.png" srcset="../images/text_h2@2x.png 2x" />
<img class="responsive-img" src="../images/text_h3.png" srcset="../images/text_h3@2x.png 2x" />
<img class="responsive-img" src="../images/text_h4.png" srcset="../images/text_h4@2x.png 2x" />
<img class="responsive-img" src="../images/text_h5.png" srcset="../images/text_h5@2x.png 2x" />
<img class="responsive-img" src="../images/text_h6.png" srcset="../images/text_h6@2x.png 2x" />

Title の挿入後、そのサイズに基づいて高さを設定してください。

| サイズ | ピクセル単位の高さ |
| ------ | ------------------ |
| H1     | 170px              |
| H2     | 85px               |
| H3     | 68px               |
| H4     | 42px               |
| H5     | 36px               |
| H6     | 31px               |

## 段落サイズ

テキスト段落には、ラージ **Body 1**、スモール Body 2、画像やタイトルの注釈に使用する極小キャプションがあります。

<img class="responsive-img" src="../images/text_b1.png" srcset="../images/text_b1@2x.png 2x" />
<img class="responsive-img" src="../images/text_b2.png" srcset="../images/text_b2@2x.png 2x" />
<img class="responsive-img" src="../images/text_caption.png" srcset="../images/text_caption@2x.png 2x" />

Paragraph の挿入後、そのサイズおよびテキスト コンテンツの長さに基づいて高さを設定してください。Paragraph が複数行にまたがる場合、以下の表の値を行数でかけ算します。

| サイズ  | ピクセル単位の高さ |
| ------- | ------------------ |
| Body 1  | 24px               |
| Body 2  | 21px               |
| Caption | 19px               |

## スタイル設定

Titles と Paragraphs は、Styling ライブラリの Typography 部分で使用できるテキスト ウェイトや色プリセットのみから選択できます。

<img class="responsive-img" src="../images/text_styling.png" srcset="../images/text_styling@2x.png 2x" />

## 使用方法

Hyperlink を複数同時に使用する場合は、Hyperlink を目立つように Paragraph テキスト色を選択します。同じ色や似たような色を使用せずに全体的なデザインの色を統一します。1 行注釈のみの段落キャプション サイズを使用し、複数行に及ぶより長い文字列に極小フォントサイズなどは使用しないようにします。

| 良い例                                                                     | 悪い例                                                                         |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| <img class="responsive-img" src="../images/text_do1.png" srcset="../images/text_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/text_dont1.png" srcset="../images/text_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/text_do2.png" srcset="../images/text_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/text_dont2.png" srcset="../images/text_dont2@2x.png 2x" /> |

## コードの生成

Title または Paragraph に色やフォントを指定した場合、タイトルまたは段落要素に適用される CSS クラスに直接適用されます。

> [!WARNING]
> デザインの Title または Paragraph Text のインスタンスで `Detach from Symbol` をトリガーすると、ほとんどの場合で Title または Paragraph Text のためのコード生成機能が失われる結果となります。コード生成で Sketch のレイアウトと一致させるには、コンテンツを描画するために必要な高さを Title および Paragraph に設定してください。

### テキスト

Text プロパティにテキスト、[テキストのバインディング](../codegen/data-binding.md)、または両方を含むことができます。例:

- 設定
- {settingsLabel}
- 重要な {labelText}

## その他のリソース

関連トピック:

- [データ バインディング](../codegen/data-binding.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。


