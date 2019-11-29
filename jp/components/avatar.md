---
title: Avatar - デザイン システム コンポーネント
_description: Avatar コンポーネント シンボルは、個人情報を画像で表します。
_keywords: デザイン システム, Sketch, Ignite UI for Angular, コンポーネント, UI ライブラリ, ウィジェット
_language: ja
---

## Avatar (アバター)

Avatar コンポーネント シンボルは、プロフィール写真、アイコン、イニシャル (文字列) で人をグラフィックで表現するために使用します。Avatar は、 [Ignite UI for Angular Avatar コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/avatar.html)と視覚的に同じものです。

### Avatar デモ

<img class="responsive-img" src="../images/avatar_demo.png" srcset="../images/avatar_demo@2x.png 2x" />

### サイズ

Avatar のサイズは 3 つあります。

- ラージ - プロフィール ページに適しています。
- ミディアム - カスタム メニューや可視化に適しています。
- スモール - コンタクト リストや繰り返しのシナリオに簡単に組み込めます。

<img class="responsive-img" src="../images/avatar_sizes.png" srcset="../images/avatar_sizes@2x.png 2x" />

### タイプ

Avatar は、**画像**、イニシャルの文字列、アイコンなど、さまざまなタイプのコンテンツを使用できます。

<img class="responsive-img" src="../images/avatar_content.png" srcset="../images/avatar_content@2x.png 2x" />

アバターは、**円形**と四角形の異なる 2 つの図形があります。

<img class="responsive-img" src="../images/avatar_type.png" srcset="../images/avatar_type@2x.png 2x" />

### スタイル設定

Avatar は、さまざまなオーバーライドで背景色、イニシャルやアイコン色を制御することにより柔軟にスタイル設定できます。

<img class="responsive-img" src="../images/avatar_styling.png" srcset="../images/avatar_styling@2x.png 2x" />

## 使用方法

Avatar でイニシャルやアイコンを使用する場合に Avatar 背景色とのコントラストの高い色を選択します。同色の同様の色合いや色収差を生じる組み合わせなど、コントラストの低い色は避けるようにします。

| 良い例                                                                         | 悪い例                                                                             |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/avatar_do1.png" srcset="../images/avatar_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/avatar_dont1.png" srcset="../images/avatar_dont1@2x.png 2x" /> |

## コードの生成

Avatar の色またはフォントを指定した場合、Avatar HTML 要素は div でラップされます。これはネスト コンポーネント (他のコンポーネント内のコンポーネント) をスタイル設定する際にブラウザーによって要求されます。

> [!WARNING]
> デザインの Avatar のインスタンスで `Detach from Symbol` をトリガーすると、ほとんどの場合で Avatar のためのコード生成機能が失われます。

### Event プロパティ

このプロパティはコンポーネント TypeScript のメソッドを作成するために使用し、HTML に Angular クリック シグネチャーを追加します。イベントが波括弧構文 ({onEventName}) を使用して指定する必要があります。

### データ プロパティ

| Avatar タイプ       | `🕹️DataProperty`                                                                                                                                                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 写真アバター        | このプロパティは、画像ソースに[データ バインディング](../codegen/data-binding.md)するために使用できます。コード生成で提供されるモデル オブジェクト名で指定されたデータ オブジェクトでプロパティ名になります。                                                         |
| アイコン アバター   | このプロパティは無視されます。                                                                                                                                                                                                  |
| イニシャル アバター | このプロパティは初期プロパティの[バインド](../codegen/data-binding.md)に使用します。コード生成で提供されるモデル オブジェクト名で指定されたデータ オブジェクトでプロパティ名になります。Avatar イニシャルは 2 文字のみ描画します。これは Ignite UI の制限です。 |

## その他のリソース

関連トピック:

- [Avatar + Badge](../patterns/avatar-badge.md)
- [Cards](cards.md)
- [File Upload](../patterns/file-upload.md)
- [User Profile](../patterns/user-profile.md)
- [データ バインディング](../codegen/data-binding.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。


