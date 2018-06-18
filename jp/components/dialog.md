---
title: Dialog - デザイン システム コンポーネント
_description: Dialog コンポーネント シンボルは、メッセージや警告をモーダル形式でユーザーに表示します。
_keywords: デザイン システム, Sketch, Ignite UI for Angular, コンポーネント, UI ライブラリ, ウィジェット
_language: ja
---

## Dialog

Dialog コンポーネント シンボルは、メッセージや警告をユーザーに表示、あるいはログインなど直ちに操作が必要なフォームを表示します。Dialog をモーダルに表示してユーザーが完了または閉じるまで次に進めないようにします。Dialog は、[Ignite UI for Angular Dialog Window コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/dialog.html)と視覚的に同じものです。

### Dialog デモ

![](../images/dialog_demo.png)

### タイプ

Dialog 確認ボタンのみの警告を表示します。キャンセルや確認のメッセージ、あるいは直ちに対応が必要なユーザー ログインなどのコンテナーとして使用します。

![](../images/dialog_alert.png)
![](../images/dialog_standard.png)
![](../images/dialog_custom.png)

### スタイル設定

Dialog は、さまざまなオーバーライドでタイトルやメッセージ、2 種類の [Button](button.md) タイプで個別にスタイル設定したボタンを制御することにより柔軟にスタイル設定できます。

![](../images/dialog_styling.png)

## 使用方法

カスタム コンテンツ Dialog をデザインする場合、コンテンツ セクションに操作のためのボタンは配置せずに既存ダイアログ ボタンを使用します。

| いい例                            | 悪い例                           |
| ----------------------------- | ------------------------------- |
| ![](../images/dialog_do1.png) | ![](../images/dialog_dont1.png) |

## コードの生成

Dialog の色を指定した場合、Dialog HTML 要素は div でラップされます。ブラウザーによってネスト コンポーネント (他のコンポーネント内のコンポーネント) のスタイル設定が要求されます。ボタン背景色、ボタン テキスト スタイル、の変更はサポートされません。

> [!WARNING]
> デザインの Dialog のインスタンスで`シンボルからデタッチ`をトリガーすると、ほとんどの場合で Dialog のためのコード生成機能が失われる結果となります。

### テキスト バインド

Title、Message、Left Button、および Right Button に Text プロパティがあります。ネストまたはネストなしのデータ項目にバインドできます。
プロパティがネストされたプロパティの場合、ネストされたプロパティ チェーンを含みますがモデル オブジェクト名は含みません。例:

#### 例: ネストなし

```PseudoCode
Customer {
titleText: string;
}

Text: {titleText}
```

#### 例: ネストあり

```PseudoCode
Profile {
titleText: number;
}

Customer {
profile: Profile;
}

Text: {profile. titleText }
```

### ボタン

Flat または Raised に設定できる Left および Right ボタンがあります。ボタンの現在の Text Style と Background は無視されます。

### イベント

ユーザーが設定できるこのコントロールのイベント プロパティはありません。ただし、対応するボタンが描画されるときに `onLeftButtonSelect` と `onRightButtonSelect` イベントは自動的にアウトプットされます。

## その他のリソース

<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

- [Indigo Design **GitHub** (英語)](https://github.com/IgniteUI/design-system-docfx)
