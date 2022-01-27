import TextCase from "./interface/TextCase";

const toSnakeCase = (inputText: string): TextCase => {
  const text = inputText
      .trim()
      .toLowerCase()
      .split(/[^a-zA-Zа-яА-Я]/)
      .filter(el => el).join('.');
  return {
      text,
      label: 'Snake case'
  }
}

export default toSnakeCase;
