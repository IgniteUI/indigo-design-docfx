---
title: Dialog - デザイン システム コンポーネント
_description: Dialog コンポーネント シンボルは、メッセージや警告をモーダル形式でユーザーに表示します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット, Figma, Figma to Angular, Figma からコードをエクスポート, Figma HTML, Figma to HTML, Figma UI キット
_language: ja
---

# Dialog (ダイアログ)

Dialog コンポーネント シンボルは、メッセージや警告をユーザーに表示、あるいはログインなど直ちに操作が必要なフォームを表示します。Dialog をモーダルに表示してユーザーが完了または閉じるまで次に進めないようにします。Dialog は、[Ignite UI for Angular Dialog Window コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/dialog.html)と視覚的に同じものです。

## Dialog のデモ

<img class="responsive-img" src="../images/dialog_demo.png" srcset="../images/dialog_demo@2x.png 2x" />

## タイプ

Dialog 確認ボタンのみの警告を表示します。キャンセルや確認のメッセージ、あるいは直ちに対応が必要なユーザー ログインなどのコンテナーとして使用します。Button 領域はテンプレート化可能で、ボタンなどを調整できます。Sketch で非表示にするには、メイン オーバーライドを ~No Symbol に設定する必要があります。スマート レイアウトのおかげで領域はそれに応じて調整されます。Adobe XD で同様の操作を行うには、不要なボタンを削除します。Stack は領域レイアウトを調整しますが、Sketch とは異なり別のボタンを挿入することもできます。In Figma, in order to hide one of the two action buttons, you need to do that from the layers panel and the auto layout will adjust the area automatically.

<img class="responsive-img" src="../images/dialog_alert.png" srcset="../images/dialog_alert@2x.png 2x" />
<img class="responsive-img" src="../images/dialog_standard.png" srcset="../images/dialog_standard@2x.png 2x" />
<img class="responsive-img" src="../images/dialog_custom.png" srcset="../images/dialog_custom@2x.png 2x" />

## スタイル設定

Dialog には、タイトルとメッセージのさまざまなオプション、[Button](button.md) コンポーネントが提供するすべてのスタイリング オプションを備えた下部のボタン、および背景とエレベーションによるスタイリングの柔軟性があります。

<img class="responsive-img" src="../images/dialog_styling.png" srcset="../images/dialog_styling@2x.png 2x" />

## 使用方法

カスタム Dialog をデザインする場合、本体セクションに操作のためのボタンは配置せずに既存ダイアログ ボタンを使用します。

| 良い例                            | 悪い例                           |
| ----------------------------- | ------------------------------- |
| <img class="responsive-img" src="../images/dialog_do1.png" srcset="../images/dialog_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/dialog_dont1.png" srcset="../images/dialog_dont1@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [Button](button.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
