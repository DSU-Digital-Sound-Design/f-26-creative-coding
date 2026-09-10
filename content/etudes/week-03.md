---
title: "Week 3 — First Sounds"
summary: "Six studies on the mini-notation vocabulary: sequences, rests, drum machines, parallel voices, alternation, and n(). Plus three group games and a sixty-second capstone."
weight: 3
---

Short studies for the vocabulary in Strudel's [first sounds](https://strudel.cc/workshop/first-sounds/)
workshop, and nothing beyond it. Each one locks down most of the choices so you
have to be inventive inside a small space. That is the whole point of an etude.

Every code block below runs in the page. Click **load editor**, then press
**ctrl+enter** to play and **ctrl+.** to stop.

## Your instrument

Everything here is built from these twelve things. If you reach for something
off this list, that is a fine instinct, but solve the etude first with what is
here.

| | |
|---|---|
| `sound("bd")` | play a sample by name |
| `casio:2` | pick a variant |
| `n("0 2 1")` | variants as a sequence |
| `.bank("RolandTR909")` | swap the drum machine |
| `setcpm(90/4)` | tempo, cycles per minute |
| `bd sd hh` | a sequence, one cycle |
| `[bd sd]` | squeeze into one slot |
| `<bd sd>` | one per cycle |
| `hh*8` | speed up that slot |
| `-` or `~` | rest, both work |
| `bd*4, hh*8` | voices at the same time |
| backticks | multi-line patterns |

## House rules

- **Everyone at the same tempo.** Start every etude with `setcpm(90/4)` so
  patterns can be pasted from one laptop to another and still line up.
- **Headphones on, one speaker at a time.** Playback for the room happens on
  one machine, never fifteen at once.
- **Say what you hear before you say what you like.** Description first,
  judgment second.

---

## 1. Two Words

*nothing but two drums* · ♩ = 90 · 8 min

**Constraint:** only the words `bd` and `sd`. No other sample names, no `bank`.
Use spaces, `[ ]`, `<>`, `*` and `-` as much as you like.

{{< strudel label="Etude 1 · start here" >}}
setcpm(90/4)
sound("bd sd")
{{< /strudel >}}

1. Write four variations. Each has to sound clearly different from the other
   three when played back to back.
2. One of the four must have more than eight events in a cycle. One must have
   fewer than three.
3. Pick your favorite, delete the others, and be ready to play it.

**Listen for:** which variation still sounds like a beat, and which one has
fallen apart into a texture. Where exactly is that line?

---

## 2. Mostly Silence

*hear the holes* · ♩ = 90 · 7 min

**Constraint:** exactly eight slots in the cycle. At least five of them are
rests. Any drum sounds you want.

{{< strudel label="Etude 2 · start here" >}}
setcpm(90/4)
sound("bd - - sd - - hh -")
{{< /strudel >}}

1. First, prove to yourself that a rest is not the same as nothing. Play
   `sound("bd - sd -")`, then `sound("bd sd")`. The rest holds its slot open,
   so the other hits stay put. Deleting it shortens the cycle's contents and
   everything speeds up. (`~` does the same job as `-` if you prefer the look
   of it.)
2. Move the three hits around until the pattern feels like it wants to keep
   going rather than stopping.
3. Now try six rests and two hits. Then seven and one.
4. Trade laptops with a neighbor and add nothing. Only move what is already
   there.

**Listen for:** the rests are doing the composing here. A hit lands hard
because of the hole in front of it, not because of anything you did to the
sample.

---

## 3. One Rhythm, Six Machines

*nothing moves but the timbre* · ♩ = 90 · 8 min

**Constraint:** the pattern never changes. Only the argument to `bank` changes.

{{< strudel label="Etude 3 · start here" >}}
setcpm(90/4)
sound("bd [- bd] sd -, hh*8").bank("RolandTR909")
{{< /strudel >}}

1. Run the same pattern through `RolandTR808`, `RolandTR707`, `RolandTR505`,
   `AkaiLinn` and `ViscoSpaceDrum`.
2. For each one, write a single sentence in your notes. Describe the sound,
   not the genre it reminds you of.
