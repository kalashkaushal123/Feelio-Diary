from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Diary(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField()
    description = models.TextField()
    words = models.PositiveIntegerField(default=0)
    letters = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    page_type = models.CharField(max_length=20, default="page1")

    def __str__(self):
        return f"{self.user.username} - {self.date}"