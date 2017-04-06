# Node translation demo

## Overview

The package `i18n` provides the framework to support translations in your programs. This is just a basic sample to show how it could be used in a command line program - using it in a web server (express) scenario would be somewhat different as it appears to pick up the locale from the browser request. [Read more](https://github.com/mashpie/i18n-node/blob/master/README.md) on the official documentation.

Basically, you register the folder where translations are placed, and a JSON file is added for each of the registered locales that your application support. Here I have specified I support: en, en-AU, and fr. So I end up with a respective JSON file in the locales folder.

This basic example is set up just to output the greeting for each translation.

## Usage

To try this program out:

```
git clone https://github.com/tschf/node-translation-demo
cd node-translation-demo
npm i
node index.js
```

Which should produce the following output:

```
Greeting in en is Hello
Greeting in en-AU is G'day
Greeting in fr is Bonjour
```

## Author

Trent Schafer

## License

The Unlicense
