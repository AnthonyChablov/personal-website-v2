import create from 'zustand';

type State={
   toggleSideBar: boolean
}

type Action={
    setToggleSideBar: Function
}

export const useStateStore = create<State & Action>((set)=>({
    toggleSideBar: false,
    setToggleSideBar: ( newToggleSideBar : boolean ) => set({ toggleSideBar : newToggleSideBar }),
}))