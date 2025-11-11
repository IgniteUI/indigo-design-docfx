---
title: Radio Group - Design System Component
_description: The Radio Group Component is used to provide a mechanism for exclusive selection from a set of available options. 
_keywords: Design Systems, Design Systems UX, UI kit, Figma, Figma to Angular, Export code from Figma, Figma to HTML, Figma HTML, Figma UI kits, Ignite UI for Angular, Angular, Angular Design System, Design Kits for Angular
---

# Radio Group

Use the Radio Group Component to allow exclusive selection for one item in a group. The items in the group come one after another laid out in a single column. The Radio Group is visually identical to the [Ignite UI for Angular Radio Button Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/radio_button.html)

## Radio Group Demo

<img class="responsive-img" src="../images/radiogroup_demo.png" srcset="../images/radiogroup_demo@2x.png 2x" />

## Label Position

In Figma the Radio Group supports label position variants where the Radio button label is placed after or before the Radio button element. 

<img class="responsive-img" src="../images/radiogroup_enabled_state.png" srcset="../images/radiogroup_enabled_state@2x.png 2x" />          
<img class="responsive-img" src="../images/radiogroup_enabled_labels_before.png" srcset="../images/radiogroup_enabled_labels_before@2x.png 2x" />

## Orientation

The Radio Group comes in a Vertical and Horizontal orientation.

<img class="responsive-img" src="../images/radiogroup_enabled_state.png" srcset="../images/radiogroup_enabled_state@2x.png 2x" />          
<img class="responsive-img" src="../images/radiogroup_horizontal.png" srcset="../images/radiogroup_horizontal@2x.png 2x" />

## Interaction State

The Radio Group supports **Enabled**, **Disabled** and **Invalid** interaction states.

<img class="responsive-img" src="../images/radiogroup_interaction_states.png" srcset="../images/radiogroup_interaction_states@2x.png 2x" />          
<div class="divider--half"></div>
<div class="divider--half"></div>
<div class="divider--half"></div>

You may also set the state of a radio button in the group to **Disabled** to disallow user interaction with it.

<img class="responsive-img" src="../images/radiogroup_states.png" srcset="../images/radiogroup_states@2x.png 2x" /> 
<div class="divider--half"></div>
<div class="divider--half"></div>

In **Enabled** and **Invalid** interaction states, each radio element also supports **Hover**, **Focused** and **Focused & Hover** states.
<div class="divider--half"></div>
<img class="responsive-img" src="../images/radiogroup_interaction_states.png" srcset="../images/radiogroup_interaction_states@2x.png 2x" />

## State

Each Radio element in the group supports **on** and **off** selection states. In Figma, you can switch between them by using the `Checked` boolean property in the right sidebar.

<img class="responsive-img" src="../images/radiogroup_demo.png" srcset="../images/radiogroup_demo@2x.png 2x" />


## Styling

The Radio Group comes with styling flexibility through the various options for each item's label style and color.

<img class="responsive-img" src="../images/radiogroup_styling.png" srcset="../images/radiogroup_styling@2x.png 2x" />

## Usage

When extending a Radio Group with additional items, make sure that they are aligned consistently and form a single column. Avoid layout in multiple columns, as well as situations with more than one Radio element with on state at a time.

| Do                                                                                     | Don't                                                                                      |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| <img class="responsive-img" src="../images/radiogroup_do1.png" srcset="../images/radiogroup_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/radiogroup_dont1.png" srcset="../images/radiogroup_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/radiogroup_do2.png" srcset="../images/radiogroup_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/radiogroup_dont2.png" srcset="../images/radiogroup_dont2@2x.png 2x" /> |

Our community is active and always welcoming to new ideas.
