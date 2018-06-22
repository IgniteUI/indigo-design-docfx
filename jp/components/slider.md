---
title: Slider - デザイン システム コンポーネント
_description: Slider コンポーネント シンボルは、ユーザーの単一の値や範囲の選択をサポートします。
_keywords: デザイン システム, Sketch, Ignite UI for Angular, コンポーネント, UI ライブラリ, ウィジェット
_language: ja
---

## Slider

Slider コンポーネント シンボルは、単一値の選択や両値の最後を選択して値範囲の指定が可能です。Slider は、[Ignite UI for Angular Slider コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/slider.html)と視覚的に同じものです。

### Slider デモ

![](../images/slider_demo.png)

### タイプ

Slider は、単一値の選択につまみと範囲を指定するための 2 つのつまみを提供します。

![](../images/slider_one-thumb.png)
![](../images/slider_two-thumb.png)

### テーマ

Slider は、ダーク/ライト系のテーマで分かりやすく、背景に明暗のコントラストを付けてスタイル設定できます。

![](../images/slider_dark.png)
![](../images/slider_light.png)

### 状態

Slider は、値の変更が可能かどうかを設定する**有効**/無効の状態をサポートします。

![](../images/slider_enabled.png)
![](../images/slider_disabled.png)

### スタイル設定

Slider は、さまざまなオーバーライドでラベル背景、つまみ、トラック、ベース トラックの色を制御することにより柔軟にスタイル設定できます。

![](../images/slider_styling.png)

## 使用方法

Slider のトラック カラーは常にトラック ベース カラーより強調されます。単一値と範囲 Slider のスタイルを統一する必要があります (ラベル背景をつまみやトラックカラーとマッチするなど)。

| いい例                            | 悪い例                           |
| ----------------------------- | ------------------------------- |
| ![](../images/slider_do1.png) | ![](../images/slider_dont1.png) |
| ![](../images/slider_do2.png) | ![](../images/slider_dont2.png) |

## コードの生成
 
Slider の色を指定した場合、Slider HTML 要素は div でラップされます。これはネスト コンポーネント (他のコンポーネント内のコンポーネント) をスタイル設定する際にブラウザーによって要求されます。

> [!WARNING]
> デザインの Slider のインスタンスで`シンボルからデタッチ`をトリガーすると、ほとんどの場合で Slider のためのコード生成機能が失われます。

### データ バインディング

データ バインディングは波括弧構文によって指定されます。例: {isAdmin}。テキスト フィールド (`🕹️DataProperty` および `🕹️DataSource` 以外) も文字列補間構文をサポートします。例: 管理者: {isAdmin}。データ バインディングはネストまたはネストなしが可能です。ターゲット プロパティがネストされたプロパティの場合、ネストされたプロパティ チェーンを含みますがモデル オブジェクト名は含みません。実例:

#### ネストなし

```typescript
Customer {
  imageName: String;
}
```
DataProperty: `{imageName}`

#### ネストあり

```typescript
Profile {
  imageName: String;
}

Customer {
  profile: Profile;
}
```
DataProperty: `{profile.imageName}`

### リアクティブ フォーム

モデル オブジェクト名および `🕹️DataProperty` が提供される場合、Reactive Forms フォームを作成するためにフォーム ビルダー コードで TypeScript ngOnInit メソッドが生成されます。`🕹️DataProperty` はスライダー コントロールの formControlName プロパティを設定します。

### DataProperty

`🕹️DataProperty` 値は Angular Reactive Forms を使用してスライダーの value プロパティへの 2-way データ バインディングを設定するために使用されます。`🕹️DataProperty` はオプションです。`🕹️DataProperty` は、生成要求で提供されるモデル オブジェクト名で指定されたデータ オブジェクトのプロパティ名です。単一つまみスライダーの場合、`🕹️DataProperty` を数値に設定する必要があります。2 つまみスライダーの場合、`🕹️DataProperty` を lower および upper プロパティを持つオブジェクトまたはクラスに設定する必要があります。

### 状態

State が無効またはスライダー部分が表示されない場合、コントロールは描画されません。

## その他のリソース

関連トピック:

コミュニティに参加して新しいアイデアをご提案ください。

- [Indigo Design **GitHub** (英語)](https://github.com/IgniteUI/design-system-docfx)
