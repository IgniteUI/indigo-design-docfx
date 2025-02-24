---
title: Material Icons - デザイン システム スタイリング
_description: Material Icons コンポーネントは、一般的な操作を指定する数百のアイコン シンボルを提供します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Ignite UI for Angular, Angular, Angular デザイン システム, Angular 用のデザイン キット, Figma, Figma to Angular, Figma からコードをエクスポート, Figma HTML, Figma to HTML, Figma UI キット
_language: ja
---

# Material Icons (マテリアル アイコン)

**Indigo.Design システム**に付属するマテリアル アイコンには、[マテリアル リソース](https://material.io/resources/icons/?style=baseline)からインポートされた 160 以上のアイコンと、[マテリアル システム アイコン ガイドライン](https://material.io/design/iconography/system-icons.html#design-principles)に従って **Indigo.Design システム**のチームによって作成された 360 個以上のアイコンがあります。Icon Buttons、List Items、Cards、など、で全般的な操作をシンボルとして表示するためにアイコンを使用します。たとえば、ラベルでテキストの代わりにアイコンを使用します。すべてのアイコンは [Ignite UI for Angular](https://jp.infragistics.com/products/ignite-ui-angular) でもサポートされます。

<img class="responsive-img" src="../images/icons_demo.png" srcset="../images/icons_demo@2x.png 2x" />
<div class="divider--half"></div>

- **Figma** では、`Icons` というラベルの付いた専用ページ上のすべてのアイコンにアクセスできます。アイコンの外観は、事前定義された `Color styles` を使用してカスタマイズでき、デザインのニーズに合わせてカラーを調整できます。

> [!Note]
> Large、Medium、Small の 3 つのサイズを持つ専用の [Icon](../components/icon.md) コンポーネントもあります。記事、カスタム カード、リスト項目などの複雑なレイアウトを作成するときに使用します。その後、プロパティ パネルの `Type` プロパティを使用して、使用可能なグリフの 1 つを割り当てることができます。

## 利用可能な Material Icon

**Indigo.Design システム**には 160 以上の Material Icon のセットがあり、マテリアル デザインのカテゴリに基づいて以下のようにグループ化されています。

- Action
- Alert
- AV
- Communication
- Content
- Device
- Editor
- File
- Hardware
- Image
- Maps
- Navigation
- Notification
- Places
- Social
- Toggle
- WB

以下のカテゴリのために、元のマテリアル セットの拡張としてチームが作成した 360 以上の Material Icon のセットもあります。

- Construction
- Content
- Editor
- Elections
- Finance
- Health
- Logos
- Programming
- Social Media

これらのアイコンは、[GitHub](https://github.com/IgniteUI/material-icons-extended) でも利用できます。

## アイコンの追加

アイコンの定義済みコレクションを使用してコンポーネントおよびパターンにアイコンを分かりやすいシンボルとして追加できます。その他のアイコン セットの追加が可能ですが、現在のセットにその他の Material Icon を追加することもできます。[Ignite UI for Angular](https://jp.infragistics.com/products/ignite-ui-angular) で Material Icon がサポートされるため、アイコンを既存のセットに追加できます。ブラウザーで [マテリアル デザイン アイコン ツール](https://fonts.google.com/icons?selected=Material+Icons)に移動します。`Copyright` などに使用するアイコンを検索し、[SVG](https://fonts.google.com/icons?selected=Material+Icons&icon.query=copyright) としてダウンロードして属しているカテゴリを確認します。この場合、`Action` になります。

### Figma で

1.  Figma でライブラリを開き、`Icons` ページに移動して、左側のサイドバーのレイヤー パネルに同じカテゴリがフレームとして存在するかどうかを確認します。存在しない場合は作成して、以下の手順を行います。`Action` カテゴリの `copyright` アイコンの例のように存在する場合、そのカテゴリの最も右側にあるアイコンを検索します。以下のようなものになります: アイコンはすべてのカテゴリでアルファベット順に並べられていることに注意してください。

    <img class="responsive-img" src="../images/icons_add1.png" srcset="../images/icons_add1@2x.png 2x" />

2.  このアイコンの Component をコピーして右へ移動します。その名前は複製したものと同じである必要があり、そのレイヤー構造は次のようになります: 

    | レイヤー                                                                             | 使用                                                                              |
    | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
    | Icon name  | 	アイコン名をコンポーネントとして定義します。|
    | Color      | アイコンのグラフィック視覚化であるコンポーネント内のネストされたアイコン図形。|
    | Text layer | アイコン名をフレーム内の追加のテキストレイヤーとして表示します。|

    <img class="responsive-img" src="../images/icons_add2.png" srcset="../images/icons_add2@2x.png 2x" />

3.  次に、既存のアイコン図形をダウンロードした SVG に置き換えたいので、Icon 名レイヤーを選択し、`copyright` アイコンを含む SVG をワークスペースにドラッグ アンド ドロップする必要があります。これにより、アイコン コンポーネントの上に SVG が配置され、見つけやすくなります。SVG をドロップすると、レイヤー パネルに新しいフレーム `copyright_black_24dp` が作成されます。これを展開して、目的のアイコンの図形を他のグループのすぐ外側に、ただし現在のフレーム内にドラッグする必要があります。その後、他の追加のグループを削除し、フレーム内にアイコン図形だけを残します。

    <img class="responsive-img" src="../images/icons_add3.png" srcset="../images/icons_add3@2x.png 2x" />

4.  次に、その中に `Vector` シェイプがある `copyright_black_24dp` フレームを選択し、そのフレームからコンポーネントを作成する必要があります。これを行うには 2 つの簡単なオプションがあります。フレームを右クリックして `Create component` (コンポーネントの作成) オプションを選択するか、右側のプロパティ パネルにある `Create component` アイコンをクリックします。次に、ベクター シェイプの名前を `Color` に変更し、右側のサイドバーの `Selection colors` を使用してそのカラーを `grays.700` に設定します。

    <img class="responsive-img" src="../images/icons_add4.png" srcset="../images/icons_add4@2x.png 2x" />
    <div class="divider--half"></div>

5.  それに応じてアイコンコンポーネント名を更新した後、それを複製したコンポーネントのコンポーネントと交換する必要があります。

    <img class="responsive-img" src="../images/icons_add5.png" srcset="../images/icons_add5@2x.png 2x" />

6. 最後に、変更をライブラリの更新として公開する必要があります。サブスクライブしたファイルでこれらの変更を確認するには、変更を確認して受け入れる必要があります。

## その他のリソース

関連トピック:

- [Colors](colors.md)
- [Icon](../components/icon.md)

コミュニティに参加して新しいアイデアをご提案ください。
