<section class="color-tune">
  <h3>Color tune</h3>

  {% for tuner in tuners %}
    {% include 'tuner/tuner.html.swig' %}
  {% endfor %}
</section>
