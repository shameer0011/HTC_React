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
        () => {
            switch (show) {
                case SHOW_ALL_USERS:
                    console.log(show, 'drawingMode1');
                    return allUserReducerState
                case SHOW_ONE_USER_COMMENT:
                    console.log(show, 'drawingMode1');
                    return oneUserCommentReducerStateData
                case SHOW_POST_DATA:
                    return postUserReducerState
                default:
                    return null;
            }
        },
        [show, allUserReducerState, oneUserCommentReducerStateData, postUserReducerState]
    );

    const getOneUserData = useCallback((id) => {
        dispatch(getOneUserCommentRequested(1));
        setShow(SHOW_ONE_USER_COMMENT)
    }, [dispatch, drawStack]);


    const getTotalUsersData = useCallback(() => {
        dispatch(getAllUsersDataRequested())
        setShow(SHOW_ALL_USERS)
    }, [dispatch, drawStack])

    //  const data = {
    //     "userId": 101111,
    //     "id": 2566,
    //     "title": "sunt aut facere occaecati excepturi optio",
    //     "body": "quia et susci"
    // }
    const postOneData = useCallback(() => {
        dispatch(postDataRequested())
        setShow(SHOW_POST_DATA)
    }, [dispatch, drawStack])

    return (
        <div>
            <button onClick={() => getOneUserData(1)}>getOneUserData</button>
            <button onClick={getTotalUsersData}>getTotalUserData</button>
            <button onClick={postOneData}>PostData</button>
            <div>
                <prev>
                    {JSON.stringify(drawStack(show), null, 4)}
                </prev>
            </div>


        </div>
    )
}

export default SagaAppln



