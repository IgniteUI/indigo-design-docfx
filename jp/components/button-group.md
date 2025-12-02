---
title: Button Group - デザイン システム コンポーネント
_description: Button Group コンポーネントは、同じコンセプトに属しているシンプルな操作を表すために使用します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Figma, Ignite UI for Angular, Figma to Angular, Angular, Angular デザイン システム, Figma からコードをエクスポート, Angular 用のデザイン キット, Figma HTML, Figma to HTML, Figma UI キット
_language: ja
---

# Button Group (ボタン グループ)

Button Group コンポーネントを使用して、いくつかの関連機能のトリガーを 1 つのインターフェイス要素に結合します。Button Group は、[Ignite UI for Angular Button Group コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/button-group.html)と視覚的に同じものです。

## Button Group のデモ

<img class="responsive-img" src="../images/button-group_demo.png" srcset="../images/button-group_demo@2x.png 2x" />

## レイアウト

Button Group は、2 方向レイアウトをサポートし、左から右の水平方向、上から下の垂直に配置できます。

<img class="responsive-img" src="../images/button-group_horizontal.png" srcset="../images/button-group_horizontal@2x.png 2x" />
<img class="responsive-img" src="../images/button-group_vertical.png" srcset="../images/button-group_vertical@2x.png 2x" />

## ボタン数

Figma では、ボタン グループは自動レイアウトを使用しているため、必要なボタンの正確な数を選択し、レイヤー パネルでネストされた余分なボタンを非表示にすると、それに応じて調整されます。

<img class="responsive-img" src="../images/button-group_amount.png" srcset="../images/button-group_amount@2x.png 2x" />

## インタラクション状態

Button Group コンポーネント内の各ボタンは Enabled と Disabled の両方のバリアントをサポートしており、さらに Selected かどうかを切り替えることができます。Figma ではプロパティ パネルのブール操作を使用して、Enabled と Disabled、Selected と Not Selected を切り替えることができます。

<img class="responsive-img" src="../images/button-group_interaction.png" srcset="../images/button-group_interaction@2x.png 2x" />

## 状態

Figma では、Button Group コンポーネント内の Enabled ボタンは Idle (アイドル)、Hover (ホバー)、Focused (フォーカス済み) の状態をサポートしており、State プロパティを変更することで切り替えることができます。

<img class="responsive-img" src="../images/button-group_states.png" srcset="../images/button-group_states@2x.png 2x" />

## Button Group レイアウト テンプレート

ボタン グループの各ボタンは、柔軟なアイコンとラベル テンプレートをサポートします。Figma では、Text & Icon Content タイプを選択し、Left Icon と Right Icon のブール値プロパティを使用することでアイコンの表示と非表示を切り替えられます。Icon Button を使用する場合は Content プロパティを Icon に設定します。

<img class="responsive-img" src="../images/button-group_text.png" srcset="../images/button-group_text@2x.png 2x" />
<img class="responsive-img" src="../images/button-group_icon.png" srcset="../images/button-group_icon@2x.png 2x" />

## スタイル設定

Button Group は、さまざまなオプションを通じて境界線と背景色、各ボタンのアウトライン、背景、テキスト、アイコンの色を柔軟にスタイル設定できます。

<img class="responsive-img" src="../images/button-group_styling.png" srcset="../images/button-group_styling@2x.png 2x" />

## 使用方法

Button のスタイルは統一させます。同じ Button グループ内でテキスト Button とアイコン Button を組合さないようにします。Button Group のサイズはコンテンツに基づいて変更することにより、Button に空スペースが多く残らないようにします。Button Group は、シンプルで関連のある操作のみの表示に使用します。簡単なナビゲーションにも適していないため、[Tabs](tabs.md) の使用をお勧めします。 

| 良い例                                  | 悪い例                                 |
| ----------------------------------- | ------------------------------------- |
| <img class="responsive-img" src="../images/button-group_do1.png" srcset="../images/button-group_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/button-group_dont1.png" srcset="../images/button-group_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/button-group_do2.png" srcset="../images/button-group_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/button-group_dont2.png" srcset="../images/button-group_dont2@2x.png 2x" /> |
| <img class="responsive-img" src="../images/button-group_do3.png" srcset="../images/button-group_do3@2x.png 2x" /> | <img class="responsive-img" src="../images/button-group_dont3.png" srcset="../images/button-group_dont3@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [Button](button.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

