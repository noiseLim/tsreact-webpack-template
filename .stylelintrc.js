module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-idiomatic-order',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    // common
    indentation: 2,
    'string-quotes': 'double',
    'declaration-colon-space-before': 'never',
    'declaration-colon-space-after': 'always',
    'declaration-block-trailing-semicolon': 'always',
    // 'declaration-no-important': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'selector-attribute-brackets-space-inside': 'always',
    'selector-attribute-operator-space-before': 'always',
    'selector-attribute-operator-space-after': 'always',
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-before': 'always',
    'selector-combinator-space-after': 'always',
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-parentheses-space-inside': 'always',
    'selector-pseudo-element-case': 'lower',
    'selector-type-case': 'lower',
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': true,
    'font-family-name-quotes': 'always-unless-keyword',
    'color-no-invalid-hex': true,
    'block-no-empty': true,
    'comment-no-empty': true,
    // 'at-rule-no-unknown': true,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['include', 'mixin'],
      },
    ],
    // stylelint-order
    'order/properties-order': [
      [
        {
          groupName: 'dimensions',
          noEmptyLineBetween: true,
          properties: ['height', 'min-height', 'width', 'min-width'],
        },
        {
          groupName: 'position',
          noEmptyLineBetween: true,
          properties: ['display', 'position', 'top', 'right', 'bottom', 'left'],
        },
        {
          groupName: 'indent',
          noEmptyLineBetween: true,
          properties: [
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
          ],
        },
        {
          groupName: 'font',
          noEmptyLineBetween: true,
          properties: ['font-family', 'src', 'font-size', 'font-weight', 'font-style'],
        },
      ],
      {
        unspecified: 'bottom',
      },
    ],
  },
};
