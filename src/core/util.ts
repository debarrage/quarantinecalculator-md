import { INITIAL_QUESTION_ID, questions } from "./config";
import { Question, QuestionId } from "./domain";

export const getQuestionById = (id: QuestionId): Question => {
    const question = questions.find(q => q.id === id);
    if(question) {
        return question;
    } else {
        throw new Error(`Cannot find question with id ${id}`);
    }
};

export const getInitialQuestion = (): Question  => {
    return getQuestionById(INITIAL_QUESTION_ID);
};
