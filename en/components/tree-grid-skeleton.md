---
title: Skeleton Tree Grid - Design System Component
_description: The Skeleton Tree Grid is a representation of a Tree Grid component that is shown while hierarchical data is being loaded in the background to provide content for its cells in a tabular fashion.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

# Skeleton Tree Grid

Use the Skeleton Tree Grid to layout the same type of information that you would in the standard one, but to also indicate an application state when no data is present at the moment e.g. when data is loaded from a remote data source and there is either lack of connectivity, or it takes some time. The Skeleton Tree Grid is just a visual representation of a [Tree Grid](tree-grid.md) with a known layout, but without any data to show.

## Skeleton Tree Grid Demo

<img class="responsive-img" src="../images/tree_grid_skeleton_demo.png" srcset="../images/tree_grid_skeleton_demo@2x.png 2x" />

## Cell Types

The Skeleton Tree Grid extends the three types of skeleton cells Header, Body, and Summary with an additional one as the standard [Tree Grid](tree-grid.md): TreeColumn cell.

<img class="responsive-img" src="../images/tree_grid_skeleton_column_cell.png" srcset="../images/tree_grid_skeleton_column_cell@2x.png 2x" />

## Cell Display Density

The Skeleton Tree Grid TreeColumn cell supports the same three display density variants as the standard [Tree Grid](tree-grid.md): comfortable, cosy, and compact.

<img class="responsive-img" src="../images/tree_grid_skeleton_column_cell_comfortable.png" srcset="../images/tree_grid_skeleton_column_cell_comfortable@2x.png 2x" />
<img class="responsive-img" src="../images/tree_grid_skeleton_column_cell_cosy.png" srcset="../images/tree_grid_skeleton_column_cell_cosy@2x.png 2x" />
<img class="responsive-img" src="../images/tree_grid_skeleton_column_cell_compact.png" srcset="../images/tree_grid_skeleton_column_cell_compact@2x.png 2x" />

## Cell Depth

The Skeleton Tree Grid TreeColumn cell supports the same visual indication for the level of the data hierarchy as the standard [Tree Grid](tree-grid.md): Root Level, Child Level or Grandchild Level.

<img class="responsive-img" src="../images/tree_grid_skeleton_cell_body_root_level.png" srcset="../images/tree_grid_skeleton_cell_body_root_level@2x.png 2x" />
<img class="responsive-img" src="../images/tree_grid_skeleton_cell_body_child_level.png" srcset="../images/tree_grid_skeleton_cell_body_child_level@2x.png 2x" />
<img class="responsive-img" src="../images/tree_grid_skeleton_cell_body_grandchild_level.png" srcset="../images/tree_grid_skeleton_cell_body_grandchild_level@2x.png 2x" />

## Grid Types

The Skeleton Tree Grid supports the three display densities and offers variants for each of them with regard to the state of loading data: Initial which is shown when the Tree Grid is loading data and there are no expanded root-level rows, and Expand which is shown when a root level gets expanded and starts loading data for its children.

<img class="responsive-img" src="../images/tree_grid_skeleton_initial.png" srcset="../images/tree_grid_skeleton_initial@2x.png 2x" />
<img class="responsive-img" src="../images/tree_grid_skeleton_expand.png" srcset="../images/tree_grid_skeleton_expand@2x.png 2x" />

## Usage

When creating tree grids, avoid combining standard and skeleton cells within the same hierarchy level. Data is either present for all rows and cells on a given level, or for none of them. Combining standard and skeleton cells is appropriate only in a very limited set of use cases such as the presets explained above.

| Do                                                                                                | Don't                                                                                                 |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/tree_grid_skeleton_do1.png" srcset="../images/tree_grid_skeleton_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/tree_grid_skeleton_dont1.png" srcset="../images/tree_grid_skeleton_dont1@2x.png 2x" /> |

## Additional Resources

Related topics:

- [Tree Grid](tree-grid.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
