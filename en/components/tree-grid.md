---
title: Tree Grid - Design System Component
_description: The Tree Grid Component provides means to display and interact with hierarchical data in a tabular fashion.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

# Tree Grid

Use the Tree Grid Component to let the user browse and interact with vast amount of hierarchical data that is visually represented in tabular fashion. It also supports the features available for the [Grid](grid.md). The Tree Grid is visually identical to the [Ignite UI for Angular Tree Grid Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/treegrid/tree_grid.html)

## Tree Grid Demo

<img class="responsive-img" src="../images/tree_grid_demo.png" srcset="../images/tree_grid_demo@2x.png 2x" />

## Detach from Symbol

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

## Cell Types

The Tree Grid extends the three types of regular Grid cells Header, Body and Summary with a Tree Column Cell, which is used to create and organize the hierarchy. It is always used as the first Body Cell in every row and comes with a predefined icon and action for collapsing/expanding the row.

To understand how regular Header, Body and Summary cells can be used for different types of data and configured to enable the various Tree Grid features, please refer to the [general Grid topic](grid.md).

## Tree Column Cell Depth

The Tree Column Cell provides visual indication for the level of the data hierarchy via the `Depth` override, which can be set to **Level1**, Level2 or Level3.

<img class="responsive-img" src="../images/tgrid_cell_body_tree1.png" srcset="../images/tgrid_cell_body_tree1@2x.png 2x" />
<img class="responsive-img" src="../images/tgrid_cell_body_tree2.png" srcset="../images/tgrid_cell_body_tree2@2x.png 2x" />
<img class="responsive-img" src="../images/tgrid_cell_body_tree3.png" srcset="../images/tgrid_cell_body_tree3@2x.png 2x" />

## Styling

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

> [!NOTE]
> The height of the tree grid is set to `100%` as the default.

### Data Source Property

When supplied, the `🕹️DataSource` value is used to set up the data source for the grid and needs to be an array of objects, where each column name is a property on the object. If the data source is not supplied the grid will only render the column headers.

### Primary Key

When supplied, the `🕹️PrimaryKey` is used to set the `primaryKey` property on the grid.  The value of this property should be the name of a property in the data source that contains unique values.  This property is especially important if you wish to use the [row editing banner](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/row_editing.html) in the grid.

### Child Key

The `🕹️ChildKey` serves a dual purpose in the tree grid.  If only the `🕹️DataSource` and the `🕹️ChildKey` are set then the tree grid will expect that the `🕹️ChildKey` points to an array of child data within each object of the data source.  For a better explanation please see our Angular tree grid [documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/treegrid/tree_grid.html#child-collection).

If the `🕹️DataSource`, `🕹️PrimaryKey` and `🕹️ChildKey` are all set then the tree grid will be expecting your data to be configured a little differently.  You can see more about this [here](https://www.infragistics.com/products/ignite-ui-angular/angular/components/treegrid/tree_grid.html#primary-and-foreign-keys).  In short, for this configuration `🕹️ChildKey` is meant to be the `foreignKey` while `🕹️PrimaryKey` is the `primaryKey`.

Which configuration you use depends on the structure of your data.

### Header

When supplied, the Headers help determine the number of columns to be rendered. It will try and pair a Header with a Body (Cell) that is below it to form the column. If no matching Body can be found a column will be created based on the information that can be gathered from the Header. When a pair is found, information will be gathered from the Header first then the Body/Cell.

The Header has some sizing options available to it.  If you pin each header cell to the left and right in Sketch it will force the column to generate with a percentage width in HTML.  This will allow the column to grow or shrink depending on the size of the Grid.  Alternatively, you can fix the Header cell width which will generate a fixed column of that size.

#### Type

When supplied this is used to determine the type of the column (string, number, Boolean).

#### Text

The Header Text property may contain text, [binding text](../codegen/data-binding.md), or a combination of the two, examples:

- Settings
- {settingsLabel}
- Important {labelText}

#### Feature Left & Feature Right

These overrides control what features are enabled for the individual columns.  The following values are available:

- None (Default)
- Filtering ([Excel Style Filtering](https://www.infragistics.com/products/ignite-ui-angular/angular/components/hierarchicalgrid/excel_style_filtering.html))
- Pinning
- Sorting

#### Column Moving

This override determines whether the column is movable or not by the user.

#### Column Resizing

This override determines whether the column is resizable or not by the user.

#### Column Hiding

This override determines whether the column is hidden or not.

### Body/Cell

When supplied, the Bodies (cells) help determine the number of columns to be rendered. It will try and pair a Header with a Body (Cell). If no matching Header can be found a column will be created based on the information that can be gathered from the Body/Cell. When a pair is found information will be gathered from the Header first then the Body/Cell.

#### Data Property

When supplied, the `🕹️DataProperty` is used to setup the field of the column, which should correspond to a field in the `🕹️DataSource`.

#### Type

When supplied this is used to determine the type of the column (string, number, Boolean).

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
