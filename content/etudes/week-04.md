---
title: "Week 5: First notes"
summary: "Four studies in pitch and scales, one game in pairs, and a three-part capstone."
weight: 5
---

These four studies use the techniques from Strudel's
[First Notes](https://strudel.cc/workshop/first-notes/) workshop. Last week the
patterns used drum sounds. This week, you will use the same notation to specify
pitches and scales.

These studies are shorter than [last week's studies](/etudes/week-03/) so that
we can finish in one meeting and leave time for
[Creative Study 1](/projects/project-1/).

To run an example, click **load editor**, then **play**. Click **stop** to
stop it. You can also press **Ctrl+Enter** to play and **Ctrl+.** to stop.
After editing the code, click **play** or press **Ctrl+Enter** again to hear
your changes.

## Notation reference

Everything from last week still works. These are the additions.

| Feature | What it does |
|---|---|
| `note("48 52 55")` | play pitches as numbers, where 60 is middle C |
| `note("c e g b")` | specify pitches with letter names |
| `c#` or `db` | a black key, as a sharp or a flat |
| `c2` `e3` `g4` | a letter with an octave number |
| `.sound("piano")` | choose the instrument |
| `n("0 2 4").scale("C:minor")` | interpret numbers as scale degrees |
| `.scale("<C:major D:dorian>/4")` | change scale over time |
| `[36 34 41 39]/4` | play one sequence over four cycles |
| `c@3` | hold a note for three units instead of one |
| `c!2` | play a note twice in a row |
| `$:` | run several patterns at once |
| `_$:` | mute one of them |

---

## 1. Numbers are pitches

*four numbers, one piano* · ♩ = 90 · 6 min

**Constraint:** keep `sound("piano")` and four slots for steps 1–3. Change only
the numbers until step 4, when you will try letter names.

{{< strudel label="Etude 1 · start here" >}}
setcpm(90/4)
note("48 52 55 59").sound("piano")
{{< /strudel >}}

1. A difference of 1 is a semitone, the interval between adjacent piano keys,
   including black keys. A difference of 12 is an octave. Middle C is 60.
2. Write one version with differences of mostly 1 and 2 between consecutive
   notes, and one with differences of 7 or more. Play one version, then the other.
3. Try a number with a decimal in it, like 55.5. Its pitch is between those
   of two adjacent piano keys.
4. You can also specify pitches with letters: `note("c e g b")`. Specify an
   octave with `c2` or `g4`, and a flat or sharp with `eb` or `c#`. Spell a word
   using only the letters a through g.

**Listen for:** small intervals can sound like a single melody. Large intervals
can sound like two alternating melodies. Which version could you hum from memory?

---

## 2. One melody, six instruments

*keep the notes, change the instrument* · ♩ = 90 · 5 min

**Constraint:** keep the note pattern unchanged. Change the sounds in steps
1–3, then remove `.sound(...)` in step 4.

{{< strudel label="Etude 2 · start here" >}}
setcpm(90/4)
note("48 67 63 [62, 58]").sound("piano")
{{< /strudel >}}

1. Play the same notes using `gm_electric_guitar_muted`, `gm_acoustic_bass`,
   `gm_voice_oohs`, `gm_xylophone`, `sawtooth` and `square`. You can explore
   more sounds in [Strudel](https://strudel.cc/).
2. Write one sentence per instrument in your notes. Describe how the note
   starts and how long it remains audible, not the genre it reminds you of.
3. Put two names in one string. `sound("piano gm_xylophone")` alternates them
   across the slots. `sound("piano, gm_xylophone")` plays both at once.
4. Delete `.sound(...)` and play the pattern. Describe the sound you hear.

**Listen for:** 48 and 67 differ by 19 semitones. Which instruments make both
pitches clearly audible? With which instruments is one pitch harder to hear?

---

## 3. Scale degrees

*use numbers to select notes from a scale* · ♩ = 90 · 7 min

**Constraint:** use `n()` with `scale()`. No `note()` in this study.

{{< strudel label="Etude 3 · start here" >}}
setcpm(90/4)
n("0 2 4 <[6,8] [7,9]>").scale("C:minor").sound("piano")
{{< /strudel >}}

1. With `scale()`, `n()` selects notes by scale degree. 0 is the first note,
   1 is the second, and negative numbers select lower notes in the scale.
   Change the numbers freely. Each number selects a note from the chosen scale.
2. Use the same numbers with `C:major`, `A2:minor`, `D:dorian`,
   `G:mixolydian` and `F:major:pentatonic`.
3. The scale is a pattern too. Try `.scale("<C:major D:mixolydian>/4")`, which
   uses each scale for four cycles.
4. Keep the number sequence you like best. You will need it in the capstone.

**Listen for:** the same degrees played in two scales. What stays recognizable
when the scale changes, and what does not?

---

## 4. Note duration, repetition, and cycle length

*same notes, different time* · ♩ = 90 · 5 min

**Constraint:** keep the pitches unchanged in steps 1–3. Change their timing
with `@`, `!`, `*`, `/`, and grouping brackets. Step 4 uses a separate example.

{{< strudel label="Etude 4 · start here" >}}
setcpm(90/4)
note("c@3 eb g bb").sound("gm_acoustic_bass")
{{< /strudel >}}

1. `c@3` gives c three units of time while the other notes get one each.
   Change the 3 and listen to how the other notes' start times and durations change.
2. Remove `@3` so the pattern is `note("c eb g bb")`. Keep
   `.sound("gm_acoustic_bass")` for these comparisons. Replace the note pattern
   with `note("<c eb>!2 g bb")`, then `note("<c eb>*2 g bb")`. Compare how
   `!2` and `*2` affect the timing and the alternation between c and eb.
   Write down the difference in one sentence.
3. Replace the note pattern with `note("[c eb g bb]/2")`, which plays the four
   notes over two cycles. Then try `note("<c eb g bb>")`, which plays one per
   cycle. Compare how long the full sequence takes in each version.
4. In the separate example below, `@` changes the relative timing within each
   pair of notes. Instead of the opening example's `c@3`, each pair uses `@2`
   to give its first note twice as much time as its second. This produces a
   shuffle rhythm. Play the example and compare `@2` with `@3`.

{{< strudel label="Etude 4 · shuffle" >}}
setcpm(90/4)
n("<[4@2 4] [5@2 5] [6@2 6] [5@2 5]>*2")
  .scale("<C2:mixolydian F2:mixolydian>/4")
  .sound("gm_acoustic_bass")
{{< /strudel >}}

**Listen for:** `!` adds a slot to the cycle, changing the timing of later notes.
`*` plays the repeats within the note's existing slot. One of the two also
causes `<>` to select its next note. Which one?

---

## Game for the class

### Bass and melody

*6 minutes, in pairs*

1. Agree on a scale and tempo. Choose who will write the bassline and who will
   write the melody.
2. Spend two minutes writing separately on your own laptops. Write the bass
   with `note()` or `n()` and the melody with `n()` and `scale()`. Use notes
   from the agreed scale, choosing a lower octave for the bass and a higher
   octave for the melody.
3. Copy both parts into each laptop's editor. Put `$:` before each part and
   use one `setcpm()` line for the agreed tempo. Stay on your own laptop and
   press **play** to hear the two parts together.
4. Spend three minutes editing the part you wrote while keeping your partner's
   part unchanged. Listen to both as you adjust your notes, rhythm, or octave.
   Press **Ctrl+Enter** after each edit to hear the change.
5. Use the last minute to listen to the two versions, one laptop at a time.
   Each partner explains one change they made and how it affected the combination.

Here is a bassline you may use as a starting point. Use C minor if you choose
this example. It plays eight evenly timed notes per cycle. A melody with as
many notes may make the two parts harder to distinguish.

{{< strudel label="The bassline" >}}
setcpm(90/4)
note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>")
  .sound("gm_synth_bass_1")
{{< /strudel >}}

---

## Capstone: three parts at once

*10 min*

Put `$:` before each pattern to play them together. Change `$:` to `_$:`
to mute a part without deleting it. Listen to how the other two parts sound
without it.

Write a pattern with three parts: drums from last week, a bass, and a melody
written with `n()` and a scale. Use the number sequence you saved in Study 3
for the melody, and adjust its rhythm or octave to fit the bass and drums.
The example shows how to combine the three patterns. Yours has to sound different.

{{< strudel label="Instructor example" >}}
setcpm(90/4)
$: sound("bd*4, [- <sd cp>]*2, [- hh]*4").bank("RolandTR909")
$: note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>")
  .sound("gm_synth_bass_1")
$: n("<[- 0] 2 [0 2] [- 2]>*4").scale("C4:minor")
  .sound("gm_synth_strings_1")
{{< /strudel >}}

Mute each line in turn and describe which removal changes the music most. Save the
version you like as a starting point for
[Creative Study 1](/projects/project-1/).
