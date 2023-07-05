import React from 'react'
import {FaTimes, FaRegCircle, FaPen} from "react-icons/fa"

const Icons = ({name}) => {
  switch (name) {
    case "cross":
        return <FaTimes className='h-9' />

    case "circle":
            return <FaRegCircle className='h-9' />

    default:
        return <FaPen className='h-9' />
  }
}

export default Icons;