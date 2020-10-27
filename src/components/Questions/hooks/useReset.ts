import { useDispatch } from "react-redux";
import { resetAction } from "../../../store/actions";

export function useReset(): () => void {
    const dispatch = useDispatch();
    return () => dispatch(resetAction());
}
