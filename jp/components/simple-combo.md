---
title: Simple Combo - デザイン システム コンポーネント
_description: Simple Combo コンポーネントを使用すると、コレクションから項目を 1 つ選択できます。
_keywords: デザイン システム, デザイン システム UX, UI キット, Figma, Figma to Angular, Figma からコードをエクスポート, Figma to HTML, Figma UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 向けデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット, Adobe XD, Adobe XD to Angular, Adobe XD からコードをエクスポート, Adobe XD to HTML, Adobe XD UI キット
_language: ja
---

# Simple Combo (シンプルなコンボ)

Simple Combo コンポーネントを使用して、事前定義された選択肢のリストからオプションを選択したり、独自の値を入力したりすることができます。ユーザーがドロップダウン矢印をクリックすると、オプションのドロップダウン リストが表示され、オプションの 1 つを選択するか、テキスト ボックスで値を検索できます。Combo は、[Ignite UI for Angular Single Select ComboBox コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/simple-combo.html)と視覚的に同じものです。

> [!Note]
> Combo には 2 つのレイアウト オプションがあります: 単一選択の Combo `(Simple Combo)` と [Combo (複数選択)](combo.md)。

## Simple Combo のデモ

Simple Combo には、現在の選択内容を含む入力と、事前定義されたドロップダウン リストからオプションを選択するために表示されるドロップダウンの 2 つの部分があります。

<img class="responsive-img" src="../images/simple-combo_demo.png" srcset="../images/simple-combo_demo@2x.png 2x" />

## Combo Input タイプ

Combo Input には border (境界線) タイプ (単色背景でよりはっきりと表示)、より読みやすくするために鮮明な画像の上に配置する際に最適な box (ボックス) タイプから選択が可能です。

| Border | Box |
| ------- | ------- |
| <img class="responsive-img" src="../images/simple-combo_border.png" srcset="../images/simple-combo_border@2x.png 2x" /> | <img class="responsive-img" src="../images/simple-combo_box.png" srcset="../images/simple-combo_box@2x.png 2x" /> |

## 操作状態

2 つの Simple Combo Input タイプはそれぞれ、**有効**または**無効**の状態で挿入できます。Figma では border と box のタイプを使用でき、プロパティ パネルから**オン**/**オフ**を `Disabled` 状態に切り替えることができます。

<img class="responsive-img" src="../images/combo_enabledstate.png" srcset="../images/combo_enabledstate@2x.png 2x" />
<img class="responsive-img" src="../images/combo_disabledstate.png" srcset="../images/combo_disabledstate@2x.png 2x" />

## State (状態)

ユーザーが Simple Combo を操作すると、その入力はさまざまな選択状態を経ます。**Idle (アイドル)** － コンテンツの代わりにプレースホルダーがあります; 入力が強調表示されているときの **Focused (フォーカス済み)**; ユーザーが選択を終了して次に進むときの **Filled (塗りつぶし済み)** です。柔軟性が向上したことにより、Hi-Fi プロトタイプへシームレスにフローする動的なインタラクション デザインの作成が可能です。

| Idle | Focused | Filled | 
| ------- | ------- | ------- |
| <img class="responsive-img" src="../images/simple-combo_idle.png" srcset="../images/simple-combo_idle@2x.png 2x" /> | <img class="responsive-img" src="../images/simple-combo_focused.png" srcset="../images/simple-combo_focused@2x.png 2x" /> | <img class="responsive-img" src="../images/simple-combo_filled.png" srcset="../images/simple-combo_filled@2x.png 2x" /> |

経験豊富なデザイナーは、ユーザー入力を制限して無効な状態を防止するために、検証スタイルを使用します。Combo の検証スタイルには統一感のある標準 [Input](input.md) があり、成功、警告、エラーを表示する洗練されたデザインを提供します。

| Success | Warning | Error | 
| ------- | ------- | ------- |
| <img class="responsive-img" src="../images/simple-combo_success.png" srcset="../images/simple-combo_success@2x.png 2x" /> | <img class="responsive-img" src="../images/simple-combo_warning.png" srcset="../images/simple-combo_warning@2x.png 2x" /> | <img class="responsive-img" src="../images/simple-combo_error.png" srcset="../images/simple-combo_error@2x.png 2x" /> |

Figma では、状態の変更はプロパティ パネルで行います。

> [!Note]
> Figma には、単一選択タイプと複数選択タイプの両方の Combo コンポーネントで明示的に使用される `.Combo Input` と呼ばれる別の基本コンポーネントがあります。Combo Input には、**オン**/**オフ**を切り替えることができる Prefix コンテナーがあります。

