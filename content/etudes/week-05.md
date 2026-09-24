---
title: "Week 6: First effects"
summary: "Two short studies in changing a sound, followed by a listening exchange."
weight: 6
---

We'll spend the first half of class exploring Strudel's full
[First Effects](https://strudel.cc/workshop/first-effects/) tutorial together.
Then use these two studies to try a few of its techniques for yourself.
Allow about 25 minutes for the studies and sharing.

To run an example, click **load editor**, then **play**. Click **stop** to
stop it. You can also press **Ctrl+Enter** to play and **Ctrl+.** to stop.
After editing the code, click **play** or press **Ctrl+Enter** again to hear
your changes. Stop one editor before starting another.

## 1. Same notes, different character

*8 minutes*

Keep the notes, rhythm, and sound source unchanged. Make two versions that
feel different by changing their effects.

{{< strudel label="Study 1 · start here" >}}
setcpm(90/4)
note("c3 eb3 g3 bb3")
  .sound("sawtooth")
  .lpf(800)
  .attack(.01).decay(.1).sustain(.3).release(.1)
  .room(0)
  .gain(.3)
{{< /strudel >}}

1. Change the filter cutoff in `.lpf()`. Compare 300 with 3000, then choose
   a value of your own.
2. Choose one more part of the sound to change: its envelope using
   `.attack()` and `.release()`, or its space using `.room()` or `.delay()`.
   Adjust one value at a time so you can hear its contribution.
3. Save two versions. Give each a short name that describes its character.
   Keep their playback levels similar; adjust `.gain()` if needed.

Play the versions back to back. What makes them feel different even though
the notes and rhythm are identical? Point to the code responsible for one
specific difference.

## 2. Let the effect move

*10 minutes*

Keep the note pattern fixed. Make a changing effect give the loop a longer
phrase.

{{< strudel label="Study 2 · start here" >}}
setcpm(90/4)
note("c3 eb3 g3 bb3")
  .sound("sawtooth")
  .lpf("300 1800 600 3000")
  .gain(.3)
{{< /strudel >}}

1. Change the four filter values. Listen for the way brighter and darker
   notes create accents without changing the note pattern.
2. Replace the filter line with `.lpf(sine.range(300, 3000).slow(4))`.
   Let it play long enough to hear the motion. Compare it with the stepped
   version you just made.
3. Change the range or the signal's speed. Choose a motion you want to hear,
   such as a gradual opening or a quick recurring flash of brightness.
4. Add one other technique from today's tutorial. You might use `.pan()`,
   `.vowel()`, an envelope, delay, or reverb. Keep it only if it helps the
   motion you chose. You do not need to use every effect.

Save your code. Be ready to explain what repeats in the notes and what
changes in the effects. Does the effect make you hear a phrase longer than
the original loop?

## Listen with a partner

*5 minutes*

Take turns playing one study, one laptop at a time. Let your partner describe
what they hear before explaining your choices. Then show the parameter that
caused the change. Try one suggestion from your partner and compare it with
the saved version.

## Keep for Creative Study 2

Save your favorite version and a short note about what you changed after
listening. These are practice experiments, not a separate graded submission.
You can develop one into [Creative Study 2](/projects/project-2/), which adds
live control, audiovisual relationships, interaction, or ensemble coordination.
Effects alone are a starting point; decide what new kind of control or
relationship you want to explore next. Visuals are one option.
