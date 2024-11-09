import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import stylisticJs from '@stylistic/eslint-plugin-js'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

/*
I have no idea what the following below do, all I know is its helpful.
*/
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
})

export default [...compat.extends('next/core-web-vitals'), {
    plugins: { '@stylistic/js': stylisticJs },
    rules: {
        quotes: ['warn', 'single'],
        'jsx-quotes': ['warn', 'prefer-single'],
        'quote-props': ['error', 'as-needed'],
        '@stylistic/js/object-curly-spacing': ['error', 'always', { objectsInObjects: false }]
    }
}]
