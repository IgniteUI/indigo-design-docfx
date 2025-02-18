---
title: Hierarchical Grid - Design System Component
_description: The Hierarchical Grid Component provides means to display and interact with hierarchically related sets of tabular data.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits, Figma, Figma to Angular, Export code from Figma, Figma HTML, Figma to HTML, Figma UI kits
---

# Hierarchical Grid

Use the Hierarchical Grid Component to let the user browse and interact with a vast amount of complex data organized into separate tables hierarchically related one to another. Each grid in the hierarchy represents its own data in a tabular fashion and provides the same features as the [Grid](grid.md). The Hierarchical Grid is visually identical to the [Ignite UI for Angular Hierarchical Grid Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/hierarchicalgrid/hierarchical_grid.html)

## Hierarchical Grid Demo

<img class="responsive-img" src="../images/hierarchical_grid_demo.png" srcset="../images/hierarchical_grid_demo@2x.png 2x" />

## Using the Hierarchical Grid in Figma
Similarly to the Grid, the Hierarchical Grid is essentially a repeater of columns, rows, and nested grids forming a visual hierarchy. To use the Hierarchical Grid component simply search for it in the Resources panel and insert an instance. If needed, you can change the size by using the `Size` property from the properties panel. In the layers panel you'll see the following structure: 

| Layer                                | Use                                                                                                                                                  |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🚫 componentVersion  &nbsp;  | A special locked layer starting with a prohibited icon. This layer containts information about the current version of the component and you should avoid deleting or modifying it. |
| 🚫 metadata | A special locked layer starting with a prohibited icon. This layer is required by the code generation and you should avoid deleting or modifying it. |
| Drill Indication                  | A symbol that is used for indicating the active cell/cell in focus                                                                                                       |
| Grid 2                               | Contains all the columns and cells of the bottom grid header                                                                                                                 |
| Background                                 | Defines the background color of the second grid                                                                            |
| Grid 1              | Contains all the columns and cells of the top grid                                                                                      |

If you'd like to alter the number of columns or cells, you can simply hide the unnecessary ones from the layers panel. In case you want to add more, you'll need to select the Hierarchical Grid component, right click on it and select "Detach instance" from the contextual menu. You can then duplicate some of the existing columns until you achieve the desired look of the Grid. If you want to show more of the hierarchy, you can also duplicate one of the two Grid frames.

## Using the Hierarchical Grid in Sketch

The easiest way to use the Hierarchical Grid in Sketch is by dragging one of the predefined grids to your artboard - there are three presets available for the three [display densities](grid-sizes.md) supported. Once in your artboard, by right-clicking on top of it, and selecting the `Detach from Symbol` option near the bottom of the contextual menu you should see the following in your layers panel under the newly appeared group:

| Layer                                | Use                                                                                                                                                  |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🚫 metadata | A special locked layer starting with a prohibited icon. This layer is required by the code generation and you should avoid deleting or modifying it. |
| 🌈 Drill Indication                  | A symbol that is used for indicating the active cell/cell in focus                                                                                                       |
| Header                               | Contains all the cells in the header                                                                                                                 |
| Body                                 | Contains all the cells in the body and a nested Grid with basic structure                                                                            |
| 🌈 Background                        | Defines the background color of the Hierarchical Grid                                                                                                |

After detaching, you may alter the number of headers you need to show all the dimensions of your data and as many records as you want to show in your design simply by duplicating the first row of data that you already have created within each of the grids that you have. In case you need to show more of the hierarchy, you may also nest additional grids within the body of the parent one that they belong to.

## Using the Hierarchical Grid in Adobe XD

In Adobe XD, after you choose one of the three [preset display density hierarchical grid components](grid-sizes.md) and drag it to your artboard, you will notice in the layers panel that we use `Repeat Grid` for both the Header and the Body to speed configuration up. Unlike in Sketch in Adobe XD destroying the symbol is not necessary. You should see the following in your layers panel:

| Layer                                | Use                                                                                                                                                  |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🚫 metadata | A special locked layer starting with a prohibited icon. This layer is required by the code generation and you should avoid deleting or modifying it. |
| 🌈 Drill Indication                  | A symbol that is used for indicating the active cell and trace its belonging through the hierarchy of grids             |
| Header                               | Contains all header cells: the CollapseAll cell and the rest grouped in a Repeat Grid Header                                                                                                 |
| Body                                 | Contains all body cells: the Expand cells grouped in a Repeat Grid and the rest grouped in another Repeat Grid, and a nested Grid with a basic structure                                                                            |
| 🌈 Background                        | Defines the background color of the nested Grid                                                                                                |

