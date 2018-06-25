---
title: Grid Column Pinning - Grid Feature
_description: The Grid Column Pinning is a mechanism to pin the first few columns of a scrollable Grid. 
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

## Grid Column Pinning

Use the Grid Column Pinning Component to fix the first few columns of a scrollable Grid to the left. Now, when the user scrolls, all other columns move left and right except for the pinned ones. The pinned columns always appear on top of the scrollable ones. The Grid Column Pinning is visually identical to the [Ignite UI for Angular Grid Column Pinning Feature](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid_column_pinning.html)

### Grid Column Pinning Demo

<img src="../images/grid_column_pinning_demo.png" srcset="../images/grid_column_pinning_demo@2x.png 2x" />

### Cell Right Border

The Grid Column Pinning is achieved by changing the Right Border override to Pinned Line for the Header Cell and all Body Cells that constitute the right-most column of the pinned ones. In the demo above, this is done for all cells of the second column, resulting in the pinning of the two columns to the left.

## Additional Resources

Related topics:

- [Grid](grid.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Indigo Design **GitHub**](https://github.com/IgniteUI/design-system-docfx)
