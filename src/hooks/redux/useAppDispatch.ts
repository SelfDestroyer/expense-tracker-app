import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../types/redux/reduxTypes';

export const useAppDispatch = () => useDispatch<AppDispatch>();
