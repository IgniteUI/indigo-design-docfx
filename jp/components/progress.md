---
title: Progress - デザイン システム コンポーネント
_description: Progress コンポーネント シンボルは、タスクの状態、進捗、完了をビジュアルで示すインジケーターです。
_keywords: デザイン システム, Sketch, Ignite UI for Angular, コンポーネント, UI ライブラリ, ウィジェット
_language: ja
---

## Progress

Progress コンポーネント シンボルは、タスクの進行状況について明確に示し、長くかかるタスクの完了予測を示します。Progress コンポーネントは、大きなワークフローの完了がよりシンプルで小さい一連のタスクの完了に依存している場合に適しています。Progress は、[Ignite UI for Angular Linear Progress コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/linear_progress.html)および [Ignite UI for Angular Circular Progress コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/circular_progress.html)と視覚的に同じものです。

### Progress デモ

![](../images/progress_demo.png)

### タイプ

Progress は、さまざまなユースケースやレイアウト要件に対応するための 2 つのレイアウト タイプ (Circular Bar および Linear Bar) をサポートします。

![](../images/progress_circular.png)
![](../images/progress_linear.png)

### 状態

Progress は、以下のプリセット カラーの組み合わせの 1 つを使用できます。

- **default**
- success: `success` テーマ カラーを使用して進行状況を表示
- warn: `warn` テーマ カラーを使用して進行状況を表示
- error: `error` テーマ カラーを使用して進行状況を表示
- info: `info` テーマ カラーを使用して進行状況を表示

![](../images/progress_default.png)
![](../images/progress_success.png)
![](../images/progress_warn.png)
![](../images/progress_error.png)
![](../images/progress_info.png)

### スタイル設定

Progress は、さまざまなオーバーライドでテキスト、ストリップ、塗りつぶし、トラックの色を制御することにより柔軟にスタイル設定できます。

![](../images/progress_striped.png)
![](../images/progress_clear.png)
![](../images/progress_twocolor.png)

## 使用方法

Circular Bar は常にテキスト ラベルの実際の値を使用し、Linear Bar は一般的な文字列をユーザーに表示するのではなく、残りの時間とファイルに基づいてタスクの完了状況の正確な予測を提供します。

| いい例                              | 悪い例                             |
| ------------------------------- | --------------------------------- |
| ![](../images/progress_do1.png) | ![](../images/progress_dont1.png) |
| ![](../images/progress_do2.png) | ![](../images/progress_dont2.png) |

## コードの生成

Circular または Linear Bar に色またはフォントを指定した場合、Circular または Linear Bar HTML 要素は div でラップされます。ブラウザーによってネスト コンポーネント (他のコンポーネント内のコンポーネント) のスタイル設定が要求されます。

> [!WARNING]
> デザインの Circular または Linear Bar のインスタンスで`シンボルからデタッチ`をトリガーすると、ほとんどの場合で Circular または Linear Bar のためのコード生成機能が失われる結果となります。

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

### データ プロパティ

`🕹️DataProperty` 値は Circular または Linear Bar 値プロパティへのデータ バインディングを設定するために使用されます。`🕹️DataProperty` はオプションです。`🕹️DataProperty` は、生成要求で提供されるモデル オブジェクト名で指定されたデータ オブジェクトのプロパティ名です。

### 状態

State プロパティが off または無効に設定した場合、コントロールは描画されません。

### リニアバー テキスト スタイル

リニアバー テキスト スタイルは、Linear Bar の配置とテキスト色の制御に使用します。Text Style を "None" に変更した場合、テキストは Linear Bar で非表示になります。ジェネレーターは Text Style の Bold オプションを無視しますが、デフォルト フォント ウェイトを使用する Linear Bar を描画します。

#### リニア バー テキスト

Text プロパティにテキスト、バインディング、または両方を含むことができます。例:

- 設定
- {settingsLabel}
- 重要な {labelText}

## その他のリソース

関連トピック:

- [AV Player Pattern](av-player.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

- [Indigo Design **GitHub** (英語)](https://github.com/IgniteUI/design-system-docfx)
