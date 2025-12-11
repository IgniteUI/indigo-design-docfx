---
title: Dropdown - デザイン システム コンポーネント
_description: Dropdown コンポーネントは、コレクションから単一項目を選択できます。
_keywords: デザイン システム, デザイン システム UX, UI キット, Figma, Figma to Angular, Figma からコードをエクスポート, Figma to HTML, Figma HTML, Figma UI キット, Ignite UI for Angular, Angular, Angular デザイン システム, Angular 用のデザイン キット
_language: ja
---

# Dropdown (ドロップダウン)

Dropdown コンポーネントでは、ユーザーがスクロール可能なリストでユーザー インタラクションに応じて表示されるコレクションから項目を選択できます。一度に 1 つの項目のみ選択できます。複数の項目を選択する必要がある場合は、代わりに [Combo](combo.md) を使用してください。Dropdown は、[Ignite UI for Angular Dropdown コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/drop_down.html)と視覚的に同じです。

## Dropdown のデモ

<img class="responsive-img" src="../images/dropdown_demo.png" srcset="../images/dropdown_demo@2x.png 2x" />

## サイズ

Dropdown には 3 つのサイズがあります: Large、Medium および Small です。

<img class="responsive-img" src="../images/dropdown_large.png" srcset="../images/dropdown_large@2x.png 2x" />
<img class="responsive-img" src="../images/dropdown_medium.png" srcset="../images/dropdown_medium@2x.png 2x" />
<img class="responsive-img" src="../images/dropdown_small.png" srcset="../images/dropdown_small@2x.png 2x" />

## 項目

Dropdown は 2 つの項目タイプ (header と item) をサポートし、Large、Medium、Small の 3 つのサイズで利用できます。ヘッダーでグループの他の項目を体系化できます。

<img class="responsive-img" src="../images/dropdown_header.png" srcset="../images/dropdown_header@2x.png 2x" />
<img class="responsive-img" src="../images/dropdown_item.png" srcset="../images/dropdown_item@2x.png 2x" />

## 項目の状態

ドロップダウン項目は、**Idle (アイドル)**、**Hover (ホバー)**、**Disabled (無効)**、**Focused (フォーカス済み)**、**Selected (選択済み)**、**Selected & Hover (選択済みおよびホバー)**、**Selected & Focused (選択済みおよびフォーカス済み)** の 7 つの異なる状態をサポートしています。Figma では、状態は `State` プロパティおよび/または Selected と Disabled のブール値プロパティを変更することで異なるバリアントを実現できます。

|  | Idle | Hover | Focused | Disabled |
|  | ---- | ----- | ------- | -------- |
|  | <img class="responsive-img" src="../images/dropdown_item_idle.png" srcset="../images/dropdown_item_idle@2x.png 2x" /> | <img class="responsive-img" src="../images/dropdown_item_hover.png" srcset="../images/dropdown_item_hover@2x.png 2x" /> | <img class="responsive-img" src="../images/dropdown_item_focused.png" srcset="../images/dropdown_item_focused@2x.png 2x" /> | <img class="responsive-img" src="../images/dropdown_item_disabled.png" srcset="../images/dropdown_item_disabled@2x.png 2x" /> |
| 選択済み | <img class="responsive-img" src="../images/dropdown_item_selected.png" srcset="../images/dropdown_item_selected@2x.png 2x" /> | <img class="responsive-img" src="../images/dropdown_item_selected_hover.png" srcset="../images/dropdown_item_selected_hover@2x.png 2x" /> | <img class="responsive-img" src="../images/dropdown_item_selected_focused.png" srcset="../images/dropdown_item_selected_focused@2x.png 2x" /> |

## 項目レイアウト テンプレート

Dropdown Item は柔軟なアイコンとラベルのテンプレートをサポートします。Figma では、1 つ以上の項目を選択し、`Prefix Icon` および/または `Suffix Icon` プロパティを有効にすることで、Dropdown にプレフィックス アイコンとサフィックス アイコンを追加できます。

<img class="responsive-img" src="../images/dropdown_item_label.png" srcset="../images/dropdown_item_label@2x.png 2x" />
<img class="responsive-img" src="../images/dropdown_item_icon.png" srcset="../images/dropdown_item_icon@2x.png 2x" /> 
<img class="responsive-img" src="../images/dropdown_item_two_icons.png" srcset="../images/dropdown_item_two_icons@2x.png 2x" /> 

## スタイル設定

Dropdown には、背景色のスタイルの柔軟性に加えて、項目やヘッダーの背景色やテキストの色など、含まれる要素に関連するさまざまなオプションがあります。

<img class="responsive-img" src="../images/dropdown_styling.png" srcset="../images/dropdown_styling@2x.png 2x" />

## 使用方法

Dropdown 使用時は、表示をトリガーする項目に従ってコンテンツの最上部に表示する必要があります。ドロップダウンは、展開パネルのようにコンテンツをプッシュしません。

| 良い例                                                                                 | 悪い例                                                                                  |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/dropdown_do1.png" srcset="../images/dropdown_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/dropdown_dont1.png" srcset="../images/dropdown_dont1@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [Combo](combo.md)
- [Select](select.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
