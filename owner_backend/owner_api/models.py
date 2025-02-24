from django.db import models

class Owner(models.Model):
    name = models.CharField(max_length=100, unique=True)
    age = models.IntegerField()
    is_active = models.BooleanField(default=False)

    def __str__(self):
        return self.name