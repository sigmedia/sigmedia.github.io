---
layout: post
title: Colour Transfer Algorithm
permalink: /resources/software/cda/
---

## Global information

  - Repository: <https://github.com/frcs/colour-transfer>
  - Contact: <fpitie@mee.tcd.ie>
  - License:
  - Reference:

```bibtex
```

## Description

A major problem in the post production industry is matching the colour between different shots possibly taken at different times in the day. This process is part of the large activity of film grading in which the film material is digitally manipulated to have consistent grain and colour. The term colour grading is used here specifically to refer to the matching of colour. Colour grading is important because shots taken at different times under natural light can have a substantially different feel due to even slight changes in lighting.

Currently in the industry, colour balancing (as it is called) is achieved by experienced artists who use edit hardware and software to manually match the colour between frames by tuning parameters. For instance, in an effort to balance the red colour, the digital samples in the red channel in one frame may be multiplied by some factor and the output image viewed and compared to the colour of some other (a target) frame. The factor is then adjusted if the match in colour is not quite right. The amount of adjustment and whether it is an increase or decrease depends crucially on the experience of the artist. This is because it is a delicate task since the change in lighting conditions induces a very complex change of illumination. It would be beneficial to automate this task in some way.

The techniques proposed here are example-based re-colouring methods which can be illustrated by the picture above. The original picture is required to be transformed so that its colours match the palette of the image in the middle, regardless of the content of the pictures.
