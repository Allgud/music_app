import { useContext } from "react";
import { TracksContext } from "../providers/TracksProvider";

export const useTracks = () => useContext(TracksContext)