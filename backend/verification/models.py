from django.db import models

class VerificationRecord(models.Model):
    STATUS_CHOICES = [
        ('normal', 'Normal'),
        ('expired', 'Expired'),
        ('alert', 'Alert'),
        ('match', 'Match'),
        ('no_match', 'No Match'),
        ('error', 'Error'),
    ]

    created_at = models.DateTimeField(auto_now_add=True)

    # بيانات الشخص
    id_number = models.CharField("رقم الهوية", max_length=20)
    full_name = models.CharField("الاسم الكامل", max_length=255)
    employer = models.CharField("جهة العمل", max_length=255, blank=True, null=True)

    # نتيجة التحقق
    status = models.CharField("الحالة", max_length=20, choices=STATUS_CHOICES, default='normal')
    confidence = models.FloatField("نسبة التطابق", blank=True, null=True)

    # معلومات إضافية
    violations = models.TextField("المخالفات", blank=True, null=True)
    notes = models.TextField("الملاحظات", blank=True, null=True)
    location = models.CharField("الموقع", max_length=255, blank=True, null=True)

    # صورة الوجه المرسلة للتحقق
    face_image = models.ImageField("صورة الوجه", upload_to="faces/", blank=True, null=True)

    def __str__(self):
        return f"{self.full_name} - {self.id_number} ({self.status})"

    class Meta:
        ordering = ['-created_at']
        verbose_name = "سجل تحقق"
        verbose_name_plural = "سجلات التحقق"
