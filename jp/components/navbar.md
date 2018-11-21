---
title: Navbar - デザイン システム コンポーネント
_description: Navbar コンポーネント シンボルは、アプリケーション内のユーザーの現在の位置を通知してシンプルなナビゲーション メカニズムを提供します。
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

## NavBar

Navbar コンポーネントは、アプリケーションでユーザーの現在の位置を明確にし、アプリケーション レベルのナビゲーションを向上します。常に画面の上に配置されます。Navbar は、[Ignite UI for Angular Navbar コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/navbar.html)と視覚的に同じものです。

### Navbar デモ

<img src="../images/navbar_demo.png" srcset="../images/navbar_demo@2x.png 2x" />

### タイプ

Navbar は、3 つのレイアウト構成があり、**アイコン アクションとタイトル**、テキスト アクションとタイトル、タイトルで定義されます。

<img src="../images/navbar_lefticon.png" srcset="../images/navbar_lefticon@2x.png 2x" />
<img src="../images/navbar_lefttext.png" srcset="../images/navbar_lefttext@2x.png 2x" />
<img src="../images/navbar_noleft.png" srcset="../images/navbar_noleft@2x.png 2x" />

### アクション アイコン

各 Navbar は、画面右端から左へ、描画されるシンプルなイベントをトリガーする操作アイコンを 4 アイコンまでサポートします。

<img src="../images/navbar_icon1.png" srcset="../images/navbar_icon1@2x.png 2x" />
<img src="../images/navbar_icon2.png" srcset="../images/navbar_icon2@2x.png 2x" />
<img src="../images/navbar_icon3.png" srcset="../images/navbar_icon3@2x.png 2x" />
<img src="../images/navbar_icon4.png" srcset="../images/navbar_icon4@2x.png 2x" />

### スタイル設定

Navbar には、タイトル、アイコ、ン、背景色を変更する基本的なスタイル設定機能があります。

<img src="../images/navbar_styling.png" srcset="../images/navbar_styling@2x.png 2x" />

## 使用方法

Navbar 操作は、タイトルと重ならないように使用してください。シングル メニューの表示をトリガーするアイコンを使用して回避できます。操作で他のアイコンを指定した場合、Navbar に通常配置するすべての操作をその下に統合し、 Navbar にスタンドアロンの操作を配置しないようにします。

| 良い例                                                                             |悪い例                                                                              |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| <img src="../images/navbar_do1.png" srcset="../images/navbar_do1@2x.png 2x" />|<img src="../images/navbar_dont1.png" srcset="../images/navbar_dont1@2x.png 2x" /> |
| <img src="../images/navbar_do2.png" srcset="../images/navbar_do2@2x.png 2x" />|<img src="../images/navbar_dont2.png" srcset="../images/navbar_dont2@2x.png 2x" /> |

## コードの生成

このセクションは、オーバーライドとコード生成にどのような影響があるかについて説明します。

> [!WARNING]
> デザインの Navbar のインスタンスで `Detach from Symbol` をトリガーすると、ほとんどの場合で Navbar のためのコード生成機能が失われます。

### イベント

Action Button で提供される `Event` プロパティはコンポーネント TypeScript のメソッドを作成するために使用し、HTML に onTabItemSelected シグネチャを追加します。`Event` プロパティはコンポーネント TypeScript のメソッドを作成するために使用し、HTML に onClick シグネチャを追加します。波括弧構文 ({onEventName}) を使用してイベントを指定する必要があります。

### タイプ

このプロパティは表示する NavBar のタイプを決定します。None に設定した場合、コントロールは描画されません。

### Action Button のアイコン

NavBar コントロールの左側にある Action Button に使用するアイコンを決定します。Icon のために選択された色は、このコントロールのすべての Icons に使用する色を決定します。

### タイトル

NavBar のタイトル領域内に表示されます。Title プロパティには、テキスト、[テキストのバインド](../codegen/data-binding.md)、またはその両方を含むことができます。例:

- 設定
- {settingsLabel}
- 重要な {labelText}

### アクション アイコン

アイコンは NavBar の右側に 4 つまで表示されます。

## その他のリソース

関連トピック:

- [Icon](icon.md)
- [Navigation Drawer](nav-drawer.md)
- [Data Binding](../codegen/data-binding.md)
  <div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

- [Indigo Design **GitHub**](https://github.com/IgniteUI/design-system-docfx)
