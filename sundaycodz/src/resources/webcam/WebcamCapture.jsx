import React from "react";
import Webcam from "react-webcam";

const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
  
    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);

    return (
        <>
          <div className="mb-40 flex flex-col">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
          /><br></br>
          <button className="rounded-md mb-6 mx-auto px-6 py-3 bg-blue-300/90 text-white shadow-md shadow-blue-500/50 hover:shadow-blue-500/70 hover:bg-blue-300 hover:shadow-lg font-semibold" onClick={capture}>Capture photo</button>
          {imgSrc && (
            <img
              src={imgSrc}
            />
          )}
          </div>
        </>
      );
    };
    export default WebcamCapture