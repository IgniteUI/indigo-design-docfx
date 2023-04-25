---
title: Checkbox - デザイン システム コンポーネント
_description: Checkbox コンポーネント シンボルは、ユーザーが選択にマークできる機能を提供します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット, Figma, Figma to Angular, Figma からコードをエクスポート, Figma HTML, Figma to HTML, Figma UI キット
_language: ja
---

# Checkbox (チェックボックス)

Checkbox コンポーネント シンボルは、設定の変更やフォームでの同意などに最もよく利用されます。Checkbox は、[Ignite UI for Angular Checkbox コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/checkbox.html)と視覚的に同じものです。

## Checkbox のデモ

<img class="responsive-img" src="../images/checkbox_demo.png" srcset="../images/checkbox_demo@2x.png 2x" />

## 操作状態

Checkbox は、有効または無効の状態で挿入できます。Sketch および Adobe XD では、コンポーネントを挿入する前に状態を選択する必要があります。ただし、Figma では、Enabled & Invalid (有効および無効)、Enabled & Hover (有効およびホバー)、Enabled Hover & Invalid (有効なホバーおよび無効)、Enabled & Focused (有効およびフォーカス)、および Enabled Focused & Invalid (有効なフォーカスおよび無効) などの状態が追加され、プロパティ パネルで切り替えることができます。

<img class="responsive-img" src="../images/checkbox_interaction_state.png" srcset="../images/checkbox_interaction_state@2x.png 2x" />

## レイアウト テンプレート

Sketch で Checkbox は、Checkbox 要素の前後に Checkbox ラベルが配置されるラベル位置のバリアントをサポートします。Figma では、「Label Position」プロパティを使用して、ラベルの位置を変更できます。Adobe XD では、Stacks を使用して、チェックボックスのビジュアルの左または右にドラッグするだけで、デザイン時にラベルとチェックボックスの位置を変更できるようにしています。

<img class="responsive-img" src="../images/checkbox_label_after.png" srcset="../images/checkbox_label_after@2x.png 2x" />
<img class="responsive-img" src="../images/checkbox_label_before.png" srcset="../images/checkbox_label_before@2x.png 2x" />

## 状態

Checkbox は、**オン**/オフと不確定状態があります。Figma ではプロパティ パネルの「State」プロパティで選択状態を切り替えることができます。Sketch ではこれを `Symbol Overrides` で実現していますが、Adobe XD では `Component States` パラダイムを使用して簡単に状態を切り替えることができます。

<img class="responsive-img" src="../images/checkbox_selection.png" srcset="../images/checkbox_selection@2x.png 2x" />

## スタイル設定

Checkbox には、チェックと塗りつぶしの色のさまざまなオプション、およびラベルの位置と色を設定するメカニズムによるスタイルの柔軟性があります。

<img class="responsive-img" src="../images/checkbox_styling.png" srcset="../images/checkbox_styling@2x.png 2x" />

## 使用方法

多くの Checkboxes を列グループに配置する必要がある場合にリストをすばやく簡単にスキャンできます。チェックボックスは単一行に隣接して配置できますが、複数列に配置しないようにします。

| 良い例                                                                             | 悪い例                                                                                 |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/checkbox_do1.png" srcset="../images/checkbox_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/checkbox_dont1.png" srcset="../images/checkbox_dont1@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [Form パターン](../patterns/form.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
