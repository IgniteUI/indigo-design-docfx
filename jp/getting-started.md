---
title: はじめに Indigo.Design
_description: デザインからコードまでシームレスに Indigo.Design の概要 
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット, プロトタイプ, ユーザー ビデオ, コード生成
_language: ja
---

# はじめに

Indigo.Design は、ビジュアル デザイン、UX プロトタイプ、コード生成、アプリケーション開発のためのプラットフォームです。UX にフォーカスしてアプリケーションをすばやく公開したいデザインチームと開発チームに最適な製品です。

> [!NOTE]
><b>Indigo.Design platform consists of three main modules - Prototypes, Usability Studies and App Builder. While Prototypes and Usability Studies help you measure and improve the user experience of a product or feature, the App Builder enables users build their own single page application in a web environment and generate Angular code from it.

## 手順

Indigo.Design はデザインから開発までのワークフローをサポートする 3 つの機能を提供します。

<img class="responsive-img" src="images/indigo-design-how-it-works.png" />

1.  Sketch または Adobe XD で `Indigo.Design システム` を使用してデザインを作成
2.  プロトタイプを共有し、`cloud.indigo.design` でユーザーとテストしてコラボレーション
3. Design your app in `Indigo.Design App Builder` using a Sketch or Adobe XD file or directly using the visual application builder
4. Generate Angular code from your application in the Indigo.Design App Builder, using the its `Code Generation` service. 

### 1. Indigo.Design システム

The design system is a library for Sketch and Adobe XD that contains various assets, styles, components, and patterns. Тhe UI components allow you to create intricate user interfaces providing you with the flexibility to use various states and templates. To customize their appearance you may leverage the pre-made palettes, typographies, shadows, icons, and illustrations. And finally, with the provided collection of patterns, such as product details layouts, various forms, and pricing tables among others, you are able to streamline app design assuring the application of best practices in UI and interaction design.

関連トピック:
* [はじめての Sketch アートボードの作成](creating-artboard-sketch.md)
* [はじめての Adobe XD アートボードの作成](creating-artboard-adobexd.md)

### 2. プロトタイプおよびユーザビリティ テスト

デザインのフィードバックは、cloud.indigo.design で Sketch ドキュメントをインポートし、インタラクティブなプロトタイプとして共有します。関係者が任意のデバイスでプロトタイプを表示し、コメントによってフィードバックを送信できます。

関連トピック:

[クラウドでプロトタイプの作成](prototyping/creating-a-prototype.md)

公開したプロトタイプを使用してユーザビリティ テストを作成します。ユーザーがプロトタイプを使用して特定のタスクを実行する方法を表示し、タスクの時間および完了比率などのメトリックを取得できます。

関連トピック:
[ユーザー テストの作成](prototyping/set-up-a-user-test.md)


### 3. Design and generate code from an application in Indigo.Design App Builder

The App Builder module lets you design a single page application using a design file (Sketch or Adobe XD) as a starting point or create it from skratch. The App Builder includes a set of major features, enabling users to use real UI components, global themeing, external data sources.

関連トピック:
[App Builder でアプリケーションを作成](appbuilder.md)


### 4. Generate Code for Angular Apps

Once ready with the design of your application in Indigo.Design App Builder, you can easily generate Angular code from it. The generated code can be directly uploaded to a repository in GitHub or downloaded locally as a file package. The components used in the generated application are powered by[Ignite UI for Angular UI framework](https://jp.infragistics.com/products/ignite-ui-angular)

You can also generate code for Angular apps directly from published prototypes in Indigo.Design cloud. To do this, you will need a share URL for the prototype, and use the Indigo.Design code generator. The code generator is available as an extension for VS code, and it generate code using the [Ignite UI for Angular UI framework](https://jp.infragistics.com/products/ignite-ui-angular).

関連トピック:
[Indigo.Design App Builder のアプリケーションからコードを生成](appbuilder/generate-app.md)
[プロトタイプからコードを生成](codegen/installing-vs-code-extension.md)