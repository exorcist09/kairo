import {create} from "zustand";

const useNewTitle =create((set)=>({
    selectedTitle:"",
    setSelectedTitle :(title)=>set({selectedTitle:title}),
    clearSelectedTitle:()=>set({selectedTitle :""}),
}))

export default useNewTitle;