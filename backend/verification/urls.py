from django.urls import path

from .views import VerificationRecordListCreateView, dashboard_summary


urlpatterns = [
    path("verifications/", VerificationRecordListCreateView.as_view(), name="verifications-list-create"),
    path("dashboard/", dashboard_summary, name="dashboard-summary"),
]

