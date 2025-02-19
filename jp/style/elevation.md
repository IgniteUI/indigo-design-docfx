---
title: Elevation - デザイン システム スタイリング
_description: Elevations は、互いに積み重なったサーフェイスの相対的な位置を示すために使用されます。
_keywords: デザイン システム, デザイン システム UX, UI キット, Ignite UI for Angular, Angular, Angular デザイン システム, Angular 用のデザイン キット, Figma, Figma to Angular, Figma からコードをエクスポート, Figma HTML, Figma to HTML, Figma UI キット
_language: ja
---

# Elevation (エレベーション)

**Indigo.Design システム**でサポートされている 24 のエレベーションがあり、コンポーネントとパターン全体で使用されて、基になるコンテンツに影を表示します。Bottom Navigation や Floating Action Button などのコンポーネントは視覚的な階層を確立しますが、Registration または Login Form などの特定の要素をフロートさせることにも利用できます。Elevation は、[マテリアル デザイン エレベーション (英語)](https://material.io/design/environment/elevation.html#) および [Ignite UI for Angular Shadows](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/shadows.html) と同じです。

## Elevation のサポート

Elevation は単純なロジックに従っています。Elevation の数値が大きくなると、シャドウがより暗く表示されます。シャドウは umbra、penumbra、および ambient の 3 つが重なったシャドウ カラーの組み合わせで値は Material Design の定義と一致します。

<img class="responsive-img" src="../images/elevation_people.png" srcset="../images/elevation_people@2x.png 2x" />

Figma では、エレベーションは `↳ Elevation` という別のページに配置されます。ほとんどの場合、これらはコンポーネントのフレームまたはコンポーネント構造内の背景レイヤーに適用され、プロパティ パネルで Effect スタイルとして使用できます。

> [!Note]
> コンポーネントのスタイルを変更して Elevation を変更することは Figma で可能ですが、現在 Ignite UI for Angular では実装されていません。

## Figma でスタンドアロン Elevation を使用

エレベーションを単独で使用するには (たとえば、コンテンツの一部を持ち上げて、残りの部分よりも多くのフォーカスを描画する場合)、それを効果スタイルとして別の背景レイヤーに適用するだけです。プロジェクト内でフレームを使用している場合は、フレームに直接適用できますが、エレベーションを表示するために必ず塗りつぶしのカラーも適用してください。

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
