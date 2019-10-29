---
title: グリッド Excel スタイル フィルター - グリッド機能
_description: グリッド Excel スタイル フィルターは、並べ替え、フィルタリング、列移動、非表示、ピン固定などの列操作のオーバーレイを提供します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

## グリッド Excel スタイル フィルター

グリッド Excel スタイル フィルターは、ユーザーが列に一連のグリッド機能を指定できるために使用します：一意の値または複数の条件でフィルタリングする、並べ替え、列移動、列非表示、ピン固定。一度に 1 列にのみ Excel スタイル フィルターを示し、ヘッダー フィルター状態はアクティブに設定する必要があります (以下ヘッダー セル参照)。グリッド Excel スタイル フィルターは、[Ignite UI for Angular Grid グリッド Excel スタイル フィルタリング機能](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/grid/excel_style_filtering.html) と視覚的に同じものです。

### グリッド Exel スタイル フィルター デモ

<img class="responsive-img" src="../images/grid_excel_style_filter_demo.png" srcset="../images/grid_excel_style_filter_demo@2x.png 2x" />

### ヘッダー セル

列に Excel スタイル フィルターがアクティブであることを示するには (フィルターのオーバーレイが表示されます)、`Feature Left` または `Feature Right` のオーバーライドを `Filtering` に設定し、`Filtering State`パネルで次のオーバーライドを `Filtering/Active` に設定する必要があります。列で Excel スタイル フィルタリングが有効が有効にされたことを示すため、フィルタリング条件がこの列に適用されていないことを示す `Filtering/Inactive` 状態、またはフィルタリング条件が適用され、列のオーバーレイが閉じられたことを示す `Filtering/Inactive` 状態を使用できます。

### Excel スタイル フィルター機能

グリッドには、 `機能` の下に3つの `Excel スタイル フィルター`シンボルがあり、各表示密度に1つずつ、影響を受ける列に表示されるオーバーレイを表します。このシンボルを追加すると、デザインに視覚的な効果があるのみで、よりリアルになります。Excel スタイル フィルター機能を切り替えたい場合は、ヘッダー セルを構成します。

<img class="responsive-img" src="../images/grid_excel_style_filter_densities.png" srcset="../images/grid_excel_style_filter_densities@2x.png 2x" />

> [!Note]
> グリッドのすべての機能に継承されるため、Grid 表示密度に一致する Excel スタイル フィルタ オーバーレイの表示密度バリアントを選択してください。

#### オーバーレイのカスタマイズ

Excel スタイル フィルターオーバーレイを使用すると、列名を構成して、その列をトリガーした列および On/Off 状態と項目テキストを含む下部の一意の値のリストを反映できます。他の機能は構成できません。

#### 並べ替え、移動、非表示、ピン固定

Excel スタイル フィルターのインターフェイスは、並べ替え、列移動、列非表示、列ピン固定などのフィルタリング以外の追加機能を提供します。これらの機能のオーバーライドはないため、構成できません。それらのいずれかがヘッダー セルを介して列で有効になっている場合 (それぞれのトピックで有効にする方法を参照)、機能のユーザーインターフェイス要素は適用されている Grid 表示密度に従って Excel スタイル フィルターインターフェイスに表示されます 。

## コードの生成

Excel スタイル フィルターは、ヘッダーグループと本体グループの兄弟としてグリッドを定義するグループ内に配置してください。

## その他のリソース

関連トピック:

- [Grid](grid.md)
- [表示密度](grid-display-density.md)
- [並べ替え](grid-sorting.md)
- [列移動](grid-column-moving.md)
- [列非表示](grid-column-hiding.md)
- [列ピン固定](grid-column-pinning.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
