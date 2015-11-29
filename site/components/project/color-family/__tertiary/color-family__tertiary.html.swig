<aside class="color-family__tertiary">
  <h3>Tertiary</h3>

  {% set colorMain = colors[0] %}
  {% set colorA = colors[0] %}
  {% set colorB = colors[1] %}
  {% set color = { name: colorMain.name + '-' + colorA.name + '-' + colorB.name, title: '' } %}
  {% include '../../../framework/design/decorations/color-swatch/--rectangle/color-swatch--rectangle.html.swig' %}

  {% set colorA = colors[0] %}
  {% set colorB = colors[2] %}
  {% set color = { name: colorMain.name + '-' + colorA.name + '-' + colorB.name, title: '' } %}
  {% include '../../../framework/design/decorations/color-swatch/--rectangle/color-swatch--rectangle.html.swig' %}

  {% set colorA = colors[2] %}
  {% set colorB = colors[1] %}
  {% set color = { name: colorMain.name + '-' + colorA.name + '-' + colorB.name, title: '' } %}
  {% include '../../../framework/design/decorations/color-swatch/--rectangle/color-swatch--rectangle.html.swig' %}
<aside>
