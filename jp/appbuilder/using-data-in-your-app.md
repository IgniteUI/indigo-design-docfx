---
title: Using data in the Indigo Design App Builder
_description: Indigo Design App Builder を使用して、外部データ ソースを追加し、Indigo Design App Builder で設計されたアプリケーションにバインドできます。
_keywords: App builder, Indigo Design, インフラジスティックス, データ ソース, データ バインディング
_language: ja
---

# データ機能の概要
Indigo Design App Builder のデータ機能を使用して、開発中のアプリケーションで外部データソースを追加、編集、使用できます。デフォルトで、Indigo Design App Builder には、ユーザーが参照に使用できる Northwind データ ソースが含まれています。Currently, a JSON type data sources can be added, enabling users to upload their own JSON file or provide a Rest API URL with the data source. All added data sources are placed in the data toolbox and users can expand/collapse each data source in order to see the included tables and selected fields.

<img class="responsive-img" src="../images/DataSources-View-data-source.gif" />
<p style="text-align:center;">URL からデータ ソースを追加する</p>

## データ ソースを追加する
Indigo Design App Builder のデータ機能を使用して、JSON (Rest API)、Excel、CSV ファイルなどの外部データ ソースを、ファイルのアップロードまたは外部公開ソースへのリンクによって追加できます。この機能の最初のリリースでは、REST API オプションのみ使用できます。

> [!NOTE]
> Indigo Design App Builder に追加されたデータ ソースはユーザー スペースに制限され、追加したユーザーまたはチーム スペース (チーム機能が利用可能な場合) のみに表示されます。

<img class="responsive-img" src="../images/DataSources-Add-URL.gif" />
<p style="text-align:center;">URL からデータ ソースを追加する</p>

<img class="responsive-img" src="../images/DataSources-Add-JSON-file.gif" />
<p style="text-align:center;">ファイルをアップロードしてデータ ソースを追加する</p>

## データ フィールドの選択とフィールド タイプの変更
When a data source has been added, users can connect a particular data field to a component section. In order for this to be done, first select the component (a card component is used in the example below), then change Repeat mode to Data and scroll down the menu to locate and select the table from the Data Source that you want to connect to. Finally, connect the card section with the selected table field.

<img class="responsive-img" src="../images/dataSources-select-fields.gif" />
<p style="text-align:center;">データ フィールドを選択する</p>

<img class="responsive-img" src="../images/DataSources-Change-field-type.gif" />
<p style="text-align:center;">データ ソース テーブルのフィールド タイプを変更する</p>

## データ ソースを繰り返しコンポーネントに接続する
データ ソースが追加されると、ユーザーは特定のデータ フィールドをコンポーネント セクションに接続できます。これを行うには、最初にコンポーネント (以下の例ではカード コンポーネントを使用)を選択し、Repeat モードを Data に変更してメニューをスクロールダウンし、接続するデータ ソースからテーブルを見つけて選択します。最後に、カード セクションを選択したテーブル フィールドに接続します。

<img class="responsive-img" src="../images/DataSources-Connect-data-source-table-fields.gif" />
<p style="text-align:center;">データ ソース テーブルのフィールドをコンポーネント セクションに接続する</p>


## その他のリソース
<div class="divider--half"></div>

* [Indigo Design App Builder コンポーネント](indigo-design-app-builder-components.md)