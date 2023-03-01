import React, {useState} from "react";
import Square from "./Square";
import Contact from "./Contact"


function Body() {

    const itemsList = [
        {
            imgClassName: "top",
            imgSrc: "/images/engraving.jpg",
            btnValue: "details1"
        },
        {
            imgClassName: "top",
            imgSrc: "/images/poet.jpg",
            btnValue: "details2"
        },
        {
            imgClassName: "side-ways",
            imgSrc: "/images/fam_name.jpg",
            btnValue: "details3"
        },
        {
            imgClassName: "side-ways",
            imgSrc: "/images/miso.png",
            btnValue: "details4"
        }
    ]

    return (
      <div>

        <div className="title">
            <h2>Japanese Calligraphy by Rina</h2>
        </div>

        <div className="first-container">
            <form action="/details" method="post">
                <div className="grid">
                    {itemsList.map((item,index) => (
                        <Square 
                        key={index}
                        id={index}
                        imgClassName={item.imgClassName}
                        imgSrc={item.imgSrc}
                        btnValue={item.btnValue}
                        />
                    ))}
                </div>
            </form>
        </div>

        <Contact />

      </div>
      
    );
  }

export default Body;