from django.urls import path, re_path
from main import views
urlpatterns = [
    path('products/', views.product_list)
]