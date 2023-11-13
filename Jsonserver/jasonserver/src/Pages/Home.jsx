// import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import axios from "axios"

// export default function Home() {
//     const [data, setData] = useState([])
//     const [search, setSearch] = useState("")
//     const [isAscending, setIsAscending] = useState(false)
//     const [idDescending, setDescending] = useState("")

//     useEffect(() => {
//         axios.get(`http://localhost:8080/data?_sort=price&_order=${isAscending}`)
//             .then((data) => {
//                 setData(data.data)
//                 // setSearch(data.data)
//                 // setData("")
//                 console.log(data.data)
//             })
//     }, [])

//     // Search function 

//     const handleSearch = (e) => {
//         e.preventDefault()
//         return axios.get(`http://localhost:8080/data?q=${search}`)
//             .then((data) => {
//                 setData(data.data)

//                 setSearch("")
//                 console.log(data)
//             })
//     }

//    // sort function


//     // filter function


//     return (


//         <div >
//             <div >
//                 <form onSubmit={handleSearch} action="">
//                     <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Searc brand...' style={{ padding: "20px", margin: "10px" }} type="text" />
//                     <button onClick={handleSearch} >Search</button>
//                 </form>

//             </div>
//             <div>
//                 <button onClick={()=>setIsAscending("asc")} >Asc</button>
//                 <button onClick={()=>setDescending("desc")} >Dsc</button>
//             </div>

//             <div style={{ display: "flex", justifyContent: "space-between" }} >
//                 <div>

//                 </div>


//                 <div style={{ display: "flex", justifyContent: "space-between" }}>
//                     {data?.map((item) => {
//                         return (
//                             <div key={item.id} >
//                                 <img width="200px" height="200px" src={item.img} alt={item.brand} />
//                                 <p>{item.id}</p>
//                                 <p>{item.brand}</p>
//                                 <p>Price: {item.price}</p>
//                                 <p>{item.details}</p>
//                                 <p>{item.category}</p>
//                             </div>
//                         )
//                     })}

//                 </div>
//             </div>

//         </div>
//     )
// }


//------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function Home() {
//     const [data, setData] = useState([]);
//     const [search, setSearch] = useState("");
//     const [isAscending, setIsAscending] = useState(true);

//     useEffect(() => {
//         axios.get(`http://localhost:8080/data?q=${search}&_sort=price&_order=${isAscending ? "asc" : "desc"}`)
//             .then((response) => {
//                 setData(response.data);
//             })
//             .catch((error) => {
//                 console.error('Error fetching data: ', error);
//             });
//     }, [search, isAscending]);

//     // Search function
//     const handleSearch = (e) => {
//         e.preventDefault();
//         axios.get(`http://localhost:8080/data?q=${search}&_sort=price&_order=${isAscending ? "asc" : "desc"}`)
//             .then((response) => {
//                 setData(response.data);
//                 setSearch("");
//             })
//             .catch((error) => {
//                 console.error('Error searching data: ', error);
//             });
//     }

