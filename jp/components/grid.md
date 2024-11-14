---
title: Grid - デザイン システム コンポーネント
_description: Grid コンポーネント シンボルは、表形式の大量のデータを表示し、インタラクティブに操作できます。
_keywords: デザイン システム, デザイン システム UX, UI キット, Figma, Figma to Angular, Figma からコードをエクスポート, Figma to HTML, Figma UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット, Adobe XD, Adobe XD to Angular, Adobe XD からコードをエクスポート, Adobe XD to HTML, Adobe XD UI キット
_language: ja
---

# Grid (グリッド)

Grid コンポーネントは複雑で大規模なデータを表形式のレイアウトで表示し、ユーザーがブラウジングやインタラクティブに操作することにより、フィルタリング、並べ替え、ページングなどが可能です。Grid は、[Ignite UI for Angular Grid コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/grid.html)と視覚的に同じものです。

## Grid のデモ

<img class="responsive-img" src="../images/grid_demo.png" srcset="../images/grid_demo@2x.png 2x" />

## Figma で Grid を使用

Grid は、基本的に表形式のレイアウトでデータを表示する列と行のリピーターです。したがって、最も簡単な使用方法は、定義済みのグリッドの 1 つをフレームにドラッグすることです。サポートされる 3 つの[サイズ](grid-sizes.md)に 3 つのプリセットがあります。Figma では、Grid コンポーネントは列に基づいた構造を持っていることに注意してください。つまり、行全体ではなく、列全体を即座に削除または非表示にすることができます。グリッドを挿入したら、ヘッダーと本文セルの編集を開始したり、グリッド全体の幅のサイズを変更したりできます。ただし、グリッド構造をさらに調整したい場合 (列または行の削除、列の幅の変更など) は、グリッドを右クリックし、コンテキスト メニューの下部近くにある `Detach instance` オプションを使用する必要があります。事前にデタッチしなくても、レイヤー パネルのコンポーネント名の下に次の構造が表示されます。

| レイヤー                                    | 使用                                                                                                                                                  |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🚫 componentVersion &nbsp;&nbsp; | 禁止されたアイコンで開始する特定のロックされたレイヤー。禁止されたアイコンで開始する特定のロックされたレイヤー。この層はコード生成に必要であり、コンポーネントのバージョンに関する情報を保持します。削除や変更は避けてください。|
| 🚫 metadata | 禁止されたアイコンで開始する特定のロックされたレイヤー。このレイヤーはコード生成に必要なため、削除または変更しないでください。|
| Column (数字)                                  | 特定の列内の Header と Body セルを含みます。                                                                                                                |
| Header                                   | 	特定のヘッダー セルを含みます。                                                                                                                 |
| Body (数字)                                    | 特定の本文セルを含みます。                                                                                                                   |

デタッチ後、既存の列を複製することにより、グリッド内の列の数を増やすことができます。本文セルの数を増やすには、まず特定の列で `Detach instance` オプションを使用してから、列内にすでに存在する本文セルを複製する必要があります。列またはセルの数を増減した後、Grid コンポーネントのサイズを手動で調整する必要があります。

## Sketch で Grid を使用

Sketch でグリッド コンポーネントを使用するには、定義済みのグリッドの 1 つをアートボードにドラッグすることです。サポートされる 3 つの[表示密度](grid-sizes.md)に 3 つのプリセットがあります。アートボードを開いた後、その上を右クリックし、コンテキスト メニューの下部にある `Detach from Symbol` オプションを選択すると、新しく表示されたグループの下のレイヤー パネルに次のように表示されます。

| レイヤー                                    | 使用                                                                                                                                                  |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🚫 metadata | 禁止されたアイコンで開始する特定のロックされたレイヤー。このレイヤーはコード生成に必要なため、削除または変更しないでください |
| Column (数字)                          | 	特定の列内の Header と Body セルを含みます。
| Header                                   | ヘッダーのすべてのセルを取得します。                                                                                                              |
| Body (数字)                                    | 特定の本文セルを含みます。                                                                                                                    |

