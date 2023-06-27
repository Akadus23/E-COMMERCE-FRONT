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
          <img className='w-4/5 rounded-md' src={GalaxyNote} alt="image not found"></img>
        </div>
        <div className='w-1/2 h-250 m-1 bg-gray-200 '> 
          <div className='mt-5 border-b-2 border-black'>
            <h1 className='text-3xl'>Samsung Galaxy Note 10</h1>
            <p className='my-2'>3/5</p>
            <p className='text-3xl text-red-600 font-semibold'>$250</p>
            <h4 className='text-lg my-3'>Modelo de marcaSamsung Galaxy Note10 + N9750 / Note 10 PlusSistemaSO Android 9.0CPU Qualcomm Snapdragon 855 Octa Core 2.8GHzGPU Adreno 640RAM 12 GBROM 256 GBExtend card MAX admite tarjeta de memoria Micro SD clase 10 de 512 GB (tarjeta TF)PantallaTamaño de pantalla Quad HD + de 6,8 pulgadasResolución de pantalla 3040 x 1440Tipo de pantalla Corning Gorilla GlassDimensiones 162,3x77,2x7,9mmPeso neto 198gCámaraCámara frontal 10.0 megapíxelesCámara trasera 12.0 megapíxeles 12.0 megapíxeles 16.0 megapíxeles Cámara de tres lentes</h4>
          </div>
          <div className='mt-4 flex flex row'>
            <div className='flex flex-row'>
              <div className='w-12 '>
                <p className='ml-1'>Color:</p>
              </div>
              <div className='w-full rounded-lg bg-gray-500 border-gray-700 border-2 ml-1'>
                <p className='mx-1'>Rojo</p>
              </div>
            </div>
            <div className='flex flex-row ml-3'>
              <div className='w-full'>
                <p className='ml-1'>Category:</p>
              </div>
              <div className='w-full rounded-lg bg-gray-500 border-gray-700 border-2 ml-1'>
                <p className='mx-1'>Camera</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  )
}
