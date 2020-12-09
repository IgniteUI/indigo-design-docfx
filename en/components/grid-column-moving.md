---
title: Grid Column Moving - Grid Feature
_description: The Grid Column Moving is a mechanism to rearrange the columns of the Grid.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

# Grid Column Moving

Use the Grid Column Moving to indicate that the columns of the Grid are movable and can be rearranged by dragging the Header Cell and dropping it to the desired location. The Grid Column Moving is visually identical to the [Ignite UI for Angular Grid Column Moving Feature](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/column_moving.html)

## Grid Column Moving Demo

<img class="responsive-img" src="../images/grid_column_moving_demo.png" srcset="../images/grid_column_moving_demo@2x.png 2x" />

## Header Cell

In order to indicate that a column is movable, configure the `Column Moving` override of the Grid Header Cell for the column by changing the default value from **Not Movable** to Movable. Also, this is what marks the column as movable as far as code generation is concerned.
_Default value is styled with_ **bold** _text._

## Column Moving Feature

The Grid has a `Column Moving` symbol under `Features` that represents the ghost Header Cell shown for the dragged column. Adding this symbol has only a visual effect on your design to make it more realistic, if you want to switch the Column Moving feature, configure the Header Cells accordingly.

## Code generation

If the `Column Moving` symbol is added make sure to place it within the group defining the Grid as a sibling to the Header and Body groups.

## Additional Resources

Related topic:

- [Grid](grid.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
