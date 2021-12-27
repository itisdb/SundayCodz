from charset_normalizer import api
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
import io
from PIL import Image
from googletrans import Translator, constants
from pprint import pprint

@csrf_exempt
def translate_api(api_request):
    json_object = {'success': False}

    if api_request.method == "POST":
        if api_request.POST.get("text") is not None:
            text = str(api_request.POST.get("text"))
            destlang = str(api_request.POST.get("destlang"))
            print(text+" "+destlang)
            translator = Translator()
            translated = translator.translate(text, dest=destlang)
            json_object['success'] = True
            json_object['Translated'] = translated.text
            print(json_object)
    return JsonResponse(json_object)

@csrf_exempt
def detect_api(api_request):
    json_object = {'success': False}

    if api_request.method == "POST":
        text = str(api_request.POST.get("text"))
        translator = Translator()
        translated = translator.detect(text)
        json_object['success'] = True
        json_object['Detected'] = translated.lang
        print(json_object)
    return JsonResponse(json_object)