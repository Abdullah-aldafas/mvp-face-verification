import { PhoneFrame } from './PhoneFrame';
import { Loader2 } from 'lucide-react';

export function LoadingScreen() {
  return (
    <PhoneFrame>
      <div className="h-full flex flex-col bg-[#F5F1E8]">
        {/* Top Header */}
        <div className="px-6 pt-4 pb-3 text-center border-b border-stone-200">
          <div className="text-stone-900">تحقق ميداني – SaudiGov Verify</div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <div className="flex flex-col items-center gap-8">
          {/* Title */}
          <h2 className="text-stone-900 text-2xl text-center">
            جاري التحقق من الهوية...
          </h2>

          {/* Loader Animation */}
          <div className="relative">
            <Loader2 className="w-20 h-20 text-[#006B4E] animate-spin" strokeWidth={2} />
          </div>

          {/* Progress Bar */}
          <div className="w-full max-w-xs">
            <div className="h-2 bg-stone-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#006B4E] rounded-full animate-pulse"
                style={{ width: '65%' }}
              ></div>
            </div>
          </div>

            {/* Description Text */}
            <p className="text-stone-600 text-sm text-center leading-relaxed max-w-xs px-4">
              نقوم بمطابقة صورة الوجه مع السجلات المتاحة.
            </p>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
