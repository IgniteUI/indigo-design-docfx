---
title: Input - デザイン システム コンポーネント
_description: Input コンポーネント シンボルは、文字列、数値、日付などユーザー データのコレクションが使用できます。
_keywords: デザイン システム, Sketch, Ignite UI for Angular, コンポーネント, UI ライブラリ, ウィジェット
_language: ja
---

## Input

Input コンポーネント シンボルは、さまざまなコンテキスト、日付、その他の値に合わせて使用する文字列や数値などのユーザー データを収集します。複数入力は、簡単に使用できるフォームに組み合わせることができます。Input は、[Ignite UI for Angular Input Group コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/input_group.html)と視覚的に同じものです。

### Input デモ

![](../images/input_demo.png)

### タイプ

Input はヘルパー テキスト (あり/なし) で 4 つの異なるタイプから選択します。より軽い印象となる線スタイルまたは単色背景ではっきり認識される境界線スタイルなど。Boxed スタイルは、コンテンツを読みやすくするために Input をビビッドなイメージの上に配置したときに使用するのが最も適しています。

![](../images/input_no-helper.png)
![](../images/input_helper.png)

![](../images/input_line.png)
`line`
![](../images/input_box.png)
`box`
![](../images/input_border.png)
`border`
![](../images/input_search.png)
`search`

### バリアント

Input は、明暗バリアントで分かりやすく、背景に明暗のコントラストを付けてスタイル設定できます。

![](../images/input_dark.png)
![](../images/input_light.png)

### 状態

ユーザーが Input とインタラクティブに操作する際にさまざまな状態を経由します。コンテンツの代わりにプレースホルダーがある**アイドル**状態、ユーザーが入力中のフォーカス状態、ユーザーがコンテンツの追加を完了して次に進むときの塗りつぶし状態、入力がインタラクションをサポートしない無効状態。柔軟性が向上したことにより、Hi-Fi プロトタイプへシームレスにフローする動的なインタラクション デザインの作成が可能です。

![](../images/input_focused.png)
`focused`
![](../images/input_filled.png)
`filled`
![](../images/input_disabled.png)
`disabled`

経験豊富なデザイナーは、ユーザー入力を制限して無効な状態を防止するために、検証スタイルを使用します。検証スタイルは、Input で成功、警告、エラーを表示する洗練されたデザインを提供します。

![](../images/input_success.png)
![](../images/input_warning.png)
![](../images/input_error.png)

### レイアウト

Input には特定の場合に入力 (@email.com サフィックス) を軽減するテキスト文字列のプレフィックス/サフィックスやアイコンをサポートします。これによりキーストロークを減らし、予期されるコンテンツを明確にすることができます。カレンダーのプレフィックスでは、Input が日付や時間のコンテンツとして適しているかを示すことができます。

![](../images/input_prefix.png)
![](../images/input_suffix.png)

> [!Note]
> ↳ Layout
>
> - .../OnlyText/...
> - .../Prefix + Suffix/Icons/...
> - .../Prefix + Suffix/String/...
> - .../Suffix/Icons/...
> - .../Suffix/String/...

### Calendar および Time Picker 入力

日付および時間選択のためにカスタマイズされた Input の 2 種類です。その他の Input コンポーネントと構造が統一されますが、レイアウトはそれぞれの状態に固定されます。プレフィックス位置に表示されるアイコンはマテリアル アイコンの `calendar-today` および `access-time` に設定され、オーバーライド パネルに変更できません。

![](../images/input_calendar.png)
![](../images/input_time-picker.png)

### スタイル設定

Input は、Styling ライブラリのテーマでプライマリ、成功、警告、エラーの色を変更できます。

![](../images/input_styling.png)

## 使用方法

Input のボックス タイプを使用して画像上にフォームを配置して読みやすくします。デザインの警告やエラー状態で Input を使用する際にヘルパーテキストを使用してユーザーにガイダンスを提供します。

| いい例                       | 悪い例                         |
| ---------------------------- | ------------------------------ |
| ![](../images/input_do1.png) | ![](../images/input_dont1.png) |
| ![](../images/input_do2.png) | ![](../images/input_dont2.png) |

## コードの生成
 
Input Group の色やフォントを指定した場合、Input Group HTML 要素は div でラップされます。ブラウザーによってネスト コンポーネント (他のコンポーネント内のコンポーネント) のスタイル設定が要求されます。

> [!WARNING]
> デザインの Input のインスタンスで`シンボルからデタッチ`をトリガーすると、ほとんどの場合で Input のためのコード生成機能が失われます。

データ バインディングは波括弧構文によって指定されます。例: {isAdmin}。テキスト フィールド (`🕹️DataProperty` および `🕹️DataSource` 以外) も文字列補間構文をサポートします。例: 管理者: {isAdmin}。データ バインディングはネストまたはネストなしが可能です。ターゲット プロパティがネストされたプロパティの場合、ネストされたプロパティ チェーンを含みますがモデル オブジェクト名は含みません。実例:

#### ネストなし

```typescript
Customer {
  imageName: String;
}
```

DataProperty: `{imageName}`

#### ネストあり

```typescript
Profile {
  imageName: String;
}

Customer {
  profile: Profile;
}
```

DataProperty: `{profile.imageName}`

### Event プロパティ

`🕹️Event` プロパティはコンポーネント TypeScript のメソッドを作成するために使用し、HTML に Angular クリック シグネチャを追加します。Time Picker および Date/Calendar の場合、onValueChanged または onSelection です。Searchbar はこれをサポートしません。波括弧構文 ({onEventName}) を使用してイベントを指定する必要があります。

### DataProperty

`🕹️DataProperty` 値は Input Group の formControlName プロパティへの two-way データ バインディングを設定するために使用されます。`🕹️DataProperty` はオプションです。提供された場合、生成要求で提供されるモデル オブジェクト名で指定されたデータ オブジェクトでプロパティ名になります。

### 入力

Input Group に適用されるスタイル設定のタイプを決定します。None に設定されると、コントロールは描画されません。Time Picker および Date/Calendar はこれをサポートしません。基本タイプがこのフィールドの値であるため、Box、Border、Line、および Searchbar にこのプロパティがありません。

### バリアント

テーマが明るいまたは暗いかどうかを決定します。Time Picker および Date/Calendar はこれをサポートしません。None に設定される場合、コントロールは描画されません。

### 状態

None に設定される場合、コントロールは描画されません。

### レイアウト

Input Group のレイアウトを決定します。Prefix または Suffix を表示に設定した場合、テキストまたはアイコンを入力の開始または終了に表示できます。代わりに、Searchbar に Left および Right Icons があり、アイコンを有効または無効にできます。Prefix/Suffix でテキストはサポートされません。Time Picker および Date/Calendar はこれをサポートしません。None に設定される場合、コントロールは描画されません。

### ラベル

Label に表示するテキストを決定します。

### 入力テキスト

入力値に表示するテキストを決定します。`🕹️DataProperty` が設定される場合、このプロパティは無視されます。

### ヘルプ テキスト

Input Group の Hint に表示するテキストを決定します。Time Picker および Date/Calendar はこれをサポートしません。

### 検索ヒント

Searchbar のラベルに表示するテキストを決定します。

## その他のリソース

関連トピック:

- [Form Pattern](forms.md)
- [User Profile Pattern](userProfile.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

- [Indigo Design **GitHub** (英語)](https://github.com/IgniteUI/design-system-docfx)
