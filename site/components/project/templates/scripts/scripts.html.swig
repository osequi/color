{% import "../../../framework/helpers/includejs/includejs.swig" as j  %}
{% set scripts = j.includejs(site.javascripts.footer) %}

{# for the color picker #}
<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>


{{ scripts | safe }}

</body>
</html>
