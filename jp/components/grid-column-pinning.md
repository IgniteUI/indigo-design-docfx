---
title: Grid 列ピン固定 - グリッド機能
_description: Grid 列ピン固定は、スクロール可能なグリッドで選択された列をピン固定するための構造です。 
_keywords: デザイン システム, Sketch, Ignite UI for Angular, Grid 機能, UI ライブラリ, ウィジェット
_language: ja
---

# 列ピン固定

Grid 列ピン固定は、スクロール可能なグリッドで最初の数列を左に固定するための構造として使用します。ユーザーがスクロールすると、 ピン固定された列以外、すべての他の列は右や左に移動します。ピン固定列は常にスクロール可能な列の上に表示されます。Grid 列ピン固定は、[Ignite UI for Angular Grid 列ピン固定機能](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/grid_column_pinning.html)と視覚的に同じものです。

## Grid 列ピン固定デモ

<img class="responsive-img" src="../images/grid_column_pinning_demo.png" srcset="../images/grid_column_pinning_demo@2x.png 2x" />

## ヘッダー セル機能

To indicate a column as pinnable, use the `Column Pinning` override of the Grid Header Cell for that column and change the default value from **Not Pinned** to Pinned. This is what marks the column as pinnable as far as code generation is concerned.

The Built-In Column Pinning can be used through the Grid's toolbar which by default contains a button (combined with a combo dropdown) that lets you configure the pin state of the columns for the whole grid.

<img class="responsive-img" src="../images/grid_column_pinning_built_in.png" srcset="../images/grid_column_pinning_built_in@2x.png 2x" />

## Custom Column Pinning

It is also possible to add a custom pining action in the Grid Header Cell by using either the `Feature Left` or `Feature Right` overrides and setting it to `Icon Template`. This way an icon will appear to indicate the column is pinned and you can change its state from pin to unpin icon from Icon override. Of course, you would probably also want to rearrange the column order so that the pinned ones come first when looking left to right.

## セルの右境界線

右端の列には、ヘッダーと列のすべての本体セルの両方に対して `Pinned Line` を示す `Right Border` のオーバーライドが必要です。件名列はピン固定されているため、2 行の 2 列目のすべてのセルで実行されます。これは下の画像に表示されています。

<img class="responsive-img" src="../images/grid_column_pinning_demo.png" srcset="../images/grid_column_pinning_demo@2x.png 2x" />

## その他のリソース

関連トピック:

- [Grid](grid.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
