---
title: Radio Group - Design System Component
_description: The Radio Group Component Symbol is used to provide a mechanism for exclusive selection from a set of available options. 
_keywords: Design System, Sketch, Ignite UI for Angular, Component, UI Library, Widgets
---

## Radio Group

Use the Radio Group Component Symbol to allow exclusive selection for one item in a group. The items in the group are left aligned and come one after another laid out in a single column.
The Radio Group is visually identical to the [Ignite UI for Angular Radio Button Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/radio_button.html)

### Radio Group Demo

![](../images/radiogroup_demo.png)

### Theme

The Radio Group can be used styled in **dark** and light variants to assure good readability and contrast for both lighter and darker backgrounds. Make sure that all Radios are set to the same theme.

![](../images/radiogroup_dark.png)
![](../images/radiogroup_light.png)

### State

Each Radio in the group provides **on** and off selection states with additional variants for a disabled interaction state.

![](../images/radiogroup_states.png)

### Styling

The Radio Group comes with styling flexibility through the various overrides for each item's label style and color.

![](../images/radiogroup_styling.png)

## Usage

When extending a Radio Group with additional items make sure that they are all left aligned consistently one under another in a single column. Avoid layout in multiple columns as well as situations with more the one Radio being on at a time.

| Do                                | Don't                               |
| --------------------------------- | ----------------------------------- |
| ![](../images/radiogroup_do1.png) | ![](../images/radiogroup_dont1.png) |
| ![](../images/radiogroup_do2.png) | ![](../images/radiogroup_dont2.png) |

## Code generation

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Radio Group will reduce the accuracy of code generation for the Radio Group. Do this only if you need to create more items than provided and make sure you keep the `🚫igx-radio-group`, `🕹️DataProperty` and `🕹️DataSource` layers intact.

`🕹️DataSource`
`🕹️Event`

## Additional Resources

Related topics:

Our community is active and always welcoming to new ideas.

- [Indigo Design **GitHub**](https://github.com/IgniteUI/design-system-docfx)
