---
title: Indigo.Design Sketch プラグイン
_description: Indigo.Design Sketch プラグインは、UI キットのテーマの設定、公開、プロジェクトの Indigo.Design Cloud との同期が可能です。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット, Sketch テーマ, テーマ エディター
_language: ja
---

# Indigo.Design プラグイン

Indigo.Design Sketch プラグインを使用すると、デザインのテーマを作成および編集し、これらのデザインから Indigo.Cloud でアプリやプロトタイプをすばやく作成して公開できます。

Indigo.Design System を使用して Sketch のデザインを作成したら、プラグインを使用して次の操作を行います。

-  Indigo.Design App Builder でアプリをすばやく作成します。このアプリは、Sketch デザインの構造に従い、Indigo.Design UI キットのシンボルを Ignite UI の対応するコンポーネントにマッピングします。またこのプラグインは、Figma で使用されている画像を取得し、[`Assets` サポート (英語)](https://www.infragistics.com/community/blogs/b/jason_beres/posts/indigo-design-app-builder-october-release-with-assets-support) を使用して App Builder の下の Assets ライブラリにアップロードします。  

- Indigo.Design UI Kit for Sketch を使用する場合は、新しいテーマを作成し、既存のテーマを編集します。`primary`、`secondary`、`error`、`success`、`warn`、`info` および `surface` の配色やブランディングに合わせたタイポグラフィのプロパティの調整ができます。作成したテーマは、デザインからアプリを作成すると、Indigo.Design App Builder に表示されます。

- プロトタイプを Indigo.Design Cloud に簡単に公開し、その後、変更や更新を行うときに定期的に同期します。

## 1.Indigo.Design プラグインのインストール

Indigo.Design プラグインは、[Indigo.Design クラウド](https://cloud.indigo.design)にサインインすると利用可能になります。`[作業の開始]` メニューに移動し、`[Indigo.Design システムを入手する]` ボタンをクリックしてアセット ダイアログを開きます。[Sketch] タブで、プラグイン アーカイブをダウンロードして開き、Sketch プラグイン ファイルをダブルクリックすると、Indigo.Design プラグインがインストールされます。 

<img class="responsive-img" src="../images/indigo-design-resources.gif" />

## 2.App Builder でアプリケーションを作成します

デザインの準備ができたら、プラグインを使用してアプリを作成できます。

<img class="responsive-img" src="../images/create-from-sketch.gif" />

## 3テーマ

このセクションでは、Indigo.Design UI Kit で作成した Sketch プロジェクトでテーマを作成する際のベスト プラクティスについて説明します。以下の方法に従ってタイポグラフィやカラーなどブランディング アセットをプロジェクトやライブラリに適用できます。複数のプロジェクト内のすべての UI コンポーネントで統一したブランディングを表現できます。

### テーマ構成の起動

Sketch の `Plugins` メニューの `Indigo.Design` から `Themes` を選択します。モーダルで表示されるテーマの 1 つを選択して必要に応じて調整、あるいは新しいテーマを作成します。

<img class="responsive-img" src="../images/Sync_themes_plugin_Launching_the_plugin.png" srcset="../images/Sync_themes_plugin_Launching_the_plugin@2x.png 2x" />

### テーマの新規作成

ブランディングに基づいてテーマをビルドし、テーマ コレクションに追加するには、`[新しいテーマ]` を選択し、カラーやタイポグラフィを必要に応じて調整します。デフォルトの値は、[Ignite UI for Angular](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/themes) の Material Light テーマと同じです。

<img class="responsive-img" src="../images/Sync_themes_plugin_Start_New_Theme.png" srcset="../images/Sync_themes_plugin_Start_New_Theme@2x.png 2x" />

#### 1.新しいテーマに名前を付ける

Colors や Typography プロパティを編集する前にテーマの名前を指定します。テーマの説明となる名前を付けるとテーマが増えたときにわかりやすく便利です。

<img class="responsive-img" src="../images/Sync_themes_plugin_Naming_your_New_Theme.png" srcset="../images/Sync_themes_plugin_Naming_your_New_Theme@2x.png 2x" />

#### 2.ブランディングとカラーの選択

テーマにライトかダークを選択します。これは、`Surface` と `Gray` のカラーに影響します。次に、上部の 2 つのパレットを指定するには、それらの基本値のみを設定できます。残りの色合いは自動的に生成されるため、`Primary 500` と `Secondary 500` になります。ほとんどの場合、ブランディング カラーのパレットを使用します。`Error`、`Success`、`Warning`、`Info` のカラーに関しては、アプリケーションに対するユーザーの知覚を考慮することをお勧めします。デフォルトのカラーは、ほとんどのケースにマッチするカラーになっています。テーマをクリックし、HEX/RGB 値を入力、またはカラーを選択して簡単に調整できます。

<img class="responsive-img" src="../images/Sync_themes_plugin_Specify_colors.png" srcset="../images/Sync_themes_plugin_Specify_colors@2x.png 2x" />

#### 3 タイポグラフィの選択

Typeface プロパティは、`[タイポグラフィ]` タブで設定できます。`ベース タイプフェイス`としてよく使用されるフォントファミリなどが設定できます。追加で各テキスト スタイルのフォントの太さを調整する場合もプラグインで行うことができます。テキストのスタイルは線や段落、更に Chip など内部にテキストを表示するコンポーネントにも適用されます。

<img class="responsive-img" src="../images/Sync_themes_plugin_Specify_typography.png" srcset="../images/Sync_themes_plugin_Specify_typography@2x.png 2x" />

#### 4.テーマの保存と適用

[保存と適用] をクリックするとテーマは保存されて定義済みテーマの一覧に表示されます。ライブラリが更新されてスタイルが現在のプロジェクトにプロパゲートされると、ライブラリと Sketch ファイルのサイズにもよりますが処理は通常数秒で終わります。最後に、通知を開いてデザインの変更を受け入れるだけです。

<img class="responsive-img" src="../images/Sync_themes_plugin_Saving_and_Applying_New_Theme.png" srcset="../images/Sync_themes_plugin_Saving_and_Applying_New_Theme@2x.png 2x" />

### 既存のテーマの使用

テーマの作成は簡単ですが、既存テーマ (デフォルトまたはカスタム) の再利用はより簡単です。テーマを簡単に利用できる以外に、事前定義されたテーマを複製して、適用する前に微調整したり、一度作成したが将来は使用しないテーマを削除したりすることもできます。

<img class="responsive-img" src="../images/Sync_themes_plugin_existing_theme.png" srcset="../images/Sync_themes_plugin_existing_theme@2x.png 2x" />

#### テーマの編集

既存のテーマを適用する前に調整する場合は、最初にそれを複製してから、上記 『テーマの新規作成』 セクションで説明したエントリをいくつか設定できます。

<img class="responsive-img" src="../images/Sync_themes_plugin_Editing_theme_name_colors_typography.png" srcset="../images/Sync_themes_plugin_Editing_theme_name_colors_typography@2x.png 2x" />

> [!Note]
> `Error`、`Success`、`Warning`、`Info` のカラーがブランディング カラーや `Primary` と `Secondary` のために生成したパレットと区別できるようにします。
>
> <img class="responsive-img" src="../images/Sync_themes_plugin_difference.png" srcset="../images/Sync_themes_plugin_difference@2x.png 2x" />

## 4.クラウドへのプロトタイプの公開と同期

Indigo.Design クラウドにプロトタイプを公開する準備ができたら Sketch の `Plugins` メニューから `Indigo.Design` > `Publish Prototype` を選択します。プラグインのクラウド インテグレーション機能をはじめて実行する場合、Indigo.Design アカウントでログインする必要があります。プロトタイプを公開する際場合、はじめに新しいプロトタイプを作成するか既存のプロトタイプを置き換えるかを選択してください。

<img class="responsive-img" src="../images/Sync_themes_plugin_Publish.png" srcset="../images/Sync_themes_plugin_Publish@2x.png 2x" />

### 新しいプロトタイプの公開

共有したい Sketch プロジェクトがある。Indigo.Design クラウドに公開して共有し、初期のフィードバックを開始することができます。`New prototype` タブで実行でき、以下が可能です。

- デバイス タイプと解像度の選択 (デフォルトでアートボードと一致する必要があります)
- プロトタイプをパーソナルまたはチーム ワークスペースに公開するかどうかを選択
- プロトタイプの名前を提供 (デフォルトで Sketch プロジェクト ファイルの名前と一致)
- 簡単な説明文の追加 (オプション)
- プロトタイプのパスワード保護
- ホットスポットとインタラクションの強調表示を選択
- デザインにコメントを許可

[公開] ボタンをクリックするとプロジェクトが Indigo.Design クラウドへアップロードされます。そのリンクを取得し共有することによりフィードバックを得ることができます。

<img class="responsive-img" src="../images/Sync_themes_plugin_New_prototype.png" srcset="../images/Sync_themes_plugin_New_prototype@2x.png 2x" />

### 既存プロトタイプの更新

新しいプロトタイプを公開する他、クラウドにあるスクリーンをより新しいスクリーンと置き換えて既存のプロトタイプを更新することもできます。`[プロトタイプの置き換え]`タブへ移動します。次にプロトタイプの検索やフィルタリングができます (パーソナルまたはチームワークスペースにある場合など)。作成時に定義したプロトタイプの構成を変更することもできます。

- デバイスタイプと解像度
- 名前
- ワークスペース
- 簡単な説明
- パスワード
- ホットスポットとインタラクションのハイライト
- コメント

<img class="responsive-img" src="../images/Sync_themes_plugin_Replace_prototype.png" srcset="../images/Sync_themes_plugin_Replace_prototype@2x.png 2x" />

### プロトタイプの公開

プロトタイプがクラウドへ正しく公開されるとリンクの他に以下のオプションがあります。

- 所属するワークスペースから、ブラウザ ウィンドウで開く
- ユーザビリティ テストを作成し、[リモート ユーザービリティ テスト](../prototyping/set-up-a-user-test.md)を初期化してブラウザーで開く
- クリップボードにプロトタイプのリンクをコピーしてメールで送信、またはコードを生成

プラグイン ダイアログで完了をクリックすると引き続き Sketch でデザインできます。

<img class="responsive-img" src="../images/Sync_themes_plugin_Published_prototype.png" srcset="../images/Sync_themes_plugin_Published_prototype@2x.png 2x" />

### プロトタイプの同期

プロトタイプを最初に公開した後もデザイン フローが継続されるため、細かな調整や公開したプロトタイプと同期する必要があります。プラグイン メニューから `[プロトタイプの同期]` を選択します。

<img class="responsive-img" src="../images/Sync_themes_plugin_Sync.png" srcset="../images/Sync_themes_plugin_Sync@2x.png 2x" />

これにより現在のプロジェクトを前回公開したプロトタイプへ公開します。進捗状況がダイアログで表示されます。プロトタイプが正しく同期されると通知が表示されて、数秒後にダイアログが自動的に閉じられます。

<img class="responsive-img" src="../images/Sync_themes_plugin_Success.png" srcset="../images/Sync_themes_plugin_Success@2x.png 2x" />

## その他のリソース

関連トピック:

- [Colors](../style/colors.md)
- [Typography](../style/typography.md)

コミュニティに参加して新しいアイデアをご提案ください。