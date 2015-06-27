from django.db import models


class Location(models.Model):

    class Meta:
        verbose_name = "Location"
        verbose_name_plural = "Locations"

    def __str__(self):
        return self.name

    name = models.CharField(max_length=200)
    rating = models.IntegerField()
    cost = models.IntegerField()


class Place(models.Model):

    class Meta:
        verbose_name = "Place"
        verbose_name_plural = "Places"

    def __str__(self):
        return self.name

    name = models.CharField(max_length=200)
    categories = models.TextField()
    image = models.URLField(blank=True, null=True)
    rating = models.IntegerField()
    cost = models.IntegerField()
    open_time = models.TimeField()
    close_time = models.TimeField()
    time_taken = models.TimeField()
    review = models.TextField()
