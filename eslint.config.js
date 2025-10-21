import js from '@eslint/js';
import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';
import pluginTypeScript from '@typescript-eslint/eslint-plugin';
import parserTypeScript from '@typescript-eslint/parser';
import parserVue from 'vue-eslint-parser';
import pluginImport from 'eslint-plugin-import';
import stylistic from '@stylistic/eslint-plugin';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const compat = new FlatCompat({
  baseDirectory: dirname,
  recommendedConfig: js.configs.recommended
});

export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  ...compat.extends(
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier'
  ),
  // Ignore patterns (en del er migreret fra .eslintignore)
  {
    ignores: [
      '**/*.min.js',
      '**/__mocks__/axios.js',
      '**/test-silence-console.js',
      '**/helpers.js',
      '**/mocks.js',
      '**/silent-renew-oidc.js',
      '**/tinymce/**',
      'vite.config.ts',
      'script/**/*',
      '**/*.md',
      'dist/**/*',
      'build/**/*',
      'node_modules/**/*',
      '.history/**/*',
      'tmp/**/*',
      'coverage/**/*'
    ]
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es6
      },
      parser: parserVue,
      parserOptions: {
        parser: parserTypeScript,
        project: ['./tsconfig.json'],
        sourceType: 'module',
        extraFileExtensions: ['.vue']
      }
    },
    plugins: {
      vue: pluginVue,
      '@typescript-eslint': pluginTypeScript,
      import: pluginImport,
      '@stylistic': stylistic
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts']
      },
      'import/resolver': {
        node: {
          extensions: ['.js']
        },
        typescript: {
          alwaysTryTypes: true
        }
      },
      'import/core-modules': ['dkfds']
    },
    rules: {
      '@stylistic/type-annotation-spacing': 'warn',
      '@stylistic/semi': ['warn', 'always'],
      '@stylistic/quotes': ['warn', 'single', { avoidEscape: true }],
      '@stylistic/member-delimiter-style': [
        'warn',
        {
          multiline: {
            delimiter: 'semi',
            requireLast: true
          },
          singleline: {
            delimiter: 'semi',
            requireLast: false
          }
        }
      ],
      '@typescript-eslint/no-this-alias': 'warn',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      'vue/custom-event-name-casing': 'off',
      '@typescript-eslint/restrict-plus-operands': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      'vue/one-component-per-file': 'off',
      'vue/multi-word-component-names': 'off',
      'import/no-unresolved': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/adjacent-overload-signatures': 'warn',
      '@typescript-eslint/array-type': 'warn',
      '@typescript-eslint/no-empty-object-type': 'error',
      '@typescript-eslint/no-unsafe-function-type': 'error',
      '@typescript-eslint/no-wrapper-object-types': 'error',
      '@typescript-eslint/no-restricted-types': 'error',
      '@typescript-eslint/consistent-type-assertions': 'warn',
      'no-unsafe-optional-chaining': 'error',
      '@typescript-eslint/consistent-type-definitions': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/prefer-regexp-exec': 'off',
      '@typescript-eslint/explicit-member-accessibility': [
        'off',
        {
          accessibility: 'explicit'
        }
      ],

      '@typescript-eslint/no-unsafe-enum-comparison': 'off',
      'vue/no-reserved-component-names': 'warn',
      '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
      '@typescript-eslint/no-duplicate-enum-values': 'warn',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/member-ordering': 'off',
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-empty-interface': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-misused-new': 'warn',
      '@typescript-eslint/no-namespace': 'warn',
      '@typescript-eslint/no-parameter-properties': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/prefer-for-of': 'warn',
      '@typescript-eslint/prefer-function-type': 'warn',
      '@typescript-eslint/prefer-namespace-keyword': 'warn',
      '@typescript-eslint/triple-slash-reference': 'warn',
      '@typescript-eslint/unified-signatures': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
      'arrow-body-style': 'warn',
      'arrow-parens': ['off', 'as-needed'],
      camelcase: 'warn',
      'comma-dangle': 'off',
      complexity: 'off',
      'constructor-super': 'warn',
      curly: 'warn',
      'dot-notation': 'warn',
      'eol-last': 'warn',
      eqeqeq: ['warn', 'smart'],
      'guard-for-in': 'off',
      'id-blacklist': ['warn', 'any', 'Number', 'number', 'String', 'string', 'Boolean', 'boolean'],
      'id-match': 'warn',
      'import/order': 'off',
      'max-classes-per-file': ['warn', 1],
      'max-len': 'off',
      'new-parens': 'warn',
      'no-bitwise': 'warn',
      'no-caller': 'warn',
      'no-cond-assign': 'warn',
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-empty': 'warn',
      'no-eval': 'warn',
      'no-fallthrough': 'off',
      'no-invalid-this': 'off',
      'no-multiple-empty-lines': 'off',
      'no-new-wrappers': 'warn',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ['error'],
      'no-throw-literal': 'warn',
      'no-trailing-spaces': 'warn',
      'no-undef-init': 'warn',
      'no-underscore-dangle': 'warn',
      'no-unsafe-finally': 'warn',
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': 'warn',
      'no-unused-labels': 'warn',
      'no-var': 'warn',
      'object-shorthand': 'off',
      'one-var': ['warn', 'never'],
      'prefer-arrow/prefer-arrow-functions': 'off',
      'prefer-const': 'warn',
      'quote-props': ['warn', 'as-needed'],
      'no-case-declarations': 'off',
      'import/no-named-as-default': 'off',
      radix: 'warn',
      'space-before-function-paren': [
        'warn',
        {
          anonymous: 'always',
          asyncArrow: 'always',
          named: 'never'
        }
      ],
      'spaced-comment': 'warn',
      'use-isnan': 'warn',
      'valid-typeof': 'off',
      'vue/html-button-has-type': [
        'warn',
        {
          button: true,
          submit: true,
          reset: true
        }
      ]
    }
  }
];
