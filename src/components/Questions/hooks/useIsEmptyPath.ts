import { useSelector } from "react-redux";
import { IApplicationState } from "../../../store/state";

export function useIsEmptyPath() : boolean{
    const stack = useSelector<IApplicationState, number>(s => s.flow.path.length);
    return stack === 0;
}
