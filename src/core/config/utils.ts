import { designations, IDesignation, INITIAL_QUESTION_ID, IQuestion, isDayQuestion, isNextQuestion, isYesNoQuestion, isYesNoRelayQuestion, QuestionId, QuestionResultTypes, questions } from "..";

export function isQuestionId(id: QuestionId): id is QuestionId {
    return !!questions.map(q => q.id).find(i => i === id);
}

export function findQuestion(id: QuestionId): IQuestion {
    const question = questions.find(q => q.id === id);
    if(question) {
        return question;
    }
    throw new Error(`Cannot find question '${id}', check the configuration.`);
}

export function findDesignation(id: QuestionId): IDesignation | undefined {
    return designations.find(d => d.id === id);
}

export const findInitialQuestion = (): IQuestion  => {
    return findQuestion(INITIAL_QUESTION_ID);
};

export const findNextQuestionId = (current: IQuestion, result: QuestionResultTypes) => {
    if(isYesNoQuestion(current) || isYesNoRelayQuestion(current)) {
        return result ? current.targets.yes : current.targets.no;
    } else if(current && (isNextQuestion(current) || isDayQuestion(current))) {
        return current.targets.next;
    } 
    
    return "not-found";
}
