---
title: Grid 行フィルター - グリッド機能
_description: Grid 行フィルターを使用すると、グリッド列のフィルタリング条件を定義できます。
_keywords: デザイン システム, デザイン システム UX, UI キット, Figma, Ignite UI for Angular, Angular, Angular デザイン システム, Figma からコードをエクスポート, Angular 用のデザイン キット, Figma HTML, Figma to HTML, Figma UI キット
_language: ja
---

# Grid Row Filter (グリッドの行フィルター)

Grid Row Filter を使用して、フィルタリング条件を持つ Chip を含む特別なタイプの Header Cell を介して Grid 列のフィルタリング基準を指定します。Grid 行フィルターは、[Ignite UI for Angular Grid フィルタリング機能](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/grid/filtering.html)と視覚的に同じものです。

## Grid Row Filter のデモ

<img class="responsive-img" src="../images/grid_row_filter_demo.png" srcset="../images/grid_row_filter_demo@2x.png 2x" />

## Row Filter Header (行フィルター ヘッダー)

Grid が Row Filter でフィルタリング可能であることを示すために、`Header` グループ内の Grid の各列に Row Filter Header Cell を持つ 2 番目の Header 行を追加します。

## Filter State (フィルター状態)

Figma では、行フィルタリングは Grid Header Cell タイプの 1 つであり、プロパティ パネルから切り替えることができます。特定の列にフィルタリング条件が適用されているかどうかを構成できます。フィルター状態には、**Row Filter Empty** と **Row Filter Filtered** という 2 つの異なるタイプがあります。`Type` プロパティを調整することで、それらを簡単に切り替えることができます。**Filtered** に設定すると、含まれる [Chip](chips.md) を介して条件を指定することもできます。

## その他のリソース

関連トピック:

- [Grid](grid.md)
- [Grid Excel スタイル フィルター](grid-excel-style-filter.md)
- [Grid 高度なフィルター](grid-advanced-filter.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
