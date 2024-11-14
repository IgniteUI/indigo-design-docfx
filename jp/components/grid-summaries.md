---
title: Grid 集計 - グリッド
_description: Grid 集計は、すべてのデータで算出した集計値を各 Grid 列に示します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Figma, Figma to Angular, Figma からコードをエクスポート, Figma to HTML, Figma UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット, Adobe XD, Adobe XD to Angular, Adobe XD からコードをエクスポート, Adobe XD to HTML, Adobe XD UI キット
_language: ja
---

# Grid Summaries (グリッド集計)

Grid 集計のコンポーネントは、各グリッド列のすべてのデータで算出された集計値を示すために使用します。グリッドの下にある特定のセル集計を挿入して表領域をグリッド構造と一致させますが、含まれる Label と Number は集計値の情報を含みます。Grid 集計は、[Ignite UI for Angular Grid 集計機能](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/grid/summaries.html)と視覚的に同じものです。

## Grid 集計のデモ

<img class="responsive-img" src="../images/grid_summaries_demo.png" srcset="../images/grid_summaries_demo@2x.png 2x" />

## 状態

Grid Summary Cell は、次のインタラクティブな状態をサポートします。**available** は Label および Number を示します。**unavailable** は、1 つの列に他の列より集計が少ない場合にギャップを埋めます。Sketch ではこれを `Symbol Overrides` で実現していますが、Adobe XD では `Component States` パラダイムを使用して簡単に状態を切り替えることができます。Figma で状態を切り替えるには、プロパティ パネル内にある専用の `Type` プロパティを使用する必要があります。

<img class="responsive-img" src="../images/grid_cell_summary_available.png" srcset="../images/grid_cell_summary_available@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_summary_unavailable.png" srcset="../images/grid_cell_summary_unavailable@2x.png 2x" />

## タイプ

Grid Summary Cell には一般的なタイプのプリセットが 2 タイプあり、数値の **Number** と文字列の **Text** に対応する必要があります。

<img class="responsive-img" src="../images/grid_cell_summary_number.png" srcset="../images/grid_cell_summary_number@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_summary_text.png" srcset="../images/grid_cell_summary_text@2x.png 2x" />

## スタイル設定

Grid Summary Cell は、さまざまなオプションを通じてラベル、数値テキスト色、セルの背景色を柔軟にスタイル設定できます。

<img class="responsive-img" src="../images/grid_summaries_styling.png" srcset="../images/grid_summaries_styling@2x.png 2x" />

## その他のリソース

関連トピック:

- [Grid](grid.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

