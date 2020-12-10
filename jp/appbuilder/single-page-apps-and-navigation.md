---
title: Indigo Design App Builder - SPA and Navigation
_description: Indigo Design App Builder is a design to code solution, enabling design and development teams to quickly and easily design and build real web applications.
_keywords: App Builder, Web App Builder, Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch UI kits
---

# Single page apps and navigation  

 TODO: Content update

Now let's talk about the next feature, single-page apps and navigation. Unlike a page-based design approach, Indigo-apps lets you create separate views that are injected or switched based on how users navigate. To see this action, let's create a new app using the create new application button. And select one of the default layouts that shows a top navigation defined. 

## Parent view vs. Child views 

What you see here is the master view. And when you look at the views list in the toolbox, you can see that there are two child views nested under it. Each child view corresponds to the navigation buttons in the primary toolbar area. When you preview the app, you will see that clicking on view 1 shows you content available inside view 1, and similarly for view 2. 

Let's close the preview mode, and talk about the master view and child view concept. The master view represents the shell of your app, and can container UI elements that will be shared across all it's child views. In this case, the navigation toolbar is the shared component. To inject the child views based on navigation, we've added a component called the views-container to serve as a place-holder. And this the area where child-views are rendered. The Views-container, by default, occupies the available space. Let me remove it and add back to show you how that works. The views-container has a property to define which of the two child views will be shown by default when the app loads.  

## Add navigations (routing)  

To connect the navigation to the child views, we can add a navigation action to the button in the 'interactions' section. Just like earlier, I am going to delete this button and add it back to show you. You only have navigate action available right now in the private-preview, but we'll be adding more actions in future releases. 

That's it for single page apps and the navigation feature. To summarize, child views are injected inside the master view based on navigate action. Child views are hosted inside the master view using the views-container component. And components added to the master view are shared across all it's children views. 

## Additional Resources

<div class="divider--half"></div>

* [Preview Code and Generate App](preview-code-and-generate-app.md)
* [Angular Routing](https://angular.io/start/start-routing)