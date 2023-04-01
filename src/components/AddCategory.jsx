import { useState } from 'react';


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState([]);

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }
    const onSubmint = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        //setcategories(categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim());
        setInputValue('')
    }
    
    return ( 
        <form onSubmit={onSubmint}>
            <input
                type="text"
                placeholder="Buscar Gifs" 
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
