# Reading CSS

## Selectors

## Properties

### [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color) 
The text color of an element and its decorations 
##### Possible Values: [any `<color>` value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)
* a hexadecimal color value: `#012345`, `#CCC`
* a color keyword: `cornflowerblue`, `purple`, `orange`
* RGB decimal notation: `rgb(0,0,0)`, `rgb(255, 255, 255)`
* RGBa (transparency) notation: `rgba(0,0,0,0)`, `rgba(255, 255, 255, 0.8)`
* HSL decimal notation: `hsl(0, 100%, 50%)`

### [`display`] (https://developer.mozilla.org/en-US/docs/Web/CSS/display)
specifies the type of rendering box used for an element
##### Possible Basic Values: 
* none: Turns off the display of an element
* inline: The element generates one or more inline element boxes.
* block: The element generates a block element box.
* list-item: The element generates a block box for the content and a separate list-item inline box.

### [`width`] (https://developer.mozilla.org/en-US/docs/Web/CSS/width)
specifies the width of the content area of an element
##### Possible values:
* length: distance for width
* percentage: percentage of containing block's width
* auto: the browser will calculate and select a width

### [`position`] (https://developer.mozilla.org/en-US/docs/Web/CSS/position)
chooses alternative rules for positioning elements
##### Possible values:
* static: the element uses the normal behavior
* relative: lays out all elements as though the element were not positioned, and then adjust the element's position, without changing layout
* absolute: leaves no space for the element - positions it at a specified position relative to its closest positioned ancestor or to the containing block
* fixed: leaves no space for the element - positions it at a specified position relative to the screen's viewport and does not move it when scrolled

### [`top`] (https://developer.mozilla.org/en-US/docs/Web/CSS/top)
- absolutely positioned elements - distance between the top margin edge of the element and the top edge of its containing block
- relatively positioned elements - amount the element is moved below its normal position

##### Possible values:
* length: can be postive, negative or null 
    * absolutely positioned elements - distance to top edge of containing block
    * relatively positioned elements - offset that the element is moved below its position in the normal flow if it wasn't positioned.
* percentage: percentage of the containing block's height
* auto:
    * absolutely positioned elements - position based on the bottom property
    * relatively positioned elements - offset the element from its original position based on the bottom property, or if bottom is also auto, do not offset it at all.
* inherit: value is the same as the computed value from its parent element

### [`right`] (https://developer.mozilla.org/en-US/docs/Web/CSS/right)
- absolutely positioned elements -  distance between the right margin edge of the element and the right edge of its containing block.
- non-positioned elements: no effect

##### Possible values:
* length: can be postive, negative or null
    * absolutely positioned elements - distance to the right edge of the containing block
    * relatively positioned elements - offset that the element is moved right from its position in the normal flow if it wasn't positioned.
* percentage: percentage of the containing block's width
* auto:
    * absolutely positioned elements - position based on the left property
    * relatively positioned elements - right offset the element from its original position based on the left property - if left is also auto, does not offset it at all.
* inherit: value is the same than the computed value from its parent element

### [`bottom`] (https://developer.mozilla.org/en-US/docs/Web/CSS/bottom)
- absolutely positioned elements - distance between the bottom margin edge of the element and the bottom edge of the block containing the element
- relatively positioned elements - distance from element's bottom edge above its normal position

##### Possible values:
* length: can be positive, negative or null
    * absolutely positioned elements -  distance from the bottom edge of the containing block
    * relatively positioned elements - offset that the element is moved above its position in the normal flow if it wasn't positioned.
* percentage: percentage of the containing block's height
* auto:
    * absolutely positioned elements - position based on the top property, and height
    * relatively positioned elements - offset the element from its original position is based on the top property - if top is also auto, the element is not moved vertically
* inherit: value is the same as the computed value from its parent element

### [`left`] (https://developer.mozilla.org/en-US/docs/Web/CSS/left)
- absolutely positioned elements - distance between the left margin edge of the element and the left edge of its containing block.

##### Possible values:
* length: can be positive, negative or null
    * absolutely positioned elements - distance from the left edge of the containing block
    * relatively positioned elements - offset that the element is moved left from its position in the normal flow if it wasn't positioned.
* percentage: percentage of the containing block's width
* auto:
    * absolutely positioned elements - position based on the right property
    * relatively positioned elements - left offset of the element from its original position based on the right property - if right is also auto, does not offset it at all
* inherit: value is the same as the computed value from its parent element 

