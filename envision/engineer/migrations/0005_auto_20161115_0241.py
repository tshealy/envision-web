# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('engineer', '0004_auto_20161115_0102'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rating',
            name='QL1_2_cost',
            field=models.IntegerField(default=0, choices=[(-2, 'Signficant Savings'), (-1, 'Some Savings'), (0, 'Neutral'), (1, 'Some Cost'), (2, 'Significant Cost')]),
        ),
    ]
