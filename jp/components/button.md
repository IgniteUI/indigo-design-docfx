---
title: Button - デザイン システム コンポーネント
_description: Button コンポーネント シンボルはシンプルなアクションを表すために使用します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット, Figma, Figma to Angular, Figma からコードをエクスポート, Figma HTML, Figma to HTML, Figma UI キット
_language: ja
---

# Button (ボタン)

Button コンポーネント シンボルは、シンプルなユーザー操作のためのトリガーを表します。Buttons は、カード、ダイアログ、フォーム、その他コンポーネントやパターンに使用します。Button は、[Ignite UI for Angular Button コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/button.html)と視覚的に同じものです。

## Button のデモ

<img class="responsive-img" src="../images/button_demo.png" srcset="../images/button_demo@2x.png 2x" />

## タイプ

5 つの Button タイプがあります。

- 塗りつぶしや影付きの Contained Button は、操作を強調します。
- アウトライン付きの Outlined Button は、ほとんどのアクションに適しています。
- Flat Button は、通常あまり重要でない操作に使用します。
- Icon Button は、操作をアイコンでのみ表されます。
- Floating Action Button (Fab) の塗りつぶしと影は、画面ごとに 1 回使用してメインの操作を強調します。

<img class="responsive-img" src="../images/button_types.png" srcset="../images/button_types@2x.png 2x" />

## 操作状態

これらのボタンはすべて、有効なバリアントと無効なバリアントの両方をサポートしているため、無効な状態で挿入することもできます。Figma では、プロパティ パネルからブール演算を使用して切り替えることができます。Adobe XD では `Component States` パラダイムを使用して簡単に状態を切り替えることができます。

<img class="responsive-img" src="../images/button_disabled.png" srcset="../images/button_disabled@2x.png 2x" />

## 状態

有効なボタンは、**Idle (アイドル)** と Hover (ホバー) 状態をサポートします。Figma では、State プロパティを変更することで切り替えることができる Focused (フォーカス済み) Focused & Hover (フォーカス済みおよびホバー) 状態を追加しました。Sketch ではこれを `Symbol Overrides` で実現していますが、Adobe XD では `Component States` パラダイムを使用して簡単に状態を切り替えることができます。

<img class="responsive-img" src="../images/button_states.png" srcset="../images/button_states@2x.png 2x" />

## レイアウト テンプレート

Contained、Outlined、Flat、および Floating Action ボタンは、柔軟なアイコンおよびラベルのテンプレートをサポートします。Figma では、アイコンを表示または非表示にするには、Left Icon および Right Icon ブール値プロパティを使用できます。アイコン ボタンが必要な場合は、Content プロパティを Icon に設定できます。Sketch では、スマート レイアウト ルールが適用されるため、非表示にする要素を ~No Symbol に設定すると、レイアウトを調整できます。Adobe XD では、代わりに未使用レイヤーを削除します。ただし、デザイン時にラベルとアイコンの位置のみを変更する場合は、一方を他方の側にドラッグできます。

<img class="responsive-img" src="../images/button_templates.png" srcset="../images/button_templates@2x.png 2x" />

## スタイル設定

Button は、さまざまなオプションを通じて背景色、ラベル、アイコンの色を柔軟にスタイル設定できます。

<img class="responsive-img" src="../images/button_styling.png" srcset="../images/button_styling@2x.png 2x" />

## 使用方法

Button のコンテンツにラベルを含む場合、大文字を太文字 (Medium または Semibold) を使用してください。Button がレイアウトで 1 つ以上必要な場合、同じ高さで揃え、互いに十分なスペースを保ちながら同じ水平面に配置することによりタップやクリックで発生する可能性のあるエラーを防止できます。このようなレイアウトの場合は、ボタン タイプは組み合わせないようにします。UI の特定のセクションにあるすべての操作に同じタイプを使用して統一感を持たせます。

| 良い例                                                                         | 悪い例                                                                             |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/button_do1.png" srcset="../images/button_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/button_dont1.png" srcset="../images/button_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/button_do2.png" srcset="../images/button_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/button_dont2.png" srcset="../images/button_dont2@2x.png 2x" /> |
| <img class="responsive-img" src="../images/button_do3.png" srcset="../images/button_do3@2x.png 2x" /> | <img class="responsive-img" src="../images/button_dont3.png" srcset="../images/button_dont3@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [Button Group](button-group.md)
- [Card](card.md)
- [Dialog](dialog.md)
- [Snackbar](snackbar.md)
- [Time Picker](time-picker.md)
- [AV Player パターン](../patterns/av.md)
- [File Upload パターン](../patterns/file-upload.md)
- [Form パターン](../patterns/form.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

