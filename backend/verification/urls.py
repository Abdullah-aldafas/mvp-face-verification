from django.urls import path
from .views import VerificationRecordListCreateView, dashboard_summary, FaceVerificationView


urlpatterns = [
    path("verifications/", VerificationRecordListCreateView.as_view(), name="verifications-list-create"),
    path("dashboard/", dashboard_summary, name="dashboard-summary"),
    path("verify/", FaceVerificationView.as_view(), name="face-verify"),   # ← endpoint الجديد
]

