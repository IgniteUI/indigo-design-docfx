---
title: Hierarchical Grid - デザイン システム パターン
_description: Hierarchical Grid パターンは、内部にネストされた子グリッドを持つ親レベルのグリッドを表します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# Hierarchical Grid (階層グリッド)

ネストされた子を持つ複雑な Grid 階層とその機能を設計する場合は、開始ポイントとして Hierarchical Grid パターンを使用します。アクティブ セルと、親グリッドと子グリッド間の関係の視覚的表現を備えた、親グリッドとネストされた子グリッドを提供します。

<img class="responsive-img" src="../images/hierarchical_grid.png" srcset="../images/hierarchical_grid@2x.png 2x" />

すべてのグリッド機能のリスト:
- [Grid ツールバー](../components/grid-toolbar.md)
- [Grid エクスポート](../components/grid-export.md)
- [Grid グループ化](../components/grid-grouping.md)
- [Grid 列ピン固定](../components/grid-column-pinning.md)
- [Grid 列非表示](../components/grid-column-hiding.md)
- [Grid 列移動機能](../components/grid-column-moving.md)
- [Grid 列サイズ変更](../components/grid-column-resizing.md)
- [Grid 並べ替え](../components/grid-sorting.md)
- [Grid 行フィルター](../components/grid-row-filter.md)
- [Grid Excel スタイル フィルタリング](../components/grid-excel-style-filter.md)
- [Grid 高度なフィルタリング](../components/grid-advanced-filter.md)
- [Grid 行選択](../components/grid-row-selection.md)
- [Grid 編集](../components/grid-editing.md)
- [Grid サイズ](../components/grid-sizes.md)
- [Grid ページング](../components/grid-paging.md)
- [Grid 集計](../components/grid-summaries.md)
- [Grid スケルトン](../components/grid-skeleton.md)

すべての Grid 機能は、各子および親 Grid に適用できます。


> [!WARNING]
> Sketch では、Hierarchical Grid パターンを挿入した後、データのすべてのディメンションを表示し、必要な数の表示可能なレコードを挿入するために、提供されたセルの数を変更する必要がある場合にのみ、`Detach from Symbol` をトリガーできます 。より多くの階層を表示する必要がある場合は、追加のグリッドを、それらが属する親グリッドの本体内にネストすることもできます。ただし、各コンポーネントおよび機能をデタッチしないでください。
>
> Adobe XD では、パターン自体のグループ化を解除することなく、列と行を複製することで提供されるよりも多くのセルを追加できます。

## その他のリソース

関連トピック:

- [Grid](../components/grid.md)
- [Hierarchical Grid](../components/hierarchical-grid.md)

コミュニティに参加して新しいアイデアをご提案ください。
