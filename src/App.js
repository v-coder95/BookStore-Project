import React,{useEffect, useState} from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import axios from "axios";
import Book from "./Components/Hero/Book";
const App=()=>{
    // const [value,setValue] = useState("");
    const [books,setBooks] = useState();
    const [books2,setBooks2] = useState();
    // console.log(value);

   
    console.log(books);
    let url
   
    useEffect(()=>{
        
        async function fetch(){

            try{
                url = `https://www.googleapis.com/books/v1/volumes?q=harry+potter`
             
                const response = await axios.get(url);
                const response2 = await axios.get("https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes")
                setBooks("");
                console.log(response.data.items);
                console.log(response2.data.items);
                setBooks(response.data.items)
                setBooks2(response2.data.items)
                // setBooks("")
                // setBooks2(response2.data.items)
        
            }catch(err){
                console.log(err);
            }}

            window.onload = fetch;

            // Clean up the event listener when the component unmounts
            return () => {
              window.onload = null;
            };

    },[])
   
    return(
        <div>
          
            <Navbar   />
          
            <div>
                {
                
                    books &&
                   
                        <Hero books={books}/>
                  
                }
                 {
                
                books2 &&
               
                    <Hero books={books2}/>
              
            }
            </div>
        </div>
    )
}

export default App;

// books &&
//                     books.map((book)=>(
//                         <Hero book={book}/>
//                     ))