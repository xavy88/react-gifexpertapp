import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category }) => {

  // const [images, setImages] = useState([]);
   const { data:images,loading}= useFetchGifs( category );


  // useEffect(()=>{
  //   getGifs(category)
  //   .then(setImages);
  // },[category])

  

    //getGifts();
    
  return (
    <>
    
    <h3 className='card animate__animated animate__fadeIn'>{category}</h3>
    {loading && <p className='card animate__animated animate__flash'>loading</p>}
    <div className='card-grid'>
    
      {
        images.map(img => (
         <GifGridItem 
          key={img.id}
          {...img}
         />
        ))
      }
    
    </div>
    </>
  )
}
