import {createSelector} from "reselect";
import {AppStateType} from "./reduxStore";


const getMenuSelector = (state : AppStateType) => {
    return state.menuReducer.listOfMenu
}

export const getMenu = createSelector(getMenuSelector, (Menu) => {
    return Menu
})


