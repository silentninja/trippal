# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_auto_20150627_2128'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activity',
            name='name',
            field=models.CharField(max_length=200, blank=True),
        ),
    ]
