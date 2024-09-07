// src/components/Gallery.jsx
import './Gallery.css'; // Optional: Use CSS for styling

const Gallery = () => {
  // Sample data (replace with your actual image/video paths)
  const posters = [
    { id: 1, title: 'Poster 1', src: '/assets/poster1.jpg' },
    { id: 2, title: 'Poster 2', src: '/assets/poster2.jpg' },
    { id: 3, title: 'Poster 3', src: '/assets/poster3.jpg' },
    { id: 4, title: 'Poster 4', src: '/assets/poster4.jpg' },
  ];

  const videos = [
    { id: 1, title: 'Video 1', src: '/assets/video1.mp4' },
    { id: 2, title: 'Video 2', src: '/assets/video2.mp4' },
  ];

  return (
    <section className="gallery">
      <h2>My Work</h2>
      {/* Poster Grid */}
      <div className="poster-grid">
        {posters.map(poster => (
          <div key={poster.id} className="poster-item">
            <img src={poster.src} alt={poster.title} />
            <p>{poster.title}</p>
          </div>
        ))}
      </div>

      {/* Video Section */}
      <h3>Video Work</h3>
      <div className="video-grid">
        {videos.map(video => (
          <div key={video.id} className="video-item">
            <video controls>
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
