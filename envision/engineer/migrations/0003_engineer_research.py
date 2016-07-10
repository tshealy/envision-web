# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('engineer', '0002_auto_20151019_0207'),
    ]

    operations = [
        migrations.AddField(
            model_name='engineer',
            name='research',
            field=models.IntegerField(default=1, choices=[(0, 'No'), (1, 'Yes')]),
        ),
    ]
