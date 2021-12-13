let mix = require('laravel-mix');

let tailwindcss = require('tailwindcss');
require('laravel-mix-purgecss');

mix
    .sass('src/scss/master.scss', 'css')
    .js('src/js/app.js', 'js')
    .options({
        postCss: [
            tailwindcss('tailwind.js'),
        ]
    });