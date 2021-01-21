---
title: Input - デザイン システム コンポーネント
_description: Input コンポーネント シンボルは、文字列、数値、日付などユーザー データのコレクションが使用できます。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# Input (入力)

Use the Input component to collect user data such as strings, numbers fitting various contexts, dates, and other values, such as emails and passwords. 複数入力は、簡単に使用できるフォームに組み合わせることができます。Input は、[Ignite UI for Angular Input Group](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/input_group.html) コンポーネントと視覚的に同じものです。

## Input デモ

<img class="responsive-img" src="../images/input_demo.png" srcset="../images/input_demo@2x.png 2x" />

## タイプ

The Input lets you choose a preset from three options: simple, hint which comes with a helper text, and searchbar.

<img class="responsive-img" src="../images/input_simple.png" srcset="../images/input_simple@2x.png 2x" />
<img class="responsive-img" src="../images/input_hint.png" srcset="../images/input_hint@2x.png 2x" />
<img class="responsive-img" src="../images/input_searchbar.png" srcset="../images/input_searchbar@2x.png 2x" />

The hint and simple presets offer choice between three distinct types: line style for a more airy look, border style for a more structured perception on solid color backgrounds, and boxed style which is most appropriate when the Input is placed on top of a vivid image to improve the readability of its content.

<img class="responsive-img" src="../images/input_simple.png" srcset="../images/input_simple@2x.png 2x" />
<img class="responsive-img" src="../images/input_border.png" srcset="../images/input_border@2x.png 2x" />
<img class="responsive-img" src="../images/input_box.png" srcset="../images/input_box@2x.png 2x" />

## 操作状態

各プリセットは、有効または無効の状態で挿入できます。

<img class="responsive-img" src="../images/input_enabled.png" srcset="../images/input_enabled@2x.png 2x" />
<img class="responsive-img" src="../images/input_disabled.png" srcset="../images/input_disabled@2x.png 2x" />

## バリアント

Input は、明暗バリアント (デフォルトは**暗い**) で分かりやすく、背景に明暗のコントラストを付けてスタイル設定できます。

<img class="responsive-img" src="../images/input_dark.png" srcset="../images/input_dark@2x.png 2x" />
<img class="responsive-img" src="../images/input_light.png" srcset="../images/input_light@2x.png 2x" />

## 状態

ユーザーが Input とインタラクティブに操作する際にさまざまな状態を経由します。コンテンツの代わりにプレースホルダーがある**アイドル状態**、ユーザーが入力中のフォーカス状態、ユーザーがコンテンツの追加を完了して次に進むときの塗りつぶし状態。柔軟性が向上したことにより、Hi-Fi プロトタイプへシームレスにフローする動的なインタラクション デザインの作成が可能です。

<img class="responsive-img" src="../images/input_idle.png" srcset="../images/input_idle@2x.png 2x" />
`idle`

<img class="responsive-img" src="../images/input_focused.png" srcset="../images/input_focused@2x.png 2x" />
`focused`

<img class="responsive-img" src="../images/input_filled.png" srcset="../images/input_filled@2x.png 2x" />
`filled`

経験豊富なデザイナーは、ユーザー入力を制限して無効な状態を防止するために、検証スタイルを使用します。検証スタイルは、Input で成功、警告、エラーを表示する洗練されたデザインを提供します。

<img class="responsive-img" src="../images/input_success.png" srcset="../images/input_success@2x.png 2x" />
<img class="responsive-img" src="../images/input_warning.png" srcset="../images/input_warning@2x.png 2x" />
<img class="responsive-img" src="../images/input_error.png" srcset="../images/input_error@2x.png 2x" />

## レイアウト

The Input has rich support for prefix and suffix through a combination of text and icons that can, in certain cases, reduce the input effort for the user: e.g. an @email.com suffix means both fewer keystrokes and more clarity of expected content. You can remove the prefix or suffix by setting the respective container to ~No Symbol from the overrides.

<img class="responsive-img" src="../images/input_prefix.png" srcset="../images/input_prefix@2x.png 2x" />
<img class="responsive-img" src="../images/input_suffix.png" srcset="../images/input_suffix@2x.png 2x" />

## スタイル設定

The Input comes with styling flexibility through the colors of its background and bottom line, as well as icon color and text styles of its prefix, suffix, and main areas of content. To change the validation styles, it is recommended to update the respective color variables in the Indigo.Design library. 

<img class="responsive-img" src="../images/input_styling.png" srcset="../images/input_styling@2x.png 2x" />

## 使用方法

Input のボックス タイプを使用して画像上にフォームを配置して読みやすくします。デザインの警告やエラー状態で Input を使用する際にヘルパー テキストを使用してユーザーにガイダンスを提供します。

| 良い例                                                                           | 悪い例                                                                            |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/input_do1.png" srcset="../images/input_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/input_dont1.png" srcset="../images/input_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/input_do2.png" srcset="../images/input_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/input_dont2.png" srcset="../images/input_dont2@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [Form パターン](../patterns/form.md)
- [User Profile パターン](../patterns/user-profile.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
