import { Input } from 'antd';
import React from "react";
import { useState } from "react";

// Iteration 5
function SearchBar({ setSearchFood }) {
    /*const [searchFood, setSearchFood] = useState('');

    const filteredFoods = foodList.filter((food) => {
        return food.name.include(searchFood)})
    const handleChange = (event) => {
        setSearchFood(event.target.value)
    }*/

    return (
    <form>
      <Input name='searchFood' type="text" />
    </form>
  );
}

export default SearchBar;