# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=200)),
                ('rating', models.IntegerField()),
                ('cost', models.IntegerField()),
            ],
            options={
                'verbose_name': 'Location',
                'verbose_name_plural': 'Locations',
            },
        ),
        migrations.CreateModel(
            name='Place',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=200)),
                ('categories', models.TextField()),
                ('image', models.URLField(null=True, blank=True)),
                ('rating', models.IntegerField()),
                ('cost', models.IntegerField()),
                ('open_time', models.TimeField()),
                ('close_time', models.TimeField()),
                ('duration', models.TimeField()),
                ('description', models.TextField()),
                ('location', models.ForeignKey(to='core.Location')),
            ],
            options={
                'verbose_name': 'Place',
                'verbose_name_plural': 'Places',
            },
        ),
    ]
