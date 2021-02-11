---
title: レイアウトの生成 
_description: Sketch のレイアウトやサイズ変更が生成されるコードと動作に変換される方法について説明します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# レイアウトの生成

## コード生成のためのアートボード (Artboard) またはグループ (Group) を選択

選択した各 Artboard または Group は単一の Angular コンポーネントを作成します。作成された各コンポーネントは [Angular Reactive Forms](https://angular.io/guide/reactive-forms) を使用します。
Artboard または Group のみをコード生成のために選択できます。通常、開発者は Artboard から Group を 1 つ以上選択してコンポーネントを生成します。
Artboard 全体がコード生成に選択されない理由は、通常 Sketch デザインがフォームの周りにクロームがあり、同じクロームが各 Artboard に存在するためです。アプリケーション クロームはアプリケーションの構築で一度のみ作成されます。クロームにナビゲーションなどの必要なアプリケーション サービスを提供する複雑な操作があります。

以下の 2 つの画像はコード生成の選択例です。

以下の画像で `peopleEdit` の Sketch Group がコード生成のために選択されます。その他の要素はアプリケーションおよびコンポーネントをコンテキストに表示するクロームです。

<img class="responsive-img" src="../images/layout_codegen_people1.png" />

以下の画像で `peopleList` および `peopleDetails` の Sketch Group を選択し、ナビゲーションのクローム要素を無視します。

<img class="responsive-img" src="../images/layout_codegen_people2.png" />

### コンポーネントのサイズ

> [!Note]
> Sketch の Artboard に固定された高さまたは幅の設定はありません。このコンポーネントのサイズ セクションはコード生成のために選択されたグループを持つコンポーネントにのみ適用します。

グループがコンポーネントのコード生成のために選択され、グループ内のコンポーネントに固定高さまたは固定幅が設定される場合、その固定サイズ値は生成されたコンポーネントの CSS に追加されます。
通常 Angular コンポーネントがランタイムに親によってサイズ設定またはサイズ変更されます。ただし、コンポーネントが Angular アプリケーションで固定サイズ要素になるデザイン シナリオがあります。コード生成はこのデザイン シナリオをサポートします。

### コンポーネントのコード生成からブラウザー描画までの手順

開発者はブラウザーで描画する前に生成されたコンポーネントで以下の編集を実行する必要があります。

- HTML に formControlName 要素がある場合、`<form>` タグの下にある formGroup コメントをコメントインします: `<!-- [formGroup]="customerForm" -->`
- TypeScript で `<!-- // TODO – uncomment-->` を検索して、ある場合に FormGroup コメントをコメントインします。
- TypeScript で `ngOnInit` メソッドを検索してフォーム コードをコメントインします。

## Sketch 要素の名前

コード生成を実行するには、Sketch Layer List で各要素に名前が必要です。名前がない要素はスキップされ、処理されません。また、スキップされた要素の子もスキップされます。

## レイアウト

レイアウトは絶対位置と絶対サイズで描画されます。各コンポーネントには、ページでの描画方法を決定する独自の位置 (左、上) とサイズ (幅、高さ) があります。


## Dialog、Toast、Snackbar

Dialog、Toast、Snackbar の共通点は、TypeScript のフォームを使用して UI に動的に表示される点です。
コードを使用しない限り通常 UI に表示されないため、デザイナーが表示ステートで Artboard を表示しない限り Sketch には表示されません。
Artboard を複数のステートで表示するためのデザイナーの要件とコンポーネントを一度のみコード生成する開発者の要件の相違を解決するには、以下のガイダンスを参考にしてください。
必要な Dialog、Toast、Snackbar を描画に追加し、そのほかの要素を設定してから以下のように非表示にします。このフォームは、開発者がコード生成のために選択するフォームです。
オブジェクト パネルの要素の非表示はコード生成に影響がありません。コード生成は非表示かどうかに関係なくすべての要素をここに生成します。
Dialog、Toast、Snackbar 要素をコンポーネント HTML の下に配置し、ビューに入るのが動的なランタイム配置であるためその他の要素と混同されません。

<img class="responsive-img" src="../images/layout_codegen17.png" />

以下の画像はデザイナー状態の描画の例です。Dialog がランタイムで配置するグレー オーバーレイをシミュレートするための別の色要素があるため、この描画はコード生成に使用しないでください。

<img class="responsive-img" src="../images/layout_codegen18.png" />

## 制限

このリリースの Code Generation では、ベクター、マーク、ペンシル、複雑な図形などのネイティブ Sketch オブジェクトは生成されません。Sketch 5.1 の新しい Text Styles 機能に含まれます。これらの要素は生成されません。Indigo.Design プラグインで適用されたスタイルのみがサポートされます。
特定のコンポーネントに適用された他のすべてのカスタム スタイルは無視されます。
デザイナーは Indigo.Design ライブラリの要素のみを使用してください。Sketch Image はサポートされます。画像は、Sketch で固定した高さと幅で描画されます。

## その他のリソース

外部のリンク:

- [Ignite UI for Angular](https://jp.infragistics.com/products/ignite-ui-angular)

コミュニティに参加して新しいアイデアをご提案ください。


