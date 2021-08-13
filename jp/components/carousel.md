---
title: Carousel - デザイン システム コンポーネント
_description: Carousel コンポーネント シンボルは画像コレクションの順次的なブラウジングが可能です。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# Carousel (カルーセル)

Carousel コンポーネント シンボルは、横矢印キーを使用して画像コレクションの前や次の画像に順次的にナビゲーションできます。Carousel は、[Ignite UI for Angular Carousel コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/carousel.html)と視覚的に同じものです。

## Carousel のデモ

<img class="responsive-img" src="../images/carousel_demo.png" srcset="../images/carousel_demo@2x.png 2x" />

## インジケーターとスライド

Carousel では、最大 10 個のスライドを定義できます。各スライドには、一致するインジケーター点があり、ユーザーはそれぞれのスライドに移動できます。In Sketch, indicator states are achieved with `Symbol Overrides` and you can adjust their amount by setting the unnecessary indicators to ~No Symbol, the smart layout rules applied allow the layout to adjust accordingly. In Adobe XD we are using the `Component States` paradigm to let you easily switch between them and you can adjust the amount simply by deleting the layers of the unnecessary indicators, the applied stack will take care to adjust the layout accordingly.

<img class="responsive-img" src="../images/carousel_indicators&slides.png" srcset="../images/carousel_indicators&slides@2x.png 2x" />

## スタイル設定

Carousel は、さまざまなオプションを通じてナビゲーション ボタンの背景とアイコンの色、インジケーターの色、境界線の色、現在アクティブなスライドのスライド画像、ボタン エレベーションおよび状態 (適用可能な場合) を柔軟にスタイル設定できます。一度に 1 つのインジケーターのみアクティブにできます。

<img class="responsive-img" src="../images/carousel_styling.png" srcset="../images/carousel_styling@2x.png 2x" />

## 使用方法

Carousel の戻るおよび次へ移動するためのボタンは、常に画像スライドの一番上に表示されます。インジケーターのスタイルは統一し、アクティブな項目のみ強調します。

| 良い例                              | 悪い例                             |
| ------------------------------- | --------------------------------- |
| <img class="responsive-img" src="../images/carousel_do1.png" srcset="../images/carousel_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/carousel_dont1.png" srcset="../images/carousel_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/carousel_do2.png" srcset="../images/carousel_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/carousel_dont2.png" srcset="../images/carousel_dont2@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [Grid](grid.md)

コミュニティに参加して新しいアイデアをご提案ください。
