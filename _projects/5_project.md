---
layout: page
title: Mathematical Reasoning for Low-Resource Language (Bengali)
description: Fine-tuned LLM for Bengali mathematical problem-solving
img: assets/img/5.jpg
importance: 5
category: work
related_publications: false
---

## Overview

This project enhances Qwen-7B language model for Bengali-language mathematical reasoning through careful fine-tuning with curated datasets and advanced optimization techniques.

## Awards & Recognition

🥉 **6th Place - BUET DL Sprint 3.0 2025** (out of 70+ teams)

## Technical Approach

### Model Fine-tuning

- **Base Model**: Qwen-7B (open-source LLM)
- **Dataset**: Curated Bengali mathematical problem corpus
- **Optimization**: Direct Preference Optimization (DPO)
- **Model Merging**: mergeKit for efficient multi-adapter composition

### Direct Preference Optimization (DPO)

- **Method**: Aligning model outputs with human preferences without explicit reward modeling
- **Advantage**: More efficient than RLHF for mathematical reasoning
- **Results**: Improved mathematical problem-solving accuracy

## Performance Metrics

- **Mathematical Accuracy**: Significant improvement over baseline Qwen-7B
- **Language Proficiency**: Native Bengali language understanding
- **Reasoning Capability**: Multi-step problem-solving support
- **Inference Speed**: Efficient on consumer hardware

## Technical Stack

- **Python** - Development
- **Hugging Face Transformers** - Model loading and fine-tuning
- **PyTorch** - Training framework
- **PEFT (Parameter-Efficient Fine-Tuning)** - LoRA adapters
- **mergeKit** - Multi-adapter merging
- **Qwen Models** - Base model architecture

## Applications

- **Educational Technology**: Bengali math tutoring systems
- **Homework Assistance**: Step-by-step mathematical problem solving
- **STEM Education**: Improving accessibility of STEM content in Bengali
- **Professional Tools**: Technical documentation in Bengali
- **Research**: Low-resource language AI capabilities
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
