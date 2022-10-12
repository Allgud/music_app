import { useContext } from "react";
import { ServiceContext } from "../providers/ServiceProvider";

export const useService = () => {
    return useContext(ServiceContext)
}