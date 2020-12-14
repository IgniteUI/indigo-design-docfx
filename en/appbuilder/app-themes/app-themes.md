---
title: App Builder themes – Indigo Design
_description: Indigo Design App Builder adopts a design systems approach to UI creation, and you can apply themes at the app-level. This avoids the need to create local styles that are difficult to maintain. 
_keywords: App Builder themes, Indigo Design, Infragistics
---

# Indigo Design App Builder themes

The [Indigo Design App Builder]({environment:infragisticsBaseUrl}/products/indigo-design/app-builder) adopts a design systems approach to UI creation and you can apply themes at the app-level. With a single selection of a theme, the theme is globally applied to the whole application immediately. Having global theme avoids the need to create local styles that are difficult to maintain.  

## Switching App Builder themes 

#### Switching between themes
The private preview comes with six built-in themes based on Material, Fluent or Bootstrap. Each have a dark version and light version. You can try it out by selecting the theme card in the toolbox.  

<img class="responsive-img" src="../images/switching-between-themes-Indigo-Design-App-Builder.gif" />

## Material vs. Fluent vs. Bootstrap 

When we switch from Material to Fluent, you will see the components look different. For example, the floating label style for the input field in Material switches to a fixed label. And the switch is also visually different. Some of the other changes are more subtle, but it's there. 

## Customize & apply theme 

You can create a custom theme to match your brand. You do this by creating a new theme, and picking one of the base themes as the starting point. The color palettes are automatically generated based on the primary and secondary color you pick. As far as typography is concerned, for now we have a set of fonts built in, but we plan to add more creative control in future versions. Once you are done editing, save the theme to apply the changes.  

#### Create a new theme
<img class="responsive-img" src="../images/create-theme-Indigo-Design-App-Builder.gif" />

#### Switching between themes
<img class="responsive-img" src="../images/switching-between-themes-Indigo-Design-App-Builder.gif" />

After a theme is selected, when you apply a fill color for a container, the color picker now reflects the palette from the selected theme. This helps us stay true to the design systems approach where brand attributes are decided and maintained at the app level, and not decided on an ad-hoc basis depending on who is creating the UI. 

#### Change the appearance of a layout
<img class="responsive-img" src="../images/change-appearance-Indigo-Design-App-Builder.gif" />


In the future, we will include a way to add custom colors too, but as a secondary usage scenario. The app-level themes you created in the editor is persisted in a platform-compliant way when generating the app. It also makes it really simple to change the theme in the future.  

## Additional Resources

<div class="divider--half"></div>

* [Flex Layouts](../flex-layouts/flex-layouts.md)
* [Ignite UI for Angular Theming]({environment:infragisticsBaseUrl}/products/ignite-ui-angular/angular/components/themes/index)