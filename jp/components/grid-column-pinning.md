---
title: Grid 列ピン固定 - グリッド機能
_description: The Grid Column Pinning is a mechanism to pin selected columns of a scrollable Grid. 
_keywords: デザイン システム, Sketch, Ignite UI for Angular, Grid 機能, UI ライブラリ, ウィジェット
_language: ja
---

## Grid 列ピン固定

Use the Grid Column Pinning as a mechanism to fix the first few columns of a scrollable Grid to the left. Now, when the user scrolls, all other columns move left and right except for the pinned ones. The pinned columns always appear on top of the scrollable ones. The Grid Column Pinning is visually identical to the [Ignite UI for Angular Grid Column Pinning Feature](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/grid_column_pinning.html)

### Grid 列ピン固定デモ

<img class="responsive-img" src="../images/grid_column_pinning_demo.png" srcset="../images/grid_column_pinning_demo@2x.png 2x" />

### Header Cell Feature

 In order to pin a column use either the `Feature Left` or `Feature Right` overrides and set it to `Pinning`. Of course, you would probably also want to rearrange the column order so that the pinned ones come first when looking left to right.

### セルの右境界線

The right-most pinned column should have its `Right Border` override to indicate `Pinned Line` both for the Header and all Body Cells. In the demo above, this is done for all cells of the second column since both the Row Selectors and the Subject column are pinned.

## その他のリソース

関連トピック:

- [Grid](grid.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
