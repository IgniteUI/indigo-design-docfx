---
title: Indigo Design App Builder - Flex レイアウト
_description: Indigo Design App Builder は Web アプリを対象としています。そのため、レイアウトを作成するアプローチの 1 つとして Flex を提供しています。ツールボックスの行または列のレイアウト コンポーネントとして利用できます。
_keywords: App builder flex レイアウト, Indigo Design, インフラジスティックス
_language: ja
---

# Flex レイアウト（および配置） 

<section class="feature__container">
    <div class="feature">
        <div class="feature__image">
            <iframe width="800" height="450" src="https://www.youtube.com/embed/MUq3MGm9YlU" frameborder="0" allowfullscreen></iframe>
            <p> アプリのレイアウトを作成する</p>
            <br>
        </div>
    </div>
</section>

Indigo Design App Builder と通常の製品デザイン ツールの最大の違いの 1 つは、デザインからコードまでのツールで使用される Flex に基づくレイアウトです。Indigo Design App Builder は Web アプリを対象としているため、レイアウトを作成するアプローチの 1 つとして Flex を提供しています。ツールボックスの行または列のレイアウト ンポーネントとして利用できます。ここに表示されている最も外側のコンテナはキャンバスであり、flex 設定がすでに適用されています。プロパティ パネルで Viewport のサイズを編集することにより、キャンバス サイズを変更できます。

<img class="responsive-img" src="../../images/edit-create-canvas-size-Indigo-Design-App-Builder.gif" />
<p style="text-align:center;">キャンバス サイズの変更</p>

## 行と列のレイアウト 

Flex レイアウト コンテナには、ネストされた UI 要素の位置を変更できる設定があります。H.align プロパティと V.Aalign プロパティには、それぞれのドロップダウンから簡単に適用できる flex プロパティがあります。キャンバスのデフォルトは行レイアウトで、水平方向に左揃えになり、垂直方向に引き伸ばされます。何から始めたかに関係なく、いつでも行と列のレイアウトを切り替えることができます。レイアウト コンテナのサイズはコンテンツに基づいていますが、高さと幅はいつでも指定できます。Padding プロパティをコンテナに追加し、マージンを追加して子 UI 要素のスペースを空けることもできます。これは、特定のコンポーネントを選択し、画面右側のプロパティ パネルでパディングまたはマージンを編集した後に実行できます。

<img class="responsive-img" src="../../images/row-column-layout-Indigo-Design-App-Builder.gif" />
<p style="text-align:center;">レイアウト プロパティ</p>

子要素のラベルをクリックすると、いつでも親 UI 要素を選択できます。これは、ネストされたレイアウト コンテナがある場合に役立ちます。一方、左下隅の [Outline] メニューから必要なコンポーネントを直接選択することもできます。 

<img class="responsive-img" src="../../images/select-parent-Indigo-Design-App-Builder.gif" />
<p style="text-align:center;">親コンポーネントを選択する</p>

## 流動的なサイズ変更と折り返し 

他の注目に値するプロパティは、拡大と縮小に関連しています。これらは、Viewport のサイズが変更されたときにコンポーネントのサイズ変更に影響します。コンポーネントを `grow` に設定すると、コンテナが行レイアウトの場合は行方向に、列レイアウトの場合は列方向に展開されます。
 
<img class="responsive-img" src="../../images/grow-column-row-layout-Indigo-Design-App-Builder.gif" />
<p style="text-align:center;">列/行のレイアウト オプションを拡大する</p>


## コンテキスト メニューからレイアウトに追加 

既存のコンポーネントを新しいレイアウトに追加する必要がある場合は、非常に便利なオプションがあります。選択したコンポーネントを右クリックすると、コンテキスト メニューがトリガーされ、要素を行または列のレイアウトに追加できます。   

<img class="responsive-img" src="../../images/add-to-layout-Indigo-Design-App-Builder.gif" />
<p style="text-align:center;">コンテキスト メニューからレイアウトにコンポーネントを追加する</p>

## その他のリソース

簡単にまとめると、Flex レイアウトについて学んだことはすべて、エディターでそのまま使用できます。Flex と CSS を初めて使用する人にとっては、慣れるまでに少し時間がかかりますが、時間の経過とともに、レイアウトを行と列として考えることがはるかに簡単になります。最も重要なのは、Flex レイアウトは、画面サイズに適応するアプリケーションを構築し、レイアウト内のコンポーネントの動作を定義するのに役立ちますが、絶対レイアウトでは、1 つの画面サイズのみに対して特定のデザインを行うことができます。 

<div class="divider--half"></div>

* [App Builder コンポーネント](../indigo-design-app-builder-components.md)
* [Flexbox (英語)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
* [Flexbox のガイド (英語)](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Flexbox Froggy (英語)](https://flexboxfroggy.com/)