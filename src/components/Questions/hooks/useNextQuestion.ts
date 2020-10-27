import { useDispatch } from "react-redux";
import { QuestionId, QuestionResultTypes } from "../../../core/domain";
import { nextQuestionAction } from "../../../store/actions";

type NextQuestion = (id: QuestionId, result?: QuestionResultTypes) => void;

export function useNextQuestions(): NextQuestion {
    const dispatch = useDispatch();
    return (id, result) => {
        dispatch(nextQuestionAction({ id, result }));
    };
}
