---
title: はじめに Indigo.Design
_description: デザインからコードまでシームレスに Indigo.Design の概要 
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット, プロトタイプ, ユーザー ビデオ, コード生成
_language: ja
---

## はじめに

Indigo.Design は、ビジュアル デザイン、UX プロトタイプ、コード生成、アプリケーション開発のためのプラットフォームです。UX にフォーカスしてアプリケーションをすばやく公開したいデザインチームと開発チームに最適な製品です。

### 手順

Indigo.Design はデザインから開発までのワークフローをサポートする 3 つの機能を提供します。

<img class="responsive-img" src="images/indigo-design-how-it-works.png" />

1.  Sketch で `Indigo.Design` システムを使用してデザインを作成
2.  プロトタイプを共有し、`cloud.indigo.design` でユーザーとテストしてコラボレーション
3.  `Indigo.Design` コード ジェネレーター (Ignite UI for Angular) を使用してコードを生成

#### 1.Indigo.Design システム

デザイン システムには 3 つの Sketch ライブラリ ファイルがあります。

- `Indigo-Styling.sketch` は色、タイポグラフィ、アイコン、エレベーション (シャドウ) をデザインに指定します。
- `Indigo-Components.sketch` は Ignite UI for Angular コンポーネントと一致する 50 以上のコンポーネントを含みます。オーバーライドを使用してカスタマイズできます。
- `Indigo-Patterns.sketch` は `Indigo-Components` を使用する全般的な UI パターンを含みます。

関連トピック:

[はじめての Sketch アートボードの作成](creating-an-artboard.md)

#### 2.プロトタイプおよびユーザビリティ テスト

デザインのフィードバックは、cloud.indigo.design で Sketch ドキュメントをインポートし、インタラクティブなプロトタイプとして共有します。関係者が任意のデバイスでプロトタイプを表示し、コメントによってフィードバックを送信できます。

関連トピック:

[プロトタイプの作成](prototyping/creating-a-prototype.md)

公開したプロトタイプを使用してユーザビリティ テストを作成します。ユーザーがプロトタイプを使用して特定のタスクを実行する方法を表示し、タスクの時間および完了比率などのメトリックを取得できます。

関連トピック:

[ユーザビリティ テストの作成](prototyping/setting-up-a-usability-study.md)

#### 3.Angular アプリケーションのコードを生成

公開したプロトタイプから Angular アプリケーションのコードを直接生成するには、 プロトタイプの共有 URL を Indigo.Design コード ジェネレーターで使用します。コード ジェネレーターは VS Code の拡張機能です。この拡張機能は [Ignite UI for Angular UI フレームワーク](https://jp.infragistics.com/products/ignite-ui-angular)を使用してコードを生成します。

関連トピック:

[Visual Studio Code 拡張機能のインストール](codegen/installing-vs-code-extension.md)
