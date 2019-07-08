---
title: Grid Toolbar - Grid Feature
_description: The Grid Toolbar Symbol provides a header with actions affecting the whole Grid.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

## Grid Toolbar

Use the Grid Toolbar to define actions that affect the appearance and behavior of the whole grid. By default the Toolbar will contain actions for showing/hiding and pinning/unpinning of columns, as well as Exporting the Grid content in various formats. The Grid Toolbar is visually identical to the [Ignite UI for Angular Grid Toolbar Feature](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/toolbar.html)

### Grid Toolbar Demo

<img class="responsive-img" src="../images/grid_toolbar_demo.png" srcset="../images/grid_toolbar_demo@2x.png 2x" />

### Styling

The Grid Toolbar comes with styling flexibility through the various overrides for its Actions, as well as its title style and background color.

<img class="responsive-img" src="../images/grid_toolbar_styling.png" srcset="../images/grid_toolbar_styling@2x.png 2x" />

## Code generation

> [!WARNING]
> Do **not** `Detach from Symbol` on an instance of the Toolbar in your design or else it won't generate properly.

Make sure to place the Toolbar within the group defining the Grid as a sibling to the Header and Body groups.

### Title

This override controls the text to display in the Toolbar.

### Action 1, 2 and 3

These overrides are used to control what actions are available in the toolbar. The following are the available options:

#### ButtonExport

This option adds the [Export](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/toolbar.html#features) button to the toolbar which directly enables the `Export to Excel` and `Export to CSV` features of the grid.

#### ButtonHiding

This option adds the [Column Hiding](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/column_hiding.html) button to the toolbar. This is a UI element that allows the user to manipulate which columns are visible and which are hidden.

#### ButtonPinning

This option adds the [Column Pinning](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/toolbar.html#features) button to the toolbar. This is a UI element that allows the user to manipulate which columns are pinned.

#### Switch, Icon & Button

Switch, Icon & Button options are considered [custom content](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/toolbar.html#custom-content-template) since they do not come with the Toolbar by default. In order to render these inside the Toolbar, code generation will produce an `ng-template` that contains these components for the Toolbar to use.

## Additional Resources

Related topics:

- [Grid](grid.md)
- [Grid Column Hiding](grid-column-hiding.md)
- [GridGrid Column Pinning](grid-column-pinning.md)
- [Grid Export](grid-export.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
