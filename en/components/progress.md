---
title: Progress - Design System Component
_description: The Progress Component Symbol is used to provide a visual indication regarding the status, progress or completion of a task. 
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

# Progress

Use the Progress component to establish clarity and expectancy about the progression and completion of a task that takes longer to finish. It also works very well for scenarios where the exact time of completion is not known and when there is a larger workflow, dependent on the completion of a set of smaller tasks, such as order fulfillment or file upload/download. The Progress component is visually identical to the [Ignite UI for Angular Linear Progress Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/linear_progress.html) & [Ignite UI for Angular Circular Progress Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/circular_progress.html)

## Progress Demo

<img class="responsive-img" src="../images/progress_demo.png" srcset="../images/progress_demo@2x.png 2x" />

## Shape and Type

The Progress supports two layout shapes to fit the variety of use cases and layout requirements: a Circular Bar and a Linear Bar. Each of these layouts comes with an additional selection of the type of progression: Determinate and Indeterminate.

<img class="responsive-img" src="../images/progress_circular.png" srcset="../images/progress_circular@2x.png 2x" />
<img class="responsive-img" src="../images/progress_linear.png" srcset="../images/progress_linear@2x.png 2x" />

## State

The Progress can be used in one of the following preset color combinations:

- **default**: utilizing the base primary color by default
- error: utilizing the `error` theme color to show the progress
- info: utilizing the `info` theme color to show the progress
- success: utilizing the `success` theme color to show the progress
- warn: utilizing the `warn` theme color to show the progress

<img class="responsive-img" src="../images/progress_default.png" srcset="../images/progress_default@2x.png 2x" />
<img class="responsive-img" src="../images/progress_error.png" srcset="../images/progress_error@2x.png 2x" />
<img class="responsive-img" src="../images/progress_info.png" srcset="../images/progress_info@2x.png 2x" />
<img class="responsive-img" src="../images/progress_success.png" srcset="../images/progress_success@2x.png 2x" />
<img class="responsive-img" src="../images/progress_warn.png" srcset="../images/progress_warn@2x.png 2x" />

## Progress Amount

When using a Determinate type of Progress, you may choose the Progress Amount between six percentage variants.

<img class="responsive-img" src="../images/progress_circular-progress-amount.png" srcset="../images/progress_circular-progress-amount@2x.png 2x" />
<img class="responsive-img" src="../images/progress_linear-progress-amount.png" srcset="../images/progress_linear-progress-amount@2x.png 2x" />

## Stripes

When using a Linear Bar layout shape for the Progress component, it will come with an additional option for Stripes over the Fill area. To remove the Stripes, simply set the `🌈 Stripes` color override to `transparent`.

<img class="responsive-img" src="../images/progress_linearstripes.png" srcset="../images/progress_linearstripes@2x.png 2x" />

## Styling

The Progress comes with styling flexibility through the various overrides for its text, as well as changing the colors of progress, base, stripes, fill and track where applicable.

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
