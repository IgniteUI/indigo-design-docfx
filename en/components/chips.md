---
title: Chip and Chips Area - Design System Component
_description: The Chip Component Symbol is an interactive and compact visual shown in an obround. The Chips Area Component Symbol represents a collection of Chip Components.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

# Chip

Use the Chip Component as a compact visual shown in an obround to display tags and people information e.g. for the recipients of an email. The Chip is visually identical to the [Ignite UI for Angular Chip Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/chip.html)

## Chip Demo

<img class="responsive-img" src="../images/chip_demo.png" srcset="../images/chip_demo@2x.png 2x" />

## Chip Density

The Chip comes in three density variants:

- Comfortable - Suitable for interactive scenarios e.g. action triggers
- Cosy - Appropriate for short areas such as the recipient field of an email message composer
- Compact - Best for data-dense scenarios such as the values for a cell in the Grid

<img class="responsive-img" src="../images/chip_comfy.png" srcset="../images/chip_comfy@2x.png 2x" />
<img class="responsive-img" src="../images/chip_cosy.png" srcset="../images/chip_cosy@2x.png 2x" />
<img class="responsive-img" src="../images/chip_compact.png" srcset="../images/chip_compact@2x.png 2x" />

## Chip Types

The Chip provides two type variants: Default and Primary.

<img class="responsive-img" src="../images/chip_default.png" srcset="../images/chip_default@2x.png 2x" />
<img class="responsive-img" src="../images/chip_primary.png" srcset="../images/chip_primary@2x.png 2x" />

## Interaction State

The Chip can be inserted in an enabled or disabled state. In Adobe XD we are using the Component States paradigm to let you easily switch between them.

<img class="responsive-img" src="../images/chip_enabled.png" srcset="../images/chip_enabled@2x.png 2x" />
<img class="responsive-img" src="../images/chip_disabled.png" srcset="../images/chip_disabled@2x.png 2x" />

## Chip State

When the user interacts with the Chip, it may change from the default **idle** state to hover, focus, selected, and templated. This affords a more dynamic interaction design that can seamlessly flow into high-fidelity prototyping. In Sketch this is achieved with `Symbol Overrides`, while in Adobe XD we are using the `Component States` paradigm to let you easily switch between states.

<img class="responsive-img" src="../images/chip_idle.png" srcset="../images/chip_idle@2x.png 2x" />
<img class="responsive-img" src="../images/chip_hover.png" srcset="../images/chip_hover@2x.png 2x" />
<img class="responsive-img" src="../images/chip_focus.png" srcset="../images/chip_focus@2x.png 2x" />
<img class="responsive-img" src="../images/chip_selected.png" srcset="../images/chip_selected@2x.png 2x" />
<img class="responsive-img" src="../images/chip_templated.png" srcset="../images/chip_templated@2x.png 2x" />

## Remove Chip

When a chip can be removed, a special cancel icon will appear at the far right to indicate this. The `🔣 Remove Icon` override provides the means to trigger this functionality in Sketch. The smart layout rules applied to the Chip adjust its layout accordingly. 

In Adobe XD, the `🔣 Remove Icon` layer has to be made visible to achieve the same and the Stack on the Chip will adjust its layout in a similar way. If you don't want the Chip to be removable, simply delete the `🔣 Remove Icon` layer.

<img class="responsive-img" src="../images/chip_idle_removable.png" srcset="../images/chip_idle_removable@2x.png 2x" />
`idle and removable`

## Chip Content

The Chip has rich support for content templating via the prefix and suffix containers allowing to insert icons and text before and after the main label. 

In Sketch, prefix and suffix containers can be added by finding them in the Overrides/Input/Prefix/Container and Overrides/Input/Suffix/Container or removed by setting them to ~No Symbol, upon which the layout will adjust accordingly. 

In Adobe XD, you have to make the desired layers visible and delete the unnecessary elements from them. If you want to remove a prefix or suffix all at once, simply delete it altogether. In the end, the layout will adjust thanks to the Stack that is being used.

<img class="responsive-img" src="../images/chip_comfy.png" srcset="../images/chip_comfy@2x.png 2x" />
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

Use the Chips Area Component to organize a collection of Chips. The Chips Area is identical to the container area used in Ignite UI for Angular, which is explained at length in the [Ignite UI for Angular Chip Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/chip.html) help topic.

<img class="responsive-img" src="../images/chips_area_demo.png" srcset="../images/chips_area_demo@2x.png 2x" />

The Chips Area comes with the inherent styling flexibility of the Chips.

<img class="responsive-img" src="../images/chips_area_styling.png" srcset="../images/chips_area_styling@2x.png 2x" />

## Usage

When using a Chip, the obround will automatically size itself to fit the content and you only need to adjust the size of the instance accordingly. If the Chip is used as an action trigger for related content avoid using it in scenarios where there is only one available action, or for configurations presenting only one selectable option.

| Do                                                                         | Don't                                                                          |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| |
| <img class="responsive-img" src="../images/chip_do1.png" srcset="../images/chip_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/chip_dont2.png" srcset="../images/chip_dont2@2x.png 2x" /> |
| <img class="responsive-img" src="../images/chip_do3.png" srcset="../images/chip_do3@2x.png 2x" /> | <img class="responsive-img" src="../images/chip_dont3.png" srcset="../images/chip_dont3@2x.png 2x" /> |



## Additional Resources

Related topics:

- [Grid](grid.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
