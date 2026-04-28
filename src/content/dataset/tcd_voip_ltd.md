---
layout: post
title: TCD-VoIP (Sigmedia-VoIP) Listener Test Database
permalink: /datasets/tcd_voip_ltd/
---

## Global Information

- <span class="field-label">Download link</span> [Google Drive](https://drive.google.com/file/d/1rHJN34vP-W8SJtjpNUnx5RIks3o5L5he/view?usp=sharing)
- <span class="field-label">Contact</span> [sigmedia_database@tcd.ie](mailto:sigmediag_database@tcd.ie) - The subject **must start** with the tag [TCDVoIP Question] (If the tag is not provided or invalid, your email will be ignored)
- <span class="field-label">License</span> Non-commercial only
- <span class="field-label">Reference</span> [harte2015tcd](#reference)

<div id="reference">

```bibtex
@inproceedings{harte2015tcd,
  title        = {TCD-VoIP, a research database of degraded speech for assessing quality in VoIP
                  applications},
  author       = {Harte, Naomi and Gillen, Eoin and Hines, Andrew},
  booktitle    = {2015 Seventh International Workshop on Quality of Multimedia Experience (QoMEX)},
  pages        = {1--6},
  year         = {2015},
  organization = {IEEE}
}
```

</div>



## Description

There are many types of degradation which can occur in Voice over IP calls. Degradations which occur independently of the codec, hardware, or network in use are the focus of this dataset. The development of new quality metrics for modern communication systems depends heavily on the availability of suitable test and development data with subjective quality scores. A new dataset of VoIP degradations (TCD-VoIP) has been created and is available here. The dataset contains speech samples with a range of common VoIP degradations, and the corresponding set of subjective opinion scores from 24 listeners.

### Summary of Degradations and Parameters Used in TCD-VoIP

| Degradation       | Conditions |   Parameters |                       Range |
|-------------------|------------|-------------:|----------------------------:|
| Chop              | 20         |         Rate |                 0-6 chops/s |
|                   |            |       Period |                 0.02-0.04 s |
|                   |            |         Mode |   Insert, Delete, Overwrite |
| Clip              | 10         |   Multiplier |                        1-55 |
| Competing Speaker | 10         | Gender Coder |                         1-5 |
|                   |            |          SNR |                    10-50 dB |
| Echo              | 20         |              |                       0-0.5 |
|                   |            |              |                    0-220 ms |
| Noise             | 20         |   Noise Type | Car, Street, Office, Babble |
|                   |            |          SNR |                      5-55dB |
| MNRU              | 4          |      SNR (Q) |              48, 36, 24, 12 |
