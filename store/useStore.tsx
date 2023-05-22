import create from 'zustand';

type State={
   toggleSideBar: boolean,
   windowWidth: number,
   theme: string
}

type Action={
    setToggleSideBar: Function,
    setWindowWidth: Function,
    setTheme: Function
}

export const useStateStore = create<State & Action>((set)=>({
    toggleSideBar: false,
    windowWidth: 0,
    theme: 'dark',
    setTheme: ( newTheme : string ) => set({ theme : newTheme }),
    setToggleSideBar: ( newToggleSideBar : boolean ) => set({ toggleSideBar : newToggleSideBar }),
    setWindowWidth: ( newWindowWidth : number ) => set({ windowWidth : newWindowWidth})
}))