デタッチ後、既存のデータ行の 1 つを複製するだけで、データのすべてのディメンションを表示するために必要なヘッダーの数を変更できます。デザインに表示したい表示レコード (数に制限がない) を挿入することもできます。

## Adobe XD で Grid を使用

Adobe XD では、3 つの[プリセット表示密度グリッド コンポーネント](grid-sizes.md)のいずれかを選択してアートボードにドラッグすると、レイヤー パネルで、Header と Body の両方に `Repeat Grid` を使用して構成を高速化していることがわかります。Sketch とは異なり、Adobe XD ではシンボルを破棄する必要はありません。レイヤー パネルに次のように表示されます:

| レイヤー                                    | 使用                                                                                                                                                  |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🚫 metadata | 禁止されたアイコンで開始する特定のロックされたレイヤー。このレイヤーはコード生成に必要なため、削除または変更しないでください。|
| Header                                   | Header Repeat Grid にグループ化されたすべてのヘッダー セルが含まれます。                                                                                                     |
| Body                                     | Body Repeat Grid にグループ化されたすべての本文セルが含まれます。                                                                                                               |

Header または Body Repeat Grid レイヤーを選択する場合、右端または下端にある緑色のハンドルをドラッグして、必要な繰り返しセルの数を変更できます。このようにして、データのすべてのディメンションを表示し、デザインに表示したい数の表示可能なレコードを挿入できます。特定のセル タイプまたは列幅を変更するには、Repeat Grid レイヤーを選択し、右側のパネルで `Ungroup Grid` をクリックする必要があります。これにより、セルを個別に操作して、目的のデザインを実現できます。


<img class="responsive-img" src="../images/layers_panel_adobe_xd.png" srcset="../images/layers_panel_adobe_xd@2x.png 2x" />

## セル タイプ

Grid は、異なるデータ可視化用に 3 タイプのセルがあります。Header Cell は、各列に 1 つ、Grid の一番上に表示され、特定の列のデータに関する説明をテキストで表示します。Body Cell は、データ レコードを表示するコンテンツ テーブルのビルドを作成するために使用され、そのタイプは異なる場合があります。Summary Cell は、[集計](grid-summaries.md)列がカウント、最大、最小などの各ディメンションに表示される Grid の下のセクションを作成するために使用されます。

<img class="responsive-img" src="../images/grid_cell_header.png" srcset="../images/grid_cell_header@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_body.png" srcset="../images/grid_cell_body@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_summary.png" srcset="../images/grid_cell_summary@2x.png 2x" />

Header Cell には、Row Filter Header Cell という特別なサブタイプが 1 つあります。Row Filter Header Cell を使用して、[行フィルター](grid-row-filter.md)機能を有効にするために Header の下部に追加のヘッダー行を作成します。

<img class="responsive-img" src="../images/grid_cell_header_filter.png" srcset="../images/grid_cell_header_filter@2x.png 2x" />

## セル サイズ

Header、Body、および Summary Cell は、Grid コンポーネントのサイズに応じて 3 つのバリアントをサポートしています: Large、Medium、および Small。Sketch では、それぞれに個別のシンボルが付いていますが、Figma では、セルのサイズと内部のコンテンツはプロパティ パネルから個別に変更できるプロパティです。

> [!NOTE]
> 特定のサイズの Grid コンポーネントを選択した後は、グリッド セルのサイズを変更しないことをお勧めします。

<img class="responsive-img" src="../images/grid_cell_header_large.png" srcset="../images/grid_cell_header_large@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_header_medium.png" srcset="../images/grid_cell_header_medium@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_header_small.png" srcset="../images/grid_cell_header_small@2x.png 2x" />

## 項目と機能 (ヘッダー セル)

