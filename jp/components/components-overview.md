---
title: コンポーネントの概要 - デザイン システム コンポーネント
_description: Indigo Design システムには 60 以上の UI コンポーネントがあり、多数のプリセット、状態、精巧なスタイル設定機能が組み込まれています。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# コンポーネントの概要

**Indigo.Design システム**は、Ignite UI for Angular コントロールにマップする 60 以上の UI コンポーネントでデザイン ワークフローを強化します。Each component is optimized for responsive web design and development, providing various templating capabilities through Smart Layout and resizing rules set in Sketch. In Adobe XD, we have extended this through the use of Stacks and Repeat Grids, but have also added light/dark modes and various interaction states to choose from when designing interactive experiences. All this streamlines application design and development allowing a huge variety of user interface scenarios to be created with the libraries and subsequently through code generation become available as Ignite UI for Angular code. 

Sketch ライブラリには、関連するすべてのコンポーネントとシンボルを含む `🧩 Components` ページがあります。When selecting a Symbol instance, through the Override section in the right panel, one can change the content inside e.g. enabled/disabled states, light/dark variants, icons, colors, etc. Below is a small part of showing some of the Components and symbols such as the different types of [Buttons](button.md), [Button Group](button-group.md) and form elements like [Checkbox](checkbox.md), [Switch](switch.md), and [Radio Group](radio-group.md).

<img class="responsive-img" src="../images/components-page.png" />

In the Adobe XD library you can find the `🧩 Components` in the middle column. Here, the various states of a component can be switched from the right panel. Also, we have used the `Stack` and `Padding` to align and distribute elements vertically or horizontally and change their position. When you want to swap a nested component with another one, you can simply drag it from the `Libraries` panel and drop it on top of the current one to replace it. You will also notice that some components, such as the Grid, for example, use a `Repeat Grid` to speed configuration up.

<img class="responsive-img" src="../images/components-page-xd.png" />

> [!WARNING]
> When changing an icon glyph with another one by dragging it from the `Libraries` panel in Adobe XD, sometimes its layer name will change from `🔣 Icon` to the symbol name `_Overrides/~`. When this happens you must rename it back to the original layer name before the element got swapped to assure successful code generation.

すべての **Indigo.Design システム** コンポーネントは、ユーザー インターフェイスのテーマ設定やブランディングを行うための複雑なメカニズムを活用できるように、リジッドな[スタイリングの基礎](../style/styling-overview.md)の上に構築されています。

> [!WARNING]
> ライブラリからコンポーネント インスタンスのリンクを解除すると、デザイン システムの後続バージョンからの更新を自動的に適用できなくなり、コンポーネントのコード生成機能に影響する場合があります。コード生成サービスは、特別に指定された `🚫metadata` レイヤーに依存しており、削除してはならないコンポーネントの状態、テンプレート、およびその他のプロパティのメタデータ記述が含まれています。

## その他のリソース

関連トピック:

- [スタイル設定](../style/styling-overview.md)
- [パターン](../patterns/patterns-overview.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
