---
title: Skeleton Card - デザイン システム コンポーネント
_description: The Skeleton Card is a representation of a Card component that is shown while data is being loaded in the background to provide content for a collection of cards.
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

スケルトン操作には、標準の [Card](card.md) と同じ 6 つのレイアウトがあります。これらは Sketch の `Smart Layout` としても定義されており、要素を ~No Symbol に設定して削除し、残りを目的のレイアウトに自動的に調整できます。

<img class="responsive-img" src="../images/card_skeleton_actions_buttons_icons.png" srcset="../images/card_skeleton_actions_buttons_icons@2x.png 2x" />

<img class="responsive-img" src="../images/card_skeleton_actions_icons_buttons.png" srcset="../images/card_skeleton_actions_icons_buttons@2x.png 2x" />

<img class="responsive-img" src="../images/card_skeleton_actions_just_buttons_icons.png" srcset="../images/card_skeleton_actions_just_buttons_icons@2x.png 2x" />

<img class="responsive-img" src="../images/card_skeleton_actions_just_buttons.png" srcset="../images/card_skeleton_actions_just_buttons@2x.png 2x" />

<img class="responsive-img" src="../images/card_skeleton_actions_just_icons_buttons.png" srcset="../images/card_skeleton_actions_just_icons_buttons@2x.png 2x" />

<img class="responsive-img" src="../images/card_skeleton_actions_just_icons.png" srcset="../images/card_skeleton_actions_just_icons@2x.png 2x" />

## Skeleton Card のレイアウト

Sketch で `Smart Layout` を使用することにより、Skeleton Card は、ある領域または別の領域内の特定の領域または要素を除外して、最初に同じコンポーネントで始まり、標準の [Card](card.md) と一致する無数の異なるバリアントを作成することにより、さまざまなレイアウトを作成できます。

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
