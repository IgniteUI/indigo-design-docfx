---
title: Navbar - デザイン システム コンポーネント
_description: Navbar コンポーネントは、アプリケーション内のユーザーの現在の位置を通知してシンプルなナビゲーション メカニズムを提供します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Ignite UI for Angular, Angular, Angular デザイン システム, Angular 用のデザイン キット, Figma, Figma to Angular, Figma からコードをエクスポート, Figma HTML, Figma to HTML, Figma UI キット
_language: ja
---

# NavBar (ナビバー)

Navbar コンポーネントを使用して、アプリケーション内の現在の位置を明確にし、単純なアプリケーション レベルのナビゲーションを実装します。アプリケーションで多くの操作を伴うより複雑なナビゲーションが必要な場合は、代わりに [Navigation Drawer](nav-drawer.md) または [Menu](../patterns/menu.md) の使用を検討してください。Navbar は常に画面の上部にあり、[Ignite UI for Angular Navbar コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/navbar.html)と視覚的に同じものです。

## Navbar のデモ

<img class="responsive-img" src="../images/navbar_demo.png" srcset="../images/navbar_demo@2x.png 2x" />

## タイプ

Navbar はメイン コンテンツ領域に影を落として残りのコンテンツから分離し、次の 2 つのアクション バリアントがあります: Icon Actions および Icon Button Actions。

<img class="responsive-img" src="../images/navbar_icon.png" srcset="../images/navbar_icon@2x.png 2x" />
<img class="responsive-img" src="../images/navbar_iconbutton.png" srcset="../images/navbar_iconbutton@2x.png 2x" />

## コンテンツのレイアウト

Navbar のコンテンツは、Left Action と Title (Figma の Left Action と Title が入った Content フレーム) で構成される左側の領域と、シンプルなイベントをトリガーする用の 最大 3 つの隣接するアイコン (またはアイコン ボタン) がある右側の領域に分割されます。Figma では、ブール値プロパティを使用して Nav Icon と Actions の表示を切り替えたり、ネストされた Icon と Icon Button コンポーネントに移動してアイコンを変更したり、レイヤー パネルから一部のアクションを非表示にしたりできます。その後、自動レイアウトによりコンテンツが自動的に調整されます。

<img class="responsive-img" src="../images/navbar_left&right.png" srcset="../images/navbar_left&right@2x.png 2x" />
<img class="responsive-img" src="../images/navbar_noright.png" srcset="../images/navbar_noright@2x.png 2x" />
<img class="responsive-img" src="../images/navbar_noleft.png" srcset="../images/navbar_noleft@2x.png 2x" />

## スタイル設定

Navbar には、タイトル、アイコン、境界線、および背景色に使用できるオプションを通じて、基本的なスタイルの柔軟性があります。

<img class="responsive-img" src="../images/navbar_styling.png" srcset="../images/navbar_styling@2x.png 2x" />

## 使用方法

Navbar の操作は、タイトルと重ならないように注意深く設定する必要があります。これは、1 つを除くすべてのアイコンを右側に非表示にし、3 つの点で表される 「その他」 アイコンを割り当てて、単純なメニューの表示をトリガーすることで回避できます。操作で 「その他」 アイコンを指定した場合、Navbar に通常配置するすべての操作をその下に統合し、Navbar にスタンドアロンの操作を配置しないようにします。

| 良い例                                                                             |悪い例                                                                              |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/navbar_do1.png" srcset="../images/navbar_do1@2x.png 2x" />|<img class="responsive-img" src="../images/navbar_dont1.png" srcset="../images/navbar_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/navbar_do2.png" srcset="../images/navbar_do2@2x.png 2x" />|<img class="responsive-img" src="../images/navbar_dont2.png" srcset="../images/navbar_dont2@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [Icon](icon.md)
- [Navigation Drawer](nav-drawer.md)
- [Menu パターン](../patterns/menu.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
