---
title: Hierarchical Grid - デザイン システム パターン
_description: Hierarchical Grid パターンは、内部にネストされた子グリッドを持つ親レベルのグリッドを表します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch から コードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# Hierarchical Grid (階層グリッド)

ネストされた子を持つ複雑な Grid 階層とその機能を設計する場合は、開始ポイントとして Hierarchical Grid パターンを使用します。アクティブ セルと、親グリッドと子グリッド間の関係の視覚的表現を備えた、親グリッドとネストされた子グリッドを提供します。

<img class="responsive-img" src="../images/hierarchical_grid.png" srcset="../images/hierarchical_grid@2x.png 2x" />

すべてのグリッド機能のリスト:
- 並べ替え
- フィルタリング
- 集計
- ページング
- 編集
- 列移動
- 列サイズ変更
- 列非表示
- 表示密度
- Excel スタイル フィルタリング
- 高度なフィルタリング
- グループ化
- ピン固定
- 行選択
- 行編集
- アクティブ セル
- エクスポート
- ツールバー

すべての Grid 機能は、各子および親 Grid に適用できます。


> [!WARNING]
> In Sketch, after inserting the Hierarchical Grid Pattern, you can trigger `Detach from Symbol` only if you need to alter the number of cells provided, in order to show all the dimensions of your data and insert as many visible records as you want. In case you need to show more of the hierarchy, you may also nest additional grids within the body of the parent one that they belong to. The individual Components and Features, however, must stay intact and not be detached!
>
> In Adobe XD you can add more cells than provided by duplicating columns and rows without ever having to ungroup the pattern itself.

## その他のリソース

関連トピック:

- [Hierarchical-Grid](../components/hierarchical-grid.md)

コミュニティに参加して新しいアイデアをご提案ください。
