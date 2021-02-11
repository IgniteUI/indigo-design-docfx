---
title: Material Icons - デザイン システム スタイリング
_description: Material Icons シンボルは、一般的な操作を指定する数百のアイコン シンボルを提供します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# Material Icons (マテリアル アイコン)

**Indigo.Design システム**の `🎨 Material Icons` ページには、[マテリアル リソース (英語)](https://material.io/resources/icons/?style=baseline) からインポートされた 150 個以上のアイコンと、[マテリアル システム アイコン ガイドライン (英語)](https://material.io/design/iconography/system-icons.html#design-principles) に従って **Indigo.Design システム**のチームによって作成された 250 個以上のアイコンがあります。Icon Buttons、List Items、Cards などで全般的な操作を記号として表示するためにアイコンを使用します。たとえば、Button ラベルでテキストの代わりにアイコンを使用します。アイコンのカラーはカラーの `Layer Styles` で定義されます。作成するデザインのアイコンのカラーの外観をカスタマイズできます。すべてのアイコンは [Ignite UI for Angular](https://jp.infragistics.com/products/ignite-ui-angular) でもサポートされます。

<img class="responsive-img" src="../images/icons_demo.png" srcset="../images/icons_demo@2x.png 2x" />

> [!Note]
> ExtraLarge、Large、Medium、Small の 4 つのサイズを持つ専用の [Icon](../components/icon.md) コンポーネントもあります。アートボードに直接挿入する代わりに、`🎨 Material Icons` で使用可能なグリフの 1 つを割り当てる記事、カスタム Cards、List Items などの複雑なレイアウトを作成する場合に使用します。

## 利用可能な Material Icon

**Indigo.Design システム**には 150 以上の Material Icon のセットがあり、マテリアル デザインのカテゴリに基づいて以下のようにグループ化されています。

- file
- communication
- action
- alert
- av
- content
- device
- image
- maps
- navigation
- notifications
- social
- toggle
- editor
- wb
- hardware

以下のカテゴリのために、元のマテリアル セットの拡張としてチームが作成した 250 以上の Material Icon のセットもあります。

- finance
- health
- logos
- programming
- social media
- content
- editor

これらのアイコンは、[GitHub](https://github.com/IgniteUI/material-icons-extended) でも利用できます。

## アイコンの追加

アイコンの定義済みコレクションを使用してコンポーネントおよびパターンにアイコンを分かりやすいシンボルとして追加できます。その他のアイコン セットの追加が可能ですが、現在のセットにその他の Material Icon を追加することもできます。[Ignite UI for Angular](https://jp.infragistics.com/products/ignite-ui-angular) で Material Icon がサポートされるため、アイコンを既存のセットに追加できます。次の簡単な手順に従います。

1.  ブラウザーで[マテリアル デザイン アイコン ツール (英語)](https://material.io/tools/icons)に移動します。
`copyright` などに使用するアイコンを検索し、[SVG](https://material.io/resources/icons/?search=copy&icon=copyright&style=baseline) としてダウンロードして属しているカテゴリを確認します。この場合、`Action` になります。Sketch で Indigo.Design ライブラリを開き、`🎨 Material Icons` ページへ移動し、左側にそのカテゴリがテキスト レイヤーとして存在するかどうかを確認します。存在しない場合は作成して、以下の手順を行います。`Action` カテゴリの `copyright` アイコンの例のように存在する場合、そのカテゴリの最も右側にあるアイコンを検索します。

    <img class="responsive-img" src="../images/icons_add1.png" srcset="../images/icons_add1@2x.png 2x" />


2.  このアイコンのシンボルをコピーして右へ移動します。名前は `...Copy` で終わり、レイヤー構造は以下のようになります。
    | レイヤー | 使用 |
    | ----------------------- | ----------------------------------------------------- |
    | カラー | アイコンの図形とカラーを定義します。 |
    | 図形 | 境界ボックスを定義する四角形 |
    <div class="divider--half"></div>
    <img class="responsive-img" src="../images/icons_add2.png" srcset="../images/icons_add2@2x.png 2x" />

3.  既存のアイコン図形をダウンロードした SVG と置き換えます。カラー レイヤーを選択し、`copyright` アイコンの SVG をその上にドラッグ アンド ドロップします。これは `copyright-24px` の新しいグループをレイヤー パネルに作成します。このグループを展開し、アイコン図形をグループ以外で四角形の図形レイヤー上にドラッグします。

    <img class="responsive-img" src="../images/icons_add3.png" srcset="../images/icons_add3@2x.png 2x" />

4.  新しいアイコン図形を移動した後、元のアイコン グリフおよびグループを削除します。次に、`copyright` シンボルで残したアイコン図形を選択し、名前を `Color` に変更し、外観を `grays.700` 塗りつぶしスタイルに設定する必要があります。

   <img class="responsive-img" src="../images/icons_add4.png" srcset="../images/icons_add4@2x.png 2x" />

5.  シンボル名を更新した後、他のアイコンと同じようにこのアイコンを使用できます。

    <img class="responsive-img" src="../images/icons_add5.png" srcset="../images/icons_add5@2x.png 2x" />

## その他のリソース

関連トピック:

- [Colors](colors.md)
- [Icon](../components/icon.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

