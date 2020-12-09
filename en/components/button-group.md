---
title: Button Group - Design System Component
_description: The Button Group Component Symbol is used to represent a few simple actions that conceptually belong together. 
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

# Button Group

Use the Button Group Component to combine the triggers for a few related features into one interface element. It supports both exclusive selection, where only one of the buttons can remain pressed, and multiple selection, where more than one button can remain pressed. The Button Group is visually identical to the [Ignite UI for Angular Button Group Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/buttongroup.html)

## Button Group Demo

<img class="responsive-img" src="../images/button-group_demo.png" srcset="../images/button-group_demo@2x.png 2x" />

## Layout

The Button Group supports two layout directions: horizontal, where items are laid out left to right, and vertical, where their order is top to bottom.

<img class="responsive-img" src="../images/button-group_horizontal.png" srcset="../images/button-group_horizontal@2x.png 2x" />
<img class="responsive-img" src="../images/button-group_vertical.png" srcset="../images/button-group_vertical@2x.png 2x" />

## Buttons Amount

For the majority of scenarios, a Button Group needs between two to four items. If your case requires more than four items, you may want to consider designing a custom toolbar to encompass the rich set of actions you want to provide.

<img class="responsive-img" src="../images/button-group_items2.png" srcset="../images/button-group_items2@2x.png 2x" />
<img class="responsive-img" src="../images/button-group_items3.png" srcset="../images/button-group_items3@2x.png 2x" />
<img class="responsive-img" src="../images/button-group_items4.png" srcset="../images/button-group_items4@2x.png 2x" />

## Button Type

Each Button within the Button Group contains either **text** or icon and can be set in one of the following states: **default**, disabled, hover, and selected. The selected state comes in three variants that need to reflect the Button position. This is because of the addition of a border that separates the selected button from the adjacent siblings.

<img class="responsive-img" src="../images/button-group_text.png" srcset="../images/button-group_text@2x.png 2x" />
<img class="responsive-img" src="../images/button-group_icons.png" srcset="../images/button-group_icons@2x.png 2x" />

## Styling

The Button Group comes with styling flexibility through the various overrides controlling the background color, as well as the individual buttons' border, background, label, and icon colors.

<img class="responsive-img" src="../images/button-group_styling.png" srcset="../images/button-group_styling@2x.png 2x" />

## Usage

Always use Buttons with consistent style and avoid combining text Buttons with icon Buttons within the same Button Group. Size the Button Group according to its content to avoid leaving too much empty space in the Buttons. Use the Button Group only to display simple and related actions, as it is not suitable for even simple navigation. If you're looking beyond these actions, [Tabs](tabs.md) are much more appropriate.

| Do                                  | Don't                                 |
| ----------------------------------- | ------------------------------------- |
| <img class="responsive-img" src="../images/button-group_do1.png" srcset="../images/button-group_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/button-group_dont1.png" srcset="../images/button-group_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/button-group_do2.png" srcset="../images/button-group_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/button-group_dont2.png" srcset="../images/button-group_dont2@2x.png 2x" /> |
| <img class="responsive-img" src="../images/button-group_do3.png" srcset="../images/button-group_do3@2x.png 2x" /> | <img class="responsive-img" src="../images/button-group_dont3.png" srcset="../images/button-group_dont3@2x.png 2x" /> |

## Code generation

This section describes some important overrides and how they affect code generation.

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Button Group in your design is very likely to result in loss of code generation capability for the Button Group.

### Event Property

When supplied the `🕹️Event` property is used to create a method in the component TypeScript and add an onClick signature in the HTML. When supplied the event must be specified using the curly braces format: {onEventName}.

### Buttons Amount 

This property determines the number of buttons to be displayed in the group.

### Button 

This property will determine what type of button to display. It can be an icon or text button.

### Text 

This property is displayed for text buttons only. It specifies what text is shown within the button. It may contain plain text, [binding text](../codegen/data-binding.md), or a combination of the two, examples:

* Settings  
* {settingsLabel}  
* Important {labelText} 

## Additional Resources

Related topics:

- [Button](button.md)
- [Data Binding](../codegen/data-binding.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.


