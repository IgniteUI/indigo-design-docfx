---
title: Grid 列移動 - グリッド機能
_description: Grid 列移動は、グリッドの列を再配置するための構造です。
_keywords: デザイン システム, デザイン システム UX, UI キット, Figma, Figma to Angular, Figma からコードをエクスポート, Figma to HTML, Figma UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット, Adobe XD, Adobe XD to Angular, Adobe XD からコードをエクスポート, Adobe XD to HTML, Adobe XD UI キット
_language: ja
---

# Grid Column Moving (グリッド列移動)

Grid 列移動は、グリッドの列が移動可能であり、Header Cell をドラッグして目的の場所にドロップすることで再配置できることを示すために使用します。Grid 列移動は、[Ignite UI for Angular Grid 列移動機能](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/grid/column_moving.html)と視覚的に同じものです。

## Grid 列移動のデモ

<img class="responsive-img" src="../images/grid_column_moving_demo.png" srcset="../images/grid_column_moving_demo@2x.png 2x" />

## Header Cell (ヘッダー セル)

列が移動可能であることを示するには、デフォルト値を **Not Movable** から **Movable** に変更すると、Sketch の列の Grid Header Cell の `Column Moving` のオーバーライドを設定します。In Figma, you can achieve this by changing the property of the `Column Moving` component inside the Grid Header Cell layer, from **Not Movable** to **Movable**.Adobe XD では、`Column Moving` レイヤーは `Component States` パラダイムを使用して、状態を簡単に切り替えることができます。コード生成には、これにより列を移動可能としてマークします。

## Column Moving Feature (列移動機能)

Grid の `Features` の下には、ドラッグされた列に表示されるゴースト Header Cell を表す `Column Moving` シンボル / コンポーネントがあります。数値列とテキスト列のプリセットが付属しています。このシンボル / コンポーネントを追加すると、デザインに視覚的な効果のみでよりリアルになります。列移動機能を切り替えたい場合は、Header Cell を構成します。

## その他のリソース

関連トピック:

- [Grid](grid.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
