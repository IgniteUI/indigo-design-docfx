---
title: Skeleton Charts - デザイン システム コンポーネント
_description: Skeleton Charts は、シリーズのコンテンツを提供するためにデータがバックグラウンドで読み込まれているときに表示されるさまざまな Chart コンポーネントの表現です。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch から コードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# Skeleton Charts (スケルトン チャート)

Skeleton Charts を使用して、標準の情報と同じタイプの情報を表示しますが、現時点でデータが存在しない場合のアプリケーションの状態も示します。たとえば、シリーズとデータ値がリモート データ ソースから読み込まれる際、接続が不足しているか、時間がかかる場合などです。Skeleton Charts は、既知のタイプの Chart を視覚的に表したものですが、表示するデータはありません。

## Skeleton Chart のデモ

<img class="responsive-img" src="../images/skeleton_charts_column.png" srcset="../images/skeleton_charts_column@2x.png 2x" />

## チャート

Column Chart の他に、Line、Spline、Step Line および Pie Chart の Skeleton バリアントがあります。

<img class="responsive-img" src="../images/skeleton_charts_line.png" srcset="../images/skeleton_charts_line@2x.png 2x" />
<img class="responsive-img" src="../images/skeleton_charts_spline.png" srcset="../images/skeleton_charts_spline@2x.png 2x" />
<img class="responsive-img" src="../images/skeleton_charts_step.png" srcset="../images/skeleton_charts_step@2x.png 2x" />
<img class="responsive-img" src="../images/skeleton_charts_pie.png" srcset="../images/skeleton_charts_pie@2x.png 2x" />

## Title (タイトル)

データとは異なり、いつでもすぐに利用できるはずなので、タイトルが表示され、Skeleton Chart の名前が表示されます。

<img class="responsive-img" src="../images/skeleton_charts_title.png" srcset="../images/skeleton_charts_title@2x.png 2x" />

## Legend (凡例)

Skeleton Charts には、シリーズの量が最初は利用できないため、Skeleton 状態の Legend があります。

<img class="responsive-img" src="../images/skeleton_charts_legend.png" srcset="../images/skeleton_charts_legend@2x.png 2x" />

## チャート タイプ

Skeleton Line、Spline、および Step チャートには、データバインドのチャートと同様に、折れ線の代わりに領域を表示するオプションがあります。

<img class="responsive-img" src="../images/skeleton_charts_linearea.png" srcset="../images/skeleton_charts_linearea@2x.png 2x" />
<img class="responsive-img" src="../images/skeleton_charts_splinearea.png" srcset="../images/skeleton_charts_splinearea@2x.png 2x" />
<img class="responsive-img" src="../images/skeleton_charts_steparea.png" srcset="../images/skeleton_charts_steparea@2x.png 2x" />

## 使用方法

デザインで Skeleton Charts を使用する場合は、グレースケール以外のシリーズ カラーを割り当てないでください。また、Skeleton Charts をデータバインドされた対応する要素と混合しないでください。

| 良い例                                                                                                | 悪い例                                                                                                 |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/skeleton_charts_do1.png" srcset="../images/skeleton_charts_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/skeleton_charts_dont1.png" srcset="../images/skeleton_charts_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/skeleton_charts_do1.png" srcset="../images/skeleton_charts_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/skeleton_charts_dont2.png" srcset="../images/skeleton_charts_dont2@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [Line Chart](line-chart.md)
- [Spline Chart](spline-chart.md)
- [Step Line Chart](step-line-chart.md)
- [Column Chart](column-chart.md)
- [Pie Chart](pie-chart.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
