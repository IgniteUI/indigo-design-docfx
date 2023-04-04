---
title: Adobe XD レイアウトのベスト プラクティス - デザイン システム
_description: Adobe XD でレイアウトの作成のベスト プラクティスおよび Adobe XD とコード生成後の Angular アプリでレスポンシブ動作の結果になるサイズ変更構成のベスト プラクティス。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Adobe XD to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# レイアウトのベスト プラクティス

このトピックはアプリケーション レイアウトでコンポーネントの配置およびレスポンシブ アプリ デザインを実装するためにサイズ変更ルールの設定に関連するデザイン ガイダンスを提供します。以下のおすすめは、Adobe XD で指定したレスポンシブ動作を含む Angular アプリを生成できます。


## レイアウト
このセクションでは、Adobe XD で要素をグループ化して最適な結果を得る方法についてのガイダンスを提供します。 
ほとんどの場合、絶対レイアウト規則が適用されます。詳細については、[こちら](./best-layout-practices.md#レイアウト)を参照してください。

### スタック

Adobe XD が Sketch に提供する追加機能の 1 つに、スタックを使用して動的なデザインを作成するためにグループを使用する機能があります。 
スタックは、垂直または水平レイアウトを作成するオプションを提供し、パディングとマージンの間隔を決定することもでき、作成するレイアウトをより詳細に制御できます。

スタック方向は、フレックス行またはフレックス列を生成するかどうかを決定します。

行レイアウトはグループの `flex-direction: row` を生成します。

<img class="responsive-img" src="./images/stack-row-xd.png" />

列レイアウトはグループの `flex-direction: column` を生成します。

<img class="responsive-img" src="./images/stack-column-xd.png" />

パディングとマージンもグループに指定でき、DOM の関連要素の CSS としても生成されます。

## サイズ変更

このセクションは要素のサイズ変更を決定します。

要素のサイズ変更は、Adobe XD のレイアウト設定によって決定されます。
2 つのオプションがあります: Auto および Manual です。

Auto の場合、生成される要素はページに対して相対的にサイズ変更されます。ページ`のサイズとともに拡大/縮小します。

<img class="responsive-img" src="./images/auto-size-xd.png" />

Manual を使用すると、要素の絶対サイズがピクセルで指定されるように幅または高さを固定できます。

<img class="responsive-img" src="./images/fixed-size-xd.png" />

## 固定
このセクションは、固定方向が要素の位置にどのように影響するかを決定します。

固定は Manual Layout メニューからも指定できます。要素に異なる固定方向を設定でき、要素に相対位置または絶対位置があるかどうかに影響します。[Sketch ピン固定](./best-layout-practices-sketch.md#ピン固定)と同じルールが適用されます。 

<img class="responsive-img" src="./images/fixed-size-xd.png" />

## その他のリソース

関連トピック:

- [Input](components/input.md)
- [Bottom Navigation](components/bottom-nav.md)
- [Navbar](components/navbar.md)
- [Navigation Drawer](components/nav-drawer.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。


