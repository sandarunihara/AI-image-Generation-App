import React, { useState } from 'react'
import {FormField, Loader} from '../components'
import {useNavigate} from 'react-router-dom'
import { getRandomPrompt } from '../utils'
import {preview} from '../assets'

const CreatePost = () => {
  const navigate=useNavigate();
  const [form, setForm] = useState({
    name:'',
    prompt:'',
    photo:'',
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [lodading, setLoading] = useState(false);

  const handleSubmit=()=>{

  }

  const handleChanges=(e)=>{
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }
  
  const handleSupriseMe=(e)=>{
    e.preventDefault();
    const randomPrompt=getRandomPrompt(form.prompt);
    setForm({
      ...form,
      prompt:randomPrompt
    })
  }
  
  const generateImg=()=>{

  }


  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-black text-[32px]'>
          Create
        </h1>
        <p className='mt-2 text-gray-400 text-[16px] max-w-[500px]'>Share your creativity with the world by creating a images through SN-I AI</p>
      </div>

      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <FormField 
            labelName='Your Name'
            type='text'
            name='name'
            placeholder='Sandaru Nihara'
            value={form.name}
            onChange={handleChanges}
          />
          <FormField 
            labelName='Prompt'
            type='text'
            name='prompt'
            placeholder='an astronaut lounging in a tropical resort in space, vaporwave'
            value={form.prompt}
            onChange={handleChanges}
            isSurpriseMe
            handleSupriseMe={handleSupriseMe}
          />

          <div className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
            {form.photo?(
              <img src={form.photo} alt={form.prompt} classname='w-full g-full object-contain' /> 
            ):(
              <img src={preview} alt='preview' classname='w-9/12 h-9/12 object-contain opacity-40'/> 
            )}

            {generatingImg && (
              <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
              <Loader />
              </div>
            )}
          </div>
        </div>

        <div className='mt-5 flex gap-5 '> 
          <button type='button' onClick={generateImg} className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
            {generatingImg? 'Generating...':'Generate'}
          </button>
        </div>

        <div className='mt-10'>
          <p className='mt-2 text-gray-400 text-[14px]'>
            Once you have created the image you want, you can share it with others in the community
          </p>
          <button className='mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
            Share with the Community
          </button>
        </div>

      </form>
    </section>
  )
}

export default CreatePost