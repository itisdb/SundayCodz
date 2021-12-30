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
          <button className="rounded-md mb-6 mx-auto px-6 py-3 bg-blue-300 text-white shadow-md shadow-indigo-500/60 hover:shadow-indigo-500/80 hover:bg-blue-500 hover:shadow-lg font-semibold hover:font-bold" onClick={capture}>Capture photo</button>
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