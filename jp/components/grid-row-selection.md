---
title: Grid 行選択ー - グリッド機能
_description: Grid 行選択は、Grid に表示される完全なレコードを選択するメカニズムを提供します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# Grid Row Selection (グリッド行選択)

Grid 行選択を使用して、Grid の左端の列として表示されるチェックボックスのある特別な選択列を介して完全な行を一度に選択します。Grid 行選択は、[Ignite UI for Angular Grid 選択機能](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/grid/selection.html#grid-行選択)と視覚的に同じものです。

## Grid 行選択ーのデモ

<img class="responsive-img" src="../images/grid_row_selection_demo.png" srcset="../images/grid_row_selection_demo@2x.png 2x" />

## 行選択列

Grid 行選択は、最初の列の左側に追加の列を作成し、その Header と Body セルの `Type` を `Row Selection` に設定することで実現できます。選択した行では、行のチェックボックスの状態を `On` に設定して、ヘッダーのチェックボックスの状態を `Indeterminate` に設定する必要があります。すべての行を選択した場合は、行の状態チェックボックスとヘッダーを `On` に設定する必要があります。

<img class="responsive-img" src="../images/grid_row_selection.png" srcset="../images/grid_row_selection@2x.png 2x" />
<img class="responsive-img" src="../images/grid_row_selection_all.png" srcset="../images/grid_row_selection_all@2x.png 2x" />

## Row Selection Cell (行選択セル)

グリッドは、`Grid Feature` オーバーライドを介して利用可能な選択された行に特別なタイプの Body セルを提供します。`RowSelected/Cell` に設定すると、選択した行に属するセルを示す区別可能なスタイルが適用されます。

## その他のリソース

関連トピック

- [Grid](grid.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
