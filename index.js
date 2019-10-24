"use strict";

module.exports = {
  "plugins": [
    "stylelint-scss",
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-high-performance-animation",
    "stylelint-mixin-extend-usage",
    "stylelint-no-undoing-styles",
    "stylelint-nesting-depth"
  ],
  "rules": {

    // syntax
    "selector-type-no-unknown": true,
    "selector-pseudo-element-no-unknown": true,
    "selector-pseudo-class-no-unknown": true,
    "no-unknown-animations": true,
    
    // specificity
    "no-descending-specificity": true,
    "max-nesting-depth": 3,
    "selector-max-id": 1,
    "selector-max-type": 1,
    "selector-max-class": 2,
    "selector-max-compound-selectors": 3,
    "selector-no-qualifying-type": 1,
    "shorthand-property-no-redundant-values": true,
    
    // stylistic
    "scss/at-extend-no-missing-placeholder": true,
    "length-zero-no-unit": true,    
    
    // performance
    "plugin/no-low-performance-animation-properties": true,
    "plugin/declaration-block-no-ignored-properties": true,
    "plugin/no-undoing-styles": true,
    "selector-attribute-operator-blacklist": ["*="],    
    "block-no-empty": true,    
    
    // duplications
    "scss/selector-no-redundant-nesting-selector": true,
    "no-duplicate-selectors": true,
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,

    "plugin/mixin-extend-usage": true,
    "plugin/report-nesting-depth": true
  }
}