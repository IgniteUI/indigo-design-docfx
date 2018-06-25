---
title: Dialog - デザイン システム コンポーネント
_description: Dialog コンポーネント シンボルは、メッセージや警告をモーダル形式でユーザーに表示します。
_keywords: デザイン システム, Sketch, Ignite UI for Angular, コンポーネント, UI ライブラリ, ウィジェット
_language: ja
---

## Dialog

Dialog コンポーネント シンボルは、メッセージや警告をユーザーに表示、あるいはログインなど直ちに操作が必要なフォームを表示します。Dialog をモーダルに表示してユーザーが完了または閉じるまで次に進めないようにします。Dialog は、[Ignite UI for Angular Dialog Window コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/dialog.html)と視覚的に同じものです。

### Dialog デモ

<img src="../images/dialog_demo.png" srcset="../images/dialog_demo@2x.png 2x" />

### タイプ

Dialog 確認ボタンのみの警告を表示します。キャンセルや確認のメッセージ、あるいは直ちに対応が必要なユーザー ログインなどのコンテナーとして使用します。

<img src="../images/dialog_alert.png" srcset="../images/dialog_alert@2x.png 2x" />
<img src="../images/dialog_standard.png" srcset="../images/dialog_standard@2x.png 2x" />
<img src="../images/dialog_custom.png" srcset="../images/dialog_custom@2x.png 2x" />

### スタイル設定

Dialog は、さまざまなオーバーライドでタイトルやメッセージ、2 種類の [Button](button.md) タイプで個別にスタイル設定したボタンを制御することにより柔軟にスタイル設定できます。

<img src="../images/dialog_styling.png" srcset="../images/dialog_styling@2x.png 2x" />

## 使用方法

カスタム コンテンツ Dialog をデザインする場合、コンテンツ セクションに操作のためのボタンは配置せずに既存ダイアログ ボタンを使用します。

| いい例                            | 悪い例                           |
| ----------------------------- | ------------------------------- |
| <img src="../images/dialog_do1.png" srcset="../images/dialog_do1@2x.png 2x" /> | <img src="../images/dialog_dont1.png" srcset="../images/dialog_dont1@2x.png 2x" /> |

## コードの生成

Dialog の色を指定した場合、Dialog HTML 要素は div でラップされます。ブラウザーによってネスト コンポーネント (他のコンポーネント内のコンポーネント) のスタイル設定が要求されます。ボタン背景色、ボタン テキスト スタイル、の変更はサポートされません。

> [!WARNING]
> デザインの Dialog のインスタンスで`シンボルからデタッチ`をトリガーすると、ほとんどの場合で Dialog のためのコード生成機能が失われる結果となります。

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

### テキスト

Title、Message、Left Button、および Right Button に 4 つの Text プロパティが Dialog にあります。このプロパティにテキスト、バインディング、または両方を含むことができます。例:

- 設定
- {settingsLabel}
- 重要な {labelText}

### ボタン

Left および Right ボタンがあります。各 Button の Type フィールドを Flat または Raised に設定できます。ボタンの現在の Text Style と Background は無視されます。

### イベント

ユーザーが設定できるこのコントロールのイベント プロパティはありません。その代わり、対応するボタンが描画されるときに `onLeftButtonSelect` と `onRightButtonSelect` イベントは自動的にアウトプットされます。

## その他のリソース

<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

- [Indigo Design **GitHub** (英語)](https://github.com/IgniteUI/design-system-docfx)
