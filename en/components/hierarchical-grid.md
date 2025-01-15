---
title: Hierarchical Grid - Design System Component
_description: The Hierarchical Grid Component provides means to display and interact with hierarchically related sets of tabular data.
_keywords: Design Systems, Design Systems UX, UI kit, Ignite UI for Angular, Angular, Angular Design System, Design Kits for Angular, Figma, Figma to Angular, Export code from Figma, Figma HTML, Figma to HTML, Figma UI kits
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
| Grid 2                               | Contains all the columns and cells of the bottom grid                                                                                                                 |
| Background                                 | Defines the background color of the second grid                                                                            |
| Grid 1              | Contains all the columns and cells of the top grid                                                                                      |

If you'd like to alter the number of columns or cells, you can simply hide the unnecessary ones from the layers panel. In case you want to add more, you'll need to select the Hierarchical Grid component, right click on it and select "Detach instance" from the contextual menu. You can then duplicate some of the existing columns until you achieve the desired look of the Grid. If you want to show more of the hierarchy, you can also duplicate one of the two Grid frames.

                          

## Cell Types

The Hierarchical Grid extends the three types of regular Grid cells Header, Body, and Summary with two additional ones that are used to organize the hierarchy. The CollapseAll cell is always used as the first Header Cell and comes with a predefined icon and action for collapsing/expanding all of the belonging records of the Grid in whose Header it appears. The Expand cell is always used as the first Body Cell in every row and comes with a predefined icon and action for collapsing/expanding the row.

<img class="responsive-img" src="../images/hierarchical_grid_cell_header.png" srcset="../images/hierarchical_grid_cell_header@2x.png 2x" />
<img class="responsive-img" src="../images/hierarchical_grid_cell_body.png" srcset="../images/hierarchical_grid_cell_body@2x.png 2x" />

To understand how regular Header, Body and Summary cells can be used for different types of data and configured to enable the various Hierarchical Grid features, please refer to the [general Grid topic](grid.md).

## Cell Size

The CollapseAll and Expand cells support three size variants of the Hierarchical Grid: Large, Medium and Small, which can be changed from the `Size` property in the side properties panel.

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
