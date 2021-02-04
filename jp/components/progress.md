---
title: Progress - デザイン システム コンポーネント
_description: Progress コンポーネント シンボルは、タスクの状態、進捗、完了をビジュアルで示すインジケーターです。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# Progress (プログレス)

Progress コンポーネントは、タスクの進行状況について明確に示し、長くかかるタスクの完了予測を示します。また、正確な完了時刻がわからないシナリオや、注文の履行やファイルのアップロード / ダウンロードなどの一連の小さなタスクの完了に応じて、より大きなワークフローがある場合にも非常に効果的です。Progress コンポーネントは、[Ignite UI for Angular Linear Progress コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/linear_progress.html)および [Ignite UI for Angular Circular Progress コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/circular_progress.html)と視覚的に同じものです。

## Progress デモ

<img class="responsive-img" src="../images/progress_demo.png" srcset="../images/progress_demo@2x.png 2x" />

## 形状とタイプ

Progress は、さまざまなユースケースとレイアウト要件に適合する 2 つのレイアウト形状をサポートしています: Circular Bar と Linear Bar。これらの各レイアウトには、進行のタイプの追加の選択が付属しています: 確定および不確定。

<img class="responsive-img" src="../images/progress_circular.png" srcset="../images/progress_circular@2x.png 2x" />
<img class="responsive-img" src="../images/progress_linear.png" srcset="../images/progress_linear@2x.png 2x" />

## 状態

Progress は、以下のプリセット カラーの組み合わせの 1 つを使用できます。

- **default**: デフォルトで基本原色を利用します。
- error: `error` テーマ カラーを使用して進行状況を表示
- info: `info` テーマ カラーを使用して進行状況を表示
- success: `success` テーマの色を使用して進行状況を表示します。
- warn: `warn` テーマの色を使用して進行状況を表示します。


<img class="responsive-img" src="../images/progress_default.png" srcset="../images/progress_default@2x.png 2x" />
<img class="responsive-img" src="../images/progress_error.png" srcset="../images/progress_error@2x.png 2x" />
<img class="responsive-img" src="../images/progress_info.png" srcset="../images/progress_info@2x.png 2x" />
<img class="responsive-img" src="../images/progress_success.png" srcset="../images/progress_success@2x.png 2x" />
<img class="responsive-img" src="../images/progress_warn.png" srcset="../images/progress_warn@2x.png 2x" />

## Progress の量

確定タイプの Progress を使用する場合、6 種類のパーセント値を Progress の量として選択できます。

<img class="responsive-img" src="../images/progress_circular-progress-amount.png" srcset="../images/progress_circular-progress-amount@2x.png 2x" />
<img class="responsive-img" src="../images/progress_linear-progress-amount.png" srcset="../images/progress_linear-progress-amount@2x.png 2x" />

## ストライプ

Progress コンポーネントに Linear Bar レイアウト形状を使用する場合、塗りつぶし領域のストライプの追加オプションが付属します。ストライプを削除するには、`🌈 Stripes` 色オーバーライドを `transparent` に設定するだけです。

<img class="responsive-img" src="../images/progress_linearstripes.png" srcset="../images/progress_linearstripes@2x.png 2x" />

## スタイル設定

Progress は、さまざまなオーバーライドでテキストおよび必要に応じて、プログレス、基本色、ストリップ、塗りつぶし、トラックの色を制御することにより柔軟にスタイル設定できます。

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
