---
title: Bottom Navigation - デザイン システム コンポーネント
_description: Bottom Navigation コンポーネント シンボルは、シンプルなアプリケーション レベルのナビゲーションのデザインに使用します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Figma, Ignite UI for Angular, Figma to Angular, Angular, Angular デザイン システム, Figma からコードをエクスポート, Angular 用のデザイン キット, Figma HTML, Figma to HTML, Figma UI キット
_language: ja
---

# Bottom Navigation (ボトム ナビゲーション)

Bottom Navigation コンポーネント は、関連ビュー間のブラウジングが可能な項目を 5 項目以下で画面下に配置してアプリケーション レベルのナビゲーションを実装します。Bottom Navigation は、[Ignite UI for Angular Bottom Navigation コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/tabbar.html) と視覚的に同じものです。

## Bottom Navigation のデモ

<img class="responsive-img" src="../images/bottom-nav_demo.png" srcset="../images/bottom-nav_demo@2x.png 2x" />

## 項目数

Figma では、Bottom Navigation は自動レイアウトを使用しており、1 つ以上の項目がレイヤー パネルから非表示になっていると、それに応じて調整することができます。項目の最大数は 5 つに制限されており、より多くの項目またはビューを使用してアプリケーション レベルのナビゲーションを設計する必要がある場合は、代わりに [Navigation Drawer](nav-drawer.md) の使用を検討してください。

<img class="responsive-img" src="../images/bottom-nav_items2.png" srcset="../images/bottom-nav_items2@2x.png 2x" />

<img class="responsive-img" src="../images/bottom-nav_items3.png" srcset="../images/bottom-nav_items3@2x.png 2x" />

<img class="responsive-img" src="../images/bottom-nav_items4.png" srcset="../images/bottom-nav_items4@2x.png 2x" />

<img class="responsive-img" src="../images/bottom-nav_items5.png" srcset="../images/bottom-nav_items5@2x.png 2x" />

## 項目の状態

Bottom Navigation は、**Active**、Inactive、および Disabled の状態をサポートする項目で構成されています。Figma では、これらの項目はメインの Bottom Navigation コンポーネント内にネストされた `.Base components` です。変更するには、1 つまたは複数の項目を選択し、[プロパティ] パネルでそれらの `State` を変更する必要があります。Bottom Navigation には、常に 1 つのアクティブな項目と、任意の数の非アクティブおよび無効な項目があります。

<img class="responsive-img" src="../images/bottom-nav_item_state.png" srcset="../images/bottom-nav_item_state@2x.png 2x" />

## 項目コンテンツ テンプレート

Bottom Navigation 項目はデフォルトでアイコンとテキストの組み合わせとして提供されます。Figma では、1 つまたは複数の項目が選択されると、プロパティ パネルからブール演算を使用してラベルのオン / オフを切り替えることができます。

<img class="responsive-img" src="../images/bottom-nav_items3_icons.png" srcset="../images/bottom-nav_items3_icons@2x.png 2x" />

## スタイル設定

Bottom Navigation は、さまざまなオプションを通じて背景色、項目ラベル、アイコンの色を柔軟にスタイル設定できます。

<img class="responsive-img" src="../images/bottom-nav_styling.png" srcset="../images/bottom-nav_styling@2x.png 2x" />

## 使用方法

Bottom Navigation は常にその他のコンテンツの一番上に表示され、シャドウは大変重要な要素となります。レイヤーを画面コンテンツに配置し、シャドウは削除しないでください。

| 良い例                                                                                     |悪い例                                                                                      |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| <img class="responsive-img" src="../images/bottom-nav_do1.png" srcset="../images/bottom-nav_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/bottom-nav_dont1.png" srcset="../images/bottom-nav_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/bottom-nav_do2.png" srcset="../images/bottom-nav_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/bottom-nav_dont2.png" srcset="../images/bottom-nav_dont2@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [Navigation Drawer](nav-drawer.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
