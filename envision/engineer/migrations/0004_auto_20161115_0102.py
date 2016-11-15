# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('engineer', '0003_engineer_research'),
    ]

    operations = [
        migrations.AddField(
            model_name='rating',
            name='CR1_1_cost',
            field=models.IntegerField(default=0, choices=[(-2, 'Signficant Savings'), (-1, 'Some Savings'), (0, 'Neutral'), (1, 'Some Cost'), (2, 'Significant Cost')]),
        ),
        migrations.AddField(
            model_name='rating',
            name='CR2_2_cost',
            field=models.IntegerField(default=0, choices=[(-2, 'Signficant Savings'), (-1, 'Some Savings'), (0, 'Neutral'), (1, 'Some Cost'), (2, 'Significant Cost')]),
        ),
        migrations.AddField(
            model_name='rating',
            name='NW1_2_cost',
            field=models.IntegerField(default=0, choices=[(-2, 'Signficant Savings'), (-1, 'Some Savings'), (0, 'Neutral'), (1, 'Some Cost'), (2, 'Significant Cost')]),
        ),
        migrations.AddField(
            model_name='rating',
            name='NW2_3_cost',
            field=models.IntegerField(default=0, choices=[(-2, 'Signficant Savings'), (-1, 'Some Savings'), (0, 'Neutral'), (1, 'Some Cost'), (2, 'Significant Cost')]),
        ),
        migrations.AddField(
            model_name='rating',
            name='NW3_4_cost',
            field=models.IntegerField(default=0, choices=[(-2, 'Signficant Savings'), (-1, 'Some Savings'), (0, 'Neutral'), (1, 'Some Cost'), (2, 'Significant Cost')]),
        ),
        migrations.AddField(
            model_name='rating',
            name='QL1_2_cost',
            field=models.IntegerField(default=0, choices=[(-3, 'N/A'), (-2, 'Signficant Savings'), (-1, 'Some Savings'), (0, 'Neutral'), (1, 'Some Cost'), (2, 'Significant Cost')]),
        ),
        migrations.AddField(
            model_name='rating',
            name='QL2_3_cost',
            field=models.IntegerField(default=0, choices=[(-2, 'Signficant Savings'), (-1, 'Some Savings'), (0, 'Neutral'), (1, 'Some Cost'), (2, 'Significant Cost')]),
        ),
        migrations.AddField(
            model_name='rating',
            name='QL2_5_cost',
            field=models.IntegerField(default=0, choices=[(-2, 'Signficant Savings'), (-1, 'Some Savings'), (0, 'Neutral'), (1, 'Some Cost'), (2, 'Significant Cost')]),
        ),
        migrations.AddField(
            model_name='rating',
            name='QL3_2_cost',
            field=models.IntegerField(default=0, choices=[(-2, 'Signficant Savings'), (-1, 'Some Savings'), (0, 'Neutral'), (1, 'Some Cost'), (2, 'Significant Cost')]),
        ),
        migrations.AddField(
            model_name='rating',
            name='QL3_3_cost',
            field=models.IntegerField(default=0, choices=[(-2, 'Signficant Savings'), (-1, 'Some Savings'), (0, 'Neutral'), (1, 'Some Cost'), (2, 'Significant Cost')]),
        ),
    ]
