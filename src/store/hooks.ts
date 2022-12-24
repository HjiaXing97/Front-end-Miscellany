import store from "src/store/index";
import type { TypedUseSelectorHook } from "react-redux";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

type RootStat = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootStat> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppShallowEqual = shallowEqual;
