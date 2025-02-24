---
title: Skeleton List - デザイン システム コンポーネント
_description: Skeleton List は、項目にコンテンツを提供するためにデータがバックグラウンドで読み込まれているときに表示される List コンポーネントの表現です。
_keywords: デザイン システム, デザイン システム UX, UI キット, Figma, Figma to Angular, Figma からコードをエクスポート, Figma to HTML, Figma HTML, Figma UI キット, Ignite UI for Angular, Angular, Angular デザイン システム, Angular 用のデザイン キット
_language: ja
---

# Skeleton List (スケルトン リスト)

Skeleton List コンポーネントを使用して、標準の情報と同じタイプの情報をレイアウトします。ただし、データが存在しない場合のアプリケーションの状態 (データがリモート データソースからロードされ、接続が切れているか、時間がかかる場合など) も示します。Skeleton List は、既知のレイアウトの [List](list.md) を視覚的に表したものですが、表示するデータはありません。

## Skeleton List のデモ

<img class="responsive-img" src="../images/list_skeleton_demo.png" srcset="../images/list_skeleton_demo@2x.png 2x" />

## タイプ

Skeleton List は、標準の [List](list.md) と同じ 2 つのタイプをサポートします: One-line Item List (1 行の項目リスト) と Two-line Item List (2 行の項目リスト)。

<img class="responsive-img" src="../images/list_skeleton_one-line_item.png" srcset="../images/list_skeleton_one-line_item@2x.png 2x" />
<img class="responsive-img" src="../images/list_skeleton_two-line_item.png" srcset="../images/list_skeleton_two-line_item@2x.png 2x" />

## Skeleton List Item

Skeleton List Item には、プロパティ パネルの `Line` プロパティの下にある標準の[リスト](list.md)と同じ 3 つのプリセット タイプ (Header、One-line、Two-line) があります。

<img class="responsive-img" src="../images/list_skeleton_item_header.png" srcset="../images/list_skeleton_item_header@2x.png 2x" />
<img class="responsive-img" src="../images/list_skeleton_item_one-line.png" srcset="../images/list_skeleton_item_one-line@2x.png 2x" />
<img class="responsive-img" src="../images/list_skeleton_item_two-line.png" srcset="../images/list_skeleton_item_two-line@2x.png 2x" />

## List Item の領域

Skeleton List Item には、標準 [List](list.md) のような 2 つの異なる領域があります: Primary Action と Secondary Action。

<img class="responsive-img" src="../images/list_skeleton_item_primary.png" srcset="../images/list_skeleton_item_primary@2x.png 2x" />
<img class="responsive-img" src="../images/list_skeleton_item_secondary.png" srcset="../images/list_skeleton_item_secondary@2x.png 2x" />

## Primary Action

Figma の 「Type」 プロパティには、5 つの交換可能な Skeleton List Item Primary Action があります。Skeleton List Item Primary Actions は、標準の [List Item](list-item.md) に似ています。List Item は、`Line` プロパティの下にある One-line と Two-line オプションをサポートしています。

|                              |                                                                                                  |                                                                                                                                            |
| ---------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Avatar + Label + Description | <img class="responsive-img" src="../images/list_skeleton_item_primary1.png" srcset="../images/list_skeleton_item_primary1@2x.png 2x" />     |                                                                                                                                            |
| Checkbox + Label               | <img class="responsive-img" src="../images/list_skeleton_item_primary2.png" srcset="../images/list_skeleton_item_primary2@2x.png 2x" />   |  Primary Action の Checkbox にはラベルを付けることができないため、Figma のレイヤー パネルで前後のラベルがオフになっており、この設定は変更するべきではありません。|
| Icon + Label + Desc | <img class="responsive-img" src="../images/list_skeleton_item_primary3.png" srcset="../images/list_skeleton_item_primary3@2x.png 2x" />   |                                                                                                                                            |
| Label + Progress          | <img class="responsive-img" src="../images/list_skeleton_item_primary4.png" srcset="../images/list_skeleton_item_primary4@2x.png 2x" />   | |                                                                                                                                            |
| Label | <img class="responsive-img" src="../images/list_skeleton_item_primary5.png" srcset="../images/list_skeleton_item_primary5@2x.png 2x" />     |                                                                                                                                            |

## Figma の Secondary Action

Skeleton List Item の Secondary Action は、`Symbol Overrides` として利用可能な標準の [List Item](list-item.md) からの対応物で可能なすべてのシナリオを含みます。Figma では、すべてのアクションは間もなく追加される予定です。

|                  |                                                                                                    |                                                                                                                                       |
| ---------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Text と Icon            | <img class="responsive-img" src="../images/list_skeleton_item_secondary3.png" srcset="../images/list_skeleton_item_secondary3@2x.png 2x" /> |                                                                                                                                       |

## 使用方法

リスト レイアウトを作成するときは、標準リスト項目と Skeleton List Item を組合さないようにします。データはすべてのリスト項目に存在するか、いずれにも存在しないため、2 つのタイプを同じレイアウト内で使用しないでください。

| 良い例                                                                         | 悪い例                                                                          |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| <img class="responsive-img" src="../images/list_skeleton_do1.png" srcset="../images/list_skeleton_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/list_skeleton_dont1.png" srcset="../images/list_skeleton_dont1@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [List](list.md)
- [List Item](list-item.md)

コミュニティに参加して新しいアイデアをご提案ください。
