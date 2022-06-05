/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Link, useLocation } from 'react-router-dom';

import useStyles from './style';
import { fetchPostStart } from '../../redux/actions/post/post';
const Paginate = ({ page }) => {
    console.log(page, "page")
    const { numberOfPages } = useSelector((state) => state.post);
    const dispatch = useDispatch();
    const classes = useStyles();
    const location = useLocation();

    useEffect(() => {
        if (page) {
            dispatch((fetchPostStart(Number(page))));
        }
    }, [dispatch, location, page])

    return (
        <Pagination
            classes={{ ul: classes.ul }} // i have doubt also
            count={numberOfPages} //1/2 from backend calculations
            page={Number(page)}  //current page
            variant="outlined"
            color="primary"
            renderItem={(item) => (
                <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`} />
            )}
        />
    );
};

export default Paginate;