import React ,{useState} from 'react';

export default function SaveData(props) {

    const [name,setName] = useState('');
    const [value,setValue] = useState(0);


    insertData(){
        const url = "http://localhost:3002/db/";
        const formData = new FormData();
        formData.append('이름',);
        formData.append('이름',);


    }

};