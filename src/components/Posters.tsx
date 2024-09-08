// src/components/BrandCampaign.tsx
import React from "react";
import './Posters.css'
interface Photo {
  id: number;
  src: string;
  alt: string;
  title:string,
}

const posters: Photo[] = [
  {
    id: 1,
    src: "assets/posters/poster1.jpg",
    alt: "Campaign Photo 1",
    title:"Ideal Developments"
  },
  {
    id: 2,
    src: "assets/posters/poster2.jpg",
    alt: "Campaign Photo 2",
    title:"Nutrihut"
  },
  {
    id: 3,
    src: "assets/posters/resin .jpg",
    alt: "Campaign Photo 3",
    title:"Avante Weddings"
  },
  {
    id: 4,
    src: "assets/posters/Task 1 (Harsh).jpg",
    alt: "Campaign Photo 8",
    title:"Rental Car"
  },

  // Add more photos as needed
];



const Posters: React.FC = () => {
  return (
    <>
      <div className="heading-container">
        <h1>Posters</h1>
      </div>
      <div className="poster-gallery">
        {posters.map((photo) => (
          <div key={photo.id} className="poster">
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Posters;
