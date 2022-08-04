import React from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import "./new.scss";  
import {useState} from 'react';
const New = ({inputs, title}) => {
    const [file, setFile] = useState("")
    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file) : "https://thumbs.dreamstime.com/z/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg"} alt=""/>
                    </div>
                    <div className="right"> 
                        <form>
                            <div className="formInput">
                                    <label htmlFor="file">Image: <DriveFolderUploadIcon className="icon"/> </label>
                                    <input type="file" id="file" onChange={(e) =>setFile(e.target.files[0])}
                                     style={{display:"none"}} />
                            </div>
                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder}></input>
                                </div>
                            )
                            )}
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New

/* 
ret
<div className="datatable">
        
        </div>
        <div className="formInput">
                                <label>Username</label>
                                <input type="text" placeholder="username"/>
                            </div>
                            <div className="formInput">
                                <label>Name</label>
                                <input type="text" placeholder="name"/>
                            </div>
                            <div className="formInput">
                                <label>Email</label>
                                <input type="email" placeholder="example@gmail.com"/>
                            </div>
                            <div className="formInput">
                                <label>Phonenumber</label>
                                <input type="text" placeholder="+251 923 668 881 "/>
                            </div>
                            <div className="formInput">
                                <label>Passport</label>
                                <input type="passport" />
                            </div>
                            <div className="formInput">
                                <label>Address</label>
                                <input type="text" placeholder="4 Kilo Addis Ababa"/>
                            </div>
                            <div className="formInput">
                                <label>Country</label>
                                <input type="text" placeholder="country"/>
                            </div>
*/