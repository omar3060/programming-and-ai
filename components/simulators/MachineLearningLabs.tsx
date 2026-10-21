'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';

type Lab = 'spam' | 'rl';
type RobotAction = 'right' | 'jump' | 'reset';

const robotTiles = [
  { titleAr: 'الخانة 1 (البداية)', titleEn: 'Tile 1 (Start)', icon: '🏁' },
  { titleAr: 'الخانة 2 (آمنة)', titleEn: 'Tile 2 (Safe)', icon: '🟩' },
  { titleAr: 'الخانة 3 (حفرة -10)', titleEn: 'Tile 3 (Pit -10)', icon: '🕳️' },
  { titleAr: 'الخانة 4 (الهدف +20)', titleEn: 'Tile 4 (Goal +20)', icon: '🏆' },
];

const rawPoints = [
  [55, 50], [75, 55], [62, 72], [138, 40], [155, 48], [142, 58],
  [215, 65], [235, 72], [222, 84],
];

export function MachineLearningLabs() {
  const { playSfx } = useApp();
  const [lab, setLab] = useState<Lab>('spam');
  const [feature1, setFeature1] = useState(4);
  const [feature2, setFeature2] = useState(6);
  const [biased, setBiased] = useState(false);
  const [clustered, setClustered] = useState(false);
  const [robotPosition, setRobotPosition] = useState(0);
  const [reward, setReward] = useState(0);
  const [robotMessage, setRobotMessage] = useState<{ ar: string; en: string } | null>(null);

  const isSpam = feature1 * 1.4 + feature2 * 0.6 + (biased ? 4.5 : 0) >= 8;
  const playClick = () => playSfx('click');

  const moveRobot = (action: RobotAction) => {
    if (action === 'reset') {
      playClick();
      setRobotPosition(0);
      setReward(0);
      setRobotMessage({
        ar: '🔄 تمت إعادة الروبوت للبداية (الحالة 1). اختر الإجراء المناسب للوصول للهدف دون الوقوع في الحفرة بالخانة 3!',
        en: '🔄 Robot reset to State 1. Choose actions to reach the Goal at Tile 4 without falling into the Pit at Tile 3!',
      });
      return;
    }
    if (action === 'right') {
      if (robotPosition === 1) {
        playSfx('error');
        setRobotPosition(2);
        setReward(value => value - 10);
        setRobotMessage({
          ar: '💥 وقع الروبوت في الحفرة (الخانة 3)! مكافأة سالبة (-10). تعلم الوكيل بالتجربة والخطأ أن التقدم العادي من الخانة 2 يؤدي للخسارة!',
          en: '💥 Fell into the Pit (Tile 3)! Penalty Reward (-10). Through trial & error, the agent learns stepping into Tile 3 is bad!',
        });
      } else if (robotPosition < 3) {
        playSfx('success');
        const nextPosition = robotPosition + 1;
        setRobotPosition(nextPosition);
        setReward(value => value + (nextPosition === 3 ? 20 : 5));
        setRobotMessage(nextPosition === 3 ? {
          ar: '🏆 وصل الروبوت للهدف (الخانة 4)! مكافأة كبرى (+20)!',
          en: '🏆 Reached the Goal (Tile 4)! Big Reward (+20)!',
        } : {
          ar: '✅ تقدم الروبوت للخانة 2 (+5 مكافأة). احذر: الخانة 3 بها حفرة!',
          en: '✅ Moved to Tile 2 (+5 reward). Watch out: Tile 3 is a Pit!',
        });
      }
      return;
    }
    if (robotPosition === 1) {
      playSfx('success');
      setRobotPosition(3);
      setReward(value => value + 25);
      setRobotMessage({
        ar: '🏆 إجراء مثالي! قفز الروبوت من الخانة 2 فوق الحفرة مباشرة إلى الهدف (الخانة 4) وحصل على مكافأة (+25)!',
        en: '🏆 Optimal Action! Jumped over the Pit from Tile 2 straight to the Goal (Tile 4) for +25 Reward!',
      });
    } else {
      playClick();
      setRobotMessage({
        ar: '💡 القفز مفيد عندما تكون في الخانة 2 أمام الحفرة مباشرة.',
        en: '💡 Jumping is most useful when standing on Tile 2 right before the Pit.',
      });
    }
  };

  return (
    <section className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div>
          <span className="text-[10px] text-emerald-400 uppercase font-bold tracking-wider">
            <span className="lang-ar">المعامل التفاعلية المزدوجة للدرس 7-1 (كتاب الوزارة ص 51 - 57)</span>
            <span className="lang-en">Dual Interactive Labs for Lesson 7-1 (pp. 58 - 65)</span>
          </span>
          <h3 className="text-lg font-black mt-0.5 flex items-center gap-2">
            <i className="fa-solid fa-flask-vial text-emerald-400"></i>
            <span className="lang-ar">المعمل (1): مختبر تصنيف البريد المزعج بالسمات • المعمل (2): محاكي التجميع ولعبة روبوت التعلم المعزز</span>
            <span className="lang-en">Lab 1: Spam Classification &amp; Features • Lab 2: Unsupervised Clustering &amp; RL Robot Game</span>
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => { playClick(); setLab('spam'); }} className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${lab === 'spam' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300'}`}>
            📧 <span className="lang-ar">المعمل 7-1أ: التصنيف والسمات والتحيز</span><span className="lang-en">Lab 7-1A: Spam Classifier &amp; Bias</span>
          </button>
          <button onClick={() => { playClick(); setLab('rl'); }} className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${lab === 'rl' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300'}`}>
            🤖 <span className="lang-ar">المعمل 7-1ب: التجميع ولعبة التعلم المعزز</span><span className="lang-en">Lab 7-1B: Clustering &amp; RL Robot Game</span>
          </button>
        </div>
      </div>

      {lab === 'spam' ? (
        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <label className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="font-bold flex justify-between gap-2">
                <span><span className="lang-ar">السمة 1 (Feature 1): عدد الكلمات المشبوهة</span><span className="lang-en">Feature 1: Suspicious Words</span></span>
                <span className="font-mono text-cyan-400">{feature1}</span>
              </span>
              <input aria-label="Feature 1: Suspicious Words" type="range" min="0" max="10" value={feature1} onChange={event => setFeature1(Number(event.target.value))} className="w-full accent-cyan-500" />
              <span className="text-[10px] text-sub"><span className="lang-ar">مثل: &quot;اربح مجاناً&quot;، &quot;عاجل&quot;، &quot;اضغط هنا&quot;</span><span className="lang-en">e.g., &quot;Free prize&quot;, &quot;Urgent&quot;, &quot;Click now&quot;</span></span>
            </label>
            <label className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="font-bold flex justify-between gap-2">
                <span><span className="lang-ar">السمة 2 (Feature 2): طول الرسالة والروابط</span><span className="lang-en">Feature 2: Body Length &amp; Links</span></span>
                <span className="font-mono text-emerald-400">{feature2}</span>
              </span>
              <input aria-label="Feature 2: Body Length and Links" type="range" min="0" max="10" value={feature2} onChange={event => setFeature2(Number(event.target.value))} className="w-full accent-emerald-500" />
              <span className="text-[10px] text-sub"><span className="lang-ar">دليل ثانٍ (Clue) لرسم الحد الفاصل</span><span className="lang-en">Second feature clue for decision boundary</span></span>
            </label>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-amber-500/30 space-y-2">
            <strong className="text-amber-400 text-xs"><span className="lang-ar">اختبار تحيز بيانات التدريب (Data Bias):</span><span className="lang-en">Training Data Bias Test:</span></strong>
            <button onClick={() => { playClick(); setBiased(value => !value); }} className={`w-full py-2 px-3 rounded-xl font-bold text-xs transition ${biased ? 'bg-rose-600 text-white' : 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/40'}`}>
              {biased
                ? <><span className="lang-ar">⚠️ بيانات التدريب: متحيزة ومنحرفة! (Data Bias)</span><span className="lang-en">⚠️ Training Data: Biased &amp; Skewed!</span></>
                : <><span className="lang-ar">⚖️ بيانات التدريب: متوازنة وعادلة ✅</span><span className="lang-en">⚖️ Training Data: Unbiased &amp; Fair ✅</span></>}
            </button>
            <p className="text-[10px] text-sub text-center"><span className="lang-ar">جرب تفعيل التحيز لترى كيف ينحرف الحد الفاصل!</span><span className="lang-en">Toggle bias to see the boundary skew!</span></p>
          </div>
          <div className={`p-4 rounded-xl text-xs leading-relaxed text-slate-200 ${biased ? 'bg-rose-950/50 border border-rose-500/50' : isSpam ? 'bg-amber-950/40 border border-amber-500/50' : 'bg-emerald-950/40 border border-emerald-500/50'}`}>
            {biased ? (
              <><span className="lang-ar">🚨 <strong>تنبيه تحيز بيانات التدريب ومشكلة الصندوق الأسود (ص 55 و 57):</strong> بسبب تدريب النموذج على بيانات منحرفة، انحرف الحد الفاصل وصنّف الرسالة على أنها <strong>&quot;بريد مزعج (Spam)&quot;</strong> حتى لو كانت رسالة عادية! لهذا يجب إبقاء <strong>الإنسان في الحلقة (Human-in-the-loop)</strong> لمراجعة القرارات المهمة.</span><span className="lang-en">🚨 <strong>Data Bias &amp; Black-Box Alert (pp. 62 &amp; 64):</strong> Because the training data is skewed, the decision boundary shifted and flagged even normal messages as <strong>Spam</strong>! Always keep a <strong>human in the loop</strong> for important judgments.</span></>
            ) : isSpam ? (
              <><span className="lang-ar">🚫 <strong>نتيجة التنبؤ (Prediction Stage — ص 53): بريد مزعج (Spam)!</strong><br />تجاوز مجموع السمات (الكلمات المشبوهة = {feature1}، وطول النص/الروابط = {feature2}) الحد الفاصل الذي تعلمه النموذج من البيانات الموسومة (<strong>التعلم الخاضع للإشراف — التصنيف</strong>).</span><span className="lang-en">🚫 <strong>Prediction Result (p. 60): Classified as SPAM!</strong><br />The combined features (Suspicious words = {feature1}, Length/links = {feature2}) crossed the decision boundary learned during <strong>Supervised Classification</strong>.</span></>
            ) : (
              <><span className="lang-ar">✅ <strong>نتيجة التنبؤ (Prediction Stage — ص 53): بريد عادي آمن (Not Spam)!</strong><br />السمات المستخرجة ({feature1} كلمات مشبوهة، طول {feature2}) تقع في الجانب الآمن من الحد الفاصل.</span><span className="lang-en">✅ <strong>Prediction Result (p. 60): Classified as Normal Mail (Not Spam)!</strong><br />The extracted features fall on the safe side of the learned classification boundary.</span></>
            )}
          </div>
        </div>
      ) : (
        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-slate-900 border border-cyan-500/30 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <strong className="text-cyan-400"><i className="fa-solid fa-diagram-project"></i> <span className="lang-ar">محاكي التجميع (Clustering — بدون وسوم ص 54)</span><span className="lang-en">Unsupervised Clustering (No Labels p. 61)</span></strong>
                <button onClick={() => { playClick(); setClustered(value => !value); }} className={`px-3 py-1 rounded-lg font-bold text-[11px] transition ${clustered ? 'bg-emerald-600 text-white' : 'bg-cyan-600 text-white'}`}>
                  <span className="lang-ar">{clustered ? '🔄 إعادة البيانات الخام (قبل التجميع)' : '▶️ تشغيل خوارزمية التجميع'}</span><span className="lang-en">{clustered ? '🔄 Reset Raw Unlabeled Data' : '▶️ Run Clustering'}</span>
                </button>
              </div>
              <div className="w-full h-36 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center">
                <svg viewBox="0 0 280 120" className="w-full h-full" role="img" aria-label="Unsupervised clustering plot">
                  {clustered && <><circle cx="65" cy="60" r="38" fill="rgba(16,185,129,0.12)" stroke="#10b981" strokeDasharray="4,2" /><circle cx="145" cy="45" r="32" fill="rgba(56,189,248,0.12)" stroke="#38bdf8" strokeDasharray="4,2" /><circle cx="225" cy="70" r="34" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" strokeDasharray="4,2" /></>}
                  {rawPoints.map(([cx, cy], index) => <circle key={index} cx={cx} cy={cy} r="5" fill={clustered ? (index < 3 ? '#10b981' : index < 6 ? '#38bdf8' : '#f59e0b') : '#94a3b8'} />)}
                </svg>
              </div>
              <p className="text-[11px] text-sub">
                {clustered
                  ? <><span className="lang-ar">✅ <strong>بعد التجميع (Clustering — ص 54):</strong> اكتشف الحاسوب 3 مجموعات متشابهة تلقائياً <strong>بدون وسوم مسبقة</strong>، والآن يأتي دور الإنسان لتفسير معنى كل مجموعة!</span><span className="lang-en">✅ <strong>After Clustering (p. 61):</strong> The algorithm discovered 3 natural groups <strong>without prior labels</strong>; humans now interpret what each cluster means!</span></>
                  : <><span className="lang-ar">⚪ <strong>قبل التجميع:</strong> بيانات إدخال غير موسومة (Unlabeled data). اضغط &quot;تشغيل&quot; لترى كيف يجمع التعلم غير الخاضع للإشراف العناصر المتشابهة معاً.</span><span className="lang-en">⚪ <strong>Before Clustering:</strong> Unlabeled input points. Click &quot;Run Clustering&quot; to see unsupervised grouping in action.</span></>}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-purple-500/30 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <strong className="text-purple-400"><i className="fa-solid fa-robot"></i> <span className="lang-ar">لعبة التعلم المعزز (الحالة • الإجراء • المكافأة ص 55)</span><span className="lang-en">Reinforcement Learning Robot (State • Action • Reward)</span></strong>
                <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono font-bold">Reward: {reward}</span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center font-bold py-1">
                {robotTiles.map((tile, index) => (
                  <div key={tile.titleEn} className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1 ${index === robotPosition ? 'bg-purple-900/60 border-purple-400' : 'bg-slate-950 border-slate-800'}`}>
                    <span className="text-lg">{index === robotPosition ? '🤖' : tile.icon}</span>
                    <span className="text-[10px] text-sub"><span className="lang-ar">{tile.titleAr}</span><span className="lang-en">{tile.titleEn}</span></span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex gap-1.5">
                  <button onClick={() => moveRobot('right')} className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-[11px]"><span className="lang-ar">إجراء: تقدم للأمام ⬅️</span><span className="lang-en">Action: Step Forward ➡️</span></button>
                  <button onClick={() => moveRobot('jump')} className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold text-[11px]"><span className="lang-ar">إجراء: قفز فوق الحفرة 🦘</span><span className="lang-en">Action: Jump Pit 🦘</span></button>
                  <button onClick={() => moveRobot('reset')} aria-label="Reset robot" className="px-2.5 py-1.5 rounded-lg bg-slate-700 text-white">🔄</button>
                </div>
                <span className="text-[11px] font-mono text-slate-300"><span className="lang-ar">الحالة (State): الخانة {robotPosition + 1}</span><span className="lang-en">State: Tile {robotPosition + 1}</span></span>
              </div>
              {robotMessage && <p className="text-[11px] text-slate-300"><span className="lang-ar">{robotMessage.ar}</span><span className="lang-en">{robotMessage.en}</span></p>}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
