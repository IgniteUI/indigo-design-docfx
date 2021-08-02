---
title: Elevation - デザイン システム スタイリング
_description: Elevations は、互いに積み重なったサーフェイスの相対的な位置を示すために使用されます。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# Elevation (エレベーション)

There are 24 elevations supported by the **Indigo.Design System** that are used across Components and Patterns to cast a shadow on the underlying content. Bottom Navigation や Floating Action Button などのコンポーネントは視覚的な階層を確立しますが、Registration または Login Form などの特定の要素をフロートさせることにも利用できます。Elevation は、[マテリアル デザイン エレベーション (英語)](https://material.io/design/environment/elevation.html#) および [Ignite UI for Angular Shadows](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/shadows.html) と同じです。

## Elevation のサポート

Elevation は単純なロジックに従っています。Elevation の数値が大きくなると、シャドウがより暗く表示されます。シャドウは umbra、penumbra、および ambient の 3 つが重なったシャドウ カラーの組み合わせで値は Material Design の定義と一致します。

<img class="responsive-img" src="../images/elevation_people.png" srcset="../images/elevation_people@2x.png 2x" />

In Sketch, Elevations can be found on a separate page named `🎨 Elevation` and are available as Layer Styles that can be applied to any shape. In the components that use them, we have applied this style to the correct layer, which is most often a Mask layer, or a specially designated `Elevation` rectangle. In Adobe XD elevations are placed on an Artboard with the same name in the left column of the library file and exist as components that are used across components and patterns.

> [!Note]
> コンポーネントのスタイルを変更して Elevation を変更することは Sketch で可能ですが、現在 Ignite UI for Angular では実装されていません。

## Sketch でスタンドアロン Elevation を使用

Elevation を単独で使用してコンテンツの一部を持ち上げて残りの部分よりもフォーカスする場合、コンテンツのサイズに一致する四角形に選択した Elevation Layer Style を適用します。

## Adobe XD でスタンドアロン Elevation を使用

To use an Elevation on its own e.g. to lift one part of the content and draw more focus to it than the rest, simply drag one of them from the `Libraries` panel to your artboard and use it as a surface on top of which you will add the rest of the user interface, including a layer for background color. Sometimes you would like to have rounded corners e.g. when designing a dialog so in order to have your elevation conform to this, expand it from the Layers panel, select its three internal layers, and set their corner radius to the desired value.

## スタンドアロン Elevation の例

<img class="responsive-img" src="../images/elevation_standalone.png" srcset="../images/elevation_standalone@2x.png 2x" />

## その他のリソース

関連トピック:

- [Bottom navigation](../components/bottom-nav.md)
- [Button](../components/button.md)
- [Card](../components/card.md)
- [Forms](../patterns/form.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
