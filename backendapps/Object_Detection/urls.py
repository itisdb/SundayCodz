from django import urls
from django.conf import settings
from django.views.static import serve

# urlpatterns = [
#     path('object_detection/', detect_request),
#     path('', RedirectView.as_view(url='object_detection/')),
#     path('object_detection/api_request/', object_detection_api),
# ]

urlpatterns = [
    urls(r'object_detection/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}),
]