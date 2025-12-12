import { Shield, Camera, Image, BarChart3, MapPin, Clock, User, CreditCard, Calendar, Briefcase, AlertTriangle, FileText, ShieldCheck, ShieldAlert, Lightbulb, Menu, X, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const API_URL =
  import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api/verify/';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState<'idle' | 'loading' | 'success' | 'expired' | 'alert'>('idle');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'how-it-works', 'verification', 'dashboard'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const handleStartVerification = () => {
    setVerificationStatus('loading');
    setTimeout(() => {
      setVerificationStatus('success');
    }, 2000);
  };

  const navLinks = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'how-it-works', label: 'كيف يعمل' },
    { id: 'verification', label: 'التحقق' },
    { id: 'dashboard', label: 'لوحة المتابعة' }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]" dir="rtl">
      {/* Navigation Header */}
      <header className="bg-white/95 backdrop-blur-lg border-b border-gray-200/60 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-to-br from-[#006B4E] to-[#005540] rounded-xl flex items-center justify-center shadow-md">
                <Shield className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="text-right">
                <h1 className="text-[#006B4E] text-lg">تحقق ميداني</h1>
                <p className="text-[#8B8376] text-xs">SaudiGov Verify</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-3 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === link.id
                      ? 'text-[#006B4E] bg-[#E8F5EF]'
                      : 'text-[#6B6457] hover:text-[#006B4E] hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('verification')}
                className="bg-[#006B4E] text-white px-5 py-2.5 rounded-lg hover:bg-[#005540] hover:shadow-lg active:scale-[0.98] transition-all duration-200 shadow-md"
              >
                بدء التحقق
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 space-y-2 border-t border-gray-200 pt-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-right px-4 py-3 rounded-lg transition-all ${
                    activeSection === link.id
                      ? 'text-[#006B4E] bg-[#E8F5EF]'
                      : 'text-[#6B6457] hover:text-[#006B4E] hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('verification')}
                className="w-full bg-[#006B4E] text-white px-5 py-3 rounded-lg hover:bg-[#005540] hover:shadow-lg transition-all shadow-md mt-2"
              >
                بدء التحقق
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="px-6 lg:px-8 py-16 lg:py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-right space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#E8F5EF] text-[#006B4E] px-4 py-2 rounded-full text-sm border border-[#C5E4D8] shadow-sm">
                <div className="w-2 h-2 bg-[#006B4E] rounded-full animate-pulse"></div>
                منصة ميدانية حكومية
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl text-[#1F1F1F] leading-tight tracking-tight">
                تحقق ميداني من <span className="text-[#006B4E]">الهوية</span>
              </h1>
              <p className="text-lg lg:text-xl text-[#6B6457] leading-relaxed">
                منصة ميدانية مخصّصة لرجال الأمن للتحقق من هوية الأشخاص في الموقع بسرعة ودقة عالية. نظام متكامل يوفر نتائج فورية ومعلومات شاملة.
              </p>
              <div className="flex gap-4 flex-wrap pt-2">
                <button 
                  onClick={() => scrollToSection('verification')}
                  className="bg-[#006B4E] text-white px-8 py-4 rounded-lg hover:bg-[#005540] hover:shadow-xl active:scale-[0.98] transition-all duration-200 text-lg shadow-lg"
                >
                  بدء الاستخدام
                </button>
                <button className="border-2 border-gray-300 text-[#6B6457] px-8 py-4 rounded-lg hover:bg-white hover:border-gray-400 hover:shadow-md active:scale-[0.98] transition-all duration-200 text-lg bg-transparent">
                  معرفة المزيد
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-right bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-gray-200/60 shadow-sm">
                  <div className="text-3xl text-[#006B4E]">٩٩٪</div>
                  <div className="text-sm text-[#8B8376] mt-1">دقة التحقق</div>
                </div>
                <div className="text-right bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-gray-200/60 shadow-sm">
                  <div className="text-3xl text-[#006B4E]">٢.٣ث</div>
                  <div className="text-sm text-[#8B8376] mt-1">متوسط الوقت</div>
                </div>
                <div className="text-right bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-gray-200/60 shadow-sm">
                  <div className="text-3xl text-[#006B4E]">٢٤/٧</div>
                  <div className="text-sm text-[#8B8376] mt-1">متاح دائماً</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-10 lg:p-12 border border-gray-200 shadow-lg">
              <div className="w-full aspect-square bg-gradient-to-br from-[#E8F5EF] to-[#F0FAF6] rounded-2xl flex items-center justify-center border border-[#C5E4D8] shadow-inner">
                <Shield className="w-40 h-40 lg:w-48 lg:h-48 text-[#006B4E]" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="px-6 lg:px-8 py-16 lg:py-24 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-block bg-gray-100 text-[#6B6457] px-4 py-2 rounded-full text-sm border border-gray-200 shadow-sm">
              عملية بسيطة
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl text-[#1F1F1F] tracking-tight">كيف يعمل النظام</h2>
            <p className="text-lg lg:text-xl text-[#6B6457] max-w-2xl mx-auto">
              عملية بسيطة وسريعة للتحقق من الهوية في ثوانٍ معدودة
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white rounded-2xl p-8 text-center space-y-5 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto shadow-lg">
                <Camera className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <div>
                <div className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm mb-3 border border-blue-200">الخطوة ١</div>
                <h3 className="text-xl text-[#1F1F1F] mb-3">التقاط الصورة</h3>
                <p className="text-base text-[#6B6457] leading-relaxed">
                  وجّه الكاميرا نحو وجه الشخص والتقط صورة واضحة للوجه
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center space-y-5 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#006B4E] to-[#005540] rounded-xl flex items-center justify-center mx-auto shadow-lg">
                <ShieldCheck className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <div>
                <div className="inline-block bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-sm mb-3 border border-emerald-200">الخطوة ٢</div>
                <h3 className="text-xl text-[#1F1F1F] mb-3">المعالجة والتحقق</h3>
                <p className="text-base text-[#6B6457] leading-relaxed">
                  يتم مطابقة الصورة مع السجلات الحكومية المتاحة
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center space-y-5 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center mx-auto shadow-lg">
                <FileText className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <div>
                <div className="inline-block bg-violet-50 text-violet-600 px-3 py-1 rounded-full text-sm mb-3 border border-violet-200">الخطوة ٣</div>
                <h3 className="text-xl text-[#1F1F1F] mb-3">النتائج الفورية</h3>
                <p className="text-base text-[#6B6457] leading-relaxed">
                  احصل على معلومات شاملة عن الهوية وحالة السجل
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Section */}
      <section id="verification" className="px-6 lg:px-8 py-16 lg:py-24 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 space-y-3">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl text-[#1F1F1F] tracking-tight">تحقق جديد</h2>
            <p className="text-lg lg:text-xl text-[#6B6457]">
              وجّه الكاميرا نحو وجه الشخص للتحقق من هويته
            </p>
          </div>

          {verificationStatus === 'idle' && (
            <div className="bg-white rounded-2xl p-10 lg:p-14 border border-gray-200 shadow-lg">
              {/* Camera Icon */}
              <div className="w-44 h-44 mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center mb-8 border border-gray-200 shadow-inner">
                <Camera className="w-20 h-20 text-[#006B4E]" strokeWidth={1.5} />
              </div>

              {/* Primary Button */}
              <button 
                onClick={handleStartVerification}
                className="w-full bg-[#006B4E] text-white py-5 rounded-lg mb-4 hover:bg-[#005540] hover:shadow-xl active:scale-[0.98] transition-all duration-200 text-lg shadow-lg"
              >
                التقاط صورة الوجه
              </button>

              {/* Privacy Note */}
              <p className="text-base text-[#8B8376] text-center mb-6 leading-relaxed">
                تُستخدم الصورة للتحقق فقط، ولا تُخزَّن في الجهاز.
              </p>

              {/* Secondary Link */}
              <button className="w-full text-[#6B6457] border-2 border-gray-300 py-4 text-base flex items-center justify-center gap-2 hover:bg-gray-50 hover:border-gray-400 hover:shadow-md rounded-lg transition-all duration-200">
                <Image className="w-5 h-5" />
                <span>رفع صورة من المعرض</span>
              </button>
            </div>
          )}

          {verificationStatus === 'loading' && (
            <div className="bg-white rounded-2xl p-10 lg:p-14 border border-gray-200 shadow-lg">
              <div className="flex flex-col items-center gap-10">
                {/* Title */}
                <h3 className="text-2xl lg:text-3xl text-[#1F1F1F] text-center">
                  جاري التحقق من الهوية...
                </h3>

                {/* Loader Animation */}
                <div className="relative">
                  <div className="w-28 h-28 border-8 border-gray-200 border-t-[#006B4E] rounded-full animate-spin"></div>
                </div>

                {/* Progress Bar */}
                <div className="w-full max-w-md">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                    <div 
                      className="h-full bg-[#006B4E] rounded-full animate-pulse"
                      style={{ width: '65%' }}
                    ></div>
                  </div>
                </div>

                {/* Description Text */}
                <p className="text-lg text-[#6B6457] text-center leading-relaxed max-w-lg">
                  نقوم بمطابقة صورة الوجه مع السجلات المتاحة.
                </p>
              </div>
            </div>
          )}

          {verificationStatus === 'success' && (
            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-lg">
              {/* Status Pill */}
              <div className="flex justify-center mb-8">
                <div className="bg-[#006B4E] text-white px-6 py-3 rounded-lg flex items-center gap-3 text-lg shadow-md">
                  <ShieldCheck className="w-6 h-6" strokeWidth={2} />
                  <span>السجل نظامي</span>
                </div>
              </div>

              {/* Details Card */}
              <div className="space-y-5 mb-8">
                {/* Name */}
                <div className="flex items-start gap-4 pb-5 border-b border-gray-100">
                  <div className="w-11 h-11 bg-[#E8F5EF] rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border border-[#C5E4D8]">
                    <User className="w-5 h-5 text-[#006B4E]" strokeWidth={2} />
                  </div>
                  <div className="flex-1 text-right pt-1">
                    <div className="text-sm text-[#8B8376] mb-1">الاسم الكامل</div>
                    <div className="text-xl text-[#1F1F1F]">محمد أحمد السبيعي</div>
                  </div>
                </div>

                {/* ID Number */}
                <div className="flex items-start gap-4 pb-5 border-b border-gray-100">
                  <div className="w-11 h-11 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border border-blue-200">
                    <CreditCard className="w-5 h-5 text-blue-600" strokeWidth={2} />
                  </div>
                  <div className="flex-1 text-right pt-1">
                    <div className="text-sm text-[#8B8376] mb-1">رقم الهوية / الإقامة</div>
                    <div className="text-xl text-[#1F1F1F]">٢٣٤٥٦٧٨٩٠١٢</div>
                  </div>
                </div>

                {/* ID Status */}
                <div className="flex items-start gap-4 pb-5 border-b border-gray-100">
                  <div className="w-11 h-11 bg-violet-50 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border border-violet-200">
                    <Calendar className="w-5 h-5 text-violet-600" strokeWidth={2} />
                  </div>
                  <div className="flex-1 text-right pt-1">
                    <div className="text-sm text-[#8B8376] mb-1">حالة الهوية</div>
                    <div className="text-xl text-[#1F1F1F]">سارية حتى ١٤٤٧/٠٥/٢٠هـ</div>
                  </div>
                </div>

                {/* Employer */}
                <div className="flex items-start gap-4 pb-5 border-b border-gray-100">
                  <div className="w-11 h-11 bg-[#FFF4D9] rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border border-[#F4E4B8]">
                    <Briefcase className="w-5 h-5 text-[#E8A83E]" strokeWidth={2} />
                  </div>
                  <div className="flex-1 text-right pt-1">
                    <div className="text-sm text-[#8B8376] mb-1">جهة العمل</div>
                    <div className="text-xl text-[#1F1F1F]">شركة نماذج الخليج</div>
                  </div>
                </div>

                {/* Violations */}
                <div className="flex items-start gap-4 pb-5 border-b border-gray-100">
                  <div className="w-11 h-11 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border border-orange-200">
                    <AlertTriangle className="w-5 h-5 text-orange-500" strokeWidth={2} />
                  </div>
                  <div className="flex-1 text-right pt-1">
                    <div className="text-sm text-[#8B8376] mb-1">عدد المخالفات المرورية النشطة</div>
                    <div className="text-xl text-[#1F1F1F]">٣</div>
                  </div>
                </div>

                {/* Notes */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-200">
                    <FileText className="w-5 h-5 text-[#6B6457]" strokeWidth={2} />
                  </div>
                  <div className="flex-1 text-right pt-1">
                    <div className="text-sm text-[#8B8376] mb-1">ملاحظات إضافية</div>
                    <div className="text-xl text-[#1F1F1F]">لا توجد</div>
                  </div>
                </div>
              </div>

              {/* Suggested Action Card */}
              <div className="bg-gradient-to-br from-[#E8F5EF] to-[#F0FAF6] rounded-xl p-6 mb-8 border border-[#C5E4D8] shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border border-[#C5E4D8]">
                    <Lightbulb className="w-5 h-5 text-[#006B4E]" strokeWidth={2} />
                  </div>
                  <div className="flex-1 text-right pt-1">
                    <div className="text-lg text-[#006B4E] mb-2">إجراء مقترح</div>
                    <div className="text-base text-[#3D3935] leading-relaxed">لا يلزم إجراء إضافي، السجل نظامي.</div>
                  </div>
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="grid md:grid-cols-2 gap-4">
                <button 
                  onClick={() => setVerificationStatus('idle')}
                  className="bg-[#006B4E] text-white py-4 rounded-lg hover:bg-[#005540] hover:shadow-lg active:scale-[0.98] transition-all duration-200 text-lg shadow-md"
                >
                  إنهاء التحقق
                </button>
                <button className="bg-white border-2 border-gray-300 text-[#6B6457] py-4 rounded-lg hover:bg-gray-50 hover:border-gray-400 hover:shadow-md active:scale-[0.98] transition-all duration-200 text-lg">
                  إرسال تقرير
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Results Examples Section */}
      <section className="px-6 lg:px-8 py-16 lg:py-24 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-block bg-gray-100 text-[#6B6457] px-4 py-2 rounded-full text-sm border border-gray-200 shadow-sm">
              أنواع النتائج
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl text-[#1F1F1F] tracking-tight">أنواع نتائج التحقق</h2>
            <p className="text-lg lg:text-xl text-[#6B6457] max-w-2xl mx-auto">
              النظام يوفر معلومات مفصلة مع توصيات واضحة لكل حالة
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Green - Valid */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="bg-[#006B4E] text-white px-5 py-2.5 rounded-lg flex items-center gap-2 shadow-md">
                  <ShieldCheck className="w-5 h-5" strokeWidth={2} />
                  <span className="text-base">السجل نظامي</span>
                </div>
              </div>
              <p className="text-base text-[#6B6457] text-center leading-relaxed mb-6">
                جميع المعلومات صحيحة والوثائق سارية
              </p>
              <div className="bg-[#E8F5EF] rounded-lg p-4 text-center border border-[#C5E4D8] shadow-sm">
                <p className="text-[#006B4E]">لا يلزم إجراء إضافي</p>
              </div>
            </div>

            {/* Yellow - Expired */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="bg-[#E8A83E] text-white px-5 py-2.5 rounded-lg flex items-center gap-2 shadow-md">
                  <AlertTriangle className="w-5 h-5" strokeWidth={2} />
                  <span className="text-base">الهوية منتهية</span>
                </div>
              </div>
              <p className="text-base text-[#6B6457] text-center leading-relaxed mb-6">
                الهوية أو الإقامة منتهية وتحتاج للتجديد
              </p>
              <div className="bg-[#FFF4D9] rounded-lg p-4 text-center border border-[#F4E4B8] shadow-sm">
                <p className="text-[#C08A2E]">تنبيه الشخص للتجديد</p>
              </div>
            </div>

            {/* Red - Alert */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="bg-[#D9534F] text-white px-5 py-2.5 rounded-lg flex items-center gap-2 shadow-md">
                  <ShieldAlert className="w-5 h-5" strokeWidth={2} />
                  <span className="text-base">ملاحظات أمنية</span>
                </div>
              </div>
              <p className="text-base text-[#6B6457] text-center leading-relaxed mb-6">
                توجد ملاحظات أمنية تتطلب المتابعة
              </p>
              <div className="bg-[#FCE9E7] rounded-lg p-4 text-center border border-[#F4D5D3] shadow-sm">
                <p className="text-[#C44540]">التواصل مع الجهة المختصة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section id="dashboard" className="px-6 lg:px-8 py-16 lg:py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-block bg-gray-100 text-[#6B6457] px-4 py-2 rounded-full text-sm border border-gray-200 shadow-sm">
              الإحصائيات
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl text-[#1F1F1F] tracking-tight">لوحة المتابعة</h2>
            <p className="text-lg lg:text-xl text-[#6B6457] max-w-2xl mx-auto">
              نظرة سريعة على أداء التحقق الميداني لليوم
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-8">
            <div className="bg-white rounded-2xl p-8 lg:p-10 text-right border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-base text-[#8B8376] mb-3">إجمالي عمليات التحقق اليوم</div>
              <div className="text-5xl lg:text-6xl text-[#006B4E] mb-3">٤٥</div>
              <div className="flex items-center gap-2 text-[#006B4E] text-sm">
                <div className="flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                  <ArrowUp className="w-3 h-3" strokeWidth={3} />
                  <span>١٢٪</span>
                </div>
                <span className="text-[#8B8376]">عن الأمس</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 lg:p-10 text-right border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-base text-[#8B8376] mb-3">نسبة السجلات النظامية</div>
              <div className="text-5xl lg:text-6xl text-[#006B4E] mb-3">٧٨٪</div>
              <div className="flex items-center gap-2 text-[#006B4E] text-sm">
                <div className="flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                  <ArrowUp className="w-3 h-3" strokeWidth={3} />
                  <span>٥٪</span>
                </div>
                <span className="text-[#8B8376]">عن الأمس</span>
              </div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-lg mb-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#006B4E] to-[#005540] rounded-xl flex items-center justify-center shadow-md">
                <BarChart3 className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-2xl lg:text-3xl text-[#1F1F1F]">التوزيع الإحصائي</h3>
            </div>

            {/* Simple Bar Chart */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2 text-right">
                  <span className="text-lg text-[#6B6457]">سجلات نظامية</span>
                  <span className="text-lg text-[#1F1F1F]">٣٥</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden border border-gray-200 shadow-inner">
                  <div className="h-full bg-[#006B4E] rounded-full transition-all shadow-sm" style={{ width: '78%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2 text-right">
                  <span className="text-lg text-[#6B6457]">منتهية</span>
                  <span className="text-lg text-[#1F1F1F]">٧</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden border border-gray-200 shadow-inner">
                  <div className="h-full bg-[#E8A83E] rounded-full transition-all shadow-sm" style={{ width: '15%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2 text-right">
                  <span className="text-lg text-[#6B6457]">عليها ملاحظات</span>
                  <span className="text-lg text-[#1F1F1F]">٣</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden border border-gray-200 shadow-inner">
                  <div className="h-full bg-[#D9534F] rounded-full transition-all shadow-sm" style={{ width: '7%' }}></div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#006B4E] rounded-full shadow-sm"></div>
                <span className="text-base text-[#6B6457]">نظامية</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#E8A83E] rounded-full shadow-sm"></div>
                <span className="text-base text-[#6B6457]">منتهية</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#D9534F] rounded-full shadow-sm"></div>
                <span className="text-base text-[#6B6457]">ملاحظات</span>
              </div>
            </div>
          </div>

          {/* Additional Stats */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm border border-blue-200">
                  <MapPin className="w-6 h-6 text-blue-600" strokeWidth={2} />
                </div>
                <div className="flex-1 text-right pt-1">
                  <div className="text-sm text-[#8B8376] mb-2">أكثر المواقع تسجيلًا للحالات</div>
                  <div className="text-xl lg:text-2xl text-[#1F1F1F] mb-2">حي الملز، الرياض</div>
                  <div className="text-base text-[#8B8376] leading-relaxed">
                    يساعد القادة في توجيه الحملات للمواقع الأعلى خطورة.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm border border-violet-200">
                  <Clock className="w-6 h-6 text-violet-600" strokeWidth={2} />
                </div>
                <div className="flex-1 text-right pt-1">
                  <div className="text-sm text-[#8B8376] mb-2">متوسط زمن التحقق</div>
                  <div className="text-xl lg:text-2xl text-[#1F1F1F] mb-2">٢.٣ ثانية</div>
                  <div className="text-base text-[#8B8376] leading-relaxed">
                    أسرع من المتوسط العالمي بنسبة ٤٥٪
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div className="text-right md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#006B4E] to-[#005540] rounded-xl flex items-center justify-center shadow-md">
                  <Shield className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-lg text-[#006B4E]">تحقق ميداني</h3>
                  <p className="text-xs text-[#8B8376]">SaudiGov Verify</p>
                </div>
              </div>
              <p className="text-base text-[#6B6457] leading-relaxed max-w-md">
                منصة ميدانية حكومية للتحقق من الهوية بسرعة ودقة عالية. نظام آمن ومشفّر بالكامل.
              </p>
            </div>

            <div className="text-right">
              <h4 className="text-base text-[#1F1F1F] mb-4">روابط سريعة</h4>
              <ul className="space-y-2.5">
                <li><a href="#home" className="text-base text-[#6B6457] hover:text-[#006B4E] transition-colors">الرئيسية</a></li>
                <li><a href="#how-it-works" className="text-base text-[#6B6457] hover:text-[#006B4E] transition-colors">كيف يعمل</a></li>
                <li><a href="#verification" className="text-base text-[#6B6457] hover:text-[#006B4E] transition-colors">التحقق</a></li>
                <li><a href="#dashboard" className="text-base text-[#6B6457] hover:text-[#006B4E] transition-colors">لوحة المتابعة</a></li>
              </ul>
            </div>

            <div className="text-right">
              <h4 className="text-base text-[#1F1F1F] mb-4">الأمان</h4>
              <ul className="space-y-2.5">
                <li className="flex items-center gap-2 text-[#6B6457]">
                  <ShieldCheck className="w-4 h-4 text-[#006B4E]" />
                  <span className="text-base">تشفير متقدم</span>
                </li>
                <li className="flex items-center gap-2 text-[#6B6457]">
                  <ShieldCheck className="w-4 h-4 text-[#006B4E]" />
                  <span className="text-base">بيانات آمنة</span>
                </li>
                <li className="flex items-center gap-2 text-[#6B6457]">
                  <ShieldCheck className="w-4 h-4 text-[#006B4E]" />
                  <span className="text-base">خصوصية محمية</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-base text-[#8B8376]">
              © ٢٠٢٥ تحقق ميداني - جميع الحقوق محفوظة
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-[#6B6457] hover:text-[#006B4E] transition-colors text-base">سياسة الخصوصية</a>
              <a href="#" className="text-[#6B6457] hover:text-[#006B4E] transition-colors text-base">الشروط والأحكام</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
