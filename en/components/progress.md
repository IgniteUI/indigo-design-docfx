---
title: Progress - Design System Component
_description: The Progress Component Symbol is used to provide a visual indication regarding the status, progress or completion of a task. 
_keywords: Design Systems, Design Systems UX, UI kit, Figma, Figma to Angular, Export code from Figma, Figma to HTML, Figma UI kits, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits, Adobe XD, Adobe XD to Angular, Export code from Adobe XD, Adobe XD to HTML, Adobe XD UI kits
---

# Progress

Use the Progress component to establish clarity and expectancy about the progression and completion of a task that takes longer to finish. It also works very well for scenarios where the exact time of completion is not known and when there is a larger workflow, dependent on the completion of a set of smaller tasks, such as order fulfillment or file upload/download. The Progress component is visually identical to the [Ignite UI for Angular Linear Progress Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/linear_progress.html) & [Ignite UI for Angular Circular Progress Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/circular_progress.html)

## Progress Demo

<img class="responsive-img" src="../images/progress_demo.png" srcset="../images/progress_demo@2x.png 2x" />

## Shape and Type

Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates. The Progress supports two layout shapes to fit the variety of use cases and layout requirements: a **Circular Bar** and a **Linear Bar**. Each of these layouts comes with an additional selection of the type of progression: **Determinate** and **Indeterminate**.

- **Determinate** indicators show the progress of a task or process that has a known duration or expected completion time.
- **Indeterminate** indicators show that a process is underway but the exact amount of time or progress is unknown.

<img class="responsive-img" src="../images/progress_circular_determinate.png" srcset="../images/progress_circular_determinate@2x.png 2x" />
<img class="responsive-img" src="../images/progress_linear_determinate.png" srcset="../images/progress_linear_determinate@2x.png 2x" />
<img class="responsive-img" src="../images/progress_circular_indeterminate.png" srcset="../images/progress_circular_indeterminate@2x.png 2x" />
<img class="responsive-img" src="../images/progress_linear_indeterminate.png" srcset="../images/progress_linear_indeterminate@2x.png 2x" />

## State

The Progress can be used in one of the following preset color combinations:

- **Default**: utilizing the base primary color by default
- **Info**: utilizing the `info` theme color to show the progress
- **Success**: utilizing the `success` theme color to show the progress
- **Warn**: utilizing the `warn` theme color to show the progress
- **Danger**: utilizing the `error` theme color to show the progress

<img class="responsive-img" src="../images/progress_default.png" srcset="../images/progress_default@2x.png 2x" />
<img class="responsive-img" src="../images/progress_info.png" srcset="../images/progress_info@2x.png 2x" />
<img class="responsive-img" src="../images/progress_success.png" srcset="../images/progress_success@2x.png 2x" />
<img class="responsive-img" src="../images/progress_warn.png" srcset="../images/progress_warn@2x.png 2x" />
<img class="responsive-img" src="../images/progress_danger.png" srcset="../images/progress_danger@2x.png 2x" />

## Progress Amount

When using a Determinate type of Progress, you may choose the Progress Amount between six percentage variants. In Figma you can do that from the `Value` property in the right sidebar. In Sketch, this is achieved with `Symbol Overrides` to let you easily switch between them, while in Adobe XD you have to drag the desired amount from the `Libraries` panel and drop it on top of the `Progress Amount` layer to change the default value.

<img class="responsive-img" src="../images/progress_circular-progress-amount.png" srcset="../images/progress_circular-progress-amount@2x.png 2x" />
<img class="responsive-img" src="../images/progress_linear-progress-amount.png" srcset="../images/progress_linear-progress-amount@2x.png 2x" />

## Stripes

When using a Linear Bar layout shape for the Progress component, it will come with an additional option for Stripes over the Fill area. To remove the Stripes, simply use the `Striped` boolean property in Figma or set the `🌈 Stripes` color override in Sketch to `transparent`.

<img class="responsive-img" src="../images/progress_linearstripes.png" srcset="../images/progress_linearstripes@2x.png 2x" />

## Styling

The Progress component offers a high degree of styling flexibility, with various options for customizing the text color, weight, and position. Additionally, the colors of the Progress, Base, Stripes, Fill, and Track can be adjusted as needed, allowing for seamless integration into any design scheme.

<img class="responsive-img" src="../images/progress_striped.png" srcset="../images/progress_striped@2x.png 2x" />
<img class="responsive-img" src="../images/progress_clear.png" srcset="../images/progress_clear@2x.png 2x" />
<img class="responsive-img" src="../images/progress_twocolor.png" srcset="../images/progress_twocolor@2x.png 2x" />

## Usage

In a Circular Bar, always use the actual value for the text label and, when adding more elaborate text in a Linear Bar, provide your best estimate for the state of completion of the task in time/files left, rather than displaying a generic string to the user. However, you may use the Indeterminate variants for both bars to display a Progress without certain and clear completion time.

| Do                                                                                 | Don't                                                                                  |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/progress_do1.png" srcset="../images/progress_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/progress_dont1.png" srcset="../images/progress_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/progress_do2.png" srcset="../images/progress_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/progress_dont2.png" srcset="../images/progress_dont2@2x.png 2x" /> |
| <img class="responsive-img" src="../images/progress_do3.png" srcset="../images/progress_do3@2x.png 2x" /> | <img class="responsive-img" src="../images/progress_dont3.png" srcset="../images/progress_dont3@2x.png 2x" /> |

## Additional Resources

Related topic:

- [AV Player Pattern](../patterns/av.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
