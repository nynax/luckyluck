import {menuReducer} from "./menuReducer";
import {applyMiddleware, combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import thunkMiddleware, {ThunkAction} from "redux-thunk";


let rootReducer = combineReducers({
    menuReducer: menuReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

//Универсальный тип для Actions Creators
type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionsTypes<T extends {[key: string]: (...args: any[])=>any}> = ReturnType<PropertiesTypes<T>>

// @ts-ignore:
let store = configureStore({reducer: rootReducer}, applyMiddleware(thunkMiddleware))
export default store