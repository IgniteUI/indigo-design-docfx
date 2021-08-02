---
title: Material Icons - デザイン システム スタイリング
_description: Material Icons シンボルは、一般的な操作を指定する数百のアイコン シンボルを提供します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# Material Icons (マテリアル アイコン)

The material icons that come with the **Indigo.Design System** contain 160+ icons imported from [Material resources](https://material.io/resources/icons/?style=baseline) and 360+ icons crafted by the **Indigo.Design System** team according to the [Material system icons guidelines](https://material.io/design/iconography/system-icons.html#design-principles). Icons are used to symbolize common actions in Icon Buttons, List Items, Cards, etc., to reduce the amount of text that is normally used in a label, for example. All icons are also supported in [Ignite UI for Angular](https://jp.infragistics.com/products/ignite-ui-angular).

<img class="responsive-img" src="../images/icons_demo.png" srcset="../images/icons_demo@2x.png 2x" />

In Sketch, these graphics are on a separate page named `🎨 Material Icons`, and their colors are defined via the `Layer Styles`, letting you customize the appearance of an icon in the designs that you are crafting. In Adobe XD they are placed on an Artboard with the same name at the bottom of the left column of the library file, and customization can be achieved with the `Colors` from the Libraries panel on the left.

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

アイコンの定義済みコレクションを使用してコンポーネントおよびパターンにアイコンを分かりやすいシンボルとして追加できます。その他のアイコン セットの追加が可能ですが、現在のセットにその他の Material Icon を追加することもできます。[Ignite UI for Angular](https://jp.infragistics.com/products/ignite-ui-angular) で Material Icon がサポートされるため、アイコンを既存のセットに追加できます。Navigate your browser to the [Material Design Icons Tool](https://fonts.google.com/icons?selected=Material+Icons). Search for the icon you need, e.g. `copyright`, download it as an [SVG](https://fonts.google.com/icons?selected=Material+Icons&icon.query=copyright), and note the category to which it belongs. In this case, it would be `Action`. 

### Sketch で

1.  Open up the library in Sketch, navigate to the `🎨 Material Icons` page and look if that same category exists as a text layer on the left. If it does not, create it and follow the steps below. If it does, which is our case for the `copyright` icon from the `Action` category, just find the right-most icon from that category, and you should be looking at something like this.

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

1.  Open up the library in Adobe XD, navigate to the `🎨 Material Icons` artboard, and look if that same category exists as a text layer on the left. If it does not, create it and follow the steps below. If it does, which is our case for the `copyright` icon from the `Action` category, just find the right-most icon from that category, and you should be looking at something like this.

    <img class="responsive-img" src="../images/icons_add6.png" srcset="../images/icons_add6@2x.png 2x" />

2.  Now, duplicate the Symbol for this right-most icon and move it right a bit. This will create an instance of the symbol indicated by the white diamond shape with a green outline in the top-left corner when the instance is selected.

    <img class="responsive-img" src="../images/icons_add7.png" srcset="../images/icons_add7@2x.png 2x" />

3.  Ungroup this instance and create a new group from the two new layers, naming it "_Overrides/Material Icons/action/copyright".
    | レイヤー | 使用 |
    | ----------------------- | ----------------------------------------------------- |
    | グループ ~ | Defines the icon shape and color |
    | 図形 | Always a square that defines the icon bounding box |
    <div class="divider--half"></div>
    <img class="responsive-img" src="../images/icons_add8.png" srcset="../images/icons_add8@2x.png 2x" />

4.  Next, we want to replace the existing icon shape with the SVG we have downloaded, so we need to select the Group with the old glyph and drag and drop the SVG with the `copyright` icon on top of it, aligning the two on all sides. This will create a new group, `copyright-24px` in our layers panel, which we need to expand and drag the desired icon shape just outside of this group, but above the rectangular Shape layer.

    <img class="responsive-img" src="../images/icons_add9.png" srcset="../images/icons_add9@2x.png 2x" />

5.  Let's remove the old icon glyph now and the leftover group after moving the new icon shape out of it. Then, we have to select the one and only icon shape we have left with the `copyright` symbol and set its appearance to `grays.700` from Colors in the Libraries panel. 

   <img class="responsive-img" src="../images/icons_add10.png" srcset="../images/icons_add10@2x.png 2x" />

6.  The final step is to create a component from the _Overrides/Material Icons/action/copyright group to be able to start using it like any other icon element in our design.

    <img class="responsive-img" src="../images/icons_add11.png" srcset="../images/icons_add11@2x.png 2x" />

## その他のリソース

関連トピック:

- [Colors](colors.md)
- [Icon](../components/icon.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
