---
title: Tree コンポーネント - デザイン システム コンポーネント
_description: ツリー コンポーネント シンボルは、カテゴリ間の階層関係を視覚的に表現するために使用され、リスト構造で表示されます。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット, Figma, Figma to Angular, Figma からコードをエクスポート, Figma HTML, Figma to HTML, Figma UI キット
_language: ja
---

## Tree (ツリー)
ツリー コンポーネント は、カテゴリ間の階層関係を視覚的に表現するために使用され、リスト構造で表示されます。
Tree コンポーネントは、[Ignite UI for Angular Tree コンポーネント](https://www.infragistics.com/products/ignite-ui-angular/angular/components/tree.html)と視覚的に同一です。

## Tree のデモ

<img class="responsive-img" src="../images/tree_demo.png" srcset="../images/tree_demo@2x.png 2x" />

## Tree の密度

Tree コンポーネントは、Comfort、Cozy、Compact の 3 つの表示密度をサポートします。Figma では、プロパティ パネルから「Display Density」プロパティの値を変更することで 3 つを切り替えることができますが、Sketch では、シンボルを挿入する前に表示密度を選択する必要があります。

<img class="responsive-img" src="../images/tree_density_comfortable.png" srcset="../images/tree_density_comfortable@2x.png 2x" />
<img class="responsive-img" src="../images/tree_density_cosy.png" srcset="../images/tree_density_cosy@2x.png 2x" />
<img class="responsive-img" src="../images/tree_density_compact.png" srcset="../images/tree_density_compact@2x.png 2x" />

## Tree の種類

次の 2 種類の Tree コンポーネントをサポートしています。Basic (基本) と展開アイコンの後にチェックボックス コンポーネントがある　Checkbox (チェックボックス) です。Figma では、プロパティ パネルから「Checkbox」ブール値プロパティを使用して 2 つのタイプを切り替えることができますが、Sketch では、表示密度を選択した後、シンボルを挿入する前にタイプを選択する必要があります。

<img class="responsive-img" src="../images/tree_type_basic.png" srcset="../images/tree_type_basic@2x.png 2x" />
<img class="responsive-img" src="../images/tree_type_checkbox.png" srcset="../images/tree_type_checkbox@2x.png 2x" />

## Tree Node (ツリー ノード) 構造

Tree コンポーネントは、ツリー ノードと呼ばれる多数のネストされたコンポーネントから構築されます。各ノードは展開アイコンとテキストで構成されます。チェックボックス種類を選択した場合は、展開アイコンの後にチェックボックス コンポーネントも表示されます。 

<img class="responsive-img" src="../images/tree-node_basic.png" srcset="../images/tree-node_basic@2x.png 2x" />
<img class="responsive-img" src="../images/tree-node_checkbox.png" srcset="../images/tree-node_checkbox@2x.png 2x" />

各ノードのテキストは、通常のテキストからハイパーリンク テキストに切り替えることができます。Figma では、プロパティ パネルの「Hyperlink Text」プロパティを使用して 3 つを切り替えることができますが、Sketch ではこれは `Symbol Overrides` で実現されます。

<img class="responsive-img" src="../images/tree-node_basic.png" srcset="../images/tree-node_basic@2x.png 2x" />
<img class="responsive-img" src="../images/tree-node_hyperlink.png" srcset="../images/tree-node_hyperlink@2x.png 2x" />

また、展開アイコンの 2 つの状態 (縮小または展開した状態) もサポートされています。Figma では、プロパティ パネルの「Expand Icon」プロパティを使用して 3 つを切り替えることができますが、Sketch ではこれは `Symbol Overrides` で実現されます。

<img class="responsive-img" src="../images/tree-node_basic.png" srcset="../images/tree-node_basic@2x.png 2x" />
<img class="responsive-img" src="../images/tree-node_expanded.png" srcset="../images/tree-node_expanded@2x.png 2x" />

## Tree Node (ツリー ノード) レベル

ノード間の階層関係を表すために、ツリー ノードは　Root、Child、Grandchild　の 3 つのレベル種類をサポートします。Figma では、プロパティ パネルの「Level」プロパティを使用して別のレベルに切り替えることができますが、Sketch ではこれは `Symbol Overrides`　を使用して実現されます。 

<img class="responsive-img" src="../images/tree_demo.png" srcset="../images/tree_demo@2x.png 2x" />

## Tree Node (ツリー ノード) 状態

Tree Node　には、Idle と Disabled という 2 つの主な状態があります。さまざまなインタラクション状態から選択することもできます。Figma では、これはプロパティ パネルから「State」プロパティの値を変更することで実現できますが、Sketch では `Symbol Overrides`　を使用して実現されます。

<img class="responsive-img" src="../images/tree-node_basic.png" srcset="../images/tree-node_basic@2x.png 2x" />
<img class="responsive-img" src="../images/tree-node_disabled.png" srcset="../images/tree-node_disabled@2x.png 2x" />

## Tree のプリセット

基本的な Tree コンポーネントに加えて、Active (アクティブ)、Cascading Selection (カスケード選択)、Multiple Selection (複数選択) の 3 つのツリー プリセットから選択することもできます。これらにより、デザインの構築がより簡単かつ迅速になります。Figma では、これらは個別のコンポーネントであり、ツリー コンポーネントと同じページに配置されており、[アセット] パネルまたは [リソース] パネルから挿入できます。Sketch では、これらは Tree フォルダーの下の「Presets」という別のグループにあります。

<img class="responsive-img" src="../images/tree_presets_active.png" srcset="../images/tree_presets_active@2x.png 2x" />
<img class="responsive-img" src="../images/tree_presets_cascading-selection.png" srcset="../images/tree_presets_cascading-selection@2x.png 2x" />
<img class="responsive-img" src="../images/tree_presets_multiple-selection.png" srcset="../images/tree_presets_multiple-selection@2x.png 2x" />

## スタイル設定

Tree には、Expand Icon (展開アイコン)、Checkbox (チェックボックス)、Text (テキスト) の色、および Tree Node のさまざまな状態で使用される色に使用できるオプションにより、スタイルの柔軟性が備わっています。

<img class="responsive-img" src="../images/tree_styling.png" srcset="../images/tree_styling@2x.png 2x" />

## 使用方法

展開した Tree Node の場合、必ず展開アイコンの状態を「Expanded」に切り替えてください。Tree Node の子の一部 (すべてではない) が選択されている場合は、必ず親ノードの Checkbox の状態を不定状態に切り替えてください。

| 良い例                                                                             | 悪い例                                                                              |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/tree_do1.png" srcset="../images/tree_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/tree_dont1.png" srcset="../images/tree_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/tree_do2.png" srcset="../images/tree_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/tree_dont2.png" srcset="../images/tree_dont2@2x.png 2x" /> |

# その他のリソース

関連トピック:

- [Checkbox](../components/checkbox.md)
- [Icon](../components/icon.md)


コミュニティに参加して新しいアイデアをご提案ください。