//     return (
//         <div>
//             <div>
//                 <form onSubmit={handleSearch} action="">
//                     <input
//                         value={search}
//                         onChange={(e) => setSearch(e.target.value)}
//                         placeholder='Search brand...'
//                         style={{ padding: "20px", margin: "10px" }}
//                         type="text"
//                     />
//                     <button onClick={handleSearch}>Search</button>
//                 </form>
//             </div>
//             <div>
//                 <button onClick={() => setIsAscending(true)}>Asc</button>
//                 <button onClick={() => setIsAscending(false)}>Dsc</button>
//             </div>
//             <div style={{ display: "flex", justifyContent: "space-between" }}>
//                 {data?.map((item) => {
//                     return (
//                         <div key={item.id}>
//                             <img width="200px" height="200px" src={item.img} alt={item.brand} />
//                             <p>{item.id}</p>
//                             <p>{item.brand}</p>
//                             <p>Price: {item.price}</p>
//                             <p>{item.details}</p>
//                             <p>{item.category}</p>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// }
//------------------------------------------------------------------

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [isAscending, setIsAscending] = useState(null); // null means unsorted
    const [page, setPage] = useState(1)

    useEffect(() => {
        // Define a sorting order based on the isAscending state
        const sortingOrder = isAscending === true ? "asc" : isAscending === false ? "desc" : "";

        axios.get(`http://localhost:8080/data?_page=${page}&_limit=5&q=${search}&_sort=price&_order=${sortingOrder}`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });
    }, [search, isAscending, page]);

    // Search function
    const handleSearch = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:8080/data?q=${search}&_sort=price&_order=${isAscending === true ? "asc" : isAscending === false ? "desc" : ""}`)
            .then((response) => {
                setData(response.data);
                setSearch("");
            })
            .catch((error) => {
                console.error('Error searching data: ', error);
            });
    }

    return (
        <div>
            <div>
                {/*search function  */}
                <form onSubmit={handleSearch} action="">
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search brand...'
                        style={{ padding: "20px", margin: "10px" }}
                        type="text"
                    />
                    <button onClick={handleSearch}>Search</button>
                </form>
            </div>
            {/* sort function */}
            <div>
                <button onClick={() => setIsAscending(true)}>Asc</button>
                <button onClick={() => setIsAscending(false)}>Dsc</button>
            </div>
            {/* show data on ui */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                {data?.map((item) => {
                    return (
                        <div key={item.id}>
                            <img width="200px" height="200px" src={item.img} alt={item.brand} />
                            <p>{item.id}</p>
                            <p>{item.brand}</p>
                            <p>Price: {item.price}</p>
                            <p>{item.details}</p>
                            <p>{item.category}</p>
                        </div>
                    );
                })}
            </div>
            {/* pagination */}
            <div>
                <button disabled={page===1} onClick={()=>setPage(page-1)} > Prev</button> {page} <button onClick={()=>setPage(page+1)} >Next</button>
            </div>
        </div>
    );
}

//---------------------------------------

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function Home() {
//     const [data, setData] = useState([]);
//     const [search, setSearch] = useState("");
//     const [isAscending, setIsAscending] = useState(null);
//     const [selectedBrand, setSelectedBrand] = useState("");

//     useEffect(() => {
//         const sortingOrder = isAscending === true ? "asc" : isAscending === false ? "desc" : "";

//         // Adjust the URL to filter by brand and sort by price
//         const apiUrl = `http://localhost:8080/data?q=${search}&_sort=price&_order=${sortingOrder}&brand=${selectedBrand}`;

//         axios.get(apiUrl)
//             .then((response) => {
//                 setData(response.data);
//             })
//             .catch((error) => {
//                 console.error('Error fetching data: ', error);
//             });
//     }, [search, isAscending, selectedBrand]);

//     const handleSearch = (e) => {
//         e.preventDefault();

//         // Use the selectedBrand state for brand filtering
//         setSelectedBrand(search);
//         setSearch(""); // Clear the search input
//     }

//     return (
//         <div>
//             {/* // search function */}
//             <div>
//                 <form onSubmit={handleSearch} action="">
//                     <input
//                         value={search}
//                         onChange={(e) => setSearch(e.target.value)}
//                         placeholder='Search brand...'
//                         style={{ padding: "20px", margin: "10px" }}
//                         type="text"
//                     />
//                     <button onClick={handleSearch}>Search</button>
//                 </form>
//             </div>
//             {/* // sort function */}
//             <div>
//                 <button onClick={() => setIsAscending(false)}>Asc</button>
//                 <button onClick={() => setIsAscending(false)}>Dsc</button>
//             </div>
//             {/* // filter function  */}
            
//             <div style={{ display: "flex", justifyContent: "space-between" }}>
//                 {data?.map((item) => {
//                     return (
//                         <div key={item.id}>
//                             <img width="200px" height="200px" src={item.img} alt={item.brand} />
//                             <p>{item.id}</p>
//                             <p>{item.brand}</p>
//                             <p>Price: {item.price}</p>
//                             <p>{item.details}</p>
//                             <p>{item.category}</p>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// }
