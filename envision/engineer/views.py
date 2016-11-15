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
    # elif engineer.pk in data3:
    #     engineer.version = 3
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
                return redirect('http://www.envisiontrain.me/static/surveys/survey1.html')
            elif engineer.version == 2:
                return redirect('http://www.envisiontrain.me/static/surveys/survey2.html')
            # elif engineer.version == 3:
            #     return redirect('http://www.envisiontrain.me/static/surveys/survey3.html')
    return render(request, "engineer/rating_form.html", {'rating_form': rating_form, "engineer": engineer,})




class RatingCreate(CreateView):

    model = Rating
    fields = ['QL1_2_inc', 'QL1_2_loa', 'QL1_2_exp', 'QL1_2_cost',
            'QL2_3_inc', 'QL2_3_loa', 'QL2_3_exp', 'QL2_3_cost',
            'QL2_5_inc', 'QL2_5_loa', 'QL2_5_exp', 'QL2_5_cost',
            'QL3_2_inc', 'QL3_2_loa', 'QL3_2_exp', 'QL3_2_cost',
            'QL3_3_inc', 'QL3_3_loa', 'QL3_3_exp', 'QL3_3_cost',
            'NW1_2_inc', 'NW1_2_loa', 'NW1_2_exp', 'NW1_2_cost',
            'NW2_3_inc', 'NW2_3_loa', 'NW2_3_exp', 'NW2_3_cost',
            'NW3_4_inc', 'NW3_4_loa', 'NW3_4_exp', 'NW3_4_cost',
            'CR1_1_inc', 'CR1_1_loa', 'CR1_1_exp', 'CR1_1_cost',
            'CR2_2_inc', 'CR2_2_loa', 'CR2_2_exp', 'CR2_2_cost']



data1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99, 101, 103, 105, 107, 109, 111, 113, 115, 117, 119, 121, 123, 125, 127, 129, 131, 133, 135, 137, 139, 141, 143, 145, 147, 149, 151, 153, 155, 157, 159, 161, 163, 165, 167, 169, 171, 173, 175, 177, 179, 181, 183, 185, 187, 189, 191, 193, 195, 197, 199, 201, 203, 205, 207, 209, 211, 213, 215, 217, 219, 221, 223, 225, 227, 229, 231, 233, 235, 237, 239, 241, 243, 245, 247, 249, 251, 253, 255, 257, 259, 261, 263, 265, 267, 269, 271, 273, 275, 277, 279, 281, 283, 285, 287, 289, 291, 293, 295, 297, 299]

data2 = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150, 152, 154, 156, 158, 160, 162, 164, 166, 168, 170, 172, 174, 176, 178, 180, 182, 184, 186, 188, 190, 192, 194, 196, 198, 200, 202, 204, 206, 208, 210, 212, 214, 216, 218, 220, 222, 224, 226, 228, 230, 232, 234, 236, 238, 240, 242, 244, 246, 248, 250, 252, 254, 256, 258, 260, 262, 264, 266, 268, 270, 272, 274, 276, 278, 280, 282, 284, 286, 288, 290, 292, 294, 296, 298]

