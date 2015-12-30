<aside class="tuner__modes">
  <h3>Tune modes</h3>

  <select class="mode">
    {% for mode in tuner.modes %}
      <option value="{{ mode }}">{{ mode }}</option>
    {% endfor %}
  </select>
</aside>
