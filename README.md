# SVG Background

A light weight tool for creating infinite SVG backgrounds.

# How to Use

1. Clone this repo and open `background.svg`

2. Edit the CSS styles at the top of `background.svg` as desired

3. See `index.html` as an example or add `background: url(background.svg)` to the body of your website

# Live Demo

Click [here](https://strawstack.github.io/SVG_Background/) for a live demo

# Example Patterns

With a few simple changes, you can make the patterns below. Use `css transitions` or `animations` for an even greater effect!

![](./primes.png)

![](./even_odd.png)

![](./collatz.png)

![](./collatz_even_odd.png)

# Advanced

`build.js` can be run with node to generate the svg document seen inside `background.svg`. Using `build.js` allows one to add arbitrary classes to the `rectangles` in the SVG, which could then be styled in the same way as the currently existing classes.
