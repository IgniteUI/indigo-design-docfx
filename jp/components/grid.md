---
title: Grid - デザイン システム コンポーネント
_description: Grid コンポーネント シンボルは、表形式の大量のデータを表示し、インタラクティブに操作できます。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# Grid (グリッド)

Grid コンポーネントは大量の複雑なデータをタブ形式で表示し、ユーザーがブラウジングやインタラクティブに操作することにより、フィルタリング、並べ替え、ページングなどが可能です。Grid は、[Ignite UI for Angular Grid コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/grid.html)と視覚的に同じものです。

## Grid のデモ

<img class="responsive-img" src="../images/grid_demo.png" srcset="../images/grid_demo@2x.png 2x" />

## Sketch で Grid を使用

Grid は、基本的に表形式でデータを表示する列と行のリピーターです。したがって、最も簡単な使用方法は、定義済みの Grid の 1 つをアートボードにドラッグすることです。サポートされる 3 つの[表示密度](grid-display-density.md)に 3 つのプリセットがあります。アートボードを開いた後、その上を右クリックし、コンテキスト メニューの下部にある `Detach from Symbol` オプションを選択すると、新しく表示されたグループの下のレイヤー パネルに次のように表示されます。

| レイヤー                                    | 使用                                                                                                                                                  |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🚫 metadata | 禁止されたアイコンで開始する特定のロックされたレイヤー。このレイヤーはコード生成に必要なため、削除または変更しないでください |
| Header                                   | ヘッダーのすべてのセルを取得します                                                                                                             |
| Body                                     | 本体のすべてのセルを含みます                                                                                                                 |

デタッチ後、既存のデータ行の 1 つを複製するだけで、データのすべてのディメンションを表示するために必要なヘッダーの数を変更できます。デザインに表示したい表示レコード (数に制限がない) を挿入することもできます。

## Adobe XD で Grid を使用

Adobe XD では、3 つの[プリセット表示密度グリッド コンポーネント](grid-display-density.md)のいずれかを選択してアートボードにドラッグすると、レイヤー パネルで、Header と Body の両方に `Repeat Grid` を使用して構成を高速化していることがわかります。Sketch とは異なり、Adobe XD ではシンボルを破棄する必要はありません。レイヤー パネルに次のように表示されます:

| レイヤー                                    | 使用                                                                                                                                                  |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🚫 metadata | 禁止されたアイコンで開始する特定のロックされたレイヤー。このレイヤーはコード生成に必要なため、削除または変更しないでください。 |
| Header                                   | Header Repeat Grid にグループ化されたすべてのヘッダー セルが含まれます。                                                                                                        |
| Body                                     | Body Repeat Grid にグループ化されたすべてのボディ セルが含まれます。                                                                                                                  |

Header または Body Repeat Grid レイヤーを選択する場合、右端または下端にある緑色のハンドルをドラッグして、必要な繰り返しセルの数を変更できます。 このようにして、データのすべてのディメンションを表示し、デザインに表示したい数の表示可能なレコードを挿入できます。特定のセル タイプまたは列幅を変更するには、Repeat Grid レイヤーを選択し、右側のパネルで `Ungroup Grid` をクリックする必要があります。これにより、セルを個別に操作して、目的のデザインを実現できます。

<img class="responsive-img" src="../images/layers_panel_adobe_xd.png" srcset="../images/layers_panel_adobe_xd@2x.png 2x" />

## セル タイプ

Grid は、異なるデータ可視化用に 3 タイプのセルがあります。Header Cell は、各列に 1 つ、Grid の一番上に表示され、特定の列のデータに関する説明をテキストで表示します。Body Cell は、データ レコードを表示するコンテンツ テーブルのビルドを作成するために使用され、そのタイプは異なる場合があります。Summary Cell は、[集計](grid-summaries.md)列がカウント、最大、最小などの各ディメンションに表示される Grid の下のセクションを作成するために使用されます。

<img class="responsive-img" src="../images/grid_cell_header.png" srcset="../images/grid_cell_header@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_body.png" srcset="../images/grid_cell_body@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_summary.png" srcset="../images/grid_cell_summary@2x.png 2x" />

Header Cell には、Row Filter Header Cell という特別なサブタイプが 1 つあります。Row Filter Header Cell を使用して、[行フィルター](grid-row-filter.md)機能を有効にするために Header の下部に追加のヘッダー行を作成します。

<img class="responsive-img" src="../images/grid_cell_header_filter.png" srcset="../images/grid_cell_header_filter@2x.png 2x" />

## セル表示密度

Header、Body、および Summary セルは、Grid の 3 つの表示密度バリアントをサポートします: comfortable、cosy、および compact。以下のヘッダー セルに見られるように、それぞれに異なるシンボルが付いています:

