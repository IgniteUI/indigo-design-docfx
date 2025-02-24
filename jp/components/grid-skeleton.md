---
title: Skeleton Grid - デザイン システム コンポーネント
_description: Skeleton Grid は、セルにコンテンツを提供するためにデータがバックグラウンドで読み込まれているときに表示される Grid コンポーネントです。
_keywords: デザイン システム, デザイン システム UX, UI キット, Figma, Ignite UI for Angular, Angular, Angular デザイン システム, Figma からコードをエクスポート, Angular 用のデザイン キット, Figma HTML, Figma to HTML, Figma UI キット
_language: ja
---

# Skeleton Grid (スケレトン グリッド)

Skeleton Grid を使用して、標準の情報と同じタイプの情報をレイアウトしますが、現時点でデータが存在しない場合のアプリケーションの状態も示します。たとえば、データがリモート データ ソースから読み込まれる際、接続が不足しているか、時間がかかる場合などです。Skeleton Grid は、既知のレイアウトの [Grid](grid.md) を視覚的に表したものですが、表示するデータはありません。

## Grid のデモ

<img class="responsive-img" src="../images/grid_skeleton_demo.png" srcset="../images/grid_skeleton_demo@2x.png 2x" />

## セル タイプ

Skeleton Grid は、標準 [Grid](grid.md) と同じ 3 種類のセル (**Header**、**Body**、**Summary**) をサポートします。

<img class="responsive-img" src="../images/grid_skeleton_cell_header.png" srcset="../images/grid_skeleton_cell_header@2x.png 2x" />
<img class="responsive-img" src="../images/grid_skeleton_cell_body.png" srcset="../images/grid_skeleton_cell_body@2x.png 2x" />
<img class="responsive-img" src="../images/grid_skeleton_cell_summary.png" srcset="../images/grid_skeleton_cell_summary@2x.png 2x" />

## セル サイズ

Skeleton の Header、Body、および Summary Cell は、標準 [Grid](grid.md) と同じ 3 つのサイズ バリアント (**Large**、**Medium**、**Small**) をサポートします。

<img class="responsive-img" src="../images/grid_skeleton_cell_header_large.png" srcset="../images/grid_skeleton_cell_header_large@2x.png 2x" />
<img class="responsive-img" src="../images/grid_skeleton_cell_header_medium.png" srcset="../images/grid_skeleton_cell_header_medium@2x.png 2x" />
<img class="responsive-img" src="../images/grid_skeleton_cell_header_small.png" srcset="../images/grid_skeleton_cell_header_small@2x.png 2x" />
<img class="responsive-img" src="../images/grid_skeleton_cell_body_large.png" srcset="../images/grid_skeleton_cell_body_large@2x.png 2x" />
<img class="responsive-img" src="../images/grid_skeleton_cell_body_medium.png" srcset="../images/grid_skeleton_cell_body_medium@2x.png 2x" />
<img class="responsive-img" src="../images/grid_skeleton_cell_body_small.png" srcset="../images/grid_skeleton_cell_body_small@2x.png 2x" />
<img class="responsive-img" src="../images/grid_skeleton_cell_summary_large.png" srcset="../images/grid_skeleton_cell_summary_large@2x.png 2x" />
<img class="responsive-img" src="../images/grid_skeleton_cell_summary_medium.png" srcset="../images/grid_skeleton_cell_summary_medium@2x.png 2x" />
<img class="responsive-img" src="../images/grid_skeleton_cell_summary_small.png" srcset="../images/grid_skeleton_cell_summary_small@2x.png 2x" />

## セル タイプ

Skeleton Grid Header Cell は、標準 [Grid](grid.md) として、**Number (数字)** および **Text,Date,Bool (テキスト、日付、ブール)** タイプのデータのプリセットを提供します。

<img class="responsive-img" src="../images/grid_skeleton_cell_header_number.png" srcset="../images/grid_skeleton_cell_header_number@2x.png 2x" />
<img class="responsive-img" src="../images/grid_skeleton_cell_header_text.png" srcset="../images/grid_skeleton_cell_header_text@2x.png 2x" />

Skeleton Grid Body Cell は、Skeleton Grid Header Cell と同じデータ タイプのプリセットを提供し、単純なグラフィックスを視覚化する追加の **Icon** タイプを含みます。

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
