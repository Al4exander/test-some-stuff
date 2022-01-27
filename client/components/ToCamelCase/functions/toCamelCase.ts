import TextCase from "./interface/TextCase";

const toCamelCase = (inputText: string): TextCase => {
  const text: string = inputText
      .trim()
      .split(/[^a-zA-Zа-яА-Я]/)
      .filter(el => el)
      .map((text, index) => `${index > 0 ? text[0].toUpperCase() : text[0].toLocaleLowerCase()}${text.replace(text[0], '').toLocaleLowerCase()}`)
      .join('');
  return {
      text,
      label: 'Camel case'
  }
}

export default toCamelCase;
