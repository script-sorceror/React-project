import {useEffect, useState} from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'
const Add = ({url}) => {

  const [image,setImage] = useState(false)

  const [data,setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"Salad"
  })

  const onChangeHandler = (e)=>{
    const {name,value} = e.target;
    setData(data=>({...data,[name]:value}))
  }

  const onSubmitHandler=async(e)=>{
    e.preventDefault();
    const formData = new formData;
    formData.append('name',data.name)
    formData.append('description',data.desrciption)
    formData.append('price',Number(data.price))
    formData.append('category',data.category)
    formData.append('image',image)
    try {
      const response = await axios.post(`${url}/api/food/add`,formData);
      toast(response.data.message)
      setData({
        name:"",
        description:"",
        price:"",
        category:"Salad"

      });
      setImage(false)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }


  return (
    <div className='screen'>
      <div className="container">
         <form onSubmit={onSubmitHandler} className='flex-col'>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input value={data.name} onChange={onChangeHandler} type="text" name='name' placeholder='Type here' />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea value={data.description} onChange={onChangeHandler} name="description" rows="6" placeholder='Write content here' required></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product categeoy</p>
            <select value={data.category} onChange={onChangeHandler} name="categroy" id="">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure veg">Pure veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input value={data.price} onChange={onChangeHandler} type="Number" name='price' placeholder='150/-' required />
          </div>
        </div>
        <button type='submit' className='add-btn'>ADD</button>
      </form>
      </div>
    </div>
  )
}

export default Add