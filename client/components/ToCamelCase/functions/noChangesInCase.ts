import TextCase from "./interface/TextCase";

const noChangesInCase = (text: string): TextCase => {
  return {
      text: text.trim(),
      label: 'No changes in case'
  }
}

export default noChangesInCase;
