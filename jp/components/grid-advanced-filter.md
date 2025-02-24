---
title: Grid 高度なフィルター - Grid 機能
_description: Grid 高度なフィルターは、複数の Grid 列にまたがる高度なフィルタリング条件の定義を可能にします。
_keywords: デザイン システム, デザイン システム UX, UI キット, Figma, Ignite UI for Angular, Angular, Angular デザイン システム, Figma からコードをエクスポート, Angular 用のデザイン キット, Figma HTML, Figma to HTML, Figma UI キット
_language: ja
---

# Grid Advanced Filter (グリッドの高度なフィルター)

Grid Advanced Filter を使用すると、Grid 上に表示されるダイアログで複数の Grid 列にまたがる高度なフィルター条件を指定できます。Grid 高度なフィルターは、[Ignite UI for Angular Grid 高度なフィルタリング機能](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/grid/advanced-filtering.html)と視覚的に同じものです。

## Grid Advanced Filter のデモ

<img class="responsive-img" src="../images/grid_advanced_filter_demo.png" srcset="../images/grid_advanced_filter_demo@2x.png 2x" />

## 高度なフィルター機能

グリッドには、`Features` の下に 3 つの `Advanced Filtering` コンポーネントがあり、各サイズに 1 つずつ、グリッド上に表示されるオーバーレイを表します。Figma では、プロパティ パネルの専用 `Size` プロパティを使用して、さまざまなサイズを切り替えることができます。

<img class="responsive-img" src="../images/grid_advanced_filter_sizes.png" srcset="../images/grid_advanced_filter_sizes@2x.png 2x" />

## フィルター式状態

高度なフィルター機能には、デフォルトで **Empty Filter** 式があり、必要に応じて **Applied Filter** に変更できます。Figma でデフォルトの空の状態を変更するには、レイヤー パネルで `Filter Expression State` コンポーネントを見つけて、コンポーネントの `Type` プロパティを `Empty Filter` から `Applied Filter` に切り替える必要があります。これを設定したら、必要なフィルタリング基準を指定してさらにカスタマイズできます。

<img class="responsive-img" src="../images/grid_advanced_filter_expression.png" srcset="../images/grid_advanced_filter_expression@2x.png 2x" />

## ツールバー

Grid 高度なフィルターは、Grid 全体の機能を有効にする Advanced Filter 操作を備えた Toolbar を追加することで実現されます。

## その他のリソース

関連トピック:

- [Grid](grid.md)
- [Grid 行フィルター](grid-row-filter.md)
- [Grid Excel スタイル フィルター](grid-excel-style-filter.md)
- [Grid ツールバー](grid-toolbar.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
