from django.contrib import admin
from . import models
# Register your models here.

@admin.register(models.Tech)
class TechAdmin(admin.ModelAdmin):
    list_display = ['nome']
    search_fields = ['nome']
    

@admin.register(models.Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title']
    search_fields = ['title']
    list_filter = ['createdDate', 'updatedDate']

