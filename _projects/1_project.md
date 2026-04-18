---
layout: page
title: PyTypeWizard - Automated Repair for Python Static Type Errors
description: VSCode Extension for real-time detection and repair of Python type errors using LLM-based reasoning
img: assets/img/1.jpg
importance: 1
category: work
related_publications: false
---

## Overview

PyTypeWizard is a VSCode extension that leverages large language models to automatically detect and repair Python static type errors in real-time. This tool bridges the gap between Python's dynamic typing and modern type checking practices.

## Key Features

- **Real-time Detection**: Identifies Python static type errors as you code
- **LLM-powered Fixes**: Uses context-aware reasoning with Retrieval-Augmented Generation (RAG) to suggest semantically correct fixes
- **Code Indexing**: Maintains a SQLite database of code chunks, error metadata, and historical fixes for continuous learning
- **Feedback Loop**: Incorporates user feedback to improve fix quality over time

## Technical Stack

- **VSCode Extension API** - Core extension development
- **LLM Integration** - Claude/GPT for reasoning and fix generation
- **RAG (Retrieval-Augmented Generation)** - Context-aware code understanding
- **SQLite** - Persistent storage for learning database
- **Vector Embeddings** - Semantic code similarity for relevant context retrieval

## Implementation Details

The extension works by:
1. Analyzing Python code for type errors using static analysis
2. Retrieving semantically similar code patterns from the indexed codebase
3. Using RAG to generate context-aware fixes
4. Storing fixes and user feedback in SQLite for model refinement

## Impact

This project demonstrates the potential of AI-assisted software engineering in improving code quality and reducing debugging time for Python developers, particularly beneficial for teams transitioning to typed Python.

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

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
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
