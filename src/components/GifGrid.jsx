
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category);

  return (
    <>
      {
        isLoading 
          ? (<h4>Cargando...</h4>)
          : (
            <>
              <h3>{category}</h3>
              <div className="card-grid">
                { 
                  images.map( (image) => (
                    <GifItem 
                      key = {image.id}
                      {...image} // Estoy pasando todas las propiedades de image al componente GifItem
                    />
                  )) 
                }
              </div>
            </>
          )
      }
    </>
  )
}
