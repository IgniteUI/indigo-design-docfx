---
title: Tree Grid - Design System Component
_description: The Tree Grid Component provides means to display and interact with hierarchical data in a tabular fashion.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

## Tree Grid

Use the Tree Grid Component to let the user browse and interact with vast amount of hierarchical data that is visually represented in tabular fashion. It also supports the features available for the [Grid](grid.md). The Tree Grid is visually identical to the [Ignite UI for Angular Tree Grid Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/treegrid/tree_grid.html)

### Tree Grid Demo

<img class="responsive-img" src="../images/tree_grid_demo.png" srcset="../images/tree_grid_demo@2x.png 2x" />

### Detach from Symbol

Similarly to the Grid, the Tree Grid is essentially a repeater of columns and rows showing hierarchical data in a flat, tabular fashion. Therefore, the easiest way to use it is by dragging a `Tree Grid/Comfortable` to your artboard, right clicking on top of it, and selecting the `Detach from Symbol` option near the bottom of the contextual menu. In your layers panel under the newly appeared group, you should see the following:

| Layer                        | Use                                                                                                                                                  |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🚫 igx-tree-grid/comfortable | A special locked layer starting with a prohibited icon. This layer is required by the code generation and you should avoid deleting or modifying it. |
| Header                       | Contains all the cells in the header                                                                                                                 |
| Body                         | Contains all the cells in the body                                                                                                                   |
| 🕹️DataSource                 | Reference for the data source that the Grid will be bound to that is used by the code generation engine                                              |
| 🕹️PrimaryKey                 | Reference for the column with the primary keys of the records that is required by some Grid features and is used by the code generation engine       |
| 🕹️ChildKey                   | Reference for the column with the child keys of the records used to establish the hierarchy of the data in the Tree Grid                             |

After detaching, you may add the number of headers you need to show all the dimensions of your data and as many records as you want to show in your design simply by duplicating the first row of data that you already have created within each of the grids that you have.

### Cell Types

The Tree Grid extends the three types of regular Grid cells Header, Body and Summary with a Tree Column Cell, which is used to create and organize the hierarchy. It is always used as the first Body Cell in every row and comes with a predefined icon and action for collapsing/expanding the row.

To understand how regular Header, Body and Summary cells can be used for different types of data and configured to enable the various Tree Grid features, please refer to the [general Grid topic](grid.md).

### Tree Column Cell Depth

The Tree Column Cell provides visual indication for the level of the data hierarchy via the `Depth` override, which can be set to **Level1**, Level2 or Level3.

<img class="responsive-img" src="../images/tgrid_cell_body_tree1.png" srcset="../images/tgrid_cell_body_tree1@2x.png 2x" />
<img class="responsive-img" src="../images/tgrid_cell_body_tree2.png" srcset="../images/tgrid_cell_body_tree2@2x.png 2x" />
<img class="responsive-img" src="../images/tgrid_cell_body_tree3.png" srcset="../images/tgrid_cell_body_tree3@2x.png 2x" />

### Styling

The Tree Grid comes with styling flexibility achievable through styling the individual cell text, icons, and background colors in the various states available, as well as the hiding of horizontal and vertical borders.

<img class="responsive-img" src="../images/tgrid_styling.png" srcset="../images/tgrid_styling@2x.png 2x" />

## Usage

Similarly to the Grid, the most important thing about the Tree Grid is the alignment of the data inside its Header and Body Cells. Text should always be aligned left, leaving variable empty space to the right, and numbers should always be aligned right, leaving variable empty space to the left.

| Do                                                                                                | Don't                                                                                                 |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/grid_do2.png" srcset="../images/grid_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/grid_dont2.png" srcset="../images/grid_dont2@2x.png 2x" /> |

## Code generation

This section describes some important overrides and how they affect code generation.

> [!WARNING]
> The tree grid **must** be a detached symbol to be able to be used.

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
- [Grid Display Density](grid-display-density.md)
- [Grid Paging](grid-paging.md)
- [Grid Summaries](grid-summaries.md)
- [Hierarchical Grid](hierarchical-grid.md)
- [Data Binding](../codegen/data-binding.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