### [`margin`] (https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
sets the margin for all four sides
##### Accepts one, two, three or four values of the following:
* length: Specifies a fixed width. Negative Values are allowed.
* percentage: relative to the width of the containing block. Negative values are allowed.
* auto: auto is replaced by some suitable value
    - One single value applies to all four sides.
    - Two values apply first to top and bottom, the second one to left and right.
    - Three values apply first to top, second to left and right and third to bottom.
    - Four values apply to top, right, bottom and left in that order (clockwise).

### [`margin-left`] (https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left)
sets the margin for the left side of the box associated with an element
##### Possible Values:
* length: Specifies a fixed width. Negative Values are allowed.
* percentage: relative to the width of the containing block.
* auto: receives a share of the remaining space

### [`margin-top`] (https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top)
sets the margin for the top of the box associated with an element
##### Possible Values:
* length: Specifies a fixed width.
* percentage: relative to the width of the containing block.
* auto: receives a share of the remaining space

### [`margin-right`] (https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right)
sets the margin for the right side of the box associated with an element
##### Possible Values:
* length: Specifies a fixed width. Negative Values are allowed.
* percentage: relative to the width of the containing block.
* auto: receives a share of the remaining space

### [`margin-bottom`] (https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom)
sets the margin for the bottom of the box associated with an element
##### Possible Values:
* length: Specifies a fixed width.
* percentage: relative to the width of the containing block.
* auto: receives a share of the remaining space

### [`padding`] (https://developer.mozilla.org/en-US/docs/Web/CSS/padding)
sets the padding space on all sides of an element. The padding area is the space between the content of the element and its border. Negative values are not allowed.
##### Possible Values:
* Specifies one, two, three or four of the following values: 
   * length: non-negative fixed width
   * percentage: relative to the width of the containing block
      - One value applies to all 4 sides
      - Two values apply to 1. top and bottom and 2. to the left and right side
      - Three values apply to 1. top, 2. right and left and 3. to the bottom side
      - Four values apply to 1. top, 2. right, 3. bottom and 4. to the left side

##### Related properties:
[`padding-bottom`] (https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom)
height of the padding area at the bottom of an element

[`padding-left`] (https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left)
padding space required on the left side of an element

[`padding-right`] (https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right)
padding space required on the right side of an element

[`padding-top`] (https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top)
padding space required on the top of an element

### [`border`] (https://developer.mozilla.org/en-US/docs/Web/CSS/border)
sets the individual border property values in a single place in the style sheet
##### Posible Values:
* br-width: sets border width. default value is medium
* br-style: sets border style. default value is none
* color: color of the border. default value is set to elements value
##### Related Properties:
[`border-bottom`] (https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom)
These properties describe the bottom border of elements

