import React from 'react'

const FormField = ({labelName,type,name,placeholder,value,onChange,isSurpriseMe,handleSupriseMe}) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label htmlFor={name} className='block text-sm font-medium text-gray-900'>
          {labelName}
        </label>
        {isSurpriseMe && (
          <button onClick={handleSupriseMe} className='font-semibold text-xs bg-gray-200 py-1 px-2 rounded-[5px] text-black'>
            Surprise Me
          </button>
        )

        }
      </div>
      <input 
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none w-full p-3 '  
      />
    </div>
  )
}

export default FormField