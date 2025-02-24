---
title: Grid グループ化 - グリッド機能
_description: Grid グループ化 を使用すると、選択した列の共通値に従って Grid レコードを階層的に編成できます。
_keywords: デザイン システム, デザイン システム UX, UI キット, Figma, Ignite UI for Angular, Angular, Angular デザイン システム, Figma からコードをエクスポート, Angular 用のデザイン キット, Figma HTML, Figma to HTML, Figma UI キット
_language: ja
---

# Grid Group By (グリッドのグループ化)

Grid Group By を使用して、特定の列内の一致する値によって定義されたグループの階層コレクションでデータ レコードを整理します。グループ化の条件の順序は、Grid Header の上の特別な領域に表され、新しいグループの開始をマークするために、Grid レコードの間に特別な行が挿入されます。Grid グループ化は、[Ignite UI for Angular Grid のグループ化](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/grid/groupby.html)と視覚的に同じものです。

## Grid Group By のデモ

<img class="responsive-img" src="../images/grid_group_by_demo.png" srcset="../images/grid_group_by_demo@2x.png 2x" />

## Group Area (グループ化領域)

Grid には、レコードの階層的なグループ化と、これらのグループがネストされる順序を確立するために使用される列を指定する `Group Area` があります。Figma では、`Group Area` コンポーネントは `Grid Features` の下にあり、Grid コンポーネントがデタッチされると、Grid コンポーネント内のアセット パネルから挿入されます。`Group Area` 内の[チップ領域](chips.md)はデタッチせずに直接変更することができます。

## GroupBy Row (行でグループ化)

Grid には、`Grid Features` の下にある `GroupBy Row` コンポーネントがあります。これは、グループ化されたレコードの前にある見出しのようなグリッド内の特別な行を表します。このコンポーネントを追加すると、デザインに視覚的な効果のみが加わり、よりリアルになります。Figma では、最初にグリッドをデタッチし、次に `GroupBy Row` コンポーネントを挿入する必要があります。

## その他のリソース

関連トピック:

- [Grid](grid.md)
- [Chips](chips.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
