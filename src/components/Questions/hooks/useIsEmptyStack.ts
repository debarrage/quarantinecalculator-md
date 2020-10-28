import { useSelector } from "react-redux";
import { IApplicationState } from "../../../store/state";

export function useIsEmptyStack() : boolean{
    const stack = useSelector<IApplicationState, number>(s => s.flow.stack.length);
    return stack === 0;
}
