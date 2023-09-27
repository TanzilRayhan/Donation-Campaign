
import { useEffect, useState } from "react";
// import donationCard from "./donationCard";

import Cards from "../../components/items/Cards";

const Donation = () => {

    const [donations, setDonation] = useState([])
    // const [notFound, setNotFound] = useState(false)

    useEffect(()=>{
        const donationItems = JSON.parse(localStorage.getItem("donations"));

            setDonation(donationItems);
    }, [])

    console.log(donations);
    return (
        <div>
            <div className="grid grid-col-1 md:grid-cols-2 gap-5">
                {
                     donations?.map(item => 
                        <Cards key={item.id} item = {item}>  </Cards>
                        )
                }

            </div>
        </div>
    );
};

export default Donation;