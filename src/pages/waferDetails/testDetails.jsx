import React, { useRef, useEffect } from 'react'
import Container from '../container/index'
import { withStyles } from '@mui/styles';

const styles = {
    root: {
        backgroundColor: "red"
    },
    root1: {
        backgroundColor: 'blue'
    }
};

const TestDetail = (props) => {
    const { classes } = props;
    const countRef = useRef(0);
    const ref = useRef(null);


    const onClick = () => {
        const span = ref.current; // corresponding DOM node
        span.className = classes.root;

    };
    return (
        <div>
            Test details
            <span ref={ref} id="test-id" className={classes.root1}>
                The Quick Brown Fox.

            </span>
            <button onClick={onClick}>Hide</button>


        </div>
    )
}
export default withStyles(styles)(TestDetail);
