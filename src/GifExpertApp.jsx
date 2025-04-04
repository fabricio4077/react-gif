import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Gatos', 'Perros', 'Pajaros'])

    const onAddCaterogy = (newCategory) => {

        // setCategories([...categories, 'Conejo'])
        // setCategories( (cat) =>  [...cat, 'Conejo'])

        if (categories.includes(newCategory)) {
            return;
        } else {
            setCategories([newCategory, ...categories])
        }
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            {/* <AddCategory setCategories={setCategories} /> */}
            <AddCategory onNewCategory={(value) => onAddCaterogy(value)} />

            {/* <button onClick={onAddCaterogy}>Agregar</button> */}

                {
                    categories.map((category) => {
                        return (
                            <GifGrid category={category} key={category}/>
                        )
                    })
                }
        </>
    )
}
