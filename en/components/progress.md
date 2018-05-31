---
title: Progress - Design System Component
_description: The Progress Component Symbol is used to provide a visual indication regarding the status, progress or completion of a task. 
_keywords: Design System, Sketch, Ignite UI for Angular, Component, UI Library, Widgets
---

## Progress

Use the Progress Component Symbol to establish clarity and expectancy about the progression and completion of a task that takes longer to finish. The Progress component also works very well for scenarios where the completion of a larger workflow is dependant on the completion of a set of simpler and smaller tasks such as order fulfillment or file upload/download.
The Progress is visually identical to the [Ignite UI for Angular Linear Progress Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/linear_progress.html) & [Ignite UI for Angular Circular Progress Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/circular_progress.html)

### Progress Demo

![](../images/progress_demo.png)

### Type

The Progress supports two layout types to fit the variety of use cases and layout requirements: a circular and a linear.

![](../images/progress_circular.png)
![](../images/progress_linear.png)

### State

The Progress can be used in one of the following preset color combinations:

* **default**
* success utilizing the `success` theme color to show the progress
* warn utilizing the `warn` theme color to show the progress
* error utilizing the `error` theme color to show the progress
* info utilizing the `info` theme color to show the progress

![](../images/progress_default.png)
![](../images/progress_success.png)
![](../images/progress_warn.png)
![](../images/progress_error.png)
![](../images/progress_info.png)

### Styling

The Progress comes with styling flexibility through the various overrides for its text, as well as changing the colors of stripes, fill and track.

![](../images/progress_striped.png)
![](../images/progress_clear.png)
![](../images/progress_twocolor.png)

## Usage

In a circular Progress always use the actual value for the text label and when adding more elaborate text in a linear Progress provide your best estimate for the state of completion of the task in time/files left, rather than displaying a generic string to the user.

| Do                              | Don't                             |
| ------------------------------- | --------------------------------- |
| ![](../images/progress_do1.png) | ![](../images/progress_dont1.png) |
| ![](../images/progress_do2.png) | ![](../images/progress_dont2.png) |

## Code generation

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Navigation Drawer will reduce the accuracy of code generation for the Navigation Drawer. Do this only if you need to create more items than provided and make sure you keep the `🚫igx-nav-drawer` and `🕹️DataSource` layers intact.

The Navigation Drawer symbol has a special `🕹️DataSource` field in its `Overrides` section. Use the curly braces notation _{notifications.count}_ to provide a reference for code generation to the database property, which should be used as a binding.

## Additional Resources

Related topics:

* [AV Player Pattern](av-player.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Design System **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Design System **GitHub**](https://github.com/IgniteUI/igniteui-angular)
