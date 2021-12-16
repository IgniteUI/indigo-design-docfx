---
title: Elevation - デザイン システム スタイリング
_description: Elevation レイヤー スタイルは、互いに積み重なったサーフェイスの相対的な位置を示すために使用されます。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# Elevation (エレベーション)

**Indigo.Design システム**の `🎨 Elevation` ページで、コンポーネントとパターンで 24 の Elevation が使用され、基になるコンテンツに影を表示します。Bottom Navigation や Floating Action Button などのコンポーネントは視覚的な階層を確立しますが、Registration または Login Form などの特定の要素をフロートさせることにも利用できます。Elevation は、[マテリアル デザイン エレベーション (英語)](https://material.io/design/environment/elevation.html#) および [Ignite UI for Angular Shadows](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/shadows.html) と同じです。

## Elevation のサポート

Elevation は単純なロジックに従っています。Elevation の数値が大きくなると、シャドウがより暗く表示されます。シャドウは umbra、penumbra、および ambient の 3 つが重なったシャドウ カラーの組み合わせで値は Material Design の定義と一致します。Sketch で Elevation は、任意の図形に適用できる Layer Styles として利用できます。Layer Styles を使用するコンポーネントでは、このスタイルを Mask レイヤーまたは特別に指定された `Elevation` 四角形である正しいレイヤーに適用します。

<img class="responsive-img" src="../images/elevation_people.png" srcset="../images/elevation_people@2x.png 2x" />

> [!Note]
> コンポーネントのスタイルを変更して Elevation を変更することは Sketch で可能ですが、現在 Ignite UI for Angular では実装されていません。

## スタンドアロン Elevation の使用

Elevation を単独で使用してコンテンツの一部を持ち上げて残りの部分よりもフォーカスする場合、コンテンツのサイズに一致する四角形に選択した Elevation Layer Style を適用します。

<img class="responsive-img" src="../images/elevation_standalone.png" srcset="../images/elevation_standalone@2x.png 2x" />

## その他のリソース

関連トピック:

- [Bottom navigation](../components/bottom-nav.md)
- [Button](../components/button.md)
- [Card](../components/card.md)
- [Forms](../patterns/form.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。


