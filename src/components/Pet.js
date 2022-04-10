import React from 'react'

function Pet({ pet }) {
  return (
    <div className=" mx-auto h-[20vh] p-2">
      <img
        className="object-contain h-full rounded-full"
        src={`${pet}`}
        alt="random dog"
      />
    </div>
  )
}

export default Pet
