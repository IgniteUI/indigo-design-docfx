---
title: Radio Group -  デザイン システム コンポーネント
_description: Radio Group コンポーネント シンボルは、一連のオプションで排他的な選択のメカニズムを提供します。
_keywords: デザイン システム, Sketch, Ignite UI for Angular, コンポーネント, UI ライブラリ, ウィジェット
_language: ja
---

## Radio Group

Radio Group コンポーネント シンボルは、グループ項目で排他的な選択をサポートします。グループの項目は、左揃えで単一列に次々にレイアウトされます。Radio Group は、[Ignite UI for Angular Radio Button コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/radio_button.html)と視覚的に同じものです。

### Radio Group デモ

<img src="../images/radiogroup_demo.png" srcset="../images/radiogroup_demo@2x.png 2x" />

### テーマ

Radio Group は、明暗バリアントでわかりやすく、背景に明暗のコントラストを付けてスタイル設定できます。すべての Radios を同じテーマに設定してださい。

<img src="../images/radiogroup_dark.png" srcset="../images/radiogroup_dark@2x.png 2x" />
<img src="../images/radiogroup_light.png" srcset="../images/radiogroup_light@2x.png 2x" />

### 状態

グループの各 Radio は、**オン**とオフ、そして追加のバリアントとしてインタラクション無効の状態があります。

<img src="../images/radiogroup_states.png" srcset="../images/radiogroup_states@2x.png 2x" />

### スタイル設定

Radio Group は、さまざまなオーバーライドで各項目のラベル スタイルや色を制御することにより柔軟にスタイル設定できます。

<img src="../images/radiogroup_styling.png" srcset="../images/radiogroup_styling@2x.png 2x" />

## 使用方法

Radio Group を追加項目で拡張する場合は、単一列で左寄せに統一してください。複数列のレイアウトや Radio を一度に 1 つ以上オンにしないようにします。

| 良い例                                | 悪い例                               |
| --------------------------------- | ----------------------------------- |
| <img src="../images/radiogroup_do1.png" srcset="../images/radiogroup_do1@2x.png 2x" /> | <img src="../images/radiogroup_dont1.png" srcset="../images/radiogroup_dont1@2x.png 2x" /> |
| <img src="../images/radiogroup_do2.png" srcset="../images/radiogroup_do2@2x.png 2x" /> | <img src="../images/radiogroup_dont2.png" srcset="../images/radiogroup_dont2@2x.png 2x" /> |

## コードの生成

Radio Group の色やフォントを指定した場合、Radio Group HTML 要素は div でラップされます。ブラウザーによってネスト コンポーネント (他のコンポーネント内のコンポーネント) のスタイル設定が要求されます。

> [!WARNING]
> Radio Group のインスタンスで `Detach from Symbol` をトリガーした場合、Radio Group のコード生成の精度を低下します。Sketch 描画および Angular の生成されたレイアウトを比較すると、垂直マージンの違いが Radio Button コンポーネントに表示されます。提供された項目より多く項目を作成する必要がある場合のみ `Detach from Symbol` を使用します。それ以外の場合、none に設定してラジオ ボタンを非表示にし、`🚫radio-group`、`🕹️DataProperty`、および `🕹️DataSource` レイヤーをデタッチしないでください。コードが生成された後、デザインと一致するためにマージンを CSS で調整します。
 
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

### データ プロパティ

`🕹️DataProperty` 値は [Angular Reactive Forms](https://angular.io/guide/reactive-forms) を使用してラジオ ボタンの checked プロパティへの 2-way データ バインディングを設定するために使用されます。`🕹️DataProperty` はオプションです。`🕹️DataProperty` は、生成要求で提供されるモデル オブジェクト名で指定されたデータ オブジェクトのプロパティ名です。

モデル オブジェクト名および `🕹️DataProperty` が提供される場合、Reactive Forms フォームを作成するためにフォーム ビルダー コードで TypeScript `ngOnInit` メソッドが生成されます。`🕹️DataProperty` はラジオ ボタン コントロールの formControlName プロパティを設定します。

### データ ソース プロパティ

提供される場合、`🕹️DataSource` 値が Radio Group のデータ ソース オブジェクトへのバインディングを設定するために使用されます。デフォルトで Radio Group ボタンの値およびラベルに割り当てる value および name プロパティがあるデータ ソースにバインドするために構成されます。`🕹️DataSource` プロパティはオプションです。

`🕹️DataSource` が設定される場合、スタイルはグループの最初のラジオから取得されます。その他の Radio Button スタイル設定が無視されます。`🕹️DataSource` が使用される場合、Text プロパティも無視されます。

### ラジオ ボタン

グループの Radio Button の設定を決定します。`🕹️DataSource` を設定し、最初の Radio Button が None の場合、ラジオ グループは描画しません。Radio Button が None の場合、Radio Button を描画しません。Radio Button の Color が None の場合、Radio Button を描画しません。3 つの Radio Button がすべて None の場合、Radio Group を描画しません。

### テキスト

`🕹️DataSource` を設定した場合、Text プロパティは無視されます。Text が提供される場合、Radio Button の値およびラベルで使用されます。

## その他のリソース

コミュニティに参加して新しいアイデアをご提案ください。


