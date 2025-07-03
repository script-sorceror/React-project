import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = () => {

  const [list,setList] = useState([])

  const fetchList = async()=>{
    try {
      const response = await axios.get(`${url}/api/food/list`)
      console.log(response.data.data)
      setList(response.data.data)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(()=>{
    fetchList
  },[list])

  const removeFood = async()=>{
    try {
      const response = await axios.delete(`${url}/api/food/remove?id=${id}`)
      toast(response.message)
    } catch (error) {
     console.log(error.message) 
    }
  }
  return (
    <div className='list screen flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <p><b/> Image</p>
          <p><b/>Name</p>
          <p><b/>Category</p>
          <p><b/>Price</p>
          <p><b/>Action</p>
        </div>
        {
          list.map((item,index)=>{
            return(
              <div key={index} className="list-table-format">
                <img src={`${url}/images/${item.image}`} alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{item.price}</p>
                <p className='cursor' onClick={()=>removeFood(item._id)}>X</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default List