<section class="home__family">
  <h3 class="title--display">Color family</h3>

  <div class="text">
    <p>
      The easiest way to create a family of cool and warm colors is to use the color wheel.
    </p>
    <p>
      The color wheel has 3 primary colors. They mixed together produce another 3 secondary colors. Secondary colors mixed with primary colors
      produce another 2 * 3 colors. Finally we have 12 colors.
    </p>

    <p>
      The upper-right side of the color wheel contains the lighter, warmer colors. The bottom left the cooler colors.
    </p>
  </div>


  <div class="examples">
    <div class="example example1">
      {% set colors = colorsA %}

      {% set title = 'primary' %}
      {% include '../../../project/color-family/__primary/color-family__primary.html.swig' %}

      {% set title = 'secondary' %}
      {% include '../../../project/color-family/__secondary/color-family__secondary.html.swig' %}

      {% set title = 'tertiary' %}
      {% include '../../../project/color-family/__tertiary/color-family__tertiary.html.swig' %}
    </div>

    <div class="example example2">
      {% set colors = colorsB %}

      {% set title = 'primary' %}
      {% include '../../../project/color-family/__primary/color-family__primary.html.swig' %}

      {% set title = 'secondary' %}
      {% include '../../../project/color-family/__secondary/color-family__secondary.html.swig' %}

      {% set title = 'tertiary' %}
      {% include '../../../project/color-family/__tertiary/color-family__tertiary.html.swig' %}
    </div>

    <div class="example example3">
      {% set colors = colorsC %}

      {% set title = 'primary' %}
      {% include '../../../project/color-family/__primary/color-family__primary.html.swig' %}

      {% set title = 'secondary' %}
      {% include '../../../project/color-family/__secondary/color-family__secondary.html.swig' %}

      {% set title = 'tertiary' %}
      {% include '../../../project/color-family/__tertiary/color-family__tertiary.html.swig' %}
    </div>
  </div>
</section>
