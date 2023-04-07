from django.urls import path, re_path
from api import views
urlpatterns = [
    path('companies/', views.companies_list),
    re_path(r'^companies/(\d{1,2})/', views.company_by_id),
    re_path(r'^companies/(\d{1,2})/vacancies/$', views.company_by_id_vacancy),
    path('vacancies/',views.vacancies_list),
    re_path(r'^vacancies/(\d{1,2})/',views.vacancy_by_id),
    path('vacancies/top_ten/', views.top_ten)
    # path('products/', views.product_list),
    # path('categories/', views.categories_list),
    # re_path(r'^categories/([1-4])/$',views.categories_by_id),
    # re_path(r'^products/(\d{1,2})/$',views.product_by_id),
    # re_path(r'^categories/([1-4])/products/$', views.categories_by_id_product)
]