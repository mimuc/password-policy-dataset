/*


This file takes password-policies-germany.json and generates a CSV from it.

Depends on NodeJS, but no other packages.

Usage: node makeCSV.js

 */



const data = require('./password-policies-germany');
const fs = require('fs');
const path = require('path');

const enums = {
  permissions: data.permissionEnum,
  complexity: data.complexityEnum,
  whitelistSymbols: data.allowedSymbols,
  blacklistSymbols: data.forbiddenSymbols
};

const rules = data.passwordRuleObjects;


/**
 *
 * @param obj the enum to search through
 * @param val the value to search the key for
 * @return the name of key or undefined.
 */
function resolveEnum(obj, val) {
  for (let k in obj) {
    if (obj.hasOwnProperty(k) && obj[k] == val) {
      return k;
    }
  }
  return undefined;
}

let mapToStrings = function(array) {
  return array.map((x) => {
    return '"' + x + '"';
  });
};

let csvString = '';
let columns = ['url', 'minLength', 'maxLength', 'lowercase', 'uppercase', 'digits', 'symbols', 'unicode', 'complexity', 'dictionaryCheck', 'allowedSymbols', 'forbiddenSymbols'];
columns = mapToStrings(columns);

csvString += columns.join(',') + "\n";

rules.forEach((site) => {
  let url = site.url;
  let rules = site.passwordRules;
  let minLength = rules.minimalLength;
  let maxLength = rules.maximalLength;
  let lowercase = resolveEnum(enums.permissions, rules.lowercaseLetters);
  let uppercase = resolveEnum(enums.permissions, rules.uppercaseLetters);
  let digits = resolveEnum(enums.permissions, rules.numerals);
  let symbols = resolveEnum(enums.permissions, rules.nonAlphanumeric);
  let unicode = resolveEnum(enums.permissions, rules.unicodeCharacters);
  let complexity = rules.complexity;
  let dictionaryCheck = rules.dictionaryCheck === 'yes' ? 'Y' : 'N';
  let allowedSymbols = rules.allowedSymbols;
  let forbiddenSymbols = rules.forbiddenSymbols;

  let row = [url, minLength, maxLength, lowercase, uppercase, digits, symbols, unicode, complexity, dictionaryCheck, allowedSymbols, forbiddenSymbols];
  row = mapToStrings(row);

  csvString += row.join(',') + '\n';
});

const fileName = 'password-policies-germany.csv';
const outputPath = path.join(__dirname, fileName);
try {
  fs.writeFileSync(outputPath, csvString);
  console.log('successfully created file ' + outputPath);
} catch (e) {
  console.error('could not write file ' + outputPath);
}

