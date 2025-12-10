from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from .models import VerificationRecord
from .serializers import VerificationRecordSerializer, FaceVerifySerializer

import random


# ============================================
# 1) الـ VIEW القديم — نتركه كما هو
# ============================================

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


# ============================================
# 2) الـ VIEW الجديد — وجه وهمي Dummy Face Engine
# ============================================

DUMMY_DATA = [
    {
        "id_number": "1234567890",
        "full_name": "Fahad Almutairi",
        "employer": "Saudi Post",
        "status": "Verified",
    },
    {
        "id_number": "2233445566",
        "full_name": "Noura Alqahtani",
        "employer": "Ministry of Health",
        "status": "Verified",
    },
    {
        "id_number": "9988776655",
        "full_name": "Meshari Alosimi",
        "employer": "Private Sector",
        "status": "Pending",
    },
]


class FaceVerificationView(APIView):
    """
    POST /api/verify/ -> يستقبل صورة وجه ويرجع بيانات وهمية
    """

    def post(self, request):
        serializer = FaceVerifySerializer(data=request.data)

        if serializer.is_valid():
            # اختيار شخص وهمي من القائمة
            random_person = random.choice(DUMMY_DATA)

            return Response(
                {
                    "success": True,
                    "match": random_person,
                },
                status=status.HTTP_200_OK,
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
