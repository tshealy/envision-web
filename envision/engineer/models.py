from django.db import models
from django.contrib.auth.models import User
from django.db.models import Avg, Count
from django.core.exceptions import ValidationError
from django.utils import timezone
from django.core.urlresolvers import reverse
import datetime
from django.utils import timezone


class Engineer(models.Model):

    name = models.CharField(max_length=255)

    version = models.IntegerField(null=True)

    no_yes = (
        (0, "No"),
        (1, "Yes")
    )

    research = models.IntegerField(choices=no_yes, default=1)


    def __str__(self):
        return "{}, version: {}, research: {}".format(self.name, self.version, self.research)

    # total_time = models.IntegerField(default=0)


class Rating(models.Model):

    engineer = models.ForeignKey(Engineer)

    # def version(self):
    #     self.engineer.version

    total_time = models.IntegerField(default=0)

    # def version(self):
    #     self.engineer.version

    include = (
        (0, "Include"),
        (1, "Exclude")
    )

    ql_loa_1_2 = (
        (0, "No Added Value"),
        (1, "Improved"),
        (2, "Enhanced"),
        (5, "Superior"),
        (13, "Conserving"),
        (16, "Restorative"),
    )
    ql_cost_1_2 = (
        (-2, "Signficant Savings"),
        (-1, "Some Savings"),
        (0, "Neutral"),
        (1, "Some Cost"),
        (2, "Significant Cost"),
    )
    QL1_2_inc = models.IntegerField(choices=include, default=0)
    QL1_2_loa = models.IntegerField(choices=ql_loa_1_2, default=0)
    QL1_2_exp = models.TextField(max_length=1000, null=True, blank=True)
    QL1_2_cost = models.IntegerField(choices=ql_cost_1_2, default=0)

    ql_loa_2_3 = (
        (0, "No Added Value"),
        (1, "Improved"),
        (2, "Enhanced"),
        (4, "Superior"),
        (8, "Conserving"),
        (11, "Restorative"),
    )
    ql_cost_2_3 = (
        (-2, "Signficant Savings"),
        (-1, "Some Savings"),
        (0, "Neutral"),
        (1, "Some Cost"),
        (2, "Significant Cost"),
    )
    QL2_3_inc = models.IntegerField(choices=include, default=0)
    QL2_3_loa = models.IntegerField(choices=ql_loa_2_3, default=0)
    QL2_3_exp = models.TextField(max_length=1000, null=True, blank=True)
    QL2_3_cost = models.IntegerField(choices=ql_cost_2_3, default=0)

    ql_loa_2_5 = (
        (0, "No Added Value"),
        (1, "Improved"),
        (3, "Enhanced"),
        (6, "Superior"),
        (12, "Conserving"),
        (15, "Restorative"),
    )
    ql_cost_2_5 = (
        (-2, "Signficant Savings"),
        (-1, "Some Savings"),
        (0, "Neutral"),
        (1, "Some Cost"),
        (2, "Significant Cost"),
    )
    QL2_5_inc = models.IntegerField(choices=include, default=0)
    QL2_5_loa = models.IntegerField(choices=ql_loa_2_5, default=0)
    QL2_5_exp = models.TextField(max_length=1000, null=True, blank=True)
    QL2_5_cost = models.IntegerField(choices=ql_cost_2_5, default=0)

    ql_loa_3_2 = (
        (0, "No Added Value"),
        (1, "Improved"),
        (3, "Enhanced"),
        (6, "Superior"),
        (11, "Conserving"),
        (14, "Restorative"),
    )
    ql_cost_3_2 = (
        (-2, "Signficant Savings"),
        (-1, "Some Savings"),
        (0, "Neutral"),
        (1, "Some Cost"),
        (2, "Significant Cost"),
    )
    QL3_2_inc = models.IntegerField(choices=include, default=0)
    QL3_2_loa = models.IntegerField(choices=ql_loa_3_2, default=0)
    QL3_2_exp = models.TextField(max_length=1000, null=True, blank=True)
    QL3_2_cost = models.IntegerField(choices=ql_cost_3_2, default=0)

    ql_loa_3_3 = (
        (0, "No Added Value"),
        (1, "Improved"),
        (3, "Enhanced"),
        (6, "Superior"),
        (11, "Conserving"),
        (13, "Restorative"),
    )
    ql_cost_3_3 = (
        (-2, "Signficant Savings"),
        (-1, "Some Savings"),
        (0, "Neutral"),
        (1, "Some Cost"),
        (2, "Significant Cost"),
    )
    QL3_3_inc = models.IntegerField(choices=include, default=0)
    QL3_3_loa = models.IntegerField(choices=ql_loa_3_3, default=0)
    QL3_3_exp = models.TextField(max_length=1000, null=True, blank=True)
    QL3_3_cost = models.IntegerField(choices=ql_cost_3_3, default=0)

    nw_loa_1_2 = (
        (0, "No Added Value"),
        (1, "Improved"),
        (4, "Enhanced"),
        (9, "Superior"),
        (14, "Conserving"),
        (18, "Restorative"),
    )
    nw_cost_1_2 = (
        (-2, "Signficant Savings"),
        (-1, "Some Savings"),
        (0, "Neutral"),
        (1, "Some Cost"),
        (2, "Significant Cost"),
    )
    NW1_2_inc = models.IntegerField(choices=include, default=0)
    NW1_2_loa = models.IntegerField(choices=nw_loa_1_2, default=0)
    NW1_2_exp = models.TextField(max_length=1000, null=True, blank=True)
    NW1_2_cost = models.IntegerField(choices=nw_cost_1_2, default=0)

    nw_loa_2_3 = (
        (0, "No Added Value"),
        (1, "Improved"),
        (4, "Enhanced"),
        (9, "Superior"),
        (14, "Conserving"),
        (18, "Restorative"),
    )
    nw_cost_2_3 = (
        (-2, "Signficant Savings"),
        (-1, "Some Savings"),
        (0, "Neutral"),
        (1, "Some Cost"),
        (2, "Significant Cost"),
    )

    NW2_3_inc = models.IntegerField(choices=include, default=0)
    NW2_3_loa = models.IntegerField(choices=nw_loa_2_3, default=0)
    NW2_3_exp = models.TextField(max_length=1000, null=True, blank=True)
    NW2_3_cost = models.IntegerField(choices=nw_cost_2_3, default=0)

    nw_loa_3_4 = (
        (0, "No Added Value"),
        (3, "Improved"),
        (6, "Enhanced"),
        (9, "Superior"),
        (15, "Conserving"),
        (19, "Restorative"),
    )
    nw_cost_3_4 = (
        (-2, "Signficant Savings"),
        (-1, "Some Savings"),
        (0, "Neutral"),
        (1, "Some Cost"),
        (2, "Significant Cost"),
    )
    NW3_4_inc = models.IntegerField(choices=include, default=0)
    NW3_4_loa = models.IntegerField(choices=nw_loa_3_4, default=0)
    NW3_4_exp = models.TextField(max_length=1000, null=True, blank=True)
    NW3_4_cost = models.IntegerField(choices=nw_cost_3_4, default=0)

    cr_loa_1_1 = (
        (0, "No Added Value"),
        (4, "Improved"),
        (7, "Enhanced"),
        (13, "Superior"),
        (18, "Conserving"),
        (25, "Restorative"),
    )
    cr_cost_1_1 = (
        (-2, "Signficant Savings"),
        (-1, "Some Savings"),
        (0, "Neutral"),
        (1, "Some Cost"),
        (2, "Significant Cost"),
    )
    CR1_1_inc = models.IntegerField(choices=include, default=0)
    CR1_1_loa = models.IntegerField(choices=cr_loa_1_1, default=0)
    CR1_1_exp = models.TextField(max_length=1000, null=True, blank=True)
    CR1_1_cost = models.IntegerField(choices=cr_cost_1_1, default=0)

    cr_loa_2_2 = (
        (0, "No Added Value"),
        (2, "Improved"),
        (6, "Enhanced"),
        (12, "Superior"),
        (16, "Conserving"),
        (20, "Restorative"),
    )
    cr_cost_2_2 = (
        (-2, "Signficant Savings"),
        (-1, "Some Savings"),
        (0, "Neutral"),
        (1, "Some Cost"),
        (2, "Significant Cost"),
    )
    CR2_2_inc = models.IntegerField(choices=include, default=0)
    CR2_2_loa = models.IntegerField(choices=cr_loa_2_2, default=0)
    CR2_2_exp = models.TextField(max_length=1000, null=True, blank=True)
    CR2_2_cost = models.IntegerField(choices=cr_cost_2_2, default=0)



