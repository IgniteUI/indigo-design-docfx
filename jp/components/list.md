﻿---
title: List - デザイン システム コンポーネント
_description: List コンポーネント シンボルは、データ行の垂直コレクションをブラウスおよびインタラクションする方法を提供します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Figma, Figma to Angular, Figma からコードをエクスポート, Figma to HTML, Figma UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット, Adobe XD, Adobe XD to Angular, Adobe XD からコードをエクスポート, Adobe XD to HTML, Adobe XD UI キット
_language: ja
---

# List (リスト)

List コンポーネントは、ユーザーのブラウジングやテキスト、アイコン、画像、ボタンやアバターなどのコンポーネントを含むテンプレート項目の一連の垂直コレクションとのインタラクションを可能にします。List は、[Ignite UI for Angular List コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/list.html)と視覚的に同じものです。

## List のデモ

<img class="responsive-img" src="../images/list_demo.png" srcset="../images/list_demo@2x.png 2x" />

## タイプ

List は、One-line Item List (1 行項目のリスト) または Two-line Item List (2 行項目のリスト) のプリセットに挿入できます。どちらも最初は **10** 項目を含みます。

<img class="responsive-img" src="../images/list_one-line_item.png" srcset="../images/list_one-line_item@2x.png 2x" />
<img class="responsive-img" src="../images/list_two-line_item.png" srcset="../images/list_two-line_item@2x.png 2x" />

## Figma で List を使用

リストは、プライマリ データとセカンダリ アクションを含む情報をテキストとアイコンで表す連続した行のグループです。Figma では、Auto Layout を使用してリストを作成します。これにより、コンテンツに基づいてレイアウトと間隔が自動的に調整されます。 リストに必要な項目を減らすには、不要な項目を手動で非表示にする必要があります。より多くの項目を含むリストを設計するには、コンテキスト メニューから `Detach Instance` を選択して List コンポーネントをデタッチし、既存の項目を複製してリスト 項目を増やす必要があります。List Item は、常に一貫した水平幅と配置で相対 Header の下に配置し、項目間に隙間がないようにする必要があります。

|  レイヤー         | 使用                                                                                                                                                  |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🚫 componentVersion &nbsp;  | 禁止されたアイコンで開始する特定のロックされたレイヤー。 このレイヤーはコード生成に必要なため、削除または変更しないでください。 |
| 🚫 metadata   | 禁止されたアイコンで開始する特定のロックされたレイヤー。このレイヤーはコード生成に必要なため、削除または変更しないでください。 |
| List Header   | リスト ヘッダー 項目のインスタンス                                                                                                                    |
| 1 Item        | 1 行 / 2 行リスト項目のインスタンス                                                                                                                  |
| 2 Item        | 1 行 / 2 行リスト項目のインスタンス                                                                                                                  |
| 3 Item        | 1 行 / 2 行リスト項目のインスタンス                                                                                                                  |
| 4 Item        | 1 行 / 2 行リスト項目のインスタンス                                                                                                                  |
| 5 Item        | 1 行 / 2 行リスト項目のインスタンス                                                                                                                  |
| 6 Item        | 1 行 / 2 行リスト項目のインスタンス                                                                                                                  |
| 7 Item        | 1 行 / 2 行リスト項目のインスタンス                                                                                                                  |
| 8 Item        | 1 行 / 2 行リスト項目のインスタンス                                                                                                                  |
| 9 Item        | 1 行 / 2 行リスト項目のインスタンス                                                                                                                  |
| 10 Item       | 1 行 / 2 行リスト項目のインスタンス                                                                                                                  |

## Sketch で List (リスト) を使用

List は、本来インデックス付きの垂直コレクションとしてデータを表示する行のリピーターです。 項目に Smart Layout を使用しているため、1 つ以上のアイテムを ~No Symbol に設定することで、サイズを調整できます。より多くの項目を含むリストをデザインする必要がある場合、最も簡単な方法は、アートボードに List タイプのいずれかを挿入し、その上を右クリックして、コンテキスト メニューの下部にある `Detach from Symbol` を選択することです。新しく表示された _List/One-line Item List_ または _List/Two-line Item List_ グループの下のレイヤー パネルに、Figma とほぼ同じレイヤー構造が表示されるはずです (上記の表を参照)。2 つの違いは、`🌈 Background` の下部に 1 つの追加レイヤーが表示されることと、上部に `🚫 componentVersion` レイヤーが表示されないことの 2 点です。 

デタッチ後、メニューから、または単に既存のものを複製することによって、追加のヘッダーまたは項目を挿入できます。常に項目とヘッダーを同じ水平幅と配置で次々に配置し、項目間にギャップがないようにします。

## Adobe XD で List を使用

Adobe XD では、List コンポーネントをアートボードにドラッグした後、不要な項目を削除するだけで項目の数を減らしたり、既存の項目の 1 つを複製して項目の数を増やしたりできます。リストは項目を `Stack` に配置するため、項目を追加または削除すると、項目は自動的に垂直方向に整列および分散されます。リスト内の位置を変更するには、目的の位置まで上下にドラッグする必要があります。Sketch とは異なり、Adobe XD では、シンボルを破棄する必要はありません。

## スタイル設定

List は、さまざまなオプションを通じて背景色、アイコン、テキストなどの List 項目に使用するさまざまな要素、Avatar、Badge、Checkbox、Icon、Progress、Switch などのコンポーネントなどを柔軟にスタイル設定できます。

<img class="responsive-img" src="../images/list_styling.png" srcset="../images/list_styling@2x.png 2x" />

## 使用方法

List および List Items には固有のデザインがありますが、List は同様の項目のコレクションで、通常以下の共通テンプレートを使用します。従って同じリスト内で複数のテンプレートを組み合わせないようにします。要素を非表示にせずに、特定のコンテンツ タイプがない場合にプレースホルダーまたは空要素を表示します。テンプレートを構成する要素は垂直方向に継続的に形成する必要があるため、配置に注意が必要です。

| 良い例                                                                         | 悪い例                                                                          |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| <img class="responsive-img" src="../images/list_do1.png" srcset="../images/list_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/list_dont1.png" srcset="../images/list_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/list_do2.png" srcset="../images/list_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/list_dont2.png" srcset="../images/list_dont2@2x.png 2x" /> |
| <img class="responsive-img" src="../images/list_do3.png" srcset="../images/list_do3@2x.png 2x" /> | <img class="responsive-img" src="../images/list_dont3.png" srcset="../images/list_dont3@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [Avatar](avatar.md)
- [Badge](badge.md)
- [Checkbox](checkbox.md)
- [Sketch の Custom List Item](list-custom.md)
- [Icon](icon.md)
- [List Item](list-item.md)
- [Lists パターン](../patterns/lists.md)
- [Progress](progress.md)
- [Skeleton List](list-skeleton.md)
- [Switch](switch.md)

コミュニティに参加して新しいアイデアをご提案ください。
