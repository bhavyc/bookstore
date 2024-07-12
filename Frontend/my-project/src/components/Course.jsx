// import React from 'react'
import list from "../../public/list.json"
import Cards from "./Cards"
import {Link} from "react-router-dom"
function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 item-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">We Are Delighted To <span className="text-pink-500">Have You Here</span></h1>
           <p className="mt-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, minima alias sunt et tempore molestiae obcaecati praesentium amet dolorum dicta itaque eius temporibus libero natus consequuntur perferendis voluptas? Totam, nihil magni perspiciatis eveniet iste officiis eum nostrum rerum. Atque rem laudantium modi asperiores maiores nostrum ea nihil sed ex laboriosam!</p>
           {/* <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6" type="submit">Back</button> */}
           <Link to="/">
           <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6" type="submit">Back</button>

           </Link>
        </div>
         <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {
              list.map((data) => {
                return <Cards data={data} key={data.id} />
              })
          }
         </div>  
      </div>
    </>
 
  )
}

export default Course