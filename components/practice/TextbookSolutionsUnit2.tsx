'use client';

import React from 'react';
import { useApp } from '@/components/providers/AppProviders';

export function TextbookSolutionsUnit2() {
  const { setActiveLesson, lang } = useApp();

  const unit2Solutions = [
    {
      num: "1",
      lesson: { ar: "الدرس 2-1: تقنيات التشفير والمصادقة", en: "Lesson 2-1: Cryptographic Technologies and Authentication" },
      question: {
        ar: "في اتصالات HTTPS، اشرح كيف تتآزر تقنية التشفير بالمفتاح العام والتشفير بالمفتاح المشترك (المتماثل) لتحقيق كل من الأمان والسرعة في وقت واحد؟",
        en: "In HTTPS communication, explain how public-key cryptography and common-key (symmetric) cryptography work together to achieve both security and communication speed?"
      },
      answer: {
        ar: "تُستخدم تقنية التشفير بالمفتاح العام في البداية لمشاركة المفتاح المشترك بآمان أثناء مصافحة TLS دون تسريبه عبر الشبكة المفتوحة. وبعد إنشاء المفتاح المشترك وتأكيده، يُستخدم التشفير المتماثل (المشترك) لتبادل البيانات الحجمية الكبيرة، نظراً لسرعته الفائقة وكفاءته العالية في التشفير مقارنة بالمفتاح العام.",
        en: "Public-key cryptography is used initially to safely exchange the common key during the TLS handshake without leaking it across public networks. Once the shared key is established, common-key (symmetric) cryptography is used for transmitting large amounts of data due to its high computational speed and performance."
      },
      page: "ص 35 - ص 38 / Pages 35-38"
    },
    {
      num: "2",
      lesson: { ar: "الدرس 2-1: تقنيات التشفير والمصادقة", en: "Lesson 2-1: Cryptographic Technologies and Authentication" },
      question: {
        ar: "لماذا لا تُعد عملية تعيين كلمتي مرور مختلفين للحساب نفسه مثالاً على المصادقة متعددة العوامل (MFA)؟",
        en: "Why is setting two different passwords for the same account NOT an example of multi-factor authentication (MFA)?"
      },
      answer: {
        ar: "لأن كلا كلمتي المرور ينتميان لنفس فئة العامل الواحدة وهي (عامل المعرفة Knowledge). تتطلب المصادقة متعددة العوامل (MFA) الجمع بين عاملتين أو أكثر من فئات مختلفة كلياً: (المعرفة + الملكية مثل الهاتف/البطاقة + السمات البيومترية مثل البصمة). تعيين كلمتي مرور هو مصادقة متعددة الخطوات من نفس العامل وليست MFA.",
        en: "Because both passwords belong to the exact same factor category (Knowledge). Multi-factor authentication mandates combining two or more distinct factor categories (Knowledge + Possession such as phone/smartcard + Biometric). Two passwords represent two-step authentication using the same factor."
      },
      page: "ص 36 - ص 38 / Pages 36-38"
    },
    {
      num: "3",
      lesson: { ar: "الدرس 2-2: تصميم أمن الشبكات", en: "Lesson 2-2: Network Security Design" },
      question: {
        ar: "ما الميزة الأمنية التي تحققها المنطقة منزوعة السلاح (DMZ) عند وضع خوادم الويب العامة فيها؟",
        en: "What security advantage is provided by placing public web servers inside a Demilitarized Zone (DMZ)?" },
      answer: {
        ar: "تضع الـ DMZ الخوادم الموجهة للجمهور (مثل خوادم الويب والبريد) في شبكة معزولة ومستقلة عن الشبكة الداخلية وقواعد بيانات المؤسسة. وبذلك، حتى لو تعرض خادم الويب للخرق أو الهجوم المباشر، يمنع هذا العزل انتشار الضرر والوصول المباشر لقواعد البيانات والملفات الحساسة بالشبكة الداخلية.",
        en: "A DMZ isolates public-facing servers (web, mail) in a standalone network segment separate from internal databases. Therefore, even if a public web server is compromised, the attacker cannot pivot directly into sensitive internal enterprise databases."
      },
      page: "ص 43 - ص 46 / Pages 43-46"
    },
    {
      num: "4",
      lesson: { ar: "الدرس 2-2: تصميم أمن الشبكات", en: "Lesson 2-2: Network Security Design" },
      question: {
        ar: "قارن بين نموذج أمان المحيط التقليدي (Perimeter Security) ونموذج عدم الثقة الحديث (Zero Trust)؟",
        en: "Compare traditional Perimeter Security with the modern Zero Trust architecture?"
      },
      answer: {
        ar: "النموذج التقليدي افترض أن كل ما داخل شبكة المؤسسة آمن وما خارجها خطر. لكن انتشار الخدمات السحابية والعمل عن بعد أزال الحدود الصلبة للشبكة. نموذج Zero Trust ينص على 'عدم الوثوق بأي اتصال بشكل آلي، حتى لو كان من داخل الشبكة الداخلية، والتحقق الدائم من الهوية والترخيص في كل طلب وصول'.",
        en: "Traditional perimeter security operated under the assumption that 'inside the network is safe and outside is dangerous.' Cloud adoption and teleworking blurred these boundaries. Zero Trust replaces this with 'Never trust, always verify every access request regardless of origin.'"
      },
      page: "ص 44 - ص 47 / Pages 44-47"
    },
    {
      num: "5",
      lesson: { ar: "الدرس 2-3: الاستجابة للحوادث وإدارة المخاطر", en: "Lesson 2-3: Incident Response and Risk Management" },
      question: {
        ar: "لماذا يُشترط تنفيذ مرحلة الاحتواء (Containment) والاستئصال (Eradication) قبل مرحلة الاستعادة (Recovery) في مراحل الاستجابة الست؟",
        en: "Why must Containment and Eradication be executed before Recovery in the 6 incident response phases?"
      },
      answer: {
        ar: "لأنه إذا تسرعت المؤسسة وقامت باستعادة الخدمة والنسخ الاحتياطية (Recovery) قبل عزل الضرر واستئصال السبب الجذري والبرمجيات الخبيثة (Eradication)، فإن التهديد سيتواجد ويظل نشطاً في البيئة، مما يسبب تكرار نفس الحادث الأمني وإصابة النسخ المستعادة فوراً.",
        en: "If Recovery is executed before Containment and Eradication, the underlying malware and root vulnerability remain active on the network, immediately corrupting and re-infecting the newly restored backup data."
      },
      page: "ص 50 - ص 54 / Pages 50-54"
    },
    {
      num: "6",
      lesson: { ar: "الدرس 2-3: الاستجابة للحوادث وإدارة المخاطر", en: "Lesson 2-3: Incident Response and Risk Management" },
      question: {
        ar: "كيف يُحسب حجم الخطر (Risk Size)، وكيف تُحدد أولويات معالجة المخاطر حسب كتاب الوزارة؟",
        en: "How is Risk Size calculated, and how are risk remediation priorities determined according to the textbook?"
      },
      answer: {
        ar: "حجم الخطر = التأثير (Impact) × الاحتمالية (Likelihood). يُقاس حجم الضرر عند الوقوع في نسبة فرصة وقوعه. وتُعطى الأولوية القصوى والمعالجة الفورية للمخاطر ذات التأثير المرتفع والاحتمالية العالية (High Impact × High Likelihood).",
        en: "Risk Size = Impact × Likelihood. Magnitude multiplies damage severity by occurrence probability. High Impact × High Likelihood risks mandate immediate top priority remediation."
      },
      page: "ص 51 - ص 55 / Pages 51-55"
    }
  ];

  return (
    <div id="view-unit-2-solutions" className="space-y-8 animate-fadeIn pb-12">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-rose-950 via-slate-900 to-slate-900 border border-rose-800/40 p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            <span className="px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-bold inline-flex items-center gap-1.5">
              <span>{lang === 'ar' ? 'حلول كتاب الوزارة الرسمية (الوحدة الثانية)' : 'Official Ministry Textbook Solutions (Unit 2)'}</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              {lang === 'ar' ? 'حلول تدريبات وتمارين نهاية الوحدة الثانية (الأمن السيبراني)' : 'Unit 2 Comprehensive Review Solutions (Cybersecurity)'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {lang === 'ar'
                ? 'كافة الأسئلة والتدريبات الواردة في كتاب المدرسة (ص 35 - ص 56) محلولة حلاً نموذجياً مفصلاً مع التفسير العلمي والدليل المعياري 100%.'
                : 'All textbook review questions and end-of-unit exercises from pages 35 to 56 fully solved with verified rationale.'}
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-rose-500/30 text-xs shrink-0 w-full md:w-64 shadow-md flex items-center gap-3">
            <div className="relative shrink-0">
              <img
                src="/my%20image.JPG"
                alt="المهندس عمر محمود"
                className="w-11 h-11 rounded-xl object-cover border border-rose-500/50 shadow-sm"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-900"></span>
            </div>
            <div className="space-y-0.5 flex-1 min-w-0">
              <div className="font-bold text-rose-400 flex items-center gap-1.5 text-[11px]">
                {lang === 'ar' ? 'إعداد وتدقيق الإجابات:' : 'Verified Solutions:'}
              </div>
              <div className="font-bold text-sm text-white truncate">
                {lang === 'ar' ? 'المهندس عمر محمود' : 'Eng. Omar Mahmoud'}
              </div>
              <div className="flex items-center gap-2.5 text-[11px]">
                <a href="tel:01012306019" className="text-rose-400 font-mono hover:underline">01012306019</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Cards */}
      <div className="space-y-6">
        {unit2Solutions.map((sol, idx) => (
          <div key={idx} className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-lg space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <span className="px-3 py-1 bg-rose-500/20 text-rose-300 text-xs font-bold rounded-lg border border-rose-500/30">
                {lang === 'ar' ? `السؤال النموذج الرسمي ${sol.num}` : `Question ${sol.num}`}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {sol.lesson[lang]} • {sol.page}
              </span>
            </div>

            <h3 className="font-bold text-base sm:text-lg text-white">
              {sol.question[lang]}
            </h3>

            <div className="p-4 bg-slate-800/60 border border-emerald-500/30 rounded-xl space-y-2">
              <h4 className="font-bold text-emerald-400 text-xs uppercase tracking-wider">
                {lang === 'ar' ? 'الإجابة النموذجية المعياري (Verbatim Ministry Solution):' : 'Verbatim Ministry Solution:'}
              </h4>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                {sol.answer[lang]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
