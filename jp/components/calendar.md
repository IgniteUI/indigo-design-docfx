---
title: Calendar - デザイン システム コンポーネント
_description: Calendar コンポーネント シンボルは、日付のビジュアル表現として使用され、日付の日、月、年の部分をナビゲートするために必要なメカニズムを提供します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# Calendar (カレンダー)

Calendar コンポーネントは、日付を視覚的に表示し、年と月のコンビネーション表示で統一した選択方法をユーザーに提供します。Calendar は、日付の表示および選択を許可するためにビューでインラインに設定します。Calendar は、[Ignite UI for Angular Calendar](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/calendar.html) コンポーネントと視覚的に同じもので、[Ignite UI for Angular Date Picker コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/date_picker.html)に使用されます。

## Calendar のデモ

<img class="responsive-img" src="../images/calendar_demo.png" srcset="../images/calendar_demo@2x.png 2x" />

## レイアウト

Calendar は、一度に 1 か月を表示するのに適した Horizontal または Vertical のレイアウトで提供されますが、2 か月を並べて表示するための Multiview オプションもサポートしています。

<img class="responsive-img" src="../images/calendar_horizontal.png" srcset="../images/calendar_horizontal@2x.png 2x" />
<img class="responsive-img" src="../images/calendar_vertical.png" srcset="../images/calendar_vertical@2x.png 2x" />
<img class="responsive-img" src="../images/calendar_multi.png" srcset="../images/calendar_multi@2x.png 2x" />

## コンテンツ

Calendar は、主要な日付部分のそれぞれの表示を容易にするために、日、月、または年のビューに挿入できます。

<img class="responsive-img" src="../images/calendar_vertical.png" srcset="../images/calendar_vertical@2x.png 2x" />
<img class="responsive-img" src="../images/calendar_months.png" srcset="../images/calendar_months@2x.png 2x" />
<img class="responsive-img" src="../images/calendar_years.png" srcset="../images/calendar_years@2x.png 2x" />

## 週のはじめ

週の最初の日の最も一般的な 2 つのシナリオ (日曜日と月曜日) の間に Calendar を挿入するときに、オプションとして週の開始を選択することもできます。

<img class="responsive-img" src="../images/calendar_sun.png" srcset="../images/calendar_sun@2x.png 2x" />
<img class="responsive-img" src="../images/calendar_vertical.png" srcset="../images/calendar_vertical@2x.png 2x" />

## ヘッダー

Calendar には組み込み可能な Header があり、省略できます。Sketch でスマート レイアウトを使用すると、Header を ~No Symbol に設定できます。これにより、フォームにシームレスに埋め込むことができる基本の Calendar が作成されます。Adobe XD では、Header レイヤーを削除することで同じことができ、残りのレイアウトは自動的に調整されます。

<img class="responsive-img" src="../images/calendar_base.png" srcset="../images/calendar_base@2x.png 2x" />

## 週番号

Calendar には週番号のサポートも組み込まれていますが、UI のこの部分を表示したくない場合は、Sketch で Week Numbers を ~No Symbol に設定するか、Adobe XD でレイヤーを削除します。

<img class="responsive-img" src="../images/calendar_weeknum.png" srcset="../images/calendar_weeknum@2x.png 2x" />

## 選択

Calendar では、次の 3 つの選択モードから選択できます: ユーザーが 1 つの日付のみを選択できるように制限する **Single Day**、日付を複数選択できる Multiple Days、および開始から終了までのすべての日付を選択する手段を提供する Range。

<img class="responsive-img" src="../images/calendar_horizontal.png" srcset="../images/calendar_horizontal@2x.png 2x" />
<img class="responsive-img" src="../images/calendar_selection.png" srcset="../images/calendar_selection@2x.png 2x" />
<img class="responsive-img" src="../images/calendar_range.png" srcset="../images/calendar_range@2x.png 2x" />

## スタイル設定

Calendar は、さまざまなオプションを通じて背景、ヘッダー背景、タイトル色、コンテンツの年月選択項目、選択した年 / 月 / 日のテキストや背景色を柔軟にスタイル設定できます。これは、残りの構成に基づい適用されます。

<img class="responsive-img" src="../images/calendar_styling.png" srcset="../images/calendar_styling@2x.png 2x" />

## 使用方法

追加の視覚効果なしで、残りの UI とともに Calendar をインライン要素として使用します。モーダル、ダイアログ、またはドロップダウンを表示する必要がある場合は、代わりに Date Picker の使用を検討してください。

| 良い例                                                                                 |悪い例                                                                                  |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/calendar_do1.png" srcset="../images/calendar_do1@2x.png 2x" />|<img class="responsive-img" src="../images/calendar_dont1.png" srcset="../images/calendar_dont1@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [Date Picker](date-picker.md)
- [Time Picker](time-picker.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
