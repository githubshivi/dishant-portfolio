// src/components/BrandCampaign.tsx
import React from 'react';
import './BrandCampaign.css'; // Import the CSS file for styling

interface Photo {
  id: number;
  src: string;
  alt: string;
  title:string
}




const photos: Photo[] = [
  { id: 1, src: 'assets/brand_campaign/1Logo PNG.png', alt: 'Campaign Photo 1', title:'Logo' },
  { id: 2, src: 'assets/brand_campaign/2Logo.jpg', alt: 'Campaign Photo 2', title:'Logo' },
  { id: 3, src: 'assets/brand_campaign/3Complete LOGO.jpg', alt: 'Campaign Photo 3', title:'Complete Logo' },
  { id: 4, src: 'assets/brand_campaign/4Final Logo.jpg', alt: 'Campaign Photo 4', title:'Final Logo' },
  { id: 5, src: 'assets/brand_campaign/5Visiting Card Front.jpg', alt: 'Campaign Photo 5', title:'Visiting Card Front ' },
  { id: 6, src: 'assets/brand_campaign/6Visting card Back.jpg', alt: 'Campaign Photo 6', title:'Visiting Card Back' },
  { id: 7, src: 'assets/brand_campaign/7Visiting Card Mockup.jpg', alt: 'Campaign Photo 7', title:'Visting Card Mockup' },
  { id: 8, src: 'assets/brand_campaign/8Banner.jpg', alt: 'Campaign Photo 8', title:'Banner' },
  { id: 9, src: 'assets/brand_campaign/9Banner Mockup.jpg', alt: 'Campaign Photo 8', title:'Banner Mockup' },
  { id: 10, src: 'assets/brand_campaign/10Magazine Design.jpg', alt: 'Campaign Photo 8', title:'Magazine' },
  { id: 11, src: 'assets/brand_campaign/11Magazine Mockup.jpg', alt: 'Campaign Photo 8', title:'Magazine Mockup' },
  { id: 12, src: 'assets/brand_campaign/12Letterhead.jpg', alt: 'Campaign Photo 8', title:'Letterhead' },
  { id: 13, src: 'assets/brand_campaign/13Letterhead Mockup.jpg', alt: 'Campaign Photo 8', title:'Letterhead Mockup' },
  { id: 14, src: 'assets/brand_campaign/14Poster Design.jpg', alt: 'Campaign Photo 8', title:'Poster' },
  { id: 15, src: 'assets/brand_campaign/15Website Design.jpg', alt: 'Campaign Photo 8', title:'Website' },
  { id: 16, src: 'assets/brand_campaign/16Website Mockup.jpg', alt: 'Campaign Photo 8', title:'Website Mockup' },
  { id: 17, src: 'assets/brand_campaign/17BAG.jpg', alt: 'Campaign Photo 8', title:'Bag' },
  { id: 18, src: 'assets/brand_campaign/18Mockup Bag.jpg', alt: 'Campaign Photo 8', title:'Bag Mockup' },
  { id: 19, src: 'assets/brand_campaign/19Bag Mockup.jpg', alt: 'Campaign Photo 8', title:'Bag Mockup' },
  { id: 20, src: 'assets/brand_campaign/20Store.jpg', alt: 'Campaign Photo 8', title:'Store' },
  { id: 21, src: 'assets/brand_campaign/21Clothes.jpg', alt: 'Campaign Photo 8', title:'Clothes' },
  // Add more photos as needed
];

const BrandCampaign: React.FC = () => {
  return (
    <>
    <div className="heading-container">
        <h1>Brand Campaign</h1>
    </div>
    <div className="gallery">
      {photos.map(photo => (
        <div key={photo.id} className="gallery-item">
          <img src={photo.src} alt={photo.alt} />
          <p>{photo.title}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default BrandCampaign;
