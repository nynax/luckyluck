import {InferActionsTypes} from "./reduxStore";
import {Dispatch} from "redux";

const START_GAME = 'START_GAME'
const GET_MENU = 'GET_MENU'

let initialState = {
    listOfMenu: [
        {key: "coin", gameName: "COIN"},
        {key: "knb", gameName: "KNB"},
        {key: "dice", gameName: "DICE"}
    ]
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

export const menuReducer = (state = initialState, action : ActionsType) : InitialStateType => {
    switch(action.type) {
        case START_GAME:
            console.log('Start game: ' + action.gameName)
            return state
        case GET_MENU:
            console.log('Get menu')
            return state
        default:
            return state
    }
}

const actions = {
    startGameAC: (gameName : string) => ({type: START_GAME, gameName} as const),
    getMenuAC: () => ({type: GET_MENU} as const)
}

export type StartGameType = (gameName: string) => (dispatch: any) => any
export const startGame : StartGameType = (gameName) => (dispatch)  => {
    return dispatch(actions.startGameAC(gameName))
}

export type GetMenuType = () => (dispatch: Dispatch<ActionsType>) => any
export const getMenu : GetMenuType = () => (dispatch)  => {
    return dispatch(actions.getMenuAC())
}