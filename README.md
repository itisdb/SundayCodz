# Sunday_Codz

# Getting Started with SundayCodz

To run the front end:

```
npm install
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

## For the Backend

Download the YoloV3 model from [here](https://pjreddie.com/media/files/yolov3.weights)
Keep it inside \backendapps

Now install the tesseract.exe for the tesseract OCR to work and install it in 'E:\Tesseract\tesseract.exe'

For running backend server:

```
cd backendapps
python -m venv venv # to be run only once
venv\Scripts\activate
pip install -r requirements.txt # to be run only once
python manage.py collectstatic #to be run only once
python manage.py runserver
```

The APIs will be on 
```
http://127.0.0.1:8000/object_detection/api_request/
http://127.0.0.1:8000/translate/api_request/
http://127.0.0.1:8000/translate/detect/api_request/
http://127.0.0.1:8000/ocr/api_request/
```

### Have Fun ! You are a Genius !