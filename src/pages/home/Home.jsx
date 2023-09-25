import { useLoaderData } from "react-router-dom";
import Banner from "../../components/header/banner/Banner";
import Items from "../../components/items/Items";

const Home = () => { 

    const items = useLoaderData()

    console.log(items);
    return (
        <div>
            <Banner></Banner>
            <Items items = {items}> </Items>
        </div>
    );
};

export default Home;