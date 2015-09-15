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

### [`margin-left`] (https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left)

### [`margin-top`] (https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top)

### [`margin-right`] (https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right)

### [`margin-bottom`] (https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom)

### [`padding`] (https://developer.mozilla.org/en-US/docs/Web/CSS/padding)

### [`padding-bottom`] ()

### [`padding-left`] ()

### [`padding-right`] ()

### [`padding-top`] ()

### [`border`] ()
expand on the border-* properties

### [`max-height`] ()

### [`min-height`] ()

### [`max-width`] (https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)
sets the maximum width of an element and prevents the width value from getting larger than the mzx-width
##### Possible values:
* none: no max
* length: distance for width
* percentage: percentage of containing block's width

### [`min-width`] ()

### [`box-sizing`] (https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
alters the default CSS box model used to calculate widths and heights of elements
##### Possible values:
* content-box: default style - width and height properties are measured including only the content, but not the padding, border or margin
* border-box: width and height properties include the padding and border, but not the margin 


### Reading CSS

Tonight, focus on the [Box Model properties](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model) as we saw them used in class today. Pay careful attention to `box-sizing` and how it changes the math of the rendering model. You should cover the `margin-*`, `padding-*` and `border-*` properties, the `max-*` and `min-*` properties, and `box-sizing` property, at a minimum. All of these properties accept [a numeric length value](https://developer.mozilla.org/en-US/docs/Web/CSS/length) in [various units](https://developer.mozilla.org/en-US/docs/Web/CSS/length#Units) that you should know about. Also pay special attention to [the caveat about inches and DPI](https://developer.mozilla.org/en-US/docs/Web/CSS/length#CSS_units_and_dots-per-inch). Computers are hard.

* **Reading CSS**
* [ ] `margin-*`
* [ ] `padding-*` 
* [ ] `border-*` 
* [ ] `max-*` 
* [ ] `min-*` 
* [ ] `box-sizing`
* **BEAST MODE** -- pseudo-elements and pseudo-classes, too!



-----------------------------
### Future property entries



### [`float`] (https://developer.mozilla.org/en-US/docs/Web/CSS/float)

### [`clear`] (https://developer.mozilla.org/en-US/docs/Web/CSS/clear)

### [`vertical-align`] (https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align)

### [`column-count`] (https://developer.mozilla.org/en-US/docs/Web/CSS/column-count)

### [`column-gap`] (https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap)

### [`flex`] (https://developer.mozilla.org/en-US/docs/Web/CSS/flex)




