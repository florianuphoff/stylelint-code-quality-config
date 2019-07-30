"use strict";

module.exports = {
  "plugins": [
    "stylelint-scss",
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-high-performance-animation",
    "stylelint-mixin-extend-usage",
    "stylelint-no-undoing-styles"
  ],
  "rules": {
    "block-no-empty": true,
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "no-descending-specificity": true,
    "no-duplicate-selectors": true,
    "property-blacklist": [],
    "selector-attribute-operator-blacklist": [],
    "selector-max-id": true,
    "selector-max-compound-selectors": 3,
    "max-nesting-depth": 3,
    "selector-pseudo-element-no-unknown": true,
    "selector-pseudo-class-no-unknown": true,
    "selector-type-no-unknown": true,
    "no-unknown-animations": true,

    "scss/selector-no-redundant-nesting-selector": true,
    "scss/at-extend-no-missing-placeholder": true,

    "plugin/no-low-performance-animation-properties": true,

    "plugin/declaration-block-no-ignored-properties": true,

    "plugin/mixin-extend-usage": true,

    "plugin/no-undoing-styles": true
  }
}