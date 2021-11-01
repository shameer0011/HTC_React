import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react'
import { updatePageIndex } from '../../actions/pageAction';
import { updateBreadcumbs } from '../../actions/breadcumbs/addbreadcumb';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs() {

    const dispatch = useDispatch();
    const [breadcumb, setBreadcumb] = useState('');
    console.log(breadcumb, "breadcum,b")
    const b = [];
    useSelector(state => b.push(state.breadcumbReducer))

    const state = useSelector(state => state.breadcumbReducer);


    const changePage = (e, path, index) => {
        console.log(e, path, index, "change page")
        if (path == '/waferlist') {
            dispatch(updatePageIndex(0))
            dispatch(updateBreadcumbs(index))
        }
        if (path == '/waferdetailt') {
            dispatch(updatePageIndex(1))
            dispatch(updateBreadcumbs(index))
        }
        if (path == '/testdetail') {
            dispatch(updatePageIndex(2))
            dispatch(updateBreadcumbs(index))
        }
    }

    return (
        <div role="presentation" onClick={handleClick} style={{ display: "flex" }} >
            {state.map((val, i) => {
                return <Breadcrumbs aria-label="breadcrumb"  >
                    <Link underline="hover" color="inherit" href={val.path} onClick={(e) => changePage(e, val.path, i)}>
                        / {val.label}
                    </Link>
                </Breadcrumbs>
            })}

        </ div >
    );
}
