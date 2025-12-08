import { PhoneFrame } from './PhoneFrame';
import { Camera, Image, Home, Clock, LayoutDashboard } from 'lucide-react';

export function MainScreen() {
  return (
    <PhoneFrame>
      <div className="h-full flex flex-col bg-[#F5F1E8]">
        {/* Top Header */}
        <div className="px-6 pt-4 pb-3 text-center border-b border-stone-200">
          <div className="text-stone-900">تحقق ميداني – SaudiGov Verify</div>
        </div>

        {/* Header */}
        <div className="px-6 pt-6 pb-4">
          <h2 className="text-stone-900 text-2xl mb-2">تحقق جديد</h2>
          <p className="text-stone-600 text-sm leading-relaxed">
            وجّه الكاميرا نحو وجه الشخص للتحقق من هويته
          </p>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-6 flex items-center justify-center">
          <div className="w-full bg-white rounded-3xl p-8 shadow-sm">
            {/* Camera Icon */}
            <div className="w-32 h-32 mx-auto bg-[#006B4E]/10 rounded-3xl flex items-center justify-center mb-6">
              <Camera className="w-16 h-16 text-[#006B4E]" strokeWidth={1.5} />
            </div>

            {/* Primary Button */}
            <button className="w-full bg-[#006B4E] text-white py-5 rounded-2xl mb-3 hover:bg-[#005540] transition-colors">
              التقاط صورة الوجه
            </button>

            {/* Privacy Note */}
            <p className="text-xs text-stone-500 text-right mb-4 leading-relaxed">
              تُستخدم الصورة للتحقق فقط، ولا تُخزَّن في الجهاز.
            </p>

            {/* Secondary Link */}
            <button className="w-full text-[#006B4E] py-3 text-sm flex items-center justify-center gap-2 hover:bg-[#006B4E]/5 rounded-xl transition-colors">
              <Image className="w-4 h-4" />
              <span>رفع صورة من المعرض</span>
            </button>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="bg-white border-t border-stone-200 px-4 py-3">
          <div className="flex justify-around items-center">
            <button className="flex flex-col items-center gap-1 text-[#006B4E]">
              <Home className="w-6 h-6" strokeWidth={2} />
              <span className="text-xs">الرئيسية</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-stone-400">
              <Clock className="w-6 h-6" strokeWidth={1.5} />
              <span className="text-xs">السجل</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-stone-400">
              <LayoutDashboard className="w-6 h-6" strokeWidth={1.5} />
              <span className="text-xs">لوحة المتابعة</span>
            </button>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
