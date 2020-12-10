---
title: Indigo Design App Builder - Themes
_description: Indigo Design App Builder is a design to code solution, enabling design and development teams to quickly and easily design and build real web applications.
_keywords: App Builder, Web App Builder, Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch UI kits
---

# App Themes

TODO: Content needs to be updated

Given that Indigo-Apps adopts a design systems approach to UI creation, you can apply themes at the app-level. This avoids the need to create local styles that are difficult to maintain.  

## Switching app themes 

The private preview comes with six built-in themes based on Material, Fluent or Bootstrap. Each have a dark version and light version. You can try it out by selecting the theme card in the toolbox.  

## Material vs. Fluent vs. Bootstrap 

When we switch from Material to Fluent, you will see the components look different. For example, the floating label style for the input field in Material switches to a fixed label. And the switch is also visually different. Some of the other changes are more subtle, but it's there. 

## Customize & apply theme 

You can create a custom theme to match your brand. You do this by creating a new theme, and picking one of the base themes as the starting point. The color palettes are automatically generated based on the primary and secondary color you pick. As far as typography is concerned, for now we have a set of fonts built in, but we plan to add more creative control in future versions. Once you are done editing, save the theme to apply the changes.  

After a theme is selected, when you apply a fill color for a container, the color picker now reflects the palette from the selected theme. This helps us stay true to the design systems approach where brand attributes are decided and maintained at the app level, and not decided on an ad-hoc basis depending on who is creating the UI. 

In the future, we will include a way to add custom colors too, but as a secondary usage scenario. The app-level themes you created in the editor is persisted in a platform-compliant way when generating the app. It also makes it really simple to change the theme in the future.  

## Additional Resources

<div class="divider--half"></div>

* [Flex Layouts](flex-layouts.md)
* [Ignite UI for Angular Theming]({environment:infragisticsBaseUrl}/products/ignite-ui-angular/angular/components/themes/index)