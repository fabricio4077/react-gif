import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category);

    return (
        <>

            <h3>{category}</h3>

            {
                isLoading && (<div>Cargando...</div>)
            }

            <div className="card-grid">
                {

                    images.map((imagen) => {
                        return (
                            <GifItem key={imagen.id} {...imagen}/>
                        )
                    })

                }
               


            </div>

        </>
    )
}
