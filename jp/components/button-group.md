---
title: Button Group - デザイン システム コンポーネント
_description: Button Group コンポーネント シンボルは、同じコンセプトに属しているシンプルな操作を表すために使用します。
_keywords: デザイン システム, Sketch, Ignite UI for Angular, コンポーネント, UI ライブラリ, ウィジェット
_language: ja
---

## Button Group

Button Group コンポーネント シンボルは、関連する機能のトリガーを 1 インターフェイス要素として組み合わせます。1 つのボタンのみ押すことができる排他的な選択と 1 つ以上のボタンを押したままにできる複数選択の両方をサポートします。Button Group は、[Ignite UI for Angular Button Group コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/buttongroup.html)と視覚的に同じものです。

### Button Group デモ

<img class="responsive-img" src="../images/button-group_demo.png" srcset="../images/button-group_demo@2x.png 2x" />

### レイアウト

Button Group は、2 方向レイアウトをサポートし、左から右の水平方向、上から下の垂直に配置できます。

<img class="responsive-img" src="../images/button-group_horizontal.png" srcset="../images/button-group_horizontal@2x.png 2x" />
<img class="responsive-img" src="../images/button-group_vertical.png" srcset="../images/button-group_vertical@2x.png 2x" />

### ボタン数

多くのケースで Button Group に 2 項目 ～ 4 項目が必要になります。4 項目以上必要な場合は、一連のリッチな操作を提供できるカスタム ツールバーをデザインすることを検討してください。

<img class="responsive-img" src="../images/button-group_items2.png" srcset="../images/button-group_items2@2x.png 2x" />
<img class="responsive-img" src="../images/button-group_items3.png" srcset="../images/button-group_items3@2x.png 2x" />
<img class="responsive-img" src="../images/button-group_items4.png" srcset="../images/button-group_items4@2x.png 2x" />

### ボタン タイプ

Button Group 内の各 Button には**テキスト**またはアイコンが含まれ、**デフォルト**、無効、ホバー、選択済みの状態で設定できます。選択済みの状態は、選択したボタンを分けるための追加の境界線があり、Button 配置に反映する必要のある 3 種類のバリアントが含まれます。

<img class="responsive-img" src="../images/button-group_text.png" srcset="../images/button-group_text@2x.png 2x" />
<img class="responsive-img" src="../images/button-group_icons.png" srcset="../images/button-group_icons@2x.png 2x" />

### スタイル設定

Button Group は、さまざまなオーバーライドで背景色、各ボタン境界線、背景、ラベル、アイコン色を制御することにより柔軟にスタイル設定できます。

<img class="responsive-img" src="../images/button-group_styling.png" srcset="../images/button-group_styling@2x.png 2x" />

## 使用方法

Button のスタイルは統一させます。同じ Button グループ内でテキスト Button とアイコン Buttons を組合さないようにします。Button Group のサイズはコンテンツに基づいて変更することにより、Button に空スペースが多く残らないようにします。Button Group は、シンプルで関連のある操作のみの表示に使用します。簡単なナビゲーションにも適していないため、[Tabs](tabs.md) の使用をお勧めします。 

| 良い例                                  | 悪い例                                 |
| ----------------------------------- | ------------------------------------- |
| <img class="responsive-img" src="../images/button-group_do1.png" srcset="../images/button-group_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/button-group_dont1.png" srcset="../images/button-group_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/button-group_do2.png" srcset="../images/button-group_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/button-group_dont2.png" srcset="../images/button-group_dont2@2x.png 2x" /> |
| <img class="responsive-img" src="../images/button-group_do3.png" srcset="../images/button-group_do3@2x.png 2x" /> | <img class="responsive-img" src="../images/button-group_dont3.png" srcset="../images/button-group_dont3@2x.png 2x" /> |

## コードの生成

Button Group の色やフォントを指定した場合、Button Group HTML 要素は div でラップされます。ブラウザーによってネスト コンポーネント (他のコンポーネント内のコンポーネント) のスタイル設定が要求されます。

> [!WARNING]
> デザインの Button Group のインスタンスで `Detach from Symbol` をトリガーすると、ほとんどの場合で Button Group のためのコード生成機能が失われる結果となります。

### データ バインディング

データ バインディングは波括弧構文によって指定されます。例: {isAdmin}。テキスト フィールド (`🕹️DataProperty` および `🕹️DataSource` 以外) も文字列補間構文をサポートします。例: 管理者: {isAdmin}。データ バインディングはネストまたはネストなしが可能です。ターゲット プロパティがネストされたプロパティの場合、ネストされたプロパティ チェーンを含みますがモデル オブジェクト名は含みません。例:

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

### Event プロパティ

`🕹️Event` プロパティはコンポーネント TypeScript のメソッドを作成するために使用し、HTML に onClick シグネチャを追加します。波括弧構文 ({onEventName}) を使用してイベントを指定する必要があります。

### ボタン数

このプロパティはグループで表示されるボタンの数を決定します。

### ボタン

このプロパティは表示するボタンのタイプを決定します。アイコンまたはテキスト ボタンが可能です。

### テキスト 

このプロパティはテキスト ボタンのみに表示されます。ボタンで表示されるテキストを指定します。プレーン テキスト、バインディング テキスト、または両方を含むことができます。例:

* 設定
* {settingsLabel}
* 重要な {labelText}

## その他のリソース

関連トピック:

- [Button](button.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。


