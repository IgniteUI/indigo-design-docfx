---
title: Form - デザイン システム パターン
_description: Form パターン シンボルは様々なデータ入力および表示要素を含みます。
_keywords: デザイン システム, Sketch, Ignite UI for Angular, パターン, UI ライブラリ, ウィジェット
_language: ja
---

## Form (フォーム)

Form パターンを使用すると、複数のユーザー入力が必要なアプリケーション シナリオを実装できます。全般的なフォームでデータ入力および表示コンポーネントが使用されます。

<img class="responsive-img" src="../images/form_demo.png" srcset="../images/form_demo@2x.png 2x" />

Form パターンはログインと登録、予約、アドレス、支払、およびコンテンツの追加のための新規などの全般的なシナリオのフォームを提供します。このフォームのレイアウトに含まれる Input、Checkbox、Button、Hyperlink、および Text のスタイル設定を使用できます。

### ログインと登録フォーム

ログイン フォームは簡易なコンテンツおよび操作を持つレイアウトがあり、またはより複雑なレイアウトと追加の操作を持つソーシャル ログイン フォームがあります。

<img class="responsive-img" src="../images/form_login-simple.png" srcset="../images/form_login-simple@2x.png 2x" />
<img class="responsive-img" src="../images/form_login-social.png" srcset="../images/form_login-social@2x.png 2x" />
<img class="responsive-img" src="../images/form_illustrated_forgot_password.png" srcset="../images/form_illustrated_forgot_password@2x.png 2x" />
<img class="responsive-img" src="../images/form_illustrated_account_type.png" srcset="../images/form_illustrated_account_type@2x.png 2x" />

登録フォームは簡易なコンテンツおよび操作を持つレイアウトがあり、またはより複雑なレイアウトと追加の操作を持つソーシャル メディア プロファイルの登録フォームがあります。

<img class="responsive-img" src="../images/form_register-simple.png" srcset="../images/form_register-simple@2x.png 2x" />
<img class="responsive-img" src="../images/form_register-social.png" srcset="../images/form_register-social@2x.png 2x" />

ログイン フォームにも水平レイアウトがあり、レイアウトの Button および Hyperlink コンテンツを更新した後に登録フォームをカスタマイズして表示できます。このレイアウトは幅が広い画面に最適です。フォームがその他のコンテンツとインラインに表示されます。

<img class="responsive-img" src="../images/form_login-horizontal.png" srcset="../images/form_login-horizontal@2x.png 2x" />
<img class="responsive-img" src="../images/form_register-horizontal.png" srcset="../images/form_register-horizontal@2x.png 2x" />

### 予約フォーム

予約フォームプリセットが 4 つあり、Dates + People は一般的なフォームです。Dates + People + Rooms はホテルの予約に使用できます。Airports + Dates + People は飛行機のチケットやその他の乗車券の予約に使用できます。Location + People + Rooms もホテル予約に使用できます。

<img class="responsive-img" src="../images/form_booking.png" srcset="../images/form_booking@2x.png 2x" />

### 新規フォーム

新しいフォームが 2 種類があります。Budget は新しい予算の作成のための情報フォーム、Expense は新しい経費の作成のための情報フォームです。

<img class="responsive-img" src="../images/form_new.png" srcset="../images/form_new@2x.png 2x" />

### 支払フォーム

支払いフォームは 2 種類あります。クレジット カードの支払いフォームおよびオンライン銀行で転送の支払フォームです。転送フォームは 4 つのレイアウトを提供します。Currency Exchange は為替換算のフィールドを含みます。Donation はチャリティに使用できるフォームです。Between Accounts は同じ銀行の複数アカウント間の送金に使用できます。Between Banks は他銀行への送金に使用できます。

支払フォームの 2 種類があります。クレジット カードの支払フォームおよびオンライン銀行で現金の支払フォームがあります。現金転送フォームは Inputs オーバーライドで選択可能な 4 つのレイアウトを提供します。 **Currency Exchange** は為替換算のフィールドを含みます。Donation は慈善のフォームです。Between Accounts は同じ銀行で複数のアカウントの間の送金に使用できます。Between Banks は他の銀行への送金に使用できます。

<img class="responsive-img" src="../images/form_card.png" srcset="../images/form_card@2x.png 2x" />
<img class="responsive-img" src="../images/form_cash.png" srcset="../images/form_cash@2x.png 2x" />

> [!Note]
> パターン シンボル内にネストされた図はコード生成できず、図自体を手動で挿入する必要があります。

> [!WARNING]
> 利用可能なフォーム パターンを挿入した後、Angular コードとして生成するには、`Detach from Symbol` をトリガーします。ただし、各コンポーネントをデタッチしないでください。

<img class="responsive-img" src="../images/form_detach.png" />

## その他のリソース

関連トピック:

- [Button](../components/button.md)
- [Checkbox](../components/checkbox.md)
- [Hyperlink](../components/hyperlink.md)
- [Input](../components/input.md)
- [Text](../components/text.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。


