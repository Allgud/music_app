import { useContext } from "react";
import { HandleBarContext } from "../providers/HandleBarProvider";

export const useHandleBar = () => {
    return useContext(HandleBarContext)
}