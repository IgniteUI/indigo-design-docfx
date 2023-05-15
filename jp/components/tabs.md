---
title: Tabs - デザイン システム コンポーネント
_description: Tabs コンポーネント シンボルは、情報の体系化や切り替えに使用されます。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット, Figma, Figma to Angular, Figma からコードをエクスポート, Figma HTML, Figma to HTML, Figma UI キット
_language: ja
---

# Tabs (タブ)

Tabs コンポーネントは、同じ情報を異なるビューに体系化、同様または関連のあるデータセット間の切り替えが可能です。Tabs は、[Ignite UI for Angular Tabs コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/tabs.html)と視覚的に同じものです。

## Tabs のデモ

<img class="responsive-img" src="../images/tabs_demo.png" srcset="../images/tabs_demo@2x.png 2x" />

## サイズ

Tabs には 2 つのサイズがあります。Short はデフォルトでテキストのみを表示し、オプションでプレフィックス アイコンとサフィックス アイコンを表示できます。Tall はさらに、テキストの上に 3 つ目のアイコンを追加できます。

<img class="responsive-img" src="../images/tabs_short.png" srcset="../images/tabs_short@2x.png 2x" />
<img class="responsive-img" src="../images/tabs_tall.png" srcset="../images/tabs_tall@2x.png 2x" />

## レスポンシブ

Tabs は、幅を調整することで使用可能な水平方向のスペースを埋めるために Content Fit にすることも、スクロール ボタンを使用して多数のタブ項目をナビゲートすることで固定することもできます。これにより、同じ合計スペースで他のモードで通常可能なコンテンツよりも多くのコンテンツを入れることができます。

<img class="responsive-img" src="../images/tabs_content_fit.png" srcset="../images/tabs_content_fit@2x.png 2x" />
<img class="responsive-img" src="../images/tabs_fixed.png" srcset="../images/tabs_fixed@2x.png 2x" />

## Tabs の量

ほとんどのケースでは、Tabs に 2 つ ~ 5 つ の項目を含める必要があります。Figma で項目を削除するには、ネストされた Tab 項目 コンポーネントをレイヤー パネルから非表示にするだけで、追加された自動レイアウトによってコンテンツが適切に調整されます。Sketch で同じことを行うには、項目のオーバーライドを ~No Symbol に設定すると、スマート レイアウトによって残りの項目が調整されます。Adobe XD で同じことを実行するには、不要な項目を削除し、Stack は残りの項目を配置します。ユースケースで 5 つ以上のタブが必要な場合、上記で説明した Fixed モードを検討してください。

<img class="responsive-img" src="../images/tabs_2.png" srcset="../images/tabs_2@2x.png 2x" />
<img class="responsive-img" src="../images/tabs_3.png" srcset="../images/tabs_3@2x.png 2x" />
<img class="responsive-img" src="../images/tabs_4.png" srcset="../images/tabs_4@2x.png 2x" />
<img class="responsive-img" src="../images/tabs_5.png" srcset="../images/tabs_5@2x.png 2x" />

## 短いバー コンテンツ

Short Bar にはデフォルトでテキスト コンテンツが含まれます。 Figma では、ネストされたすべての Tab Item を選択し、プロパティ パネルから「Label」、「Prefix Icon」、および 「Suffix Icon」 をオン/オフすることで、ラベルと 2 つのアイコンを表示/非表示にすることができます。 Sketch では、代わりにアイコンを表示する場合は、マテリアル アイコンを `🔣 Icon` オーバーライドに割り当て、バーのすべてのタブで `🏷️ Label` を ~No Symbol に設定する必要があります。Adobe XD で同様の結果を得るには、`🔣 Icon` または `🏷️ Label` レイヤーが存在し、表示されていることと、バーのすべてのタブでもう 1 つが削除されていることを確認してください。

<img class="responsive-img" src="../images/tabs_text.png" srcset="../images/tabs_text@2x.png 2x" />
<img class="responsive-img" src="../images/tabs_icons.png" srcset="../images/tabs_icons@2x.png 2x" />

## タブ項目の状態

タブ項目は、Active、Inactive、および Disabled の状態をサポートします。Figma では、プロパティ パネルから 「State」 プロパティを使用して切り替えることができます。Sketch ではこれを `Symbol Overrides` で実現していますが、Adobe XD では `Component States` パラダイムを使用して簡単に状態を切り替えることができます。Tabs には、常に 1 つのアクティブなタブと、任意の数の非アクティブおよび無効なタブがあります。

<img class="responsive-img" src="../images/tabs_state.png" srcset="../images/tabs_state@2x.png 2x" />

## スタイル設定

Tabs は、テキストとアイコンの色、現在の選択をマークするインジケーターの色、およびアクティブ/インアクティブな背景色に使用できるオプションを通じて、基本的なスタイルの柔軟性を提供します。

<img class="responsive-img" src="../images/tabs_styling.png" srcset="../images/tabs_styling@2x.png 2x" />

## 使用方法

Tabs は情報の体系化に適してますが、ワークフローのデザインやロジカル シーケンスに基づいた操作には向いていません (チェックアウト プロセスや構成ウィザード)。短い Tabs を使用してアイコン タブとテキスト タブを同じメニューで組み合わせることはできません。2 つのコンテンツ モードのうち 1 つを選択し、バーのすべての項目に継続して使用します。

| 良い例                                                                         |悪い例                                                                          |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| <img class="responsive-img" src="../images/tabs_do1.png" srcset="../images/tabs_do1@2x.png 2x" />|<img class="responsive-img" src="../images/tabs_dont1.png" srcset="../images/tabs_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/tabs_do2.png" srcset="../images/tabs_do2@2x.png 2x" />|<img class="responsive-img" src="../images/tabs_dont2.png" srcset="../images/tabs_dont2@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [Details](../patterns/details.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
