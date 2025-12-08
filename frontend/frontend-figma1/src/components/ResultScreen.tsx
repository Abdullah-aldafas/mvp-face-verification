import { PhoneFrame } from './PhoneFrame';
import { User, CreditCard, Calendar, Briefcase, AlertTriangle, FileText, ShieldCheck, ShieldAlert, Lightbulb } from 'lucide-react';

interface ResultScreenProps {
  status: 'success' | 'expired' | 'alert';
}

export function ResultScreen({ status }: ResultScreenProps) {
  const statusConfig = {
    success: {
      bgColor: 'bg-green-500',
      label: 'السجل نظامي',
      idStatus: 'سارية حتى ١٤٤٧/٠٥/٢٠هـ',
      notes: 'لا توجد',
      icon: ShieldCheck,
      suggestedAction: 'لا يلزم إجراء إضافي، السجل نظامي.'
    },
    expired: {
      bgColor: 'bg-amber-500',
      label: 'الهوية / الإقامة منتهية',
      idStatus: 'منتهية منذ ١٤٤٦/١٢/١٥هـ',
      notes: 'الهوية منتهية - يتطلب تجديد',
      icon: AlertTriangle,
      suggestedAction: 'تنبيه الشخص لتجديد الهوية/الإقامة في أقرب وقت.'
    },
    alert: {
      bgColor: 'bg-red-500',
      label: 'توجد ملاحظات أمنية',
      idStatus: 'سارية حتى ١٤٤٧/٠٥/٢٠هـ',
      notes: 'توجد ملاحظة أمنية - يرجى المراجعة',
      icon: ShieldAlert,
      suggestedAction: 'يُنصح بالتواصل مع الجهة المختصة ومتابعة الحالة.'
    }
  };

  const config = statusConfig[status];
  const StatusIcon = config.icon;

  return (
    <PhoneFrame>
      <div className="h-full flex flex-col bg-[#F5F1E8] pb-6">
        {/* Top Header */}
        <div className="px-6 pt-4 pb-3 text-center border-b border-stone-200">
          <div className="text-stone-900">تحقق ميداني – SaudiGov Verify</div>
        </div>

        {/* Header */}
        <div className="px-6 pt-6 pb-4">
          <h2 className="text-stone-900 text-2xl">نتيجة التحقق</h2>
        </div>

        {/* Content */}
        <div className="flex-1 px-6 overflow-auto">
          {/* Status Pill */}
          <div className="flex justify-center mb-5">
            <div className={`${config.bgColor} text-white px-6 py-2.5 rounded-full flex items-center gap-2`}>
              <StatusIcon className="w-4 h-4" strokeWidth={2} />
              <span className="text-sm">{config.label}</span>
            </div>
          </div>

          {/* Details Card */}
          <div className="bg-white rounded-3xl p-6 shadow-sm space-y-4">
            {/* Name */}
            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-[#006B4E] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <div className="flex-1 text-right">
                <div className="text-xs text-stone-500 mb-1">الاسم الكامل</div>
                <div className="text-stone-900">محمد أحمد السبيعي</div>
              </div>
            </div>

            <div className="border-t border-stone-100"></div>

            {/* ID Number */}
            <div className="flex items-start gap-3">
              <CreditCard className="w-5 h-5 text-[#006B4E] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <div className="flex-1 text-right">
                <div className="text-xs text-stone-500 mb-1">رقم الهوية / الإقامة</div>
                <div className="text-stone-900">٢٣٤٥٦٧٨٩٠١٢</div>
              </div>
            </div>

            <div className="border-t border-stone-100"></div>

            {/* ID Status */}
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-[#006B4E] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <div className="flex-1 text-right">
                <div className="text-xs text-stone-500 mb-1">حالة الهوية</div>
                <div className="text-stone-900">{config.idStatus}</div>
              </div>
            </div>

            <div className="border-t border-stone-100"></div>

            {/* Employer */}
            <div className="flex items-start gap-3">
              <Briefcase className="w-5 h-5 text-[#006B4E] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <div className="flex-1 text-right">
                <div className="text-xs text-stone-500 mb-1">جهة العمل</div>
                <div className="text-stone-900">شركة نماذج الخليج</div>
              </div>
            </div>

            <div className="border-t border-stone-100"></div>

            {/* Violations */}
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <div className="flex-1 text-right">
                <div className="text-xs text-stone-500 mb-1">عدد المخالفات المرورية النشطة</div>
                <div className="text-stone-900">٣</div>
              </div>
            </div>

            <div className="border-t border-stone-100"></div>

            {/* Notes */}
            <div className="flex items-start gap-3">
              <FileText className={`w-5 h-5 mt-0.5 flex-shrink-0 ${status === 'alert' || status === 'expired' ? 'text-red-500' : 'text-[#006B4E]'}`} strokeWidth={1.5} />
              <div className="flex-1 text-right">
                <div className="text-xs text-stone-500 mb-1">ملاحظات إضافية</div>
                <div className={`${status === 'alert' || status === 'expired' ? 'text-red-600' : 'text-stone-900'}`}>{config.notes}</div>
              </div>
            </div>
          </div>

          {/* Suggested Action Card */}
          <div className="bg-[#006B4E]/5 rounded-2xl p-5 mt-4">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[#006B4E] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <div className="flex-1 text-right">
                <div className="text-sm text-[#006B4E] mb-1.5">إجراء مقترح</div>
                <div className="text-sm text-stone-700 leading-relaxed">{config.suggestedAction}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="px-6 pt-4 space-y-3">
          <button className="w-full bg-[#006B4E] text-white py-5 rounded-2xl hover:bg-[#005540] transition-colors">
            إنهاء التحقق
          </button>
          <button className="w-full bg-transparent border-2 border-[#006B4E] text-[#006B4E] py-5 rounded-2xl hover:bg-[#006B4E]/5 transition-colors">
            إرسال تقرير
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
}
