import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState, AppDispatch } from './store';
import { useDispatch } from 'react-redux';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch;