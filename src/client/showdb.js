import React from'react';
import Button from '@material-ui/core/Button';
import StorefrontIcon from '@material-ui/icons/Storefront';




const ShowDB = () =>{

    return (
        <Button variant="contained" className="btn-db"> 
        <StorefrontIcon fontSize="large" className="btn-db-icon"></StorefrontIcon>내 냉장고
        </Button>
    );
};

export default ShowDB;