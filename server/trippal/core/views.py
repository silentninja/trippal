from django.shortcuts import render
from .models import Place, Location
# Create your views here.


def get_locations(request):
    activity = request.GET.get('activity')
