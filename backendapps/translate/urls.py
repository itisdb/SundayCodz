from django import urls

from backendapps.translate.views import translate_api, detect_api

urlpatterns = [
    urls.path('/translate/api_request/', translate_api),
    urls.path('/translate/detect/api_request/', detect_api),
]