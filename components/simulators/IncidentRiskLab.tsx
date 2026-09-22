'use client';

import React, { useState } from 'react';
import { Language } from '../../types';
import { ShieldAlert, AlertTriangle, CheckCircle2, Play, RefreshCw, Calculator, Layers, ArrowRight, ShieldCheck, Flame, Server, FileText, CheckCircle } from 'lucide-react';

interface IncidentRiskLabProps {
  lang: Language;
}

export const IncidentRiskLab: React.FC<IncidentRiskLabProps> = ({ lang }) => {
  // Tab state: 'response' | 'risk-matrix'
  const [activeTab, setActiveTab] = useState<'response' | 'risk-matrix'>('response');

  // Incident Simulation State
  const [incidentStep, setIncidentStep] = useState<number>(0);
  const [incidentLog, setIncidentLog] = useState<string[]>([]);
  const [simulationStatus, setSimulationStatus] = useState<'idle' | 'running' | 'warning' | 'success'>('idle');
  const [warningMsg, setWarningMsg] = useState<{ ar: string; en: string } | null>(null);

  const phases = [
    {
      id: 1,
      title: { ar: "1. التحضير", en: "1. Preparation" },
      desc: { ar: "إعداد فريق الاستجابة، خطط الطوارئ، وتجهيز النسخ الاحتياطية المضمونة.", en: "Setting up CSIRT, contingency plans, and verified secure backups." },
      badge: "Pre-Attack"
    },
    {
      id: 2,
      title: { ar: "2. الكشف والتحليل", en: "2. Detection & Analysis" },
      desc: { ar: "اكتشاف التهديد، رصد إنذارات الأنظمة، وتحديد نطاق وهدف الهجوم.", en: "Detecting anomalies, monitoring alerts, and determining attack scope." },
      badge: "Attack Detected"
    },
    {
      id: 3,
      title: { ar: "3. الاحتواء", en: "3. Containment" },
      desc: { ar: "عزل الأجهزة المصابة وفصلها فوراً عن الشبكة للحد من انتشار الضرر.", en: "Isolating infected systems to freeze damage progression across the enterprise." },
      badge: "Critical Action"
    },
    {
      id: 4,
      title: { ar: "4. الاستئصال وإزالة التهديد", en: "4. Eradication" },
      desc: { ar: "حذف البرمجيات الخبيثة، سد الثغرات المكتشفة، وحذف الحسابات المخترقة.", en: "Purging malware, patching exploited flaws, and revoking compromised accounts." },
      badge: "Remediation"
    },
    {
      id: 5,
      title: { ar: "5. الاستعادة", en: "5. Recovery" },
      desc: { ar: "استعادة الأنظمة من نسخ احتياطية نظيفة والتحقق من سلامتها قبل إعادة الخدمة.", en: "Restoring clean backups and validating data integrity before bringing services online." },
      badge: "Restoration"
    },
    {
      id: 6,
      title: { ar: "6. الدروس المستفادة والتحسين", en: "6. Prevention of Recurrence" },
      desc: { ar: "تحليل أسباب الحادث، تحديث سياسات الأمان، وتدعيم الدفاعات لمنع التكرار.", en: "Post-incident audit, policy updates, and defense hardening to prevent repeat breaches." },
      badge: "Post-Incident"
    }
  ];

  const handleStepClick = (phaseId: number) => {
    // Check correct sequence
    const expectedNext = incidentStep + 1;
    if (phaseId === expectedNext) {
      setIncidentStep(phaseId);
      setWarningMsg(null);
      const phaseObj = phases.find(p => p.id === phaseId);
      const logEntry = lang === 'ar' 
        ? `[تم تنفيذ الخطوة ${phaseId} بنجاح]: ${phaseObj?.title.ar}` 
        : `[Step ${phaseId} Executed Successfully]: ${phaseObj?.title.en}`;
      setIncidentLog(prev => [...prev, logEntry]);
      if (phaseId === 6) {
        setSimulationStatus('success');
      } else {
        setSimulationStatus('running');
      }
    } else if (phaseId > expectedNext) {
      // User jumped ahead!
      if (phaseId === 5 && incidentStep < 4) {
        // Recovery before eradication!
        setSimulationStatus('warning');
        setWarningMsg({
          ar: "🚨 خطأ أمني جسيم! حاول الاستعادة (Recovery) قبل الاستئصال (Eradication) والاحتواء (Containment)! ستظل البرمجية الخبيثة نشطة وتصيب النسخ المستعادة فوراً!",
          en: "🚨 Severe Security Failure! Attempted Recovery before Eradication and Containment! Malware will remain active and infect restored backups immediately!"
        });
      } else if (phaseId >= 4 && incidentStep < 3) {
        // Eradication before containment
        setSimulationStatus('warning');
        setWarningMsg({
          ar: "⚠️ تحذير: محاولة الاستئصال دون احتواء الضرر أولاً ستسمح للهجوم بالانتشار لباقي خوادم المؤسسة أثناء التنظيف!",
          en: "⚠️ Warning: Attempting Eradication without isolating systems first allows malware to spread to other servers during cleaning!"
        });
      } else {
        setSimulationStatus('warning');
        setWarningMsg({
          ar: `⚠️ يجب تنفيذ مرحلة (${phases[expectedNext - 1]?.title.ar}) أولاً حسب التسلسل القياسي للاستجابة للحوادث.`,
          en: `⚠️ You must execute (${phases[expectedNext - 1]?.title.en}) first following standard Incident Response sequencing.`
        });
      }
    }
  };

  const resetSimulation = () => {
    setIncidentStep(0);
    setIncidentLog([]);
    setSimulationStatus('idle');
    setWarningMsg(null);
  };

  // Risk Matrix Calculator State
  const [impact, setImpact] = useState<number>(3); // 1 to 5
  const [likelihood, setLikelihood] = useState<number>(3); // 1 to 5

  const scenarios = [
    {
      name: { ar: "هجوم فدية Ransomware على قاعدة بيانات الطلاب", en: "Ransomware Attack on Student DB" },
      imp: 5,
      like: 4,
      desc: { ar: "تأثير كارثي (توقف الدراسة والدفع) + احتمالية مرتفعة (هجمات شائعة)", en: "Catastrophic impact + High likelihood" }
    },
    {
      name: { ar: "سرقة كمبيوتر محمول شخصي لموظف (بدون تشفير)", en: "Stolen Unencrypted Employee Laptop" },
      imp: 4,
      like: 3,
      desc: { ar: "تأثير مرتفع (تسريب بيانات) + احتمالية متوسطة", en: "High impact (data leak) + Moderate likelihood" }
    },
    {
      name: { ar: "رسالة اصطياد مجانية استلمها معلم واحد ولم يفتحها", en: "Phishing Email to Single Staff (Unopened)" },
      imp: 2,
      like: 5,
      desc: { ar: "تأثير منخفض (لم تُفتح) + احتمالية شائعة جداً", en: "Low impact + Very frequent occurrence" }
    },
    {
      name: { ar: "عطل كهربائي طارئ في غرفة السيرفر لمدة 5 دقائق", en: "5-Minute Server Room Power Outage" },
      imp: 2,
      like: 2,
      desc: { ar: "تأثير ضئيل + احتمالية منخفضة لوجود مولد احتياطي", en: "Minor impact + Low likelihood due to UPS" }
    }
  ];

  const applyScenario = (sc: typeof scenarios[0]) => {
    setImpact(sc.imp);
    setLikelihood(sc.like);
  };

  const riskSize = impact * likelihood; // range 1 to 25

  const getRiskCategory = (score: number) => {
    if (score >= 15) {
      return {
        level: { ar: "خطر مرتفع جداً (High Risk)", en: "High Risk (Critical)" },
        color: "bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/40",
        action: { ar: "أولوية قصوى: معالجة فورية وتوفير ميزانية عاجلة لحظر الخطر وتطبيق ضوابط فورية.", en: "Top Priority: Immediate remediation and urgent resource allocation to mitigate risk." },
        icon: ShieldAlert
      };
    } else if (score >= 8) {
      return {
        level: { ar: "خطر متوسط (Medium Risk)", en: "Medium Risk (Moderate)" },
        color: "bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/40",
        action: { ar: "معالجة مجدولة: خطة عمل خلال أسابيع مع مراقبة دورية وإجراءات وقائية.", en: "Scheduled Mitigation: Action plan within weeks with periodic monitoring." },
        icon: AlertTriangle
      };
    } else {
      return {
        level: { ar: "خطر منخفض (Low Risk)", en: "Low Risk (Acceptable)" },
        color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/40",
        action: { ar: "مراقبة روتينية: قبول الخطر أو المعالجة بضوابط بسيطة منخفضة التكلفة.", en: "Routine Monitoring: Accept risk or apply low-cost standard baseline controls." },
        icon: CheckCircle2
      };
    }
  };

  const currentRisk = getRiskCategory(riskSize);
  const RiskIcon = currentRisk.icon;

  return (
    <div className="my-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 bg-rose-500/20 text-rose-400 rounded-lg">
              <ShieldAlert className="w-6 h-6" />
            </span>
            <h3 className="text-xl font-bold text-white">
              {lang === 'ar' ? 'معمل الاستجابة للحوادث وتقييم المخاطر السيبرانية' : 'Incident Response & Risk Assessment Lab'}
            </h3>
          </div>
          <p className="text-slate-400 text-sm mt-1">
            {lang === 'ar'
              ? 'تطبيق عملي تفاعلي لمراحل الاستجابة الست وحساب حجم الخطر (Risk Size = Impact × Likelihood)'
              : 'Interactive simulator for 6 IR phases and Risk Size formula calculation'}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center bg-slate-800/80 p-1 rounded-xl border border-slate-700/60">
          <button
            onClick={() => setActiveTab('response')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'response'
                ? 'bg-rose-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Flame className="w-4 h-4" />
            {lang === 'ar' ? 'مراحل الاستجابة للحوادث (6 Phases)' : 'Incident Response (6 Phases)'}
          </button>
          <button
            onClick={() => setActiveTab('risk-matrix')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'risk-matrix'
                ? 'bg-rose-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Calculator className="w-4 h-4" />
            {lang === 'ar' ? 'حاسبة حجم الخطر (Risk Calculator)' : 'Risk Calculator (Impact × Likelihood)'}
          </button>
        </div>
      </div>

      {/* TAB 1: INCIDENT RESPONSE SIMULATION */}
      {activeTab === 'response' && (
        <div className="mt-6 space-y-6">
          <div className="bg-rose-950/30 border border-rose-800/50 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-rose-500"></span>
              </span>
              <div>
                <h4 className="font-bold text-rose-300">
                  {lang === 'ar' ? 'سيناريو طوارئ: هجوم فدية (Ransomware Outbreak)' : 'Incident Scenario: Ransomware Outbreak'}
                </h4>
                <p className="text-xs text-rose-200/80">
                  {lang === 'ar'
                    ? 'أجهزة الموظفين تُظهر رسالة تشفير وتطلب فدية. قم بتنفيذ مراحل الاستجابة الست بالترتيب الصحيح!'
                    : 'Workstations show encryption ransom note. Execute the 6 response phases in standard strict sequence!'}
                </p>
              </div>
            </div>
            <button
              onClick={resetSimulation}
              className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-lg border border-slate-700 transition"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              {lang === 'ar' ? 'إعادة الإعادة' : 'Reset Simulator'}
            </button>
          </div>

          {/* Warning Message Box */}
          {warningMsg && (
            <div className="p-4 bg-rose-500/20 border border-rose-500/60 rounded-xl flex items-start gap-3 animate-headshake">
              <AlertTriangle className="w-6 h-6 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-rose-300 text-sm">
                  {lang === 'ar' ? 'خطأ في تسلسل العمليات!' : 'Sequence Execution Warning!'}
                </h5>
                <p className="text-xs text-rose-200 mt-1 leading-relaxed">
                  {warningMsg[lang]}
                </p>
              </div>
            </div>
          )}

          {/* Success Banner */}
          {simulationStatus === 'success' && (
            <div className="p-4 bg-emerald-500/20 border border-emerald-500/60 rounded-xl flex items-center gap-3">
              <CheckCircle2 className="w-7 h-7 text-emerald-400 shrink-0" />
              <div>
                <h5 className="font-bold text-emerald-300 text-base">
                  {lang === 'ar' ? '🎉 تم إنقاذ المؤسسة والقضاء على الحادث الأمني بنجاح!' : '🎉 Enterprise Saved & Incident Resolved Successfully!'}
                </h5>
                <p className="text-xs text-emerald-200 mt-1">
                  {lang === 'ar'
                    ? 'لقد قمت بتطبيق دورة الاستجابة الست كاملة بالترتيب الصحيح (من التحضير حتى منع التكرار).'
                    : 'You successfully applied all 6 response phases in accurate textbook order.'}
                </p>
              </div>
            </div>
          )}

          {/* 6 Phases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {phases.map((phase) => {
              const isDone = incidentStep >= phase.id;
              const isNext = incidentStep + 1 === phase.id;

              return (
                <div
                  key={phase.id}
                  onClick={() => handleStepClick(phase.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer relative overflow-hidden ${
                    isDone
                      ? 'bg-slate-800/90 border-emerald-500/50 text-white shadow-lg'
                      : isNext
                      ? 'bg-slate-800/60 border-rose-500 hover:border-rose-400 hover:bg-slate-800 text-slate-200 ring-2 ring-rose-500/30'
                      : 'bg-slate-900/50 border-slate-800 text-slate-500 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                      isDone
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : isNext
                        ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30 animate-pulse'
                        : 'bg-slate-800 text-slate-500'
                    }`}>
                      {phase.badge}
                    </span>
                    {isDone && <CheckCircle className="w-5 h-5 text-emerald-400" />}
                  </div>

                  <h4 className="font-bold text-base mb-1 text-white">
                    {phase.title[lang]}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {phase.desc[lang]}
                  </p>

                  <div className="mt-4 flex justify-end">
                    <button
                      className={`text-xs font-semibold px-3 py-1 rounded-lg flex items-center gap-1 transition ${
                        isDone
                          ? 'bg-emerald-500/20 text-emerald-300'
                          : isNext
                          ? 'bg-rose-600 hover:bg-rose-500 text-white'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {isDone ? (lang === 'ar' ? 'تم التنفيذ' : 'Executed') : (lang === 'ar' ? 'تشغيل المرحلة' : 'Execute Phase')}
                      <ArrowRight className={`w-3 h-3 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Audit Log Terminal */}
          <div className="bg-black/80 rounded-xl p-4 border border-slate-800 font-mono text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-2">
              <span className="text-slate-400 font-bold flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-400" />
                {lang === 'ar' ? 'سجل أحداث الاستجابة (CSIRT Audit Log)' : 'CSIRT Incident Execution Log'}
              </span>
              <span className="text-slate-500">Status: {simulationStatus.toUpperCase()}</span>
            </div>
            <div className="space-y-1 max-h-36 overflow-y-auto">
              {incidentLog.length === 0 ? (
                <p className="text-slate-600 italic">
                  {lang === 'ar' ? '> انقر فوق الخطوة الأولى "1. التحضير" لبدء محاكاة الاستجابة...' : '> Click on Phase 1 "1. Preparation" to begin incident response simulation...'}
                </p>
              ) : (
                incidentLog.map((log, idx) => (
                  <p key={idx} className="text-emerald-400">
                    {log}
                  </p>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: RISK SIZE CALCULATOR */}
      {activeTab === 'risk-matrix' && (
        <div className="mt-6 space-y-6">
          {/* Preset Scenarios */}
          <div>
            <label className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2 block">
              {lang === 'ar' ? 'اختر سيناريو تعليمي من الكتاب المدرسي:' : 'Select Textbook Learning Scenario:'}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {scenarios.map((sc, i) => (
                <button
                  key={i}
                  onClick={() => applyScenario(sc)}
                  className="p-3 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl text-right hover:border-rose-500/50 transition flex flex-col justify-between"
                >
                  <span className="text-xs font-bold text-rose-300 block mb-1">
                    {sc.name[lang]}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {sc.desc[lang]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Calculator Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-slate-800/40 p-5 rounded-xl border border-slate-800">
            {/* Sliders (8 Cols) */}
            <div className="md:col-span-7 space-y-6">
              {/* Impact Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-slate-200 flex items-center gap-2">
                    <Flame className="w-4 h-4 text-orange-400" />
                    {lang === 'ar' ? 'حجم التأثير (Impact) [1 - 5]:' : 'Impact Severity [1 - 5]:'}
                  </label>
                  <span className="text-lg font-extrabold text-orange-400 bg-orange-500/10 px-3 py-0.5 rounded-lg border border-orange-500/20">
                    {impact}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={impact}
                  onChange={(e) => setImpact(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>1 (طفيف / Minor)</span>
                  <span>3 (متوسط / Moderate)</span>
                  <span>5 (كارثي / Catastrophic)</span>
                </div>
              </div>

              {/* Likelihood Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-slate-200 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    {lang === 'ar' ? 'احتمالية التكرار (Likelihood) [1 - 5]:' : 'Likelihood Frequency [1 - 5]:'}
                  </label>
                  <span className="text-lg font-extrabold text-amber-400 bg-amber-500/10 px-3 py-0.5 rounded-lg border border-amber-500/20">
                    {likelihood}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={likelihood}
                  onChange={(e) => setLikelihood(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>1 (نادر / Rare)</span>
                  <span>3 (محتمل / Possible)</span>
                  <span>5 (مؤكد / Almost Certain)</span>
                </div>
              </div>

              {/* Formula Display */}
              <div className="p-3 bg-black/40 rounded-xl border border-slate-800 text-xs font-mono text-center text-slate-300">
                {lang === 'ar'
                  ? `حجم الخطر (Risk Size) = ${impact} (التأثير) × ${likelihood} (الاحتمالية) = ${riskSize}`
                  : `Risk Size = ${impact} (Impact) × ${likelihood} (Likelihood) = ${riskSize}`}
              </div>
            </div>

            {/* Score Result Box (5 Cols) */}
            <div className="md:col-span-5 flex flex-col justify-between p-5 rounded-xl border border-slate-700/60 bg-slate-900/90 shadow-lg">
              <div>
                <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">
                  {lang === 'ar' ? 'نتيجة تقييم الخطر:' : 'Risk Assessment Output:'}
                </span>
                
                <div className="mt-3 flex items-baseline gap-3">
                  <span className="text-5xl font-black text-white">
                    {riskSize}
                  </span>
                  <span className="text-sm text-slate-400">/ 25</span>
                </div>

                <div className={`mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-bold border ${currentRisk.color}`}>
                  <RiskIcon className="w-4 h-4" />
                  {currentRisk.level[lang]}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800">
                <h5 className="text-xs font-bold text-slate-300 mb-1">
                  {lang === 'ar' ? 'إستراتيجية الاستجابة المطلوبة:' : 'Mandatory Action Strategy:'}
                </h5>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {currentRisk.action[lang]}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
