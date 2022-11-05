import { createContext, useReducer } from 'react'

export const SidebarContext = createContext()

export const sidebarReducer = (state, action) => {
    switch(action.category) {
        case 'feed': 
            return {
                active: 'feed',
            }
        case 'notif':
            return {
                active: 'notif',
            }
        case 'search':
            return {
                active: 'search',
            }
        case 'clubs':
            return {
                active: 'clubs',
            }
        default:
            return state
    }
}


export const SidebarProvider = ({children}) => {
    const [state, dispatch] = useReducer(sidebarReducer, {active: 'feed'})
    return (
        <SidebarContext.Provider value={{state, dispatch}}>
            {children}
        </SidebarContext.Provider>
    )
}