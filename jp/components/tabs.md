---
title: Tabs - デザイン システム コンポーネント
_description: Tabs コンポーネント シンボルは、情報の体系化や切り替えに使用されます。
_keywords: デザイン システム, Sketch, Ignite UI for Angular, コンポーネント, UI ライブラリ, ウィジェット
_language: ja
---

## Tabs

Tabs コンポーネント シンボルは、同じ情報を異なるビューに体系化や同様または関連のあるデータセット間の切り替えが可能です。Tab は、[Ignite UI for Angular Tabs コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/tabs.html)と視覚的に同じものです。

### Tabs デモ

<img src="../images/tabs_demo.png" srcset="../images/tabs_demo@2x.png 2x" />

### サイズ

バーに配置されたタブは、高さのあるテキストを使用したアイコン、または短いテキストまたはアイコンを含みますが同時に両方を含むことはありません。

<img src="../images/tabs_short.png" srcset="../images/tabs_short@2x.png 2x" />
<img src="../images/tabs_tall.png" srcset="../images/tabs_tall@2x.png 2x" />

### レスポンシブ

Tab は**固定**が可能で幅を変更して水平スペースを埋めることができます。フルードにも対応しており、通常より多くのコンテンツが収まり、スクロールボタンでより多くのタブを表示、スクロールできます。

<img src="../images/tabs_fixed.png" srcset="../images/tabs_fixed@2x.png 2x" />
<img src="../images/tabs_fluid.png" srcset="../images/tabs_fluid@2x.png 2x" />

### 合計

多くのケースで Tabs に 2 項目 ～ 4 項目が必要になります。4 項目以上必要な場合、ビューでタブのみ表示するフルード モードを検討します。

<img src="../images/tabs_2.png" srcset="../images/tabs_2@2x.png 2x" />
<img src="../images/tabs_3.png" srcset="../images/tabs_3@2x.png 2x" />
<img src="../images/tabs_4.png" srcset="../images/tabs_4@2x.png 2x" />

### タイプ

短い Tabs は、各タブの項目を説明する**テキスト**とアイコンのコンテンツをサポートします。

<img src="../images/tabs_text.png" srcset="../images/tabs_text@2x.png 2x" />
<img src="../images/tabs_icons.png" srcset="../images/tabs_icons@2x.png 2x" />

### スタイル設定

Tabs は、テキストやアイコンの色、現在の選択をマークするインジケーターの色、アクティブ/インアクティブな背景色の変更が可能な基本的なスタイル設定が可能です。

<img src="../images/tabs_styling.png" srcset="../images/tabs_styling@2x.png 2x" />

## 使用方法

Tab は情報の体系化に適しいますが、ワークフローのデザインやロジカルなシーケンスに基づいた操作には向いていません (チェックアウト プロセスや構成ウィザード) 。短い Tabs は、同じバーでテキスト タブとアイコンタブは組み合わすことはできません。2 つのコンテンツ モードのうち 1 つを選択してバーの常にすべての項目を使用します。

| 良い例                          | 悪い例                         |
| --------------------------- | ----------------------------- |
| <img src="../images/tabs_do1.png" srcset="../images/tabs_do1@2x.png 2x" /> | <img src="../images/tabs_dont1.png" srcset="../images/tabs_dont1@2x.png 2x" /> |
| <img src="../images/tabs_do2.png" srcset="../images/tabs_do2@2x.png 2x" /> | <img src="../images/tabs_dont2.png" srcset="../images/tabs_dont2@2x.png 2x" /> |

## コードの生成
 
Tabs の色またはフォントを指定した場合、Tabs HTML 要素は div でラップされます。ブラウザーによってネスト コンポーネント (他のコンポーネント内のコンポーネント) のスタイル設定が要求されます。アクティブ タブのスタイル設定が最初の解析されたアクティブ タブから取得されます。その他のタブのスタイル設定が最初の解析された非アクティブ タブから取得されます。

> [!WARNING]
> デザインの Tabs のインスタンスで`シンボルからデタッチ`をトリガーすると、ほとんどの場合で Tabs のためのコード生成機能が失われる結果となります。

### データ バインディング

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

`🕹️Event` プロパティはコンポーネント TypeScript のメソッドを作成するために使用し、HTML に `onTabItemSelected` シグネチャを追加します。波括弧構文 `({onEventName})` を使用してイベントを指定する必要があります。

### レスポンシブ

Responsive プロパティが提供された場合、タブのサイズ モードを決定します。None に設定される場合、タブは描画しません。

### タブの量

Tabs Amount プロパティが提供された場合、描画するタブ数を決定します。None に設定される場合、タブは描画しません。

### 型

Type プロパティが提供された場合、タブがアイコンまたはテキストを描画するかどうかを決定します。短いタブのみに使用されます。すべてのタブの Type を None に設定した場合、タブ コントロールを描画しません。

### テキスト

Text プロパティには、テキスト、バインディング、またはその両方を含むことができます。例:

- 設定
- {settingsLabel}
- 重要な {labelText}

## その他のリソース

関連トピック:

- [Details](../patterns/details.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

- [Indigo Design **GitHub** (英語)](https://github.com/IgniteUI/design-system-docfx)
