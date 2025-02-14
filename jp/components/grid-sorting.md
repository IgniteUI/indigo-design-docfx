---
title: Grid ソート - グリッド機能
_description: Grid ソートを使用すると、列の値に基づいてレコードをソートすることができます。
_keywords: デザイン システム, デザイン システム UX, UI キット, Figma, Figma to Angular, Figma からコードをエクスポート, Figma to HTML, Figma UI キット, Angular, Angular デザイン システム, Angular 用のデザイン キット
_language: ja
---

# Grid Sorting (グリッドのソート)

Grid ソートを使用して、特定の列内の値に従って昇順および降順でレコードの順序を示します。Grid ソートは、[Ignite UI for Angular Grid ソート機能](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/grid/sorting.html)と視覚的に同じものです。

## Grid ソートのデモ

<img class="responsive-img" src="../images/grid_sorting_demo.png" srcset="../images/grid_sorting_demo@2x.png 2x" />

## Header Cell Feature (ヘッダー セルの機能)

Sketch で列をソート可能として示すには、`Feature Left` または `Feature Right` のオーバーライドを使用して、`Sorting` に設定します。次に、`Sorting State` を Ascending (昇順)、Descending (降順)、または **Unsorted (ソートなし)** に設定して、ソート順を示します。Figma で列をソート可能として示すには、グリッド ヘッダー セル レイヤー内にある `Feature Left` または `Feature Right` コンポーネント インスタンスを使用し、`Type` プロパティを Ascending、Descending、または **Unsorted** に設定してソート順序を示します。Adobe XD では、`Feature Left` または `Feature Right` グループのいずれかを非表示にしてから、その中に `Sorting` レイヤーだけを残すことで、少し異なる方法を使用する必要があります。必要に応じて `Sorting` レイヤーも表示にできます。次に、使用可能な `Component States` を介して、状態を `Ascending` または `Descending` に切り替えることができます。選択した順序を反映するように列の値を操作することをお勧めします。

## その他のリソース

関連トピック:

- [Grid](grid.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
