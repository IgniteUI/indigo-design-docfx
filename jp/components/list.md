---
title: List - デザイン システム コンポーネント
_description: List コンポーネント シンボルは、データ行の垂直コレクションをブラウスおよびインタラクションする方法を提供します。
_keywords: デザイン システム, Sketch, Ignite UI for Angular, コンポーネント, UI ライブラリ, ウィジェット
_language: ja
---

## List

List コンポーネント シンボルは、ユーザーのブラウジングやテキスト、アイコン、画像、ボタンやアバターなどのコンポーネントを含むテンプレート項目の一連の垂直コレクションとのインタラクションを可能にします。List は、[Ignite UI for Angular List コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/list.html)と視覚的に同じものです。

### List デモ

![](../images/list_demo.png)

### シンボルからデタッチ

List は、本来インデックス付きの垂直コレクションとしてデータを表示する行のリピーターです。従って `Generic List` をアートボードにドラッグして一番上を右クリックし、コンテキスト メニューの下にある`シンボルからデタッチ` オプションを選択します。新しく表示される `List/Generic List` グループの下のレイヤー パネルには以下があります。

> [!Note]
> | レイヤー | 使用 |
> | ----------------------------- | ------------------------------- |
> | 🚫 igx-list | 禁止されたアイコンで開始する特定のロックされたレイヤー。このレイヤーはコード生成に必要なため、削除または変更しないでください。 |
> | List Header | リスト ヘッダー項目のインスタンス |
> | 1 Item | 2 行リスト項目のインスタンス |
> | 2 Item | 2 行リスト項目のインスタンス |
> | 🌈 Background | リストの背景色を定義 |
> | 🕹️Data | データ バインドのコード生成で使用されます。 |

デタッチ後に Sketch メニューから追加でヘッダーまたは項目を挿入、または既存のシンボルを複製します。常に項目とヘッダーを同じ水平幅と配置で次々に配置し、項目間に垂直のギャップがないようにします。

### List 項目のタイプ

List 項目には 3 つのプリセット タイプがあります。グループの見出しを定義する Header、1 行のテキストを含む短い項目の One-line、プライマリおよびセカンダリ テキストをサポートするより高さのある項目の Two-line。

![](../images/list_item_header.png)
![](../images/list_item_one-line.png)
![](../images/list_item_two-line.png)

### List 項目の状態

One-line および Two-line List 項目は**インアクティブ**状態 (標準状態のインアクティブと選択状態のアクティブ) をサポートします。Header List 項目は選択できないため、そのような States はサポートしません。

![](../images/list_item_inactive.png)
![](../images/list_item_active.png)

### List 項目の領域

List 項目は、2 つの異なる領域があります。Primary Action は、非インタラクティブなコンテンツで Avatar やテキストなどをレイアウトします。Secondary Action には List 項目に関連するクイック アクションがあります。Primary と Secondary 操作は有効なリスト項目テンプレートを形成し、常に List 項目全体で使用されます。

![](../images/list_item_primary.png)
![](../images/list_item_secondary.png)

### List 項目プライマリ アクション

以下は置き換え可能な List 項目プライマリ アクションです。

|                              |                                        |
| ---------------------------- | -------------------------------------- |
| Avatar + Description + Label | ![](../images/list_item_primary.png)   |
| Avatar + Label               | ![](../images/list_item_primary2.png)  |
| Avatar + Label + Description | ![](../images/list_item_primary3.png)  |
| Description + Label          | ![](../images/list_item_primary4.png)  |
| Icon + Description + Label   | ![](../images/list_item_primary5.png)  |
| Icon + Label                 | ![](../images/list_item_primary6.png)  |
| Icon + Label + Description   | ![](../images/list_item_primary7.png)  |
| Label                        | ![](../images/list_item_primary8.png)  |
| Label + Description          | ![](../images/list_item_primary9.png)  |
| Label + Progress             | ![](../images/list_item_primary10.png) |

### List 項目セコンダリ アクション

以下は置き換え可能な List 項目セコンダリ アクションです。

|                  |                                         |
| ---------------- | --------------------------------------- |
| Badge            | ![](../images/list_item_secondary.png)  |
| Checkbox         | ![](../images/list_item_secondary2.png) |
| Icons            | ![](../images/list_item_secondary3.png) |
| Text             | ![](../images/list_item_secondary4.png) |
| Text + Icons     | ![](../images/list_item_secondary5.png) |
| Toggle           | ![](../images/list_item_secondary6.png) |
| Two-line Numbers | ![](../images/list_item_secondary7.png) |

### スタイル設定

List は、さまざまなオーバーライドで背景色、アイコン、テキストなどの List 項目に使用するさまざまな要素、Avatar、Badge、Chechbox、Icon、Progress、Switch などのコンポーネントなどスタイル設定に柔軟性があります。

![](../images/list_styling.png)

## 使用方法

List および List 項目には固有のデザインがありますが、List は同様の項目のコレクションで、通常以下の共通テンプレートを使用します。従って同じリスト内で複数のテンプレートを組み合わせないようにします。要素を非表示にせずに、特定のコンテンツ タイプがない場合にプレースホルダーまたは空要素を表示します。テンプレートを構成する要素は垂直方向に継続的に形成する必要があるため、配置に注意が必要です。

| いい例                      | 悪い例                        |
| --------------------------- | ----------------------------- |
| ![](../images/list_do1.png) | ![](../images/list_dont1.png) |
| ![](../images/list_do2.png) | ![](../images/list_dont2.png) |
| ![](../images/list_do3.png) | ![](../images/list_dont3.png) |

## その他のリソース

関連トピック:

- [Avatar](avatar.md)
- [Badge](badge.md)
- [Checkbox](checkbox.md)
- [Icon](icon.md)
- [Progress](progress.md)
- [Switch](switch.md)
- [Lists Pattern](lists.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

- [Indigo Design **GitHub** (英語)](https://github.com/IgniteUI/design-system-docfx)
