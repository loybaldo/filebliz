# Index SCSS Custom Library Definitions
These are the custom `@mixin` library for scss in this project created along the way.
`@mixin` values can still be manipulated if there are any attributes declared that targets `@include` with the following import identifier.

See more on [SASS Tutorials](https://sass-lang.com/documentation/at-rules/mixin)


# Syntax & Usage
For **Custom Mixins**
### absolute-pos
```CSS
/* from index.scss */
@mixin absolute-pos

/* Usage */
element {
    @include absolute-pos(var, var, var, var);
}
```
- contains CSS positioning variables for
    - top
    - left
    - bottom
    - right

### focus-style
```CSS
/* from index.scss */
@mixin focus-style

/* Usage */
element {
    @include focus-style
}
```
- Used for Accessibility
- will mostly affect elements that contains **tab-index** or any **anchor tags**/**buttons** unless used on another element

### no-select
```CSS
/* from index.scss */
@mixin no-select

/* Usage */
element {
    @include no-select;
}
```
- Disables text selection with added compatibility for all browsers

### shadow
```CSS
/* from index.scss */
@mixin shadow

/* Usage */
element {
    @include shadow;
}
```
- adds a `box-shadow` preset with added compatibility for all browsers

### flex-center
```CSS
/* from index.scss */
@mixin flex-center

/* Usage */
element {
    @include flex-center;
}
```
- includes 	`display: flex;`, ` align-items: center;`, ` justify-content: center;` in one line of CSS code
- can still be manipulated externally by typing the following attributes and setting their values to `unset`

### wh, min-wh, max-wh
```CSS
/* from index.scss */
@mixin wh
@mixin min-wh
@mixin max-wh

/* Usage */
element {
    @include wh(var-width, var-height);
    @include min-wh(var-width, var-height);
    @include max-wh(var-width, var-height);
}

/* Example */
div {
    @include wh(100%, 100vh);
}
```
- sets values for both `width` & `height` attributes
- can be manipulated or disabled with `0`, and `unset` externally

### marPad
```CSS
/* from index.scss */
@mixin marPad

/* Usage */
element {
    @include marPad(var-margin, var-padding);
}
```
- sets values for both `margin` & `padding` attributes
- can be manipulated or disabled with `0`, and `unset` externally


# Syntax & Usage
For **@mixin Components**

### card
```CSS
/* from index.scss */
@mixin card

/* Usage */
element {
    @include card;
}
```
- creates a style preset for a card component
- values can be manipulated/overwritten

### anchor-button
```CSS
/* from index.scss */
@mixin anchor-button

/* Usage */
element {
    @include anchor-button;
}
```
- creates a style preset for a button component
- values can be manipulated/overwritten
