---
title: Grid Column Resizing - Grid Feature
_description: The Grid Column Resizing is a mechanism to adjust the width of the columns of the Grid.
_keywords: Design Systems, Design Systems UX, UI kit, Figma, Figma to Angular, Export code from Figma, Figma to HTML, Figma UI kits, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits, Adobe XD, Adobe XD to Angular, Export code from Adobe XD, Adobe XD to HTML, Adobe XD UI kits
---

# Grid Column Resizing

Use the Grid Column Resizing to indicate that the columns of the Grid are resizable and allow the user to grab their header's right border as a handle to adjust their width. The Grid Column Resizing is visually identical to the [Ignite UI for Angular Grid Column Resizing Feature](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/column_resizing.html)

## Grid Column Resizing Demo

<img class="responsive-img" src="../images/grid_column_resizing_demo.png" srcset="../images/grid_column_resizing_demo@2x.png 2x" />

## Header Cell

To indicate that a column is resizable, configure the `Column Resizing` override of the Grid Header Cell for the column in Sketch by changing the default value from **Not Resizable** to **Resizable**. In Adobe XD, the `Column Resizing` layer uses the `Component States` paradigm to let you easily switch between states. This is what marks the column as resizable as far as code generation is concerned. This feature has been deprecated in Figma and if you are using AppBuilder to generate your design, you should apply it directly there after the code generation.

## Column Resizing Indicator Feature

The Grid has a `Column Resizing Indicator` symbol/component under `Features` that represents a highlight border of the whole column where resizing occurs. Adding this symbol/component has only a visual effect on your design to make it more realistic, if you want to switch the Column Resizing feature, configure the Header Cells accordingly.

## Additional Resources

Related topic:

- [Grid](grid.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
