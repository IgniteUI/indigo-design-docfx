---
title: Expansion Panel - Design System Component
_description: The Expansion Panel Component provides a summary-details view with built-in functionality to show and hide the details. 
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

# Expansion Panel

Use the Expansion Panel Component as a way to preserve screen-space, where you have a lot of text and would like to hide it with the title in the Header giving initial information, and when opened, the Body's content giving more details. The Expansion Panel has two main states - Collapsed and Expanded.
The Expansion Panel is visually identical to the [Ignite UI for Angular Expansion Panel Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/expansion-panel.html)

## Expansion Panel Demo

<img class="responsive-img" src="../images/expansion_panel_demo.png" srcset="../images/expansion_panel_demo@2x.png 2x" />

## Header State

The Expansion Panel's Header comes in **Active** and Disabled state. You can switch between them using the Disabled boolean operation in Figma, using the Overrides panel in Sketch and from the States section in the right panel of Adobe XD.

<img class="responsive-img" src="../images/expansion_panel_active.png" srcset="../images/expansion_panel_active@2x.png 2x" />
`Active`

<img class="responsive-img" src="../images/expansion_panel_disabled.png" srcset="../images/expansion_panel_disabled@2x.png 2x" />
`Disabled`

## Header Layout

The Expansion Panel's Header Layout consists of Left Expansion Panel Icon, Content including Title and Description, and Right Expansion Panel Icon. In Figma there are Icon and Description properties, which let you modify the layout. By default the Right Expansion Panel Icon is set to ~No Symbol in Sketch and is hidden in Adobe XD. The Left Expansion Panel Icon and the Content are in a smart layout in Sketch and form a Stack in Adobe XD, meaning that if the Icon is hidden, the Content will automatically shift to the left. However, if you do so, remember to make the Right Expansion Panel Icon visible and set the left one to ~No Symbol in Sketch or delete it in Adobe XD.

<img class="responsive-img" src="../images/expansion_panel_header1.png" srcset="../images/expansion_panel_header1@2x.png 2x" />
<img class="responsive-img" src="../images/expansion_panel_header2.png" srcset="../images/expansion_panel_header2@2x.png 2x" />

## Body

The Expansion Panel's Body contains a text paragraph that is visible only in expanded state.

<img class="responsive-img" src="../images/expansion_panel_body.png" srcset="../images/expansion_panel_body@2x.png 2x" />

## Styling

The Expansion Panel comes with options for changing the both the Header's and Body's background colors, as well as text and icon colors.

<img class="responsive-img" src="../images/expansion_panel_styling.png" srcset="../images/expansion_panel_styling@2x.png 2x" />

## Usage

When using an Expansion Panel, make sure to use icons that give a proper idea of its usage, i.e. that there is more content available when the panel is expanded.

| Do                                                                             | Don't                                                                              |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/expansion_panel_do1.png" srcset="../images/expansion_panel_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/expansion_panel_dont1.png" srcset="../images/expansion_panel_dont1@2x.png 2x" /> |

## Additional Resources

Related topics:

- [Icon](icon.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
