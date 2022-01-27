import TextCase from "./interface/TextCase";

const toItStyle = (inputText: string): TextCase => {
  const execArray = /C\d+/.exec(inputText);
  const testCaseId = execArray && execArray.length > 0 ? execArray[0] : '';
  const caseIdToDisplay = testCaseId ? `[${testCaseId.replace('C', '')}] ` : '[] ';

  const text = `it('${caseIdToDisplay}${inputText.replace(testCaseId, '').trim()}'`
  return {
      text,
      label: 'It("") style'
  }
}

export default toItStyle;
