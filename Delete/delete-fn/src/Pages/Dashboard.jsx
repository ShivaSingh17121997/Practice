// import React from 'react'
// import { useEffect } from 'react'
// import axios from "axios";
// import { useState } from 'react';

// export default function Dashboard() {
//     const [res, setRes] = useState([])
//     // const [del, setdel] = useState()

//     const url = `https://jsonplaceholder.typicode.com/posts/`
//     useEffect(() => {
//         axios.get(url)
//             .then((res) => {
//                 setRes(res.data)
//                 console.log(res)
//             })
//     }, [])

//     // delete function
//     const handleDelete = (userId) => {
//         axios.delete(`https://jsonplaceholder.typicode.com/posts/${userId}`)
//             .then((res) => {
//                 console.log("Post deleted", res.data)
//                 setRes((prevPost) => prevPost.filter((item) => item.id !== userId))
//             })

//     }

//     return (
//         <div   >
//             {res?.map((item) => {
//                 return <div style={{ border: "1px solid black", display: "grid", padding: "10px", margin: '40px' }}>
//                     <div key={item.id} >
//                         <p>{item.id}</p>
//                         <p>{item.title}</p>
//                         <button onClick={() => handleDelete(item.id)} >Delete</button>
//                     </div>
//                 </div>

//             })}

//         </div>
//     )
// }


//--------------------------------------------------------------------------------------------------------------------------------------------

// import React from 'react'

// export default function Dashboard() {
//     const handleDelete = () => {
//         axios.delete(`url/${userId}`)
//         .then((res) => {
//             setRes((prevPost) => prevPost.filter((item) => item.id !== userId ) )
//         } )
//     }

//     const handleDelete = () => {
//         axios.delete(`url/${userId}`)
//         .then((res) => {setRes((prevPost) => prevPost.filter((item)=> item.id !== userId))})
//     }

//     return (
//         <div>
//             {res?.map((item) => {
//                 return <div style={{ border: "1px solid black", display: "grid", padding: "10px", margin: '40px' }}>
//                     <div key={item.id} >
//                         <p>{item.id}</p>
//                         <p>{item.title}</p>
//                         <button onClick={() => handleDelete(item.id)} >Delete</button>
//                     </div>
//                 </div>

//             })}

//         </div>
//     )
// }

