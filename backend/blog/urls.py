from xml.etree.ElementInclude import include
from django.urls import path,include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()                   
router.register(r'blog_list', views.blogListView, 'blog_list')  


urlpatterns = [
    path('api/', include(router.urls)),
]