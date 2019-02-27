---
title: Carousel - デザイン システム コンポーネント
_description: Carousel コンポーネント シンボルは画像コレクションの順次的なブラウジングが可能です。
_keywords: デザイン システム, Sketch, Ignite UI for Angular, コンポーネント, UI ライブラリ, ウィジェット
_language: ja
---

## Carousel

Carousel コンポーネント シンボルは、横矢印キーを使用して画像コレクションの前や次の画像に順次的にナビゲーションできます。Carousel は、[Ignite UI for Angular Carousel コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/carousel.html)と視覚的に同じものです。

### Carousel デモ

<img class="responsive-img" src="../images/carousel_demo.png" srcset="../images/carousel_demo@2x.png 2x" />

### スタイル設定

Carousel は、さまざまなオーバーライドでナビゲーションボタンの背景、アイコンの色、インジケーターの色、境界線の色、現在アクティブなスライドのスライド画像の制御などスタイル設定に柔軟性があります。一度に 1 インジケーターのみアクティブにできます。

<img class="responsive-img" src="../images/carousel_styling.png" srcset="../images/carousel_styling@2x.png 2x" />

## 使用方法

Carousel の戻るおよび次へ移動するためのボタンは、常に画像スライドの一番上に表示されます。インジケーターのスタイルは統一し、アクティブな項目のみ強調します。

| 良い例                              | 悪い例                             |
| ------------------------------- | --------------------------------- |
| <img class="responsive-img" src="../images/carousel_do1.png" srcset="../images/carousel_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/carousel_dont1.png" srcset="../images/carousel_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/carousel_do2.png" srcset="../images/carousel_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/carousel_dont2.png" srcset="../images/carousel_dont2@2x.png 2x" /> |

## コード生成
 
Carousel のナビゲーション ボタンの色を指定した場合、Carousel HTML 要素は div でラップされます。ブラウザーによってネスト コンポーネント (他のコンポーネント内のコンポーネント) のスタイル設定が要求されます。

> [!WARNING]
> デザインの Carousel のインスタンスで`シンボルからでタッチ`をトリガーすると、ほとんどの場合で Carousel のためのコード生成機能が失われる結果となります。

### データ バインディング

データ バインディングは波括弧構文によって指定されます。例: {slideDeck}。データ バインディングはネストまたはネストなしが可能です。ターゲット プロパティがネストされたプロパティの場合、ネストされたプロパティ チェーンを含みますがモデル オブジェクト名は含みません。実例:

#### ネストなし

```typescript
SlideDeck {
    slideDeck: string[] = [];
}
```

DataSource: `{slideDeck}`

#### ネストあり

```typescript
Profile {
    slideDeck: string[] = [];
}

SlideDeck {
    profile: Profile;
}
```

DataSource: `{profile.slideDeck}`

### データ ソース プロパティ

`🕹️DataSource` 値は Carousel へのバインディングを設定するために使用されます。データ ソースは表示する画像名の文字列配列が必要です。`🕹️DataSource` プロパティはオプションです。`🕹️DataSource` が指定される場合、Slide スタイルはグループの最初の Slide から取得されます。その他の Slide スタイルが無視されます。

### Sketch エレベーション

Sketch 描画の Button および Slide エレベーション変更がコード生成で描画されません。各ボタン タイプにデフォルト エレベーションがあり、Ignite UI コンポーネントによって適用されます。これは Ignite UI for Angular 製品の既知の制限で、今後のリリースで修正予定です。

## その他のリソース

関連トピック:

コミュニティに参加して新しいアイデアをご提案ください。


