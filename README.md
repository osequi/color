## Colors

The goal of this project is to create a Yet Another Color Scheme Designer especially for web and minimalist websites.
[Paletton](http://paletton.com/) is very good but the live examples are awful.

This color designer interacts directly with the underlying live example, an example showing all common elements every webpage has.
This way it makes fine tuning the palette more easier and on the fly.

### Theory

Colors interact. Either they complement each other of make a very visible contrast.
The color wheel helps to find these low contrast and high contrast color combinations and form a color family.

The left side of the wheel contains the so called `warm` colors and the right side the `cold` colors.
Combining a warm color with a cold color has a strong contrast; combining colors from a single side of the wheel have low contrast.

### Basic colors and models

In order to be able to mix colors on the screen we have to follow the RGB model which is totally different from the CMYK model used on print
and real life.

For example mixing `blue` with `yellow` in RGB gives `gray`, in CMYK gives `green` as expected.
This happens because the RGB model is additive, the CMYK model is substractive.

In RGB the default color of the canvas (the screen) is black. Adding a color lightens up the default black.
In CMYK the default color of the canvas (the paper) is white. Adding a color darkens the default white.
