from django.urls import path

from .views import TestsCreateView, TestsListView, TestsDetailView

urlpatterns = [
    path('create', TestsCreateView.as_view()),
    path('list', TestsListView.as_view()),
    path('detail/<int:test_id>', TestsDetailView.as_view()),
]
