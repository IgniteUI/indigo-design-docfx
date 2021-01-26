---
title: List - デザイン システム コンポーネント
_description: List コンポーネント シンボルは、データ行の垂直コレクションをブラウスおよびインタラクションする方法を提供します。
_keywords: デザイン システム, Sketch, Ignite UI for Angular, コンポーネント, UI ライブラリ, ウィジェット
_language: ja
---

# List (リスト)

List コンポーネントは、ユーザーのブラウジングやテキスト、アイコン、画像、ボタンやアバターなどのコンポーネントを含むテンプレート項目の一連の垂直コレクションとのインタラクションを可能にします。List は、[Ignite UI for Angular List コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/list.html)と視覚的に同じものです。

## List デモ

<img class="responsive-img" src="../images/list_demo.png" srcset="../images/list_demo@2x.png 2x" />

## タイプ

The List can be inserted in a preset with one-line items or with two-line items, both initially containing ten items. The List uses Smart Layout in Sketch for its items which makes it possible to adjust its size by setting one or more of its items to ~No Symbol.

<img class="responsive-img" src="../images/list_one-line_item.png" srcset="../images/list_one-line_item@2x.png 2x" />
<img class="responsive-img" src="../images/list_two-line_item.png" srcset="../images/list_two-line_item@2x.png 2x" />

## リスト項目のタイプ

The List Item comes in three preset types: Header for defining the headings of groups, One-line for shorter items with only one line of primary text, and Two-line for taller items supporting primary and secondary text.

<img class="responsive-img" src="../images/list_item_header.png" srcset="../images/list_item_header@2x.png 2x" />
<img class="responsive-img" src="../images/list_item_one-line.png" srcset="../images/list_item_one-line@2x.png 2x" />
<img class="responsive-img" src="../images/list_item_two-line.png" srcset="../images/list_item_two-line@2x.png 2x" />

## リスト項目の状態

The One-line and Two-line List Items support the following interactive states: **inactive** for the normal state and active for the selected state. Header List Item は選択できないため、そのような States はサポートしません。

<img class="responsive-img" src="../images/list_item_inactive.png" srcset="../images/list_item_inactive@2x.png 2x" />
<img class="responsive-img" src="../images/list_item_active.png" srcset="../images/list_item_active@2x.png 2x" />

## リスト項目の領域

The List Item has two distinct areas: Primary Action with non-interactive content such as Avatar and text, and Secondary Action with quick actions related to the List Item. Any combination of a Primary and Secondary action creates a unique list item template that should be used consistently across all items of the List.

<img class="responsive-img" src="../images/list_item_primary.png" srcset="../images/list_item_primary@2x.png 2x" />
<img class="responsive-img" src="../images/list_item_secondary.png" srcset="../images/list_item_secondary@2x.png 2x" />

## リスト項目プライマリ アクション

There are 4 interchangeable List Item Primary Actions that are listed below. Thanks to the use of Smart Layout in Sketch they can be adjusted further by setting unnecessary elements to ~No Symbol.

|                              |                                                                                                  |                                                                                                                                            |
| ---------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Avatar + Label + Description | <img class="responsive-img" src="../images/list_item_primary1.png" srcset="../images/list_item_primary1@2x.png 2x" />     |                                                                                                                                            |
| Checkbox + Label               | <img class="responsive-img" src="../images/list_item_primary2.png" srcset="../images/list_item_primary2@2x.png 2x" />   |  Checkbox in a Secondary Action can not have a label, therefore, the before and after labels are set to ~No Symbol and this setting should not be changed |
| Icon + Label + Desc | <img class="responsive-img" src="../images/list_item_primary3.png" srcset="../images/list_item_primary3@2x.png 2x" />   |                                                                                                                                            |
| Label + Progress          | <img class="responsive-img" src="../images/list_item_primary4.png" srcset="../images/list_item_primary4@2x.png 2x" />   | Linear Progress Bar in a Primary Action can not have a value label, therefore, it is set to ~No Symbol and this setting should not be changed |                                                                                                                                            |

## List Item Secondary Action

There are 4 interchangeable List Item Secondary Actions that are listed below. Thanks to the use of Smart Layout in Sketch they can be adjusted further by setting unnecessary elements to ~No Symbol.

