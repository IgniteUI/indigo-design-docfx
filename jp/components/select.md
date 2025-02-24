---
title: Select - デザイン システム コンポーネント
_description: Select コンポーネントは、ドロップダウンに配置された項目のリストからの単一選択できます。
_keywords: デザイン システム, デザイン システム UX, UI キット, Figma, Ignite UI for Angular, Figma to Angular, Angular, Angular デザイン システム, Figma からコードをエクスポート, Angular 用のデザイン キットデザイン システム, Figma HTML, Figma to HTML, Figma UI キット
_language: ja
---

# Select (選択)

Select コンポーネントを使用して、ユーザーがドロップダウンに配置された項目のスクロール可能なリストから 1 つのオプションを選択できるようにします。Select は、ユーザーがデータを送信するための入力の一種です。シナリオで複数の項目を選択する必要がある場合は、代わりに [Combo](combo.md) を使用する必要があります。Select は、[Ignite UI for Angular Select コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/select.html)と視覚的に同じものです。

## Select のデモ

Select は、現在の選択を含む入力と、項目を選択できるように表示されるドロップダウンを組み合わせて作成されます。

<img class="responsive-img" src="../images/select_demo.png" srcset="../images/select_demo@2x.png 2x" />

## Input タイプ

[Input](input.md) コンポーネントのように Select は border タイプ (単色背景でよりはっきりと表示)、より読みやすくするために鮮明な画像の上に配置する際に最適な box タイプから選択が可能です。

| Border | Box |
| ------- | ------- |
| <img class="responsive-img" src="../images/select_border.png" srcset="../images/select_border@2x.png 2x" /> | <img class="responsive-img" src="../images/select_box.png" srcset="../images/select_box@2x.png 2x" /> |

## 操作状態

Figma では、プロパティ パネルを使用して、border と box タイプの Select Input の両方を Disabled (無効) 状態に設定できます。

| Enabled 状態 | Disabled 状態 |
| ------- | ------- |
| <img class="responsive-img" src="../images/select_enabledstate.png" srcset="../images/select_enabledstate@2x.png 2x" /> | <img class="responsive-img" src="../images/select_disabledstate.png" srcset="../images/select_disabledstate@2x.png 2x" /> |

## 状態

ユーザーが Select を操作すると、その入力はさまざまな選択状態を経ます。**Idle (アイドル)** ー コンテンツの代わりにプレースホルダーがあります; ドロップダウンが開いているときの **Focused (フォーカス済み)**; ユーザーが選択を終了して次に進むときの **Filled (塗りつぶし済み)** です。柔軟性が向上したことにより、Hi-Fi プロトタイプへシームレスにフローする動的なインタラクション デザインの作成が可能です。

| Idle 状態 | Focused 状態 | Filled 状態 |
| ------- | ------- | ------- |
| <img class="responsive-img" src="../images/select_idle.png" srcset="../images/select_idle@2x.png 2x" /> | <img class="responsive-img" src="../images/select_focused.png" srcset="../images/select_focused@2x.png 2x" /> | <img class="responsive-img" src="../images/select_filled.png" srcset="../images/select_filled@2x.png 2x" /> |

経験豊富なデザイナーは、ユーザー入力を制限して無効な状態を防止するために、検証スタイルを使用します。Select の検証スタイルには統一感のある標準 [Input](input.md) があり、success (成功)、warning (警告)、error (エラー) を表示する洗練されたデザインを提供します。

| Success | Warn | Error |
| ------- | ------- | ------- |
| <img class="responsive-img" src="../images/select_success.png" srcset="../images/select_success@2x.png 2x" /> | <img class="responsive-img" src="../images/select_warning.png" srcset="../images/select_warning@2x.png 2x" /> |  <img class="responsive-img" src="../images/select_error.png" srcset="../images/select_error@2x.png 2x" /> |

Figma では、プロパティ パネルの `State` プロパティを使用して、すべての状態を切り替えることができます。

> [!NOTE]
> Figma では、Select コンポーネントで明示的に使用される `.Select Input` と呼ばれる別の基本コンポーネントがあります。

## Layout (レイアウト)

Select では、テキストとアイコンの組み合わせによるプレフィックスとサフィックスが豊富にサポートされています。Figma では、Prefix または Suffix を削除するには、プロパティ パネルでオンまたはオフに切り替えます。

| Prefix | Suffix | Prefix and Suffix |
| ------- | ------- | ------- |
| <img class="responsive-img" src="../images/select_prefix.png" srcset="../images/select_prefix@2x.png 2x" /> | <img class="responsive-img" src="../images/select_suffix.png" srcset="../images/select_suffix@2x.png 2x" /> |  <img class="responsive-img" src="../images/select_prefixandsuffix.png" srcset="../images/select_prefixandsuffix@2x.png 2x" /> |

## Dropdown (ドロップダウン)

Select は、利用可能なオプションを表示するために、その構造内で Dropdown コンポーネントを利用します。利用可能な構成の詳細については、[Dropdown](dropdown.md) ページをご覧ください。

<img class="responsive-img" src="../images/select_demo.png" srcset="../images/select_demo@2x.png 2x" />

## スタイル設定

Select は入力とドロップダウン項目でスタイルの組み合わせに柔軟性があります。入力テキスト要素の色と最終的な行のスタイルと色にはオプションがあります。ドロップダウン項目の場合、背景とテキストの色を変更できます。

<img class="responsive-img" src="../images/select_styling.png" srcset="../images/select_styling@2x.png 2x" />

## 使用方法

Select を使用する際に入力とドロップダウンは同じ幅で左右の境界線が一致する必要があります。Select がフォーカスされている場合、ユーザーには現在の選択内容が常に通知される必要があるため、ドロップダウンは入力の上または下に表示されますが、入力の上には決して表示されません。リストから項目を選択すると、ドロップダウンが非表示になります。一方、ドロップダウンは、Select 入力と同じ面にある他のコンテンツの上に配置する必要があります。Select は、展開パネルのようにコンテンツをプッシュしません。

| 良い例                                                                           | 悪い例                                                                            |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/select_do1.png" srcset="../images/select_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/select_dont1.png" srcset="../images/select_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/select_do2.png" srcset="../images/select_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/select_dont2.png" srcset="../images/select_dont2@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [Combo](combo.md)
- [Input](input.md)
- [Form パターン](../patterns/form.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
