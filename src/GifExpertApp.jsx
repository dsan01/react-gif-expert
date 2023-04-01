import { useState } from "react"
import { GifGrid, AddCategory } from "./components"


export const GifExpertApp = () => {

  const [categories, setcategories] = useState(['One Punch'])
  
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setcategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        setcategories={setcategories}
        onNewCategory={event => onAddCategory(event)}
      />
      {
        categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))
      }
    </>
  )
}
