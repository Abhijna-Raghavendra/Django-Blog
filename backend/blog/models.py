from django.db import models
from django.conf import settings

class blogPost(models.Model):
    title = models.CharField(max_length=150)
    content = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,)

    def __str__(self):
        return self.title

    def publish(self):
        self.save()