from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('tests/', include('tests.urls')),
    path('admin/', admin.site.urls),
]
