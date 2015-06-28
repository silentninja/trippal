# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_auto_20150628_0041'),
    ]

    operations = [
        migrations.AlterField(
            model_name='place',
            name='activities',
            field=models.ForeignKey(blank=True, to='core.Activity', null=True),
        ),
    ]
