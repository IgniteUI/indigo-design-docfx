---
title: Avatar - デザイン システム コンポーネント
_description: Avatar コンポーネント シンボルは、個人情報を画像で表します。
_keywords: デザイン システム, Sketch, Ignite UI for Angular, コンポーネント, UI ライブラリ, ウィジェット
_language: ja
---

## Avatar

Avatar コンポーネント シンボルは、プロフィール写真、アイコン、イニシャル (文字列) で人をグラフィックで表現するために使用します。Avatar は、 [Ignite UI for Angular Avatar コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/avatar.html)と視覚的に同じものです。

### Avatar デモ

![](../images/avatar_demo.png)

### サイズ

Avatar のサイズは 3 つあります。

- ラージ - プロフィール ページに適しています。
- ミディアム - カスタム メニューや可視化に適しています。
- スモール - コンタクト リストや繰り返しのシナリオに簡単に組み込めます。

![](../images/avatar_sizes.png)

### タイプ

Avatar は、**画像**、イニシャルの文字列、アイコンなど、さまざまなタイプのコンテンツを使用できます。

![](../images/avatar_content.png)

アバターは、**円形**と四角形の異なる 2 つの図形があります。

![](../images/avatar_type.png)

### スタイル設定

Avatar は、さまざまなオーバーライドで背景色、イニシャルやアイコン色を制御することにより柔軟にスタイル設定できます。

![](../images/avatar_styling.png)

## 使用方法

Avatar でイニシャルやアイコンを使用する場合に Avatar 背景色とのコントラストの高い色を選択します。同色の同様の色合いや色収差を生じる組み合わせなど、コントラストの低い色は避けるようにします。

| いい例                            | 悪い例                           |
| ----------------------------- | ------------------------------- |
| ![](../images/avatar_do1.png) | ![](../images/avatar_dont1.png) |

## コードの生成

Avatar の色を指定した場合、Avatar HTML 要素は div でラップされます。これはネスト コンポーネント (他のコンポーネント内のコンポーネント) をスタイル設定する際にブラウザーによって要求されます。

> [!WARNING]
> デザインの Avatar のインスタンスで`シンボルからデタッチ`をトリガーすると、ほとんどの場合で Avatar のためのコード生成機能が失われます。

### データ プロパティ バインディング

提供された場合、`🕹️DataProperty` バインドはネストあり/なしが可能です。

プロパティがネストされたプロパティの場合、ネストされたプロパティ チェーンを含みますがモデル オブジェクト名は含みません。例:

#### 例: ネストなし

```PseudoCode
Customer {
  imageName: String;
}

DataProperty: {imageName}
```

#### 例: ネストあり

```PseudoCode
Profile {
  imageName: String;
}

Customer {
  profile: Profile;
}

DataProperty: {profile.imageName}
```

### Event プロパティ

`🕹️Event` プロパティはコンポーネント TypeScript のメソッドを作成するために使用されて HTML に Angular クリック シグネチャーを追加します。

| --------------- | ---------------- |
| 写真アバター  | `🕹️DataProperty` – このプロパティは、画像ソースにデータ バインドするために使用できます。提供された場合、生成要求で提供されるモデル オブジェクト名で指定されたデータ オブジェクトでプロパティ名になります。 |
| アイコン アバター     | `🕹️DataProperty` – このプロパティは無視されます。 |
| イニシャル アバター | `🕹️DataProperty` – このプロパティは初期プロパティのバインドに使用します。 |

## その他のリソース

関連トピック:

- [Avatar + Badge](avatar+badge.md)
- [Cards](cards.md)
- [File Upload](fileUpload.md)
- [User Profile](userProfile.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

- [Indigo Design **GitHub** (英語)](https://github.com/IgniteUI/design-system-docfx)
