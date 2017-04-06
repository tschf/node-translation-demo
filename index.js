const i18n = require("i18n"),
    supportedLocales = ["en", "en-AU", "fr"]

i18n.configure({
    "locales": supportedLocales,
    // "register": global, --set this to avoid referencing i18n when using __
    "directory": __dirname + "/locales"
});

for(let i = 0;i < supportedLocales.length; i++){
    i18n.setLocale(supportedLocales[i]);
    let greeting = i18n.__("Hello");
    console.log(`Greeting in ${supportedLocales[i]} is ${greeting}`);
}
