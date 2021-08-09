---
title: Hierarchical Grid - デザイン システム コンポーネント
_description: Hierarchical Grid コンポーネントは、階層的に関連する表形式データのセットを表示および操作する手段を提供します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# Hierarchical Grid (階層グリッド)

Hierarchical Grid コンポーネントを使用して、ユーザーが個別のテーブルに編成された大量の複雑なデータ (階層的に関連する) をブラウスおよびインタラクションできるようにします。階層内の各グリッドは、データを表形式で表示し、[Grid](grid.md) と同じ機能を提供します。Hierarchical Grid は、[Ignite UI for Angular 階層グリッド コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/hierarchicalgrid/hierarchical_grid.html)と視覚的に同じものです。

## Hierarchical Grid のデモ

<img class="responsive-img" src="../images/hierarchical_grid_demo.png" srcset="../images/hierarchical_grid_demo@2x.png 2x" />

## Using the Hierarchical Grid in Sketch

グリッドと同様に、Hierarchical Grid は基本的に、視覚的な階層を形成する列、行、ネストされたグリッドのリピーターです。したがって、最も簡単な使用方法は、定義済みのグリッドの 1 つをアートボードにドラッグすることです。サポートされる 3 つの[表示密度](grid-display-density.md)に 3 つのプリセットがあります。アートボードを開いた後、その上を右-クリックし、コンテキスト メニューの下部にある `Detach from Symbol` オプションを選択すると、新しく表示されたグループの下のレイヤー パネルに次のように表示されます:

| レイヤー                                | 使用                                                                                                                                                 |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🚫 metadata | 禁止されたアイコンで開始する特定のロックされたレイヤー。このレイヤーはコード生成に必要なため、削除または変更しないでください。 |
| 🌈 Drill Indication                 | アクティブ セル / フォーカスされるセルを示すために使用されるシンボル                                                                                                     |
| Header                               | ヘッダーのすべてのセルを取得します                                                                                                           |
| Body                                 | 本体のすべてのセルと、基本構造のネストされたグリッドを含みます                                                                       |
| 🌈 Background                        | Hierarchical Grid の背景色を定義します                                                                                         |

デタッチ後、既存の各グリッド内にすでに作成したデータの最初の行を複製し、デザインに表示したいレコード (数に制限がない) および多数のヘッダーを必要なだけ追加してデータのすべてのディメンションを表示できます。より多くの階層を表示する必要がある場合は、追加のグリッドを、それらが属する親グリッドの本体内にネストすることもできます。

## Using the Hierarchical Grid in Adobe XD

In Adobe XD, after you choose one of the three [preset display density hierarchical grid components](grid-display-density.md) and drag it to your artboard, you will notice in the layers panel that we use `Repeat Grid` for both the Header and the Body to speed configuration up. Unlike in Sketch in Adobe XD destroying the symbol is not necessary. You should see the following in your layers panel:

| Layer                                | Use                                                                                                                                                  |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🚫 metadata | A special locked layer starting with a prohibited icon. This layer is required by the code generation and you should avoid deleting or modifying it. |
| 🌈 Drill Indication                  | A symbol that is used for indicating the active cell and trace its belonging through the hierarchy of grids             |
| Header                               | Contains all header cells: the CollapseAll cell and the rest grouped in a Repeat Grid Header                                                                                                 |
| Body                                 | Contains all body cells: the Expand cells grouped in a Repeat Grid and the rest grouped in another Repeat Grid, and a nested Grid with a basic structure                                                                            |
| 🌈 Background                        | Defines the background color of the nested Grid                                                                                                |

When you select a Repeat Grid layer, you may alter the number of the repeated cells you need, which can be done within each grid. Just drag the green handles at the right or bottom edge to show all the dimensions of your data and insert as many visible records as you want to show in your design. To change a particular cell type or column width, you have to select the Repeat Grid layer and click `Ungroup Grid` in the right panel. This will allow you to work on them separately to achieve the desired design. If you need to show more of the hierarchy, you may also duplicate full grids and nest them within the body of the parent one that you want them to belong to.

