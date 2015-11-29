<section class="home__family">
  <h3 class="title--display">Family</h3>

  <div class="text">
    <p>
    </p>
  </div>


  <div class="example example1">
    {% set colors = colorsA %}
    {% include '../../../project/main-colors/main-colors.html.swig' %}

    {% set title = 'secondary' %}
    {% include '../../../project/color-family/color-family.html.swig' %}

    {% set title = 'tertiary' %}
    {% include '../../../project/color-family/color-family.html.swig' %}
  </div>

  <div class="example example2">
    {% set colors = colorsB %}
    {% include '../../../project/main-colors/main-colors.html.swig' %}

    {% set title = 'secondary' %}
    {% include '../../../project/color-family/color-family.html.swig' %}

    {% set title = 'tertiary' %}
    {% include '../../../project/color-family/color-family.html.swig' %}
  </div>

  <div class="example example3">
    {% set colors = colorsC %}
    {% include '../../../project/main-colors/main-colors.html.swig' %}

    {% set title = 'secondary' %}
    {% include '../../../project/color-family/color-family.html.swig' %}

    {% set title = 'tertiary' %}
    {% include '../../../project/color-family/color-family.html.swig' %}
  </div>
</section>
