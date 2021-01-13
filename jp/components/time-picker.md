---
title: Time Picker - デザイン システム コンポーネント
_description: Time Picker コンポーネント シンボルは、時間選択に必要なメカニズムを提供する時間のビジュアル表現として使用します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

## Time Picker (タイム ピッカー)

Time Picker コンポーネントを使用して、日付の時間部分 (時間と分) を視覚的に表し、フォームに表示することおよびドロップダウンまたはダイアログから選択することのための適切な手段を提供します。Time Picker は、[Ignite UI for Angular Time Picker コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/time_picker.html)と視覚的に同じものです。

## Time Picker デモ

<img class="responsive-img" src="../images/timepicker_demo.png" srcset="../images/timepicker_demo@2x.png 2x" />

## Time Picker の入力

フォームに Time Picker 入力を挿入して、日付の時間部分のみを選択するためのフィールドを示すことができます。有効および無効のインアクティブ状態、およびユーザーの操作時に表示されるダイアログとドロップダウンのバリアントをサポートします。

<img class="responsive-img" src="../images/timepicker_enabled.png" srcset="../images/timepicker_enabled@2x.png 2x" />
<img class="responsive-img" src="../images/timepicker_disabled.png" srcset="../images/timepicker_disabled@2x.png 2x" />

## Picker レイアウト

Time Picker は、水平方向と垂直方向のダイアログ レイアウト、および時間を選択するさまざまなモードを容易にするドロップダウン レイアウトをサポートしています。ダイアログ レイアウトには、オーバーライドを 〜No Symbol に設定することで非表示にできるヘッダーが付属していますが、それでも、ダイアログ レイアウトが投影する影により、ドロップダウン レイアウトと区別できることに注意してください。

<img class="responsive-img" src="../images/timepicker_horizontal.png" srcset="../images/timepicker_horizontal@2x.png 2x" />
<img class="responsive-img" src="../images/timepicker_vertical.png" srcset="../images/timepicker_vertical@2x.png 2x" />
<img class="responsive-img" src="../images/timepicker_dropdown.png" srcset="../images/timepicker_dropdown@2x.png 2x" />

## コンテンツ

Time Picker は、2 種類のコンテンツ モードで 12 時間と 24 時間をサポートします。時間と分の部分の他に 12 時間コンテンツ モードで AM と PM を選択できます。

<img class="responsive-img" src="../images/timepicker_dropdown.png" srcset="../images/timepicker_dropdown@2x.png 2x" />
<img class="responsive-img" src="../images/timepicker_24mode.png" srcset="../images/timepicker_24mode@2x.png 2x" />

## ボタン

Time Picker の 2 つのボタンは、時間を元の時間に戻す選択のキャンセルおよび変更を保存するための選択の確認にそれぞれ使用します。ボタン領域はテンプレート化可能であり、たとえば、オーバーライドを 〜No Symbol に設定してボタンを非表示にしたり、別のアクションを割り当てることができます。

<img class="responsive-img" src="../images/timepicker_buttons.png" srcset="../images/timepicker_buttons@2x.png 2x" />

## スタイル設定

Time Picker は、さまざまなオーバーライドでヘッダー背景、タイトル色、選択した時間、分、AM/PM のテキストの色の制御などスタイル設定に柔軟性があります。Cancel と OK のボタンは、Flat Buttons で状況に応じたスタイル設定が可能です。

<img class="responsive-img" src="../images/timepicker_styling.png" srcset="../images/timepicker_styling@2x.png 2x" />

## 使用方法

Time Picker をダイアログとして表示する場合は、UI の残りの部分を暗くするレイヤーを追加し、ドロップダウンとして表示する場合は、ドロップダウン構成の Time Picker 入力のすぐ下に配置します。ダイアログとして表示されている場合は、Time Picker のすべてのボタンを非表示にしないでください。肯定的なアクションがないと、コンポーネントの使いやすさが損なわれます。

| 良い例                                                                                     |悪い例                                                                                      |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| <img class="responsive-img" src="../images/timepicker_do1.png" srcset="../images/timepicker_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/timepicker_dont1.png" srcset="../images/timepicker_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/timepicker_do3.png" srcset="../images/timepicker_do3@2x.png 2x" /> | <img class="responsive-img" src="../images/timepicker_dont3.png" srcset="../images/timepicker_dont3@2x.png 2x" /> |
| <img class="responsive-img" src="../images/timepicker_do2.png" srcset="../images/timepicker_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/timepicker_dont2.png" srcset="../images/timepicker_dont2@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [Calendar](calendar.md)
- [Date Picker](date-picker.md)
- [Input](input.md)
- [Form パターン](../patterns/form.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。


