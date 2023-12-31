import React, { useEffect, useState } from "react";
import "./../../App.css";

const Book =(prop)=>{
    // console.log(prop.book.volumeInfo);
    const [isExapandable,setIsExpandable] = useState(false);
    const [desc ,setDesc] = useState(prop.book.volumeInfo.description);
    // console.log(desc)
    let limitedText
    let thumbnail
    try{
        thumbnail = prop.book.volumeInfo.imageLinks.thumbnail;
    let arr = desc.split(' ');
    limitedText = arr.slice(0,30).join(' ');
    // console.log(limitedText)
    }catch(err){
        console.log(err);
    }
    function toggleExpansion(){
        setIsExpandable(!isExapandable)
    }
    const divClass = isExapandable?'expandable':'collapsed';
  
        function descExapand(){
            // let desc= prop.book.volumeInfo.description;
            
        }
        

    return (
        <div className={`book ${divClass}`} onClick={toggleExpansion}>
                <img src={thumbnail} alt="book"/>
                <div className="book-detail" >
                    <h3>{prop.book.volumeInfo.title}</h3>
                    {
                        isExapandable &&(
                        <div>
                            <div className="writer-publish">
                                <span>{prop.book.volumeInfo.authors[0]}</span>
                                
                                <span> Published On: <span>{prop.book.volumeInfo.publishedDate}</span></span>
                            
                            </div>
                             <p style={{color:"rgb(189, 179, 179)"}}>{desc}</p>
                        </div>
                        ) 

                    }
                    {
                        !isExapandable &&(<p>{limitedText}... </p>)
                    }
                    {
                       isExapandable&& (
                       
                       <div className="book-det-info">
                            <span>Average Rating : <span>{prop.book.volumeInfo.averageRating}</span></span> |
                            <span> Rating Count : <span>{prop.book.volumeInfo.ratingsCount}</span></span> |
                            <span> Publisher : <span>{prop.book.volumeInfo.publisher}</span></span> |
                            <span> Language : <span>{prop.book.volumeInfo.language.toUpperCase()}</span></span> 
                          
                            <div className="preview-info">
                                <span><a href={prop.book.volumeInfo.previewLink} target="_target">Read Now</a></span>
                                <span><a href={prop.book.volumeInfo.infoLink} target="_target">More Info </a></span>
                            </div>
                        </div> 
                       ) 
                    }
                    {
                        !isExapandable && (
                            <div className="preview-info">
                                <span><a href={prop.book.volumeInfo.previewLink} target="_target">Read Now</a></span>
                            </div>
                        )
                    }
                    

                   
                </div>
        </div>
      
    )
}

export default Book;