---
title: Components Overview - Design System Components
_description: The Indigo Design System contains 60+ UI Components with numerous presets, states, and elaborate built-in styling capabilities.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

# Components Overview

The **Indigo.Design System** empowers your design workflow with 60+ UI Components that also map to Ignite UI for Angular controls. Each component is optimized for responsive web design and development, providing various templating capabilities through smart layout and resizing rules set in Sketch . In Adobe XD, we have extended this through the use of stacks and repeat grids, but have also added light/dark modes and various interaction states to choose from when designing interactive experiences. All this streamlines application design and development allowing a huge variety of user interface scenarios to be created with the libraries and subsequently through code generation become available as Ignite UI for Angular code.

The Sketch library has a `🧩 Components` page containing all Components and symbols related to them. When selecting a Symbol instance, through the Override section in the right panel, one can change the content inside e.g. enabled/disabled states, light/dark variants, icons, colors, etc. Below is a small part of showing some of the Components and symbols such as the different types of [Buttons](button.md), [Button Group](button-group.md) and form elements like [Checkbox](checkbox.md), [Switch](switch.md), and [Radio Group](radio-group.md).

<img class="responsive-img" src="../images/components-page.png" />

In the Adobe XD library you can find the `🧩 Components` in the middle column. Here, the various states of a component can be switched from the right panel. Also, we have used the `Stack` and `Padding` to align and distribute elements vertically or horizontally and change their position. When you want to swap a nested component with another one, you can simply drag it from the `Libraries` panel and drag it on top of the current one to replace it. You will also notice that some components, such as the Grid, for example, use a `Repeat Grid` to speed configuration up.

> [!WARNING]
> When changing an icon glyph with another one by dragging it from the `Libraries` panel in Adobe XD, sometimes its layer name will change from `🔣 Icon` to the symbol name `_Overrides/~`. When this happens you must rename it back to the original layer name before the element got swapped to assure successful code generation.

All **Indigo.Design System** Components are built on top of rigid [styling foundations](../style/styling-overview.md) letting you leverage an elaborate mechanism for theming and branding your user interface.

> [!WARNING]
> Unlinking any component instance from the libraries makes it impossible to automatically apply updates from subsequent versions of the Design System and may impact the code generation capability of the component. The code generation services rely on specially designated `🚫 metadata` layers, containing metadata descriptions of the state, template, and other properties of the component that under no circumstances should be deleted.

## Additional Resources

Related topics:

- [Styling](../style/styling-overview.md)
- [Patterns](../patterns/patterns-overview.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
