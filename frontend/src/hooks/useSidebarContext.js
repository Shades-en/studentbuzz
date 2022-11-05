import { SidebarContext } from "../contexts/sidebarContext";
import { useContext } from "react";

export const useSidebarContext = () => {
    const context = useContext(SidebarContext);
    if(!context) {
        throw Error('useSidebarContext must be used inside a SidebarProvider')
    }
    return context;
}