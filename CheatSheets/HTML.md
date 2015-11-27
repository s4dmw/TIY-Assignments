# Elements

## [`<html>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html)

represents the root of an HTML document. All other elements must be descendants of this element... except for [`<!DOCTYPE>`](#doctype), for some reason.

* _parents_: none, it's the top
* _content_: One `<head>` element, followed by one `<body>` element.
* _display_: `block`

#### Attributes:
* `class` -- a space-separated list of category names


## [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)

generic container for flow content, which does not inherently represent anything. It can be used to group elements for styling purposes or because they share attribute values. It should be used only when no other semantic element is appropriate.

* _parents_: anything that accepts [Flow Content](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#Flow_content)
* _content_: [flow content](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#Flow_content)
* _display_: `block`

#### Attributes:
* `class` - space-separated list of category names

## [`<!DOCTYPE>`](https://developer.mozilla.org/en-US/docs/Glossary/Doctype)

informs the browser which version of HTML you used to write the document.

* _parents_: none, not a tag
* _content_: HTML version
* _display_: n/a

#### Attributes:
* n/a

## [`<!-- -->`](http://www.w3.org/TR/html5/syntax.html#comments)
This is the wonderful and all important `comment` tag. Wrap these around anything you want to "comment out". Where does one even begin about how important comments are in coding???
[good info about commenting](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/The_Importance_of_Correct_HTML_Commenting
)

## [`<head>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)
provides general information about the document including its title and links to or definitions of scripts and style sheets

* _parents_: `<html>`
* _content_: `<title>` element
* _display_: none

#### Attributes:
* [global attirbutes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)


## [`<body>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body)
represents the content of an HTML document. There can be only one <body> element in a document.

* _parents_: It must be the second element of an <html> element
* _content_: [flow content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content)
* _display_: displays the body/page of the html element

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)

## [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
represents a clickable button

* _parents_: Any element that accepts phrasing content
* _content_: [phrasing content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content)
* _display_: yes

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)

## [`<meta>`](element linky)
represents any metadata information that cannot be represented by one of the other HTML meta-related elements (`<base>`,` <link>`, `<script>`, `<style>` or `<title>`).

* _parents_: `<meta charset>` `<meta http-equiv>` `<noscript>` `<meta name>` `<meta itemprop>`
* _content_: none, empty element
* _display_: none

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)

## [`<title>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title)
defines the title of the document, shown in a browser's title bar or on the page's tab. It can only contain text and any contained tags are not interpreted.

* _parents_: `<head>` element
* _content_: metadata, text
* _display_: displays in the browser's title bar

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)

## [`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)
pecifies relationships between the current document and an external resource

* _parents_: Any element that accepts metadata elements
* _content_: none, it's an empty element
* _display_: none

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)

## [`<span>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span)
generic inline container for phrasing content, which does not inherently represent anything

* _parents_: Any element that accepts phrasing content, or any element that accepts flow content.
* _content_: [phrasing content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content)
* _display_: block

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)


## [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
 represents an unordered/un-numbered list of items. unordered-list items are normally displayed with a bullet

* _parents_: any element that accept flowing content
* _content_: zero or more `<li>` elements, eventually mixed with `<ol>` and `<ul>` elements
* _display_: block

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)


## [`<ol>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)
represents an ordered list of items normally displayed with a preceding numbering

* _parents_: Any element that accepts flow content
* _content_: Zero or more <li> elements
* _display_: block

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)


## [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)
represents an item in a list contained in an ordered list, an unordered list, or a menu

* _parents_: An `<ul>`, `<ol>`, or `<menu>` element
* _content_: [flow content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content)
* _display_: block

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)


## [`<dd>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd)
indicates the description of a term in a description list `<dl>` element occurring only as a child element of a definition list and it must follow a `<dt>` element

* _parents_: After a `<dt>` or a `<dd>` element, inside a `<dl>`
* _content_: [flow content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content)
* _display_: block

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)


## [`<dl>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)
encloses a list of pairs of terms and descriptions used to implement a glossary or to display metadata

* _parents_: Any element that accepts flow content
* _content_: zero or more `<dt>` elements, each followed by one or more `<dd>` elements
* _display_: block

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)


## [`<dt>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt)
identifies a term in a definition list and occurs only as a child element of a `<dl>`

* _parents_: Before a `<dt>` or a `<dd>` element, inside a `<dl>`
* _content_: [flow content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flowing_content)
* _display_: block

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)


## [`<menu>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu)
experimental element that represents a group of commands that a user can perform or activate