Grid Header Cell は、`Items` のオーバーライドでさまざまなレイアウト/インスタンスの組み合わせをサポートします。また、`Feature Left` および `Feature Right` のオーバーライド/インスタンスを介して機能の複数の構成をサポートします。さらに、[編集](grid-editing.md)、[移動](grid-column-moving.md)、[サイズ変更](grid-column-resizing.md)、[非表示](rid-column-hiding.md)、[ピン固定](grid-column-pinning.md)など、セルを視覚的に変更しないがグリッドの異なる列機能を有効にする追加のオーバーライド/インスタンスがあります。一部の機能は非推奨となるため、Figma では `Feature Left` と `Feature Right` のみをサポートします。

<img class="responsive-img" src="../images/grid_cell_header_no-icon.png" srcset="../images/grid_cell_header_no-icon@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_header_icon.png" srcset="../images/grid_cell_header_icon@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_header_icons.png" srcset="../images/grid_cell_header_icons@2x.png 2x" />

## 状態と Grid 機能 (本文セル)

Grid Body Cell は、以下のインタラクティブな状態をサポートします: **Inactive** (デフォルトの状態)、**Selected**、**Active** および **Focused**。任意の時間に、グリッド内の 1 つのセルだけがアクティブまたはフォーカスされます。

<img class="responsive-img" src="../images/grid_cell_body_cell-inactive.png" srcset="../images/grid_cell_body_cell-inactive@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_body_cell-selected.png" srcset="../images/grid_cell_body_cell-selected@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_body_cell-active.png" srcset="../images/grid_cell_body_cell-active@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_body_cell-focused.png" srcset="../images/grid_cell_body_cell-focused@2x.png 2x" />

Grid Body Cell は、`Grid Feature` を介してヘッダーで定義された一部の Grid 機能のスタイル設定をサポートしています。通常のセル、編集可能なセル、および選択した行に属するセルには、スタイルのバリアントがあります。Figma では、本文セルのさまざまな状態間の切り替えは、プロパティ パネルの `Cell State`、`Row Selected`、および `Row Editing` プロパティを通じて実現されます。Sketch では、`Grid Feature` を切り替えるには、使用可能な `Symbol Overrides` を使用する必要がありますが、Adobe XD では、`Component States` の一致するリストがあります。

<img class="responsive-img" src="../images/grid_cell_body_row-selected.png" srcset="../images/grid_cell_body_row-selected@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_body_editing_cell.png" srcset="../images/grid_cell_body_editing_cell@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_body_multirow_layout.png" srcset="../images/grid_cell_body_multirow_layout@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_body_row-editing-nofocus.png" srcset="../images/grid_cell_body_row-editing-nofocus@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_body_row-editing-focus.png" srcset="../images/grid_cell_body_row-editing-focus@2x.png 2x" />

## セル タイプ

Sketch と Figma では、Grid Header Cell は、グリッドが対応する必要があるデータの種類に対して 5 つのプリセットを提供します。数値の **Number**、それぞれのデータ タイプの **Text,Date,Bool** (テキスト、日付、ブール) を組み合わせたもの; 複数の行を選択する場合に最初の列に使用される **Row Selection**; グループ化されたデータ行を展開および縮小するために使用される Group By; ユーザーが本文セル内のコンテンツに関連する特定のフィルター オプションをアクティブ化できる場所で使用される **Row Filter** です。Figma には、**Row Filter** の 2 つのオプションがあります - Empty (空) または Filled (塗りつぶし済み)。Adobe XD では、3 つのタイプがあります。**Data** に標準のもの、**Row Selection**、**Group By** の標準タイプで、標準のタイプは `Component States` を介した **Numeric** 値と **Text,Date,Bool** 値の選択をサポートしています。

<img class="responsive-img" src="../images/grid_cell_header_number.png" srcset="../images/grid_cell_header_number@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_header_text.png" srcset="../images/grid_cell_header_text@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_header_checkbox.png" srcset="../images/grid_cell_header_checkbox@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_header_groupby.png" srcset="../images/grid_cell_header_groupby@2x.png 2x" />

