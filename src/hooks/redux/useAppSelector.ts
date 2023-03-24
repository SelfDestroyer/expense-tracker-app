import {RootState} from '../../types/redux/reduxTypes';
import {TypedUseSelectorHook, useSelector} from 'react-redux';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
