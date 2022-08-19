import React, { createContext, useState } from 'react'
import { movies } from './mock/movies'
import { type } from './mock/type'


export const g11Context=createContext()

export default function Context({children}) {

    const [moviesData,setMoviesData]=useState(movies)
    const [typeData,setTypeData]=useState(type)

    return (
    <g11Context.Provider value={{moviesData,setMoviesData,typeData,setTypeData}}>
    {children}
    </g11Context.Provider>
  )
}