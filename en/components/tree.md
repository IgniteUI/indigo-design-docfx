---
title: Tree Component - Design System Component
_description: The Tree Component is used as a visual representation of the hierarchical relationship between categories, presented in a list structure.
_keywords: Design Systems, Design Systems UX, UI kit, Figma, Ignite UI for Angular, Figma to Angular, Angular, Angular Design System, Export code from Figma, Design Kits for Angular, Figma HTML, Figma to HTML, Figma UI kits
---

## Tree
The Tree component is used as a visual representation of the hierarchical relationship between categories, presented in a list structure.
The Tree component is visually identical to the [Ignite UI for Angular Tree Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/tree.html)

## Tree Demo

<img class="responsive-img" src="../images/tree_demo.png" srcset="../images/tree_demo@2x.png 2x" />

## Tree Sizes

The Tree component offers three sizes: Large, Medium, and Small. In Figma, you can switch between them by adjusting the `Size` property in the properties panel.

<img class="responsive-img" src="../images/tree_size_large.png" srcset="../images/tree_size_large@2x.png 2x" />
<img class="responsive-img" src="../images/tree_size_medium.png" srcset="../images/tree_size_medium@2x.png 2x" />
<img class="responsive-img" src="../images/tree_size_small.png" srcset="../images/tree_size_small@2x.png 2x" />

## Tree Type

We support two types of Tree component: Basic and Checkbox, where you have a Checkbox component after the Expand Icon. In Figma you can switch between the two types using the `Checkbox` boolean property from the properties panel.

<img class="responsive-img" src="../images/tree_type_basic.png" srcset="../images/tree_type_basic@2x.png 2x" />
<img class="responsive-img" src="../images/tree_type_checkbox.png" srcset="../images/tree_type_checkbox@2x.png 2x" />

## Tree Node Structure

The Tree component is built from a number of nested components we call Tree Nodes. Each Node consists of Expand Icon and Text. If you've chosen the Checkbox type, there will also be a Checkbox component after the Expand Icon. 

<img class="responsive-img" src="../images/tree-node_basic.png" srcset="../images/tree-node_basic@2x.png 2x" />
<img class="responsive-img" src="../images/tree-node_checkbox.png" srcset="../images/tree-node_checkbox@2x.png 2x" />

The Text in each node can be switched from normal to hyperlink text. In Figma this can be achieved by using the `Hyperlink` boolean property of the .Base Node component from the properties panel.

<img class="responsive-img" src="../images/tree-node_basic.png" srcset="../images/tree-node_basic@2x.png 2x" />
<img class="responsive-img" src="../images/tree-node_hyperlink.png" srcset="../images/tree-node_hyperlink@2x.png 2x" />

We also support two states of the Expand Icon - Collapsed and Expanded. In Figma you can switch between the two using the `Expanded` boolean property of the .Base Node component from the properties panel.

<img class="responsive-img" src="../images/tree-node_basic.png" srcset="../images/tree-node_basic@2x.png 2x" />
<img class="responsive-img" src="../images/tree-node_expanded.png" srcset="../images/tree-node_expanded@2x.png 2x" />

## Tree Node Level

In order to represent the hierarchical relationship between the nodes, the Tree Node supports three Level types: Root, Child and Grandchild. In Figma you can switch to a different level using the `Level` property of the .Base Node component from the properties panel.

<img class="responsive-img" src="../images/tree_demo.png" srcset="../images/tree_demo@2x.png 2x" />

## Tree Node State

The Tree Node has two primary states: Idle and Disabled, with additional interaction states available. In Figma, you can toggle the Active, Hover and Focused properties in the properties panel to adjust these states. Additionally, you can control the Checkbox state by toggling the `Selected` and `Indeterminate` boolean properties in the properties panel.

<img class="responsive-img" src="../images/tree-node_basic.png" srcset="../images/tree-node_basic@2x.png 2x" />
<img class="responsive-img" src="../images/tree-node_disabled.png" srcset="../images/tree-node_disabled@2x.png 2x" />

## Tree Presets

In addition to the basic Tree component, you can also choose from three Tree Presets - Active, Cascading Selection and Multiple Selection. These can make building your design easier and faster. In Figma these are separate components, positioned on the same page as the Tree component and you can insert them from the Assets panel.

<img class="responsive-img" src="../images/tree_presets_active.png" srcset="../images/tree_presets_active@2x.png 2x" />
<img class="responsive-img" src="../images/tree_presets_cascading-selection.png" srcset="../images/tree_presets_cascading-selection@2x.png 2x" />
<img class="responsive-img" src="../images/tree_presets_multiple-selection.png" srcset="../images/tree_presets_multiple-selection@2x.png 2x" />

## Styling

The Tree comes with styling flexibility through the available options for the Expand Icon, Checkbox and Text colors, as well as the colors used in different states of the Tree Node.

<img class="responsive-img" src="../images/tree_styling.png" srcset="../images/tree_styling@2x.png 2x" />

## Usage

Ensure the Expand Icon state is set to `Expanded` for expanded Tree Nodes. When presenting cascading selection, switch the Checkbox state of parent nodes to `Indeterminate` to reflect partial selection.

| Do                                                                             | Don't                                                                              |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/tree_do1.png" srcset="../images/tree_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/tree_dont1.png" srcset="../images/tree_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/tree_do2.png" srcset="../images/tree_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/tree_dont2.png" srcset="../images/tree_dont2@2x.png 2x" /> |

# Additional Resources

Related topics:

- [Checkbox](../components/checkbox.md)
- [Icon](../components/icon.md)


Our community is active and always welcoming to new ideas.
