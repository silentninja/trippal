from django.db import models


class Location(models.Model):

    class Meta:
        verbose_name = "Location"
        verbose_name_plural = "Locations"

    def __unicode__(self):
        return self.name

    name = models.CharField(max_length=200)
    rating = models.IntegerField(blank=True, null=True)
    cost = models.IntegerField(blank=True, null=True)


class Activity(models.Model):
    class Meta:
        verbose_name = "Activity"
        verbose_name_plural = "Activities"
    def __unicode__(self):
        return self.name    

    name = models.CharField(max_length=200)



class Place(models.Model):

    class Meta:
        verbose_name = "Place"
        verbose_name_plural = "Places"

    def __unicode__(self):
        return self.name

    name = models.CharField(max_length=200)
    activities = models.ManyToManyField('Activity', blank=True)
    image = models.URLField(blank=True, null=True)
    rating = models.IntegerField(blank=True, null=True)
    cost = models.IntegerField(blank=True, null=True)
    open_time = models.TimeField(blank=True, null=True)
    close_time = models.TimeField(blank=True, null=True)
    duration = models.TimeField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    location = models.ForeignKey(Location)
    lat = models.CharField(blank=True, null=True, max_length=100)
    lng = models.CharField(blank=True, null=True, max_length=100)
    url = models.URLField(blank=True, null=True)