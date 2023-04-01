from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse
from api.models import Product,Category
# Create your views here.

def product_list(request):
    return JsonResponse(
        list(Product.objects.values()), safe=False,json_dumps_params={'indent' : 2}
    )
def categories_list(request):
    return JsonResponse(
        list(Category.objects.values()), safe=False,json_dumps_params={'indent' : 2}
    )
def categories_by_id(request,id):
    for i in list(Category.objects.values()):
        if str(i['id']) == str(id):
            return JsonResponse(i,safe=False,json_dumps_params={'indent' : 2})
    return HttpResponse('do not have such id')
def product_by_id(request,id):
    for i in list(Product.objects.values()):
        if str(i['id']) == str(id):
            return JsonResponse(i,safe=False,json_dumps_params={'indent' : 2})
    return HttpResponse('do not have such id')
def categories_by_id_product(request,id):
    temp = []
    for i in list(Category.objects.values()):
        if str(i['id']) == str(id):
            for j in list(Product.objects.values()):
                if j['category_id'] == i['id']:
                    temp.append(j)
                    # return JsonResponse(j,safe=False, json_dumps_params={'indent' : 2})
    if len(temp) != 0:
        return JsonResponse(temp, safe=False, json_dumps_params={'indent' : 2})
    return HttpResponse('do not have such id')