[`border-left`] (https://developer.mozilla.org/en-US/docs/Web/CSS/border-left)
These properties describe the left border of elements

[`border-right`] (https://developer.mozilla.org/en-US/docs/Web/CSS/border-right)
These properties describe the right border of elements

[`border-top`] (https://developer.mozilla.org/en-US/docs/Web/CSS/border-top)
These properties describe the top border of elements

### [`max-height`] (https://developer.mozilla.org/en-US/docs/Web/CSS/max-height)
sets the maximum height of an element
##### Possible Values:
* length: A fixed maximum height
* percentage: relative to the height of the containing block. If the height of the containing block is not specified explicitly, the percentage value is treated as none.
* none: No limit on the height of the box.

### [`min-height`] (https://developer.mozilla.org/en-US/docs/Web/CSS/min-height)
sets the minimum height of a given element
##### Possible Values:
* length: The fixed minimum height. Negative values make the declaration invalid.
* percentage: percentage of containing block's height. Negative values make the declaration invalid.

### [`max-width`] (https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)
sets the maximum width of an element and prevents the width value from getting larger than the mzx-width
##### Possible values:
* none: no max
* length: distance for width
* percentage: percentage of containing block's width

### [`min-width`] (https://developer.mozilla.org/en-US/docs/Web/CSS/min-width)
sets the minimum width of a given element
##### Possible Values:
* length: The fixed minimum width
* percentage: relatvie to the containing block's width. Negative values make the declaration invalid.
* auto: The default minimum size for flex items, providing a more reasonable default than 0 for other layouts.

### [`box-sizing`] (https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
alters the default CSS box model used to calculate widths and heights of elements
##### Possible values:
* content-box: default style - width and height properties are measured including only the content, but not the padding, border or margin
* border-box: width and height properties include the padding and border, but not the margin 

### [`font`] (https://developer.mozilla.org/en-US/docs/Web/CSS/font)
either a shorthand property for setting font-style, font-variant, font-weight, font-size, line-height and font-family, or a way to set the element's font to a system font, using specific keywords
##### Possible Values:
* font-style - see below
* font-variant - see below
* font-weight - see below
* font-size - see below
* line-height - see below
* font-family - see below

### [`font-style`] (https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)
 lets you select italic or oblique faces within a font-family
##### Possible Values:
* normal - Selects a font that is classified as normal within a font-family
* italic - Selects a font that is labeled italic, if that is not available, one labeled oblique
* oblique - Selects a font that is labeled oblique

### [`font-variant`] (https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant)
shorthand for the longhand properties: font-variant-caps, font-variant-numeric, font-variant-alternates, font-variant-ligatures, and font-variant-east-asian. 
##### Possible Values:
* normal - normal font face
* none 

### [`font-weight`] (https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
sets the boldness of the font
##### Possible Values:
* normal - Same as 400
* bold - Same as 700
* lighter - One weight lighter than the parent element
* bolder - One weight darker than the parent element
* 100, 200, 300, 400, 500, 600, 700, 800, 900 - for fonts that provide more than just normal and bold.

### [`font-size`] (https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)
specifies the size of the font
##### Possible Values:
* xx-small, x-small, small, medium, large, x-large, xx-large
* larger, smaller - relative to the parent element's font size
* length - a positive length
* percentage - a positive percentage of the parent element's font size

### [`font-family`] (https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)
prioritized list of font family names 
##### Possible Values:
* family-name - name of a font family
* generic-name - fallback fonts
* serif - Glyphs have finishing strokes, flared or tapering ends, or have actual serifed endings.
* sans-serif - Glyphs have stroke endings that are plain.
* monospace - All glyphs have the same fixed width.
* cursive - Glyphs in cursive fonts generally have either joining strokes or other cursive characteristics beyond those of italic typefaces
* fantasy - Fantasy fonts are primarily decorative fonts that contain playful representations of characters.

### [`text-align`] (https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
describes how inline content like text is aligned in its parent block element
##### Possible Values:
* left - aligned to the left edge of the line box
* right - aligned to the right edge of the line box
* center - centered within the line box
* justify - The text is justified.
* justify-all - forces the last line to be justified in addition to justify

### [`text-decoration`] (https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)
sets the text formatting to underline, overline, line-through or blink. 
##### Possible Values:
* underline
* overline
* line-through
* blink
* none

### [`text-indent`] (https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent)
specifies how much horizontal space should be left before the beginning of the first line of the text content of an element
##### Possible Values:
* length - absolute length. Negative values are allowed.
* percentage - indentation is a percentage of the containing block width

### [`text-rendering`] (https://developer.mozilla.org/en-US/docs/Web/CSS/text-rendering)
provides information to the rendering engine about what to optimize for when rendering text
##### Possible Values:
* auto - browser makes educated guesses about when to optimize for speed, legibility, and geometric precision while drawing text.
* optimizeSpeed - browser emphasizes rendering speed over legibility and geometric precision when drawing text
* optimizeLegibility - browser emphasizes legibility over rendering speed and geometric precision
* geometricPrecision - browser emphasizes geometric precision over rendering speed and legibility.

### [`line-break`] (https://developer.mozilla.org/en-US/docs/Web/CSS/line-break)
used to specify how (or if) to break lines
##### Possible Values:
* auto - break text using the default line break rule
* loose - break text using the line break rule that the line is shorter like a newspaper
* normal - break text using the common line break rule
* strict - break text using the stringent line break rule

### [`line-height`] (https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
specifies the minimum height of line boxes within the element
##### Possible Values:
* normal - a default value of roughly 1.2, depending on the element's font-family
* number - unitless number multiplied by the element's font size
* length - used in the calculation of the line box height
* percentage - relative to the font size of the element itself


-----------------------------
## Future property entries

### [`float`] (https://developer.mozilla.org/en-US/docs/Web/CSS/float)

### [`clear`] (https://developer.mozilla.org/en-US/docs/Web/CSS/clear)

### [`vertical-align`] (https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align)

### [`column-count`] (https://developer.mozilla.org/en-US/docs/Web/CSS/column-count)

### [`column-gap`] (https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap)

### [`flex`] (https://developer.mozilla.org/en-US/docs/Web/CSS/flex)




