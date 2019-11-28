---
title: Hyperlink - デザイン システム コンポーネント
_description: Hyperlink コンポーネント シンボルは、テキスト段落で参照を使用できます。
_keywords: デザイン システム, Sketch, コンポーネント, UI Library, ウィジェット
_language: ja
---

## Hyperlink (ハイパーリンク)

Hyperlink コンポーネント シンボルは、利用規約やプライバシー ポリシーなど段落のテキスト部分のスタイルに関する追加情報へのアクセスを提供します。

### Hyperlink デモ

<img class="responsive-img" src="../images/hyperlink_demo.png" srcset="../images/hyperlink_demo@2x.png 2x" />

### サイズ

Hyperlink には段落のテキストに合わせて 2 サイズ (16pt Body 1 と 14pt Body 2) あります。

<img class="responsive-img" src="../images/hyperlink_sizes.png" srcset="../images/hyperlink_sizes@2x.png 2x" />

### スタイル設定

Hyperlink は、デフォルトの青色と他の色に変更してスタイル ライブラリでスタイル設定できます。

<img class="responsive-img" src="../images/calendar_styling.png" srcset="../images/calendar_styling@2x.png 2x" />

## 使用方法

Hyperlink テキスト色には段落で目立つ色を選択します。同じ色や似たような色を使用しないようにして、全体的にデザインの色を統一します。

| 良い例                                                                               | 悪い例                                                                                   |
| ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/hyperlink_do1.png" srcset="../images/hyperlink_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/hyperlink_dont1.png" srcset="../images/hyperlink_dont1@2x.png 2x" /> |

## コードの生成

ハイパーリンクに色やフォントを指定した場合、ハイパーリンク要素に適用される CSS クラスに直接適用されます。

> [!WARNING]
> デザインの Hyperlink のインスタンスで `Detach from Symbol` をトリガーすると、ほとんどの場合で Hyperlink のためのコード生成機能が失われます。

### データ バインディング

データ バインディングは波括弧構文によって指定されます。例: {isAdmin}。データ バインディングはネストまたはネストなしが可能です。ターゲット プロパティがネストされたプロパティの場合、ネストされたプロパティ チェーンを含みますがモデル オブジェクト名は含みません。実例:

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

このプロパティはコンポーネント TypeScript のメソッドを作成するために使用し、HTML に Angular クリック シグネチャーを追加します。波括弧構文 ({onEventName}) を使用してイベントを指定する必要があります。

### LinkURL

LinkURL を URL またはバインディングに設定します。提供される場合、この値は HTML コントロールの href プロパティに割り当てます。

- URL の例: http://www.infragistics.com
- バインディングの例: {companyWebsite}

### テキスト

Text プロパティにテキスト、バインディング、または両方を含むことができます。例:

- 設定
- {settingsLabel}
- 重要な {labelText}

Text プロパティは Hyperlink に表示するテキストを埋めるために使用されます。

## その他のリソース

関連トピック:

- [Form Pattern](../patterns/form.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。


