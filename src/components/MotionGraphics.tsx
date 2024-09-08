// src/components/BrandCampaign.tsx
import React from "react";
import './MotionGraphics.css'
interface Video {
    id: number;
    src: string;
    alt: string;
    title: string,
}

const motionVideos: Video[] = [
    {
        id: 1,
        src: "assets/motion_graphic/discord.mp4",
        alt: "Video 1",
        title: "Ideal Developments"
    },
    {
        id: 2,
        src: "assets/motion_graphic/h1.mp4",
        alt: "Video 2",
        title: "Nutrihut"
    },

    // Add more photos as needed
];

const adVideos: Video[] = [
    {
        id: 1,
        src: "assets/motion_graphic/Jency ( Compressed ).mp4",
        alt: "Video 1",
        title: "Ideal Developments"
    },
    {
        id: 2,
        src: "assets/motion_graphic/MAGGI.mp4",
        alt: "Video 1",
        title: "Ideal Developments"
    }
]


const MotionGraphics: React.FC = () => {
    return (
        <>
            <div className="heading-container">
                <h1>Motion Graphics</h1>
            </div>
            <div className="video-gallery">
                {motionVideos.map((video) => (
                    <div className="video-item">
                        <video className="video" controls>
                            <source src={video.src} type="video/mp4" />
                        </video>
                        <p>Video</p>
                    </div>
                ))}
                <br />
                <div className="heading-container">
                    <h1>Advertisement Video</h1>
                </div>
                {adVideos.map((video) => (
                    <div className="video-item">
                        <video className="video" controls>
                            <source src={video.src} type="video/mp4" />
                        </video>
                        <p>Video</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default MotionGraphics;
