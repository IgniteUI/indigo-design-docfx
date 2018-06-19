---
title: Grid 集計 - グリッド機能
_description: Grid 集計は、すべてのデータで算出した集計値を各 Grid 列に示します。
_keywords: デザイン システム, Sketch, Ignite UI for Angular, Grid 機能, UI ライブラリ, ウィジェット
_language: ja
---

## Grid の集計機能

Grid 集計は、すべてのデータで算出した集計値を各 Grid 列に示します。Grid の下にある特定のセル集計を挿入して表領域を Grid 構造と一致させますが、含まれるラベルと数値は集計値の情報を含みます。Grid 集計は、[Ignite UI for Angular Grid 集計機能](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/grid_summaries.html)と視覚的に同じものです。

### Grid 集計デモ

![](../images/grid_summaries_demo.png)

### 状態

Grid 集計セルは、以下のインタラクティブな状態をサポートします。**アクティブ**は Label および Number の概要を示します。インアクティブは、グレー アウトされたラベルを示します。Number を非表示にします。unavailable は 1 つの列に他の列より集計が少ない場合にギャップを埋めます。

![](../images/grid_cell_summary_active.png)
![](../images/grid_cell_summary_inactive.png)
![](../images/grid_cell_summary_unavailable.png)

### タイプ

Grid 集計セルには一般的なタイプのプリセットが 2 タイプあり、数値の **Number** と文字列の Text に対応する必要があります。

![](../images/grid_cell_summary_number.png)
![](../images/grid_cell_summary_text.png)

### スタイル設定

Grid 集計セルは、さまざまなオーバーライドでラベル、数値テキスト色、セルの背景色を制御することにより柔軟にスタイル設定できます。

![](../images/grid_summaries_styling.png)

## その他のリソース

関連トピック:

- [Grid](grid.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

- [Indigo Design **GitHub** (英語)](https://github.com/IgniteUI/design-system-docfx)