Grid Body Cell には、単純なグラフィックスを視覚化する追加のアイコン タイプと、空の本文セルを表示するために使用されるスペーサー タイプを備えた Header Cell のような、同じ汎用タイプのデータのプリセットが提供されます。

<img class="responsive-img" src="../images/grid_cell_body_number.png" srcset="../images/grid_cell_body_number@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_body_text.png" srcset="../images/grid_cell_body_text@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_body_checkbox.png" srcset="../images/grid_cell_body_checkbox@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_body_icon.png" srcset="../images/grid_cell_body_icon@2x.png 2x" />

## Grid の水平スクロール

Figma で水平スクロールを実現するには、実際のグリッド幅より小さいサイズでフレーム内に Grid を追加し、プロパティ パネルからクリッピング オプションを有効にする必要があります。次に、プロパティ パネルの上部にある `Prototype` タブに移動し、スクロールを水平に設定する必要があります。同じ結果を達成するためのもう 1 つのオプションは、グリッド コンポーネントをデタッチすることです。その後、フレーム サイズを縮小し、プロパティ パネルからクリッピング オプションを有効にする必要があります。Sketch と Adobe XD では、絶対幅として、または親グループ/コンテナに関連する特定のグリッド 寸法を達成する 1 つの方法は、グリッドのメイン グループ内にマスクを追加することです。スタイル設定なしで長方形を挿入し、必要に応じてそのサイズを設定します。下の画像では、常に正確に 800px 幅のグリッドがあります。

<img class="responsive-img" src="../images/grid_horizontal_scroll_rect.png" srcset="../images/grid_horizontal_scroll_rect@2x.png 2x" />

長方形の幅と高さを固定し、名前を `Mask` に変更し、レイヤー パネルの下部に配置します。次に、長方形の上を右クリックし、コンテキスト メニューの下部にある `Mask` オプションを選択します。

<img class="responsive-img" src="../images/grid_horizontal_scroll_masked.png" srcset="../images/grid_horizontal_scroll_masked@2x.png 2x" />

これで Grid のグループが Mask のディメンションを取得し、水平スクロールなしで Grid を使用することと同じ方法でレイアウトで使用できます。このコンポーネントのコードが生成されると、Grid のディメンションとしてマスクのディメンションを基準とする水平スクロールバーが自動的に追加されます。

## スタイル設定

Grid は、さまざま状態の各セル テキスト、アイコン、背景色のスタイル設定や水平および垂直の境界線の非表示など柔軟に変更できます。

<img class="responsive-img" src="../images/grid_styling.png" srcset="../images/grid_styling@2x.png 2x" />

## 使用方法

Grid の最も重要な点は、Header および Body セル内のデータの配置です。テキストは常に左揃えにして変数空スペースを右に残し、数値は常に右揃えにして変数空スペースを左に残します。

| 良い例                                                                                                | 悪い例                                                                                               |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/grid_do1.png" srcset="../images/grid_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/grid_dont1.png" srcset="../images/grid_dont1@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [Grid ツールバー](grid-toolbar.md)
- [Grid エクスポート](grid-export.md)
- [Grid グループ化](grid-grouping.md)
- [Grid 列ピン固定](grid-column-pinning.md)
- [Grid 列非表示](grid-column-hiding.md)
- [Grid 列移動](grid-column-moving.md)
- [Grid 列サイズ変更](grid-column-resizing.md)
- [Grid 並べ替え](grid-sorting.md)
- [Grid 行フィルター](grid-row-filter.md)
- [Grid Excel スタイル フィルター](grid-excel-style-filter.md)
- [Grid 行選択](grid-row-selection.md)
- [Grid 編集](grid-editing.md)
- [Grid サイズ](grid-sizes.md)
- [Grid ページング](grid-paging.md)
- [Grid 集計](grid-summaries.md)
- [Hierarchical Grid](hierarchical-grid.md)
- [Tree Grid](tree-grid.md)
- [Grid パターン](../patterns/grid.md)
- [Grid Skeleton](grid-skeleton.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
