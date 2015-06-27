# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_auto_20150627_2036'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='place',
            name='activities',
        ),
        migrations.AddField(
            model_name='place',
            name='activities',
            field=models.ManyToManyField(to='core.Activity'),
        ),
    ]
