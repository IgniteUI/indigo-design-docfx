---
title: Hyperlink - Design System Component
_description: The Hyperlink Component Symbol is used to allow the user follow a reference in a text paragraph. 
_keywords: Design System, Sketch, Component, UI Library, Widgets
---

## Hyperlink

Use the Hyperlink Component to allow the user access additional information related to a styled piece of text in a paragraph like the mentioning of the Terms of Use or the Privacy Policy in a form.

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

When colors or fonts are specified for the Hyperlink, they are applied directly to a CSS class that is applied to the hyperlink element.

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Hyperlink in your design is very likely to result in loss of code generation capability for the Hyperlink.

### LinkURL

When supplied, the LinkURL binding can be non-nested or nested. This property data binds the Hyperlink’s href. The href specifies the link to navigate to when the Hyperlink is clicked.
If the property is a nested property, include the nested property chain, but don’t include the model object name. Examples:

#### Example Not Nested

```PseudoCode
Customer {
url: string;
}

LinkURL would be: {url}
```

#### Example Nested

```PseudoCode
Profile {
url: string;
}

Customer {
profile: Profile;
}

LinkURL would be: {profile.url}
```

### Text

When supplied the Text property is used to fill in the text to display for the Hyperlink.

### Event Property

When supplied the `🕹️Event` property is used to create a method in the component TypeScript and add an Angular click signature in the HTML.

## Additional Resources

Related topics:

- [Form Pattern](forms.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Indigo Design **GitHub**](https://github.com/IgniteUI/design-system-docfx)
