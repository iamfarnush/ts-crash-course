import React from 'react'

const CreateProduct = () => {
  return (
   <form>
<input type="text" placeholder='Enter a title' className='w-full border py-2 px-4 mb-2'/>
<button type='submit' className='py-2 px-4 border bg-yellow-400'>Create</button>
   </form>
  )
}

export default CreateProduct