---
title: はじめてのアートボード作成
_description: Indigo Design ライブラリを使用して Sketch で登録画面のアートボードを作成する方法。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
---

# はじめてのアートボード作成

このトピックは、Indigo Design ライブラリを使用して登録画面の Sketch アートボードを作成する方法を紹介します。

<div class="divider--half"></div>
<img class="responsive-img" src="images/getting-started7.png" srcset="images/getting-started7@2x.png 2x" />
<div class="divider--half"></div>
<div class="divider--half"></div>
<div class="divider--half"></div>
<div class="divider--half"></div>
<div class="divider--half"></div>

## 前提条件

[Titillium Web Font][1] をコンピューターにインストールしてください。Indigo Design ライブラリのテキストはそのフォントを使用します。

## 詳細手順

### 1.Indigo Design ライブラリを Sketch に追加

1.  [Indigo Design ライブラリ](https://cloud.indigo.design/home)をダウンロードします。

    以下の 3 つの Sketch ファイルを含みます。

    - **Indigo-Styling**  
      Colors、Elevation、Material Icons、および Typography などのすべてのスタイル アセット。

    - **Indigo-Components**  
      デザインを構築するコンポーネントのセット。  
      Overrides セクションで Ignite UI for Angular およびコード生成エンジンと互換性のあるプリセットを選択できます。

    - **Indigo-Patterns**  
      アプリケーション レイアウトをガイドするコンポーネントに含まれるパターンのライブラリ。

2.  Mac で Sketch アプリケーションを開き、Apple メニューから Sketch 項目をクリックして Preferences を選択します。

3.  次のダイアログで **Libraries** タブを選択して **Add Library...** ボタンをクリックします。

4.  ライブラリをダウンロードしたフォルダーへ移動します。

5.  ライブラリを 3 つ選択して **Open** をクリックします。

6.  **Preferences** ダイアログのリストで表示され、すべてチェックされていることを確認します。

  <div class="divider--half"></div>
  <img class="responsive-img" src="images/creating_an_artboard_2.png" />
  <div class="divider--half"></div>
  <div class="divider--half"></div>
  <div class="divider--half"></div>
  <div class="divider--half"></div>
  <div class="divider--half"></div>

上記の画像ではライブラリが Sketch クラウドに表示されており、バージョン 57 以降を実行している場合はSketch でこの方法を代替手段として使用できます。設定するには Styling、Components、Patterns を順番に開き、各ファイルを Sketch クラウドに保存します。Indigo.Design をクラウド ライブラリとして設定する方法についての詳細は、[この Medium 記事 (英語)](https://medium.com/ignite-ui/using-indigo-design-with-sketch-cloud-libraries-70533bca00f8) を参照してください。ライブラリが正しく追加されると、Sketch の **Insert** メニューの **Symbols** セクションに表示されます。

### 2.アートボードの作成

1.  Mac で Sketch アプリケーションで新しいファイルを作成します。
2.  アートボードのサイズを選択します。  
    `A` キーを押して、右パネルからアートボードのサイズを選択します。  
    この例は縦長の向き (414x896) の iPhone 11 に対象します。このプリセット アートボードが表示されない場合、パネルの上のドロップダウンから Apple Devices を選択します。

  <div class="divider--half"></div>
  <img class="responsive-img" src="images/getting-started-artboard.png" />
  <div class="divider--half"></div>
  <div class="divider--half"></div>
  <div class="divider--half"></div>
  <div class="divider--half"></div>
  <div class="divider--half"></div>

### 3.コンポーネントを追加してカスタマイズ

**Insert** メニューを使用して Indigo Design ライブラリからコンポーネントを追加して、右パネルでカスタマイズできます。

以下は例の画面を作成する手順です。

1.  **Navbar を追加します。**

    1.  **Insert** メニューから Indigo-Components > Navigation > Navbar を選択します。
    2.  アートボードの上側に配置し、すべての利用可能な幅に合わせるために引き伸ばします。
    3.  右側のパネルの Resizing セクションで、アートボードの上部にピン固定し、高さを固定します。
    4.  Overrides セクションで Type を ~Title に設定し、Text を Sign Up に設定します。

    <div class="divider--half"></div>
    <img class="responsive-img" src="images/getting-started0.png" srcset="images/getting-started0@2x.png 2x" />
    <div class="divider--half"></div>
    <div class="divider--half"></div>
    <div class="divider--half"></div>
    <div class="divider--half"></div>
    <div class="divider--half"></div>

2.  **背景色を追加します。**  
     `R` キーを押して長方形をドラッグします。ナビゲーション バーの下の利用可能な領域を塗りつぶすようにサイズ変更され、その下にレイヤーとして配置されます。長方形が選択されると、Appearance の下の右パネルに Layer Styles ドロップダウンが表示されます。Indigo-Styling > Colors > primary.100 を選択します。

    <div class="divider--half"></div>
    <img class="responsive-img" src="images/getting-started1.png" srcset="images/getting-started1@2x.png 2x" />
    <div class="divider--half"></div>
    <div class="divider--half"></div>
    <div class="divider--half"></div>
    <div class="divider--half"></div>
    <div class="divider--half"></div>

3.  **フォームの背景を追加します。**

    1.  もう一度 `R` キーを押して、サイズ 280 x 378 の長方形をドラッグします。
    2.  以下のスタイルを割り当てます: Indigo-Styling > Colors > white
    3.  アートボードの中央に配置します。

    <div class="divider--half"></div>
    <img class="responsive-img" src="images/getting-started2.png" srcset="images/getting-started2@2x.png 2x" />
    <div class="divider--half"></div>
    <div class="divider--half"></div>
    <div class="divider--half"></div>
    <div class="divider--half"></div>
    <div class="divider--half"></div>

4.  **フォームのタイトルを追加します。**

    1.  `T` キーを押して白い長方形の上にテキスト要素を追加し、「Start Budgeting」 と入力します。
    2.  上記のにある長方形に色を割り当てたときと同様に、以下のタイポグラフィ スタイルを割り当てます: Indigo-Styling > H4 Headline > Primary Style 
    3.  白い長方形の上に配置します。左と上に 16px スペースを設定します。

    <div class="divider--half"></div>
    <img class="responsive-img" src="images/getting-started3.png" srcset="images/getting-started3@2x.png 2x" />
    <div class="divider--half"></div>
    <div class="divider--half"></div>
    <div class="divider--half"></div>
    <div class="divider--half"></div>
    <div class="divider--half"></div>

5.  **姓名の入力を追加します。**

    1.  **Insert** メニューから Indigo-Components > Inputs > Input > Line を選択します。
    2.  タイトルの下に配置します。左上に 16px を設定します。
    3.  幅を 116px に設定します。
    4.  この入力を複製します。
    5.  新しい入力を元の入力に配置し、その間に 16px を設定します。
    6.  両方の入力の State を ~Dark/Filled に設定します。
    7.  Label を "First Name" および "Last Name" に設定し、Input Text を "Eliza" および "Morales" に設定します。

    <div class="divider--half"></div>
    <img class="responsive-img" src="images/getting-started4.png" srcset="images/getting-started4@2x.png 2x" />
    <div class="divider--half"></div>
    <div class="divider--half"></div>
    <div class="divider--half"></div>
    <div class="divider--half"></div>
    <div class="divider--half"></div>

6.  **ユーザー名およびパスワードの入力を追加します。**

    1.  2 つの Line Input を挿入します。
    2.  前の手順で作成したものと、お互いに 16px の垂直間隔になるように下に配置します。
    3.  幅全体に引き伸ばし、両方の側に 16px スペースを設定します。
    4.  State を ~Dark/Filled に設定します。
    5.  Label を "Username" および "Password" に設定し、Input Text を "Leaellynasaura" および  "\*\*\*\*\*\*\*\*\*\*\*\*" に設定します。

    <div class="divider--half"></div>
    <img class="responsive-img" src="images/getting-started5.png" srcset="images/getting-started5@2x.png 2x" />
    <div class="divider--half"></div>
    <div class="divider--half"></div>
    <div class="divider--half"></div>
    <div class="divider--half"></div>
    <div class="divider--half"></div>

7.  **サインアップ ボタンを追加します。**

    1.  **Insert** メニューから Indigo-Components > Buttons > Raised を選択します。
    2.  入力の下に配置し、左右および上に 16px を設定します。
    3.  Text を "SIGN UP" に設定し、Background を info に設定します。

    <div class="divider--half"></div>
    <img class="responsive-img" src="images/getting-started6.png" srcset="images/getting-started6@2x.png 2x" />
    <div class="divider--half"></div>
    <div class="divider--half"></div>
    <div class="divider--half"></div>
    <div class="divider--half"></div>
    <div class="divider--half"></div>

8.  **同意テキストを追加します。**

    1.  `T` キーを押してボタンの下に別のテキスト要素を追加し、「By clicking on the "SIGN UP" button above, you accept our Terms of Use」と入力します。
    2.  以下のタイポグラフィ スタイルを割り当てます: Indigo-Styling > Body 2 > Inactive Style 
    3.  サイズ変更してすべての側面に 16px スペースをつくります。

    <div class="divider--half"></div>
    <img class="responsive-img" src="images/getting-started7.png" srcset="images/getting-started7@2x.png 2x" />
    <div class="divider--half"></div>
    <div class="divider--half"></div>
    <div class="divider--half"></div>
    <div class="divider--half"></div>
    <div class="divider--half"></div>

9.  **アートボードをレスポンシブに設定します。**
    1.  入力、ボタン、テキストのレイヤーおよび白い長方形ーを選択してグループ化します。
    2.  グループの幅と高さを固定し、パネルの Resizing オプションから上にピン固定します。

## その他のリソース

関連トピック:

- [Button](components/button.md)
- [Input](components/input.md)
- [Navbar](components/navbar.md)
- [Text](components/text.md)
- [Styling](style/styling-overview.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。



[a-1]: #1-add-the-indigo-design-libraries-in-sketch
[a-2]: #2-create-an-artboard
[a-3]: #3-add-and-customize-components
[1]: https://fonts.google.com/specimen/Titillium+Web
