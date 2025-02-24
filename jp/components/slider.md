---
title: Slider - デザイン システム コンポーネント
_description: Slider コンポーネントは、ユーザーの単一の値や範囲の選択をサポートします。
_keywords: デザイン システム, デザイン システム UX, UI キット, Figma, Ignite UI for Angular, Figma to Angular, Angular, Angular デザイン システム, Figma からコードをエクスポート, Angular 用のデザイン キット, Figma HTML, Figma to HTML, Figma UI キット
_language: ja
---

# Slider (スライダー)

Slider コンポーネントは、単一値の選択や両値の最後を選択して値範囲の指定が可能です。Slider は、[Ignite UI for Angular Slider コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/slider/slider.html)と視覚的に同じものです。

## Slider のデモ

<img class="responsive-img" src="../images/slider_demo.png" srcset="../images/slider_demo@2x.png 2x" />

## タイプ

Slider を使用すると、ユーザーは 2 つのタイプ - **Continuous (連続)** と Discrete (離散不連続) - から選択できます。Figma では、右側のプロパティ パネルの `Type` プロパティを使用して切り替えることができます。

<img class="responsive-img" src="../images/slider_onethumb.png" srcset="../images/slider_onethumb@2x.png 2x" />

## つまみ

Slider は、単一値の選択に**つまみ**と範囲を指定するための **2 つのつまみ**を提供します。Figma では、右側のプロパティ パネルの `Variant` プロパティを使用して切り替えることができます。また、`Lower Thumb` プロパティと `Upper Thumb` プロパティからつまみの値を指定したり、つまみのラベルで手動で調整したりすることもできます。

<img class="responsive-img" src="../images/slider_demo.png" srcset="../images/slider_demo@2x.png 2x" />

## 状態

Slider は、値の変更が可能かどうかを設定する **Enabled (有効)**/**Disabled (無効)** の状態をサポートします。Figma では、右側のプロパティ パネルの `Disabled` ブール値プロパティを使用して、2 つを切り替えることができます。

<img class="responsive-img" src="../images/slider_enabled.png" srcset="../images/slider_enabled@2x.png 2x" />
<img class="responsive-img" src="../images/slider_disabled.png" srcset="../images/slider_disabled@2x.png 2x" />

## スタイル設定

Slider は、さまざまなオプションを通じてラベル背景、つまみ、トラック、ベース トラックの色を柔軟にスタイル設定できます。

<img class="responsive-img" src="../images/slider_styling.png" srcset="../images/slider_styling@2x.png 2x" />

## 使用方法

Slider トラックの色は、常にトラックのベースの色よりも強調する必要があり、単一値と範囲の両方の Sliders は一貫してスタイルを設定する必要があります。

| 良い例                            | 悪い例                           |
| ----------------------------- | ------------------------------- |
| <img class="responsive-img" src="../images/slider_do1.png" srcset="../images/slider_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/slider_dont1.png" srcset="../images/slider_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/slider_do2.png" srcset="../images/slider_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/slider_dont2.png" srcset="../images/slider_dont2@2x.png 2x" /> |

コミュニティに参加して新しいアイデアをご提案ください。
