---
layout: page
title: Resources
permalink: /resources/
---

Sigmedia is happy to share data and utilities with the wider research community. We currently are sharing:

## Databases

### Stereo Video Database

This database is designed to be a resource that provides test data working in the field of stereo cinema post-production. It consists of sequence shot in indoor and outdoor locations and under both controlled and uncontrolled lighting conditions. It also contains footage shot from a steadicam as well as on a tripod.

#### The Experimental Setup

The camera rig consists of two iconix HD-RH1 cameras mounted on an Inition 'bolt' side-by-side rig. The data was capture on Flash XDR units and is recorded in a 4:2:2 XDCAM format using the "xd5e" codec at a rate of 100 Mbps. The spatial resolution of the sequences is 1920 x 1080 and has a frame rate of 25 frames per second.

#### Examples

Here are a couple of examples of some stereo stills taken from the database. They are at full resolution.

[FIXME: add pictures]

Here are some low resolution sequences that are also in the database.

[FIXME: add pictures]

#### Using the database

Please contact sigmedia_database@mee.tcd.ie to request access.


### Trinity College Dublin Speaker Ageing (TCDSA) Database

The Trinity College Dublin Speaker Ageing (TCDSA) Database was designed primarily to investigate the effect of ageing-related vocal change on speaker verification

The main portion of this database contains speech recordings of 26 adults (15 males and 11 females) across a time span of between 25-58 years per speaker.

Also included is a set of 120 development speakers, balanced across age group, gender and accent.

The TCDSA database is made available free of charge for academic use only.

#### Robust Speaker Verification for Biometric applications

Sponsor: IRCSET

Project description: Biometric verification involves the use of physiological features or behavioural traits of an individual to verify their identity. Examples of common biometric modalities are: fingerprints, the face, the iris, handwriting, gait and voice. Biometric systems have applications in securing access locally, e.g. airports, computer systems, restricted areas in a building, and remotely, e.g. over the phone or internet, along with additional applications in forensic investigation and information retrieval.

The advantage of voice as a biometric modality is that it can be obtained by a system in a way that is transparent to the user - this is in contrast to fingerprint and iris scans for example, which are often seen as invasive. In addition, voice can be transmitted without special equipment - it can be used to provide authentication over a normal telephone. Despite these advantages, using the voice in a biometric system presents many challenges. In a speaker verification system, a voice sample and a claimed identity are provided as input. The sample is compared to the user template in a database corresponding to the claimed identity, and based on a similarity score, the speaker is either verified or rejected. Achieving high accuracy speaker verification in real-world operating conditions is limited by variability between enrolment (creation of a speaker template) and verification (subsequent access of the system) sessions. The voice is subject to numerous natural sources of variability, from physiological sources like illness or ageing, to cognitive sources such as emotional state or speaking style. When the voice undergoes recording and transmission, further variability, due to background noise or the transmission channel, is introduced. The current focus of this project is on the effect of ageing on speaker verification. A new dataset, the Trinity College Dublin Speaker Ageing (TCDSA) database, has been compiled to investigate this effect. Our work in this area has demonstrated the significant deterioration of speaker verification accuracy due to ageing, and has proposed a new verification approach to address long-term variability due to both ageing and recording quality

#### Using the database

Contact Finnian Kelly (kellyfp[a]tcd.ie) to obtain the data, or for further information.

### TCD-TIMIT Audio-Visual Speech Database.

Automatic audio-visual speech recognition currently lags behind its audio-only counterpart in terms of major progress. One of the reasons commonly cited by researchers is the scarcity of suitable research corpora. This paper details the creation of a new corpus designed for continuous audio-visual speech recognition research . TCD-TIMIT consists of high-quality audio and video footage of 62 speakers reading a total of 6913 phonetically rich sentences. Three of the speakers are professionally-trained lipspeakers, recorded to test the hypothesis that lipspeakers may have an advantage over regular speakers in automatic visual speech recognition systems. Video footage was recorded from two angles: straight on, and at 30degrees. The paper outlines the recording of footage, and the required post-processing to yield video and audio clips for each sentence. Audio, visual, and joint audio-visual baseline experiments are reported. Separate experiments were run on the lipspeaker and non-lipspeaker data, and the results compared. Visual and audio-visual baseline results on the non-lipspeakers were low overall. Results on the lipspeakers were found to be significantly higher. It is hoped that as a publicly available database, TCD-TIMIT will now help further state of the art in audio-visual speech recognition research.


