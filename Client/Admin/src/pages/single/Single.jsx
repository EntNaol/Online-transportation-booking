import React from 'react';
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
//import List from "../../components/table/Table";
const Single = () => {
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">
                            Administrator Information </h1>
                            <div className="item">
                                <img src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png" alt="" className="itemImg"/>
                                <div className="details">
                                    <h1 className="itemTitle">John Doe</h1>
                                    <div className="detailItem">
                                        <span className="itemKey">Email:</span>
                                        <span className="itemValue">johndoe@gmial.com</span>
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Phone:</span>
                                        <span className="itemValue">+251 900 77 66</span>
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Address:</span>
                                        <span className="itemValue"> 4 kilo, Addis Ababa</span>
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Country:</span>
                                        <span className="itemValue">Ethiopia</span>
                                    </div>
                                </div>
                            </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Single
/*
 <div className="bottom">
                    <h1 className="title">Driver Report</h1>
                    <List />
                </div>
<div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">
                            Driver Information </h1>
                            <div className="item">
                                <img src="https://wallpapercave.com/wp/wp10516459.jpg" alt="" className="itemImg"/>
                                <div className="details">
                                    <h1 className="itemTitle">John Doe</h1>
                                    <div className="detailItem">
                                        <span className="itemKey">Email:</span>
                                        <span className="itemValue">johndoe@gmial.com</span>
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Phone:</span>
                                        <span className="itemValue">+251 900 77 66</span>
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Address:</span>
                                        <span className="itemValue"> 4 kilo, Addis Ababa</span>
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Country:</span>
                                        <span className="itemValue">Ethiopia</span>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title="User spending (Last 6 Mont)"/>
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <List />
                </div>
            </div>
        </div>
*/
