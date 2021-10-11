import { useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllBoards } from '../../store/boards';


export const Profile = () => {

    const dispatch = useDispatch();

    const allBoardsObj = useSelector(state => {
        return state.boards
    })

    useEffect(() => {
        dispatch(getAllBoards())
    }, [dispatch])

    return null
}
