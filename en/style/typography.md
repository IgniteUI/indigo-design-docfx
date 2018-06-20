---
title: Typography - Design System Styling
_description: The Typography Symbols in Styling are the go to place for setting up the font-related aspects of a theme in Indigo Design. 
_keywords: Design System, Sketch, Ignite UI for Angular, UI Library, Colors, Palettes
---

## Typography

Use Typography to set up your theme's typeface and available sizes. Although we are using [Titillium Web](https://fonts.google.com/specimen/Titillium+Web) as the default typeface, we really want to give every designer the flexibility to craft his applications with style. The essence of Typography in the Styling library is resonating with the way typography is implemented in the [Ignite UI for Angular Themes](https://www.infragistics.com/products/ignite-ui-angular/angular/components/themes.html).

![](../images/typography_default.png)

> [!INFO]
> The Components library provides dedicated [Text](text.md) symbols for Titles and Paragraphs. Use these when creating intricate layouts for articles, blog posts etc. rather than the Styling library directly. Typography is meant to help you define a consistent theme and style for all the texts in your designs.

### Typography colors

Typography comes in multiple preset colors such as: `grays.900`, `grays.600`, `white`, `primary`, and `secondary`. There is also one additional set of specialty colors, containing Typography variations for strings that need to be in `success`, `warn`, and `error` colors, as well as a some additional nuances used by the components in the following section.

![](../images/typography_colors.png)

### Component specific typography

Components, such as [Avatar](avatar.md), [Hyperlink](hyperlink.md), and [Text](text.md), use component-specific Typography to accommodate the specifics of the styling used by the respective component e.g. the Avatar needs a larger variety of colors, while the Hyperlink comes with an underlined text.

![](../images/typography_specific.png)

### Changing the typeface

In order to change the typeface, hold the `command` key and drag across the whole Typography secton. This will select the text layers (otherwise you'll select the artboards). Now change the typeface to the one of your choice and you are all set.

![](../images/typography_typeface.png)

### Changing colors of typography

Once you update the `primary` and `secondary` colors as the first step for theming your applications, you will see that the text colors will not update automatically. In order to update the text colors as well, hold the `command` key and drag across the whole `primary` or `secondary` section. This will select the text layers (otherwise you'll select the artboards). Now, change the text color to your color of choice and, after repeating this process for all necessary colors, your theme will be up to speed.

![](../images/typography_primary.png)

> [!INFO]
> If you want to go one step further and e.g. use `grays.700` instead of `grays.600` besides following the process above to update the `grays.600` secton, you should also update the names of the affected layers to `Typography/.../grays.700`.

## Code Generation

A typography style object when added to a Sketch drawing is rendered as an HTML div with the corresponding text, color and size.

### Data bindings

Data bindings are specified by using curly brace syntax, example: {isAdmin}.Data bindings can be non-nested or nested. If the target property is a nested property, include the nested property chain, but don’t include the model object name. Examples:

#### Not Nested

```PseudoCode
Customer {
  imageName: String;
}

DataProperty would be: {imageName}
```

#### Nested

```PseudoCode
Profile {
  imageName: String;
}

Customer {
  profile: Profile;
}

DataProperty would be: {profile.imageName}
```

### Text

The Text property may contain text, binding, or a combination of the two, examples:

- Settings
- {settingsLabel}
- Important {labelText}

## Additional Resources

Related topics:

- [Avatar](avatar.md)
- [Hyperlink](hyperlink.md)
- [Text](text.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Indigo Design **GitHub**](https://github.com/IgniteUI/design-system-docfx)
