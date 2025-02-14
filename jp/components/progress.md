---
title: Progress - デザイン システム コンポーネント
_description: Progress コンポーネント シンボルは、タスクの状態、進捗、完了をビジュアルで示すインジケーターです。
_keywords: デザイン システム, デザイン システム UX, UI キット, Figma, Figma to Angular, Figma からコードをエクスポート, Figma to HTML, Figma HTML, Figma UI キット, Ignite UI for Angular, Angular, Angular デザイン システム, Angular 用のデザイン キット
_language: ja
---

# Progress (プログレス)

Progress コンポーネントは、タスクの進行状況について明確に示し、長くかかるタスクの完了予測を示します。また、正確な完了時刻がわからないシナリオや、注文の履行やファイルのアップロード / ダウンロードなどの一連の小さなタスクの完了に応じて、より大きなワークフローがある場合にも非常に効果的です。Progress コンポーネントは、[Ignite UI for Angular Linear Progress コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/linear_progress.html)および [Ignite UI for Angular Circular Progress コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/circular_progress.html)と視覚的に同じものです。

## Progress のデモ

<img class="responsive-img" src="../images/progress_demo.png" srcset="../images/progress_demo@2x.png 2x" />

## 形状とタイプ

進行状況インジケーターは、アプリの読み込み、フォームの送信、更新の保存など、進行中のプロセスのステータスをユーザーに通知します。Progress は、さまざまなユースケースとレイアウト要件に適合する 2 つのレイアウト形状をサポートしています: **Circular Bar** と **Linear Bar**。これらの各レイアウトには、進行のタイプの追加の選択が付属しています: **Determinate (確定)** および **Indeterminate (不確定)**。

- **Determinate** インジケーターは、既知の期間または予想される完了時間を持つタスクまたはプロセスの進行状況を示します。
- **Indeterminate** インジケーターは、プロセスが進行中であることを示しますが、正確な時間や進行状況は不明です。

<img class="responsive-img" src="../images/progress_circular_determinate.png" srcset="../images/progress_circular_determinate@2x.png 2x" />
<img class="responsive-img" src="../images/progress_linear_determinate.png" srcset="../images/progress_linear_determinate@2x.png 2x" />
<img class="responsive-img" src="../images/progress_circular_indeterminate.png" srcset="../images/progress_circular_indeterminate@2x.png 2x" />
<img class="responsive-img" src="../images/progress_linear_indeterminate.png" srcset="../images/progress_linear_indeterminate@2x.png 2x" />

## 状態

Progress は、以下のプリセット カラーの組み合わせの 1 つを使用できます。

- **Default**: デフォルトで基本原色を利用します。
- **Info**: `info` テーマ カラーを使用して進行状況を表示
- **Success**: `success` テーマの色を使用して進行状況を表示します。
- **Warn**: `warn` テーマの色を使用して進行状況を表示します。
- **Danger**: `error` テーマ カラーを使用して進行状況を表示

<img class="responsive-img" src="../images/progress_default.png" srcset="../images/progress_default@2x.png 2x" />
<img class="responsive-img" src="../images/progress_info.png" srcset="../images/progress_info@2x.png 2x" />
<img class="responsive-img" src="../images/progress_success.png" srcset="../images/progress_success@2x.png 2x" />
<img class="responsive-img" src="../images/progress_warn.png" srcset="../images/progress_warn@2x.png 2x" />
<img class="responsive-img" src="../images/progress_danger.png" srcset="../images/progress_danger@2x.png 2x" />

## Progress の量

確定タイプの Progress を使用する場合、6 種類のパーセント値を Value として選択できます。Figma では、右側のサイドバーにある `Value` プロパティからバリアントを選択できます。

<img class="responsive-img" src="../images/progress_circular-progress-amount.png" srcset="../images/progress_circular-progress-amount@2x.png 2x" />
<img class="responsive-img" src="../images/progress_linear-progress-amount.png" srcset="../images/progress_linear-progress-amount@2x.png 2x" />

## ストライプ

Progress コンポーネントに Linear Bar レイアウト形状を使用する場合、Fill 領域のストライプの追加オプションが付属します。Stripes を削除するには、Figma の `Striped` ブール値プロパティを使用します。

<img class="responsive-img" src="../images/progress_linearstripes.png" srcset="../images/progress_linearstripes@2x.png 2x" />

## スタイル設定

Progress コンポーネントは、テキストの色、太さ、および位置をカスタマイズするためのさまざまなオプションがあり、高い自由度を持つスタイリングが可能です。さらに、Progress、Base、Stripes、Fill、および Track の色を必要に応じて調整できるため、あらゆるデザイン スキームにシームレスに統合できます。

<img class="responsive-img" src="../images/progress_striped.png" srcset="../images/progress_striped@2x.png 2x" />
<img class="responsive-img" src="../images/progress_clear.png" srcset="../images/progress_clear@2x.png 2x" />
<img class="responsive-img" src="../images/progress_twocolor.png" srcset="../images/progress_twocolor@2x.png 2x" />

## 使用方法

Circular Bar は常にテキスト ラベルの実際の値を使用し、Linear Bar は一般的な文字列をユーザーに表示するのではなく、残りの時間とファイルに基づいてタスクの完了状況の正確な予測を提供します。ただし、両方のバーに不確定バリアントを使用して、確実で明確な完了時間を表示せずに Progress を表示することができます。

| 良い例                                                                             | 悪い例                                                                                 |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/progress_do1.png" srcset="../images/progress_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/progress_dont1.png" srcset="../images/progress_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/progress_do2.png" srcset="../images/progress_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/progress_dont2.png" srcset="../images/progress_dont2@2x.png 2x" /> |
| <img class="responsive-img" src="../images/progress_do3.png" srcset="../images/progress_do3@2x.png 2x" /> | <img class="responsive-img" src="../images/progress_dont3.png" srcset="../images/progress_dont3@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [AV Player パターン](../patterns/av.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
