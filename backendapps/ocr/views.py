from django.shortcuts import render
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
from PIL import Image
import cv2
import pytesseract
import numpy as np

@csrf_exempt
def ocr_api(request):
    json_object = {"success": False}
    if request.method == "POST":
        if request.FILES.get("image", None) is not None:
            image = request.FILES["image"]
            img = Image.open(image)
            img = img.convert("RGB")
            img = cv2.cvtColor(np.array(img), cv2.COLOR_RGB2BGR)
            pytesseract.pytesseract.tesseract_cmd = r"E:\Tesseract\tesseract.exe"
            text = pytesseract.image_to_string(img)
            json_object["success"] = True
            json_object["text"] = text
        else:
            json_object["message"] = "No image found"
    return JsonResponse(json_object)