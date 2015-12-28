<aside class="primaries">
  <h3 class="primaries__title">Primary colors</h3>

  <select class="primary">
    {% for primary in color_primaries %}
      <option value="{{ primary }}">{{ primary }}</option>
    {% endfor %}
  </select>
</aside>
