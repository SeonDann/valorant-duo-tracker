from django.contrib import admin
from django.http import JsonResponse
from django.urls import path


def api_status(request):
    return JsonResponse({
        "status": "ok",
        "service": "Valorant Duo Analytics API",
        "version": "1.0.0",
    })


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/status/", api_status),
]