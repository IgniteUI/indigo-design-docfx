---
title: SPA and Navigation in Indigo Design App Builder 
_description: Unlike a page-based design approach, Indigo Design App Builder lets you create separate views that are injected or switched based on how users navigate.
_keywords: App builder, Indigo Design, Infragistics
---

# Single page apps and navigation  

TODO: Content update

Now let's talk about the next feature, single-page apps and navigation. Unlike a page-based design approach, Indigo Design App Builder lets you create separate views that are injected or switched based on how users navigate. To see this action, let's create a new app using the create new application button. And select one of the default layouts that shows a top navigation defined. 

#### Add layout preset from the Menu button, then select Create New App
<img class="responsive-img" src="../images/add-layout-preset.png" srcset="../images/add-layout-preset-@2x.png 2x" />

## Parent view vs. Child views 

What you see here is the master view. And when you look at the views list in the toolbox, you can see that there are two child views nested under it. Each child view corresponds to the navigation buttons in the primary toolbar area. When you preview the app, you will see that clicking on view 1 shows you content available inside view 1, and similarly for view 2. 

#### Switch between views
<img class="responsive-img" src="../images/switch-views-indigo-design-app-builder.gif" />

#### Preview app code
<img class="responsive-img" src="../images/Peview-code-indigo-design-app-builder.png" srcset="../images/Peview-code-indigo-design-app-builder-@2x.png 2x" />


Let's close the preview mode, and talk about the master view and child view concept. The master view represents the shell of your app, and can container UI elements that will be shared across all it's child views. In this case, the navigation toolbar is the shared component. To inject the child views based on navigation, we've added a component called the views-container to serve as a place-holder. And this the area where child-views are rendered. The Views-container, by default, occupies the available space. Let me remove it and add back to show you how that works. The views-container has a property to define which of the two child views will be shown by default when the app loads.  

#### Views container component
<img class="responsive-img" src="../images/views-container-indigo-design-app-builder.png" srcset="../images/views-container-indigo-design-app-builder-@2x.png
 2x" />


## Add navigations (routing)  

To connect the navigation to the child views, we can add a navigation action to the button in the 'interactions' section. Just like earlier, I am going to delete this button and add it back to show you. You only have navigate action available right now in the private-preview, but we'll be adding more actions in future releases. 

#### Change views interaction
<img class="responsive-img" src="../images/views-interaction-Indigo-Design-App-Builder.gif" />


That's it for single page apps and the navigation feature. To summarize, child views are injected inside the master view based on navigate action. Child views are hosted inside the master view using the views-container component. And components added to the master view are shared across all it's children views. 


## Additional Resources

<div class="divider--half"></div>

* [Preview Code and Generate App](preview-code-and-generate-app.md)
* [Angular Routing](https://angular.io/start/start-routing)