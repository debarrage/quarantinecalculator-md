import { designations, IDesignation, INITIAL_QUESTION_ID, INVALID_QUESTION_ID, IQuestion, isDayQuestion, isNextQuestion, isRelayQuestion, isYesNoQuestion, QuestionId, QuestionResultTypes, questions } from "..";

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

export function findInitialQuestion() {
    return findQuestion(INITIAL_QUESTION_ID);
}

/**
 * Find the next question id
 * @param current 
 * @param result 
 */
export function findNextQuestionId(current: IQuestion, result: QuestionResultTypes) {
    if(isYesNoQuestion(current) || isRelayQuestion(current)) {
        return result ? current.targets.yes : current.targets.no;
    } else if(current && (isNextQuestion(current) || isDayQuestion(current))) {
        return current.targets.next;
    } 
    
    return INVALID_QUESTION_ID;
}

/**
 * Find the next question in the tree
 * @param question 
 * @param result 
 */
export function findNextQuestion(question: IQuestion, result: QuestionResultTypes) {
    return findQuestion(findNextQuestionId(question, result));
}
