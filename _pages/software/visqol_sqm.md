---
layout: post
title: ViSQOL - an objective speech quality model
permalink: /software/visqol_sqm
---

## Global information

  - Repository: <https://github.com/google/visqol>
  - Contact:
  - License:
  - Reference:

```bibtex
@article{hines2015visqol,
  title        = {ViSQOL: an objective speech quality model},
  author       = {Hines, Andrew and Skoglund, Jan and Kokaram, Anil C and Harte, Naomi},
  journal      = {EURASIP Journal on Audio, Speech, and Music Processing},
  volume       = {2015},
  number       = {1},
  pages        = {1--18},
  year         = {2015},
  publisher    = {SpringerOpen},
  doi          = {10.1186/s13636-015-0054-9}
}
```

## Description

ViSQOL, the Virtual Speech Quality Objective Listener, is an objective speech quality model. It is a signal-based, full-reference, intrusive metric that models human speech quality perception using a spectro-temporal measure of similarity between a reference and a test speech signal. The metric has been particularly designed to be robust for quality issues associated with Voice over IP (VoIP) transmission. This paper describes the algorithm and compares the quality predictions with the ITU-T standard metrics PESQ and POLQA for common problems in VoIP: clock drift, associated time warping, and playout delays. The results indicate that ViSQOL and POLQA significantly outperform PESQ, with ViSQOL competing well with POLQA. An extensive benchmarking against PESQ, POLQA, and simpler distance metrics using three speech corpora (NOIZEUS and E4 and the ITU-T P.Sup. 23 database) is also presented. These experiments benchmark the performance for a wide range of quality impairments, including VoIP degradations, a variety of background noise types, speech enhancement methods, and SNR levels. The results and subsequent analysis show that both ViSQOL and POLQA have some performance weaknesses and under-predict perceived quality in certain VoIP conditions. Both have a wider application and robustness to conditions than PESQ or more trivial distance metrics. ViSQOL is shown to offer a useful alternative to POLQA in predicting speech quality in VoIP scenarios.