## Dropdown タイプ

Simple Combo に使用される Dropdown は、標準 [Dropdown](dropdown.md) コンポーネント同様にデスクトップやモバイルに適切なサイズがサポートされます。ドロップダウンはブール値プロパティから**オン**/**オフ**を切り替えることができ、入力に視覚的に影響を与える可能性がありますが、これは予期された動作です。

| Desktop | Mobile |
| ------- | ------- |
| <img class="responsive-img" src="../images/simple-combo_desktop.png" srcset="../images/simple-combo_desktop@2x.png 2x" /> | <img class="responsive-img" src="../images/simple-combo_mobile.png" srcset="../images/simple-combo_mobile@2x.png 2x" /> |

## Search Input (検索入力)

Simple Combo の検索はそれ自体が入力となります。

## Dropdown Items (ドロップダウン項目)

Simple Combo に使用される Dropdown は、ヘッダーと単一選択項目の 2 種類の項目をサポートします。ヘッダーを介して、項目をグループに体系化できます。Figma では、Dropdown は、1 つまたは複数の項目がレイヤー パネルから非表示になると、レイアウトを調整する自動レイアウト オプションを利用します。

<img class="responsive-img" src="../images/simple-combo_header.png" srcset="../images/simple-combo_header@2x.png 2x" />
<img class="responsive-img" src="../images/simple-combo_item.png" srcset="../images/simple-combo_item@2x.png 2x" />

## Dropdown Item の状態

Simple Combo 内のドロップダウン項目は、**Idle (アイドル)**、**Hover (ホバー)**、**Focused (フォーカス済み)** の 3 つの異なる状態をサポートします。**Disabled (無効)** および **Selected (選択済み)** の状態はブール値プロパティからオン/オフを切り替えることができます。Simple Combo Dropdown 項目の状態は、複数選択用のチェックボックス アイコンのない Combo Dropdown 項目と視覚的には同じです。

| Idle | Hover | Focused | Disabled |
| ---- | ----- | ------- | -------- |
| <img class="responsive-img" src="../images/simple-combo_item_idle.png" srcset="../images/simple-combo_item_idle@2x.png 2x" /> | <img class="responsive-img" src="../images/simple-combo_item_hover.png" srcset="../images/simple-combo_item_hover@2x.png 2x" /> | <img class="responsive-img" src="../images/simple-combo_item_focused.png" srcset="../images/simple-combo_item_focused@2x.png 2x" /> | <img class="responsive-img" src="../images/simple-combo_item_idle_disabled.png" srcset="../images/simple-combo_item_idle_disabled@2x.png 2x" /> |
| Selected | <img class="responsive-img" src="../images/simple-combo_item_selected.png" srcset="../images/simple-combo_item_selected@2x.png 2x" /> | <img class="responsive-img" src="../images/simple-combo_item_selected_hover.png" srcset="../images/simple-combo_item_selected_hover@2x.png 2x" /> | <img class="responsive-img" src="../images/simple-combo_item_selected_focused.png" srcset="../images/simple-combo_item_selected_focused@2x.png 2x" /> |

## スタイル設定

Simple Combo は入力とドロップダウン部分でスタイルの組み合わせに柔軟性があります。入力テキスト要素の色と最終的な行のスタイルと色にはオプションがあります。Dropdown の場合、背景色を変更するか、Search Input や背景色とテキスト色の項目など、Simple Combo Dropdown の項目に関連するさまざまなオプションを使用できます。

<img class="responsive-img" src="../images/simple-combo_styling.png" srcset="../images/simple-combo_styling@2x.png 2x" />

## 使用方法

Simple Combo を使用する際に入力とドロップダウンは同じ幅で左右の境界線が一致する必要があります。Simple Combo がフォーカスされたときのドロップダウンの表示は、Simple Combo が表示をトリガーしたあとに常にコンテンツの上に表示する必要があります。Combo は、コンテンツを展開パネルのようにはプッシュしません。

| 良い例                                                                           | 悪い例                                                                            |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/simple-combo_do1.png" srcset="../images/simple-combo_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/simple-combo_dont1.png" srcset="../images/simple-combo_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/simple-combo_do2.png" srcset="../images/simple-combo_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/simple-combo_dont2.png" srcset="../images/simple-combo_dont2@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [Combo](combo.md)
- [Dropdown](dropdown.md)
- [Form パターン](../patterns/form.md)
- [Input](input.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
