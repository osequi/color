## Colors

The goal of this project is to create a Yet Another Color Scheme Designer tailored exclusively for websites.
[Paletton](http://paletton.com/) is very good but the live examples are awful.

This color designer interacts directly with the underlying live example, an example showing all common elements every webpage has.
This way it makes fine tuning the palette more easier, and, on the fly.

### Theory

Colors interact. Either they complement each other or make a very visible contrast.
For every website the task is to find a set of colors which complement well and contrast well.

### Color models and spaces

There are many different approaches to create a certain set of colors. Pantone for print, RGB for digital displays are such examples.
Every color space produces different set of colors using different techniques.
There are absolute color spaces containing all colors or others containing just a subset of colors matching the target device's&mdash;printer, low-resolution screen, high resolution screen&mdash;capability.

Sometimes conversion is possible between different color spaces and sometimes not.

#### RGB vs CMYK

For example mixing `blue` with `yellow` in RGB gives `gray`, in CMYK gives `green` as expected.
This happens because the RGB model is additive, the CMYK model is substractive.

In RGB the default color of the canvas (the screen) is black. Adding a color lightens up the default black.
In CMYK the default color of the canvas (the paper) is white. Adding a color darkens the default white.

* http://www.dpbestflow.org/color/color-space-and-color-profiles

#### Best color space for web (???)

* https://github.com/gka/chroma.js/wiki/Color-Spaces


### Color properties

Colors have different properties like saturation, lightness, luminosity, temperature, contrast etc.
Some of these are absolute properties (luminosity, temperature), others relative to another color:

* Saturation: how many `gray` the color has
* Lightness: how many `black` and `white` the color has
* Contrast: the perceptual difference to another color

In the case of relative properties there is always another color.
In the case of saturation and lightness the other color is predefined: white, gray and black, ie. special colors from the start, middle and end of the full color spectrum.

* http://color-wheel-artist.com/hue.html
* http://color-wheel-artist.com/hue.html


### Color mixing and manipulation

* the best color mixing library is http://gka.github.io/chroma.js/
* the best mixing advice is http://alistapart.com/article/mixing-color-for-the-web-with-sass

Basically what we can do with a color is:

1. Setting absolute properties: `color.luminace(0.5)`
2. Setting relative properties, the classic way of mixing with white, gray and black: `color.darken()`, `color.brighten()`, `color.saturate()`, `color.desaturate()`
3. Setting relative properties, the free way of mixing with any other color: `color.mix(red, blue, 0.5)`, `color.blend(red, blue, multiply)`
4. Checking color contrast to determine how to use two colors together: `color.contrast(red, blue)`
5. Mix them using different methods provided by different color spaces: `color.mix(red, blue, 0.5, 'hsla')`
