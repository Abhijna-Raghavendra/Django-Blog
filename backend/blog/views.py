from django.shortcuts import render
from .models import blogPost
from .serializers import PostSerializer
from rest_framework import viewsets

class blogListView(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = blogPost.objects.all().order_by('-created_date')