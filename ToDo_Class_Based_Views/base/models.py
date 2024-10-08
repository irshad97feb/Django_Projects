from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Task(models.Model):
    # null=Ture means it allows empty field
    # blank=True means it allows form to provide empty field
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True )
    title = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    complete = models.BooleanField(default=False) 
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
    # set default ordering
    class Meta:
        ordering = ['complete']