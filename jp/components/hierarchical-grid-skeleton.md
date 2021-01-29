---
title: Skeleton Hierarchical Grid - デザイン システム コンポーネント
_description: Skeleton Hierarchical Grid は、セルにコンテンツを提供するためにデータがバックグラウンドで読み込まれているときに表示される Hierarchical Grid コンポーネントです。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# Skeleton Hierarchical Grid (スケルトン階層グリッド)

Skeleton Hierarchical Grid を使用して、標準の情報と同じタイプの情報をレイアウトしますが、現時点でデータが存在しない場合のアプリケーションの状態も示します。 たとえば、データがリモート データ ソースから読み込まれる際、接続が不足しているか、時間がかかる場合などです。Skeleton Hierarchical Grid は、既知のレイアウトの [Hierarchical Grid](hierarchical-grid.md) を視覚的に表したものですが、表示するデータはありません。

## Skeleton Hierarchical Grid のデモ

<img class="responsive-img" src="../images/hierarchical_grid_skeleton_demo.png" srcset="../images/hierarchical_grid_skeleton_demo@2x.png 2x" />

## セル タイプ

Skeleton Hierarchical Grid は、Header (ヘッダー)、Body (本文)、Summary (集計) の 3 種類のスケルトン セルを拡張し、標準の [Hierarchical Grid](hierarchical-grid.md) として 2 つの追加のセル、CollapseAll (すべて縮小) と Expand (展開) を追加します。

<img class="responsive-img" src="../images/hierarchical_grid_skeleton_cell_header.png" srcset="../images/hierarchical_grid_skeleton_cell_header@2x.png 2x" />
<img class="responsive-img" src="../images/hierarchical_grid_skeleton_cell_body.png" srcset="../images/hierarchical_grid_skeleton_cell_body@2x.png 2x" />

## セル表示密度

Skeleton Collapse Allセルと Expand セルは、標準の [Hierarchical Grid](hierarchical-grid.md) と同じ 3 つの表示密度のバリエーション (comfortable、cosy、compact) をサポートします。

<img class="responsive-img" src="../images/hierarchical_grid__skeleton_cell_header_comfortable.png" srcset="../images/hierarchical_grid__skeleton_cell_header_comfortable@2x.png 2x" />
<img class="responsive-img" src="../images/hierarchical_grid_skeleton_cell_header_cosy.png" srcset="../images/hierarchical_grid_skeleton_cell_header_cosy@2x.png 2x" />
<img class="responsive-img" src="../images/hierarchical_grid_skeleton_cell_header_compact.png" srcset="../images/hierarchical_grid_skeleton_cell_header_compact@2x.png 2x" />

## Grid タイプ

Skeleton Hierarchical Grid は、3 つの表示密度をサポートし、データの読み込み状態に関してそれぞれのバリエーションを提供します: Hierarchical Grid がデータを読み込むとき、ネストされたグリッドを持つ展開された行がない場合に表示される Initial と、ネストされたグリッドのみがデータを読み込んでいるときに表示される Expand。

<img class="responsive-img" src="../images/hierarchical_grid_skeleton_initial.png" srcset="../images/hierarchical_grid_skeleton_initial@2x.png 2x" />
<img class="responsive-img" src="../images/hierarchical_grid_skeleton_expand.png" srcset="../images/hierarchical_grid_skeleton_expand@2x.png 2x" />

## 使用方法

階層グリッドを作成するときは、同じ階層レベル内で標準セルとスケルトン セルを組み合わせないでください。データは、特定のレベルのすべてのセルとグリッドに存在するか、いずれにも存在しません。標準セルとスケルトン セルの組み合わせは、上記で説明したプリセットなど、非常に限られたユース ケースのセットでのみ適切です。

| 良い例                                                                                                | 悪い例                                                                                                 |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/hierarchical_grid_skeleton_do1.png" srcset="../images/hierarchical_grid_skeleton_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/hierarchical_grid_skeleton_dont1.png" srcset="../images/hierarchical_grid_skeleton_dont1@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [Hierarchical Grid](hierarchical-grid.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
