---
title: Grid 列サイズ変更 - グリッド機能
_description: Grid 列サイズ変更は、グリッドの列の幅を調整する構造です。
_keywords: デザイン システム, デザイン システム UX, UI キット, Figma, Figma to Angular, Figma からコードをエクスポート, Figma to HTML, Figma UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット, Adobe XD, Adobe XD to Angular, Adobe XD からコードをエクスポート, Adobe XD to HTML, Adobe XD UI キット
_language: ja
---

# Grid Column Resizing (グリッド列サイズ変更)

Grid 列サイズ変更は、グリッド列のサイズ変更が可能なできることを示します。ユーザーがハンドルとしてヘッダーの右端をグラブすると、列の幅を調整できます。Grid 列サイズ変更は、[Ignite UI for Angular Grid 列サイズ変更機能](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/grid/column_resizing.html)と視覚的に同じものです。

## Grid 列サイズ変更のデモ

<img class="responsive-img" src="../images/grid_column_resizing_demo.png" srcset="../images/grid_column_resizing_demo@2x.png 2x" />

## Header Cell (ヘッダー セル)

列がサイズが変更可能であることを示するには、デフォルト値を **Not Resizable** から **Resizable** に変更すると、Sketch で列の Grid Header Cell の `Column Resizing` のオーバーライドを設定します。Adobe XD では、`Column Resizing` レイヤーは `Component States` パラダイムを使用して、状態を簡単に切り替えることができます。コード生成には、これにより列をサイズ変更可能としてマークします。この機能は Figma では非推奨になっており、App Builder を使用してデザインを生成する場合は、コード生成後に直接適用する必要があります。

## Column Resizing Indicator Feature (列サイズ変更インジケーター機能)

グリッドの `Features` の下には、サイズ変更が発生する列全体の強調表示境界線を表す `Column Resizing Indicator` シンボル / コンポーネントがあります。このシンボル / コンポーネントを追加すると、デザインに視覚的な効果があるのみで、よりリアルになります。Column Resizing 機能を切り替えたい場合は、Header Cell を構成します。

## その他のリソース

関連トピック:

- [Grid](grid.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
