---
title: Indigo.Design Sketch プラグイン
_description: Indigo.Design Sketch プラグインは、UI キットのテーマの設定、公開、プロジェクトの Indigo.Design Cloud との同期が可能です。
_keywords: デザイン システム, Design Systems UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design システム, Sketch からコードをエクスポート, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI キット, Sketch テーマ, テーマ エディター
_language: ja
---

# Indigo.Design プラグイン

The Indigo.Design Sketch Plugin allows to create and edit themes over your designs, and quickly create and publish apps and prototypes in Indigo.Cloud from these designs.

Once a design in Sketch is created with the Indigo.Design System, use the plugin to:

-  quickly create an app in Indigo.Design AppBuilder. This app follows the structure of the Sketch design, mapping any symbol from the Indigo.Design UI Kit to the corresponding component from Ignite UI. The plugin also takes the images used in the Sketch and upload them in the Assets library under AppBuilder, benefiting from [`Assets` support](https://www.infragistics.com/community/blogs/b/jason_beres/posts/indigo-design-app-builder-october-release-with-assets-support).  

- create new themes and edit existing ones when using the Indigo.Design UI Kit for Sketch. Users can adjust the `primary`, `secondary`, `error`, `success`, `warn`, and `info` colors, as well as properties of the Typography according to their brand characteristics. The themes you have created will be there in the Indigo.Design AppBuilder, if you go and create an app from your design!

- effortlessly publish prototypes to the Indigo.Design Cloud and sync them up regularly thereafter, when making changes and updates.

## 1. Installing the Indigo.Design plugin

The Indigo.Design Plugin is available for download from [Indigo.Design Cloud](https://cloud.indigo.design) after signing in from the `Design System` tab of the dialog that shows upon clicking the `Getting Started` button in the header. Once you download the archive and open it, double click on the Sketch plugin file and the Indigo.Design plugin will be installed.

<img class="responsive-img" src="images/indigo-design-resources.gif" />
<p style="text-align:center;">Indigo.Design リソース</p>

## 2. Create an application in AppBuilder
Take your designs and create interactive, responsive apps with real UI components and styling. Use the `Create App` tab and the plugin will transform your Sketch design into a real application under the AppBuilder, allowing access to the images and themes that you have used in Sketch - all of this directly in the cloud.

The plugin allows you to choose a name and resolution for your app, as well as to select the Indigo.Design Cloud workspace, where the app will be created.

<img class="responsive-img" src="images/create-from-sketch.gif" srcset="images/create-from-sketch.gif 2x" />

## 3. Themes

このセクションでは、Indigo.Design UI Kit で作成した Sketch プロジェクトでテーマを作成する際のベスト プラクティスについて説明します。以下の方法に従ってタイポグラフィや色などブランディング アセットをプロジェクトやライブラリに適用できます。複数のプロジェクト内のすべての UI コンポーネントで統一したブランディングを表現できます。

### テーマ構成の起動

Sketch の `Plugins` メニューの `Indigo.Design` から `Themes` を選択します。モーダルで表示されるテーマの 1 つを選択して必要に応じて調整、あるいは新しいテーマを作成します。

<img class="responsive-img" src="images/Sync_themes_plugin_Launching_the_plugin.png" srcset="images/Sync_themes_plugin_Launching_the_plugin@2x.png 2x" />

### テーマの新規作成

ブランディングに基づいてテーマをビルドし、テーマ コレクションに追加する場合は、`新しい テーマ`を選択して色やタイポグラフィを必要に応じて調整します。デフォルトの値は、[Ignite UI for Angular](https://jp.infragistics.com/products/ignite-ui-angular) の [デフォルトのテーマ](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/themes/examples.html#デフォルト-テーマ)と同じです。

<img class="responsive-img" src="images/Sync_themes_plugin_Start_New_Theme.png" srcset="images/Sync_themes_plugin_Start_New_Theme@2x.png 2x" />

#### 1. 新しいテーマに名前を付ける

Colors や Typography プロパティを編集する前にテーマの名前を指定します。テーマの説明となる名前を付けるとテーマが増えたときにわかりやすく便利です。

<img class="responsive-img" src="images/Sync_themes_plugin_Naming_your_New_Theme.png" srcset="images/Sync_themes_plugin_Naming_your_New_Theme@2x.png 2x" />

#### 2. ブランディングと色の選択

上部にある 2 つのパレットを指定する場合、残りのシェードが自動的に生成されるためベース値 `Primary 500` と `Secondary 500` のみ設定できます。ほとんどの場合、ブランディング カラーのパレットを使用します。`error`、`success`、`warn`、`info` の色に関しては、アプリケーションに対するユーザーの知覚を考慮することをお勧めします。デフォルトの色は、ほとんどのケースにマッチする色になっています。テーマをクリックし、HEX/RGB 値を入力、または色を選択して簡単に調整できます。

<img class="responsive-img" src="images/Sync_themes_plugin_Specify_colors.png" srcset="images/Sync_themes_plugin_Specify_colors@2x.png 2x" />

#### 3. タイポグラフィの選択

Typeface プロパティは、`タイポグラフィ`タブで設定できます。`Base Typeface` としてよく使用されるフォントファミリなどが設定できます。追加で各テキスト スタイルのフォントの太さを調整する場合もプラグインで行うことができます。テキストのスタイルは線や段落、更に Chipa など内部にテキストを表示するコンポーネントにも適用されます。

<img class="responsive-img" src="images/Sync_themes_plugin_Specify_typography.png" srcset="images/Sync_themes_plugin_Specify_typography@2x.png 2x" />

#### 4. テーマの保存と適用

[保存] をクリックするとテーマが保存され、定義済みテーマの一覧に表示されます。ライブラリが更新されてスタイルが現在のプロジェクトにプロパゲートされると、ライブラリと Sketch ファイルのサイズにもよりますが処理は通常数秒で終わります。

<img class="responsive-img" src="images/Sync_themes_plugin_Saving_and_Applying_New_Theme.png" srcset="images/Sync_themes_plugin_Saving_and_Applying_New_Theme@2x.png 2x" />

### 既存のテーマの使用

テーマの作成は簡単ですが、既存テーマ (デフォルトまたはカスタム) の再利用はより簡単です。テーマは 1 クリックで選択できる以外に適用する前に調整することも可能です。あるいはプラグインのコレクションをクリーンアップするために削除することもできます。

<img class="responsive-img" src="images/Sync_themes_plugin_existing_theme.png" srcset="images/Sync_themes_plugin_existing_theme@2x.png 2x" />

#### テーマの編集

既存のテーマを適用する前に調整する場合は、上記のテーマの作成セクションで説明したエントリをいくつか設定できます。

<img class="responsive-img" src="images/Sync_themes_plugin_Editing_theme_name_colors_typography.png" srcset="images/Sync_themes_plugin_Editing_theme_name_colors_typography@2x.png 2x" />

> [!Note]
> `error`, `success`, `warn`, `info` の色がブランディング カラーや `Primary` と `Secondary` のために生成したパレットと区別できるようにします。
>
> <img class="responsive-img" src="images/Sync_themes_plugin_difference.png" srcset="images/Sync_themes_plugin_difference@2x.png 2x" />

## 4. クラウドへのプロトタイプの公開と同期

Indigo.Design クラウドにプロトタイプを公開する準備ができたら Sketch の `Plugins` メニューから `Indigo.Design` / `Publish Prototype` を選択します。プラグインのクラウド インテグレーション機能をはじめて実行する場合、Indigo.Design アカウントでログインする必要があります。プロトタイプを公開する際場合、はじめに新しいプロトタイプを作成するか既存のプロトタイプを置き換えるかを選択してください。

<img class="responsive-img" src="images/Sync_themes_plugin_Publish.png" srcset="images/Sync_themes_plugin_Publish@2x.png 2x" />

### 新しいプロトタイプの公開

共有したい Sketch プロジェクトがある場合、Indigo.Design クラウドへ公開して早い段階でフィードバックをもらうことができます。`新しいプロトタイプ`タブで実行でき、以下が可能です。

- デバイス タイプと解像度の選択 (デフォルトでアートボードと一致する必要があります)
- プロトタイプをパーソナルまたはチーム ワークスペースに公開するかどうかを選択
- プロトタイプの名前を提供 (デフォルトで Sketch プロジェクト ファイルの名前と一致)
- 簡単な説明文の追加 (オプション)
- プロトタイプのパスワード保護
- ホットスポットとインタラクションの強調表示を選択
- デザインにコメントを許可

[公開] ボタンをクリックするとプロジェクトが Indigo.Design Cloud へアップロードされます。これによりフィードバックをもらったり[コードを生成](codegen/vscode-plugin.md)したりすることができます。

<img class="responsive-img" src="images/Sync_themes_plugin_New_prototype.png" srcset="images/Sync_themes_plugin_New_prototype@2x.png 2x" />

### 既存プロトタイプの更新

新しいプロトタイプを公開する他、クラウドにあるスクリーンをより新しいスクリーンと置き換えて既存のプロトタイプを更新することもできます。`保存プロトタイプと置き換え`タブへ移動し、プロトタイプの検索やフィルタリングができます (パーソナルまたはチームワークスペースにある場合など)。作成時に定義したプロトタイプの構成を変更することもできます。

- デバイスタイプと解像度
- 名前
- ワークスペース
- 簡単な説明
- パスワード
- ホットスポットとインタラクションのハイライト
- コメント

<img class="responsive-img" src="images/Sync_themes_plugin_Replace_prototype.png" srcset="images/Sync_themes_plugin_Replace_prototype@2x.png 2x" />

### プロトタイプの公開

プロトタイプがクラウドへ正しく公開されるとリンクの他に以下のオプションがあります。

- ブラウザ ウィンドウでワークスペースを閲覧
- ユーザビリティ テストを作成し、[ユーザー テスト](prototyping/set-up-a-user-test.md)を初期化してブラウザーで開く
- クリップボードにプロトタイプのリンクをコピーしてメールで送信、またはコードを生成

プラグイン ダイアログで完了をクリックすると引き続き Sketch でデザインできます。

<img class="responsive-img" src="images/Sync_themes_plugin_Published_prototype.png" srcset="images/Sync_themes_plugin_Published_prototype@2x.png 2x" />

### プロトタイプの同期

プロトタイプを最初に公開した後もデザイン フローが継続されるため、細かな調整や公開したプロトタイプと同期する必要があります。[Plugins] メニューから `Sync Prototype` を選択します。

<img class="responsive-img" src="images/Sync_themes_plugin_Sync.png" srcset="images/Sync_themes_plugin_Sync@2x.png 2x" />

これにより現在のプロジェクトを前回公開したプロトタイプへ公開します。進捗状況がダイアログで表示されます。プロトタイプが正しく同期されると通知が表示されて、数秒後にダイアログが自動的に閉じられます。

<img class="responsive-img" src="images/Sync_themes_plugin_Success.png" srcset="images/Sync_themes_plugin_Success@2x.png 2x" />

## その他のリソース

関連トピック:

- [Colors](./style/colors.md)
- [Typography](./style/typography.md)

コミュニティに参加して新しいアイデアをご提案ください。
