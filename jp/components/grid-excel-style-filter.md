---
title: グリッド Excel スタイル フィルター - グリッド機能
_description: グリッド Excel スタイル フィルターは、並べ替え、フィルタリング、列移動、非表示、ピン固定などの列操作のオーバーレイを提供します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Figma, Figma to Angular, Export code from Figma, Figma to HTML, Figma UI kits, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット, Adobe XD, Adobe XD to Angular, Export code from Adobe XD, Adobe XD to HTML, Adobe XD UI kits
_language: ja
---

# Grid Excel Style Filter (グリッド Excel スタイル フィルター)

グリッド Excel スタイル フィルターは、ユーザーが列に一連のグリッド機能を指定できる機能です。一意の値または複数の条件でフィルタリング、並べ替え、列移動、列非表示、ピン固定。一度に 1 列にのみ Excel スタイル フィルターを示し、Header Filter 状態はアクティブに設定する必要があります (以下 Header Cell 参照)。このフィルターは、[Ignite UI for Angular Grid グリッド Excel スタイル フィルタリング機能](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/grid/excel_style_filtering.html)と視覚的に同じものです。

## Excel スタイル フィルターのデモ

<img class="responsive-img" src="../images/grid_excel_style_filter_demo.png" srcset="../images/grid_excel_style_filter_demo@2x.png 2x" />

## Header Cell (ヘッダー セル)

Sketch で列に Excel スタイル フィルターがアクティブであることを示するには (フィルターのオーバーレイが表示されます)、`Feature Left` または `Feature Right` のオーバーライドを `Filtering` に設定し、`Filter State` パネルで次のオーバーライドを `Filtering/Active` に設定する必要があります。また、列で Excel スタイル フィルタリングが有効が有効にされたことを示すため、フィルタリング条件がこの列に適用されていないことを示す `Filtering/Inactive` 状態、またはフィルタリング条件が適用され、列のオーバーレイが閉じられたことを示す `Filtering/Filtered` 状態を使用できます。In Figma to use the Excel Style Filtering you need to open the Grid Header Cell layer, select either the `Feature Left` or `Feature Right` component and change the `Type` property to `Filtering Inactive`, `Filtering Active` or `Filtering Filtered`. Adobe XD では、`Feature Left` または `Feature Right` グループのいずれかを非表示にしてから、その中に `Filtering` レイヤーだけを残すことで、少し異なる方法を使用する必要があります。必要に応じて `Filtering` レイヤーも表示にできます。次に、使用可能な `Component States` を介して、状態を `Filtered` に切り替えることができます。

## Excel Style Filter Feature (Excel スタイル フィルター機能)

Grid には、スケッチの `Features` の下に 3 つの `Excel Style Filter` シンボルがあり、各表示密度に 1 つずつあり、影響を受ける列に表示されるオーバーレイを表します。In Figma and Adobe XD, there is just one `Excel Style Filter`, and via the `Display Density` property in Figma and `Component States` in Adobe XD you can easily switch between the three display densities available. Excel Style Filter を追加すると、デザインに視覚的な効果があるのみで、よりリアルになります。Excel Style Filter 機能をオンにしたい場合は、Header Cells を構成します。

<img class="responsive-img" src="../images/grid_excel_style_filter_densities.png" srcset="../images/grid_excel_style_filter_densities@2x.png 2x" />

> [!Note]
> グリッドのすべての機能に継承されるため、Grid Display Density に一致する Excel スタイル フィルター オーバーレイの Display Density バリアントを選択してください。

### オーバーレイのカスタマイズ

Excel スタイル フィルター オーバーレイを使用すると、列名を構成して、その列をトリガーした列および On/Off 状態と項目テキストを含む下部の一意の値のリストを反映できます。他の機能は構成できません。

### 並べ替え、移動、非表示、ピン固定

Excel スタイル フィルター インターフェイスは、フィルタリング以外に並べ替え、列移動、列非表示、列ピン固定など、構成できない追加機能を提供します。それらのいずれかが Header Cell を介して列で有効になっている場合 (それぞれのトピックで有効にする方法を参照)、機能のユーザーインターフェイス要素は適用されている Grid Display Density に従って Excel スタイル フィルター インターフェイスに表示されます 。

## その他のリソース

関連トピック:

- [Grid](grid.md)
- [Grid 行フィルター](grid-row-filter.md)
- [Grid 高度なフィルター](grid-advanced-filter.md)
- [Grid 表示密度](grid-display-density.md)
- [Grid 並べ替え](grid-sorting.md)
- [Grid 列移動](grid-column-moving.md)
- [Grid 列非表](grid-column-hiding.md)
- [Grid 列ピン固定](grid-column-pinning.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
