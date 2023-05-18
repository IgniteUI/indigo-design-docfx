---
title: Skeleton Grid - デザイン システム コンポーネント
_description: Skeleton Grid は、セルにコンテンツを提供するためにデータがバックグラウンドで読み込まれているときに表示される Grid コンポーネントです。
_keywords: デザイン システム, デザイン システム UX, UI キット, Figma, Figma to Angular, Figma からコードをエクスポート, Figma to HTML, Figma UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# Skeleton Grid (スケレトン グリッド)

Skeleton Grid を使用して、標準の情報と同じタイプの情報をレイアウトしますが、現時点でデータが存在しない場合のアプリケーションの状態も示します。たとえば、データがリモート データ ソースから読み込まれる際、接続が不足しているか、時間がかかる場合などです。Skeleton Grid は、既知のレイアウトの [Grid](grid.md) を視覚的に表したものですが、表示するデータはありません。

## Grid のデモ

<img class="responsive-img" src="../images/grid_skeleton_demo.png" srcset="../images/grid_skeleton_demo@2x.png 2x" />

## セル タイプ

Skeleton Grid は、標準 [Grid](grid.md) と同じ 3 種類のセル (header、body、summary) をサポートします。

<img class="responsive-img" src="../images/grid_skeleton_cell_header.png" srcset="../images/grid_skeleton_cell_header@2x.png 2x" />
<img class="responsive-img" src="../images/grid_skeleton_cell_body.png" srcset="../images/grid_skeleton_cell_body@2x.png 2x" />
<img class="responsive-img" src="../images/grid_skeleton_cell_summary.png" srcset="../images/grid_skeleton_cell_summary@2x.png 2x" />

## セル表示密度

Skeleton の Header、Body、および Summary Cell は、標準 [Grid](grid.md) と同じ 3 つの表示密度バリアント (Comfortable、Cosy、Compact) をサポートします。

<img class="responsive-img" src="../images/grid_skeleton_cell_header_comfortable.png" srcset="../images/grid_skeleton_cell_header_comfortable@2x.png 2x" />
<img class="responsive-img" src="../images/grid_skeleton_cell_header_cosy.png" srcset="../images/grid_skeleton_cell_header_cosy@2x.png 2x" />
<img class="responsive-img" src="../images/grid_skeleton_cell_header_compact.png" srcset="../images/grid_skeleton_cell_header_compact@2x.png 2x" />

## 項目と機能 (ヘッダー セル)

Skeleton Grid は、標準 [Grid](grid.md) と同じ機能構成を、`Feature Left` および `Feature Right` のオーバーライドを介してサポートします。

<img class="responsive-img" src="../images/grid_skeleton_cell_header_no-icon.png" srcset="../images/grid_skeleton_cell_header_no-icon@2x.png 2x" />
<img class="responsive-img" src="../images/grid_skeleton_cell_header_icon.png" srcset="../images/grid_skeleton_cell_header_icon@2x.png 2x" />
<img class="responsive-img" src="../images/grid_skeleton_cell_header_icons.png" srcset="../images/grid_skeleton_cell_header_icons@2x.png 2x" />

## セル タイプ

Skeleton Grid Header Cell は、標準 [Grid](grid.md) として、Number および Text、Date、Bool 型のデータのプリセットを提供します。

<img class="responsive-img" src="../images/grid_skeleton_cell_header_number.png" srcset="../images/grid_skeleton_cell_header_number@2x.png 2x" />
<img class="responsive-img" src="../images/grid_skeleton_cell_header_text.png" srcset="../images/grid_skeleton_cell_header_text@2x.png 2x" />

Skeleton Grid Body Cell は、Skeleton Grid Header Cell と同じデータ型のプリセットを提供し、単純なグラフィックスを視覚化する追加のアイコン タイプを含みます。

<img class="responsive-img" src="../images/grid_skeleton_cell_body_number.png" srcset="../images/grid_skeleton_cell_body_number@2x.png 2x" />
<img class="responsive-img" src="../images/grid_skeleton_cell_body_text.png" srcset="../images/grid_skeleton_cell_body_text@2x.png 2x" />
<img class="responsive-img" src="../images/grid_skeleton_cell_body_icon.png" srcset="../images/grid_skeleton_cell_body_icon@2x.png 2x" />

## 使用方法

グリッドを作成するときは、標準セルとスケルトン セルを組み合わせないでください。データはすべてのセルに存在するか、いずれにも存在しないため、2 つのタイプを同じグリッド レイアウト内で使用しないでください。

| 良い例                                                                                                | 悪い例                                                                                                 |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/grid_skeleton_do1.png" srcset="../images/grid_skeleton_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/grid_skeleton_dont1.png" srcset="../images/grid_skeleton_dont1@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [Grid](grid.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