* _parents_: Any element that accepts flow content
* _content_: [flow content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content)
* _display_: block

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)


## [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
represents a document section that contains interactive controls to submit information to a web server

* _parents_: Any element that accepts flow content
* _content_: Flow content, but not containing <form> elements
* _display_: block

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)


## [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
used to create interactive controls for web-based forms in order to accept data from the user

* _parents_: Any element that accepts phrasing content
* _content_: None
* _display_: block

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)


## [`<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
represents a caption for an item in a user interface

* _parents_: Any element that accepts phrasing content
* _content_: Phrasing content, but no descendant label elements
* _display_: block

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)


## [`<fieldset>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset)
sed to group several controls as well as labels (<label>) within a web form

* _parents_: Any element that accepts flow content
* _content_: An optional `<legend>` element, followed by flow content
* _display_: block

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)


## [`<legend>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend)
represents a caption for the content of its parent `<fieldset>`

* _parents_: A `<fieldset>` whose first child is this `<legend>` element
* _content_: Phrasing content
* _display_: inline

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)


## [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
represents a control that presents a menu of options

* _parents_: any element that accepts phrasing content
* _content_: Zero or more `<option>` or `<optgroup>` elements
* _display_: block

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)


## [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
represents a multi-line plain-text editing control

* _parents_: any element that accepts phrasing content
* _content_: Character data
* _display_: block

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)


## [`<datalist>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist)
contains a set of `<option>` elements that represent the values available for other controls

* _parents_: Any element that accepts phrasing content
* _content_: Either phrasing content or zero or more `<option>` elements
* _display_: block

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)


## [`<meter>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter)
represents either a scalar value within a known range or a fractional value

* _parents_: Any element that accepts phrasing content
* _content_: Phrasing content, but there must be no `<meter>` element among its descendants
* _display_: block

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)


## [`<optgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup)
creates a grouping of options within a `<select>` element

* _parents_: A `<select>` element
* _content_: Zero or more <option> elements
* _display_: block

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)


## [`<output>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output)
 represents the result of a calculation or user action

* _parents_: Any element that accepts phrasing content
* _content_: Phrasing content.
* _display_: block

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)


## [`<option>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option)
used to create a control representing an item within a `<select>`, an `<optgroup>` or a `<datalist>` element

* _parents_: a `<select>`, an `<optgroup>` or a `<datalist>` element
* _content_: Text with eventually escaped characters
* _display_: inline

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)


## [`<progress>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress)
used to view the completion progress of a task

* _parents_: Any element that accepts phrasing content
* _content_: Phrasing content, but there must be no `<progress>` element among its descendants
* _display_: block

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)


## [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
represents data in two dimensions or more

* _parents_: Any element that accepts flow content
* _content_: caption, colgroup, thead, tfoot, tbody, tr elements
* _display_: block

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)

## [`<caption>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption)
represents the title of a table

* _parents_: `<table>`
* _content_: Flow content
* _display_: inline

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)

## [`<col>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col)
defines a column within a table and is used for defining common semantics on all common cells

* _parents_: '<colgroup>'
* _content_: none
* _display_: none

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)

## [`<colgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup)
defines a group of columns within a table

* _parents_: `<table>`
* _content_: If the span attribute is present: none. If the attribute is not present: zero or more `<col>` elements.
* _display_: none

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)

## [`<tbody>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody)
defines one or more `<tr>`s to be the body of its parent `<table>` element

* _parents_: `<caption>`, `<colgroup>`, `<thead>`, `<tfoot>` elements within a `<table>`
* _content_: Zero or more <tr> elements
* _display_: block

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)

## [`<thead>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead)
defines a set of rows defining the head of the columns of the table

* _parents_: `<table>`
* _content_: `<tr>`
* _display_: block

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)

## [`<tfoot>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot)
defines a set of rows summarizing the columns of the table

* _parents_: `<table>`
* _content_: '<tr>'
* _display_: block

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)

## [`<tr>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr)
defines a row of cells in a table

* _parents_: `<table>` `<thead>` `<tbody>` `<tfoot>`
* _content_: `<td>` `<th>`
* _display_: block

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)

## [`<td>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td)
defines a cell of a table that contains data

* _parents_: `<tr>`
* _content_: flow content
* _display_: block

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)

## [`<th>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th)
defines a cell that is a header for a group of cells of a table

* _parents_: `<tr>`
* _content_: phrasing content
* _display_: block

#### Attributes:
* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)

-------------------------------

# Entry Template

## [`<element>`](link)
description

* _parents_:
* _content_:
* _display_:

#### Attributes:
* attributes go here
