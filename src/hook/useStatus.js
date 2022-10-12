import { useContext } from "react"; 
import { StatusContext } from "../providers/StatusProvider";

export function useStatus() {
    return useContext(StatusContext)
}