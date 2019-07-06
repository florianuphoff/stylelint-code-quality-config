"use strict";

module.exports = {
  "plugins": [
    "stylelint-scss",
    "stylelint-high-performance-animation"
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

    "scss/selector-no-redundant-nesting-selector": true,
    "scss/at-extend-no-missing-placeholder": true,

    "plugin/no-low-performance-animation-properties": true

  }
}