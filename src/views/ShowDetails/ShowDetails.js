import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import detail from "./../Laptop/Laptop.json";
import "./ShowDetails.css"
import showToast from 'crunchy-toast';
import Navbar from "../../components/Navbar/Navbar";


export default function ShowDetails() {
    const { id } = useParams();
    const [selectedDetail, setSelectedDetail] = useState(null);

    function popup(){
        showToast('You Can Pay Here', 'success', 3000);
        window.location.href = '/place order';
    }

    useEffect(() => {
        const foundDetail = detail.find(item => item.id === id);
        if (foundDetail) {
            setSelectedDetail(foundDetail);
        }
    }, [id]);

    if (!selectedDetail) {
        return <div>Details not found!</div>;
    }
    return (
            <div>
                <Navbar/>
                <div>
                    <div className="buynowContainerCards">
                        <img src={selectedDetail.img} className="buynow-images"/>
                        <h2>{selectedDetail.title}</h2>
                        <p>{selectedDetail.description}</p>
                        <p className="buynowPrice">Price: {selectedDetail.price}</p>
                        <input type="number" className="input-number" placeholder="1"/>
                        <button className="btn41-43 btn-42" onClick={popup}>
                            Buy Now
                        </button>
                    </div>

                    
                </div>    
            </div>    
    );
}
