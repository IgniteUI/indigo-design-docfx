---
title: Grid - Design System Component
_description: The Grid Component Symbol provides means to display and interact with high-quantities of data structured in a tabular fashion. 
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

## Grid

Use the Grid Component to let the user browse and interact with vast amount of complex data that is visually represented in tabular fashion and provide means for filtering, sorting, paging, etc. The Grid is visually identical to the [Ignite UI for Angular Grid Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid.html)

### Grid Demo

<img src="../images/grid_demo.png" srcset="../images/grid_demo@2x.png 2x" />

### Detach from Symbol

The Grid is essentially a repeater of columns and rows showing data in a tabular fashion. Therefore, the easiest way to use it is by dragging a `Generic Grid` to your artboard, right clicking on top of it, and selecting the `Detach from Symbol` option near the bottom of the contextual menu. In your layers panel under the newly appeared
_Grid/Generic Grid_ group, you should see the following:

| Layer       | Use                                                                                                                                                  |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🚫 igx-grid | A special locked layer starting with a prohibited icon. This layer is required by the code generation and you should avoid deleting or modifying it. |
| Header      | Contains all the cells in the header                                                                                                                 |
| Body        | Contains all the cells in the body                                                                                                                   |

After detaching, you may add the number of headers you need to show all the dimensions of your data and as many records as you want to show in your design simply by duplicating the first row of data that you already have created.

### Cell Types

The Grid provides three types of cells serving different data visualization purposes. The Header Cell is only one per column and appears at the top of the grid to display the textual description of the data in that particular column. The Body Cell is used to build the table displaying data records and may vary. The Summary Cell is used to create a section at the bottom of the Grid where column [Summaries](grid-summaries.md) are displayed for each dimension such as count, minimum, and maximum value.

<img src="../images/grid_cell_header.png" srcset="../images/grid_cell_header@2x.png 2x" />
<img src="../images/grid_cell_body.png" srcset="../images/grid_cell_body@2x.png 2x" />
<img src="../images/grid_cell_summary.png" srcset="../images/grid_cell_summary@2x.png 2x" />

### Items (Header Cell)

The Grid Header Cell supports the following layout combinations through the Items override: **No Icon** which shows only a header text, Icon which shows header text and filtering icon, and Icons which shows header text, filtering icon, and sorting icon.

<img src="../images/grid_cell_header_no-icon.png" srcset="../images/grid_cell_header_no-icon@2x.png 2x" />
<img src="../images/grid_cell_header_icon.png" srcset="../images/grid_cell_header_icon@2x.png 2x" />
<img src="../images/grid_cell_header_icons.png" srcset="../images/grid_cell_header_icons@2x.png 2x" />

### State (Body Cell)

The Grid Body Cell supports the following interactive states: **Rest** for the normal state, CellSelected for the selected cell in cell selection mode, and RowSelected for the remaining cells on the row, where the selected cell belongs.

<img src="../images/grid_cell_body_rest.png" srcset="../images/grid_cell_body_rest@2x.png 2x" />
<img src="../images/grid_cell_body_cell-selected.png" srcset="../images/grid_cell_body_cell-selected@2x.png 2x" />
<img src="../images/grid_cell_body_row-selected.png" srcset="../images/grid_cell_body_row-selected@2x.png 2x" />

### Cell Type

The Grid Header Cell provides presets for the three generic types of data that it needs to accommodate: **Number** for numeric values, Text for strings, and Checbox that is usually used as a template for the first column in order to allow selection of multiple rows.

<img src="../images/grid_cell_header_number.png" srcset="../images/grid_cell_header_number@2x.png 2x" />
<img src="../images/grid_cell_header_text.png" srcset="../images/grid_cell_header_text@2x.png 2x" />
<img src="../images/grid_cell_header_checkbox.png" srcset="../images/grid_cell_header_checkbox@2x.png 2x" />

The Grid Body Cell provides presets for the same generic types of data like the Header Cell.

<img src="../images/grid_cell_body_number.png" srcset="../images/grid_cell_body_number@2x.png 2x" />
<img src="../images/grid_cell_body_text.png" srcset="../images/grid_cell_body_text@2x.png 2x" />
<img src="../images/grid_cell_body_checkbox.png" srcset="../images/grid_cell_body_checkbox@2x.png 2x" />

### Styling

The Grid comes with styling flexibility achievable through styling the individual cell text, icons, and background colors in the various states available, as well as the hiding of horizontal and vertical borders.

<img src="../images/grid_styling.png" srcset="../images/grid_styling@2x.png 2x" />

## Usage

The most important thing about the Grid is the alignment of the data inside its Header and Body Cells. Text should always be aligned left, leaving variable empty space to the right, and numbers should always be aligned right, leaving variable empty space to the left.

| Do                                                                         | Don't                                                                          |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| <img src="../images/grid_do1.png" srcset="../images/grid_do1@2x.png 2x" /> | <img src="../images/grid_dont1.png" srcset="../images/grid_dont1@2x.png 2x" /> |

## Code generation

This section describes some important overrides and how they affect code generation.

> [!WARNING]
> The grid **must** be a detached symbol to be able to be used.

> [!NOTE]
> The width of the grid is determined be adding up the widths of the columns. And the height of the grid is set to null so as to render rows properly even if the container for the grid doesn’t have a height set.

### Data Source Property

When supplied, the `🕹️DataSource` value is used to set up the data source for the grid and needs to be an array of objects, where each column name is a property on the object. If the data source is not supplied the grid will only render the column headers.

### Header

When supplied, the Headers help determine the number of columns to be rendered. It will try and pair a Header with a Body (Cell) that is below it to form the column. If no matching Body can be found a column will be created based on the information that can be gathered from the Header. When a pair is found, information will be gathered from the Header first then the Body/Cell.

#### Text

The Header Text property may contain text, [binding text](../codegen/data-binding.md), or a combination of the two, examples:

- Settings
- {settingsLabel}
- Important {labelText}

#### Sorting

When supplied enables sorting on the specified column.

#### Filter State

When supplied enables filtering on the specified column.

#### Type

When supplied this is used to determine the type of the column (string, number, Boolean).

### Body/Cell

When supplied, the Bodies (cells) help determine the number of columns to be rendered. It will try and pair a Header with a Body (Cell). If no matching Header can be found a column will be created based on the information that can be gathered from the Body/Cell. When a pair is found information will be gathered from the Header first then the Body/Cell.

#### Data Property

When supplied, the `🕹️DataProperty` is used to setup the field of the column, which should correspond to a field in the `🕹️DataSource`.

#### Type

When supplied this is used to determine the type of the column (string, number, Boolean).

## Additional Resources

Related topics:

- [Grid Filter](grid-filter.md)
- [Grid Paging](grid-paging.md)
- [Grid Column Pinning](grid-column-pinning.md)
- [Grid Summaries](grid-summaries.md)
- [Full Grid Pattern](../patterns/full-grid.md)
- [Data Binding](../codegen/data-binding.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.


