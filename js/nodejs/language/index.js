const franc = require("franc");
const langs = require("langs");
const colors = require("colors");

const input = process.argv[2];
const langCode = franc(input);
const language = langs.where("3", langCode);

if (langCode === "und") {
  console.log(
    "Could not match a language. Please try again with a large sample".brightRed
  );
} else {
  console.log(language.name.brightGreen);
}
