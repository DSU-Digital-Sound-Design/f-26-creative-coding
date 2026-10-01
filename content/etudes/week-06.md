---
title: "Week 7: First visuals"
summary: "Start Hydra, make two contrasting visual states, and practice live transitions."
weight: 7
---

On October 5, we'll spend the first 20 minutes exploring Hydra's official
[Getting Started tutorial](https://hydra.ojack.xyz/docs/docs/learning/getting-started/)
together. Then use the studies below to develop material for
[Creative Study 2](/projects/project-2/).

## Tutorial together

*20 minutes*

Use the tutorial's built-in code runners for **First line of code** and
**Transformations**. Try a source, change one parameter, and add a
transformation directly in the tutorial. Finish by demonstrating one blend
of two sources using the embedded example in Study 2 below.

When you are ready to save your own study, use **open in Hydra** below and
refer to the tutorial's **Save your sketches** section.

Think of a Hydra chain as **source → transformations → output**. The dots
connect operations, as they do in Strudel, but these functions transform an
image rather than a sound.

For these studies, click **load editor** below, edit the code, and press
**run** or **Ctrl/Cmd+Enter**. The preview appears below your code. **Stop**
clears the preview; **reset** restores the starter. Only one embedded Hydra
sketch runs at a time, and switching browser tabs stops its preview.

Use **open in Hydra** to carry your current code into the full editor for
saving and performing. There, click the **run all code** button (▶) to run
your sketch and update its URL. On a Mac, use this button if Hydra's
**Ctrl+Shift+Enter** shortcut opens a context menu. Save that URL and a copy of your code
in a text file before leaving this page. Uploading to the public gallery is
not required. The embedded runner covers these visual studies; use the full
Hydra editor for camera, microphone, and audio-reactive experiments.

## 1. Same source, different character

*10 minutes*

Make two contrasting states from the same oscillator.

{{< hydra label="Study 1 · start here" >}}
osc(10, 0.1, 0.5)
  .color(0.8, 0.5, 0.2)
  .rotate(0, 0.05)
  .out()
{{< /hydra >}}

1. Change only the first number in `osc()`. Compare 4 with 20. What changes
   about the density of the stripes?
2. Change the second number in `.rotate()`, which controls rotation speed.
   Compare 0 with 0.1, then choose your own value.
3. Change `.color()` to find a palette that supports your idea.
4. Save two versions with contrasting characters. Name them, such as
   "still / restless" or "open / crowded," and identify the code responsible.

Change one value at a time so you can explain its effect. Your two versions
will become possible states in a live performance.

## 2. Combine two sources

*10 minutes*

Blend a moving shape with the stripes. Keep the combination readable.

{{< hydra label="Study 2 · start here" >}}
osc(10, 0.1, 0.5)
  .color(0.8, 0.5, 0.2)
  .blend(
    shape(3, 0.4, 0.02)
      .rotate(0, 0.1),
    0.3
  )
  .out()
{{< /hydra >}}

1. Change the blend amount, the final `0.3`, to 0 and then 1. Notice which
   source remains at each end. Choose an amount between them.
2. Change the first number in `shape()` to try another number of sides.
3. Choose one useful transformation from the tutorial, such as `.repeat(2, 2)`
   or `.kaleid(4)`. Add it before `.out()` and decide whether to keep it.
4. Save a version in which the two sources contribute different things.
   Explain what each contributes and what would be lost without it.

## Visual exchange

*5 minutes*

With a partner, show your two saved visual states and perform a transition
between them by running the new code. Let your partner describe the difference
in character before you explain your choices.

Point to the parameter responsible for one change. Try a suggestion from your
partner and compare the revision with your saved version.

## Set up the independent week

*5 minutes*

Before leaving, save your Hydra code and one sentence naming the visual idea
you want to explore. Check that you can reopen the sketch.

There is **no class meeting on October 12 because of Native American Day**.
Use the gap to develop Creative Study 2, due **Friday, October 16 at 11:59 p.m.
Central**:

- By the end of this week, build a rough 60–90 second study with two or three
  contrasting states. Develop one clear visual idea.
- Before submitting, show it to someone, ask how the states differ in character,
  and make one revision. Keep a brief note of the feedback and your response.
- Record the finished visual study and the changes between states. Follow
  Creative Study 2's submission checklist for code, reflection, and credits.

These studies and the rough version are practice material, not extra graded
submissions. Use the techniques from this lesson to develop the visual study.
We'll share finished studies and discuss project directions on **October 19**.

## Independent study for the October 12 week

Set aside about **45 minutes sometime during the week**, then finish your
submission before Friday. There is no required meeting or work session on the
holiday itself.

### 1. Predict, change, compare

*15 minutes*

Revisit **Transformations** in [Getting Started](https://hydra.ojack.xyz/docs/docs/learning/getting-started/).
Choose one parameter from your sketch, such as stripe density, rotation speed,
or blend amount. Predict what a change will do before running it. Try three
values while keeping everything else fixed. Save the most useful version and
write one sentence about what surprised you.

### 2. Practice changing between versions

*15 minutes*

Choose an order for your two or three saved versions. Run the first version,
let it play for about 20–30 seconds, then change the values to match your next
version and click **Run** again. Continue until you have a 60–90 second study.
You are changing values and rerunning the code by hand; no arrays or automated
sequencing are required. Try this twice. Adjust one change that does not
support your visual idea, and check that you have saved the code for each version.

### 3. Get feedback and check the capture

*15 minutes*

Show the study to a classmate or another person, live or through a rough
screen capture. Ask: "How does the character change? Which transition is
clearest?" Make one revision and keep a short note for your reflection.
Record a short test capture and play it back to check that the image and
transitions are visible. Then make the final capture for Study 2.

### Optional: explore one more transformation

Use the [Hydra function reference](https://hydra.ojack.xyz/api/) to try one
transformation you have not used, such as `.pixelate()` or `.kaleid()`.
Start from a saved copy, change one value, and compare before and after.
Keep it only if you can explain how it supports your idea. This exploration
is optional and is not needed for full credit on Study 2.

Save code, screenshots, and brief experiment notes for your practice portfolio.
There is no separate October 12 submission.

We will combine Hydra with saved Strudel patterns in the
[October 26 audiovisual lesson](/etudes/week-09/).

## Reference

- [Hydra Getting Started](https://hydra.ojack.xyz/docs/docs/learning/getting-started/),
  by Flor de Fuego and Olivia Jack
- [Hydra function reference](https://hydra.ojack.xyz/api/), for checking parameters
  and trying another transformation
