<section class="home__highlight-and-shade">
  <h3 class="title--display">Highlight and shade</h3>

  <div class="text">
    <p>
      <a href="http://alistapart.com/article/mixing-color-for-the-web-with-sass">This technique</a>
      uses a main color and a highlight and shading color to create a palette.
    </p>

    <p>
      By choosing different highlight and shading colors we can make the palette warmer or colder.
    </p>
  </div>

  <div class="example example1">
    {% set colors = colorsA %}
    {% include '../../../project/main-colors/main-colors.html.swig' %}

    {% set color = colorsA[0] %}
    {% set title = 'tint' %}
    {% include '../../../project/mix-colors/mix-colors.html.swig' %}

    {% set title = 'shade' %}
    {% include '../../../project/mix-colors/mix-colors.html.swig' %}
  </div>

  <div class="example example2">
    {% set colors = colorsB %}
    {% include '../../../project/main-colors/main-colors.html.swig' %}

    {% set color = colorsB[0] %}
    {% set title = 'tint' %}
    {% include '../../../project/mix-colors/mix-colors.html.swig' %}

    {% set title = 'shade' %}
    {% include '../../../project/mix-colors/mix-colors.html.swig' %}
  </div>

  <div class="example example3">
    {% set colors = colorsC %}
    {% include '../../../project/main-colors/main-colors.html.swig' %}

    {% set color = colorsC[0] %}
    {% set title = 'tint' %}
    {% include '../../../project/mix-colors/mix-colors.html.swig' %}

    {% set title = 'shade' %}
    {% include '../../../project/mix-colors/mix-colors.html.swig' %}
  </div>
</section>
