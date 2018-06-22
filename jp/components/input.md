---
title: Input - デザイン システム コンポーネント
_description: Input コンポーネント シンボルは、文字列、数値、日付などユーザー データのコレクションが使用できます。
_keywords: デザイン システム, Sketch, Ignite UI for Angular, コンポーネント, UI ライブラリ, ウィジェット
_language: ja
---

## Input

Input コンポーネント シンボルは、さまざまなコンテキスト、日付、その他の値に合わせて使用する文字列や数値などのユーザー データを収集します。複数入力は、簡単に使用できるフォームに組み合わせることができます。Input は、[Ignite UI for Angular Input Group コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/input_group.html)と視覚的に同じものです。

### Input デモ

![](../images/input_demo.png)

### タイプ

Input はヘルパー テキスト (あり/なし) で 4 つの異なるタイプから選択します。より軽い印象となる線スタイルまたは単色背景ではっきり認識される境界線スタイルなど。Boxed スタイルは、コンテンツを読みやすくするために Input をビビッドなイメージの上に配置したときに使用するのが最も適しています。

![](../images/input_no-helper.png)
![](../images/input_helper.png)

![](../images/input_line.png)
`line`
![](../images/input_box.png)
`box`
![](../images/input_border.png)
`border`
![](../images/input_search.png)
`search`

### バリアント

Input は、明暗バリアントで分かりやすく、背景に明暗のコントラストを付けてスタイル設定できます。

![](../images/input_dark.png)
![](../images/input_light.png)

### 状態

ユーザーが Input とインタラクティブに操作する際にさまざまな状態を経由します。コンテンツの代わりにプレースホルダーがある**アイドル**状態、ユーザーが入力中のフォーカス状態、ユーザーがコンテンツの追加を完了して次に進むときの塗りつぶし状態、入力がインタラクションをサポートしない無効状態。柔軟性が向上したことにより、Hi-Fi プロトタイプへシームレスにフローする動的なインタラクション デザインの作成が可能です。

![](../images/input_focused.png)
`focused`
![](../images/input_filled.png)
`filled`
![](../images/input_disabled.png)
`disabled`

経験豊富なデザイナーは、ユーザー入力を制限して無効な状態を防止するために、検証スタイルを使用します。検証スタイルは、Input で成功、警告、エラーを表示する洗練されたデザインを提供します。

![](../images/input_success.png)
![](../images/input_warning.png)
![](../images/input_error.png)

### レイアウト

Input には特定の場合に入力 (@email.com サフィックス) を軽減するテキスト文字列のプレフィックス/サフィックスやアイコンをサポートします。これによりキーストロークを減らし、予期されるコンテンツを明確にすることができます。カレンダーのプレフィックスでは、Input が日付や時間のコンテンツとして適しているかを示すことができます。

![](../images/input_prefix.png)
![](../images/input_suffix.png)

> [!Note]
> ↳ Layout
>
> - .../OnlyText/...
> - .../Prefix + Suffix/Icons/...
> - .../Prefix + Suffix/String/...
> - .../Suffix/Icons/...
> - .../Suffix/String/...

### スタイル設定

Input は、Styling ライブラリのテーマでプライマリ、成功、警告、エラーの色を変更できます。

![](../images/input_styling.png)

## 使用方法

Input のボックス タイプを使用して画像上にフォームを配置して読みやすくします。デザインの警告やエラー状態で Input を使用する際にヘルパーテキストを使用してユーザーにガイダンスを提供します。

| いい例                       | 悪い例                         |
| ---------------------------- | ------------------------------ |
| ![](../images/input_do1.png) | ![](../images/input_dont1.png) |
| ![](../images/input_do2.png) | ![](../images/input_dont2.png) |

## その他のリソース

関連トピック:

- [Form Pattern](forms.md)
- [User Profile Pattern](userProfile.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

- [Indigo Design **GitHub** (英語)](https://github.com/IgniteUI/design-system-docfx)
