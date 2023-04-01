from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse
# Create your views here.

def product_list(request):
    return HttpResponse(
        [
            {'id': 1, 'name': 'Product 1'},
            {'id': 2, 'name': 'Product 2'},
        ]
    )