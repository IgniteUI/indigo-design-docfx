---
title: Grid 行フィルター - グリッド機能
_description: Grid 行フィルターを使用すると、グリッド列のフィルタリング条件を定義できます。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# Grid Row Filter (グリッド行フィルター)

Grid 行フィルターを使用して、フィルタリング条件を持つ Chip を含む特別なタイプの Header Cell を介して Grid 列のフィルタリング基準を指定します。Grid 行フィルターは、[Ignite UI for Angular Grid フィルタリング機能](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/grid/filtering.html)と視覚的に同じものです。

## Grid 行フィルターのデモ

<img class="responsive-img" src="../images/grid_row_filter_demo.png" srcset="../images/grid_row_filter_demo@2x.png 2x" />

## Row Filter Header (行フィルター ヘッダー)

Grid が Row Filter でフィルタリング可能であることを示すために、`Header` グループ内の Grid の各列に Row Filter Header Cell を持つ 2 番目の Header 行を追加します。

## Filter State (フィルター状態)

Row Filter Header Cells には、Sketch の `Filter State` オーバーライドが付属しており、特定の列にフィルター条件が適用されているかどうかを構成できます。デフォルトでは **Empty** と表示されますが、**Filtered** に設定し、含まれている [Chip](chips.md) で条件を指定できます。In Figma the Row Filtering is one of the Grid Header Cell types, that can be switched from the properties panel. There are two distinct types of filtering state: **Row Filter Empty** and **Row Filter Filtered**. You can easily switch between them by adjusting the `Type` property. Adobe XD では、`Component States` パラダイムを使用して状態を簡単に切り替えることができる `Filter State` レイヤーを介して、同じような方法で編成されます。

## その他のリソース

関連トピック:

- [Grid](grid.md)
- [Grid Excel スタイル フィルター](grid-excel-style-filter.md)
- [Grid 高度なフィルター](grid-advanced-filter.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
