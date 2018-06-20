---
title: コード生成後の手順
_description: コード生成後のアプリケーションへの変更を説明します。
_keywords: デザイン システム, コード生成, Ignite UI for Angular, コンポーネント, UI ライブラリ, ウィジェット, ルーティング
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

Infragistics VS Code 拡張機能を使用してプロジェクトを更新した場合、基本のルートが生成されたモジュールに追加されました。このルートは生成されたコンポーネントをナビゲーションのために準備します。ただし、新しい Angular アプリケーションでナビゲートされたコンテンツへ移動する場所がないため、最初に [RouterOutlet](https://angular.io/api/router/RouterOutlet) をアプリケーションに追加する必要があります。このコードをアプリケーションのメイン ページである **app.component.html** ファイルに追加します。

例:
```html
<div>
    <h1>Hello World!</h1>
    <router-outlet></router-outlet>
</div>
```

メイン ページでの `<router-outlet>` はナビゲートされたコンテンツをホストします。このルートを **AppModule** および各生成されたモジュールにあります。以下のようになります。

```ts
const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent }
];

RouterModule.forChild(routes)
```

[RouterOutlet](https://angular.io/api/router/RouterOutlet) を追加した後、ターミナルで `npm start` を使用してアプリケーションを実行します。ブラウザーで URL にコンポーネント名を追加してサイトに移動します。

![](../images/address-nav.png)

ここが開発の開始ポイントとなります。ここから開発者がアプリケーション要件に合わせるためにルートを変更できます。ボタン クリックなどの操作に基づいてナビゲーションをトリガーするコードを追加します。

## データ

コード生成中にデータは作成されません。ただし、Sketch デザインで指定された場合に HTML のバインディングを生成します。生成された TypeScript はフォームを作成するための Angular [FormBuilder](https://angular.io/api/forms/FormBuilder) を提供します。バインディングに必要なモデルおよびデータを追加できます。

以下は処理の例です。

Sketch で、デザイナーが Nebula UI Category Chart コンポーネントをアートボードに追加します。

![](../images/categorychart-overrides.png)

オーバーライドで DataSource オーバーライドがあります。指定した値は [Ignite UI for Angular](https://jp.infragistics.com/products/ignite-ui-angular) コントロールにバインドするプロパティをジェネレーターに指定します。この場合、Sketch のチャートは `igx-category-chart` に変換し、`dataSource` 入力は `olympicMedalData` にバインドします。

```html
<igx-category-chart [dataSource]="olympicMedalData" ...
```

次の手順は、チャートを描画するために `olympicMedalData` プロパティをデータに生成します。これは生成された TypeScript ファイルで実装できます。以下は例です。

```ts
olympicMedalData: any[];

ngOnInit() {
    this.olympicMedalData = [
        { year: "1996", countryOne: 10, countryTwo: 8, countryThree: 7 },
        { year: "2000", countryOne: 5, countryTwo: 7, countryThree: 6 },
        { year: "2004", countryOne: 9, countryTwo: 5, countryThree: 8 },
        { year: "2008", countryOne: 8, countryTwo: 7, countryThree: 7 },
        { year: "2012", countryOne: 5, countryTwo: 6, countryThree: 7 },
        { year: "2016", countryOne: 6, countryTwo: 6, countryThree: 8 },
    ];
}
```

## 必要なテーマ

Ignite UI for Angular を Angular プロジェクトで使用するために Ignite UI テーマをインポートする必要があります。最も簡単な方法は適切な SCSS をアプリケーションのメイン スタイル ファイルに含み方法です。このトピックの上に指定されたコマンドを使用して Angular アプリケーションを生成した場合、アプリケーションのルートに `styles.scss` ファイルがあります。このファイルに以下のコードを追加します。

```scss
@import "~igniteui-angular/lib/core/styles/themes/index";
@include igx-core();
@include igx-theme($default-palette);
```

また Google のマテリアル アイコン セットを含む必要があります。複数の Ignite UI for Angular コントロールはこのアイコンを使用します。

```scss
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
```

Infragistics VS Code 拡張機能をプロジェクトを更新するために使用した場合は、自動的に追加されます。このインポートが `styles.scss` ファイルに存在しない場合、拡張機能はプロジェクトで `ig.scss` と呼ばれる新しいファイルを含み、プロジェクトはこのファイルおよび `styles.scss` ファイルに参照します。

## スタイル設定

生成された [Ignite UI for Angular](https://jp.infragistics.com/products/ignite-ui-angular) コントロールは Sketch バージョンと同じ外観があります。Sketch で実行された色変更は予期されるように生成されます。開発者は SCSS を含み、すべての生成されたコードにアクセスできます。スタイル変更は生成後も実行できます。コンポーネントを再生成する必要がある場合、開発者の変更はオーバーライドされます。Infragistics VS Code 拡張機能はオーバーライドするファイルについて通知します。

ここでは、以下に注意してください。コード ジェネレーターの現在リリースは要素にマージンまたはパディングを適用しません。要素のスペースおよび配置は Sketch ファイルと一致しない場合があります。この機能は今後拡張予定ですが、現時点では生成した SCSS および HTML でコントロールの配置およびスペースを変更できます。

## その他のリソース

関連トピック:

- [Category Chart](../components/chart-category.md)
  <div class="divider--half"></div>

外部のリンク:
- [Ignite UI for Angular](https://jp.infragistics.com/products/ignite-ui-angular)
- [Angular ルーティングおよびナビゲーション](https://angular.io/guide/router)

コミュニティに参加して新しいアイデアをご提案ください。

- [Indigo Design **GitHub** (英語)](https://github.com/IgniteUI/design-system-docfx)