from .models import Place, Location, Activity
from django.core import serializers
from django.http import HttpResponse
from collections import Counter
from json import dumps
# Create your views here.


def get_locations(request):
    location = request.GET.get('id')
    locations = Location.objects.filter(activites_id=activity)
    return HttpResponse(serializers.serialize("json", locations))


def get_places(request):
    t = {}
    activity = request.GET.get('id')
    places = Place.objects.filter(activities_id=activity)
    for place in places:
        loc_name = place.location.name
        if loc_name in t:
            t[loc_name]['places'].append(
                serializers.serialize("json", [place, ]))
        else:
            t[loc_name] = {}
            t[loc_name]['id'] = place.location.id
            t[loc_name]['places'] = []
            t[loc_name]['name'] = place.location.name.title()
    a = t.values()
    return HttpResponse(dumps(a))


def get_activities(request):
    activities = Activity.objects.all()
    return HttpResponse(serializers.serialize("json", activities))
