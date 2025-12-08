import { ReactNode } from 'react';

interface PhoneFrameProps {
  children: ReactNode;
}

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="relative mx-auto" style={{ width: '280px', height: '570px' }}>
      {/* iPhone 13 Pro Frame */}
      <div className="absolute inset-0 bg-stone-900 rounded-[40px] shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-stone-900 w-28 h-6 rounded-b-2xl z-20"></div>
        
        {/* Screen */}
        <div className="absolute top-3 left-3 right-3 bottom-3 bg-white rounded-[32px] overflow-hidden">
          {/* Status Bar */}
          <div className="h-11 bg-transparent flex items-start justify-between px-6 pt-2 relative z-10">
            <div className="text-xs text-stone-900">٩:٤١</div>
            <div className="flex gap-1 items-center">
              <svg className="w-4 h-3" viewBox="0 0 16 12" fill="none">
                <rect x="0" y="3" width="4" height="6" rx="1" fill="#000" opacity="0.4"/>
                <rect x="6" y="1" width="4" height="8" rx="1" fill="#000" opacity="0.6"/>
                <rect x="12" y="0" width="4" height="9" rx="1" fill="#000"/>
              </svg>
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="4" width="12" height="8" rx="2" stroke="#000" strokeWidth="1" fill="none"/>
                <rect x="13" y="6.5" width="2" height="3" rx="0.5" fill="#000"/>
                <rect x="3" y="6" width="8" height="4" rx="1" fill="#000"/>
              </svg>
            </div>
          </div>
          
          {/* Content */}
          <div className="h-full pb-11 overflow-auto" dir="rtl">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
