import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate = useNavigate()
  return (
    <div>Home
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae adipisci repellendus laborum id harum, eum libero sed officiis expedita incidunt reprehenderit dignissimos, illum animi veritatis voluptatum reiciendis, earum eaque.</p>
      <button onClick={() => { navigate('/contact') }}>Enquiry/customer/support</button>
    </div>
  )
}

export default Home