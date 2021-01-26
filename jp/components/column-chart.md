---
title: Column Chart - デザイン システム コンポーネント
_description: Column Chart コンポーネント シンボルは、さまざまなカテゴリのデータの頻度、カウント、合計、平均を、幅が等しく長さが異なる垂直バーでエンコードされたデータとすばやく比較するために使用されます。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# Column Chart (縦棒チャート)

 Column Chart は、さまざまなカテゴリのデータの頻度、カウント、合計、平均を、幅が等しく高さが異なる垂直バーでエンコードされたデータとすばやく比較するために使用されるチャート タイプの 1 つです。項目の値の経時変化を示すのに理想的です。データは、チャートの下から上にデータ ポイントの値に向けて広がる矩形のコレクションよって表されます。

## Column Chart デモ

<img class="responsive-img" src="../images/column_chart_demo.png" srcset="../images/column_chart_demo@2x.png 2x" />

縦棒チャートは、`タイトル`、デフォルトで非表示の`凡例`、およびアイドル状態とホバー状態で使用可能な`チャート領域`で構成されます。

## タイトル

縦棒チャートのタイトルは、オーバーライドを ~No Symbol に設定して変更または非表示にできます。

<img class="responsive-img" src="../images/column_chart_title.png" srcset="../images/column_chart_title@2x.png 2x" />

## 状態

縦棒チャートには、アイドルとホバーの 2 つの状態があります。ホバー状態では、データ ポイントの上にホバーするとツールチップが表示され、フォーカスされて他の列がグレーアウトされます。

<img class="responsive-img" src="../images/column_chart_tooltip-off.png" srcset="../images/column_chart_tooltip-off@2x .png 2x" />
<img class="responsive-img" src="../images/column_chart_tooltip-on.png" srcset="../images/column_chart_tooltip-on@2x.png 2x" />

## Y 軸

縦棒チャートのY軸は、タイトル、ラベル、および軸自体で構成されます。タイトルおよびラベルは構成可能で、ラベルを非表示にするには、オーバーライドを ~No Symbol に設定します。色を `Transparent` に設定して軸線を非表示にできます。また、すべての要素を非表示にするには、Y 軸のオーバーライドを ~No Symbol に変更します。

<img class="responsive-img" src="../images/column_chart_yaxis.png" srcset="../images/column_chart_yaxis@2x.png 2x" />

## グリッド線

縦棒チャートには、データ ポイントを Y 軸の値に視覚的にトレースしやすくするための組み込みのグリッド線があります。非表示にするには、色を `Transparent` に設定します。

<img class="responsive-img" src="../images/column_chart_gridlines.png" srcset="../images/column_chart_gridlines@2x.png 2x" />

## データ ポイント

縦棒チャートのデータ ポイントは個々の列で、Sketch のスマート レイアウトを使用してチャート領域での量を調整できます。X 軸に構成可能なラベルと注釈ラベルがあります。

<img class="responsive-img" src="../images/column_chart_columns.png" srcset="../images/column_chart_columns@2x.png 2x" />


## スタイル設定

縦棒チャートでは、シリーズの色を変更できます。Series.1、series.2 などのバリアントを持つデータ可視化には、series.10 までのパレットの色のみを使用することをお勧めします。垂直軸と水平軸の色、グリッド線、チャート領域の背景色、境界線の色も変更できます。タイトル、ラベル、注釈値なども **Indigo.Design システム**の利用可能なテキスト スタイルでカスタマイズできます。

<img class="responsive-img" src="../images/column_chart_styling.png" srcset="../images/column_chart_styling@2x.png 2x" />

## 使用方法

一定期間の変化量を表示するには、縦棒チャートを使用します。数値軸を常に 0 から開始して、データを歪めないようにします。また、同じカテゴリに異なる色を使用しないようにしてください。カテゴリの変更を表すために日付や月などの時間を参照する場合、常に水平軸に設定します。グリッド線に目立たない色を使用して、目に優しい色にしましょう。より詳細な時系列ビジュアルが必要な場合は、代わりに折れ線チャートの使用を検討してください。

| 良い例                                                                                             | 悪い例                                                                                              |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/column_chart_do1.png" srcset="../images/column_chart_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/column_chart_dont1.png" srcset="../images/column_chart_dont1@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [Line Chart](../line-chart.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
