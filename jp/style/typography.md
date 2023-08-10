---
title: Typography - デザイン システム スタイリング
_description: Typography のスタイルは、Indigo.Design のフォントに関連するテーマ属性を設定できます。
_keywords: デザイン システム, デザイン システム UX, UI キット, Figma, Figma to Angular, Figma からコードをエクスポート, Figma to HTML, Figma UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット, Adobe XD, Adobe XD to Angular, Adobe XD からコードをエクスポート, Adobe XD to HTML, Adobe XD UI キット
_language: ja
---

# Typography (タイポグラフィ)

**Indigo.Design システム**には、タイポグラフィを構成し、テーマの書体を設定できる 18 のテキスト (文字) スタイルがあります。デフォルトで [Titillium Web](https://fonts.google.com/specimen/Titillium+Web) を使用していますが、すべてのデザイナーがアプリケーションを柔軟にカスタマイズできるようにする必要があります。Indigo.Design は、[マテリアル タイプ システム](https://material.io/design/typography/the-type-system.html#type-scale)でタイポグラフィが定義されている方法に従い、[Ignite UI for Angular タイポグラフィ](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/themes/typography)の実装に準拠しています。

<img class="responsive-img" src="../images/typography_default.png" srcset="../images/typography_default@2x.png 2x" />
<div class="divider--half"></div>
<div class="divider--half"></div>

- **Figma** では、すべてのテキスト スタイルは、**Indigo.Design システム**の `🧱 Foundation` セクションの一部である `↳ Typography` という名前の別のページにあります。これらは、任意のテキスト要素に適用できる `Text Styles` として利用できます。
- **Sketch** では、これらは `🎨 Typography` という名前の別のページにあり、任意テキスト要素に適用できる `Text Styles` として利用できます。
- **Adobe XD** では、ライブラリ ファイルの左側の列にある同じ名前のアートボードに配置され、コンポーネントやパターン全体で使用される `Character Styles` として存在します。

## Typography のスタイル

プロジェクトでタイポグラフィ システムを使用するには、ライブラリで定義されているテキスト (文字) スタイルの 1 つをネイティブ テキスト要素に適用するだけです。Sketch には、さまざまなサイズ、色、配置の豊富な種類のプリセットが用意されています。Figma ではサイズ、太さ、行の高さ、比率 (文字間隔) を定義し、配置を調整してカラー スタイルを適用できます。一方、Adobe XD では、テキストスタイルには事前定義されたサイズのみが用意されており、配置を調整したり、カラースタイルを適用したりできます。

- タイトルの `H1` から `H6` までの 6 つの見出し。
- 2 つの `Subtitle` サイズ。
- 2 インターフェイスの段落コンテンツの `Body` サイズ。
- 本文のサイズと詳細 1 のサイズに対応した 3 つの `Hyperlink` サイズが用意されており、テキスト内でハイパーリンクを簡単に使用できます。
- グリッド コンポーネントでのみ使用される 2 つの `Detail` サイズ。
- 無料のコンテンツに使用できる `Caption` と `Overline` スタイル。
- Button コンポーネントでのみ使用される `BUTTON` スタイル。

これらのスタイルは、アプリケーションの関連レイヤーに対して生成されるテキスト要素とタイポグラフィ クラスのタイプも決定します。以下の要素は、一般的なテキス トレイヤーに適用されるタイポグラフィ テキスト スタイルに基づいて生成されます。
- 見出しのタイポグラフィ スタイルの見出し `<h1>` から `<h6>`。
- タイポグラフィ クラスの段落 `<p>`:
  - 2 つの字幕タイポグラフィ スタイルの場合は、`igx-typography__subtitle-1`/`igx-typography__subtitle-2`。
  - 2 つの本体タイポグラフィ スタイルの場合は、`igx-typography__body-1`/`igx-typography__body-2`。
  - 2 つのハイパーリンク タイポグラフィ スタイルの `ig-typography__body-1 hyperlink`/`ig-typography__body-2 hyperlink`。
  - キャプション タイポグラフィ スタイルの場合は `igx-typography__caption`。
  - オーバーライン タイポグラフィ スタイルの場合は `igx-typography__overline`。

これらのスタイルは、Sketch プラグインを介してさらに変更し、アプリケーション レベルのテーマ設定を介して要素の外観を変更できます。

記事、ブログ投稿などの高度なレイアウトを作成する場合に使用します。**Indigo.Design システム**の Text Styles は、デザインのすべてのテキストに一貫性のあるテーマとスタイルを定義します。

> [!Warning]
> Sketch には、検証や特殊なケースのためにコンポーネント内で使用される `Internal` テキスト スタイルのコレクションもあります。これらのスタイルは、アートボードに直接挿入されることは想定されていませんが、使用されるコンポーネントのタイポグラフィの一貫性を確保するために存在します。

## コンポーネント固有のタイポグラフィ

[Avatar](../components/avatar.md)、[Button](../components/button.md)、[Grid](../components/grid.md)、[Slider](../components/slider.md) および [Tooltip](../components/tooltip.md) は、コンポーネント固有のタイポグラフィを使用して、それぞれのコンポーネントで使用されるスタイリングの詳細に対応します。たとえば、イニシャル付きの Avatar と Button は大文字のスタイルを使用します。以下に、Sketch で Avatar 用に定義されたテキスト スタイルを示し、フォントのカラーをより多様に使用できるようにします。

<img class="responsive-img" src="../images/typography_colors.png" srcset="../images/typography_colors@2x.png 2x"/>

## タイポグラフィ カラー バリアント

- **Sketch** では、テキスト スタイルにテキストのカラーが含まれているため、それぞれが複数のプリセットカラーで提供されます。たとえば、`grays.900` に対応する `active`、`grays.700` に対応する `inactive`、`grays.500` に対応する `disabled`、`white` および `secondary` などです。`success`、` warn`、および `error` カラーが必要な文字列の特別なカラーのスケールがあり、Indigo.Design コンポーネント固有のバリアントもあります。

<img class="responsive-img" src="../images/typography_base_colors.png" srcset="../images/typography_base_colors@2x.png 2x"/>
<div class="divider--half"></div>

- **Figma** と **Adobe XD** では、テキスト スタイルにテキスト カラーは含まれていないため、デザインのニーズに基づいて調整できます。ただし、すべての Indigo.Design システム ライブラリ コンポーネントに適用される Text スタイルは、上記のカラー バリエーションに合わせて調整されます。

## 書体を変更

### Figma で

スタイルがチーム ライブラリに公開されている場合は、ライブラリ ファイル内のスタイルを編集する必要があります。変更を加えるには、ライブラリ ファイルに対する編集権限が必要です。Titillium Web の書体を別の書体に変更するには、**Indigo.Design システム** ライブラリ ファイルにアクセスする必要があります。デフォルトでは、何も選択していない場合、Figma のスタイルはプロパティ パネルに表示されます。あるいは、`↳ Typography` ページに移動して、すべてのタイポグラフィ スタイルをより包括的に表示し、そこから変更を加えることができます。テキスト スタイルは、キャンバスの右側にあるプロパティ パネルに引き続き表示されます。

<img class="responsive-img" src="../images/typography_text_styles.png" srcset="../images/typography_text_styles@2x.png 2x"/>
<div class="divider--half"></div>

「Edit style」 アイコンをクリックすると、ポップオーバーが開きます。プロパティ セクションにドロップダウンが表示され、別のフォント ファミリを選択できます。すべてのタイポグラフィでこの変更を修正するには、すべてのスタイルに対して同じ手順を個別に実行する必要があることに注意してください。

<img class="responsive-img" src="../images/typography_font_change.png" srcset="../images/typography_font_change@2x.png 2x"/>
<div class="divider--half"></div>

その後、これらの変更をライブラリの更新として公開する必要があります。サブスクライブしたファイルでこれらの変更を確認するには、変更を確認して受け入れる必要があります。

## Sketch で

Sketch で Titillium Web から別の書体に書体を変更するには、Indigo.Design ライブラリ ファイルを開き、`View` / `Components` を選択します。Sketch メニューに 4 つのボタンのグループがあります。2 つ目のボタンは文字アイコンで、`Show Text Styles` 表します。

<img class="responsive-img" src="../images/text_layers.png" srcset="../images/text_layers@2x.png 2x"/>
<div class="divider--half"></div>

選択後、**Indigo.Design システム**が定義するすべてのテキスト スタイルを参照できます。左側のパネルで `All Text Styles` が選択されていることを確認し、Sketch の中央部分をクリックして `command` + `A` を押してすべてのスタイルを選択します。

<img class="responsive-img" src="../images/typography_left.png" srcset="../images/typography_left@2x.png 2x"/>
<div class="divider--half"></div>

右側のパネルにあるすべての `Text Styles` に別の書体を選択できるドロップダウンがあります。これで設定が完了し、変更はすべての `Text Styles` を更新するだけでなく、すべてのコンポーネントとパターンに自動的に反映されます。

<img class="responsive-img" src="../images/typography_right.png" srcset="../images/typography_right@2x.png 2x"/>
<div class="divider--half"></div>

Sketch の `Text Styles` はカラー変数を使用してテキストの color プロパティを定義します。したがって、[Colors](colors.md) のトピックで説明されている手順に従って `primary` カラーを変更すると、すべてのプライマリ `Text Styles` が自動的に更新されます。

## Adobe XD で

Adobe XD で書体を Titillium Web から別の書体に変更するには、Indigo.Design ライブラリ ファイルを開き、`Libraries` パネルを選択します。次に、`Character Styles` までスクロールして、そのうちの 1 つを右クリックし、表示されるコンテキスト メニューから `Edit` を選択します。ポップオーバーでは、上部にドロップダウンがあり、別のフォント ファミリを選択できます。すべてのタイポグラフィでこの変更を修正するには、すべてのスタイルに対して同じ手順を個別に実行する必要があることに注意してください。

<img class="responsive-img" src="../images/text_layers_xd.png" srcset="../images/text_layers_xd@2x.png 2x"/>

## カスタム Typography の作成

さまざまなユーザー インターフェイスをデザインするには、タイポグラフィのさまざまなスタイルで十分です。ただし、特別なユース ケースのために追加のスタイルを作成する必要がある場合があります。すべてのプロジェクトに対してグローバルに定義する場合は、Indigo.Designライブラリで定義します。現在のプロジェクトの範囲内でのみ意味のあるものである場合は、代わりにプロジェクト ファイルで実行してください。

### Figma で

テキスト ツール (T) を使用して新しい文字レイヤーを作成し、必要な調整をすべて行ってから、Text プロパティの Style アイコンをクリックします。テキストのプロパティは、右側のサイドバーの [Type settings] パネルにあります。

<img class="responsive-img" src="../images/typography_custom1.png" srcset="../images/typography_custom1@2x.png 2x"/>
<div class="divider--half"></div>

レイヤーの調整がすべて完了したら、Style アイコンをクリックし、Create style アイコン (+) を選択します。これによりポップオーバーが開き、新しいテキスト スタイルに名前と説明を付けることができます。必要に応じて、スタイルに追加の変更を適用することもできます。

<img class="responsive-img" src="../images/typography_custom2.png" srcset="../images/typography_custom2@2x.png 2x"/>
<img class="responsive-img" src="../images/typography_custom3.png" srcset="../images/typography_custom3@2x.png 2x"/>
<div class="divider--half"></div>

次に、[Create style] ボタンをクリックします。これにより、右側のサイドバーのテキスト スタイルに新しいテキスト スタイルがリストされます。最後に、必要に応じてテキスト スタイルの位置を調整して特定のセクションに揃えたり、新しいセクションを作成したりできます。

<img class="responsive-img" src="../images/typography_custom4.png" srcset="../images/typography_custom4@2x.png 2x"/>
<div class="divider--half"></div>

### Sketch で
新しい `Text` レイヤーを挿入することから始めて、`Appearance` パネルを介してライブラリから供給された既存のものから最も近い `Text Style` をそれに割り当てます。

<img class="responsive-img" src="../images/typography_custom5.png" srcset="../images/typography_custom5@2x.png 2x"/>
<div class="divider--half"></div>

次に、テキストの色を別の色変数に変更するなどの調整を行います。

<img class="responsive-img" src="../images/typography_custom6.png" srcset="../images/typography_custom6@2x.png 2x"/>
<div class="divider--half"></div>

最後に、[Create] ボタンをクリックし、新しいスタイルに適切な名前を付けます。

<img class="responsive-img" src="../images/typography_custom7.png" srcset="../images/typography_custom7@2x.png 2x"/>

### Adobe XD で
新しい `Text` レイヤーを挿入することから始め、右側のパネルの `Text` の下でそのプロパティを調整します。たとえば、別のフォント、サイズ、配置を選択し、すべて小文字のスタイルを設定します。

<img class="responsive-img" src="../images/typography_custom8.png" srcset="../images/typography_custom8@2x.png 2x"/>
<div class="divider--half"></div>

次に、`Libraries` パネルで、`Character Styles` の右側にある [+] アイコンをクリックしてスタイルを作成し、適切な名前を付けます。

<img class="responsive-img" src="../images/typography_custom9.png" srcset="../images/typography_custom9@2x.png 2x"/>

## その他のリソース

関連トピック:

- [Colors](colors.md)
- [Avatar](../components/avatar.md)
- [Button](../components/button.md)
- [Grid](../components/grid.md)
- [Slider](../components/slider.md)
- [Tooltip](../components/tooltip.md)

コミュニティに参加して新しいアイデアをご提案ください。
