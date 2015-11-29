<section class="home__family">
  <h3 class="title--display">Family</h3>

  <div class="text">
    <p>
    </p>
  </div>


  <div class="example example1">
    {% set colors = colorsC %}

    {% set title = 'primary' %}
    {% include '../../../project/color-family/__primary/color-family__primary.html.swig' %}

    {% set title = 'secondary' %}
    {% include '../../../project/color-family/__secondary/color-family__secondary.html.swig' %}

    {% set title = 'tertiary' %}
    {% include '../../../project/color-family/__tertiary/color-family__tertiary.html.swig' %}
  </div>
</section>
