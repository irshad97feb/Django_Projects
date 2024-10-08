"""
URL configuration for receipe project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
#for static files url patterns
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from vege.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('receipe/', receipes, name="receipes"),
    path('delete/<id>/', delete_receipe, name="receipes"),
    path('update_receipe/<id>/', update_receipe, name="receipes"),
]
# all the below lines should be added
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += staticfiles_urlpatterns()