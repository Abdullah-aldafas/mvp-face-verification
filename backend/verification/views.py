from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import VerificationRecord
from .serializers import VerificationRecordSerializer


class VerificationRecordListCreateView(generics.ListCreateAPIView):
    """
    GET  /api/verifications/  -> يرجع قائمة بكل السجلات
    POST /api/verifications/  -> ينشئ سجل تحقق جديد
    """
    queryset = VerificationRecord.objects.all()
    serializer_class = VerificationRecordSerializer


@api_view(["GET"])
def dashboard_summary(request):
    """
    GET /api/dashboard/ -> يرجع أرقام بسيطة للوحة المتابعة
    """
    total = VerificationRecord.objects.count()
    clean = VerificationRecord.objects.filter(status="clean").count()
    expired = VerificationRecord.objects.filter(status="expired").count()
    alert = VerificationRecord.objects.filter(status="alert").count()

    def percent(part):
        return round(part / total * 100, 1) if total else 0

    data = {
        "total_verifications": total,
        "status_counts": {
            "clean": clean,
            "expired": expired,
            "alert": alert,
        },
        "status_percentages": {
            "clean": percent(clean),
            "expired": percent(expired),
            "alert": percent(alert),
        },
    }
    return Response(data)

