---
title: Stepper - デザイン システム コンポーネント
_description: Stepper コンポーネントは、番号付きのステップの進行状況を示します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Figma, Ignite UI for Angular, Figma to Angular, Angular, Angular デザイン システム, Angular 用のデザイン キット, Figma からコードをエクスポート, Figma HTML, Figma to HTML, Figma UI キット
_language: ja
---

# Stepper 

Stepper コンポーネントは、プロセスまたはワークフローを段階的に表示するために使用できる便利な UI 要素であり、ユーザーはプロセスのどこにいて、どのステップが残っているかを簡単に理解できます。Stepper は通常、ステップ番号が付けられた水平または垂直のバーで構成され、現在のステップは強調表示され、完了したステップは塗りつぶされて表示されます。Stepper は、eコマース Web サイトのチェックアウト プロセスから Web アプリケーションの複数ステップ フォームまで、幅広いアプリケーションに使用できます。Stepper は、[Ignite UI for Angular Stepper コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/stepper.html)と視覚的に同じものです。

## Stepper のデモ

<img class="responsive-img" src="../images/stepper_demo.png" srcset="../images/stepper_demo@2x.png 2x" />

## タイプ

Stepper コンポーネントは、Linear (リニア) と Non Linear (非リニア) の 2 つのタイプをサポートしています。Figma では、プロパティ パネルから `Type` プロパティを使用して切り替えることができます。Linear タイプは、ユーザーが、オプションではない前のステップを完了せずに次のステップに進むのを防ぐために使用されます。

<img class="responsive-img" src="../images/stepper_demo.png" srcset="../images/stepper_demo@2x.png 2x" />
<img class="responsive-img" src="../images/stepper_non-linear.png" srcset="../images/stepper_non-linear@2x.png 2x" />

## 方向

Stepper コンポーネントには、Horizontal (水平方向) と Vertical (垂直方向) の 2 つの方向があります。Figma では、プロパティ パネルから `Orientation` プロパティの値を変更することで、この 2 つを切り替えることができます。

<img class="responsive-img" src="../images/stepper_demo.png" srcset="../images/stepper_demo@2x.png 2x" />
<img class="responsive-img" src="../images/stepper_horizontal.png" srcset="../images/stepper_horizontal@2x.png 2x" />

## 構造 

Stepper コンポーネントは、多数のネストされた Step および Progress Line コンポーネントで構成されます。構造上、水平 Stepper と垂直 Stepper の大きな違いが 1 つあります。垂直 Stepper の現在のステップのコンテンツはステップの見出しのすぐ下に配置されますが、水平 Stepper のコンテンツはすべてのステップの下に配置されます。

<img class="responsive-img" src="../images/stepper_vertical.png" srcset="../images/stepper_vertical@2x.png 2x" />
<img class="responsive-img" src="../images/stepper_horizontal.png" srcset="../images/stepper_horizontal@2x.png 2x" />

## ステップ

各ステップは、Indicator (インジケーター) と Information (情報) で構成されます。インジケーターは Number (数値) または Icon (アイコン) のいずれかになります。これは、Figma の右側のプロパティ パネルの `Type` プロパティを使用して切り替えることができます。また、それぞれの `Information` または `Indicator` ブール値プロパティを有効または無効にすることで、Indicator (インジケーター)のみ、または Information (情報) のみを表示するように選択することもできます。さらに、ネストされた Step コンポーネント内の `Subtitle` ブール値プロパティを切り替えることで、Subtitle を表示または非表示にすることができます。

<img class="responsive-img" src="../images/step_number.png" srcset="../images/step_number@2x.png 2x" />
<img class="responsive-img" src="../images/step_icon.png" srcset="../images/step_icon@2x.png 2x" />

また、あらゆるユース ケース シナリオをカバーできるよう、いくつかの Step 状態を提供します。以下が含まれます: Complete (完了)、Incomplete (未完了)、Disabled (無効)、Invalid (無効状態)、Active (アクティブ) です。これらは右側のプロパティ パネルの `State` プロパティから切り替えることができます。Step 状態に加えて、ブール値プロパティのオン/オフを切り替えることでステップをオプションまたは必須として指定できる `Optional Step` プロパティがあります。この `Optional Step` プロパティは、提供されたすべての状態でアクセスでき、各 Step 内のネストされたオプションとして表示されます。

<img class="responsive-img" src="../images/step_state.png" srcset="../images/step_state@2x.png 2x" />

また、Hover と Focused という 2 つの追加状態も提供します。これらは、ブール値プロパティ `Hover` と `Focused` をオン/オフに切り替えることで使用できます。

<img class="responsive-img" src="../images/step_state2.png" srcset="../images/step_state2@2x.png 2x" />

また、Active (アクティブ) と Inactive (非アクティブ) の 2 つのタイプの Progress Line も提供しています。これらは、ネストされた Progress Line コンポーネントを選択した後、プロパティ パネルから `State` プロパティを使用して切り替えできます。

<img class="responsive-img" src="../images/stepper_progress-line_active.png" srcset="../images/stepper_progress-line_active@2x.png 2x" />
<img class="responsive-img" src="../images/stepper_progress-line_inactive.png" srcset="../images/stepper_progress-line_inactive@2x.png 2x" />

## コンテンツ

上記のように、Step が `Active` 状態に設定されると、垂直 Stepper ではアクティブな Step のヘッダーの下に、水平 Stepper ではすべての Step の下に **Content** というフレームが表示されます。デフォルトでは、Content には単純なテキスト レイヤーが付属しており、アクティブなステップに関する情報を追加できます。カスタマイズしたい場合は、コンポーネントを右クリックして `Detach instance` を選択して、コンポーネントをデタッチする必要があります。水平 Stepper の `Content` ブール値プロパティを使用するか、ネストされた Step コンポーネントに移動して、垂直 Stepper のブール値プロパティ `Content` をオフにすることで、完全に非表示にすることもできます。

<img class="responsive-img" src="../images/stepper_non-linear.png" srcset="../images/stepper_non-linear@2x.png 2x" />
<img class="responsive-img" src="../images/stepper_horizontal_content-off.png" srcset="../images/stepper_horizontal_content-off@2x.png 2x" />

## スタイル設定 

Stepper には、インジケーター、テキスト、進行状況線の色のさまざまなオプション、およびさまざまな状態の外観のカスタマイズを通じて、柔軟なスタイル設定が可能です。

<img class="responsive-img" src="../images/stepper_styling.png" srcset="../images/stepper_styling@2x.png 2x" />

## 使用方法 

Linear Stepper を使用する場合、前のステップが完了するまで次のステップに進めないことをユーザーに明確に伝えるために、未完了のステップを `Disabled` 状態に設定し、進行状況線も `Inactive` に設定してください。インジケーターとアイコン、およびインジケーターと数字を組み合わせることは避けてください。ユーザーがプロセス内のどの位置にいるのかについて適切なフィードバックを提供できるように、アクティブなステップを目立つようにしておきます。

| 良い例                                                                                 | 悪い例                                                                                  |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/stepper_do1.png" srcset="../images/stepper_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/stepper_dont1.png" srcset="../images/stepper_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/stepper_do2.png" srcset="../images/stepper_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/stepper_dont2.png" srcset="../images/stepper_dont2@2x.png 2x" /> |
| <img class="responsive-img" src="../images/stepper_do3.png" srcset="../images/stepper_do3@2x.png 2x" /> | <img class="responsive-img" src="../images/stepper_dont3.png" srcset="../images/stepper_dont3@2x.png 2x" /> |

## その他のリソース

関連トピック:

- [Icon](../components/icon.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
