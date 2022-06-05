import React, { useState } from "react";

import {
    Grid,
    makeStyles,
    Card,
    CardContent,
    MenuItem,
    InputLabel,
    Select,
    CardActions,
    CardHeader,
    FormControl,
    TextField,
} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";

import red from "@material-ui/core/colors/red";
import pink from "@material-ui/core/colors/pink";
import blue from "@material-ui/core/colors/blue";

import Icon from "@material-ui/core/Icon";
import PageviewIcon from "@material-ui/icons/Pageview";
import SearchIcon from "@material-ui/icons/Search";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import CollectionsIcon from "@material-ui/icons/Collections";

import Typography from "@material-ui/core/Typography";
import Popover from "@material-ui/core/Popover";

// Search
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import ReplayIcon from "@material-ui/icons/Replay";
import FileUploader from "../fileUploader/fileUploader";
const useStyle = makeStyles((theme) => ({
    padding: {
        padding: theme.spacing(3),
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: "none",
    },
    secondaryButton: {
        color: "gray",
        margin: 10,
    },

    searchRoot: {
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
    },
    searchInput: {
        marginLeft: 8,
        flex: 1,
    },
    searchIconButton: {
        padding: 10,
    },
    searchDivider: {
        width: 1,
        height: 28,
        margin: 4,
    },
}));
const Form = (props) => {
    const { buttonSubmit } = props;
    const imageGallery = [
        "https://raw.githubusercontent.com/dxyang/StyleTransfer/master/style_imgs/mosaic.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
        "https://raw.githubusercontent.com/ShafeenTejani/fast-style-transfer/master/examples/dora-maar-picasso.jpg",
        "https://pbs.twimg.com/profile_images/925531519858257920/IyYLHp-u_400x400.jpg",
        "https://raw.githubusercontent.com/ShafeenTejani/fast-style-transfer/master/examples/dog.jpg",
        "http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg",
    ];
    const [dept, setDept] = useState({
        name: "",
        description: "",
    });
    const [selectedFile, setSelectedFile] = useState("");
    console.log(selectedFile, "selexcted file");
    const [anchorEl, setAnchorEl] = useState({
        mainState: "",
    });
    const [showImage, setShowImage] = useState('')
    const classes = useStyle();

    const handleSearchClick = (event) => {
        setAnchorEl({
            mainState: "search",
        });
    };

    const handleGalleryClick = () => {
        setAnchorEl({
            mainState: "gallery",
        });
    };
    const handleUploadClick = (file) => {
        setAnchorEl({
            mainState: "selectFromAll",
        });
        setSelectedFile(file);
        setShowImage(URL.createObjectURL(file))
    };
    const handleAvatarClick = (value) => {
        var filename = value.url.substring(value.url.lastIndexOf("/") + 1);
        console.log(filename);
        // setAnchorEl({
        // mainState: "uploaded",
        //   imageUploaded: true,
        //   selectedFile: value.url,
        //   fileReader: undefined,
        //   filename: filename
        // });
        setSelectedFile(value.url);
    };
    const handleSeachClose = (event) => {
        setAnchorEl({
            mainState: "",
        });
    };
    const renderGalleryState = () => {
        const listItems = imageGallery.map((url) => (
            <div
                onClick={(value) => handleAvatarClick({ url })}
                style={{
                    padding: "5px 5px 5px 5px",
                    cursor: "pointer",
                }}
            >
                <Avatar src={url} />
            </div>
        ));

        return (
            <React.Fragment>
                <Grid>
                    {listItems}
                    <IconButton
                        color="primary"
                        className={classes.secondaryButton}
                        aria-label="Close"
                        onClick={handleSeachClose}
                    >
                        <ReplayIcon />
                    </IconButton>
                </Grid>
            </React.Fragment>
        );
    };
    const handleImageSearch = (url) => {
        // var filename = url.substring(url.lastIndexOf("/") + 1);
        // console.log(filename);
        // this.setState({
        //   mainState: "uploaded",
        //   imageUploaded: true,
        //   selectedFile: url,
        //   fileReader: undefined,
        //   filename: filename
        // });
    };
    const renderSearchState = () => {
        return (
            <Paper className={classes.searchRoot} elevation={1}>
                <InputBase className={classes.searchInput} placeholder="Image URL" />
                <IconButton
                    className={classes.button}
                    aria-label="Search"
                    onClick={handleImageSearch}
                >
                    <SearchIcon />
                </IconButton>
                <Divider className={classes.searchDivider} />
                <IconButton
                    color="primary"
                    className={classes.secondaryButton}
                    aria-label="Close"
                    onClick={handleSeachClose}
                >
                    <CloseIcon />
                </IconButton>
            </Paper>
        );
    };
    const handleChange = (e) => {
        setDept({
            ...dept,
            [e.target.name]: e.target.value
        });
    }
    return (
        <div>
            <Grid container justify="center" spacing={1}>
                <Grid>
                    <Card className={classes.padding}>
                        <CardHeader title="Create Department" />
                        <FormControl>
                            <CardContent>
                                <Grid item container spacing={1} justify="center">
                                    <Grid item xs={12} sm={6} md={6}>
                                        <TextField
                                            label="Dept Name"
                                            variant="outlined"
                                            fullWidth
                                            name="name"
                                            value={dept.name}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6}>
                                        <TextField
                                            label="Dept Description"
                                            variant="outlined"
                                            fullWidth
                                            name="description"
                                            value={dept.description}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Divider />
                                    <Grid item xs={12} sm={6} md={6}>
                                        {anchorEl.mainState === "search" ? renderSearchState() : (
                                            <>
                                                <FileUploader
                                                    onFileSelect={handleUploadClick}
                                                    id="contained-button-file"
                                                    multiple={true}
                                                    className={classes.input}
                                                    accept="image/*"
                                                />

                                                <label htmlFor="contained-button-file">
                                                    <Fab component="span" className={classes.button}>
                                                        <AddPhotoAlternateIcon />
                                                        {/* <img
                                                            style={{ height: '400px', width: '500px' }}
                                                            src='https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png' /> */}
                                                    </Fab>
                                                </label>
                                                <Fab className={classes.button} onClick={handleSearchClick}>
                                                    <SearchIcon />
                                                </Fab>
                                                <Fab
                                                    className={classes.button}
                                                    onClick={handleGalleryClick}
                                                >
                                                    <CollectionsIcon />
                                                </Fab>
                                            </>
                                        )}

                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6}>
                                        <img alt="img" width="100%" src={showImage} />

                                        {anchorEl.mainState === "gallery" && renderGalleryState()}

                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12}>
                                        <Button variant="outlined" size="large" color="primary"
                                            onClick={(e) => buttonSubmit(dept, selectedFile, e)}
                                        >Sumbmit</Button>

                                    </Grid>
                                </Grid>
                            </CardContent>
                        </FormControl>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Form;
