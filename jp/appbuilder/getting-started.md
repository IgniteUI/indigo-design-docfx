---
title: Indigo Design App Builder を使用した作業の開始
_description: Indigo Design App Builder を使用してすばらしいアプリを作成する方法を学びます。定義済みのものを使用するか、用意されたレイアウトから選んで編集できます。今すぐ Indigo Design をお試しください。
_keywords: App builder, Indigo Design, インフラジスティックス
_language: ja
---

# Indigo Design App Builder を使用した作業の開始

> [!NOTE]
><b>Indigo.Design ファミリーのメンバーである Indigo Design App Builder は、Indigo.Design ホーム画面からアクセスできます。ここから、ユーザーは新しいアプリを起動し、作成済みのアプリをプレビューまたは編集できます。ユーザーはツールを使用して他のアプリ プロジェクトを簡単に切り替え、編集してプレビューしたり、コードでコードを生成したりできます。



### トピック コンテンツ:
* <a href="#launch">Indigo.Design から App Builder を起動する</a>
* <a href="#Getting-the-code">コードの取得</a>
* <a href="#Running-the-app-locally">インタラクション: 開く/閉じる</a>


<section class="video-container">
    <div>
        <div class="video-container__item">
            <iframe src="https://www.youtube.com/embed/DK50La2GFJ0" frameborder="0" allowfullscreen></iframe>
        </div>
        <p>App Builder を使用した作業の開始</p>
    </div>
</section>

[Indigo Design App Builder]({environment:infragisticsBaseUrl}/products/appbuilder) を初めて起動したときに表示されるのは、簡単なオンボーディング ツアーを提案するポップアップ ウィンドウです。次に表示されるのは、[新しいアプリ] の作成ダイアログです。事前に定義されたレイアウトの 1 つを使用するか、構築済みの入門アプリの 1 つを編集できます。入門アプリは、Indigo Design App Builder を使用して作成されたアプリケーションを探索するのに役立ち、独自のユーザー スペースでそれらを変更することもできます。また、独自のアプリを最初から作成しなくても、より大きなアプリケーション用に生成されたコードをプレビューするための優れたソースです。Indigo Design App Builder を初めて使用する場合は、サンプル アプリ オプションを開始点として使用することをお勧めします。これは、ツールのすばらしい機能を利用してアプリケーションの構築を開始するための最も簡単な方法です。  

<img class="responsive-img" src="../images/getting-Started-new-project-dialog-Indigo-Design-App-Builder.png" srcset="../images/getting-Started-new-project-dialog-Indigo-Design-App-Builder-@2x.png 2x" />
<p style="text-align:center;">[新しいアプリ] ダイアログ</p>


## コードの取得
Indigo Design App Builder は、常にライブ実行中の Web アプリケーションをデザイン画面とプレビュー ウィンドウの両方に表示します。基になるコードとアプリケーション モデルは、デザイン画面でアプリケーションに変更を加えると、リアルタイムで更新されます。生成されたアプリケーション コードはプレビュー ウィンドウでいつでも表示できます。また、生成されたアプリケーションを完全なアプリケーション コード リポジトリとしてダウンロードして、選択したコード エディターで開くこともできます。次に、Indigo Design App Builder を使用してデザインしたアプリケーションをマシン上でローカルにビルドして実行し、生成されたコードに追加の変更を加えることができます。
 
<img class="responsive-img" src="../images/Preview-App-Indigo-Design-App-Builder.png" srcset="../images/Preview-App-Indigo-Design-App-Builder @2x.png 2x" />
<p style="text-align:center;">アプリケーション プレビュー ウィンドウ</p>


<img class="responsive-img" src="../images/App-VSCode-Indigo-Design-App-Builder.png" srcset="../images/App-VSCode-Indigo-Design-App-Builder @2x.png 2x" />
<p style="text-align:center;">生成されたアプリケーションのコードを VScode で実行する</p>


> [!NOTE]
> アプリケーションのコードがダウンロードされると、ローカルで行われた変更は Indigo Design AppBuilder ユーザー スペースに反映されません。

## アプリをローカルで実行する

ダウンロードしたアプリケーションを実行するには、次の前提条件がマシンにインストールされている必要があります:

1. NodeJS。
2. Visual Studio Code (VS Code をお勧めしますが、別のコード エディターを使用することもできます)。

<div>
    <div style="display:inline-block;width:45%;text-align:center;">
      <img src="../images/general/nodejs.svg"
           style="display:flex;max-height:100px;margin:auto auto 20px auto;" />
      <a target="_blank" href="https://nodejs.org/en/download/" class="no-external-icon"
         style="color:white;background-color:#09f;text-decoration:none;font-weight:700;font-size:16px;padding: 5px 15px 5px 15px;">
        NODE のダウンロード
      </a>
    </div>
    <div style="display:inline-block;width:45%;text-align:center;">
      <img src="../images/general/vs-code.svg"
           style="display:flex;max-height:100px;margin:auto auto 20px auto;" />
      <a target="_blank" href="https://code.visualstudio.com/download" class="no-external-icon"
         style="color:white;background-color:#09f;text-decoration:none;font-weight:700;font-size:16px;padding: 5px 15px 5px 15px;">
        VS CODE のダウンロード
      </a>
    </div>
</div>
<div class="divider--half"></div>

## その他のリソース
<div class="divider--half"></div>

* [App Builder インターフェイスの概要](interface-overview.md)
