import React, { useEffect, useState } from 'react'
import Card from './Card'
const HomeItems = () => {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState('');
    const fetchData = async () => {
        try {
            let response = await fetch('http://localhost:5000/api/data');
            response = await response.json();
            console.log(response);
            setData(response);
            console.log('data=>', data);


        } catch (err) {
            console.log("Error: ", err)
        }
    }
    useEffect(() => {
        fetchData();

    }, []);
    // const handleOnClick = (item) => {
    //     // console.log(item)
    //     const items = data?.filter((obj) => obj.IndustryVertical === item);
    //     console.log(items);
    //     setData(items);
    // }
    useEffect(() => {
        const items = data?.filter((obj) => obj.IndustryVertical === filterData);
        console.log(items);
        setData(items);
    }, [filterData])


    return (
        <>
            <div className="dropdown">

                <button class="dropbtn">Filter</button>

                <div className="dropdown-content">
                    <li onClick={() => setFilterData('Technology')}>Technology</li>
                    <li onClick={() => setFilterData('eCommerce')}>eCommerce</li>
                    <li onClick={() => setFilterData('Consumer Internet')}>Consumer Internet</li>
                </div>
            </div>

            <div className='gradient-cards'>
                {data.length === 0 ? <h1>Loading...</h1> : data?.map((item, i) => (
                    <Card key={i} item={item} />
                ))}

            </div>
        </>
    )
}

export default HomeItems