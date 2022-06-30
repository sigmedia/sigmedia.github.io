---
layout: post
title: Colour Transfer Algorithm
permalink: /software/colour_transfer/
---

## Global information

  - Repository: <https://github.com/frcs/colour-transfer>
  - Contact: <pitief@tcd.ie>
  - License:

<img alt="Original image, target palette and colour-tranfer.]" src="https://francois.pitie.net/images/colourtransfer.jpg" width=600 style="max-width:100%">


## Description

A major problem in the post production industry is matching the colour between different shots possibly taken at different times in the day. This process is part of the large activity of film grading in which the film material is digitally manipulated to have consistent grain and colour. The term colour grading is used here specifically to refer to the matching of colour. Colour grading is important because shots taken at different times under natural light can have a substantially different feel due to even slight changes in lighting.

Currently in the industry, colour balancing (as it is called) is achieved by experienced artists who use edit hardware and software to manually match the colour between frames by tuning parameters. For instance, in an effort to balance the red colour, the digital samples in the red channel in one frame may be multiplied by some factor and the output image viewed and compared to the colour of some other (a target) frame. The factor is then adjusted if the match in colour is not quite right. The amount of adjustment and whether it is an increase or decrease depends crucially on the experience of the artist. This is because it is a delicate task since the change in lighting conditions induces a very complex change of illumination. It would be beneficial to automate this task in some way.

The techniques proposed here are example-based re-colouring methods which can be illustrated by the picture above. The original picture is required to be transformed so that its colours match the palette of the image in the middle, regardless of the content of the pictures.

## References

```bibtex
@INPROCEEDINGS{Pitie2005iccv,
  author    = {Pitie, F. and Kokaram, A.C. and Dahyot, R.},
  booktitle = {Computer Vision, 2005. ICCV 2005. Tenth IEEE International Conference on},
  title     = {N-dimensional probability density function transfer and its application to color transfer},
  year      = 2005,
  volume    = 2,
  pages     = {1434-1439 Vol. 2},
  doi       = {10.1109/ICCV.2005.166},
  ISSN      = {1550-5499},
  month     = {Oct},
}

@INPROCEEDINGS{Pitie2005cvmp,
  author    = {Pitie, F. and Kokaram, A.C. and Dahyot, R.},
  booktitle = {Visual Media Production, 2005. CVMP 2005. The 2nd IEE European Conference on},
  title     = {Towards automated colour grading},
  year      = 2005,
  pages     = {9-16},
  ISSN      = {0537-9989},
  month     = {Nov},
}

@article{Pitie2007cviu,
  title     = {Automated colour grading using colour distribution transfer},
  journal   = {Computer Vision and Image Understanding},
  volume    = {107},
  number    = {1–2},
  pages     = {123 - 137},
  year      = 2007,
  note      = {Special issue on color image processing},
  issn      = {1077-3142},
  doi       = {http://dx.doi.org/10.1016/j.cviu.2006.11.011},
  url       = {http://www.sciencedirect.com/science/article/pii/S1077314206002189},
  author    = {François Pitié and Anil C. Kokaram and Rozenn Dahyot},
}

@INPROCEEDINGS{Pitie2007cvmp,
  author    = {Pitié, F. and Kokaram, A.},
  booktitle = {Visual Media Production, 2007. CVMP 2007. 4th European Conference on},
  title     = {The linear Monge-Kantorovitch linear colour mapping for example-based colour transfer},
  year      = 2007,
  pages     = {1-9},
  month     = {Nov},
}

@Inbook{Pitie2008bookchapter,
  author    = {Pitie, Francois and Kokaram, Anil and Dahyot, Rozenn},
  chapter   = {Enhancement of Digital Photographs Using Color Transfer Techniques},
  series    = {Image Processing Series},
  year      = 2008,
  month     = {Sep},
  day       = 09,
  publisher = {CRC Press},
  pages     = {295-321},
  note      = 0,
  isbn      = {978-1-4200-5452-1},
  doi       = {10.1201/9781420054538.ch11},
  url       = {http://dx.doi.org/10.1201/9781420054538.ch11}
}
```



