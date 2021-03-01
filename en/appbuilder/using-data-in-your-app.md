---
title: Indigo Design App Builder Software overview
_description: Indigo Design App Builder enables users to add external data sources and bind them to the applications designed within Indigo Design App Builder
_keywords: App builder, Indigo Design, Infragistics, Data Sources, Data Binding
---

# Data Feature overview 
The Indigo Design App Builder Data features lets users add, edit and use external data source in the application they are developing. By default, the Indigo Design App Builder comes with a mock Northwind data source which users can use for reference. Apart from it, the data source types that can be added are JSON (Rest API), Excel or CSV file. All added data sources are placed in the Data Toolbox and users can expand/collapse each data source in order to see the included tables and selected fields.

<img class="responsive-img" src="../images/DataSources - View data source.gif" />
<p style="text-align:center;">Adding data source from a URL</p>

## Adding a data source
The Indigo Design App Builder Data feature enables users to add an external data sources, such as JSON (Rest API), Excel or CSV file, either by uploading a file, or linking to external web source. For the first version of the feature, only Rest API option is available. 

<img class="responsive-img" src="../images/DataSources - Add URL.gif" />
<p style="text-align:center;">Adding data source from a URL</p>

<img class="responsive-img" src="../images/DataSources - Add JSON file.gif" />
<p style="text-align:center;">Adding data source by uploading a file</p>

## Selecting data fields and changing fields type
Once an external data source is added, users can select which data fields to be included and visualized the data source toolbox. After adding a data source, each field comes with recommended by Indigo Design App Builder type - string, number, date or boolean. However, users may override this recommendation and choose another type. 

<img class="responsive-img" src="../images/dataSources - select fields.gif" />
<p style="text-align:center;">Selecting data fields</p>

<img class="responsive-img" src="../images/DataSources - Change field type.gif" />
<p style="text-align:center;">Changing a data source table field type</p>

## Connecting Data Source to a repeated component
When a data source has been added, users can connect a particular data field to a component section. In order this to be done, first select the component (a card component is used in the example below), then change Repeat mode to Data and scroll down the menu to locate and select the table from the Data Source that you want to connect. Finally, connect the card section with the selected table field.

<img class="responsive-img" src="../images/DataSources - Connect data source table fields.gif" />
<p style="text-align:center;">Connect a data source table field to a component section</p>


## Additional Resources
<div class="divider--half"></div>

* [Indigo Design App Builder Components](indigo-design-app-builder-components.md)