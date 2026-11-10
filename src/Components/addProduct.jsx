import React from 'react'
import { useForm } from 'react-hook-form';


const addProduct = () => {
  const {register,handleSubmit,reset}= useForm();
  const onSubmit = (data) => {
  reset();
};

  return (
    <div>
        <h2 className='text-2xl font-semibold mb-4'>Add Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-4'>
                <input
                    type="text"
                    {...register('productName', { required: true })}
                    id="productName"
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    placeholder="Enter product name"
                />
                <textarea
                    {...register('productDescription', { required: true })}
                    id="productDescription"

                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    placeholder="Enter product description"
                ></textarea>
                                             <input
                    type="number"
                    {...register('productPrice', { required: true })}
                    id="productPrice"   
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    placeholder="Enter product price" />
                    <input type="text" {...register('category', { required: true })} id="Category"
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    placeholder="Enter product category" />
                    <input type="text" {...register('brand', { required: true })} id="brand"
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    placeholder="Enter product brand" />    
                    <input type="text" {...register('stock', { required: true })} id="stock"
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    placeholder="Enter product stock" />
                   {/*<input type="file" {...register('productImage', { required: true })} id="productImage"
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    placeholder="Upload product image" />*/}
                      <button
              type="submit"
              className="w-full h-[49px] bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-900 transition"
            >
              Add Product
            </button>

                    

            </div>
        </form>
    </div>
  )
}

export default addProduct
