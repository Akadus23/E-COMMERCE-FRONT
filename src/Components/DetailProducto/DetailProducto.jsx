import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import NavBar from '../NavBar/NavBar';
import GalaxyNote from '../../Archivos pruebas/galaxy note 10.jpg'

//Aquí se renderiza el detalle de cada producto

export default function DetailProducto() {

  let {id} = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.details);
  console.log(productDetails);

  return (
      <div className='flex w-full h-screen flex bg-gray-200'>
        <div className='w-1/2 h-96 m-2 flex justify-center'> 
          <img className='w-4/5 rounded-md' src={productDetails.img} alt="image not found"></img>
        </div>
        <div className='w-1/2 h-250 m-1 bg-gray-200 '> 
          <div className='mt-5 border-b-2 border-black'>
            <h1 className='text-3xl'>{productDetails.name}</h1>
            <p className='my-2'>3/5</p>
            <p className='text-3xl text-red-600 font-semibold'>$250</p>
            <h4 className='text-lg my-3'>{productDetails.description}</h4>
          </div>
          <div className='mt-4 flex flex row'>
            <div className='flex flex-row'>
              <div className='w-12 '>
                <p className='ml-1'>Color:</p>
              </div>
              <div className='w-full rounded-lg bg-gray-500 border-gray-700 border-2 ml-1'>
                <p className='mx-1'>{productDetails.color}</p>
              </div>
            </div>
            <div className='flex flex-row ml-3'>
              <div className='w-full'>
                <p className='ml-1'>Category:</p>
              </div>
              <div className='w-full rounded-lg bg-gray-500 border-gray-700 border-2 ml-1'>
                <p className='mx-1'>{productDetails.category}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  )
}
