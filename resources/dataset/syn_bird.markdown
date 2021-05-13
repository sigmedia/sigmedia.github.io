---
layout: post
title: Synth Birds Database Synthesized Birds Database with Ground Truth Pitch
permalink: /resources/dataset/syn_bird/
---

## Global information

  - Download link: <http://www.mee.tcd.ie/~sigmedia/pmwiki/uploads/Resources.SynthBirdsData/Synth_birds_database.zip>
  - Contact: sigmedia_database[at]mee.tcd.ie
  - License:
  - Reference:

```bibtex
```

## Description

The synthesized birds database contains the following:

  1. Recordings of bird song taken from xeno-canto.org (converted to .wav).
  2. Synthesized versions of these recordings using SMS tools (<http://mtg.upf.edu/technologies/sms>), a python implementation music synthesis toolkit, in .wav format. These audio files were synthesized using a sinusoid plus residual (SpR) system.
  3. A ground truth pitch vector, used by the synthesis system, in .mat format (loadable to matlab).
  4. Sine model and residual .wav files are also included.
  5. Matlab file "a1_plot_all.m" that plots the original recording's spectrogram, the synthesized recording's spectrogram and the ground truth pitch.

The bird song recordings were grouped into whistles (107 examples, 40m 09s), trills (65 examples, 13m 02s) and nasal (63 examples, 12m 32s) sounds. This data set was used in experiments for work currently submitted to Interspeech 2016.
