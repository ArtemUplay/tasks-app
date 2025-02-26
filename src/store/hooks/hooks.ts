import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, TAppDispatch } from 'src/store';

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
