---
title: コンポーネントの概要 - デザイン システム コンポーネント
_description: Indigo Design システムには 60 以上の UI コンポーネントがあり、多数のプリセット、状態、精巧なスタイル設定機能が組み込まれています。
_keywords: デザイン システム, デザイン システム UX, UI キット, Figma, Figma to Angular, Figma からコードをエクスポート, Figma to HTML, Figma UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット, Adobe XD, Adobe XD to Angular, Adobe XD からコードをエクスポート, Adobe XD to HTML, Adobe XD UI キット
_language: ja
---

# コンポーネントの概要

**Indigo.Design システム**は、Ignite UI for Angular コントロールにマップする 60 以上の UI コンポーネントでデザイン ワークフローを強化します。ほとんどのコンポーネントはレスポンシブ Web デザインと開発用に最適化されており、Figma の Auto Layout (Sketch では Smart Layout) およびサイズ変更ルールを通じてさまざまなテンプレート機能を提供します。Adobe XD では、Stacks と Repeat Grids を使用してこれを拡張しましたが、インタラクティブ エクスペリエンスをデザインするときに選択できるライト/ダーク モードとさまざまな操作状態も追加しました。これらすべてがアプリケーションのデザインと開発を合理化し、ライブラリを使用して多種多様なユーザー インターフェイス シナリオを作成し、コード生成を通じて、Ignite UI for Angular コードとして利用できるようにします。

> [!WARNING]
> **Indigo.Design システム** ライブラリのコンポーネントを適切に使用し、潜在的な問題を回避するには、次の項目をアートボードやフレームに配置しないことをお勧めします:
> - `_Overrides` として指定されたシンボルとコンポーネント (**Sketch** および **Adobe XD**)
> - `基本コンポーネント` (**Figma**)
>
> これらの要素にはコンポーネント状態がなく、完全なコンポーネントとは見なされません。
## Figma

Figma ライブラリ内には `🧩 Components` という名前のページがあり、その下にキットに含まれるすべてのコンポーネントのリストがあります。各コンポーネントにはページがあり、そこに関連するすべての基本コンポーネントが配置されます。デザイン ファイルでライブラリを使用できるようにすると、サイドバーからそのアセットに簡単にアクセスし、左側のサイドバーの [Assets] パネルからコンポーネントをキャンバスにドラッグできるようになります。ワークスペースにコンポーネントを配置して選択すると、右側のサイドバーにそのコンポーネントで使用可能なプロパティが表示され、そこからインスタンスを直接交換することもできます。以下は、さまざまなタイプの [Button](button.md)、[Button Group](button-group.md)、および [Checkbox](checkbox.md)、[Switch](switch.md)、[Radio Group](radio-group.md) などのフォーム要素などのコンポーネントを示しています。

<img class="responsive-img" src="../images/components-page-figma.png" srcset="../images/components-page-figma@2x.png 2x" />

## Sketch

Sketch ライブラリには、関連するすべてのコンポーネントとシンボルを含む `🧩 Components` ページがあります。右側のパネルの [Override] セクションから [Symbol] インスタンスを選択すると、内部のコンテンツを変更できます。たとえば、有効/無効の状態、アイコン、カラーなどです。以下は、さまざまなタイプの [Button](button.md)、[Button Group](button-group.md)、および [Checkbox](checkbox.md)、[Switch](switch.md)、[Radio Group](radio-group.md) などのフォーム要素などのコンポーネントとシンボルの一部を示しています。

<img class="responsive-img" src="../images/components-page-sketch.png" srcset="../images/components-page-sketch@2x.png 2x" />

## Adobe XD

Adobe XD ライブラリでは、中央の列に `🧩 Components` があります。ここでは、コンポーネントのさまざまな状態を右側のパネルから切り替えることができます。また、`Stack` と `Padding` を使用して、要素を垂直または水平に配置および分散し、それらの位置を変更しました。ネストされたコンポーネントを別のコンポーネントと交換する場合は、`Libraries` パネルからドラッグして、現在のコンポーネントの上にドロップするだけで置き換えることができます。また、Grid などの一部のコンポーネントは、構成を高速化するために `Repeat Grid` を使用しています。以下は、さまざまなタイプの [Button](button.md)、[Button Group](button-group.md)、および [Checkbox](checkbox.md)、[Switch](switch.md)、[Radio Group](radio-group.md) などのフォーム要素などのコンポーネントを示しています。

<img class="responsive-img" src="../images/components-page-xd.png" srcset="../images/components-page-xd@2x.png 2x" />

> [!WARNING]
> Sketch ライブラリからコンポーネントをデタッチすると、デザイン システムの後続のバージョンからの更新を自動的に適用できなくなり、コンポーネントのコード生成機能に影響を与える可能性があります。コード生成サービスは、コンポーネントの状態、テンプレート、およびその他のプロパティの `🚫 metadata` 記述を含む、特別に指定されたメタデータ レイヤーに依存します。Figma ライブラリでは、バージョンを含む `🚫 componentVersion` という名前のすべてのコンポーネントに追加のレイヤーが 1 つ配置されており、コード生成を成功させるのに役立ちます。
>
> コンポーネントまたはパターンを Adobe XD ライブラリからグループ解除すると、ネストされたすべてのコンポーネントがグループに変換され、その構造を正しくトレースできないため、コンポーネントのコード生成サービスが中断されるため、さらに悪い影響があります。コンポーネントのグループ化を解除せずに、Adobe XD で状態、レイアウト、およびスタイルの調整を行うことができるため、コンポーネント全体をアートボードに保持することをお勧めします。

すべての **Indigo.Design システム** コンポーネントは、ユーザー インターフェイスのテーマ設定やブランディングを行うための複雑なメカニズムを活用できるように、リジッドな[スタイリングの基礎](../style/styling-overview.md)の上に構築されています。

> [!WARNING]
> Adobe XD の `Libraries` パネルからアイコン グリフをドラッグして別のアイコン グリフに変更すると、レイヤー名が `🔣 Icon` からシンボル名 `_Overrides/~` に変わることがあります。これが発生した場合、コード生成を確実に成功させるために、要素を交換する前に名前を元のレイヤー名に戻す必要があります。

## その他のリソース

関連トピック:

- [スタイル設定](../style/styling-overview.md)
- [パターン](../patterns/patterns-overview.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
