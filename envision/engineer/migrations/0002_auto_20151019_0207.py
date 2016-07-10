# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('engineer', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='rating',
            old_name='NW1_5_exp',
            new_name='QL2_5_exp',
        ),
        migrations.RenameField(
            model_name='rating',
            old_name='NW1_5_inc',
            new_name='QL2_5_inc',
        ),
        migrations.RemoveField(
            model_name='rating',
            name='NW1_5_loa',
        ),
        migrations.RemoveField(
            model_name='rating',
            name='NW2_1_exp',
        ),
        migrations.RemoveField(
            model_name='rating',
            name='NW2_1_inc',
        ),
        migrations.RemoveField(
            model_name='rating',
            name='NW2_1_loa',
        ),
        migrations.RemoveField(
            model_name='rating',
            name='QL1_3_exp',
        ),
        migrations.RemoveField(
            model_name='rating',
            name='QL1_3_inc',
        ),
        migrations.RemoveField(
            model_name='rating',
            name='QL1_3_loa',
        ),
        migrations.AddField(
            model_name='rating',
            name='QL2_5_loa',
            field=models.IntegerField(default=0, choices=[(0, 'No Added Value'), (1, 'Improved'), (3, 'Enhanced'), (6, 'Superior'), (12, 'Conserving'), (15, 'Restorative')]),
        ),
    ]
