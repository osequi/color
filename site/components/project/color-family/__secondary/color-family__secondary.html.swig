<aside class="color-family__secondary">
  <h3>Secondary</h3>

  {% set colorA = colors[0] %}
  {% set colorB = colors[1] %}
  {% set color = { name: colorA.name + '-' + colorB.name, title: '' } %}
  {% include '../../../framework/design/decorations/color-swatch/--rectangle/color-swatch--rectangle.html.swig' %}

  {% set colorA = colors[0] %}
  {% set colorB = colors[2] %}
  {% set color = { name: colorA.name + '-' + colorB.name, title: '' } %}
  {% include '../../../framework/design/decorations/color-swatch/--rectangle/color-swatch--rectangle.html.swig' %}

  {% set colorA = colors[2] %}
  {% set colorB = colors[1] %}
  {% set color = { name: colorA.name + '-' + colorB.name, title: '' } %}
  {% include '../../../framework/design/decorations/color-swatch/--rectangle/color-swatch--rectangle.html.swig' %}
<aside>
