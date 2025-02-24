---
title: Input - デザイン システム コンポーネント
_description: Input コンポーネントは、文字列、数値、日付などユーザー データのコレクションが使用できます。
_keywords: デザイン システム, デザイン システム UX, UI キット, Figma, Figma to Angular, Figma からコードをエクスポート, Figma to HTML, Figma HTML, Figma UI キット, Ignite UI for Angular, Angular, Angular デザイン システム, Angular 用のデザイン キット
_language: ja
---

# Input (入力)

Input コンポーネントを使用して、文字列、さまざまなコンテキストに適した数値、日付、その他の値 (メールやパスワードなど) のユーザー データを収集します。Input は、[Ignite UI for Angular Input Group コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/input_group.html)と視覚的に同じものです。

## Input のデモ

<img class="responsive-img" src="../images/input_demo.png" srcset="../images/input_demo@2x.png 2x" />

## タイプ

Figma では、hint (ブール値プロパティ) の有無にかかわらず単純な入力と、searchbar のどちらかを選択できます。

<img class="responsive-img" src="../images/input_simple.png" srcset="../images/input_simple@2x.png 2x" />
`simple`
<img class="responsive-img" src="../images/input_hint.png" srcset="../images/input_hint@2x.png 2x" />
`hint`
<img class="responsive-img" src="../images/input_searchbar.png" srcset="../images/input_searchbar@2x.png 2x" />
`searchbar`

Figma では、3 つの異なるタイプから選択できます: 無地の背景でより構造化された認識の border スタイル、および入力を鮮やかな画像の上に配置して、コンテンツの読みやすさを向上させる場合に最も適した boxed スタイルです。

<img class="responsive-img" src="../images/input_simple.png" srcset="../images/input_simple@2x.png 2x" />
<img class="responsive-img" src="../images/input_border.png" srcset="../images/input_border@2x.png 2x" />
<img class="responsive-img" src="../images/input_box.png" srcset="../images/input_box@2x.png 2x" />

## 操作状態

Figma では、Input はデフォルトで Enabled 状態にあり、右側のプロパティ パネルから Disabled 状態に切り替えることができます。

<img class="responsive-img" src="../images/input_enabled.png" srcset="../images/input_enabled@2x.png 2x" />
`enabled`
<img class="responsive-img" src="../images/input_disabled.png" srcset="../images/input_disabled@2x.png 2x" />
`disabled`

## 状態

Input コンポーネントは、ユーザーの操作にあわせてさまざまな状態を経ます。**Idle (アイドル)**: コンテンツの代わりにプレースホルダーを表示します。**Idle & Hover (アイドルおよびホバー)** は、ユーザーがカーソルを合わせたときに入力がアクティブであることを示します。**Filled (塗りつぶし済み)**: ユーザーがコンテンツを入力し、入力から移動した後に表示されます。**Filled & Hover (塗りつぶし済みおよびホバー)** - コンテンツが入力された後、ユーザーが入力の上にマウスを置いたときに入力がアクティブであることを示します。**Focused (フォーカス済み)** は、ユーザーがアクティブに入力を行っていることを視覚的に示します。

<img class="responsive-img" src="../images/input_idle.png" srcset="../images/input_idle@2x.png 2x" />
`idle`
<img class="responsive-img" src="../images/input_idle&hover.png" srcset="../images/input_idle&hover@2x.png 2x" />
`idle & hover`
<img class="responsive-img" src="../images/input_filled.png" srcset="../images/input_filled@2x.png 2x" />
`filled`
<img class="responsive-img" src="../images/input_filled&hover.png" srcset="../images/input_filled&hover@2x.png 2x" />
`filled & hover`
<img class="responsive-img" src="../images/input_focused.png" srcset="../images/input_focused@2x.png 2x" />
`focused`

経験豊富なデザイナーは、ユーザー入力を制限して無効な状態を防止するために、検証スタイルを使用します。検証スタイルは、Input で Success (成功)、Warn (警告)、Error (エラー) を表示する洗練されたデザインを提供します。

<img class="responsive-img" src="../images/input_success.png" srcset="../images/input_success@2x.png 2x" />
`success`
<img class="responsive-img" src="../images/input_warning.png" srcset="../images/input_warning@2x.png 2x" />
`warn`
<img class="responsive-img" src="../images/input_error.png" srcset="../images/input_error@2x.png 2x" />
`error`

Figma では、右側のプロパティ パネルの 「State」 プロパティを使用して、状態とバリデーション状態を切り替えることができます。

## レイアウト

Input には特定の場合に入力 (@email.com サフィックス) を軽減するテキストの Prefix/Suffix やアイコンをサポートします。これによりキーストロークを減らし、予期されるコンテンツを明確にすることができます。Figma では、Prefix または Suffix を削除するには、プロパティ パネルでオンまたはオフに切り替えます。

<img class="responsive-img" src="../images/input_prefix.png" srcset="../images/input_prefix@2x.png 2x" />
<img class="responsive-img" src="../images/input_suffix.png" srcset="../images/input_suffix@2x.png 2x" />

## コンテンツ タイプ

各 Input コンポーネントには、テキスト、電子メール、パスワード、電話番号、数値、日付など、挿入される情報のタイプを指定する `Content Type` レイヤーが含まれています。入力フィールドにデータを入力後、対応する `Content Type` を設定して、デザインが正しく App Builder に解析されるようにすることが重要です。

## スタイル設定

Input には、背景と境界線/下線の色、およびコンテンツのプレフィックス、サフィックス、およびメイン領域のアイコンの色とテキスト スタイルによるスタイリングの柔軟性が備わっています。検証スタイルを変更するには、Indigo.Design ライブラリの各色変数を更新することをお勧めします。 

<img class="responsive-img" src="../images/input_styling.png" srcset="../images/input_styling@2x.png 2x" />

## 使用方法

Input のボックス タイプを使用して画像上にフォームを配置して読みやすくします。デザインの警告やエラー状態で Input を使用する際にヘルパー テキストを使用してユーザーにガイダンスを提供します。

| 良い例                                                                           | 悪い例                                                                            |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/input_do1.png" srcset="../images/input_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/input_dont1.png" srcset="../images/input_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/input_do2.png" srcset="../images/input_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/input_dont2.png" srcset="../images/input_dont2@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [Combo](combo.md)
- [Select](select.md)
- [Form パターン](../patterns/form.md)
- [User Profile パターン](../patterns/user-profile.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
