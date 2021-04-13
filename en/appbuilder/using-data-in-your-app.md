---
title: Using data in the Indigo Design App Builder
_description: Indigo Design App Builder enables users to add external data sources and bind them to the applications designed within Indigo Design App Builder
_keywords: App builder, Indigo Design, Infragistics, Data Sources, Data Binding
---

# Data Feature overview 
The Indigo Design App Builder Data features lets users add, edit and use external data source in the application they are developing. By default, the Indigo Design App Builder comes with a mock Northwind data source which users can use for reference. Currently, a Rest API data source types can be added, enabling users to upload a JSON file or provide a URL with the data source. All added data sources are placed in the data toolbox and users can expand/collapse each data source in order to see the included tables and selected fields.

<img class="responsive-img" src="../images/DataSources-View-data-source.gif" />
<p style="text-align:center;">Adding data source from a URL</p>

## Adding a data source
The Indigo Design App Builder Data feature enables users to add an external data sources, such as JSON (Rest API), Excel or CSV file, either by uploading a file, or linking to external publicly available source. Only Rest API option is available in the initial release of this feature.

> [!NOTE]
> Data sources added to the Indigo Design App Builder are restricted to the user space and are visible only to the user that added them, or to their team space (when the teams feature is available).

<img class="responsive-img" src="../images/DataSources-Add-URL.gif" />
<p style="text-align:center;">Adding data source from a URL</p>

<img class="responsive-img" src="../images/DataSources-Add-JSON-file.gif" />
<p style="text-align:center;">Adding data source by uploading a file</p>

## Selecting data fields and changing fields type
When a data source has been added, users can connect a particular data field to a component section. In order for this to be done, first select the component (a card component is used in the example below), then change Repeat mode to Data and scroll down the menu to locate and select the table from the Data Source that you want to connect to. Finally, connect the card section with the selected table field.


<img class="responsive-img" src="../images/dataSources-select-fields.gif" />
<p style="text-align:center;">Selecting data fields</p>

<img class="responsive-img" src="../images/DataSources-Change-field-type.gif" />
<p style="text-align:center;">Changing a data source table field type</p>

## Connecting Data Source to a repeated component
When a data source has been added, users can connect a particular data field to a component section. In order for this to be done, first select the component (a card component is used in the example below), then change Repeat mode to Data and scroll down the menu to locate and select the table from the Data Source that you want to connect to. Finally, connect the card section with the selected table field.

<img class="responsive-img" src="../images/DataSources-Connect-data-source-table-fields.gif" />
<p style="text-align:center;">Connect a data source table field to a component section</p>


## Additional Resources
<div class="divider--half"></div>

* [Indigo Design App Builder Components](indigo-design-app-builder-components.md)