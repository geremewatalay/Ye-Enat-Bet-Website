import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import { FaFilter } from "react-icons/fa";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage] = useState(8); // Number of items to display per page

  useEffect(() => {
    // Fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await fetch("/menu.json");
        const data = await response.json();
        // console.log(data)
        setMenu(data);
        setFilteredItems(data); // Initially, display all items
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // calllthe function
    fetchData();
  }, []);

// filtering data based on category
const filterItems = (category)=>{
  const filtered = category ==='all'
  ? menu 
  :menu.filter((item)=>item.category===category);
  setFilteredItems(filtered);
  setSelectedCategory(category);
}

//Show all data function
const showAll = ()=>{
  setFilteredItems(menu);
  setSelectedCategory('all');
}

//  sorting based on  A-Z or Z-A,lOW-Hign pricing 
const handleSortChange = (option)=>{
  setSortOption(option);
// Logic for sorting based on the selected option 
  let sortedItems = [...filteredItems];
  switch (option) {
    case "A-Z":
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "Z-A":
      sortedItems.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "low-to-high":
      sortedItems.sort((a, b) => a.price - b.price);
      break;
    case "high-to-low":
      sortedItems.sort((a, b) => b.price - a.price);
      break;
    default:
      // Do nothing for the "default" case
      break;
  }

  setFilteredItems(sortedItems);
  setCurrentPage(1);
};

  return (
    <div>
      {/* Menu bannner */}
      <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%'>
      <div className='py-24 flex flex-col justify-center items-center gap-8'>
        {/* texts */}
        <div className='text-center px-4 space-y-7'>
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            For the Love of Delicious
            <span className="text-green"> Food</span>
          </h2>                 
          <p className="text-[#4A4A4A] text-xl md:w-4/5 mx-auto">
              Come with family & feel the joy of mouthwatering food such as
              Greek Salad, Lasagne, Butternut Pumpkin, Tokusen Wagyu, Olivas
              Rellenas and more for a moderate cost
            </p>
          <button className="bg-green font-semibold btn text-white px-8 py-3 rounded-full">
            Order Now
          </button>
        </div>
        
      </div>
      
    </div>
    {/* menu shop section */}
  <div className='section-container'>
      {/* filterig and sorting  */}
      <div> 
        {/* all category btns */}
        <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4  flex-wrap">
          <button onClick={showAll}
          className="{selectedCategory === 'all'? 'active':''}"
          >All</button>
          <button onClick={()=> filterItems('salad')}
          className="{selectedCategory === 'salad'? 'active':''}"

          >Salad</button>
          <button onClick={()=> filterItems('pizza')}
           className="{selectedCategory === 'pizza'? 'active':''}"

          
          >Pizza</button>
          <button onClick={()=> filterItems('soup')}
          className="{selectedCategory === 'soup'? 'active':''}"

          >Soups</button>
          <button onClick={()=> filterItems('dessert')}
          className="{selectedCategory === 'dessert'? 'active':''}"

          >Desserts</button>
          <button onClick={()=> filterItems('drinks')}
          className="{selectedCategory === 'drinks'? 'active':''}"

          >Drinks</button>

        </div>
        {/* sorting and filtering */}
        <div>
          <div className="bg-black p-2">
            <FaFilter className="h-4 w-4 text-white"/>
          </div>
          {/* sorting options */}
          <select name="sort" id="sort"
           onChange ={(e)=> handleSortChange(e.target.value)}
           value = {sortOption}
           className = "bg-black text-white px-2 py-1 rounded-sm"
          >
          <option value="default">Default</option>
        
          </select>
        </div>
        
         </div>
      {/* products card */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 ">
        {
          filteredItems.map((item) =>(
            <Cards key={item._id} item ={item}/>
          ))
        }
      </div>

  </div>
    </div>
  )
}

export default Menu