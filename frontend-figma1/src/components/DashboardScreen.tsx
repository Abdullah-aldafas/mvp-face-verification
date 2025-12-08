import { PhoneFrame } from './PhoneFrame';
import { BarChart3, MapPin, Clock } from 'lucide-react';

export function DashboardScreen() {
  return (
    <PhoneFrame>
      <div className="h-full flex flex-col bg-[#F5F1E8] overflow-auto pb-6">
        {/* Top Header */}
        <div className="px-6 pt-4 pb-3 text-center border-b border-stone-200">
          <div className="text-stone-900">تحقق ميداني – SaudiGov Verify</div>
        </div>

        {/* Header */}
        <div className="px-6 pt-6 pb-4">
          <h2 className="text-stone-900 text-2xl mb-2">لوحة المتابعة</h2>
          <p className="text-stone-600 text-sm leading-relaxed">
            نظرة سريعة على أداء التحقق الميداني لليوم.
          </p>
        </div>

        {/* Content */}
        <div className="flex-1 px-6 space-y-4">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-2xl p-5 text-right">
              <div className="text-xs text-stone-500 mb-3">إجمالي عمليات التحقق اليوم</div>
              <div className="text-4xl text-[#006B4E]">٤٥</div>
            </div>
            <div className="bg-white rounded-2xl p-5 text-right">
              <div className="text-xs text-stone-500 mb-3">نسبة السجلات النظامية</div>
              <div className="text-4xl text-green-500">٧٨٪</div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="bg-white rounded-3xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <BarChart3 className="w-5 h-5 text-[#006B4E]" strokeWidth={1.5} />
              <h3 className="text-stone-900">التوزيع الإحصائي</h3>
            </div>

            {/* Simple Bar Chart */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2 text-right">
                  <span className="text-sm text-stone-600">سجلات نظامية</span>
                  <span className="text-sm text-stone-900">٣٥</span>
                </div>
                <div className="h-3 bg-stone-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full transition-all" style={{ width: '78%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2 text-right">
                  <span className="text-sm text-stone-600">منتهية</span>
                  <span className="text-sm text-stone-900">٧</span>
                </div>
                <div className="h-3 bg-stone-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full transition-all" style={{ width: '15%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2 text-right">
                  <span className="text-sm text-stone-600">عليها ملاحظات</span>
                  <span className="text-sm text-stone-900">٣</span>
                </div>
                <div className="h-3 bg-stone-100 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 rounded-full transition-all" style={{ width: '7%' }}></div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex gap-4 mt-5 pt-4 border-t border-stone-100">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs text-stone-600">نظامية</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                <span className="text-xs text-stone-600">منتهية</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-xs text-stone-600">ملاحظات</span>
              </div>
            </div>
          </div>

          {/* Additional Stats */}
          <div className="bg-white rounded-3xl p-6 space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#006B4E] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <div className="flex-1 text-right">
                <div className="text-xs text-stone-500 mb-1">أكثر المواقع تسجيلًا للحالات</div>
                <div className="text-stone-900 mb-2">حي الملز، الرياض</div>
                <div className="text-xs text-stone-400 leading-relaxed">
                  يساعد القادة في توجيه الحملات للمواقع الأعلى خطورة.
                </div>
              </div>
            </div>

            <div className="border-t border-stone-100"></div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#006B4E] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <div className="flex-1 text-right">
                <div className="text-xs text-stone-500 mb-1">متوسط زمن التحقق</div>
                <div className="text-stone-900">٢.٣ ثانية</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
