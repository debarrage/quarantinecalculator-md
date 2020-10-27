import { useDispatch } from "react-redux";
import { previousQuestionAction } from "../../../store/actions";

type PreviousQuestion = () => void;

export function usePreviousQuestion(): PreviousQuestion {
    const dispatch = useDispatch();
    return () => {
        dispatch(previousQuestionAction());
    };
}
