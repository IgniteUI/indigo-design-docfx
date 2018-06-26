---
title: Category Chart - デザイン システム コンポーネント
_description: Category Chart コンポーネント シンボルは、複雑なデータをシンプルに表示します。
_keywords: デザイン システム, Sketch, Ignite UI for Angular, コンポーネント, UI ライブラリ, ウィジェット
_language: ja
---

## Category Chart

Category Chart コンポーネント シンボルは、密度をラップして複雑なデータをシンプルに表示します。Category Charts は、関連データ セットできれいなダッシュボードを作成するために組み合わせて使用します。Category Chart は、[Ignite UI for Angular Category Chart コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/categorychart.html)と視覚的に同じものです。

### Category Chart デモ

<img src="../images/chart_category_demo.png" srcset="../images/chart_category_demo@2x.png 2x" />

### ツールチップ

Category Chart は、ツールチップ表示のオーバーライドが可能です。ツールチップを非表示にする **Tooltip Off**、シリーズの一番上に表示する Tooltip On。

<img src="../images/chart_category_tooltip-off.png" srcset="../images/chart_category_tooltip-off@2x.png 2x" />
<img src="../images/chart_category_tooltip-on.png" srcset="../images/chart_category_tooltip-on@2x.png 2x" />

### タイプ

Category Chart は以下のようなさまざまなオーバーライドで Chart タイプを選択できる柔軟性があります。

|                    |                                                                                                                |
| ------------------ | -------------------------------------------------------------------------------------------------------------- |
| エリア             | <img src="../images/chart_category_area.png" srcset="../images/chart_category_area@2x.png 2x" />               |
| 柱状               | <img src="../images/chart_category_column.png" srcset="../images/chart_category_column@2x.png 2x" />           |
| 折れ線             | <img src="../images/chart_category_line.png" srcset="../images/chart_category_line@2x.png 2x" />               |
| ポイント           | <img src="../images/chart_category_point.png" srcset="../images/chart_category_point@2x.png 2x" />             |
| スプライン         | <img src="../images/chart_category_spline.png" srcset="../images/chart_category_spline@2x.png 2x" />           |
| スプライン エリア  | <img src="../images/chart_category_spline-area.png" srcset="../images/chart_category_spline-area@2x.png 2x" /> |
| ステップ エリア    | <img src="../images/chart_category_step-area.png" srcset="../images/chart_category_step-area@2x.png 2x" />     |
| ステップ折れ線     | <img src="../images/chart_category_step-line.png" srcset="../images/chart_category_step-line@2x.png 2x" />     |
| ウォーターフォール | <img src="../images/chart_category_waterfall.png" srcset="../images/chart_category_waterfall@2x.png 2x" />     |

## 使用方法

同じチャートの異なるタイプを組み合わせる場合、複数の Category Charts を互いに積み重ねないようにします。データ可視化の簡素化したステンシルのように Category Chart コンポーネント シンボルを使用します。

| いい例                                                                                         | 悪い例                                                                                             |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| <img src="../images/chart_category_do1.png" srcset="../images/chart_category_do1@2x.png 2x" /> | <img src="../images/chart_category_dont1.png" srcset="../images/chart_category_dont1@2x.png 2x" /> |

## コードの生成

Category Chart は使用安いコンポーネントで、プロパティを少数のみ設定する必要があります。

> [!WARNING]
> デザインの Category Chart のインスタンスで`シンボルからデタッチ`をトリガーすると、ほとんどの場合で Category Chart のためのコード生成機能が失われる結果となります。

### データ バインディング

データ バインディングは波括弧構文によって指定されます。例: {isAdmin}。データ バインディングはネストまたはネストなしが可能です。ターゲット プロパティがネストされたプロパティの場合、ネストされたプロパティ チェーンを含みますがモデル オブジェクト名は含みません。実例:

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

### データ ソース

`🕹️DataSource` プロパティ値はチャートの dataSource プロパティへのバインディングを設定するために使用されます。`🕹️DataSource` およびデータ ソースで有効なデータがない場合、Category Chart をランタイムに描画できません。

### チャート ディメンション

Category Chart は Sketch 内で取得した固定ディメンションで生成します。ディメンションは HTMl 内にフィットするように変更できます。幅と高さの有効な値は、ピクセル値とパーセント値です。例:

`width=”300px”` または `width=”100%”`

### チャート タイプ

チャートで指定したシリーズ タイプを使用するよう構成されます。Type が None の場合、チャートは描画しません。

### チャートのタイトル

Title プロパティにテキスト、バインディング、または両方を含むことができます。例:

- 設定
- {settingsLabel}
- 重要な {labelText}

Title はオプションです。

## その他のリソース

コミュニティに参加して新しいアイデアをご提案ください。

- [Indigo Design **GitHub** (英語)](https://github.com/IgniteUI/design-system-docfx)
