---
title: Grid - デザイン システム コンポーネント
_description: Grid コンポーネント シンボルは、表形式の大量のデータを表示しインタラクティブに操作できます。
_keywords: デザイン システム, Sketch, Ignite UI for Angular, コンポーネント, UI ライブラリ, ウィジェット
_language: ja
---

## Grid

Grid コンポーネントは大量の複雑なデータをタブ形式し、ユーザーがブラウズおよびインタラクティブに操作して、フィルタリング、並べ替え、ページングなどが可能です。Grid は、[Ignite UI for Angular Grid コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/grid.html)と視覚的に同じものです。

### Grid デモ

![](../images/grid_demo.png)

### シンボルからデタッチ

Grid は、基本的に表形式でデータを表示する列と行のリピーターです。T従って `Generic Grid` をアートボードにドラッグして一番上を右クリックし、コンテキスト メニューの下にある`シンボルからデタッチ` オプションを選択します。新しく表示される `Grid/Generic Grid` グループの下のレイヤー パネルには以下があります。

> [!INFO]
> | レイヤー | 使用 |
> | ----------------------------- | ------------------------------- |
> | 🚫 igx-grid | 禁止されたアイコンで開始する特定のロックされたレイヤー。このレイヤーはコード生成に必要なため、削除または変更しないでください。 |
> | Header | ヘッダーのすべてのセルを取得します。 |
> | Body | ボディのすべてのセルを含みます。 |

デタッチ後、すでに作成したデータの最初の行を複製し、多数のヘッダーを必要なだけ追加してデータのすべてのディメンションを表示できます。

### セル タイプ

Grid は、異なるデータ可視化用に 3 タイプのセルがあります。Header Cell は、各列に 1 つでグリッドの一番上に表示され、特定の列のデータに関する説明をテキストで表示します。Body Cell は、データ レコードを表示するテーブルのビルドその他に使用されます。Summary Cell は、列[集計](grid-summaries.md)がカウント、最大、最小などの各ディメンションに表示される Grid の下のセクションを作成するために使用されます。

![](../images/grid_cell_header.png)
![](../images/grid_cell_body.png)
![](../images/grid_cell_summary.png)

### 項目 (ヘッダー セル)

Grid Header Cell は、項目のオーバーライドで次のレイアウトの組み合わせをサポートします。ヘッダー テキストのみを表示する**アイコンはなく**、ヘッダー テキストとフィルター アイコンを表示するアイコン、ヘッダーテキストを表示するアイコン、フィルターアイコンと並べ替えアイコンがあります。

![](../images/grid_cell_header_no-icon.png)
![](../images/grid_cell_header_icon.png)
![](../images/grid_cell_header_icons.png)

### 状態 (本体セル)

Grid Body Cell は、以下のインタラクティブな状態をサポートします。標準状態の **Rest**、セル選択モードで選択したセルの CellSelected、選択セルのある行の残りのセルの RowSelected。

![](../images/grid_cell_body_rest.png)
![](../images/grid_cell_body_cell-selected.png)
![](../images/grid_cell_body_row-selected.png)

### セル タイプ

Grid Header Cell は、対応が必要な一般的なデータ型のプリセットが 3 つあります。数値のための **Number**、文字列の Text、最初の列の通常テンプレートとして使用される Checkbox、複数行の選択が可能にする最初の列のテンプレート。

![](../images/grid_cell_header_number.png)
![](../images/grid_cell_header_text.png)
![](../images/grid_cell_header_checkbox.png)

Grid Body Cell は、Header Cell などの同じ一般的なデータ型プリセットを提供します。

![](../images/grid_cell_body_number.png)
![](../images/grid_cell_body_text.png)
![](../images/grid_cell_body_checkbox.png)

### スタイル設定

Grid は、さまざま状態の各セル テキスト、アイコン、背景色のスタイル設定や水平および垂直の境界線の非表示など柔軟に変更できます。

![](../images/grid_styling.png)

## 使用方法

Grid の最も重要な点は、Header および Body Cells 内のデータの配置です。テキストは常に左揃えにして変数空スペースを右に残し、数値は常に右揃えにして変数空スペースを左に残します。

| いい例                          | 悪い例                         |
| --------------------------- | ----------------------------- |
| ![](../images/grid_do1.png) | ![](../images/grid_dont1.png) |

## その他のリソース

関連トピック:

- [Grid フィルタリング](grid-filter.md)
- [Grid ページング](grid-paging.md)
- [Grid 列固定](grid-column-pinning.md)
- [Grid 集計](grid-summaries.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

- [Indigo Design **GitHub** (英語)](https://github.com/IgniteUI/design-system-docfx)
