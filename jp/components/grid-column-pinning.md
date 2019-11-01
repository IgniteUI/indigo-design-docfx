---
title: Grid 列ピン固定 - グリッド機能
_description: Grid 列ピン固定は、スクロール可能なグリッドで選択された列をピン固定するための構造です。 
_keywords: デザイン システム, Sketch, Ignite UI for Angular, Grid 機能, UI ライブラリ, ウィジェット
_language: ja
---

## Grid 列ピン固定

Grid 列ピン固定は、スクロール可能なグリッドで最初の数列を左に固定するための構造として使用します。ユーザーがスクロールすると、 ピン固定された列以外、すべての他の列は右や左に移動します。ピン固定列は常にスクロール可能な列の上に表示されます。Grid 列ピン固定は、[Ignite UI for Angular Grid 列ピン固定機能](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/grid_column_pinning.html) と視覚的に同じものです。

### Grid 列ピン固定デモ

<img class="responsive-img" src="../images/grid_column_pinning_demo.png" srcset="../images/grid_column_pinning_demo@2x.png 2x" />

### ヘッダー セル機能

 列をピン固定するには、`Feature Left` または `Feature Right` のオーバーライドを使用して `Pinning` に設定します。左から右の方向でピン固定された列が最初になるように、列の順序を並べ替えることもできます。

### セルの右境界線

右端の列には、ヘッダーと列のすべての本体セルの両方に対して `Pinned Line` を示す `Right Border` のオーバーライドが必要です。行セレクターと件名列は両方ともピン固定されているため、2 行の 2 列目のすべてのセルで実行されます。これは下の画像に表示されています。

<img class="responsive-img" src="../images/grid_column_pinning_demo.png" srcset="../images/grid_column_pinning_demo@2x.png 2x" />

## その他のリソース

関連トピック:

- [Grid](grid.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
