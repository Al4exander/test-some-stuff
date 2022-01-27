import TextCase from "./interface/TextCase";
import {availableCaseTypes} from "../constdata/availableCaseTypes";

const toDifferentCases = (text: string, caseTypes: string[], extraData?: string[]): TextCase[] => {
    const outputData: TextCase[] = caseTypes.reduce<TextCase[]>((accum, caseType) => {
        if(availableCaseTypes[caseType].nonprefix) {
            accum.push(availableCaseTypes[caseType].func(text));
        } else accum.push(...composeExtra(availableCaseTypes[caseType].func(text), extraData));

        return accum;
    }, [])

    return outputData;
}

const composeExtra = (textCase: TextCase, extraData: string[]): TextCase[] => {
    const outputData: TextCase[] = [];
    if(extraData.length === 0) outputData.push(textCase);
    outputData.push(...extraData.map(data => {
        return {
            text: `${textCase.text ? textCase.text : ''}${data}`,
            label: `${textCase.label}[${data}]`
        }
    }));

    return outputData;
}

export default toDifferentCases;
