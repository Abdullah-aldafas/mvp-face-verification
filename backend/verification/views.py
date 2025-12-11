from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from .models import VerificationRecord
from .serializers import VerificationRecordSerializer
from .engine import DummyFaceEngine


# ============================================
# 1) الـ VIEW القديم — يُستخدم لقائمة السجلات
# ============================================

class VerificationRecordListCreateView(generics.ListCreateAPIView):
    """
    GET  /api/verifications/  -> يرجع قائمة بكل السجلات
    POST /api/verifications/  -> ينشئ سجل تحقق جديد
    """
    queryset = VerificationRecord.objects.all()
    serializer_class = VerificationRecordSerializer


# ============================================
# 2) لوحة المتابعة — Dashboard Summary
# ============================================

@api_view(["GET"])
def dashboard_summary(request):
    """
    GET /api/dashboard/ -> يرجع ملخص حالة السجلات
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
# 3) الـ VIEW الجديد — التحقق الوهمي من الوجه
# ============================================

class FaceVerificationView(APIView):
    """
    POST /api/verify/ -> يستقبل صورة وجه ويرجع بيانات وهمية
    """

    def post(self, request):
        face_image = request.FILES.get("face_image")

        # لو ما وصل ملف الصورة
        if not face_image:
            return Response({"error": "face_image is required"}, status=400)

        # استدعاء المحرك الوهمي من engine.py
        match = DummyFaceEngine.match_face(face_image)

        return Response(
            {
                "success": True,
                "match": match,
            },
            status=status.HTTP_200_OK,
        )
