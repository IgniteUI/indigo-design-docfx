---
title: Tree Grid - デザイン システム コンポーネント
_description: Tree Grid コンポーネント は、表形式の階層データを表示および操作する手段を提供します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# Tree Grid (ツリー グリッド)

Tree Grid コンポーネントを使用して、ユーザーがタブ形式で表示される大量の階層なデータをブラウズおよびインタラクティブに操作できるようにしす。[Grid](grid.md) で利用可能な機能もサポートします。Tree Grid は、[Ignite UI for Angular ツリー グリッド コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/treegrid/tree_grid.html)と視覚的に同じものです。

## Tree Grid のデモ

<img class="responsive-img" src="../images/tree_grid_demo.png" srcset="../images/tree_grid_demo@2x.png 2x" />

## Sketch で Tree Grid を使用

Grid と同様に、Tree Grid は、基本的にフラット、表形式で階層データを表示する列と行のリピーターです。したがって、最も簡単な使用方法は、`Tree Grid/Comfortable` をアートボードにドラッグして一番上を右クリックし、コンテキスト メニューの下にあるシ `Detach from Symbol` オプションを選択します。新しく表示されるグループの下のレイヤー パネルには以下があります。

| レイヤー                        | 使用                                                                                                                                                  |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🚫 metadata | 禁止されたアイコンで開始する特定のロックされたレイヤー。このレイヤーはコード生成に必要なため、削除または変更しないでください |
| Header                       | ヘッダーのすべてのセルを取得します                                                                                                              |
| Body                         | 本体のすべてのセルを含みます                                                                                                                |

デタッチ後、既存のデータ行の 1 つを複製し、デザインに表示したいレコード (数に制限がない) および多数のヘッダーを必要なだけ追加してデータのすべてのディメンションを表示できます。

## Adobe XD で Tree Grid を使用

Adobe XD では、3 つの[プリセット表示密度ツリー グリッド コンポーネント](grid-display-density.md)のいずれかを選択してアートボードにドラッグすると、レイヤー パネルで、Header と Body の両方に `Repeat Grid` を使用して構成を高速化していることがわかります。Sketch とは異なり、Adobe XD ではシンボルを破棄する必要はありません。レイヤー パネルに次のように表示されます:

| レイヤー                        | 使用                                                                                                                                                  |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🚫 metadata | 禁止されたアイコンで開始する特定のロックされたレイヤー。このレイヤーはコード生成に必要なため、削除または変更しないでください。 |
| Header                       | すべてのヘッダー セルが含まれます: 本文 セルと Repeat Grid  にグループ化された残りのセル。                                                                                                                 |
| Body                         | すべてのボディ セルが含まれます: Repeat Grid にグループ化された TreeColumn セルと、別の Repeat Grid にグループ化された残りのセル。                                                                                                                  |

Repeat Grid レイヤーを選択すると、必要な繰り返すセルの数を変更できます。右端または下端にある緑色のハンドルをドラッグするだけで、データのすべてのディメンションが表示され、デザインに表示する必要のある数の表示可能なレコードが挿入されます。特定のセル タイプまたは列幅を変更するには、Repeat Grid レイヤーを選択し、右側のパネルで `Ungroup Grid` をクリックする必要があります。これにより、セルを個別に操作して、目的のデザインを実現できます。

<img class="responsive-img" src="../images/tgrid_layers_panel_adobe_xd.png" srcset="../images/tgrid_layers_panel_adobe_xd@2x.png 2x" />

## セル タイプ

Tree Grid は、3種類の通常のグリッド セル Header、Body および Summary を、階層を整理するために使用される TreeColumn Cell で拡張します。これは常にすべての行の最初の Body Cell として使用され、行を折りたたむ/展開するための定義済みのアイコンとアクションが付属しています。

<img class="responsive-img" src="../images/tree_grid_column_cell.png" srcset="../images/tree_grid_column_cell@2x.png 2x" />

通常の Header、Body、Summary セルをさまざまなタイプのデータに使用し、さまざまな Tree Grid 機能を有効にするように構成する方法を理解するには、[Grid](grid.md) トピックを参照してください。

## セル表示密度

TreeColumn セルは、Tree Grid の 3 つの表示密度バリアント (comfortable、cosy、compact) をサポートします。

<img class="responsive-img" src="../images/tree_grid_column_cell_comfortable.png" srcset="../images/tree_grid_column_cell_comfortable@2x.png 2x" />
<img class="responsive-img" src="../images/tree_grid_column_cell_cosy.png" srcset="../images/tree_grid_column_cell_cosy@2x.png 2x" />
<img class="responsive-img" src="../images/tree_grid_column_cell_compact.png" srcset="../images/tree_grid_column_cell_compact@2x.png 2x" />

## Cell の深さ

Tree Grid の TreeColumn セルは、`Level` オーバーライドを介してデータ階層のレベルを視覚的に示します。これは、**Root Level**、Child Level、または Grandchild Level に設定できます。

<img class="responsive-img" src="../images/tree_grid_cell_body_root_level.png" srcset="../images/tree_grid_cell_body_root_level@2x.png 2x" />
<img class="responsive-img" src="../images/tree_grid_cell_body_child_level.png" srcset="../images/tree_grid_cell_body_child_level@2x.png 2x" />
<img class="responsive-img" src="../images/tree_grid_cell_body_grandchild_level.png" srcset="../images/tree_grid_cell_body_grandchild_level@2x.png 2x" />

## スタイル設定

Tree Grid には、使用可能なさまざまな状態の各セル テキスト、アイコン、背景色に使用できるオプション、および右と下の境界線を非表示にすることにより、スタイルの柔軟性があります。

<img class="responsive-img" src="../images/tree_grid_styling.png" srcset="../images/tree_grid_styling@2x.png 2x" />

## 使用方法

Grid と同様に、Tree Grid の最も重要な点は、Header および Body セル内のデータの配置です。テキストは常に左揃えにして変数空スペースを右に残し、数値は常に右揃えにして変数空スペースを左に残します。

| 良い例                                                                                                | 悪い例                                                                                                 |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/tree_grid_do1.png" srcset="../images/tree_grid_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/tree_grid_dont1.png" srcset="../images/tree_grid_dont1@2x.png 2x" /> |

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
- [Hierarchical Grid](hierarchical-grid.md)
- [Skeleton Tree Grid](tree-grid-skeleton.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
