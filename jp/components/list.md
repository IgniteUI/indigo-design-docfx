---
title: List - デザイン システム コンポーネント
_description: List コンポーネントは、データ行の垂直コレクションをブラウスおよびインタラクションする方法を提供します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Figma, Figma to Angular, Figma からコードをエクスポート, Figma to HTML, Figma HTML, Figma UI キット, Ignite UI for Angular, Angular, Angular デザイン システム, Angular 用のデザイン キット
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

リストは、プライマリ データとセカンダリ アクションを含む情報をテキストとアイコンで表す連続した行のグループです。Figma では、Auto Layout を使用してリストを作成します。これにより、コンテンツに基づいてレイアウトと間隔が自動的に調整されます。リストに必要な項目を減らすには、不要な項目を手動で非表示にする必要があります。より多くの項目を含むリストを設計するには、コンテキスト メニューから `Detach Instance` を選択して List コンポーネントをデタッチし、既存の項目を複製してリスト 項目を増やす必要があります。List Item は、常に一貫した水平幅と配置で相対 Header の下に配置し、項目間に隙間がないようにする必要があります。

|  レイヤー         | 使用                                                                                                                                                  |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🚫 componentVersion &nbsp;  | 禁止されたアイコンで開始する特定のロックされたレイヤー。このレイヤーはコード生成に必要なため、削除または変更しないでください。 |
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
- [Icon](icon.md)
- [List Item](list-item.md)
- [Lists パターン](../patterns/lists.md)
- [Progress](progress.md)
- [Skeleton List](list-skeleton.md)
- [Switch](switch.md)

コミュニティに参加して新しいアイデアをご提案ください。
