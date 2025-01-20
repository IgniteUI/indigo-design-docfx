---
title: Date Picker - デザイン システム コンポーネント
_description: Date Picker コンポーネント シンボルは、日付選択に必要なメカニズムを提供する日付のビジュアル表現として使用します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット, Figma, Figma to Angular, Figma からコードをエクスポート, Figma HTML, Figma to HTML, Figma UI キット
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

Date Picker は、水平および垂直方向の Dialog レイアウトおよび Dropdown レイアウトをサポートしており、さまざまなシャドウを表示して互いに区別しやすくすることで、さまざまな日付の選択モードを容易にします。Dialog レイアウトにはヘッダーが付属していることに注意してください。ブール値の `Header` プロパティをオフにすることで Figma でヘッダーを非表示にすることができ、追加された自動レイアウトのおかげでレイアウトはそれに応じて自動的に調整されます。Sketch では、Header のオーバーライドを ~No Symbol に設定することでこれを実現でき、スマート レイアウトを使用することですべてがそれに応じて調整されます。Adobe XD では、ヘッダー レイヤーを削除する必要があり、Stack を使用してレイアウトが調整されます。

<img class="responsive-img" src="../images/datepicker_horizontal.png" srcset="../images/datepicker_horizontal@2x.png 2x" />
<img class="responsive-img" src="../images/datepicker_vertical.png" srcset="../images/datepicker_vertical@2x.png 2x" />
<img class="responsive-img" src="../images/datepicker_dropdown.png" srcset="../images/datepicker_dropdown@2x.png 2x" />

Figma では、`Action Buttons` ブール値プロパティを有効にすることで、Date Picker の下部にアクション ボタンを表示できます。

<img class="responsive-img" src="../images/datepicker_actions.png" srcset="../images/datepicker_actions@2x.png 2x" />

## マルチビューのバリエーション

Date Picker には、2 か月を並べて表示する Multiview オプションが含まれています。Figma では、`Multiview` ブール値プロパティを使用してこれを有効にし、`Orientation` プロパティを使用して水平方向または垂直方向を選択できます。Sketch と Adobe XD では、水平方向のマルチビューのみが使用可能であり、コンポーネントを追加するときに方向とビューを選択する必要があります。

<img class="responsive-img" src="../images/datepicker_multi_horiz.png" srcset="../images/datepicker_multi_horiz@2x.png 2x" />
<img class="responsive-img" src="../images/datepicker_multi_vert.png" srcset="../images/datepicker_multi_vert@2x.png 2x" />

## 週のはじめ

週の最初の曜日として、最も一般的な 2 つのシナリオ (日曜日と月曜日) をサポートしています。Figma では、`Week Start` プロパティから週の開始を選択できます。Sketch および Adobe XD では、日付ピッカーを挿入するときにオプションとして開始日を選択する必要があります。

<img class="responsive-img" src="../images/datepicker_dropdown.png" srcset="../images/datepicker_dropdown@2x.png 2x" />
<img class="responsive-img" src="../images/datepicker_monday.png" srcset="../images/datepicker_monday@2x.png 2x" />

## Week Numbers (週番号)

Date Picker には、Calendar と同じように週番号のサポートが組み込まれています。 UI のこの部分を表示したくない場合は、Figma のブール値の `Week Numbers` プロパティをオフにするだけで、追加された自動レイアウトのおかげでレイアウトが自動的に調整されます。 Sketch では、Week Numbers オーバーライドを ~No Symbol に設定することでこれを実現でき、スマート レイアウトを使用することで、すべてがそれに応じて調整されます。Adobe XD で Week Numbers レイヤーを削除して同じことを実行し、そこで使用される Stack が同様の方法でレイアウトを調整します。

<img class="responsive-img" src="../images/datepicker_weeknumbers.png" srcset="../images/datepicker_weeknumbers@2x.png 2x" />

## 選択

Calendar と同様に、Date Picker では 3 つの選択モードから選択できます: ユーザーが 1 つの日付のみを選択できるように制限する **Single Day**、ランダムな複数の日付を選択できる **Multiple Days**、および開始から終了までのすべての日付を選択する手段を提供する **Range**。

<img class="responsive-img" src="../images/datepicker_dropdown.png" srcset="../images/datepicker_dropdown@2x.png 2x" />
<img class="responsive-img" src="../images/datepicker_selection.png" srcset="../images/datepicker_selection@2x.png 2x" />
<img class="responsive-img" src="../images/datepicker_range.png" srcset="../images/datepicker_range@2x.png 2x" />

## スタイル設定

Date Picker は、さまざまなオプションでヘッダー背景、タイトル色、選択した日付や現在の日付などのテキストの色の制御などスタイル設定に柔軟性があります。

<img class="responsive-img" src="../images/datepicker_styling.png" srcset="../images/datepicker_styling@2x.png 2x" />

## 使用方法

Horizontal と Vertical Dialog Date Picker をダイアログで表示し、ダイアログ以外の UI は暗くなります。

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