|                  |                                                                                                    |                                                                                                                                       |
| ---------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Badge            | <img class="responsive-img" src="../images/list_item_secondary.png" srcset="../images/list_item_secondary@2x.png 2x" />   |                                                                                                                                       |
| Checkbox         | <img class="responsive-img" src="../images/list_item_secondary2.png" srcset="../images/list_item_secondary2@2x.png 2x" /> | Checkbox in a Secondary Action can not have a label, therefore, the before and after labels are set to ~No Symbol and this setting should not be changed |
| Text and Icon            | <img class="responsive-img" src="../images/list_item_secondary3.png" srcset="../images/list_item_secondary3@2x.png 2x" /> |                                                                                                                                       |
| Toggle             | <img class="responsive-img" src="../images/list_item_secondary4.png" srcset="../images/list_item_secondary4@2x.png 2x" /> | Switch in a Secondary Action can not have a label, therefore, the before and after labels are set to ~ No Symbol and this setting should not be changed                                                                                                                 |

## スタイル設定

The List comes with styling flexibility through the overrides available for background color and the different elements used in the List Items, such as icons and text, as well as components like Avatar, Badge, Checkbox, Icon, Progress, Switch, etc. with their own styling capabilities.

<img class="responsive-img" src="../images/list_styling.png" srcset="../images/list_styling@2x.png 2x" />

## 使用方法

The List and List Items have their own design specifics, but most importantly, one should always remember that the List is a collection of similar items usually following a common template. 従って同じリスト内で複数のテンプレートを組み合わせないようにします。 Also, avoid hiding elements, and instead provide placeholders or empty elements if a certain type of content is missing. Last but not least, pay special attention to the alignment of the elements constituting the template, as they must be able to form perceived vertical continuity.

| 良い例                                                                         | 悪い例                                                                          |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| <img class="responsive-img" src="../images/list_do1.png" srcset="../images/list_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/list_dont1.png" srcset="../images/list_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/list_do2.png" srcset="../images/list_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/list_dont2.png" srcset="../images/list_dont2@2x.png 2x" /> |
| <img class="responsive-img" src="../images/list_do3.png" srcset="../images/list_do3@2x.png 2x" /> | <img class="responsive-img" src="../images/list_dont3.png" srcset="../images/list_dont3@2x.png 2x" /> |

## シンボルからデタッチ

List は、本来インデックス付きの垂直コレクションとしてデータを表示する行のリピーターです。 If you need to design a list with more items, the easiest way to do so is by inserting any of the List types on your artboard, right-click on top of it, and select the `Detach from Symbol` at the bottom of the contextual menu. In your layers panel under the newly appeared _List/One-line Item List_ or _List/Two-line Item List_ group, you should see the following:

| Layer         | Use                                                                                                                                                  |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🚫 metadata   | A special locked layer starting with a prohibited icon. This layer is required by the code generation and you should avoid deleting or modifying it. |
| List Header   | An instance of a list header item                                                                                                                    |
| 1 Item        | An instance of a one-line/two-line list item                                                                                                                  |
| 2 Item        | An instance of a one-line/two-line list item                                                                                                                  |
| 3 Item        | An instance of a one-line/two-line list item                                                                                                                  |
| 4 Item        | An instance of a one-line/two-line list item                                                                                                                  |
| 5 Item        | An instance of a one-line/two-line list item                                                                                                                  |
| 6 Item        | An instance of a one-line/two-line list item                                                                                                                  |
| 7 Item        | An instance of a one-line/two-line list item                                                                                                                  |
| 8 Item        | An instance of a one-line/two-line list item                                                                                                                  |
| 9 Item        | An instance of a one-line/two-line list item                                                                                                                  |
| 10 Item        | An instance of a one-line/two-line list item                                                                                                                  |
| 🌈 Background | Defines the background color of the list                                                                                                             |

Now, you may insert additional headers or items either from the Sketch menu or simply by duplicating an existing one. Always place items and headers one after another with consistent horizontal width and alignment, making sure there are no gaps between the items.

## その他のリソース

関連トピック:

- [Avatar](avatar.md)
- [Badge](badge.md)
- [Checkbox](checkbox.md)
- [Icon](icon.md)
- [Progress](progress.md)
- [Switch](switch.md)
- [Lists パターン](../patterns/lists.md)
- [データ バインディング](../codegen/data-binding.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。


