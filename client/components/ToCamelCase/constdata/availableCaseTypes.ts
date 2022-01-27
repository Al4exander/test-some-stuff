import toCamelCase from "../functions/toCamelCase";
import toSnakeCase from "../functions/toSnakeCase";
import noChangesInCase from "../functions/noChangesInCase";
import toItStyle from "../functions/toItStyle";

export const availableCaseTypes = {
    noChangesInCase: {
        label: 'Don\'t change case',
        example: 'The same text as you wrote.',
        func: noChangesInCase,
    },
    toCamelCase: {
        label: 'To camel case',
        func: toCamelCase,
        example: 'yourTextWillBeConvertedToThisTypeOfText'
    },
    toSnakeCase: {
        label: 'To snake case with dot',
        func: toSnakeCase,
        example: 'your.text.will.be.converted.to.this.type.of.text'
    },
    toItStyle: {
        label: 'To it() style',
        func: toItStyle,
        example: `it('[123456] Your text will be like this (case id - C123456)')`,
        nonprefix: true,
    }
}
