import { useContext } from "react"; 
import { StatusContext } from "../hoc/StatusProvider";

export function useStatus() {
    return useContext(StatusContext)
}