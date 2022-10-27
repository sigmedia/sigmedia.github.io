---
layout: post
title: pyVSR - Python toolkit for Visual Speech Recognition
permalink: /software/pyvsr
---

## Global information

  - Repository: <https://github.com/georgesterpu/pyVSR>
  - Contact:
  - License:
  - Reference:

```bibtex
@inproceedings{Sterpu2017,
  author       = {George Sterpu and Naomi Harte},
  title        = {Towards Lipreading Sentences with Active Appearance Models},
  year         = 2017,
  booktitle    = {Proc. The 14th International Conference on Auditory-Visual Speech Processing},
  pages        = {70--75},
  doi          = {10.21437/AVSP.2017-14},
  url          = {http://dx.doi.org/10.21437/AVSP.2017-14}
}
```

## Description

pyVSR is a Python toolkit aimed at running Visual Speech Recognition (VSR) experiments in a traditional framework (e.g. handcrafted visual features, Hidden Markov Models for pattern recognition).

The main goal of pyVSR is to easily reproduce VSR experiments in order to have a baseline result on most publicly available audio-visual datasets.

### What can you do with pyVSR:

1. Fetch a filtered list of files from a dataset
    - currently supported:
        - TCD-TIMIT
            - speaker-dependent protocol
            - speaker-independent protocol
            - single person

2. Extract visual features:
    - Discrete Cosine Transform (DCT)
        - Automatic ROI extraction
        - Configurable window size
        - Fourth order accurate derivatives
        - Sample rate interpolation
        - Storage in HDF5 format
    - Active Appearance Models (AAM)
        - Do NOT require manually annotated landmarks
        - Face, lips, and chin models supported
        - Parameters obtainable either through fitting or projection
        - Implementation based on Menpo
    - Point cloud of facial landmarks
        - OpenFace wrapper

3. Train Hidden Markov Models (HMMs)
    - easy HTK wrapper for Python
    - optional bigram language model
    - multi-threaded support (both for training and decoding at full CPU Power)

4. Extend the support for additional features
    - pyVSR has a simple, modular, object-oriented architecture
