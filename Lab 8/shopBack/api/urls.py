from django.urls import path, re_path
from api import views
urlpatterns = [
    path('products/', views.product_list),
    path('categories/', views.categories_list),
    re_path(r'^categories/([1-4])/$',views.categories_by_id),
    re_path(r'^products/(\d{1,2})/$',views.product_by_id),
    re_path(r'^categories/([1-4])/products/$', views.categories_by_id_product)
]