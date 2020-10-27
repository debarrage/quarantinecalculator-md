import { useSelector } from "react-redux";
import { IQuestion } from "../../../core/domain";
import { IApplicationState } from "../../../store/state";

export function useCurrentQuestion(): IQuestion | undefined {
    return useSelector<IApplicationState, IQuestion | undefined>(state => state.flow.current);
}
