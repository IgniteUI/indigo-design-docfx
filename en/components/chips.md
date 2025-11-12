---
title: Chip and Chips Area - Design System Component
_description: The Chip Component is an interactive and compact visual shown in an obround. The Chips Area Component represents a collection of Chip Components.
_keywords: Design Systems, Design Systems UX, UI kit, Figma, Ignite UI for Angular, Figma to Angular, Angular, Angular Design System, Export code from Figma, Design Kits for Angular, Figma HTML, Figma to HTML, Figma UI kits
---

# Chip

 Use the Chip Component as a compact visual shown in an obround to display tags and people information e.g. for the recipients of an email. The Chip is visually identical to the [Ignite UI for Angular Chip Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/chip.html)

## Chip Demo

<img class="responsive-img" src="../images/chip_demo.png" srcset="../images/chip_demo@2x.png 2x" />

## Chip Size

The Chip comes in three sizes:

- Large - Suitable for interactive scenarios e.g. action triggers
- Medium - Appropriate for short areas such as the recipient field of an email message composer
- Small - Best for data-dense scenarios such as the values for a cell in the Grid

<img class="responsive-img" src="../images/chip_size.png" srcset="../images/chip_size@2x.png 2x" />

## Chip Types

The Chip provides two type variants: Default and Primary.

<img class="responsive-img" src="../images/chip_type.png" srcset="../images/chip_type@2x.png 2x" />

## Interaction State

The Chip can be in an Enabled or Disabled state. In Figma, you can change the state using the Disabled boolean operation from the properties panel.

<img class="responsive-img" src="../images/chip_interaction.png" srcset="../images/chip_interaction@2x.png 2x" />

## State

When the user interacts with the Chip, it may change from the default **Idle** state to Hover, Focused, and Selected. This affords a more dynamic interaction design that can seamlessly flow into high-fidelity prototyping. In Figma these can be selected from the State property in the properties panel.

<img class="responsive-img" src="../images/chip_state.png" srcset="../images/chip_state@2x.png 2x" />

## Remove Chip

When a chip can be removed, a special cancel icon will appear at the far right to indicate this. In Figma, the remove icon can be shown/hidden using the Remove Icon boolean property.

<img class="responsive-img" src="../images/chip_idle_removable.png" srcset="../images/chip_idle_removable@2x.png 2x" />

## Chip Content

The Chip has rich support for content templating via the prefix and suffix containers allowing to insert icons and text before and after the main label. The icons used in the chip come also in three sizes: Small, Medium, and Large. 

In Figma, you can show or hide the prefix and suffix icons by using the "Prefix Icon" and "Suffix Icon" properties in the properties panel and the layout will adjust itself accordingly.
 

<img class="responsive-img" src="../images/chip_large.png" srcset="../images/chip_large@2x.png 2x" />
`Text`

<img class="responsive-img" src="../images/chip_prefix.png" srcset="../images/chip_prefix@2x.png 2x" />
`Prefix`

<img class="responsive-img" src="../images/chip_prefix_suffix.png" srcset="../images/chip_prefix_suffix@2x.png 2x" />
`Prefix+Suffix`

<img class="responsive-img" src="../images/chip_suffix.png" srcset="../images/chip_suffix@2x.png 2x" />
`Suffix`

## Chip Styling

The Chip comes with styling flexibility through the various options for the border and background colors, as well as the text and prefix, suffix, selection, and remove icon colors, where applicable.

<img class="responsive-img" src="../images/chip_styling.png" srcset="../images/chip_styling@2x.png 2x" />

## Chips Area

Use the Chips Area Component to organize a collection of Chips. The Chips Area is identical to the Chip Area used in Ignite UI for Angular, which is explained at length in the [Ignite UI for Angular Chip Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/chip.html) help topic.

<img class="responsive-img" src="../images/chips_area_demo.png" srcset="../images/chips_area_demo@2x.png 2x" />

The Chips Area comes with the inherent styling flexibility of the Chips.

<img class="responsive-img" src="../images/chips_area_styling.png" srcset="../images/chips_area_styling@2x.png 2x" />

## Usage

When using a Chip, the obround will automatically size itself to fit the content and you only need to adjust the size of the instance accordingly. If the Chip is used as an action trigger for related content avoid using it in scenarios where there is only one available action, or for configurations presenting only one selectable option.

| Do                                                                         | Don't                                                                          |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| |
| <img class="responsive-img" src="../images/chip_do1.png" srcset="../images/chip_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/chip_dont1.png" srcset="../images/chip_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/chip_do2.png" srcset="../images/chip_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/chip_dont2.png" srcset="../images/chip_dont2@2x.png 2x" /> |



## Additional Resources

Related topics:

- [Grid](grid.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