<img class="responsive-img" src="../images/hgrid_layers_panel_adobe_xd.png" srcset="../images/hgrid_layers_panel_adobe_xd@2x.png 2x" />

## セル タイプ

Hierarchical Grid は、3種類の通常のグリッド セル Header、Body および Summary を、階層を整理するために使用される 2 つの追加で拡張します。CollapseAll セルは常に最初の Header Cell として使用され、Header が表示されるグリッドのすべての所属レコードを折りたたむ/展開するための定義済みのアイコンとアクションが付属しています。Expand セルは常にすべての行の最初の Body Cell として使用され、行を折りたたむ/展開するための定義済みのアイコンとアクションが付属しています。

<img class="responsive-img" src="../images/hierarchical_grid_cell_header.png" srcset="../images/hierarchical_grid_cell_header@2x.png 2x" />
<img class="responsive-img" src="../images/hierarchical_grid_cell_body.png" srcset="../images/hierarchical_grid_cell_body@2x.png 2x" />

通常の Header、Body、Summary セルをさまざまなタイプのデータに使用し、さまざまな Hierarchical Grid 機能を有効にするように構成する方法を理解するには、[Grid](grid.md) トピックを参照してください。

## セル表示密度

CollapseAll セルと Expand セルは、Hierarchical Grid の 3 つの表示密度バリアント (comfortable、cosy、compact) をサポートします。以下の CollapseAll Header セルに見られるように、それぞれに個別の記号が付いています:

<img class="responsive-img" src="../images/hierarchical_grid_cell_header_comfortable.png" srcset="../images/hierarchical_grid_cell_header_comfortable@2x.png 2x" />
<img class="responsive-img" src="../images/hierarchical_grid_cell_header_cosy.png" srcset="../images/hierarchical_grid_cell_header_cosy@2x.png 2x" />
<img class="responsive-img" src="../images/hierarchical_grid_cell_header_compact.png" srcset="../images/hierarchical_grid_cell_header_compact@2x.png 2x" />

## スタイル設定

Hierarchical Grid は、さまざま状態の各セル テキスト、アイコン、背景色のスタイル設定や水平および垂直の境界線の非表示など柔軟に変更できます。Drill Indication とグリッドの背景をスタイル設定することもできます。

<img class="responsive-img" src="../images/hierarchical_grid_styling.png" srcset="../images/hierarchical_grid_styling@2x.png 2x" />

## 使用方法

グリッドと同様に、Hierarchical Grid の最も重要な点は、Header および Body セル内のデータの配置です。テキストは常に左揃えにして変数空スペースを右に残し、数値は常に右揃えにして変数空スペースを左に残します。

| 良い例                                                                                                | 悪い例                                                                                                |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/grid_do1.png" srcset="../images/grid_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/grid_dont1.png" srcset="../images/grid_dont1@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [Grid](grid.md)
- [Grid ツールバー](grid-toolbar.md)
- [Grid エクスポート](grid-export.md)
- [Grid グループ化](grid-grouping.md)
- [Grid 列ピン固定](grid-column-pinning.md)
- [Grid 列非表示](grid-column-hiding.md)
- [Grid 列移動](grid-column-moving.md)
- [Grid 列サイズ変更](grid-column-resizing.md)
- [Grid 並べ替え](grid-sorting.md)
- [Grid 行フィルター](grid-row-filter.md)
- [Grid Excel スタイル フィルター](grid-excel-style-filter.md)
- [Grid 行選択](grid-row-selection.md)
- [Grid 編集](grid-editing.md)
- [Grid 表示密度](grid-display-density.md)
- [Grid ページング](grid-paging.md)
- [Grid 集計](grid-summaries.md)
- [Tree Grid](tree-grid.md)
- [Skeleton Hierarchical Grid](hierarchical-grid-skeleton.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
