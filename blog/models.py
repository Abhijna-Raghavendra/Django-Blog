from django.db import models
from django.utils import timezone

class blogPost(models.Model):
    title = models.CharField(max_length=150)
    content = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title