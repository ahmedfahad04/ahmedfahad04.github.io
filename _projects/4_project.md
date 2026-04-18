---
layout: page
title: Bengali Automatic Speech Recognition for Regional Dialects
description: Deep learning-based ASR system for Bengali speech with regional dialect support
img: assets/img/4.jpg
importance: 4
category: work
related_publications: false
---

## Overview

This project develops an end-to-end automatic speech recognition (ASR) system specifically trained for Bengali language with support for regional dialects across Bangladesh.

## Awards & Recognition

🥉 **4th Place - IUT CSE Fest Datathon 2024** (out of 47 teams)

## Dataset

- **Scale**: 79+ hours of curated Bengali speech corpus
- **Coverage**: Multiple regional dialects across Bangladesh
- **Quality**: High-quality audio recordings with precise transcriptions
- **Diversity**: Speakers from different age groups, genders, and educational backgrounds

## Model Architecture

- **End-to-End Architecture**: Integrated acoustic and language modeling
- **Deep Learning Framework**: TensorFlow/PyTorch for training
- **Sequence-to-Sequence**: Encoder-decoder architecture with attention mechanism
- **Language-specific Features**: Phonetic and linguistic features tailored for Bengali

## Performance

- **Accuracy**: 75% on regional dialect test set
- **Word Error Rate (WER)**: Low WER on specific dialect categories
- **Robustness**: Handles background noise and varying audio quality

## Technical Stack

- **Python** - Development
- **TensorFlow/PyTorch** - Deep learning
- **Librosa** - Audio processing
- **Kaldi** - Speech recognition toolkit
- **MFCC & Spectrogram** - Feature extraction

## Applications

- **Voice-enabled Services**: Bengali-language voice search and commands
- **Accessibility**: Voice input for Bengali speakers
- **Content Creation**: Automatic transcription of Bengali media
- **Education**: Language learning applications
It's easy to include images in a flexible 3-column grid format.
Make your photos 1/3, 2/3, or full width.

To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    ---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
