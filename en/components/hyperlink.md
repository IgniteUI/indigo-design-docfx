---
title: Hyperlink - Design System Component
_description: The Hyperlink Component Symbol is used to allow the user follow a reference in a text paragraph. 
_keywords: Design System, Sketch, Component, UI Library, Widgets
---

## Hyperlink

Use the Hyperlink Component Symbol to allow the user access additional information related to a styled piece of text in a paragraph such as the mentioning of the Terms of Use or the Privacy Policy in a form.

### Hyperlink Demo

![](../images/hyperlink_demo.png)

### Size

The Hyperlink comes in two different sizes matching the available sizes for paragraph text: a 16pt Body 1 and a 14pt Body 2.

![](../images/hyperlink_sizes.png)

### Styling

The Hyperlink can be styled through the Styling library by changing its default blue color to another one.

![](../images/calendar_styling.png)

## Usage

Always choose a Hyperlink text color that makes it stand out in a paragraph. Avoid using the same color or similar nuances of it and pick a consistent color across your complete design.

| Do                               | Don't                              |
| -------------------------------- | ---------------------------------- |
| ![](../images/hyperlink_do1.png) | ![](../images/hyperlink_dont1.png) |

## Code generation

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Bottom Navigation in your design is very likely to result in loss of code generation capability for the Bottom Navigation.

The Bottom Navigation symbol has a special `🕹️DataSource` field in its `Overrides` section. Use the curly braces notation _{notifications.count}_ to provide a reference for code generation to the database property, which should be used as a binding.
The Bottom Navigation symbol has special `🕹️Event` fields, one for each item, in its `Overrides` section. Use the curly braces notation _{???}_ to provide a reference for code generation to the ...

## Additional Resources

Related topics:

* [Form Pattern](forms.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Design System **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Design System **GitHub**](https://github.com/IgniteUI/igniteui-angular)
