---
title: Bullet Graph - デザイン システム コンポーネント
_description: Bullet Graph コンポーネント シンボルはある値のターゲット値への進行度を可視化します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# Bullet Graph (ブレット グラフ)

Bullet Graph コンポーネントをデータ可視化に使用し、カラーコードされた下部の範囲で描かれたコンテキスト内の目標値を示します。Bullet Graph は、[Ignite UI for Angular Bullet Graph コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/bulletgraph.html)と視覚的に同じです。

目標値がない場合や未関係の場合は、[Linear Gauge](linear-gauge.md) を代わりに使用します。

## ブレット グラフ デモ

<img class="responsive-img" src="../images/bullet_graph_three_ranges-2.png" srcset="../images/bullet_graph_three_ranges-2@2x.png 2x" />

## Title と Subtitle

Bullet Graph には、テキストを変更できる Title および Subtitle があります。~No Symbol に設定して不要な場合は非表示にできます。

<img class="responsive-img" src="../images/bullet_graph_title.png" srcset="../images/bullet_graph_title@2x.png 2x" />

## Legend

Bullet Graph には Legend があり、選択した Series Amount に合わせて調整できます。Legend 項目は、対応する Series を ~No Symbol に設定して削除、または Overrides/Charts/Legend/Series で検索して追加できます。また、アイコンのタイプを Square (四角)、Line (線)、または Circle (円) の間で変更できます。

<img class="responsive-img" src="../images/bullet_graph_legend.png" srcset="../images/bullet_graph_legend@2x.png 2x" />

## ツールチップ

Bullet Graph のツールチップは、オーバーライドを ~No Symbol に設定すると非表示になります。

<img class="responsive-img" src="../images/bullet_graph_tooltip-off.png" srcset="../images/bullet_graph_tooltip-off@2x.png 2x" />
<img class="responsive-img" src="../images/bullet_graph_tooltip-on.png" srcset="../images/bullet_graph_tooltip-on@2x.png 2x" />

## 範囲のサイズ

Bullet Graph は、定義済みの 3 つの範囲 (**2 つ**、3 つ、4 つ) 設定があります。

<img class="responsive-img" src="../images/bullet_graph_two_ranges.png" srcset="../images/bullet_graph_two_ranges@2x.png 2x" />
<img class="responsive-img" src="../images/bullet_graph_three_ranges.png" srcset="../images/bullet_graph_three_ranges@2x.png 2x" />
<img class="responsive-img" src="../images/bullet_graph_four_ranges.png" srcset="../images/bullet_graph_four_ranges@2x.png 2x" />

## Ticks と Values

Ticks と Values も構成できます。2 種類の目盛り: Ticks と Minor Ticks は、色を `Transparent` に設定することで非表示にできます。100 までのデフォルト Values 0、10、20 などは、必要に応じて調整できます。

<img class="responsive-img" src="../images/bullet_graph_values.png" srcset="../images/bullet_graph_values@2x.png 2x" />

## スタイル設定

Bullet Graph のスタイル設定は高い柔軟性があり、ブラシ範囲 (Value Brush、Target Value Brush、Tick Brush、Minor Tick Brush、Range Brushes のコレクション) のオーバーライドがあります。

<img class="responsive-img" src="../images/bullet_graph_styling.png" srcset="../images/bullet_graph_styling@2x.png 2x" />

## 使用方法

データ可視化時に情報ダッシュボードは目標値かどうかに基づいて Bullet Graph と Linear Gauge のどちらかを選択します。グラフとゲージは両方とも現在の値のみ表示し、過去の値を表示する方法はありません。アプリケーションでそのようなデータが必要な場合はまたは Line または Column Chart を検討してください。わかりやすく、鮮明なデータ可視化を簡単に作成するために Value や Target Value Brushes の色は範囲や背景と十分なコントラストのある色にし、読みづらい、解釈しずらい結果となる同色のバリアントは使用しないようにします。

| 良い例                                                                                 | 悪い例                                                                                  |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/bullet_graph_do.png" srcset="../images/bullet_graph_do@2x.png 2x" /> | <img class="responsive-img" src="../images/bullet_graph_dont.png" srcset="../images/bullet_graph_dont@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [Linear Gauge](linear-gauge.md)
- [Line Chart](line-chart.md)
- [Column Chart](column-chart.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
