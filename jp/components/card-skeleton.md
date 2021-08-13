---
title: Skeleton Card - デザイン システム コンポーネント
_description: Skeleton Card は、カードのコレクションにコンテンツを提供するためにデータがバックグラウンドで読み込まれているときに表示される Card コンポーネントです。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# Skeleton Card (スケルトン カード)

Skeleton Card コンポーネントを使用して、標準の情報と同じタイプの情報をレイアウトしますが、現時点でデータが存在しない場合のアプリケーションの状態も示します。 たとえば、データがリモート データ ソースから読み込まれる際、接続が不足しているか、時間がかかる場合などです。Skeleton Card は、既知のレイアウトの [Card](card.md) を視覚的に表したものですが、表示するデータはありません。

## Skeleton Card のデモ

<img class="responsive-img" src="../images/card_skeleton_demo.png" srcset="../images/card_skeleton_demo@2x.png 2x" />

## 領域

Skeleton Card は、標準の [Card](card.md) の `image` (画像)、`header` (ヘッダー)、`body` (本文)、および `actions` (操作) など、同じ 4 つの領域をサポートしています。  

## 画像と本文

スケルトン画像と本文領域は、ショートカットの配列、標準の [Card](card.md) で使用可能なマップもカバーする画像、または段落のいずれかのオーバーライドをサポートします。

<img class="responsive-img" src="../images/card_skeleton_media.png" srcset="../images/card_skeleton_media@2x.png 2x" />

<img class="responsive-img" src="../images/card_skeleton_body.png" srcset="../images/card_skeleton_body@2x.png 2x" />

## ヘッダー

スケルトン ヘッダーは、標準の [Card](card.md) のヘッダーと一致しています。

<img class="responsive-img" src="../images/card_skeleton_header.png" srcset="../images/card_skeleton_header@2x.png 2x" />

## 操作

スケルトン操作には、標準の [Card](card.md) と同じ 6 つのレイアウトがあります。They are also defined with a smart layout in Sketch, letting you remove elements by setting them to ~No Symbol and have the rest automatically adjust to the desired layout. In Adobe XD, the use of a Stack lets you achieve the same when you remove unnecessary components.

<img class="responsive-img" src="../images/card_skeleton_actions_buttons_icons.png" srcset="../images/card_skeleton_actions_buttons_icons@2x.png 2x" />

<img class="responsive-img" src="../images/card_skeleton_actions_icons_buttons.png" srcset="../images/card_skeleton_actions_icons_buttons@2x.png 2x" />

<img class="responsive-img" src="../images/card_skeleton_actions_just_buttons_icons.png" srcset="../images/card_skeleton_actions_just_buttons_icons@2x.png 2x" />

<img class="responsive-img" src="../images/card_skeleton_actions_just_buttons.png" srcset="../images/card_skeleton_actions_just_buttons@2x.png 2x" />

<img class="responsive-img" src="../images/card_skeleton_actions_just_icons_buttons.png" srcset="../images/card_skeleton_actions_just_icons_buttons@2x.png 2x" />

<img class="responsive-img" src="../images/card_skeleton_actions_just_icons.png" srcset="../images/card_skeleton_actions_just_icons@2x.png 2x" />

## Skeleton Card のレイアウト

Through the use of a smart layout in Sketch and a Stack in Adobe XD, the Skeleton Card can produce various layouts by excluding certain areas or elements to allow the creation of a variety of cards based upon the same Component initially in a similar way like the standard [Card](card.md) does.

<img class="responsive-img" src="../images/card_skeleton_demo.png" srcset="../images/card_skeleton_demo@2x.png 2x" />

## 使用方法

複数のカードでレイアウトを作成する場合は、標準カードとスケルトン カードを組み合わせないでください。データはすべてのカードに存在するか、いずれにも存在しないため、2 つのタイプを同じグリッド レイアウト内で使用しないでください。

| 良い例                                                                         |悪い例                                                                          |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| <img class="responsive-img" src="../images/card_skeleton_do.png" srcset="../images/card_skeleton_do@2x.png 2x" /> | <img class="responsive-img" src="../images/card_skeleton_dont.png" srcset="../images/card_skeleton_dont@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [Card](card.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
