from django.contrib import admin
from .models import Engineer, Rating


class EngineerAdmin(admin.ModelAdmin):
    list_display = ['name', 'version']


class RatingAdmin(admin.ModelAdmin):
    list_display = ['engineer', 'total_time',
            'RA1_1_inc', 'RA1_1_loa', 'RA1_1_exp', 'RA1_1_cost',
            'RA1_2_inc', 'RA1_2_loa', 'RA1_2_exp', 'RA1_2_cost',
            'RA1_4_inc', 'RA1_4_loa', 'RA1_4_exp', 'RA1_4_cost',
            'RA1_5_inc', 'RA1_5_loa', 'RA1_5_exp', 'RA1_5_cost',
            'RA1_6_inc', 'RA1_6_loa', 'RA1_6_exp', 'RA1_6_cost',
            'RA2_2_inc', 'RA2_2_loa', 'RA2_2_exp', 'RA2_2_cost',
            'RA3_1_inc', 'RA3_1_loa', 'RA3_1_exp', 'RA3_1_cost',
            'RA3_2_inc', 'RA3_2_loa', 'RA3_2_exp', 'RA3_2_cost',
            'RA3_3_inc', 'RA3_3_loa', 'RA3_3_exp', 'RA3_3_cost',
            'NW1_1_inc', 'NW1_1_loa', 'NW1_1_exp', 'NW1_1_cost',
            'NW2_2_inc', 'NW2_2_loa', 'NW2_2_exp', 'NW2_2_cost',
            'NW2_3_inc', 'NW2_3_loa', 'NW2_3_exp', 'NW2_3_cost',
            'NW2_4_inc', 'NW2_4_loa', 'NW2_4_exp', 'NW2_4_cost',
            'NW3_1_inc', 'NW3_1_loa', 'NW3_1_exp', 'NW3_1_cost',
            'RR1_1_inc', 'RR1_1_loa', 'RR1_1_exp', 'RR1_1_cost']


admin.site.register(Engineer, EngineerAdmin)
admin.site.register(Rating, RatingAdmin)