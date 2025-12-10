from django.db import models


class VerificationRecord(models.Model):
    STATUS_CHOICES = [
        ("clean", "سجل نظامي"),
        ("expired", "هوية/إقامة منتهية"),
        ("alert", "ملاحظات أمنية"),
    ]

    full_name = models.CharField(max_length=100)
    id_number = models.CharField(max_length=20)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} - {self.status}"
