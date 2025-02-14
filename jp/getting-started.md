---
title: はじめに Indigo.Design
_description: デザインからコードまでシームレスに Indigo.Design の概要。
_keywords: デザイン システム, デザイン システム UX, UI キット, Ignite UI for Angular, Angular, Angular デザイン システム, Angular 用のデザイン キット, Figma, Figma to Angular, Figma からコードをエクスポート, Figma HTML, Figma to HTML, Figma UI キット
_language: ja
---

# 作業の開始

Indigo.Design は、ビジュアル デザイン、UX プロトタイプ、コード生成、アプリケーション開発のためのプラットフォームです。UX にフォーカスしてアプリケーションをすばやく公開したいデザインチームと開発チームに最適な製品です。

<img class="responsive-img" src="images/platform-workflow.jpg" srcset="images/platform-workflow@2x.jpg 2x" />
<p style="width: 100%; text-align:center;">デザインから開発までのワークフロー</p>

Indigo.Design プラットフォームは、**UI キット**、**プロトタイプ/ユーザビリティ テスト**、および **App Builder** の 3 つの主要モジュールで構成されています。**UI キット (Figma)** は、生産性を高めるツールを使用して、実際の UI コントロールとコンポーネントにマッピングされます。各 **UI キット**は、色、タイポグラフィ、サイズなどを厳密に実装および準拠しています。一方、**プロトタイプとユーザビリティ テスト**は、製品または機能のユーザー エクスペリエンスを測定および改善するのに役立ちます。**App Builder** を使用すると、ユーザーは Web 環境で独自のアプリケーションを構築し、そこから **Angular、React、Blazor、または Web Components** コードを生成できます。

## 手順とは?

Indigo.Design は、デザインから開発までのワークフローをサポートする主要な機能を提供します。

1. Figma で `Indigo.Design システム`を使用してデザインを作成
2. プロトタイプを共有し、`cloud.indigo.design` でユーザーとテストしてコラボレーション
3. Figma ファイルを使用して `App Builder` でアプリをデザインし、プラグインを介してインポートするか、[App Builder](https://www.appbuilder.dev/ja) を直接使用します。
4. `Code Generation` (コード生成) サービスを使用して、[App Builder](https://www.appbuilder.dev/ja) でアプリケーションから Angular、Blazor、React、または Web Components コードを生成します。

## Indigo.Design システム

デザイン システムは Figma のライブラリ セットで、さまざまなアセット、スタイル、コンポーネント、パターンが含まれています。UI コンポーネントを使用すると、複雑なユーザー インターフェイスを作成して、さまざまな状態やテンプレートを柔軟に使用できます。それらの外観をカスタマイズするには、事前に作成されたパレット、タイポグラフィ、シャドウ、アイコン、およびイラストを活用できます。そして最後に、製品の詳細レイアウト、さまざまなフォーム、価格表などの提供されたパターンのコレクションを使用して、アプリのデザインを効率化し、UI とインタラクション デザインのベスト プラクティスの適用を保証できます。

<img class="responsive-img" style="width: 100%; box-shadow: 5px -4px 13px 1px grey" src="images/indigo-design-ui-kit.png" />
<p style="width: 100%; text-align:center;">Figma UI Kit for Material</p>

### Figma UI キット
当社の Figma Indigo.Design UI キットは、Ignite UI for Angular、Blazor、React、Web Components UI ツールセットにマッピングされ、デザイン開発プロセスを完全に再定義します。コンポーネント、パターン、スタイリング、およびカスタマイズ オプションの強力なセットを利用できるようになり、プロトタイプまたは Figma で設計された任意のタイプの画面をインポートして、クリーンなコードに変換できるようになりました。最も素晴らしい点は、すべての静的なデザインが、シングル クリックで実際の UI コンポーネント、ブランディング、およびスタイリングを備えたインタラクティブでレスポンシブなアプリになることです。

<img class="responsive-img" style="width: 100%; box-shadow: 5px -4px 13px 1px grey" src="images/figma-ui-kit.gif" />
<p style="width: 100%; text-align:center;">Figma UI キット</p>

当社の Indigo.Design Figma プラグイン、Indigo.Design UI キット、およびサンプル アプリは、[アセットのダウンロード ページ](https://cloud.indigo.design/resources/figma)からダウンロードできます。

または、以下のダイレクト リンクから:
- [Figma UI キット](https://www.figma.com/@infragistics)
- [Figma 用のプラグイン](https://www.figma.com/community/plugin/1462024243431691008/indigo-design-figma-plugin) 
- [サンプル アプリ](https://download.infragistics.com/products/Infragistics/Indigo.Design/Samples/Infragistics_IndigoDesign_Sample_Apps_Figma.zip)

> [!Note]
> UI キットを無料の Figma ユーザーまたは Pro ユーザーとして使用する場合の違いについては、この[トピック](https://jp.infragistics.com/products/appbuilder/help/ui-kits/figma#figma-スターター-ユーザーと-figma-プロフェッショナル-ユーザーとしてのキットの使用)をご覧ください。

## App Builder を使用してアプリをデザインする

App Builder を使用すると、開始点として 1 ページの Figma デザイン ファイルを生成したり、最初から作成したりできます。実際の UI コンポーネント、グローバル テーマ設定、外部データ ソースとの統合など、さまざまな強力な機能を提供します。

<img class="responsive-img" style="width: 100%; box-shadow: 5px -4px 13px 1px grey" src="images/app-builder-canvas.png" />
<p style="width: 100%; text-align:center;">デザイン キャンバス</p>

関連トピック:
- [App Builder でアプリケーションを構築する - はじめに](https://jp.infragistics.com/products/appbuilder/help/getting-started)
- [App Builder インターフェイスの概要](https://jp.infragistics.com/products/appbuilder/help/interface-overview)
- [Flex レイアウト](https://jp.infragistics.com/products/appbuilder/help/flex-layouts/flex-layouts)
- [コンポーネント](https://jp.infragistics.com/products/appbuilder/help/indigo-design-app-builder-components)
- [インタラクション](https://jp.infragistics.com/products/appbuilder/help/interactions)
- [SPA とナビゲーション](https://jp.infragistics.com/products/appbuilder/help/single-page-apps-and-navigation)
- [アプリの共有とプレビュー](https://jp.infragistics.com/products/appbuilder/help/share-preview-edit-app)

サンプル アプリケーションからアプリを作成します:

<img class="responsive-img" style="width: 100%; box-shadow: 5px -4px 13px 1px grey" src="images/app-builder-sample-apps.png" />
<p style="width: 100%; text-align:center;">サンプル アプリ</p>

## コードの生成

App Builder でアプリケーションのデザインの準備ができたら、そこから Angular、Blazor、React、または Web Components コードを簡単に生成できます。生成されたコードは、GitHub のリポジトリに直接アップロードすることも、ファイル パッケージとしてローカルにダウンロードすることもできます。生成されたアプリケーションで使用されるコンポーネントは、[Ignite UI for Angular UI フレームワーク](https://jp.infragistics.com/products/ignite-ui-angular)を利用しています。

関連トピック:

- [Ignite UI App Builder でアプリケーションからコードを生成する](https://jp.infragistics.com/products/appbuilder/help/generate-app/generate-app-overview)
- [Blazor のコード生成](https://jp.infragistics.com/products/appbuilder/help/blazor-support)
- [Web Components のコード生成](https://jp.infragistics.com/products/appbuilder/help/web-components-support)

Indigo.Design を初めて使用する場合は、最初のフレームを作成する方法を参照してください。
* [Figma ではじめてのアートボードを作成](creating-a-frame-in-figma.md)
