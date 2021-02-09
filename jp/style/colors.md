---
title: Colors - デザイン システム スタイリング
_description: Colors ライブラリ ページは、Indigo.Design システムのテーマを設定できます。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# Colors (カラー)

**Indigo.Design システム**の `🎨 Colors` ページには、ライブラリを一度にブランディンできる `primary`、`secondary`、`success`、`warn`、`error`、`info`、`grays`、`series` カラーのコレクションがあります。Colors の設定方法は、[Ignite UI for Angular テーマ](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/themes.html)と同じです。

<img class="responsive-img" src="../images/colors_palette.png" />

**Indigo.Design システム**のバージョン 3 は、さまざまなデータ可視化シナリオに最適化された 10 カラーの 2 つのコレクションを持つシリーズ パレットの概念を紹介します。両方のパレットは、ゲージの範囲を色付けする場合などに使用できるように、隣接するシリーズ カラーの間のコントラストを確保します。パレットの 1 つは完全に包括的になるように最適化されており、カラーを識別できない読者でも簡単に理解できるようになっています。 

## パレット生成

Sketch でプライマリ パレットを変更するには、Indigo.Design ライブラリ ファイルを開き、`View` / `Components` を選択します。Sketch メニューで 4 つのボタンのグループがあります。右側のボタンはパントーン ガイドのアイコンで、`Show Color Variables` を表します。

<img class="responsive-img" src="../images/colors-vars-sketch.png" srcset="../images/colors-vars-sketch@2x.png 2x"/>

以下のキャンバスで、ライブラリで定義したすべてのカラー変数を表す色付きの円のコレクションが表示されます。`primary` と呼ばれるカラーを選択し、右側のパネルで別のカラーを指定します。この変更はプライマリ パレットのすべてのバリアントと `Layer Styles` を更新するだけでなく、これらの変更をすべてのコンポーネントとパターンに自動的に反映します。

<img class="responsive-img" src="../images/colors_palette_updated.png"/>

<img class="responsive-img" src="../images/colors_palette_components.png"/>

ライブラリで `secondary` カラーや特別な意味を持つ他のカラーにも同じ手順を実行できます。

## カスタム カラーの作成

利用可能なカラーよりも多くのカラーが必要な場合があります。スコープが異なるカスタム カラーを作成するには、2 つの方法があります。

ライブラリを使用するすべてのプロジェクトで追加したカラーを使用したい場合、ライブラリの `Colors` ページに移動し、`series` パレットの下の空の `Custom` セクションにズームします。

<img class="responsive-img" src="../images/colors_custom1.png"/>

プロセスを完了するには以下の手順に従ってください。現在のプロジェクトのスコープ内でのみ追加したカラーにアクセスできるようにするには、プロジェクトのページから以下の手順を実行します。

1.  四角形を描画し、塗りつぶしを任意のカラーに設定します。

    <img class="responsive-img" src="../images/colors_custom2.png"/>

2.  選択内容に問題がなければカラー ピッカーの `Create Color Variable` ボタンを選択します。

    <img class="responsive-img" src="../images/colors_custom3.png"/>

3.  四角形の境界線に同じカラー変数を適用し、`cool grey` などの名前を付けます。

    <img class="responsive-img" src="../images/colors_custom4.png"/>

4.  カスタム カラー四角形を使用して 3 つのカラー スタイルを作成する必要があります: 塗りつぶしのみのスタイル、境界線のみのスタイル、両方に名前を付けるスタイル。

    <img class="responsive-img" src="../images/colors_custom5.png"/>

5.  これでカスタム カラーがカラー変数として表示され、コンポーネントおよびパターンのオーバーライドに表示されます。

## その他のリソース

関連トピック:

- [Elevation](elevation.md)
- [Typography](typography.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
