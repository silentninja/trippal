# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0007_auto_20150627_2131'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='place',
            name='activities',
        ),
        migrations.AddField(
            model_name='place',
            name='activities',
            field=models.ForeignKey(default=0, blank=True, to='core.Activity'),
            preserve_default=False,
        ),
    ]
