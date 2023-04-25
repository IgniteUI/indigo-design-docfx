---
title: Carousel - デザイン システム コンポーネント
_description: Carousel コンポーネント シンボルは画像コレクションの順次的なブラウジングが可能です。
_keywords: デザイン システム, デザイン システム UX, UI キット, Figma, Figma to Angular, Figma からコードをエクスポート, Figma to HTML, Figma UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット, Adobe XD, Adobe XD to Angular, Adobe XD からコードをエクスポート, Adobe XD to HTML, Adobe XD UI キット
_language: ja
---

# Carousel (カルーセル)

Carousel コンポーネント シンボルは、横矢印キーを使用して画像コレクションの前や次の画像に順次的にナビゲーションできます。Carousel は、[Ignite UI for Angular Carousel コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/carousel.html)と視覚的に同じものです。

## Carousel のデモ

<img class="responsive-img" src="../images/carousel_demo.png" srcset="../images/carousel_demo@2x.png 2x" />

## インジケーターとスライド

Carousel では、最大 10 個のスライドを定義できます。各スライドには、一致するインジケーター点があり、ユーザーはそれぞれのスライドに移動できます。**Figma** では、レイヤーを非表示にすることでインジケーターの量を調整でき、自動レイアウトによってレイアウトが調整されます。**Sketch** では、インジケーターの状態は `Symbol Overrides` で実現され、不要なインジケーターを ~No Symbol に設定することで量を調整できます。適用されたスマート レイアウト ルールに応じてレイアウトを調整できます。**Adobe XD** では、`Component States` パラダイムを使用して簡単に切り替えることができ、不要なインジケーターのレイヤーを削除するだけで量を調整できます。適用されたスタックはそれに応じてレイアウトを調整します。

<img class="responsive-img" src="../images/carousel_indicators&slides.png" srcset="../images/carousel_indicators&slides@2x.png 2x" />

## スタイル設定

Carousel は、さまざまなオプションを通じてナビゲーション ボタンの背景とアイコンの色、インジケーターの色、境界線の色、現在アクティブなスライドのスライド画像、ボタン エレベーションおよび状態 (適用可能な場合) を柔軟にスタイル設定できます。一度に 1 つのインジケーターのみアクティブにできます。

<img class="responsive-img" src="../images/carousel_styling.png" srcset="../images/carousel_styling@2x.png 2x" />

## 使用方法

Carousel の戻るおよび次へ移動するためのボタンは、常に画像スライドの一番上に表示されます。インジケーターのスタイルは統一し、アクティブな項目のみ強調します。

| 良い例                                                                                 | 悪い例                                                                                  |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/carousel_do1.png" srcset="../images/carousel_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/carousel_dont1.png" srcset="../images/carousel_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/carousel_do2.png" srcset="../images/carousel_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/carousel_dont2.png" srcset="../images/carousel_dont2@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [Grid](grid.md)

コミュニティに参加して新しいアイデアをご提案ください。
