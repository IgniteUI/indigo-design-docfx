---
title: Grid Column Pinning - Grid Feature
_description: The Grid Column Pinning is a mechanism to pin selected columns of a scrollable Grid.
_keywords: Design Systems, Design Systems UX, UI kit, Figma, Ignite UI for Angular, Figma to Angular, Angular, Angular Design System, Export code from Figma, Design Kits for Angular, Figma HTML, Figma to HTML, Figma UI kits
---

# Grid Column Pinning

Use the Grid Column Pinning as a mechanism to fix the first few columns of a scrollable Grid to the left. Now, when the user scrolls, all other columns move left and right except for the pinned ones. The pinned columns always appear on top of the scrollable ones. The Grid Column Pinning is visually identical to the [Ignite UI for Angular Grid Column Pinning Feature](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid_column_pinning.html)

## Grid Column Pinning Demo

<img class="responsive-img" src="../images/grid_column_pinning_demo.png" srcset="../images/grid_column_pinning_demo@2x.png 2x" />

## Header Cell Feature

The Grid Column Pinning as a header cell feature has been deprecated in Figma and if you are using AppBuilder to generate your design, you should apply it directly there after the code generation.

The Built-In Column Pinning can be used through the Grid's toolbar which by default contains a button (combined with a combo dropdown) that lets you configure the pin state of the columns for the whole grid.

<img class="responsive-img" src="../images/grid_column_pinning_built_in.png" srcset="../images/grid_column_pinning_built_in@2x.png 2x" />

## Custom Column Pinning

It is also possible to add a custom pinning action in the Grid Header Cell. In Figma you need to go to the Header Cell layer, select either the `Feature Left` or `Feature Right` and change its `Type` property from `None` to `Icon Template`. Of course, you would probably also want to rearrange the column order so that the pinned ones come first when looking left to right.

## Cell Right Border

The right-most pinned column should have its `Right Border` set to `Pinned` both for the Header and all Body Cells of the column. This is shown on the image below for all cells of the second column since "Status" is pinned.

<img class="responsive-img" src="../images/grid_column_pinning_demo.png" srcset="../images/grid_column_pinning_demo@2x.png 2x" />

## Additional Resources

Related topic:

- [Grid](grid.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
