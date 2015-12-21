<article class="different-section">
  <h3>Different section</h3>

  <div class="different-section__description">
    <p>There is (always) a need to separate big content chunks from each other with high contrast backgrounds.</p>
    <p>So this would be an example like that.</p>
  </div>

  <div class="different-section__palette">
    {% for color in palette %}
      {% include '../color-scheme/__palette/color-swatch/color-swatch.html.swig' %}
    {% endfor %}
  </div>
</article>
