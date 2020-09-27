---
title: "Voowols"
date: "11-20-19"
description: "Reading funny workds with the Speech Synthesis Web API"
type: blogpost
published: true
---
Sometimes you find yourself in a rut and you just need to build something stupid for fun. It's like when you decide to pick up some dystopian young adult novels for light reading to build some momentum and get back into the habit of reading. That is why I decided to build this Voowols project. 
<br><br>
We have a slack channel at work called "voowols". This channel is sort of like a water cooler in the office. It is intended for free talk about whatever is on your mind, but it does have one rule: <br>
every word you type has to have every "o" replaced with "oo" and every non "o" vowel has to be replaced with an "o"
<br><br>
Just replacing the vowels with O's is boring though. The real fun is reading out the newly formed sentences. I was able to do that using the [speech synthesis web API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis), which actually allows for control of reading rate, language, and pitch. 