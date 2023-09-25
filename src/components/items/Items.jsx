/* eslint-disable react/prop-types */
import Cards from "./Cards";

 
 const Items = ({items}) => {
    console.log(items);
    return (
        <div>
            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    items?.map(item => 
                        <Cards key={item.id} item = {item}>  </Cards>
                        )
                }
            </div>
        </div>
    );
 };
 
 export default Items;