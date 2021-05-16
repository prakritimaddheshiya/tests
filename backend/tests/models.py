from django.db import models


class Tests(models.Model):
    title = models.CharField(max_length=50)
    src = models.CharField(max_length=300)

    def __str__(self):
        return self.title

    class Meta(object):
        verbose_name_plural = 'Tests'
