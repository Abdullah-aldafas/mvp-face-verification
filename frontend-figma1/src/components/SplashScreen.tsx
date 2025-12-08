import { PhoneFrame } from './PhoneFrame';
import { Shield } from 'lucide-react';

export function SplashScreen() {
  return (
    <PhoneFrame>
      <div className="h-full flex flex-col bg-[#F5F1E8]">
        {/* Top Header */}
        <div className="px-6 pt-4 pb-3 text-center border-b border-stone-200">
          <div className="text-stone-900">تحقق ميداني – SaudiGov Verify</div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-between px-6 py-12">
          {/* Government Logo Placeholder */}
          <div className="flex flex-col items-center gap-3 mt-8">
          <div className="w-20 h-20 bg-[#006B4E] rounded-full flex items-center justify-center">
            <Shield className="w-12 h-12 text-[#F5F1E8]" strokeWidth={1.5} />
          </div>
        </div>

        {/* App Name and Subtitle */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h1 className="text-[#006B4E] text-3xl">تحقق ميداني</h1>
          <p className="text-stone-600 text-sm leading-relaxed px-6">
            منصة ميدانية مخصّصة لرجال الأمن للتحقق من هوية الأشخاص في الموقع.
          </p>
        </div>

          {/* Start Button */}
          <button className="w-full bg-[#006B4E] text-white py-5 rounded-2xl hover:bg-[#005540] transition-colors">
            بدء الاستخدام
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
}
