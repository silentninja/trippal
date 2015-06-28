# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_auto_20150627_1948'),
    ]

    operations = [
        migrations.CreateModel(
            name='Activity',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=200)),
            ],
            options={
                'verbose_name': 'Activity',
                'verbose_name_plural': 'Activities',
            },
        ),
        migrations.RemoveField(
            model_name='place',
            name='activites',
        ),
        migrations.AddField(
            model_name='place',
            name='activities',
            field=models.ForeignKey(default='0', to='core.Activity'),
            preserve_default=False,
        ),
    ]
