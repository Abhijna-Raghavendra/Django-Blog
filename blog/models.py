from django.db import models

class blogPost(models.Model):
    title = models.CharField(max_length=150)
    content = models.TextField()

    def __str__(self):
        return self.title