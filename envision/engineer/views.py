from django.shortcuts import render
import operator
from django.db.models import Avg, Count
from .models import Engineer,Rating
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.http import HttpResponseRedirect, HttpResponse
from django.contrib.auth.decorators import login_required
from django.views.generic.edit import CreateView
from django.core.urlresolvers import reverse
from .forms import RatingForm, EngineerForm

class EngineerCreate(CreateView):
    model = Engineer
    fields = ['name', 'research']
    # success_url = '/ratings/'

    def get_success_url(self):
        return reverse("pick_version", kwargs={
            'pk':self.object.pk,
        })

def pick_version(request, pk):
    engineer = Engineer.objects.get(pk=pk)
    if engineer.pk in data1:
        engineer.version = 1
    elif engineer.pk in data2:
        engineer.version = 2
    elif engineer.pk in data3:
        engineer.version = 3
    else: engineer.version = 0
    engineer.save()
    return redirect("engineer_detail", pk)


def display_engineer(request, pk):

    engineer = Engineer.objects.get(pk=pk)

    if request.method == "GET":
        rating_form = RatingForm()
    elif request.method == "POST":
        rating_form = RatingForm(request.POST)
        if rating_form.is_valid():
            rating = rating_form.save(commit=False)
            rating.engineer = engineer
            rating.save()
            if engineer.version == 1:
                return redirect('https://www.surveymonkey.com/r/envisionfollowup')
            elif engineer.version == 2:
                return redirect('https://www.surveymonkey.com/r/envfollowup')
            elif engineer.version == 3:
                return redirect('https://www.surveymonkey.com/r/isifollowup')
    return render(request, "engineer/rating_form.html", {'rating_form': rating_form, "engineer": engineer,})




class RatingCreate(CreateView):

    model = Rating
    fields = ['QL1_2_inc', 'QL1_2_loa', 'QL1_2_exp',
            'QL2_3_inc', 'QL2_3_loa', 'QL2_3_exp',
            'QL2_5_inc', 'QL2_5_loa', 'QL2_5_exp',
            'QL3_2_inc', 'QL3_2_loa', 'QL3_2_exp',
            'QL3_3_inc', 'QL3_3_loa', 'QL3_3_exp',
            'NW1_2_inc', 'NW1_2_loa', 'NW1_2_exp',
            'NW2_3_inc', 'NW2_3_loa', 'NW2_3_exp',
            'NW3_4_inc', 'NW3_4_loa', 'NW3_4_exp',
            'CR1_1_inc', 'CR1_1_loa', 'CR1_1_exp',
            'CR2_2_inc', 'CR2_2_loa', 'CR2_2_exp',]



data1 = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52, 55, 58, 61, 64, 67, 70,
         73, 76, 79, 82, 85, 88, 91, 94, 97, 100, 103, 106, 109, 112, 115, 118, 121, 124, 127, 130, 133,
         136, 139, 142, 145, 148, 151, 154, 157, 160, 163, 166, 169, 172, 175, 178, 181, 184, 187, 190,
         193, 196, 199, 202, 205, 208, 211, 214, 217, 220, 223, 226, 229, 232, 235, 238, 241, 244, 247,
         250, 253, 256, 259, 262, 265, 268, 271, 274, 277, 280, 283, 286, 289, 292, 295, 298]

data2 = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71,
         74, 77, 80, 83, 86, 89, 92, 95, 98, 101, 104, 107, 110, 113, 116, 119, 122, 125, 128, 131,
         134, 137, 140, 143, 146, 149, 152, 155, 158, 161, 164, 167, 170, 173, 176, 179, 182, 185,
         188, 191, 194, 197, 200, 203, 206, 209, 212, 215, 218, 221, 224, 227, 230, 233, 236, 239, 242,
         245, 248, 251, 254, 257, 260, 263, 266, 269, 272, 275, 278, 281, 284, 287, 290, 293, 296, 299]

data3= [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75,
        78, 81, 84, 87, 90, 93, 96, 99, 102, 105, 108, 111, 114, 117, 120, 123, 126, 129, 132, 135, 138,
        141, 144, 147, 150, 153, 156, 159, 162, 165, 168, 171, 174, 177, 180, 183, 186, 189, 192, 195, 198,
        201, 204, 207, 210, 213, 216, 219, 222, 225, 228, 231, 234, 237, 240, 243, 246, 249, 252, 255, 258,
        261, 264, 267, 270, 273, 276, 279, 282, 285, 288, 291, 294, 297, 300]