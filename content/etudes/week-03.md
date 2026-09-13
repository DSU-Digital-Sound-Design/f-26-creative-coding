---
title: "Week 4: First sounds"
summary: "Six studies in Strudel's pattern notation, two group games, and a sixty-second capstone."
weight: 4
---

These six studies use the techniques from Strudel's
[First Sounds](https://strudel.cc/workshop/first-sounds/) workshop. Each limits
your choices so you can focus on how a few changes affect the music.

To run an example, click **load editor**, then **play**. Click **stop** to
stop it. You can also press **Ctrl+Enter** to play and **Ctrl+.** to stop.
After editing the code, click **play** or press **Ctrl+Enter** again to hear
your changes.

## Your instrument

Use only the features below for these etudes. Strudel calls the symbols inside
the pattern string *mini-notation*. A *cycle* is Strudel's repeating unit of time,
and a *slot* is a position within a pattern.

| Feature | What it does |
|---|---|
| `sound("bd")` | play a sample by name |
| `casio:2` | choose sample variant 2 |
| `n("0 2 1")` | choose sample variants in a sequence |
| `.bank("RolandTR909")` | swap the drum machine |
| `setcpm(90/4)` | set the tempo in cycles per minute |
| `bd sd hh` | play three sounds in sequence over one cycle |
| `[bd sd]` | fit two sounds into one slot |
| `<bd sd>` | alternate between sounds, one per cycle |
| `hh*8` | repeat the sound eight times within its slot |
| `-` or `~` | leave a slot silent |
| `bd*4, hh*8` | voices at the same time |
| backticks | multi-line patterns |

---

## 1. Two words

*two drums* · ♩ = 90 · 8 min

**Constraint:** only the words `bd` and `sd`.
You can also use spaces, `[ ]`, `<>`, `*` and `-`.

{{< strudel label="Etude 1 · start here" >}}
setcpm(90/4)
sound("bd sd")
{{< /strudel >}}

1. Write four variations. Each has to sound clearly different from the other
   three when played back to back. Add `//` at the start of each line you
   want to silence so you can play one variation at a time.
2. One of the four must have more than eight events in a cycle. One must have
   fewer than three.
3. Pick your favorite and be ready to play it.

**Listen for:** which variations have a clear beat? Which sound more like a
texture? Identify the changes that make the beat harder to follow.

---

## 2. Mostly silence

*hear the holes* · ♩ = 90 · 7 min

**Constraint:** exactly eight slots in the cycle. At least five of them are
rests. Use any drum sounds you want.

{{< strudel label="Etude 2 · start here" >}}
setcpm(90/4)
sound("bd - - sd - - hh -")
{{< /strudel >}}

1. Compare `sound("bd - sd -")` with `sound("bd sd")`. Both take one cycle,
   but the first has four slots and the second has two. A rest occupies a
   slot; deleting it changes how the remaining sounds divide the cycle.
   You can use `~` or `-` for a rest.
2. Move the three hits around until the pattern feels like it wants to keep
   going rather than stopping.
3. Now try six rests and two hits. Then seven and one.
4. Trade laptops with a neighbor and add nothing. Only move what is already
   there.

**Listen for:** how does moving a rest change the spacing between hits and
your expectation of the next sound?

---

## 3. One rhythm, six machines

*same rhythm, different sounds* · ♩ = 90 · 8 min

**Constraint:** keep the rhythm fixed. Change only the drum machine name
inside `bank()`.

{{< strudel label="Etude 3 · start here" >}}
setcpm(90/4)
sound("bd [- bd] sd -, hh*8").bank("RolandTR909")
{{< /strudel >}}

1. Run the same pattern through `RolandTR808`, `RolandTR707`, `RolandTR505`,
   `AkaiLinn` and `ViscoSpaceDrum`.
2. For each one, write a single sentence in your notes. Describe the sound,
   not the genre it reminds you of.

**Listen for:** decay, or how long each sound rings out. Compare the 909 and
707 kicks. How does the groove change when the timing stays the same but the
sounds change?

---

## 4. Three densities

*three voices, three speeds* · ♩ = 90 · 8 min

**Constraint:** use exactly three voices, or simultaneous parts, separated by
commas. Give one voice one or two events per cycle, another about four, and
the third eight or more.

{{< strudel label="Etude 4 · start here" >}}
setcpm(90/4)
sound("bd - - bd, - sd, hh*8")
{{< /strudel >}}

1. Adjust the starting pattern to meet the constraint. Then swap the roles:
   give the hi-hats fewer events and the kick more. Keep the same three sounds.
2. Delete one voice. Which one can the pattern survive without?
3. Put the busy voice on a quiet sound and the sparse voice on a loud one.
   Then reverse those choices.

**Listen for:** how do the three voices leave room for one another? Which
voice makes the beat easiest to follow?

---

## 5. The long loop

*count it out loud* · ♩ = 90 · 8 min

**Constraint:** at least two `<>` groups, in different voices. The whole
pattern must take more than one cycle to repeat exactly.

{{< strudel label="Etude 5 · start here" >}}
setcpm(90/4)
sound("<bd bd sd> - hh -, <- oh>*4")
{{< /strudel >}}

1. Count out loud with it. How many cycles before it repeats exactly? Write
   down your answer, then check it against a neighbor's count.
2. Now build one that repeats every four cycles exactly. Then every six.
3. Make the longest loop you can that still sounds intentional rather than
   random.

**Listen for:** when do the voices return to their starting positions together?
Different repeat lengths can make a short piece of code produce a longer
musical pattern.

---

## 6. Numbers as sample choices

*let it get weird* · ♩ = 90 · 7 min

**Constraint:** use `n()` with one sound name at a time. Build your variations
by changing the number pattern.

{{< strudel label="Etude 6 · start here" >}}
setcpm(90/4)
n("0 1 4 2").sound("jazz")
{{< /strudel >}}

1. Shape the number sequence with the tools from etudes 1 and 5:
   `n("<0 3> 1 [4 4] 2")`.
2. Send the same numbers through `insect`, `east`, `space`, `metal` and
   `numbers`.
3. Find one sound where your sequence sounds like a melody and one where it
   sounds like a rhythm. Save both versions.

**Listen for:** each number selects a sample from the chosen sound's set.
How do those samples make the same sequence sound melodic or rhythmic?

---

## Games for the class

### Pass the pattern

*30 seconds per turn*

Everyone starts from `sound("bd sd")`. On the buzzer, slide one seat over and
make exactly one change to the pattern in front of you. When you return to
your original seat, play the pattern and listen to how it has changed.

### Call and response

*4 minutes per round, in pairs*

One partner writes and plays a two-voice pattern. The other writes a response
at the same tempo and length. Keep at least one musical feature from the
original and change something else so the connection is audible. Then swap roles.

Here is one round. The call puts the kick late in the cycle with hats running
underneath.

{{< strudel label="The call" >}}
setcpm(90/4)
sound("- bd - sd, hh*4").bank("RolandTR707")
{{< /strudel >}}

The response keeps the hi-hats, drum machine, and four-slot structure. It
moves the first kick to the start of the cycle and replaces the snare with
two kick hits.

{{< strudel label="The response" >}}
setcpm(90/4)
sound("bd - [bd bd] -, hh*4").bank("RolandTR707")
{{< /strudel >}}

---

## Capstone: sixty seconds

This is a class exercise. Save it as evidence for
[Practice Checkpoint 1](/projects/practice-1/). It is not a separate graded
project; [Creative Study 1](/projects/project-1/) has its own requirements.

Write one pattern to play for one minute on the classroom speakers. Use
backticks to write it across several lines. Include all five elements:

- three voices separated by commas
- at least one `<>` group
- at least one `[ ]` subdivision
- at least one rest
- a `bank()` choice you can explain

This example shows how the elements fit together. Make your own pattern sound
different from this one.

{{< strudel label="Instructor example" >}}
setcpm(88/4)
sound(`<bd bd bd [bd bd]> - sd -,
       hh*8,
       - - <rim oh> -`).bank("RolandTR707")
{{< /strudel >}}

Before you play, explain in one sentence an additional constraint you set
for yourself.
