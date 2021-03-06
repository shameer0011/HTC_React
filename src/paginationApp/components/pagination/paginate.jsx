/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';

import useStyles from './paginateStyle';
import { getPost } from '../../redux/actions/getpost';
const Paginate = ({ page }) => {
    const { numberOfPages } = useSelector((state) => state.data);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        if (page) {
            dispatch(getPost(Number(page)));
        }
    }, [page, dispatch]);

    return (
        <Pagination
            classes={{ ul: classes.ul }} // i have doubt also
            count={numberOfPages}
            page={Number(page)}
            variant="outlined"
            color="primary"
            renderItem={(item) => (
                <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`} />
            )}
        />
    );
};

export default Paginate;