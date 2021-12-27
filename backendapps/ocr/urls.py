from django import urls

from backendapps.ocr.views import ocr_api

urlpatters = [
    urls.path('/ocr/api_request/', ocr_api),
]