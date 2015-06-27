# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='place',
            name='categories',
        ),
        migrations.AddField(
            model_name='place',
            name='activites',
            field=models.TextField(null=True, blank=True),
        ),
        migrations.AddField(
            model_name='place',
            name='lat',
            field=models.CharField(max_length=100, null=True, blank=True),
        ),
        migrations.AddField(
            model_name='place',
            name='lng',
            field=models.CharField(max_length=100, null=True, blank=True),
        ),
        migrations.AddField(
            model_name='place',
            name='url',
            field=models.URLField(null=True, blank=True),
        ),
        migrations.AlterField(
            model_name='location',
            name='cost',
            field=models.IntegerField(null=True, blank=True),
        ),
        migrations.AlterField(
            model_name='location',
            name='rating',
            field=models.IntegerField(null=True, blank=True),
        ),
        migrations.AlterField(
            model_name='place',
            name='close_time',
            field=models.TimeField(null=True, blank=True),
        ),
        migrations.AlterField(
            model_name='place',
            name='cost',
            field=models.IntegerField(null=True, blank=True),
        ),
        migrations.AlterField(
            model_name='place',
            name='description',
            field=models.TextField(null=True, blank=True),
        ),
        migrations.AlterField(
            model_name='place',
            name='duration',
            field=models.TimeField(null=True, blank=True),
        ),
        migrations.AlterField(
            model_name='place',
            name='open_time',
            field=models.TimeField(null=True, blank=True),
        ),
        migrations.AlterField(
            model_name='place',
            name='rating',
            field=models.IntegerField(null=True, blank=True),
        ),
    ]
