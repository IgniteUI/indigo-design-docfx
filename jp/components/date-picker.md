---
title: Date Picker - デザイン システム コンポーネント
_description: Date Picker コンポーネント シンボルは、日付選択に必要なメカニズムを提供する日付のビジュアル表現として使用します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット 
_language: ja
---

# Date Picker (日付ピッカー)

Date Picker コンポーネントは、日付を視覚的に表現し、フォームへの表示およびドロップダウンまたはダイアログから選択するための適切な手段を提供します。Date Picker は、[Ignite UI for Angular Date Picker コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/date_picker.html)と視覚的に同じものです。

## Date Picker のデモ

<img class="responsive-img" src="../images/datepicker_demo.png" srcset="../images/datepicker_demo@2x.png 2x" />

## Date Picker Input (日付ピッカー入力)

フォームに Date Picker Input を挿入して、日付を選択するためのフィールドを示すことができます。Enabled および Disabled の操作状態、およびユーザーの操作時に表示されるダイアログとドロップダウンのバリアントをサポートします。

<img class="responsive-img" src="../images/datepicker_enabled.png" srcset="../images/datepicker_enabled@2x.png 2x" />
<img class="responsive-img" src="../images/datepicker_disabled.png" srcset="../images/datepicker_disabled@2x.png 2x" />

## Picker レイアウト

Date Picker は、Horizontal と Vertical 方向の Dialog レイアウト、およびドロップダウン レイアウトをサポートし、日付を選択するさまざまなモードを容易にします。Dialog レイアウトには、オーバーライドを ~No Symbol に設定することで非表示にできる Header が付属していますが、その他にも Dialog レイアウトが投影する影により、Drop-down レイアウトと区別できます。

<img class="responsive-img" src="../images/datepicker_horizontal.png" srcset="../images/datepicker_horizontal@2x.png 2x" />
<img class="responsive-img" src="../images/datepicker_vertical.png" srcset="../images/datepicker_vertical@2x.png 2x" />
<img class="responsive-img" src="../images/datepicker_dropdown.png" srcset="../images/datepicker_dropdown@2x.png 2x" />

## 週のはじめ

週の開始日は、Date Picker の挿入時にオプションとして最も一般的なシナリオである日曜日と月曜日から選択できます。

<img class="responsive-img" src="../images/datepicker_dropdown.png" srcset="../images/datepicker_dropdown@2x.png 2x" />
<img class="responsive-img" src="../images/datepicker_monday.png" srcset="../images/datepicker_monday@2x.png 2x" />

## Week Numbers (週番号)

Date Picker には、Calendar と同じように Week Numbers のサポートが組み込まれています。UI のこの部分を表示したくない場合は、Week Numbers のオーバーライドを ~No Symbol に設定するだけです。

<img class="responsive-img" src="../images/datepicker_weeknumbers.png" srcset="../images/datepicker_weeknumbers@2x.png 2x" />

## 選択

Calendar と同様に、Date Picker では 3 つの選択モードから選択できます: ユーザーが 1 つの日付のみを選択できるように制限する  **Single Day**、ランダムな複数の日付を選択できる Multiple Days、および開始から終了までのすべての日付を選択する手段を提供する Range。

<img class="responsive-img" src="../images/datepicker_dropdown.png" srcset="../images/datepicker_dropdown@2x.png 2x" />
<img class="responsive-img" src="../images/datepicker_selection.png" srcset="../images/datepicker_selection@2x.png 2x" />
<img class="responsive-img" src="../images/datepicker_range.png" srcset="../images/datepicker_range@2x.png 2x" />

## ボタン

Drop-down Date Picker には 2 つのボタンがあります: 1 つは現在の選択を保持して閉じるためのもので、もう 1 つは今日に移動するためのものです。Button 領域はテンプレート化可能であり、たとえば、オーバーライドを ~No Symbol に設定してボタンを非表示にしたり、別のアクションを割り当てることができます。Dialog Date Picker には、日付を選択するとダイアログが自動的に閉じるため、デフォルトではボタンがありません。

<img class="responsive-img" src="../images/datepicker_buttons.png" srcset="../images/datepicker_buttons@2x.png 2x" />

## スタイル設定

Time Picker は、さまざまなオプションを通じてヘッダー背景、タイトル色、選択した時間、分、AM/PM のテキストの色を柔軟にスタイル設定できます。Cancel と OK のボタンは、[Flat Buttons](button.md) で状況に応じたスタイル設定が可能です。

<img class="responsive-img" src="../images/datepicker_styling.png" srcset="../images/datepicker_styling@2x.png 2x" />

## 使用方法

Horizontal と Vertical Time Picker をダイアログで表示し、ダイアログ以外の UI は暗くなります。

| 良い例                                                                                     | 悪い例                                                                                      |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| <img class="responsive-img" src="../images/datepicker_do1.png" srcset="../images/datepicker_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/datepicker_dont1.png" srcset="../images/datepicker_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/datepicker_do2.png" srcset="../images/datepicker_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/datepicker_dont2.png" srcset="../images/datepicker_dont2@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [Calendar](calendar.md)
- [Input](input.md)
- [Time Picker](time-picker.md)
- [Form パターン](../patterns/form.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

