---
title: Grid 列非表示 - グリッド機能
_description: Grid 列非表示はグリッドの列を非表示または表示するための構造です。
_keywords: デザイン システム, デザイン システム UX, UI キット, Figma, Figma to Angular, Figma からコードをエクスポート, Figma to HTML, Figma UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット, Adobe XD, Adobe XD to Angular, Adobe XD からコードをエクスポート, Adobe XD to HTML, Adobe XD UI キット
_language: ja
---

# Grid Column Hiding (グリッド列非表示)

Grid 列非表示は、グリッドから特定の列を非表示にするために使用します。列を再び表示するためのインターフェイスを提供する最も簡単な方法は、Toolbar を追加することです。Toolbar には、デフォルトで グリッド全体の列の表示を構成できるボタン (コンボと組み合わせ) が含まれます。Grid 列非表示は、[Ignite UI for Angular Grid 列非表示機能](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/grid/column_hiding.html)と視覚的に同じものです。

## Grid 列非表示のデモ

<img class="responsive-img" src="../images/grid_column_hiding_demo.png" srcset="../images/grid_column_hiding_demo@2x.png 2x" />

## Toolbar と Header Cell (ツールバーとヘッダー セル)

Grid の列非表示は、グリッド全体の機能を有効にする Column Hiding アクションの Toolbar を追加することで実現できます。ただし、特定の列を非表示としてマークするには、Sketch の各列の Grid Header Cell で `Column Hiding` のオーバーライドを設定し、Hidden に設定する必要があります。Adobe XD では、`Column Hiding` レイヤーは `Component States` パラダイムを使用して、状態を簡単に切り替えることができます。デフォルト値は **Visible** です。この機能は Figma では非推奨になっており、App Builder を使用してデザインを生成する場合は、コード生成後に直接適用する必要があります。

## その他のリソース

関連トピック:

- [Grid](grid.md)
- [Grid ツールバー](grid-toolbar.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
