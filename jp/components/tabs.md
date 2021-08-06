---
title: Tabs - デザイン システム コンポーネント
_description: Tabs コンポーネント シンボルは、情報の体系化や切り替えに使用されます。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# Tabs (タブ)

Tabs コンポーネントは、同じ情報を異なるビューに体系化、同様または関連のあるデータセット間の切り替えが可能です。Tabs は、[Ignite UI for Angular Tabs コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/tabs.html)と視覚的に同じものです。

## Tabs のデモ

<img class="responsive-img" src="../images/tabs_demo.png" srcset="../images/tabs_demo@2x.png 2x" />

## サイズ

Tabs には 2 つのサイズがあります: 高さのあるテキストを使用したアイコン、または短いテキストやアイコンを含みますが、同時に両方を含むことはないサイズです。

<img class="responsive-img" src="../images/tabs_short.png" srcset="../images/tabs_short@2x.png 2x" />
<img class="responsive-img" src="../images/tabs_tall.png" srcset="../images/tabs_tall@2x.png 2x" />

## レスポンシブ

Tabs は、幅を調整することで使用可能な水平方向のスペースを埋めるために Content Fit にすることも、スクロール ボタンを使用して多数のタブ項目をナビゲートすることで固定することもできます。これにより、同じ合計スペースで他のモードで通常可能なコンテンツよりも多くのコンテンツを入れることができます。

<img class="responsive-img" src="../images/tabs_content_fit.png" srcset="../images/tabs_content_fit@2x.png 2x" />
<img class="responsive-img" src="../images/tabs_fixed.png" srcset="../images/tabs_fixed@2x.png 2x" />

## Tabs の量

多くのケースで Tabs に 2 つ ～ 5 つのタブが必要になります。タブ項目を ~No Symbol に設定して削除できます。さらにタブが必要な場合は、流動モードを検討し、表示されているタブのみを表すことをお勧めします。

<img class="responsive-img" src="../images/tabs_2.png" srcset="../images/tabs_2@2x.png 2x" />
<img class="responsive-img" src="../images/tabs_3.png" srcset="../images/tabs_3@2x.png 2x" />
<img class="responsive-img" src="../images/tabs_4.png" srcset="../images/tabs_4@2x.png 2x" />
<img class="responsive-img" src="../images/tabs_5.png" srcset="../images/tabs_5@2x.png 2x" />

## 短いバー コンテンツ

短いバーにはデフォルトでテキスト コンテンツが付属しており、代わりにアイコンを表示する場合は、Material Icon を `🔣 Icon` オーバーライドに割り当て、バーのすべてのタブで `🏷️ Label` を ~No Symbol に設定する必要があります。

<img class="responsive-img" src="../images/tabs_text.png" srcset="../images/tabs_text@2x.png 2x" />
<img class="responsive-img" src="../images/tabs_icons.png" srcset="../images/tabs_icons@2x.png 2x" />

## タブ項目の状態

タブ項目は、Active、Inactive、および Disabled の状態をサポートします。Tabs には、常に 1 つの Active のタブと、任意の数の Inactive および Disabled のタブがあります。

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
