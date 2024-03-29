---
title: Tabs - Design System Component
_description: The Tabs Component Symbol is used to organize or switch between information.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits, Figma, Figma to Angular, Export code from Figma, Figma HTML, Figma to HTML, Figma UI kits
---

# Tabs

Use the Tabs Component to organize different views of the same information or switch between similar or related data sets. The Tabs is visually identical to the [Ignite UI for Angular Tabs Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/tabs.html)

## Tabs Demo

<img class="responsive-img" src="../images/tabs_demo.png" srcset="../images/tabs_demo@2x.png 2x" />

## Size

The Tabs are available in two sizes - Short, showing only text by default, with the option to have prefix and suffix icons, and Tall, which also has an additional third icon on top of the text.

<img class="responsive-img" src="../images/tabs_short.png" srcset="../images/tabs_short@2x.png 2x" />
<img class="responsive-img" src="../images/tabs_tall.png" srcset="../images/tabs_tall@2x.png 2x" />

## Responsive

The Tabs can be Content Fit to fill up the available horizontal space by adapting their width, or Fixed with scrolling buttons to navigate a large number of tab items. This allows fitting more content than what is normally possible with the other mode in the same total space.

<img class="responsive-img" src="../images/tabs_content_fit.png" srcset="../images/tabs_content_fit@2x.png 2x" />
<img class="responsive-img" src="../images/tabs_fixed.png" srcset="../images/tabs_fixed@2x.png 2x" />

## Tabs Amount

For most scenarios, the Tabs need to contain between two and five items. To remove an item in Figma simply hide the nested Tab Item component from the layers panel and the added auto layout will adjust the content appropriately. To do the same in Sketch, set the item's override to ~No Symbol and the smart layout will adjust the remaining ones. To achieve this in Adobe XD, you should delete the unnecessary items and the Stack will take care to lay out the remaining ones. If your use case requires more than five tabs, you should consider the Fixed mode explained above.

<img class="responsive-img" src="../images/tabs_2.png" srcset="../images/tabs_2@2x.png 2x" />
<img class="responsive-img" src="../images/tabs_3.png" srcset="../images/tabs_3@2x.png 2x" />
<img class="responsive-img" src="../images/tabs_4.png" srcset="../images/tabs_4@2x.png 2x" />
<img class="responsive-img" src="../images/tabs_5.png" srcset="../images/tabs_5@2x.png 2x" />

## Short Bar Content

The Short Bar comes with text content by default. In Figma you can show/hide the label and the two icons by selecting all of the nested Tab Items and switching on/off the boolen operations "Label", "Prefix Icon" and "Suffix Icon" from the properties panel. In Sketch, if you want to show an icon instead, you have to assign a Material Icon to the `🔣 Icon` override and set the `🏷️ Label` to ~No Symbol for every tab in the bar. To achieve a similar result in Adobe XD make sure that either `🔣 Icon` or `🏷️ Label` layer exists and is visible, and the other one has been deleted for every tab in the bar.

<img class="responsive-img" src="../images/tabs_text.png" srcset="../images/tabs_text@2x.png 2x" />
<img class="responsive-img" src="../images/tabs_icons.png" srcset="../images/tabs_icons@2x.png 2x" />

## Tab Item State

Tab items support Active, Inactive and Disabled states. In Figma you can switch between the three using the "State" property from the properties panel. In Sketch this is achieved with `Symbol Overrides`, while in Adobe XD we are using the `Component States` paradigm to let you easily switch between states. In Tabs there is always one Active tab and an arbitrary number of Inactive and Disabled ones.

<img class="responsive-img" src="../images/tabs_state.png" srcset="../images/tabs_state@2x.png 2x" />

## Styling

The Tabs provide basic styling flexibility through the options available for text and icon colors, the indicator color that marks the current selection, as well as the active/inactive background colors.

<img class="responsive-img" src="../images/tabs_styling.png" srcset="../images/tabs_styling@2x.png 2x" />

## Usage

The Tabs are appropriate for organizing information, and one should avoid using them as a way to design workflows and actions that come in a logical sequence, e.g. checkout process or configuration wizard. When using the short Tabs, never combine a text tab with an icon tab in the same bar. Choose one of the two content modes and use it consistently for all the items in the bar.

| Do                                                                         | Don't                                                                          |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| <img class="responsive-img" src="../images/tabs_do1.png" srcset="../images/tabs_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/tabs_dont1.png" srcset="../images/tabs_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/tabs_do2.png" srcset="../images/tabs_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/tabs_dont2.png" srcset="../images/tabs_dont2@2x.png 2x" /> |

## Additional Resources

Related topic:

- [Details](../patterns/details.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
