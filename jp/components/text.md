---
title: Text - Design System Component
_description: The Text Component Symbol is used to display non-interactive title or paragraph text.
_keywords: Design System, Sketch, Component, UI Library, Widgets
---

## Text

Use the Text Component Symbol to display the content of a title or paragraph string that is not interactive, such as the content of a news article or blog post.

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

Titles and Paragraphs come with constrained styling flexibility, allowing only to choose from the text weight and color presets available in the Typography portion of the Styling library.

![](../images/text_styling.png)

## Usage

Always choose Paragraph text color that makes a Hyperlink stand out if the two are used together. Avoid using the same color or similar nuances of it and pick consistent Title and Paragraph colors across your complete design. Use the Paragraph Caption size only for one-line annotations and avoid using such tiny font sizes for longer, multi-line strings.

| Do                          | Don't                         |
| --------------------------- | ----------------------------- |
| ![](../images/text_do1.png) | ![](../images/text_dont1.png) |
| ![](../images/text_do2.png) | ![](../images/text_dont2.png) |

## Code generation

The Paragraph is a small component with a couple of options to allow custom text and appearances.
The size and style properties are configurable for the Paragraph component. The HTML tag will wrap with a “p” tag regardless of the configuration.

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Title or Paragraph Text in your design is very likely to result in loss of code generation capability for the Title or Paragraph Text.

### Size

Size is a nested property, which when supplied sets the Title or Paragraph Size.

|           |                           |
| --------- | ------------------------- |
| Title     | H1, H2, H3, H4, H5, or H6 |
| Paragraph | Body1, Body2, or Caption  |

### Style

The text is configurable with many different typography settings such as left, right, or center alignment. The appearance can be set to three shades of gray, green (success), and warning which are represented by Warn (orange), primary (blue), secondary (ruby), white, black and error (red).

### Text

Text is a nested property, which configures the content rendered by the component.

#### Non-Binding

- Olympic Medals by Country

#### Non-Binding

- Olympic Medals for {country}
- {olympicChartTitle}

## Additional Resources

Related topics:

Our community is active and always welcoming to new ideas.

- [Indigo Design **GitHub**](https://github.com/IgniteUI/design-system-docfx)
