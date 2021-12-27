from django.shortcuts import render
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
from PIL import Image
import matplotlib.pyplot as plt
import keras_ocr

@csrf_exempt
def ocr_api(api_request):
    json_object = {'success': False}
    if api_request.method == 'POST':
        image_file = api_request.FILES['image']
        image_data = image_file.read()
        image = Image.open(image_file)
        image_data = image.convert('L')
        image_data = image_data.resize((28, 28))
        image_data = image_data.convert('1')
        image_data = image_data.tobytes()
        image_data = image_data.reshape(1, 28, 28, 1)
        result = keras_ocr.predict(image_data)
        json_object['success'] = True
        json_object['result'] = result
    return JsonResponse(json_object)

    
