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

    ra_loa_1_1 = (
        (0, "No Added Value"),
        (5, "Improved"),
        (10, "Enhanced"),
        (15, "Superior"),
        (20, "Conserving"),
    )
    ra_cost_1_1 = (
        (-3, "--"),
        (-2, "Signficant Savings"),
        (-1, "Some Savings"),
        (0, "Neutral"),
        (1, "Some Cost"),
        (2, "Significant Cost"),
    )
    RA1_1_inc = models.IntegerField(choices=include, default=0)
    RA1_1_loa = models.IntegerField(choices=ra_loa_1_1, default=0)
    RA1_1_exp = models.TextField(max_length=1000, null=True, blank=True)
    RA1_1_cost = models.IntegerField(choices=ra_cost_1_1, default=0)

    ra_loa_1_2 = (
        (0, "No Added Value"),
        (2, "Improved"),
        (4, "Enhanced"),
        (7, "Superior"),
        (12, "Conserving"),
    )
    ra_cost_1_2 = (
        (-3, "--"),
        (-2, "Signficant Savings"),
        (-1, "Some Savings"),
        (0, "Neutral"),
        (1, "Some Cost"),
        (2, "Significant Cost"),
    )
    RA1_2_inc = models.IntegerField(choices=include, default=0)
    RA1_2_loa = models.IntegerField(choices=ra_loa_1_2, default=0)
    RA1_2_exp = models.TextField(max_length=1000, null=True, blank=True)
    RA1_2_cost = models.IntegerField(choices=ra_cost_1_2, default=0)

    ra_loa_1_4 = (
        (0, "No Added Value"),
        (4, "Improved"),
        (7, "Enhanced"),
        (10, "Superior"),
        (16, "Conserving"),
    )
    ra_cost_1_4 = (
        (-3, "--"),
        (-2, "Signficant Savings"),
        (-1, "Some Savings"),
        (0, "Neutral"),
        (1, "Some Cost"),
        (2, "Significant Cost"),
    )
    RA1_4_inc = models.IntegerField(choices=include, default=0)
    RA1_4_loa = models.IntegerField(choices=ra_loa_1_4, default=0)
    RA1_4_exp = models.TextField(max_length=1000, null=True, blank=True)
    RA1_4_cost = models.IntegerField(choices=ra_cost_1_4, default=0)

    ra_loa_1_5 = (
        (0, "No Added Value"),
        (1, "Improved"),
        (4, "Enhanced"),
        (7, "Superior"),
        (11, "Conserving"),
        (16, "Restorative"),
    )
    ra_cost_1_5 = (
        (-3, "--"),
        (-2, "Signficant Savings"),
        (-1, "Some Savings"),
        (0, "Neutral"),
        (1, "Some Cost"),
        (2, "Significant Cost"),
    )
    RA1_5_inc = models.IntegerField(choices=include, default=0)
    RA1_5_loa = models.IntegerField(choices=ra_loa_1_5, default=0)
    RA1_5_exp = models.TextField(max_length=1000, null=True, blank=True)
    RA1_5_cost = models.IntegerField(choices=ra_cost_1_5, default=0)

    ra_loa_1_6 = (
        (0, "No Added Value"),
        (2, "Improved"),
        (4, "Enhanced"),
        (6, "Superior"),
        (8, "Conserving"),
    )
    ra_cost_1_6 = (
        (-3, "--"),
        (-2, "Signficant Savings"),
        (-1, "Some Savings"),
        (0, "Neutral"),
        (1, "Some Cost"),
        (2, "Significant Cost"),
    )
    RA1_6_inc = models.IntegerField(choices=include, default=0)
    RA1_6_loa = models.IntegerField(choices=ra_loa_1_6, default=0)
    RA1_6_exp = models.TextField(max_length=1000, null=True, blank=True)
    RA1_6_cost = models.IntegerField(choices=ra_cost_1_6, default=0)

    ra_loa_2_2 = (
        (0, "No Added Value"),
        (1, "Improved"),
        (4, "Enhanced"),
        (8, "Superior"),
        (12, "Conserving"),
    )
    ra_cost_2_2 = (
        (-3, "--"),
        (-2, "Signficant Savings"),
        (-1, "Some Savings"),
        (0, "Neutral"),
        (1, "Some Cost"),
        (2, "Significant Cost"),
    )
    RA2_2_inc = models.IntegerField(choices=include, default=0)
    RA2_2_loa = models.IntegerField(choices=ra_loa_2_2, default=0)
    RA2_2_exp = models.TextField(max_length=1000, null=True, blank=True)
    RA2_2_cost = models.IntegerField(choices=ra_cost_2_2, default=0)

    ra_loa_3_1 = (
        (0, "No Added Value"),
        (2, "Improved"),
        (4, "Enhanced"),
        (9, "Superior"),
        (17, "Conserving"),
        (22, "Restorative"),
    )
    ra_cost_3_1 = (
        (-3, "--"),
        (-2, "Signficant Savings"),
        (-1, "Some Savings"),
        (0, "Neutral"),
        (1, "Some Cost"),
        (2, "Significant Cost"),
    )

    RA3_1_inc = models.IntegerField(choices=include, default=0)
    RA3_1_loa = models.IntegerField(choices=ra_loa_3_1, default=0)
    RA3_1_exp = models.TextField(max_length=1000, null=True, blank=True)
    RA3_1_cost = models.IntegerField(choices=ra_cost_3_1, default=0)

    ra_loa_3_2 = (
        (0, "No Added Value"),
        (4, "Improved"),
        (9, "Enhanced"),
        (13, "Superior"),
        (17, "Conserving"),
        (22, "Restorative"),
    )
    ra_cost_3_2 = (
        (-3, "--"),
        (-2, "Signficant Savings"),
        (-1, "Some Savings"),
        (0, "Neutral"),
        (1, "Some Cost"),
        (2, "Significant Cost"),
    )
    RA3_2_inc = models.IntegerField(choices=include, default=0)
    RA3_2_loa = models.IntegerField(choices=ra_loa_3_2, default=0)
    RA3_2_exp = models.TextField(max_length=1000, null=True, blank=True)
    RA3_2_cost = models.IntegerField(choices=ra_cost_3_2, default=0)

    ra_loa_3_3 = (
        (0, "No Added Value"),
        (1, "Improved"),
        (3, "Enhanced"),
        (5, "Superior"),
        (8, "Conserving"),
    )
    ra_cost_3_3 = (
        (-3, "--"),
        (-2, "Signficant Savings"),
        (-1, "Some Savings"),
        (0, "Neutral"),
        (1, "Some Cost"),
        (2, "Significant Cost"),
    )
    RA3_3_inc = models.IntegerField(choices=include, default=0)
    RA3_3_loa = models.IntegerField(choices=ra_loa_3_3, default=0)
    RA3_3_exp = models.TextField(max_length=1000, null=True, blank=True)
    RA3_3_cost = models.IntegerField(choices=ra_cost_3_3, default=0)

    nw_loa_1_1 = (
        (0, "No Added Value"),
        (3, "Improved"),
        (7, "Enhanced"),
        (12, "Superior"),
        (16, "Conserving"),
        (24, "Restorative"),
    )
    nw_cost_1_1 = (
        (-3, "--"),
        (-2, "Signficant Savings"),
        (-1, "Some Savings"),
        (0, "Neutral"),
        (1, "Some Cost"),
        (2, "Significant Cost"),
    )
    NW1_1_inc = models.IntegerField(choices=include, default=0)
    NW1_1_loa = models.IntegerField(choices=nw_loa_1_1, default=0)
    NW1_1_exp = models.TextField(max_length=1000, null=True, blank=True)
    NW1_1_cost = models.IntegerField(choices=nw_cost_1_1, default=0)

    nw_loa_2_2 = (
        (0, "No Added Value"),
        (2, "Improved"),
        (4, "Enhanced"),
        (9, "Superior"),
        (17, "Conserving"),
        (24, "Restorative"),
    )
    nw_cost_2_2 = (
        (-3, "--"),
        (-2, "Signficant Savings"),
        (-1, "Some Savings"),
        (0, "Neutral"),
        (1, "Some Cost"),
        (2, "Significant Cost"),
    )
    NW2_2_inc = models.IntegerField(choices=include, default=0)
    NW2_2_loa = models.IntegerField(choices=nw_loa_2_2, default=0)
    NW2_2_exp = models.TextField(max_length=1000, null=True, blank=True)
    NW2_2_cost = models.IntegerField(choices=nw_cost_2_2, default=0)

    nw_loa_2_3 = (
        (0, "No Added Value"),
        (1, "Improved"),
        (2, "Enhanced"),
        (5, "Superior"),
        (9, "Conserving"),
        (12, "Restorative"),
    )
    nw_cost_2_3 = (
        (-3, "--"),
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

    nw_loa_2_4 = (
        (0, "No Added Value"),
        (2, "Improved"),
        (4, "Enhanced"),
        (9, "Superior"),
        (14, "Conserving"),
        (18, "Restorative"),
    )
    nw_cost_2_4 = (
        (-3, "--"),
        (-2, "Signficant Savings"),
        (-1, "Some Savings"),
        (0, "Neutral"),
        (1, "Some Cost"),
        (2, "Significant Cost"),
    )
    NW2_4_inc = models.IntegerField(choices=include, default=0)
    NW2_4_loa = models.IntegerField(choices=nw_loa_2_4, default=0)
    NW2_4_exp = models.TextField(max_length=1000, null=True, blank=True)
    NW2_4_cost = models.IntegerField(choices=nw_cost_2_4, default=0)

    nw_loa_3_1 = (
        (0, "No Added Value"),
        (2, "Improved"),
        (5, "Enhanced"),
        (9, "Superior"),
        (15, "Conserving"),
        (18, "Restorative"),
    )
    nw_cost_3_1 = (
        (-3, "--"),
        (-2, "Signficant Savings"),
        (-1, "Some Savings"),
        (0, "Neutral"),
        (1, "Some Cost"),
        (2, "Significant Cost"),
    )
    NW3_1_inc = models.IntegerField(choices=include, default=0)
    NW3_1_loa = models.IntegerField(choices=nw_loa_3_1, default=0)
    NW3_1_exp = models.TextField(max_length=1000, null=True, blank=True)
    NW3_1_cost = models.IntegerField(choices=nw_cost_3_1, default=0)

    rr_loa_1_1 = (
        (0, "No Added Value"),
        (5, "Improved"),
        (8, "Enhanced"),
        (14, "Superior"),
        (18, "Conserving"),
        (25, "Restorative"),
    )
    rr_cost_1_1 = (
        (-3, "--"),
        (-2, "Signficant Savings"),
        (-1, "Some Savings"),
        (0, "Neutral"),
        (1, "Some Cost"),
        (2, "Significant Cost"),
    )
    RR1_1_inc = models.IntegerField(choices=include, default=0)
    RR1_1_loa = models.IntegerField(choices=rr_loa_1_1, default=0)
    RR1_1_exp = models.TextField(max_length=1000, null=True, blank=True)
    RR1_1_cost = models.IntegerField(choices=rr_cost_1_1, default=0)