import React, { useCallback, useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsersDataRequested, getOneUserCommentRequested, postDataRequested } from './actions';
import { SHOW_ALL_USERS, SHOW_ONE_USER_COMMENT, SHOW_POST_DATA } from './actionTypes';


const SagaAppln = () => {
    const dispatch = useDispatch();
    const oneUserCommentReducerStateData = useSelector((state) => state.getOneUserCommentReducer.users.data);
    console.log(oneUserCommentReducerStateData, 'counterReducerState');


    const allUserReducerState = useSelector((state) => state.getallUserReducer.users.data);
    console.log(allUserReducerState, 'allUserReducerState');

    const postUserReducerState = useSelector((state) => state.postOneDataReducer.users.data);
    console.log(allUserReducerState, 'allUserReducerState');

    const [show, setShow] = useState('')
    console.log(show, 'show');
    let ref = useRef();
    // useEffect(() => {
    //     dispatch(getOneUserCommentRequested(1));
    // }, [dispatch]);
    const drawStack = useCallback(
        (drawingMode) => {
            switch (drawingMode) {
                case SHOW_ALL_USERS:
                    console.log(drawingMode, 'drawingMode1');
                    setShow(allUserReducerState)
                    ref.current = allUserReducerState;
                    break;
                case SHOW_ONE_USER_COMMENT:
                    console.log(drawingMode, 'drawingMode1');
                    setShow(oneUserCommentReducerStateData)
                    ref.current = oneUserCommentReducerStateData;
                    break;
                case SHOW_POST_DATA:
                    console.log(drawingMode, 'drawingMode1');
                    setShow(postUserReducerState)
                    ref.current = postUserReducerState;
                    break
                default:
                    return null;
            }
        },
        [allUserReducerState, oneUserCommentReducerStateData, postUserReducerState]
    );

    const getOneUserData = useCallback(async (id) => {
        await dispatch(getOneUserCommentRequested(1));
        await drawStack(SHOW_ONE_USER_COMMENT)
    }, [dispatch, drawStack]);


    const getTotalUsersData = useCallback(() => {
        dispatch(getAllUsersDataRequested())
        drawStack(SHOW_ALL_USERS)
    }, [dispatch, drawStack])

    //  const data = {
    //     "userId": 101111,
    //     "id": 2566,
    //     "title": "sunt aut facere occaecati excepturi optio",
    //     "body": "quia et susci"
    // }
    const postOneData = useCallback(() => {
        dispatch(postDataRequested())
        drawStack(SHOW_POST_DATA)
    }, [dispatch, drawStack])

    return (
        <div>
            <button onClick={() => getOneUserData(1)}>getOneUserData</button>
            <button onClick={getTotalUsersData}>getTotalUserData</button>
            <button onClick={postOneData}>PostData</button>
            <div>
                {show}
            </div>


        </div>
    )
}

export default SagaAppln



