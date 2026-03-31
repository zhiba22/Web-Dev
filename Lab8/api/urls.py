from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.ProductListView.as_view()),
    path('products/<int:id>/', views.ProductDetailView.as_view()),
    path('categories/', views.CategoryListView.as_view()),
    path('categories/<int:id>/', views.CategoryDetailView.as_view()),
    path('categories/<int:id>/products/', views.CategoryProductsView.as_view()),
]