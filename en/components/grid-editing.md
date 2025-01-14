---
title: Grid Editing - Grid Feature
_description: The Grid Editing allows the user to update the values of the records displayed in the Grid.
_keywords: Design Systems, Design Systems UX, UI kit, Figma, Ignite UI for Angular, Figma to Angular, Angular, Angular Design System, Export code from Figma, Design Kits for Angular, Figma HTML, Figma to HTML, Figma UI kits
---

# Grid Editing

Use Grid Editing to allow the user to update certain values either cell by cell or one row at a time. Both Cell and Row Editing are visually identical to the [Ignite UI for Angular Grid Editing Feature](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/editing.html)

## Cell Editing

The Grid Cell Editing happens cell by cell and is configured via the Body Cell that one wants to display in edit mode. In Figma, this is achieved by choosing `Focused` state from the properties panel on the nested `Cell State` component inside each body cell.

<img class="responsive-img" src="../images/grid_cell_edit.png" srcset="../images/grid_cell_edit@2x.png 2x" />

## Row Editing

The Grid Row Editing happens one row at a time and is configured via the Body Cells that belong to the edited row. In Figma, to indicate that a row is in editing state, you have to switch on the `Row Editing` boolean property of all cells in that row. For the cell, which is being edited, in addition to switching on the `Row Editing` boolean property, you also have to change the `State` variant property to `Focused`.

<img class="responsive-img" src="../images/grid_row_edit.png" srcset="../images/grid_row_edit@2x.png 2x" />

## Editing Row Banner

The Grid has an `Editing Row Banner` component under `Grid Features` that represents a summary area with the number of edits made on the row and a pair of actions for canceling or confirming the edits made on the row. Adding this component has only a visual effect on your design to make it look more realistic, if you want to switch the Row Editing feature, configure the Cells of the row accordingly.

## Additional Resources

Related topic:

- [Grid](grid.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
