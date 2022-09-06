from pyexpat import model
from rest_framework import serializers
from .models import blogPost

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = blogPost
        fields = ('title','content','created_date','author')