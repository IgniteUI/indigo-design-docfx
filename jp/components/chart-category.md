---
title: Category Chart - デザイン システム コンポーネント
_description: Category Chart コンポーネント シンボルは、複雑なデータをシンプルに表示します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# Category Chart (カテゴリ チャート)

Category Chart コンポーネント は、密度をラップして複雑なデータをシンプルに表示します。Category Charts は、関連データ セットできれいなダッシュボードを作成するために組み合わせて使用します。Category Chart は、[Ignite UI for Angular Category Chart コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/category-chart.html)と視覚的に同じものです。

## Category Chart デモ

<img class="responsive-img" src="../images/chart_category_demo.png" srcset="../images/chart_category_demo@2x.png 2x" />

## ツールチップ

Category Chart は、ツールチップ表示のオーバーライドが可能です。ツールチップ非表示にする **Tooltip Off**、シリーズの一番上に表示する Tooltip On。

<img class="responsive-img" src="../images/chart_category_tooltip-off.png" srcset="../images/chart_category_tooltip-off@2x.png 2x" />
<img class="responsive-img" src="../images/chart_category_tooltip-on.png" srcset="../images/chart_category_tooltip-on@2x.png 2x" />

## タイプ

Category Chart は以下のようなさまざまなオーバーライドで Chart タイプを選択できる柔軟性があります。

|             |                                                                                                                |
| ----------- | -------------------------------------------------------------------------------------------------------------- |
| エリア        |<img class="responsive-img" src="../images/chart_category_area.png" srcset="../images/chart_category_area@2x.png 2x" />               |
| 列      |<img class="responsive-img" src="../images/chart_category_column.png" srcset="../images/chart_category_column@2x.png 2x" />           |
| 折れ線        |<img class="responsive-img" src="../images/chart_category_line.png" srcset="../images/chart_category_line@2x.png 2x" />               |
| ポイント       |<img class="responsive-img" src="../images/chart_category_point.png" srcset="../images/chart_category_point@2x.png 2x" />             |
| スプライン      |<img class="responsive-img" src="../images/chart_category_spline.png" srcset="../images/chart_category_spline@2x.png 2x" />           |
| スプライン エリア チャート|<img class="responsive-img" src="../images/chart_category_spline-area.png" srcset="../images/chart_category_spline-area@2x.png 2x" /> |
| ステップ エリア   |<img class="responsive-img" src="../images/chart_category_step-area.png" srcset="../images/chart_category_step-area@2x.png 2x" />     |
| ステップ折れ線   |<img class="responsive-img" src="../images/chart_category_step-line.png" srcset="../images/chart_category_step-line@2x.png 2x" />     |
| ウォーターフォール   |<img class="responsive-img" src="../images/chart_category_waterfall.png" srcset="../images/chart_category_waterfall@2x.png 2x" />     |

## シリーズ量

このオーバーライドは、描画するシリーズを 1 つ ～ **3** つ選択します。

<img class="responsive-img" src="../images/chart_category_one_series.png" srcset="../images/chart_category_one_series@2x.png 2x" />
<img class="responsive-img" src="../images/chart_category_two_series.png" srcset="../images/chart_category_two_series@2x.png 2x" />
<img class="responsive-img" src="../images/chart_category_three_series.png" srcset="../images/chart_category_three_series@2x.png 2x" />

## 使用方法

同じチャートで異なるシリーズ タイプを組み合わせる必要がある場合でも複数の Category Charts を互いに積み重ねないようにしてください。データ可視化の簡素化したステンシルのように Category Chart コンポーネント を使用します。

| 良い例                                                                                             |悪い例                                                                                              |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/chart_category_do1.png" srcset="../images/chart_category_do1@2x.png 2x" />|<img class="responsive-img" src="../images/chart_category_dont1.png" srcset="../images/chart_category_dont1@2x.png 2x" /> |

## コードの生成

このセクションは、オーバーライドとコード生成にどのような影響があるかについて説明します。

> [!WARNING]
> デザインの Category Chart のインスタンスで `Detach from Symbol` をトリガーすると、ほとんどの場合で Category Chart のためのコード生成機能が失われる結果となります。

### データ ソース プロパティ

`DataSource` 値はチャートの dataSource プロパティへの[バインディング](../codegen/data-binding.md)を設定するために使用されます。`DataSource` およびデータ ソースで有効なデータがない場合、Category Chart をランタイムに描画できません。

### チャート ディメンション

Category Chart は Sketch 内で取得した固定ディメンションで生成します。ディメンションは HTMl 内にフィットするように変更できます。幅と高さの有効な値は、ピクセル値とパーセント値です。例:

width=”300px” or width=”100%”

### チャート タイプ

チャートで指定したシリーズ タイプを使用するよう構成されます。Type が None の場合、チャートは描画しません。

### チャートのタイトル

Title プロパティには、テキスト、[テキストのバインディング](../codegen/data-binding.md)、またはその両方を含むことができます。例:

- 設定
- {settingsLabel}
- 重要な {labelText}

Title はオプションです。

## その他のリソース

関連トピック:

- [データ バインディング](../codegen/data-binding.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。


