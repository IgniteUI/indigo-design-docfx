---
title: Text - デザイン システム コンポーネント
_description: Text コンポーネント システムは、非インタラクティブなタイトルや段落テキストを表示します。
_keywords: デザイン システム, Sketch, コンポーネント, UI Library, ウィジェット
_language: ja
---

## Text

Text コンポーネント シンボルは、ニュースやブログ ポストなどインタラクティブでない段落文字列のタイトル コンテンツを表示します。

### Text デモ

![](../images/text_demo.png)

### Title と Paragraph

Text には、Titles と Paragraphs のためのバリアントがあります。

![](../images/text_title.png)
![](../images/text_paragraph.png)

### タイトル サイズ

テキスト タイトルは、最小 H6 から最大 H1 の 6 つのプリセット サイズがあります。

![](../images/text_h1.png)
![](../images/text_h2.png)
![](../images/text_h3.png)
![](../images/text_h4.png)
![](../images/text_h5.png)
![](../images/text_h6.png)

### 段落サイズ

テキスト段落には、ラージ **Body 1**、スモール Body 2、画像やタイトルの注釈に使用する極小キャプションがあります。

![](../images/text_b1.png)
![](../images/text_b2.png)
![](../images/text_caption.png)

### スタイル設定

Titles と Paragraphs は、Styling ライブラリの Typography 部分で使用できるテキスト ウェイトや色プリセットのみから選択できます。

![](../images/text_styling.png)

## 使用方法

Hyperlink を複数同時に使用する場合は、Hyperlink を目立つように Paragraph テキスト色を選択します。同じ色や似たような色を使用せずに全体的なデザインの色を統一します。1行注釈のみの段落キャプション サイズを使用し、複数行に及ぶより長い文字列に極小フォントサイズなどは使用しないようにします。

| いい例                          | 悪い例                         |
| --------------------------- | ----------------------------- |
| ![](../images/text_do1.png) | ![](../images/text_dont1.png) |
| ![](../images/text_do2.png) | ![](../images/text_dont2.png) |

## コードの生成

Paragraph は、テキストと UI をカスタマイズできるオプションのあるコンポーネントです。
Paragraph コンポーネントのサイズとスタイルのプロパティを設定できます。HTML タグは、設定に関係なく "p" タグとラップします。

> [!WARNING]
> デザインの Title または Paragraph Text のインスタンスで`シンボルからデタッチ`をトリガーすると、ほとんどの場合で Title または Paragraph Text のためのコード生成機能が失われる結果となります。

### サイズ

Size はネスト プロパティで Title または Paragraph Size.を設定します。

|           |                           |
| --------- | ------------------------- |
| Title     | H1、H2、H3、H4、H5、または H6 |
| Paragraph | Body1、Body2、または Caption  |

### スタイル設定

テキストは、右揃え、左揃え、中央揃えなどさまざまなタイポグラフィで構成可能です。外観は、灰色、緑色 (成功)、警告 (警告) の 3 色の色合いに設定できます。Warn (orange), primary (blue), secondary (ruby), white, black, error (red)。

### Text

Text は、ネスト プロパティでコンポーネントで描画されるコンテンツを構成します。

#### 非バインディング

- 国別のオリンピック メダル数

#### 非バインディング

- {country} のオリンピック メダル数
- {olympicChartTitle}

## その他のリソース

コミュニティに参加して新しいアイデアをご提案ください。

- [Indigo Design **GitHub** (英語)](https://github.com/IgniteUI/design-system-docfx)
