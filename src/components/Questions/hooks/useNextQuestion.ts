import { useDispatch } from "react-redux";
import { QuestionResultTypes } from "../../../core/domain";
import { nextQuestionAction } from "../../../store/actions";

type NextQuestion = (result?: QuestionResultTypes) => void;

export function useNextQuestions(): NextQuestion {
    const dispatch = useDispatch();
    return (result: QuestionResultTypes) => {
        dispatch(nextQuestionAction({ result }));
    };
}
