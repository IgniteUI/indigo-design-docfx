---
title: Grid 編集 - グリッド機能
_description: Grid 編集は、グリッドに表示されるレコードの値を更新できます。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# 編集

Grid 編集は、ユーザーが特定の値をセルごとまたは一度に 1 行を更新できるために使用します。セル編集と行編集の両方は、[Ignite UI for Angular Grid 編集機能](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/grid/editing.html)と視覚的に同じものです。

## セルの編集

Grid セルの編集はセルごとに行われ、`Grid Features`のオーバーライドで編集モードに表示する Body Cell で構成されます。`Editing/Cell` に設定すると、このモードに遵守する編集可能なグリッドが作成されます。また、コード生成には、これにより編集可能な列をマークします。

<img class="responsive-img" src="../images/grid_cell_edit.png" srcset="../images/grid_cell_edit@2x.png 2x" />

## 行の編集

Grid 行編集は一度に 1 行ずつ行われ、`Grid Features`のオーバーライドを `RowEditing/Cell` に設定すると、編集された行に属する Body Cells で構成されます。これにより、2 番目のオーバーライド `Editing State` が導入され、`Cell:focus` に設定することで、フォーカスされるセルを指定できます。この行の他のすべてのセルを `Cell:no focus` に設定する必要があることにご注意ください。またコード生成では、列を指定せずにグリッドで編集が可能です。

<img class="responsive-img" src="../images/grid_row_edit.png" srcset="../images/grid_row_edit@2x.png 2x" />

## Row Banner の編集

グリッドの`機能`の下には、集計領域を表す `Row Banner の編集`シンボルがあります。この集計領域は行で行われた編集の数と行で行われた編集をキャンセルおよび確認するための一組のアクションを含みます。このシンボルを追加すると、デザインに視覚的な効果があるのみで、よりリアルになります。行編集機能を切り替えたい場合は、行のセルを構成します。

## コードの生成

`Row Banner の編集`シンボルを追加する場合、ヘッダーグループと本文グループの兄弟としてグリッドを定義するグループ内に配置してください。

## その他のリソース

関連トピック:

- [Grid](grid.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
