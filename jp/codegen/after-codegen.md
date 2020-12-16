---
title: コード生成後の手順
_description: コード生成後のアプリケーションへの変更を説明します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# コード生成後の手順

## 概要

このトピックは、コードが Sketch デザインから生成され、Infragistics VS Code 拡張機能でプロジェクトに追加された後に実行するタスクを説明します。このトピックの前提条件は新しい Angular プロジェクトです。新しいプロジェクトに存在するファイル名を使用するために新しいプロジェクトを使用します。このトピックは、複雑なプロジェクトでの作業に役立つ情報を提供します。新しい Angular プロジェクトの作成方法:

```
ng new my-app --style=scss
```

> 注: コード ジェネレーターは [SCSS](https://sass-lang.com/) を生成するため、このコマンドは Angular でデフォルトの .css ファイルの代わりに .scss ファイルを使用するために設定します。

## ルーティング

Infragistics VS Code 拡張機能を使用してプロジェクトを更新した場合、基本のルートが生成されたモジュールに追加されました。このルートは生成されたコンポーネントをナビゲーション用に準備します。ただし、新しい Angular アプリケーションでナビゲートされたコンテンツへ移動する場所がないため、最初に [RouterOutlet](https://angular.io/api/router/RouterOutlet) をアプリケーションに追加する必要があります。このコードをアプリケーションのメイン ページである **app.component.html** ファイルに追加します。

例:

```html
<div>
    <h1>Hello World!</h1>
    <router-outlet></router-outlet>
</div>
```

メイン ページでの `<router-outlet>` はナビゲートされたコンテンツをホストします。このルートを **AppModule** および各生成されたモジュールにて、例えば以下の様に設定します。

```typescript
const routes: Routes = [{ path: "dashboard", component: DashboardComponent }];

RouterModule.forChild(routes);
```

[RouterOutlet](https://angular.io/api/router/RouterOutlet) を追加した後、ターミナルで `npm start` を使用してアプリケーションを実行します。ブラウザーで URL にコンポーネント名を追加してサイトに移動します。

<img class="responsive-img" src="../images/address-nav.png" />

ここが開発の開始ポイントとなります。ここから開発者がアプリケーション要件に合わせるためにルートを変更できます。ボタン クリックなどの操作に基づいてナビゲーションをトリガーするコードを追加します。

## 必要なテーマ

Ignite UI for Angular を Angular プロジェクトで使用するために Ignite UI テーマをインポートする必要があります。最も簡単な方法は適切な SCSS をアプリケーションのメイン スタイル ファイルに含み方法です。このトピックの上に指定されたコマンドを使用して Angular アプリケーションを生成した場合、アプリケーションのルートに `styles.scss` ファイルがあります。このファイルに以下のコードを追加します。

```scss
@import "~igniteui-angular/lib/core/styles/themes/index";
@include igx-core();
@include igx-theme($default-palette);
```

また Google のマテリアル アイコン セットを含む必要があります。複数の Ignite UI for Angular コントロールはこのアイコンを使用します。

```scss
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
```

すべての Sketch コンポーネントは [Titillium Web](https://fonts.google.com/specimen/Titillium+Web) フォントを使用するため、このフォントを含む必要があります。

```scss
@import url("https://fonts.googleapis.com/css?family=Titillium+Web");
```

Infragistics VS Code 拡張機能をプロジェクトを更新するために使用した場合は、自動的に追加されます。このインポートが `styles.scss` ファイルに存在しない場合、拡張機能はプロジェクトで `ig.scss` と呼ばれる新しいファイルを含み、プロジェクトはこのファイルおよび `styles.scss` ファイルに参照します。

## その他のリソース

関連トピック:

- [Category Chart](../components/chart-category.md)
- [VS Code の Indigo.Design コード ジェネレーター](vscode-plugin.md)
  <div class="divider--half"></div>

外部のリンク:

- [Ignite UI for Angular](https://jp.infragistics.com/products/ignite-ui-angular)
- [Angular ルーティングおよびナビゲーション](https://angular.io/guide/router)

コミュニティに参加して新しいアイデアをご提案ください。


