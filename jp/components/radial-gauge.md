---
title: Radial Gauge - デザイン システム コンポーネント
_description: Radial Gauge コンポーネントはデータ可視化で特定のコンテキストの値を表示します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Figma, Figma to Angular, Figma からコードをエクスポート, Figma to HTML, Figma HTML, Figma UI キット, Ignite UI for Angular, Angular, Angular デザイン システム, Angular 用のデザイン キット
_language: ja
---

# Radial Gauge (ラジアル ゲージ)

Radial Gauge コンポーネントを円形のデータ可視化を使用し、カラーコードされた下部の範囲で描かれたコンテキスト内の値を表示します。Radial Gauge は、[Ignite UI for Angular Radial Gauge コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/radial-gauge.html)と視覚的に同じものです。

ターゲット値が情報の理解や解釈に非常に重要である場合、代わりに [Bullet Graph](bullet-graph.md) を使用します。

## Radial Gauge のデモ

<img class="responsive-img" src="../images/radial_gauge_three_ranges.png" srcset="../images/radial_gauge_three_ranges@2x.png 2x" />

## 針のタイプ

Radial Gauge は、現在の値を示す針の形 (Needle、Trapezoid、Triangle) を制御するさまざまなオーバライドをサポートします。Figma では、`Needle Shape` インスタンスを選択し、右側のサイドバーからタイプを選択することで、タイプを切り替えることができます。

<img class="responsive-img" src="../images/radial_gauge_three_ranges.png" srcset="../images/radial_gauge_needle@2x.png 2x" />

## 目盛のタイプ

Radial Gauge の目盛りは外側または内側に配置でき、Thick 範囲と Thin 範囲の領域に 2 つの内側の種類があります。Figma では、右側のサイドバーにあるプロパティから `Ranges` と `Ticks Type` を選択できます。

<img class="responsive-img" src="../images/radial_gauge_inside.png" srcset="../images/radial_gauge_inside@2x.png 2x" />
<img class="responsive-img" src="../images/radial_gauge_outside.png" srcset="../images/radial_gauge_outside@2x.png 2x" />
<img class="responsive-img" src="../images/radial_gauge_inside-2.png" srcset="../images/radial_gauge_inside-2@2x.png 2x" />

## 範囲

Radial Gauge は、範囲 (Full、Half、および Quarter) を表示するダイアルを制御するさまざまなオーバーライドを提供します。Figma で、右側のサイドバーから Ranges と Ticks で同じになるように `Range` プロパティを選択します。

<img class="responsive-img" src="../images/radial_gauge_three_ranges.png" srcset="../images/radial_gauge_three_ranges@2x.png 2x" />
<img class="responsive-img" src="../images/radial_gauge_half.png" srcset="../images/radial_gauge_half@2x.png 2x" />
<img class="responsive-img" src="../images/radial_gauge_quarter.png" srcset="../images/radial_gauge_quarter@2x.png 2x" />

## Series Thickness (シリーズの厚さ)

Radial Gauge には、**Thick** と Thin の 2 種類の Series Thickness があります。Figma では、右側のサイドバーのプロパティを使用して、2 つの Series Thickness オプションから選択します。

<img class="responsive-img" src="../images/radial_gauge_three_ranges.png" srcset="../images/radial_gauge_three_ranges@2x.png 2x" />
<img class="responsive-img" src="../images/radial_gauge_full-thin.png" srcset="../images/radial_gauge_full-thin@2x.png 2x" />

## 範囲のサイズ

Radial Gauge は、定義済みの 3 つの範囲 (2 分割、3 分割、4 分割) 設定があります。Figma では、プロパティ パネルの `Ranges Amount` プロパティを使用して範囲の数を調整できます。

<img class="responsive-img" src="../images/radial_gauge_two_ranges.png" srcset="../images/radial_gauge_two_ranges@2x.png 2x" />
<img class="responsive-img" src="../images/radial_gauge_three_ranges.png" srcset="../images/radial_gauge_three_ranges@2x.png 2x" />
<img class="responsive-img" src="../images/radial_gauge_four_ranges.png" srcset="../images/radial_gauge_four_ranges@2x.png 2x" />

## スタイル設定

Radial Gauge のスタイル設定は高い柔軟性があり、背景色のオプションやブラシの選択 (Needle Brush、Range Brushes、および内側と外側のダイヤル タイプでのみ使用できる Tick Brush、Minor Tick Brush) があります。

<img class="responsive-img" src="../images/radial_gauge_styling.png" srcset="../images/radial_gauge_styling@2x.png 2x" />

## 使用方法

データ可視化や情報ダッシュボードの作成時では、スクリーン スペースの量に基づいて Linear と Radial Gauges のいずれかを選択します。Gauges は現在の値のみ表示し、過去の値を表示する方法はありません。アプリケーションでそのようなデータが必要な場合は Line または Column Chart を検討してください。
わかりやすく、鮮明なデータ可視化を簡単に作成するために Needle の色は範囲や背景と十分なコントラストのある色にし、読みにくい、解釈しずらい結果となる同じ色のバリアントは使用しないようにします。[Linear Gauge](linear-gauge.md) とは異なり、Radial Gauge コンポーネントは空スペースが十分あるため必要な情報を維持しながら Radial Gauges のコレクションを並べて配置できます。

| 良い例                                                                                 | 悪い例                                                                                  |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/radial_gauge_do.png" srcset="../images/radial_gauge_do@2x.png 2x" /> | <img class="responsive-img" src="../images/radial_gauge_dont.png" srcset="../images/radial_gauge_dont@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [Bullet Graph](bullet-graph.md)
- [Linear Gauge](linear-gauge.md)
- [Line Chart](line-chart.md)
- [Column Chart](column-chart.md)

コミュニティに参加して新しいアイデアをご提案ください。
