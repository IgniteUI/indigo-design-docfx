---
title: Dropdown - デザイン システム コンポーネント
_description: Dropdown コンポーネント シンボルは、コレクションから単一項目を選択できます。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# Dropdown (ドロップダウン)

Dropdown コンポーネントでは、ユーザーがスクロール可能なリストでユーザー インタラクションに応じて表示されるコレクションから項目を選択できます。一度に 1 つの項目のみ選択できます。複数の項目を選択する必要がある場合は、代わりに [Combo](combo.md) を使用してください。Dropdown は、[Ignite UI for Angular Dropdown コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/drop_down.html)と視覚的に同じです。

## Dropdown デモ

<img class="responsive-img" src="../images/dropdown_demo.png" srcset="../images/dropdown_demo@2x.png 2x" />

## タイプ

Dropdown は、デスクトップとモバイルで使用時に適切なサイズで提供されます。

<img class="responsive-img" src="../images/dropdown_desktop.png" srcset="../images/dropdown_desktop@2x.png 2x" />
<img class="responsive-img" src="../images/dropdown_mobile.png" srcset="../images/dropdown_mobile@2x.png 2x" />

## 項目

Dropdown は、項目ヘッダーと項目の 2 つのタイプをサポートします。ヘッダーでグループの他の項目を体系化できます。

<img class="responsive-img" src="../images/dropdown_header.png" srcset="../images/dropdown_header@2x.png 2x" />
<img class="responsive-img" src="../images/dropdown_item.png" srcset="../images/dropdown_item@2x.png 2x" />

## 項目の状態

Dropdown 項目は、5 つの状態をサポートします: Disabled, **Idle**、Focused、Selected、Selected&focused。

<img class="responsive-img" src="../images/dropdown_item_disabled.png" srcset="../images/dropdown_item_disabled@2x.png 2x" />
<img class="responsive-img" src="../images/dropdown_item_idle.png" srcset="../images/dropdown_item_idle@2x.png 2x" />
<img class="responsive-img" src="../images/dropdown_item_focused.png" srcset="../images/dropdown_item_focused@2x.png 2x" />
<img class="responsive-img" src="../images/dropdown_item_selected.png" srcset="../images/dropdown_item_selected@2x.png 2x" />
<img class="responsive-img" src="../images/dropdown_item_selected_focused.png" srcset="../images/dropdown_item_selected_focused@2x.png 2x" />

## 項目レイアウト テンプレート

Dropdown 項目は、オーバーライド パネルから非表示にする要素を ~No Symbol に設定することで、柔軟なアイコンとラベルのテンプレートをサポートします。デフォルトでは、この方法でアイコンは非表示になります。

<img class="responsive-img" src="../images/dropdown_item_idle.png" srcset="../images/dropdown_item_idle@2x.png 2x" />
<img class="responsive-img" src="../images/dropdown_item_icon.png" srcset="../images/dropdown_item_icon@2x.png 2x" /> 

## スタイル設定

Dropdown は、背景色を制御するオーバーライドによるスタイル設定、項目やヘッダー背景、テキスト色を含む項目に関連するさなざまなオーバーライドに高い柔軟性があります。

<img class="responsive-img" src="../images/dropdown_styling.png" srcset="../images/dropdown_styling@2x.png 2x" />

## 使用方法

Dropdown 使用時は、表示をトリガーする項目に従ってコンテンツの最上部に表示する必要があります。ドロップダウンは、展開パネルのようにコンテンツをプッシュしません。

| 良い例                                                                                 |悪い例                                                                                  |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/dropdown_do1.png" srcset="../images/dropdown_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/dropdown_dont1.png" srcset="../images/dropdown_dont1@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [Combo](combo.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