<img class="responsive-img" src="../images/grid_cell_header_comfortable.png" srcset="../images/grid_cell_header_comfortable@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_header_cosy.png" srcset="../images/grid_cell_header_cosy@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_header_compact.png" srcset="../images/grid_cell_header_compact@2x.png 2x" />

## 項目と機能 (ヘッダー セル)

Grid Header Cell は、`Items` のオーバーライドでさまざまなレイアウトの組み合わせをサポートします。また、`Feature Left` および `Feature Right` のオーバーライドを介して機能の複数の構成をサポートします。さらに、[編集](grid-editing.md)、[移動](grid-column-moving.md)、[サイズ変更](grid-column-resizing.md)、[ピン固定](grid-column-pinning.md)など、表示されていないが Grid の異なる列機能を有効にする追加のオーバーライドがあります。

<img class="responsive-img" src="../images/grid_cell_header_no-icon.png" srcset="../images/grid_cell_header_no-icon@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_header_icon.png" srcset="../images/grid_cell_header_icon@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_header_icons.png" srcset="../images/grid_cell_header_icons@2x.png 2x" />

## 状態と Grid 機能 (本体セル)

Grid Body Cell は、以下のインタラクティブな状態をサポートします: 標準状態の **Inactive**、フォーカスのある/選択されたセルでは Active です。任意の時間に、グリッド内の 1 つのセルだけをアクティブにすることができます。

<img class="responsive-img" src="../images/grid_cell_body_cell-inactive.png" srcset="../images/grid_cell_body_cell-inactive@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_body_cell-active.png" srcset="../images/grid_cell_body_cell-active@2x.png 2x" />

Grid Body Cell は、`Grid Feature` を介してヘッダーで定義された一部の Grid 機能のスタイル設定をサポートしています。通常のセル、編集可能なセル、および選択した行に属するセルには、スタイルのバリアントがあります。Sketch では、`Grid Feature` を切り替えるには、使用可能な `Symbol Overrides` を使用する必要がありますが、Adobe XD では、`Component States` の一致するリストがあります。

<img class="responsive-img" src="../images/grid_cell_body_row-selected.png" srcset="../images/grid_cell_body_row-selected@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_body_editing_cell.png" srcset="../images/grid_cell_body_editing_cell@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_body_row-editing-nofocus.png" srcset="../images/grid_cell_body_row-editing-nofocus@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_body_row-editing-focus.png" srcset="../images/grid_cell_body_row-editing-focus@2x.png 2x" />

## セル タイプ

Sketch の Grid Header Cell は、Grid が対応する必要のある 4 つの一般的なタイプのデータのプリセットを提供します: 数値の **Number**、それぞれのデータ タイプのテキスト、日付、ブールを組み合わせたもの、複数の行を選択する場合に最初の列に使用される Row Selection と、グループ化されたデータ行を展開および縮小するために使用される Group By です。Adobe XD では、3 つのタイプがあります。データに標準のもの、Row Selection、Group By の標準タイプで、標準のタイプは `Component States` を介した数値とテキスト/日付/ブール値の選択をサポートしています。

<img class="responsive-img" src="../images/grid_cell_header_number.png" srcset="../images/grid_cell_header_number@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_header_text.png" srcset="../images/grid_cell_header_text@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_header_checkbox.png" srcset="../images/grid_cell_header_checkbox@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_header_groupby.png" srcset="../images/grid_cell_header_groupby@2x.png 2x" />

Grid Body Cell は、Header Cell の同じ一般的なデータ型のプリセットを提供し、単純なグラフィックスを視覚化する追加のアイコン タイプを含みます。

<img class="responsive-img" src="../images/grid_cell_body_number.png" srcset="../images/grid_cell_body_number@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_body_text.png" srcset="../images/grid_cell_body_text@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_body_checkbox.png" srcset="../images/grid_cell_body_checkbox@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_body_icon.png" srcset="../images/grid_cell_body_icon@2x.png 2x" />

## Grid の水平スクロール

絶対幅として、または親グループ/コンテナに関連する特定の Grid ディメンションを達成する 1 つの方法は、Grid のメイン グループ内にマスクを追加することです。スタイル設定なしで長方形を挿入し、必要に応じてそのサイズを設定します。下の画像では、常に正確に 800px 幅の Grid があります。

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
- [Grid 表示密度](grid-display-density.md)
- [Grid ページング](grid-paging.md)
- [Grid 集計](grid-summaries.md)
- [Hierarchical Grid](hierarchical-grid.md)
- [Tree Grid](tree-grid.md)
- [Grid パターン](../patterns/grid.md)
- [Grid Skeleton](grid-skeleton.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