#### Using the database

This database is being made free for research use. Please reference the following paper in any publications where you use the data:

Harte, N.; Gillen, E., "TCD-TIMIT: An Audio-Visual Corpus of Continuous Speech," Multimedia, IEEE Transactions on , vol.17, no.5, pp.603,615, May 2015 doi: 10.1109/TMM.2015.2407694

The database can be accessed at <http://sigmedia.tcd.ie/TCDTIMIT>

### TCD-VoIP (Sigmedia-VoIP) Listener Test Database

There are many types of degradation which can occur in Voice over IP calls. Degradations which occur independently of the codec, hardware, or network in use are the focus of this dataset. The development of new quality metrics for modern communication systems depends heavily on the availability of suitable test and development data with subjective quality scores. A new dataset of VoIP degradations (TCD-VoIP) has been created and is available here. The dataset contains speech samples with a range of common VoIP degradations, and the corresponding set of subjective opinion scores from 24 listeners.

#### Using the database

### Political Speech Database

The Irish Political Speech Database in an English language database which contains recordings of politicians in a range of settings.
The database spans 7 years (2006-2012) and contains speech from a single speaker.

Four speech settings are included in the database: parliamentary discussions; election rallies; interviews; and inter-party conferences.
Recordings are primarily collected from online sources such as [YouTube](https://www.youtube.com/user/FineGaelMedia) and the [digital archives of the Irish Parliament](http://oireachtas.heanet.ie/archive/?Channel=Dail).
This introduces a large variability, both in the format and resolution of recordings, and in the range of noise and reverberation conditions encountered.
However, it also ensures that all expressions are authentic.

Annotations have been crowd-sourced for six attributes:

  - Boredom
  - Charisma
  - Enthusiasm
  - Inspiration
  - Likeability
  - Persuasion

Thus the database may be used to explore the evolution of speaking style over time, and to automatically predict these six attributes from the speech.

#### Using the database

The database is still under construction, but will be made available in the near future. For more information, please contact Ailbhe Cullen at cullena3[a]tcd.ie.


### Synth Birds Database Synthesized Birds Database with Ground Truth Pitch

The synthesized birds database contains the following:

  1. Recordings of bird song taken from xeno-canto.org (converted to .wav).
  2. Synthesized versions of these recordings using SMS tools (<http://mtg.upf.edu/technologies/sms>), a python implementation music synthesis toolkit, in .wav format. These audio files were synthesized using a sinusoid plus residual (SpR) system.
  3. A ground truth pitch vector, used by the synthesis system, in .mat format (loadable to matlab).
  4. Sine model and residual .wav files are also included.
  5. Matlab file "a1_plot_all.m" that plots the original recording's spectrogram, the synthesized recording's spectrogram and the ground truth pitch.

The bird song recordings were grouped into whistles (107 examples, 40m 09s), trills (65 examples, 13m 02s) and nasal (63 examples, 12m 32s) sounds. This data set was used in experiments for work currently submitted to Interspeech 2016.

#### Using the database
  - [Download it here!](http://www.mee.tcd.ie/~sigmedia/pmwiki/uploads/Resources.SynthBirdsData/Synth_birds_database.zip)
  - Contact: Colm O'Reilly at oreilc16[at]tcd.ie.

## Tools
### Colour Transfer Algorithm
### ViSQOL Speech Quality Metric
### ViSQOLAudio Audio Quality Metric
### TCD-MUSHRA Test Web UI
### pyVSR Python toolkit for Visual Speech Recognition
### AVSR-tf1 Audio-Visual Speech Recognition using Sequence to Sequence Models
