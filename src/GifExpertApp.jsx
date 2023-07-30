import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
    //setCategories( cat => [...categories, 'Martinez']);
  }

  return (
    <>
      <h1>Gif Expert App</h1>

      <AddCategory 
        onNewCategory = { newValue => onAddCategory(newValue) }
      />

      <ol>
        {
          categories.map( (category) => (
            <GifGrid 
              key={category}
              category={category}
            />
          ))
        }
      </ol>
    </>
  )
}