3. Pick the machine that makes this rhythm feel fastest. Pick the one that
   makes it feel slowest. They are the same rhythm.

**Listen for:** decay length. The 909 kick rings, the 707 kick is short.
Nothing about the timing moved, but the groove did.

---

## 4. Three Densities

*three voices, three speeds* · ♩ = 90 · 8 min

**Constraint:** exactly three voices separated by commas. One voice is sparse
(one or two events), one is medium (about four), one is busy (eight or more).

{{< strudel label="Etude 4 · start here" >}}
setcpm(90/4)
sound("bd - - bd, - sd, hh*8")
{{< /strudel >}}

1. Get it working, then rotate the roles: make the hats sparse and the kick
   busy. Same three sounds.
2. Delete one voice. Which one can the pattern survive without?
3. Put the busy voice on a quiet sound and the sparse voice on a loud one.
   Then swap that.

**Listen for:** when all three voices are busy the pattern turns to mush, and
when all three are sparse it stops holding together. The interesting versions
are the lopsided ones.

---

## 5. The Long Loop

*count it out loud* · ♩ = 90 · 8 min

**Constraint:** at least two `<>` groups, in different voices. The whole
pattern must take more than one cycle to come back around.

{{< strudel label="Etude 5 · start here" >}}
setcpm(90/4)
sound("<bd bd sd> - hh -, <- oh>*4")
{{< /strudel >}}

1. Count out loud with it. How many cycles before it repeats exactly? Write
   down your answer, then check it against a neighbor's count.
2. Now build one that repeats every four cycles exactly. Then every six.
3. Make the longest loop you can that still sounds intentional rather than
   random.

**Listen for:** two groups of three and two items don't line up again until
the sixth cycle. This is the cheapest way to make a loop stop sounding like a
loop, and it costs you two characters.

---

## 6. Numbers as Notes

*let it get weird* · ♩ = 90 · 7 min

**Constraint:** `n()` and one sound name. Everything here happens inside the
numbers.

{{< strudel label="Etude 6 · start here" >}}
setcpm(90/4)
n("0 1 4 2").sound("jazz")
{{< /strudel >}}

1. Shape the number sequence with the tools from etudes 1 and 5:
   `n("<0 3> 1 [4 4] 2")`.
2. Send the same numbers through `insect`, `east`, `space`, `metal` and
   `numbers`.
3. Find one sound where your sequence reads as a melody and one where it reads
   as a rhythm. Keep both.

**Listen for:** the numbers are picking files off a list, not picking pitches.
Sometimes the list happens to be tuned and you get a tune for free. That is
worth knowing before you trust it.

---

## Games for the room

### Pass the pattern

*30 seconds per turn*

Everyone starts from `sound("bd sd")`. On the buzzer, slide one seat over and
make exactly one change to the pattern in front of you. One change. When it
comes back around to you, play what your pattern became.

### Call and response

*4 minutes per round, in pairs*

One partner writes a two-voice pattern and plays it. The other has to answer
it: same tempo, same length, clearly a reply rather than a copy. Then swap.
The rule is that the answer has to keep at least one thing from the call.

### Same seed, fifteen ways

*3 minutes, then playback*

Everyone starts from the identical line below. Three minutes, no talking, no
headphones off. Then we play all fifteen in a row with no commentary until the
end.

{{< strudel label="The seed" >}}
setcpm(90/4)
sound("bd - sd -, hh*4").bank("RolandTR707")
{{< /strudel >}}

---

## Capstone: sixty seconds

One pattern, one minute, played on the room speakers. Use backticks so it can
breathe over several lines. It has to contain all five of these:

- three voices separated by commas
- at least one `<>` group
- at least one `[ ]`
- at least one rest
- a `bank()` you chose on purpose and can defend

Here is mine, so you know what the finished shape looks like. Yours should not
sound like it.

{{< strudel label="Instructor example" >}}
setcpm(88/4)
sound(`<bd bd bd [bd bd]> - sd -,
       hh*8,
       - - <rim oh> -`).bank("RolandTR707")
{{< /strudel >}}

Before you play it, tell the room one sentence: what is the constraint you set
for yourself that I didn't ask for?