When you select a Repeat Grid layer, you may alter the number of the repeated cells you need, which can be done within each grid. Just drag the green handles at the right or bottom edge to show all the dimensions of your data and insert as many visible records as you want to show in your design. To change a particular cell type or column width, you have to select the Repeat Grid layer and click `Ungroup Grid` in the right panel. This will allow you to work on them separately to achieve the desired design. If you need to show more of the hierarchy, you may also duplicate full grids and nest them within the body of the parent one that you want them to belong to.

<img class="responsive-img" src="../images/hgrid_layers_panel_adobe_xd.png" srcset="../images/hgrid_layers_panel_adobe_xd@2x.png 2x" />

## Cell Types

The Hierarchical Grid extends the three types of regular Grid cells Header, Body, and Summary with two additional ones that are used to organize the hierarchy. The CollapseAll cell is always used as the first Header Cell and comes with a predefined icon and action for collapsing/expanding all of the belonging records of the Grid in whose Header it appears. The Expand cell is always used as the first Body Cell in every row and comes with a predefined icon and action for collapsing/expanding the row.

<img class="responsive-img" src="../images/hierarchical_grid_cell_header.png" srcset="../images/hierarchical_grid_cell_header@2x.png 2x" />
<img class="responsive-img" src="../images/hierarchical_grid_cell_body.png" srcset="../images/hierarchical_grid_cell_body@2x.png 2x" />

To understand how regular Header, Body and Summary cells can be used for different types of data and configured to enable the various Hierarchical Grid features, please refer to the [general Grid topic](grid.md).

## Cell Size

The CollapseAll and Expand cells support three size variants of the Hierarchical Grid: Large, Medium and Small. Each of them come with distinct symbols as can be seen for the CollapseAll Header cells below:

<img class="responsive-img" src="../images/hierarchical_grid_cell_header_large.png" srcset="../images/hierarchical_grid_cell_header_large@2x.png 2x" />
<img class="responsive-img" src="../images/hierarchical_grid_cell_header_medium.png" srcset="../images/hierarchical_grid_cell_header_medium@2x.png 2x" />
<img class="responsive-img" src="../images/hierarchical_grid_cell_header_small.png" srcset="../images/hierarchical_grid_cell_header_small@2x.png 2x" />

## Styling

The Hierarchical Grid comes with styling flexibility achievable through styling the individual cell text, icons, and background colors in the various states available, as well as the hiding of horizontal and vertical borders. It is also possible to style the Drill Indication and Grid background.

<img class="responsive-img" src="../images/hierarchical_grid_styling.png" srcset="../images/hierarchical_grid_styling@2x.png 2x" />

## Usage

Similarly to the Grid, the most important thing about the Hierarchical Grid is the alignment of the data inside its Header and Body Cells. Text should always be aligned left, leaving variable empty space to the right, and numbers should always be aligned right, leaving variable empty space to the left.

| Do                                                                                                | Don't                                                                                                 |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/grid_do1.png" srcset="../images/grid_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/grid_dont1.png" srcset="../images/grid_dont1@2x.png 2x" /> |

## Additional Resources

Related topics:

- [Grid](grid.md)
- [Grid Toolbar](grid-toolbar.md)
- [Grid Export](grid-export.md)
- [Grid Grouping](grid-grouping.md)
- [Grid Column Pinning](grid-column-pinning.md)
- [Grid Column Hiding](grid-column-hiding.md)
- [Grid Column Moving](grid-column-moving.md)
- [Grid Column Resizing](grid-column-resizing.md)
- [Grid Sorting](grid-sorting.md)
- [Grid Row Filter](grid-row-filter.md)
- [Grid Excel Style Filter](grid-excel-style-filter.md)
- [Grid Row Selection](grid-row-selection.md)
- [Grid Editing](grid-editing.md)
- [Grid Sizes](grid-sizes.md)
- [Grid Paging](grid-paging.md)
- [Grid Summaries](grid-summaries.md)
- [Tree Grid](tree-grid.md)
- [Skeleton Hierarchical Grid](hierarchical-grid-skeleton.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
