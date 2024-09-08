// src/components/BrandCampaign.tsx
import React from "react";
import "./BrandCampaign.css"; // Import the CSS file for styling

interface Photo {
  id: number;
  src: string;
  alt: string;
  title:string,
}

const productsAd: Photo[] = [
  {
    id: 1,
    src: "assets/product_advertisement/fresho.jpg",
    alt: "Campaign Photo 1",
    title:"Ideal Developments"
  },
  {
    id: 2,
    src: "assets/product_advertisement/nike.jpg",
    alt: "Campaign Photo 2",
    title:"Nutrihut"
  },
  {
    id: 3,
    src: "assets/product_advertisement/raze.jpg",
    alt: "Campaign Photo 3",
    title:"Avante Weddings"
  },
  // Add more photos as needed
];




const ProductAdvertisement: React.FC = () => {
  return (
    <>
      <div className="heading-container">
        <h1>Product Advertisement</h1>
      </div>
      <div className="gallery">
        {productsAd.map((photo) => (
          <div key={photo.id} className="gallery-item">
            <img src={photo.src} alt={photo.alt} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductAdvertisement;
