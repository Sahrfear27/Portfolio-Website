import TheameContex from "../Theame/Theame";
import { useContext } from "react";
import "./Videos.css";

// Array of video objects
const videos = [
  {
    link: "https://drive.google.com/file/d/10S6BAWBpbzmBwjOQjM2E9gCITjjxyfBZ/preview",
    title: "Drug App",
  },
  {
    link: "https://drive.google.com/file/d/1ei2gVOBW3eReXENMh9QFLW6wtshNizjn/preview",
    title: "Amazon Clone",
  },
  {
    link: "https://drive.google.com/file/d/18OECTh_3GIJM279pErlqLUc6--xB9zbY/preview",
    title: "Library App",
  },
  {
    link: "https://drive.google.com/file/d/1WPpxn2kyDpxEjNWHelGivs9_UIqGYRpU/preview",
    title: "Weather App",
  },
];

export default function Videos() {
  const { lightMode } = useContext(TheameContex);
  return (
    <section
      className="demos container-fluid"
      data-lightmode={lightMode ? "true" : "false"}
    >
      <h4 className="video-header">Videos</h4>
      <div className="row">
        {videos.map((video, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 d-flex justify-content-center mb-4"
          >
            <div className="video-wrapper text-center">
              <h3 className="video-title">{video.title}</h3>
              <iframe
                src={video.link}
                className="video-element"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={video.title}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
