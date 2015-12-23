<section class="features">
  <h3>Features</h3>

  {% for feature in features %}
    {% include 'feature/feature.html.swig' %}
  {% endfor %}
</section>
