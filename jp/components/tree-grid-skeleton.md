---
title: Skeleton Tree Grid - デザイン システム コンポーネント
_description: Skeleton Tree Grid は、階層データがバックグラウンドで読み込まれているときに表示される Tree Grid コンポーネントであり、セルに表形式でコンテンツを提供します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# Skeleton Tree Grid (スケレトン ツリー グリッド)

Skeleton Tree Grid を使用して、標準の情報と同じタイプの情報をレイアウトしますが、現時点でデータが存在しない場合のアプリケーションの状態も示します。 たとえば、データがリモート データ ソースから読み込まれる際、接続が不足しているか、時間がかかる場合などです。Skeleton Tree Grid は、既知のレイアウトの [Tree Grid](tree-grid.md) を視覚的に表したものですが、表示するデータはありません。

## Skeleton Tree Grid のデモ

<img class="responsive-img" src="../images/tree_grid_skeleton_demo.png" srcset="../images/tree_grid_skeleton_demo@2x.png 2x" />

## セル タイプ

Skeleton Tree Grid は、Header (ヘッダー)、Body (本文)、Summary (集計) の 3 種類のスケルトン セルを拡張し、標準の [Tree Grid](tree-grid.md) として 1 つの追加の TreeColumn セルを追加します。

<img class="responsive-img" src="../images/tree_grid_skeleton_column_cell.png" srcset="../images/tree_grid_skeleton_column_cell@2x.png 2x" />

## セル 表示密度

Skeleton Tree Grid の TreeColumn セルは、標準の [Tree Grid](tree-grid.md) と同じ 3 つの表示密度バリアント (comfortable、cosy、compact) をサポートします。

<img class="responsive-img" src="../images/tree_grid_skeleton_column_cell_comfortable.png" srcset="../images/tree_grid_skeleton_column_cell_comfortable@2x.png 2x" />
<img class="responsive-img" src="../images/tree_grid_skeleton_column_cell_cosy.png" srcset="../images/tree_grid_skeleton_column_cell_cosy@2x.png 2x" />
<img class="responsive-img" src="../images/tree_grid_skeleton_column_cell_compact.png" srcset="../images/tree_grid_skeleton_column_cell_compact@2x.png 2x" />

## Cell の深さ

Skeleton Tree Grid の TreeColumn セルは、データ階層のレベルについて、標準の [Tree Grid](tree-grid.md) と同じ視覚的表示をサポートします。 これは、Root Level (ルート レベル)、Child Level (子レベル)、または Grandchild Level (孫レベル) です。

<img class="responsive-img" src="../images/tree_grid_skeleton_cell_body_root_level.png" srcset="../images/tree_grid_skeleton_cell_body_root_level@2x.png 2x" />
<img class="responsive-img" src="../images/tree_grid_skeleton_cell_body_child_level.png" srcset="../images/tree_grid_skeleton_cell_body_child_level@2x.png 2x" />
<img class="responsive-img" src="../images/tree_grid_skeleton_cell_body_grandchild_level.png" srcset="../images/tree_grid_skeleton_cell_body_grandchild_level@2x.png 2x" />

## Grid タイプ

Skeleton Tree Grid は、3 つの表示密度をサポートし、データの読み込み状態に関してそれぞれのバリエーションを提供します: TreeGrid がデータを読み込むとき、拡張されたルート レベルの行がない場合に表示される Initial と、ルート レベルが展開され、その子のデータの読み込みを開始すると表示される Expand。

<img class="responsive-img" src="../images/tree_grid_skeleton_initial.png" srcset="../images/tree_grid_skeleton_initial@2x.png 2x" />
<img class="responsive-img" src="../images/tree_grid_skeleton_expand.png" srcset="../images/tree_grid_skeleton_expand@2x.png 2x" />

## 使用方法

ツリー グリッドを作成するときは、同じ階層レベル内で標準セルとスケルトン セルを組み合わせないでください。データは、特定のレベルのすべての行とセルに存在するか、いずれにも存在しません。標準セルとスケルトン セルの組み合わせは、上記で説明したプリセットなど、非常に限られたユース ケースのセットでのみ適切です。

| 良い例                                                                                                | 悪い例                                                                                                 |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/tree_grid_skeleton_do1.png" srcset="../images/tree_grid_skeleton_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/tree_grid_skeleton_dont1.png" srcset="../images/tree_grid_skeleton_dont1@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [Tree Grid](tree-grid.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
