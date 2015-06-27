from .models import Place, Location
from django.core import serializers
from django.http import HttpResponse
import json
import os
# Create your views here.


def get_locations(request):
    activity = request.GET.get('activity')
    locations = Place.objects.filter(activites__icontains=activity)
    return HttpResponse(serializers.serialize("json", locations))


# def get_places(request):
#     place = request.GET.get('id')
#     locations = Place.objects.filter(activites__icontains=activity)
#     return HttpResponse(serializers.serialize("json", locations))
