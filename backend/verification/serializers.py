from rest_framework import serializers

from .models import VerificationRecord


class FaceVerifySerializer(serializers.Serializer):
    face_image = serializers.ImageField(required=True)

class VerificationRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = VerificationRecord
        fields = "__all__"
