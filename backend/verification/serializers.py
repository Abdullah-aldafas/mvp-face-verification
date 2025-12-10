from rest_framework import serializers

from .models import VerificationRecord


class VerificationRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = VerificationRecord
        fields = "__all__"
