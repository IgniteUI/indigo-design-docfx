---
title: Toast - デザイン システム コンポーネント
_description: Toast コンポーネント シンボルは、非インタラクティブな情報メッセージや通知に使用します。
_keywords: デザイン システム, Sketch, Ignite UI for Angular, コンポーネント, UI ライブラリ, ウィジェット
_language: ja
---

## Toast

Toast コンポーネント シンボルは、非インタラクティブでユーザーが破棄できない短い情報メッセージや通知を表示します。Toast は、定義した時間間隔の後に自動的に非表示になります。Toast は、[Ignite UI for Angular Toast コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/toast.html)と視覚的に同じものです。

### Toast デモ

<img src="../images/toast_demo.png" srcset="../images/toast_demo@2x.png 2x" />

### 位置

Toast は、情報に関連するコンテンツの上、下、中央に相対的に配置します。

<img src="../images/toast_bottom.png" srcset="../images/toast_bottom@2x.png 2x" />
<img src="../images/toast_center.png" srcset="../images/toast_center@2x.png 2x" />
<img src="../images/toast_top.png" srcset="../images/toast_top@2x.png 2x" />

### スタイル設定

Toast は、スタイル設定に制限があり背景とメッセージ テキスト色のみ制御します。ただし、white と grays.900 のどちらかを選択することをお勧めします。メッセージ テキストは背景とのコントラストがより高い方を使用します。

<img src="../images/toast_styling.png" srcset="../images/toast_styling@2x.png 2x" />

## 使用方法

Toast は、常に水平に配置する必要があり、その他の配置はしないようにします。Toast のスタイルは、特徴のある背景色や白や濃い灰色のメッセージ テキストは使用しないようにします。

| 良い例                          | 悪い例                          |
| ---------------------------- | ------------------------------ |
| <img src="../images/toast_do1.png" srcset="../images/toast_do1@2x.png 2x" /> | <img src="../images/toast_dont1.png" srcset="../images/toast_dont1@2x.png 2x" /> |
| <img src="../images/toast_do2.png" srcset="../images/toast_do2@2x.png 2x" /> | <img src="../images/toast_dont2.png" srcset="../images/toast_dont2@2x.png 2x" /> |

## コードの生成

Toast の色を指定した場合、Toast HTML 要素は div でラップされます。ブラウザーによってネスト コンポーネント (他のコンポーネント内のコンポーネント) のスタイル設定が要求されます。

> [!WARNING]
> デザインの Toast のインスタンスで`シンボルからデタッチ`をトリガーすると、ほとんどの場合で Toast のためのコード生成機能が失われます。

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

`🕹️DataProperty` 値は Toast のテキスト プロパティへのデータ バインディングを設定するために使用されます。`🕹️DataProperty` はオプションです。`🕹️DataProperty` は、生成要求で提供されるモデル オブジェクト名で指定されたデータ オブジェクトのプロパティ名です。この値は Text プロパティをオーバーライドします。

### テキスト

Text プロパティにテキスト、バインディング、または両方を含むことができます。例:

- 設定
- {settingsLabel}
- 重要な {labelText}

## その他のリソース

コミュニティに参加して新しいアイデアをご提案ください。

- [Indigo Design **GitHub** (英語)](https://github.com/IgniteUI/design-system-docfx)
