// src/components/BrandCampaign.tsx
import React from "react";
import "./BrandCampaign.css"; // Import the CSS file for styling

interface Photo {
  id: number;
  src: string;
  alt: string;
  title:string,
}

const logos: Photo[] = [
  {
    id: 1,
    src: "assets/logos/logo.jpg",
    alt: "Campaign Photo 1",
    title:"Ideal Developments"
  },
  {
    id: 2,
    src: "assets/logos/logo1.jpeg",
    alt: "Campaign Photo 2",
    title:"Nutrihut"
  },
  {
    id: 3,
    src: "assets/logos/logo2.png",
    alt: "Campaign Photo 3",
    title:"Avante Weddings"
  },
  {
    id: 4,
    src: "assets/logos/logo3.png",
    alt: "Campaign Photo 8",
    title:"Rental Car"
  },

  // Add more photos as needed
];

const classGenerator = (id:number)=>{
    return id==3?'gallery-item gallery-item-logo gallery-item-logo-black':'gallery-item gallery-item-logo'
}

const Logos: React.FC = () => {
  return (
    <>
      <div className="heading-container">
        <h1>Logos</h1>
      </div>
      <div className="gallery">
        {logos.map((photo) => (
          <div key={photo.id} className={classGenerator(photo.id)}>
            <img src={photo.src} alt={photo.alt} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Logos;
