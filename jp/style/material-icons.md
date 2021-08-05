---
title: Material Icons - デザイン システム スタイリング
_description: Material Icons シンボルは、一般的な操作を指定する数百のアイコン シンボルを提供します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# Material Icons (マテリアル アイコン)

**Indigo.Design システム**に付属するマテリアル アイコンには、[マテリアル リソース](https://material.io/resources/icons/?style=baseline)からインポートされた 160 以上のアイコンと、 [マテリアル システム アイコン ガイドライン](https://material.io/design/iconography/system-icons.html#design-principles)に従って **Indigo.Design システム**のチームによって作成された 360 個以上のアイコンがあります。Icon Buttons、List Items、Cards 、など、で全般的な操作を記号-表示するためにアイコンを使用します。たとえば、 ラベルでテキストの代わりにアイコンを使用します。すべてのアイコンは [Ignite UI for Angular](https://jp.infragistics.com/products/ignite-ui-angular) でもサポートされます。

<img class="responsive-img" src="../images/icons_demo.png" srcset="../images/icons_demo@2x.png 2x" />

Sketch では、これらのグラフィックは `🎨 Material Icons` という名前の別のページにあり、それらのカラーは `Layer Styles` を介して定義され、作成中のデザインのアイコンの外観をカスタマイズできます。Adobe XD では、ライブラリ ファイルの左側の列の下部にある同じ名前のアートボードに配置され、左側の [Libraries] パネルの `Colors` を使用してカスタマイズできます。

> [!Note]
> ExtraLarge、Large、Medium、Small の 4 つのサイズを持つ専用の [Icon](../components/icon.md) コンポーネントもあります。アートボードに直接挿入する代わりに、`🎨 Material Icons` で使用可能なグリフの 1 つを割り当てる記事、カスタム Cards、List Items などの複雑なレイアウトを作成する場合に使用します。

## 利用可能な Material Icon

**Indigo.Design システム**には 160 以上の Material Icon のセットがあり、マテリアル デザインのカテゴリに基づいて以下のようにグループ化されています。

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

以下のカテゴリのために、元のマテリアル セットの拡張としてチームが作成した 360 以上の Material Icon のセットもあります。

- finance
- health
- logos
- programming
- social media
- content
- editor
- elections
- construction

これらのアイコンは、[GitHub](https://github.com/IgniteUI/material-icons-extended) でも利用できます。

## アイコンの追加

アイコンの定義済みコレクションを使用してコンポーネントおよびパターンにアイコンを分かりやすいシンボルとして追加できます。その他のアイコン セットの追加が可能ですが、現在のセットにその他の Material Icon を追加することもできます。[Ignite UI for Angular](https://jp.infragistics.com/products/ignite-ui-angular) で Material Icon がサポートされるため、アイコンを既存のセットに追加できます。ブラウザーで [マテリアル デザイン アイコン ツール](https://fonts.google.com/icons?selected=Material+Icons)に移動します。`Copyright` などに使用するアイコンを検索し、[SVG](https://fonts.google.com/icons?selected=Material+Icons&icon.query=copyright) としてダウンロードして属しているカテゴリを確認します。この場合、`Action` になります。

### Sketch で

1.  Sketch でライブラリを開き、`🎨 Material Icons` ページに移動して、同じカテゴリが左側のテキスト レイヤーとして存在するかどうかを確認します。存在しない場合は作成して、以下の手順を行います。`Action` カテゴリの `copyright` アイコンの例のように存在する場合、そのカテゴリの最も右側にあるアイコンを検索します。以下のようなものになります:

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

### Adobe XD で

1.  Adobe XD でライブラリを開き、`🎨 Material Icons` アートボードに移動して、同じカテゴリが左側のテキスト レイヤーとして存在するかどうかを確認します。存在しない場合は作成して、以下の手順を行います。`Action` カテゴリの `copyright` アイコンの例のように存在する場合、そのカテゴリの最も右側にあるアイコンを検索します。以下のようなものになります:

    <img class="responsive-img" src="../images/icons_add6.png" srcset="../images/icons_add6@2x.png 2x" />

2.  このアイコンのシンボルをコピーして右へ移動します。これにより、インスタンスが選択されたときに左上角に緑色のアウトラインが付いた白いひし形で示されるシンボルのインスタンスが作成されます。

    <img class="responsive-img" src="../images/icons_add7.png" srcset="../images/icons_add7@2x.png 2x" />

3.  このインスタンスのグループ化を解除し、2 つの新しいレイヤーから「_Overrides/Material Icons/action/copyright」という名前の新しいグループを作成します。
    | レイヤー | 使用 |
    | ----------------------- | ----------------------------------------------------- |
    | グループ ~ | アイコンの図形と色を定義する |
    | 図形 | 境界ボックスを定義する四角 |
    <div class="divider--half"></div>
    <img class="responsive-img" src="../images/icons_add8.png" srcset="../images/icons_add8@2x.png 2x" />

4. 次に、既存のアイコン図形をダウンロードした SVG に置き換えます。 そのため、古いグリフのある Group を選択し、その上に `copyright` アイコンが付いた SVG をドラッグアンドドロップして、2 つをすべての側に揃える必要があります。これにより、レイヤー パネルに新しいグループ `copyright-24px` が作成されます。このグループのすぐ外側で、長方形の Shape レイヤーの上にある目的のアイコン図形を展開してドラッグする必要があります。

    <img class="responsive-img" src="../images/icons_add9.png" srcset="../images/icons_add9@2x.png 2x" />

5.  新しいアイコン図形を移動した後、元のアイコン グリフおよびグループを削除します。次に、`copyright` 記号が付いた唯一のアイコン図形を選択し、[Libraries] パネルの [Colors] からその外観を `grays.700` に設定します。 

   <img class="responsive-img" src="../images/icons_add10.png" srcset="../images/icons_add10@2x.png 2x" />

6.  最後の手順は、_Overrides/Material Icons/action/copyright グループからコンポーネントを作成して、デザインの他のアイコン要素と同じように使用を開始できるようにすることです。

    <img class="responsive-img" src="../images/icons_add11.png" srcset="../images/icons_add11@2x.png 2x" />

## その他のリソース

関連トピック:

- [Colors](colors.md)
- [Icon](../components/icon.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
