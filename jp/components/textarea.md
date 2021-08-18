---
title: Text Area - デザイン システム コンポーネント
_description: Text Area コンポーネント シンボルを使用すると、長いテキスト ユーザー データを収集して複数行に表示できます。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# Text Area (テキスト領域)

Text Area コンポーネントを使用して、ユーザーが複数行に表示される長いテキスト データを入力して編集できるようにします。Text Area を使用すると、ユーザーはドラッグ インジケーターによって領域のサイズを水平方向および垂直方向に変更できます。ユーザーは、[Ignite UI for Angular Input Group コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/input_group.html) をテキストとして装飾することで、Text Area コンポーネントを作成できます。  

## Text Area のデモ

<img class="responsive-img" src="../images/textarea_demo.png" srcset="../images/textarea_demo@2x.png 2x" />

## 操作状態

Text Area は、有効または無効の状態で挿入できます。

<img class="responsive-img" src="../images/textarea_enabled.png" srcset="../images/textarea_enabled@2x.png 2x" />
<img class="responsive-img" src="../images/textarea_disabled.png" srcset="../images/textarea_disabled@2x.png 2x" />

## バリアント

Text Area は、明暗バリアント (デフォルトは**暗い**) で分かりやすく、背景に明暗のコントラストを付けてスタイル設定できます。

<img class="responsive-img" src="../images/textarea_dark.png" srcset="../images/textarea_dark@2x.png 2x" />
<img class="responsive-img" src="../images/textarea_light.png" srcset="../images/textarea_light@2x.png 2x" />

## 状態

ユーザーが Text Area とインタラクティブに操作する際にさまざまな状態を経由します。コンテンツの代わりにプレースホルダーがある**アイドル状態**、ユーザーが入力中のフォーカス状態、ユーザーがコンテンツの追加を完了して次に進むときの塗りつぶし状態。柔軟性が向上したことにより、Hi-Fi プロトタイプへシームレスにフローする動的なインタラクション デザインの作成が可能です。

<img class="responsive-img" src="../images/textarea_idle.png" srcset="../images/textarea_idle@2x.png 2x" />
`idle`

<img class="responsive-img" src="../images/textarea_focused.png" srcset="../images/textarea_focused@2x.png 2x" />
`focused`

<img class="responsive-img" src="../images/textarea_filled.png" srcset="../images/textarea_filled@2x.png 2x" />
`filled`

経験豊富なデザイナーは、ユーザー入力を制限して無効な状態を防止するために、検証スタイルを使用します。検証スタイルは、Text Area で成功、警告、エラーを表示する洗練されたデザインを提供します。

<img class="responsive-img" src="../images/textarea_success.png" srcset="../images/textarea_success@2x.png 2x" />
<img class="responsive-img" src="../images/textarea_warning.png" srcset="../images/textarea_warning@2x.png 2x" />
<img class="responsive-img" src="../images/textarea_error.png" srcset="../images/textarea_error@2x.png 2x" />

Sketch では状態と検証状態を `Symbol Overrides` で実現していますが、Adobe XD では `Component States` パラダイムを使用して簡単に状態を切り替えることができます。

## サイズ変更

Text Area を使用すると、ユーザーは、新しい制約に合わせてテキストを自動的に調整しながら、右下隅にあるドラッグ インジケーターによって領域のサイズを水平方向および垂直方向に変更できます。

<img class="responsive-img" src="../images/textarea_resizing.png" srcset="../images/textarea_resizing@2x.png 2x" />

## スタイル設定

Text Area には、背景、ドラッグ インジケーター、境界線、およびテキストの色によるスタイル設定の柔軟性があります。検証スタイルを変更するには、Indigo.Design ライブラリのそれぞれの色変数を更新することをお勧めします。

<img class="responsive-img" src="../images/textarea_styling.png" srcset="../images/textarea_styling@2x.png 2x" />

## 使用方法

Text Area を使用するときは、常にラベルを付ける必要があります。ラベルのないテキスト領域は不明瞭に表示されます。

| 良い例                                                                           | 悪い例                                                                            |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/textarea_do1.png" srcset="../images/textarea_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/textarea_dont1.png" srcset="../images/textarea_dont1@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [Input](input.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
