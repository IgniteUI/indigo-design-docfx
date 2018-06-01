---
title: Text - Design System Component
_description: The Text Component Symbol is used to display non-interactive title or paragraph text.
_keywords: Design System, Sketch, Component, UI Library, Widgets
---

## Text

Use the Text Component Symbol to display the content of a title or paragraph string that is not interactive such as the content of a news article or blog post.

### Text Demo

![](../images/text_demo.png)

### Title and Paragraph

Text comes in two distict variants for Titles and for Paragraphs.

![](../images/text_title.png)
![](../images/text_paragraph.png)

### Title Sizes

Text Titles come in six preset sizes from the largest H1 to the much smaller **H5** and H6.

![](../images/text_h1.png)
![](../images/text_h2.png)
![](../images/text_h3.png)
![](../images/text_h4.png)
![](../images/text_h5.png)
![](../images/text_h6.png)

### Paragraph Sizes

Text Paragraphs come in three preset sizes: a larger **Body 1**, a smaller Body 2, and a tiny Caption used to annotate images and titles.

![](../images/text_b1.png)
![](../images/text_b2.png)
![](../images/text_caption.png)

### Styling

Titles and Paragraphs come with constrained styling flexibility allowing only to choose from the text weight and color presets available in the Typography portion of the Styling library.

![](../images/text_styling.png)

## Usage

Always choose Paragraph text color that makes a Hyperlink stand out if the two are used together. Avoid using the same color or similar nuances of it and pick consistent Title and Paragraph colors across your complete design. Use the Paragraph Caption size only for one-line annotations, avoid using such tiny font sizes for longer, multi-line strings.

| Do                          | Don't                         |
| --------------------------- | ----------------------------- |
| ![](../images/text_do1.png) | ![](../images/text_dont1.png) |
| ![](../images/text_do2.png) | ![](../images/text_dont2.png) |

## Code generation

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Navigation Drawer will reduce the accuracy of code generation for the Navigation Drawer. Do this only if you need to create more items than provided and make sure you keep the `🚫igx-nav-drawer` and `🕹️DataSource` layers intact.

The Navigation Drawer symbol has a special `🕹️DataSource` field in its `Overrides` section. Use the curly braces notation _{notifications.count}_ to provide a reference for code generation to the database property, which should be used as a binding.

## Additional Resources

Related topics:

Our community is active and always welcoming to new ideas.

* [Design System **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Design System **GitHub**](https://github.com/IgniteUI/igniteui-angular)
