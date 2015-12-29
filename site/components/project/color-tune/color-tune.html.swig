<section class="color-tune">
  <h3>Color tune</h3>

  {% for tuner in tuners %}
    {% include 'drag-dial/drag-dial.html.swig' %}
  {% endfor %}
</section>
