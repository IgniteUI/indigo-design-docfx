---
title: Radial Gauge - デザイン システム コンポーネント
_description: Radial Gauge Component Symbol はデータ可視化で特定のコンテキストの値を表示します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

## Radial Gauge

Radial Gauge コンポーネントを円形のデータ可視化を使用し、カラーコードされた下部の範囲で描かれたコンテキスト内の値を表示します。Radial Gauge は、[Ignite UI for Angular ラジアルゲージ コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/radialgauge.html)と視覚的に同じものです。

ターゲット値が情報の理解や解釈に非常に重要である場合、代わりに [Bullet Graph](bullet-graph.md) を使用します。

### ラジアル ゲージのデモ

<img src="../images/radial_gauge_three_ranges.png" srcset="../images/radial_gauge_three_ranges@2x.png 2x" />

### 針のタイプ

Radial Gauge は、現在の値を示す針の形 (**needle**、trapezoid、triangle) を制御するさまざまなオーバライドをサポートします。

<img src="../images/radial_gauge_three_ranges.png" srcset="../images/radial_gauge_three_ranges@2x.png 2x" />
<img src="../images/radial_gauge_trapezoid.png" srcset="../images/radial_gauge_trapezoid@2x.png 2x" />
<img src="../images/radial_gauge_triangle.png" srcset="../images/radial_gauge_triangle@2x.png 2x" />

### ダイアル タイプ

Radial Gauge は、範囲 (**full**、half、inside、outside) を表示するダイアルを制御するさまざまなオーバーライドをサポートします。

<img src="../images/radial_gauge_three_ranges.png" srcset="../images/radial_gauge_three_ranges@2x.png 2x" />
<img src="../images/radial_gauge_half.png" srcset="../images/radial_gauge_half@2x.png 2x" />
<img src="../images/radial_gauge_inside.png" srcset="../images/radial_gauge_inside@2x.png 2x" />
<img src="../images/radial_gauge_outside.png" srcset="../images/radial_gauge_outside@2x.png 2x" />

### 範囲のサイズ

Radial Gauge は、定義済みの 3 つの範囲 (2 つ、**3 つ**、4 つ) 設定があります。

<img src="../images/radial_gauge_two_ranges.png" srcset="../images/radial_gauge_two_ranges@2x.png 2x" />
<img src="../images/radial_gauge_three_ranges.png" srcset="../images/radial_gauge_three_ranges@2x.png 2x" />
<img src="../images/radial_gauge_four_ranges.png" srcset="../images/radial_gauge_four_ranges@2x.png 2x" />

### スタイル設定

Radial Gauge のスタイル設定は高い柔軟性があり、背景色の制御をオーバライドやブラシ範囲 (Needle Brush、Range Brushes、Tick Brush の範囲、Minor Tick Brush) があります。

<img src="../images/radial_gauge_styling.png" srcset="../images/radial_gauge_styling@2x.png 2x" />

## 使用方法

データ可視化や情報ダッシュボードの作成時では、スクリーンスペースの量に基づいて Linear と Radial Gauges のいずれかを選択します。Gauges は現在の値のみ表示し、過去の値を表示する方法はありません。アプリケーションでそのようなデータが必要な場合は[Category Chart](chart-category.md) を検討してください。
わかりやすく、鮮明なデータ可視化を簡単に作成するために Needle の色は範囲や背景と十分なコントラストのある色にし、読みにくい、解釈しずらい結果となる同じ色のバリアントは使用しないようにします。[Linear Gauge](linear-gauge) とは異なり、Radial Gauge コンポーネントは空スペースが十分あるため必要な情報を維持しながら Radial Gauges のコレクションを並べて配置できます。

| 良い例                                                                                       |悪い例                                                                                        |
| ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| <img src="../images/radial_gauge_do.png" srcset="../images/radial_gauge_do@2x.png 2x" />|<img src="../images/radial_gauge_dont.png" srcset="../images/radial_gauge_dont@2x.png 2x" /> |

## コードの生成

このセクションは、オーバーライドとコード生成にどのような影響があるかについて説明します。

> [!WARNING]
> デザインの Radial Gauge のインスタンスで `Detach from Symbol` をトリガーすると、ほとんどの場合で Radial Gauge のためのコード生成機能が失われる結果となります。

### 最小値

このオーバーライドは、Radial Gauge で最小値を制御します。[データ バインド](../codegen/data-binding.md)と直接的な数値の設定ををサポートします。バインドで bound プロパティを使用する場合、ランタイムの結果が数値になる必要があります。バインドを使用しない場合は値が数値である必要があります。値が正しい書式でない場合、最小値を設定せずに Radial Gauge を生成でき、コントロールのデフォルト値が使用されます。

バインディング

<img src="../images/linear_gauge_bind_min.png"/>

非バインディング

<img src="../images/linear_gauge_nobind_min.png"/>

### 最大値

Radial Gauge で最大値の制御をオーバーライドします。[データ バインド](../codegen/data-binding.md)と直接的な数値の設定ををサポートします。バインドで bound プロパティを使用する場合、ランタイムの結果が数値になる必要があります。バインドを使用しない場合は値が数値である必要があります。指定した値が正しい書式でない場合、最大値を設定せずに Radial Gauge を生成し、コントロールのデフォルト値が使用されます。

バインディング

<img src="../images/linear_gauge_bind_max.png"/>

非バインディング

<img src="../images/linear_gauge_nobind_max.png"/>

### 範囲のサイズ

このオーバーライドは、Radial Gauge で表示する範囲の数を制御します。コード生成で単一範囲を表す `<igx-radial-gauge-range>` 要素を作成します。この範囲要素には `startValue`、`endValue`、`brush` プロパティがあり、範囲の開始と終了位置および色を定義するために使用されます。これらは Minimum Value や Maximum Value オーバライドの設定に関係なくすべて自動生成され、Sketch で表示されていた外観を常に再現できます。

範囲で開始値と終了値を自動生成しないことをお勧めしますが、自動生成した場合は生成した HTML の範囲を手動で更新する必要があります。

### ValueDataProperty

このオーバーライドは、Radial Gauge で表示する針の値の制御します。[データ バインディング](../codegen/data-binding.md) のみサポートするため、値は正しい書式にする必要があります。

<img src="../images/linear_gauge_valueprop.png"/>

バインド プロパティはランタイムの結果が数値である必要があります。

## その他のリソース

関連トピック:

- [Bullet Graph](bullet-graph.md)
- [Category Chart](chart-category.md)
- [Linear Gauge](linear-gauge.md)
- [Data Binding](../codegen/data-binding.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

- [Indigo Design **GitHub** (英語)](https://github.com/IgniteUI/design-system-docfx)
