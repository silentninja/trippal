from django.contrib import admin 
from .models import Place, Location, Activity
# Register your models here.

admin.site.register(Activity)

class PlaceInline(admin.TabularInline):
	model  = Place
	fieldsets = (
        (None, {
            'fields': ('name', 'activities')
        }),
       )

class LocationAdmin(admin.ModelAdmin):
    inlines = [ PlaceInline, ]
    
admin.site.register(Location, LocationAdmin)



admin.site.register(Place)