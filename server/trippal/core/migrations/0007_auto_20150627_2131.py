# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0006_auto_20150627_2129'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activity',
            name='name',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='place',
            name='activities',
            field=models.ManyToManyField(to='core.Activity', blank=True),
        ),
    ]
