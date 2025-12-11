from django.contrib import admin
from .models import VerificationRecord

@admin.register(VerificationRecord)
class VerificationRecordAdmin(admin.ModelAdmin):
    list_display = ("full_name", "id_number", "status", "employer", "created_at")
    list_filter = ("status", "employer")
    search_fields = ("full_name", "id_number", "employer")
    ordering = ("-created_at",)
