---
title: Grid グループ化 - グリッド機能
_description: Grid グループ化 を使用すると、選択した列の共通値に従って Grid レコードを階層的に編成できます。
_keywords: デザイン システム, デザイン システム UX, UI キット, Figma, Figma to Angular, Figma からコードをエクスポート, Figma to HTML, Figma UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット, Adobe XD, Adobe XD to Angular, Adobe XD からコードをエクスポート, Adobe XD to HTML, Adobe XD UI キット
_language: ja
---

# グループ化

Grid グループ化 を使用して、特定の列内の一致する値によって定義されたグループの階層コレクションでデータ レコードを整理します。グループ化の条件の順序は、Grid Header の上の特別な領域に表され、新しいグループの開始をマークするために、Grid レコードの間に特別な行が挿入されます。Grid グループ化は、[Ignite UI for Angular Grid のグループ化](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/grid/groupby.html)と視覚的に同じものです。

## Grid グループ化のデモ

<img class="responsive-img" src="../images/grid_group_by_demo.png" srcset="../images/grid_group_by_demo@2x.png 2x" />

## グループ化領域

Grid には、Sketch の `Grid Features` の下に `Group Area` シンボルがあり、レコードの階層グループを確立するために使用される列と、これらのグループがネストされる順序を指定します。Sketch で挿入すると、`Detach from Symbol` を実行できます。内部には、グループ化がグリッドに適用される方法を定義する方法で構成できる [Chips Area](chips.md) があります。In Figma the `Group Area` component can be found under `Grid Features`and inserted from the assets panel inside the Grid Component, once the Grid Component is detached. You can directly modify the [Chips Area](chips.md) inside the `Group Area`, without detaching. Adobe XD には一致するコンポーネントがあり、挿入時に分割せずに直接編集できます。

## 行でグループ化

グリッドには、`Features` の下にある `GroupBy Row` シンボル / コンポーネントがあります。これは、グループ化されたレコードの前にある見出しのようなグリッド内の特別な行を表します。このシンボル / コンポーネントを追加してもデザインに視覚的な効果があるだけで、よりリアルになります。Sketch でグループ化機能を切り替えたい場合は、`Group Area` を挿入して設定します。In Adobe XD you can simply insert the `GroupBy Row` component. In Figma, you need to detach the Grid first and then insert the `GroupBy Row` component.

## その他のリソース

関連トピック:

- [Grid](grid.md)
- [Chips](chips.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
