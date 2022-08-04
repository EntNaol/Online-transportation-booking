import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
//import Chart from '../../components/chart/Chart';
//import {Link} from 'react-router-dom';
//import Featured from '../../components/featured/Featured'
//import Table from '../../components/table/Table';
import "./home.scss";

const Home = () => {
    
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                    <Navbar />
                
                
                

            </div>
        </div>
    )
}

export default Home
//<Featured />
/*
    <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <Table />
                </div>
*/