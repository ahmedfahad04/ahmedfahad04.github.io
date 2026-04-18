---
layout: page
title: PyTypeWizard
description: Automated Repair for Python Static Type Errors
img: assets/img/1.jpg
importance: 1
category: work
tech_stack: [VSCode Extension API, SQLite, RAG, LLM]
---

<div class="project-card">
  <h3>PyTypeWizard: Automated Repair for Python Static Type Errors</h3>
  
  **Tech Stack:** VSCode Extension API • SQLite • RAG • LLM
  
  Built a VSCode extension for real-time detection and repair of Python static type errors using LLM-based reasoning. Implemented context-aware fix generation using Retrieval-Augmented Generation (RAG) over indexed codebases with vector embeddings. Designed a relational database schema (SQLite) to store code chunks, error metadata, fixes, and user feedback for continuous improvement.
  
  **GitHub:** [View Project](https://github.com/ahmedfahad04/PyTypeWizard)
</div>
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
