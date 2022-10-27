---
layout: post
title: Synth Birds Database - Synthesized Birds Database with Ground Truth Pitch
permalink: /datasets/syn_bird/
---

## Global information

  - Download link: [Google Drive](https://drive.google.com/file/d/14kQmAWQvFDxYuTRQ--jxV9GSEwETmptH/view?usp=sharing)
  - Contact: [sigmedia_database@tcd.ie](mailto:sigmediag_database@tcd.ie) - The subject **must start** with the tag [SynthBirdsDB Question] (If the tag is not provided or invalid, your email will be ignored)
  - License:
  - Reference:

```bibtex
@article{OReilly2017,
    title        = {Pitch tracking of bird vocalizations and an automated process using YIN-bird},
    author       = {O'Reilly, Colm and Harte, Naomi},
    year         = 2017,
    month        = jan,
    journal      = {Cogent Biology},
    publisher    = {Cogent OA},
    volume       = 3,
    number       = 1,
    pages        = 1322025,
    doi          = {10.1080/23312025.2017.1322025},
}
```

## Description

The synthesized birds database contains the following:

  1. Recordings of bird song taken from xeno-canto.org (converted to .wav).
  2. Synthesized versions of these recordings using SMS tools (<http://mtg.upf.edu/technologies/sms>), a python implementation music synthesis toolkit, in .wav format. These audio files were synthesized using a sinusoid plus residual (SpR) system.
  3. A ground truth pitch vector, used by the synthesis system, in .mat format (loadable to matlab).
  4. Sine model and residual .wav files are also included.
  5. Matlab file "a1_plot_all.m" that plots the original recording's spectrogram, the synthesized recording's spectrogram and the ground truth pitch.

The bird song recordings were grouped into whistles (107 examples, 40m 09s), trills (65 examples, 13m 02s) and nasal (63 examples, 12m 32s) sounds. This data set was used in experiments for work currently submitted to Interspeech 2016.
