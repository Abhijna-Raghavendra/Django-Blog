from django.shortcuts import render
from .models import blogPost

def list(request):
    blog_posts = blogPost.objects.all().order_by('-created_date')
    return render(request, 'blog/list.html', {'blog_posts': blog_posts})

def login(request):
    return render(request, 'blog/index.html')