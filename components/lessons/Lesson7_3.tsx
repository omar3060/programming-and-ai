'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { Unit7LessonQuiz } from '@/components/lessons/Unit7LessonQuiz';
import { GenerativeAiLabs } from '@/components/simulators/GenerativeAiLabs';

export function Lesson7_3(){
const {playSfx,setActiveLesson}=useApp();const [expandedCards,setExpandedCards]=useState<Record<string,boolean>>({});const [conceptTab,setConceptTab]=useState('token');const toggleCard=(id:string)=>{playSfx('click');setExpandedCards(current=>({...current,[id]:!current[id]}))};const navigate=(view:Parameters<typeof setActiveLesson>[0])=>{playSfx('click');setActiveLesson(view);window.scrollTo({top:0,behavior:'smooth'})};return (
<div id="view-lesson-7-3" className="lesson-view space-y-8 animate-fadeIn">

                
                <div className="theme-panel border p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-lg">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="space-y-2 max-w-3xl">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-bold flex items-center gap-1.5">
                                    <i className="fa-solid fa-wand-magic-sparkles"></i>
                                    <span className="lang-ar">الدرس 7-3 (كتاب الوزارة ص 67 - ص 74)</span>
                                    <span className="lang-en">Lesson 7-3 (Textbook pp. 77 - 85)</span>
                                </span>
                                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-bold">
                                    <span className="lang-ar">نماذج اللغة الكبيرة (LLM) والذكاء التوليدي</span>
                                    <span className="lang-en">LLMs, RLHF, Hallucination & Multimodality</span>
                                </span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-black">
                                <span className="lang-ar">نماذج اللغة الكبيرة (LLM) والذكاء الاصطناعي التوليدي</span>
                                <span className="lang-en">Large Language Models (LLM) and Generative AI</span>
                            </h2>
                            <p className="text-xs sm:text-sm text-sub leading-relaxed">
                                <span className="lang-ar">شرح تفاعلي شامل للدرس الثالث والأخير في الوحدة السابعة: آلية عمل نموذج اللغة (Language Model) بتكرار التنبؤ بالكلمة أو الرمز النصي التالي (Next-word/token prediction)، سبب حدوث الهلوسة (Hallucination: اختيار الكلمة المعقولة إحصائياً وليس الحقيقة المؤكدة)، معنى كلمة &quot;كبير&quot; في LLM (كمية بيانات التدريب + عدد معلمات النموذج Parameters بالملليارات والتريليونات + بنية المحوّل Transformer)، المراحل الثلاث للضبط بالتعلم المعزز من التغذية الراجعة البشرية (RLHF)، وتعدد الوسائط (Multimodality: النص والصورة والصوت والفيديو في تمثيل عددي مشترك).</span>
                                <span className="lang-en">Comprehensive interactive breakdown of Lesson 7-3: How a Language Model generates text by repeatedly predicting the next word/token, why Hallucination occurs (selecting statistically plausible tokens rather than guaranteed truth), what makes an LLM &quot;Large&quot; (training data volume + billions/trillions of parameters + Transformer architecture), the 3 stages of RLHF tuning, and Multimodality (converting text, images, audio, and video into a common numerical representation).</span>
                            </p>
                        </div>

                        
                        <div className="p-4 rounded-2xl theme-subpanel border border-amber-500/30 text-xs space-y-1 shrink-0 w-full md:w-64 shadow-md">
                            <div className="font-bold text-amber-400 flex items-center gap-1.5 text-xs">
                                <i className="fa-solid fa-chalkboard-user"></i>
                                <span className="lang-ar">إشراف وتدريس:</span>
                                <span className="lang-en">Course Instructor:</span>
                            </div>
                            <div className="font-bold text-sm">
                                <span className="lang-ar">المهندس عمر محمود</span>
                                <span className="lang-en">Eng. Omar Mahmoud</span>
                            </div>
                            <div className="text-[11px] text-amber-400 font-mono">01012306019</div>
                        </div>
                    </div>

                    
                    <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                        <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
                            <strong className="text-purple-400 block font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-bullseye"></i>
                                <span className="lang-ar">أهداف التعلم الرسمية للدرس (ص 67):</span>
                                <span className="lang-en">Official Learning Objectives (p. 77):</span>
                            </strong>
                            <ul className="space-y-1 text-sub">
                                <li>• <span className="lang-ar">شرح كيف يولد نموذج اللغة النص عن طريق التنبؤ بالكلمة التالية، ولماذا يؤدي ذلك إلى حدوث الهلوسة (Hallucination).</span><span className="lang-en">Explain how a language model generates text by predicting the next word, and why this causes hallucination.</span></li>
                                <li>• <span className="lang-ar">وصف ما يجعل نموذج اللغة كبيراً (LLM)، وشرح دور كل من الضبط بطريقة RLHF وتعدد الوسائط (Multimodality).</span><span className="lang-en">Describe what makes a language model large, and explain the roles of RLHF tuning and multimodality.</span></li>
                            </ul>
                        </div>
                        <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
                            <strong className="text-amber-400 block font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-circle-question"></i>
                                <span className="lang-ar">السؤال الرئيس للدرس (كتاب الوزارة ص 68):</span>
                                <span className="lang-en">Guiding Question (Textbook p. 78):</span>
                            </strong>
                            <p className="text-slate-200 font-medium leading-relaxed">
                                <span className="lang-ar">&quot;كيف يولد نموذج اللغة النص، وما الذي يجعل النموذج &apos;كبيراً&apos;، ولماذا يمكن أن يخطئ في الحقائق رغم طلاقته؟&quot;</span>
                                <span className="lang-en">&quot;How does a language model generate text, what makes a model &apos;large,&apos; and why can it still get facts wrong?&quot;</span>
                            </p>
                        </div>
                    </div>
                </div>

                
                <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-5">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
                        <h3 className="text-lg font-black flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs">١</span>
                            <span className="lang-ar">الشرح التفاعلي لنماذج اللغة الكبيرة، الهلوسة، RLHF، وتعدد الوسائط (ص 68 - 70)</span>
                            <span className="lang-en">1–4. Interactive Guide: Next-Token Prediction, LLM Scale, RLHF & Multimodality (pp. 78 - 80)</span>
                        </h3>
                        <div className="flex flex-wrap gap-2 text-xs">
                            <button onClick={() => { playSfx('click'); setConceptTab('token'); }} id="llmtab-btn-token" className={conceptTab === 'token' ? 'px-3 py-1.5 rounded-xl bg-purple-600 text-white font-bold transition' : 'px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 font-bold transition'}>
                                📝 <span className="lang-ar">التنبؤ بالكلمة التالية والهلوسة</span><span className="lang-en">Next-Word & Hallucination</span>
                            </button>
                            <button onClick={() => { playSfx('click'); setConceptTab('scale'); }} id="llmtab-btn-scale" className={conceptTab === 'scale' ? 'px-3 py-1.5 rounded-xl bg-purple-600 text-white font-bold transition' : 'px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 font-bold transition'}>
                                📈 <span className="lang-ar">معنى &quot;كبير&quot; (Parameters) و RLHF</span><span className="lang-en">&quot;Large&quot; Scale & RLHF</span>
                            </button>
                            <button onClick={() => { playSfx('click'); setConceptTab('multi'); }} id="llmtab-btn-multi" className={conceptTab === 'multi' ? 'px-3 py-1.5 rounded-xl bg-purple-600 text-white font-bold transition' : 'px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 font-bold transition'}>
                                🎞️ <span className="lang-ar">تعدد الوسائط والتحقق من الحقائق</span><span className="lang-en">Multimodality & Fact-Checking</span>
                            </button>
                        </div>
                    </div>

                    
                    <div id="llmtab-panel-token" className={`space-y-4 ${conceptTab === 'token' ? '' : 'hidden'}`}>
                        <div className="overflow-x-auto rounded-2xl border border-slate-800">
                            <table className="w-full text-xs min-w-[600px] border-collapse">
                                <thead>
                                    <tr className="bg-slate-950 text-slate-200 border-b border-slate-800 font-bold">
                                        <th className="p-3 text-start"><span className="lang-ar">الخطوة (Step)</span><span className="lang-en">Step (Textbook p. 78)</span></th>
                                        <th className="p-3 text-start text-cyan-400"><span className="lang-ar">النص حتى الآن (Text so far)</span><span className="lang-en">Text So Far</span></th>
                                        <th className="p-3 text-start text-emerald-400"><span className="lang-ar">التنبؤ بالكلمة / الرمز التالي (Predicted Next Word/Token)</span><span className="lang-en">Predicted Next Word / Token</span></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800/60 bg-slate-900/40 text-sub">
                                    <tr>
                                        <td className="p-3 font-bold text-white"><span className="lang-ar">الخطوة 1</span><span className="lang-en">Step 1</span></td>
                                        <td className="p-3 font-mono text-slate-200"><span className="lang-ar">&quot;طقس اليوم&quot;</span><span className="lang-en">&quot;Today&apos;s weather is&quot;</span></td>
                                        <td className="p-3 font-bold text-emerald-400"><span className="lang-ar">يتنبأ بـ &quot;مشمس&quot; (أعلى احتمال إحصائي)</span><span className="lang-en">Predicts &quot;sunny&quot; (highest statistical probability)</span></td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-bold text-white"><span className="lang-ar">الخطوة 2</span><span className="lang-en">Step 2</span></td>
                                        <td className="p-3 font-mono text-slate-200"><span className="lang-ar">&quot;طقس اليوم مشمس&quot;</span><span className="lang-en">&quot;Today&apos;s weather is sunny&quot;</span></td>
                                        <td className="p-3 font-bold text-emerald-400"><span className="lang-ar">يتنبأ بـ &quot;و&quot;</span><span className="lang-en">Predicts &quot;and&quot;</span></td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-bold text-white"><span className="lang-ar">الخطوة 3</span><span className="lang-en">Step 3</span></td>
                                        <td className="p-3 font-mono text-slate-200"><span className="lang-ar">&quot;طقس اليوم مشمس و&quot;</span><span className="lang-en">&quot;Today&apos;s weather is sunny and&quot;</span></td>
                                        <td className="p-3 font-bold text-emerald-400"><span className="lang-ar">يتنبأ بـ &quot;دافئ&quot;</span><span className="lang-en">Predicts &quot;warm&quot;</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="p-4 rounded-2xl theme-subpanel border border-rose-500/40 text-xs leading-relaxed space-y-1.5">
                            <strong className="text-rose-400 font-black block text-sm flex items-center gap-2">
                                <i className="fa-solid fa-triangle-exclamation"></i>
                                <span className="lang-ar">لماذا تحدث الهلوسة (Hallucination)؟ (سؤال امتحان متكرر — ص 68 و 72):</span>
                                <span className="lang-en">Why Does Hallucination Occur? (Exam Alert — pp. 78 & 82):</span>
                            </strong>
                            <p className="text-sub">
                                <span className="lang-ar">لأن نموذج اللغة يختار في كل خطوة <strong>&quot;الكلمة المعقولة أو المحتملة إحصائياً&quot; (Statistically plausible word)</strong> بناءً على أنماط النصوص التي تدرب عليها، <strong>وليس &quot;الكلمة الصحيحة واقعياً&quot; (Not the factually correct word)</strong>! لذلك قد يصوغ معلومات خاطئة أو تواريخ ومصادر مخترعة بأسلوب لغوي سلس ومقنع للغاية، وتُسمى هذه الظاهرة <strong>الهلوسة (Hallucination)</strong>.</span>
                                <span className="lang-en">Because a language model selects the <strong>statistically plausible next word</strong> rather than checking factual truth, it can state falsehoods in a fluent, confident, and convincing way—a phenomenon called <strong>hallucination</strong>.</span>
                            </p>
                        </div>
                    </div>

                    
                    <div id="llmtab-panel-scale" className={`space-y-4 ${conceptTab === 'scale' ? '' : 'hidden'}`}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
                            <div className="p-4 rounded-2xl theme-subpanel border border-cyan-500/30 space-y-2">
                                <strong className="text-cyan-400 font-black block text-sm">
                                    <span className="lang-ar">2. ماذا تعني كلمة &quot;كبير (Large)&quot; في LLM؟ (ص 69 / p. 79):</span>
                                    <span className="lang-en">2. What &quot;Large&quot; Refers to in an LLM (p. 79):</span>
                                </strong>
                                <p className="text-sub">
                                    <span className="lang-ar">تُبنى نماذج اللغة الكبيرة (مثل ChatGPT و Claude و Gemini) على شبكات عصبية ضخمة (غالباً ببنية <strong>المحوّل Transformer</strong>)، وتشير كلمة &quot;كبير&quot; إلى عنصرين أساسيين (إلى جانب القدرة الحاسوبية):</span>
                                    <span className="lang-en">Built on massive neural networks (often the <strong>Transformer</strong> architecture), &quot;Large&quot; refers to two main dimensions (alongside computing power):</span>
                                </p>
                                <ul className="space-y-1 text-slate-300">
                                    <li>• <strong><span className="lang-ar">(1) كمية بيانات التدريب (Amount of training data):</span><span className="lang-en">(1) Amount of training data:</span></strong> <span className="lang-ar">مليارات إلى تريليونات الكلمات من النصوص.</span><span className="lang-en">Billions to trillions of words of text.</span></li>
                                    <li>• <strong><span className="lang-ar">(2) عدد المعلمات (Number of parameters):</span><span className="lang-en">(2) Number of parameters:</span></strong> <span className="lang-ar">مليارات إلى تريليونات من الأوزان القابلة للضبط داخل الشبكة العصبية. وعند تجاوز حجم معين، تظهر قدرات جديدة نوعياً (كالتلخيص والترجمة وكتابة الأكواد).</span><span className="lang-en">Billions to trillions of adjustable weights inside the neural network.</span></li>
                                </ul>
                            </div>

                            <div className="p-4 rounded-2xl theme-subpanel border border-emerald-500/30 space-y-2">
                                <strong className="text-emerald-400 font-black block text-sm">
                                    <span className="lang-ar">3. المراحل الثلاث للضبط بطريقة RLHF (ص 69 / p. 79):</span>
                                    <span className="lang-en">3. Three Stages of RLHF Tuning (p. 79):</span>
                                </strong>
                                <ol className="space-y-1.5 text-slate-300 list-decimal rtl:pr-4 ltr:pl-4">
                                    <li><span className="lang-ar"><strong>التدريب الأولي (Initial training):</strong> بناء نموذج اللغة الأساسي بالتدريب على كميات هائلة من النصوص.</span><span className="lang-en"><strong>Initial training:</strong> Build the base language model by training on vast text.</span></li>
                                    <li><span className="lang-ar"><strong>التقييم البشري (Human evaluation):</strong> يقوم البشر بتقييم عدة إجابات يولدها النموذج وترتيبها (&quot;أي إجابة هي الأفضل والأكثر ملاءمة؟&quot;).</span><span className="lang-en"><strong>Human evaluation:</strong> Humans evaluate and rank multiple model responses (&quot;which response is more desirable?&quot;).</span></li>
                                    <li><span className="lang-ar"><strong>الضبط عبر التعلم المعزز (Tuning by reinforcement learning):</strong> استخدام التقييم البشري كمكافآت لضبط النموذج حتى يعطي إجابات مهذبة ومفيدة ومطابقة لقصد المستخدم (⚠️ تنبيه: RLHF يحسّن الملاءمة والأمان لكنه لا يقضي على الهلوسة نهائياً!).</span><span className="lang-en"><strong>Tuning by reinforcement learning:</strong> Use human evaluations as rewards so the model gives polite, helpful, on-intent answers (does not guarantee 100% factual truth!).</span></li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    
                    <div id="llmtab-panel-multi" className={`space-y-4 ${conceptTab === 'multi' ? '' : 'hidden'}`}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
                            <div className="p-4 rounded-2xl theme-subpanel border border-purple-500/30 space-y-2">
                                <strong className="text-purple-400 font-black block text-sm">
                                    <span className="lang-ar">4. تعدد الوسائط (Multimodality) والتمثيل العددي المشترك (ص 70 / p. 80):</span>
                                    <span className="lang-en">4. Multimodality & Common Numerical Representation (p. 80):</span>
                                </strong>
                                <p className="text-sub">
                                    <span className="lang-ar">كانت نماذج اللغة المبكرة تتعامل مع النصوص فقط، أما الذكاء الاصطناعي التوليدي الحديث فيتميز بـ <strong>تعدد الوسائط (Multimodality)</strong>: أي القدرة على معالجة أنواع متعددة من البيانات (<strong>النص Text، الصور Images، الصوت Audio، والفيديو Video</strong>) داخل نموذج أو نظام واحد عن طريق <strong>تحويل كل نوع منها إلى تمثيل عددي مشترك (Common numerical representation)</strong>.</span>
                                    <span className="lang-en"><strong>Multimodality</strong> is the ability to handle multiple kinds of data (<strong>text, images, audio, video</strong>) with a single model by converting each modality into a <strong>common numerical representation</strong>.</span>
                                </p>
                            </div>
                            <div className="p-4 rounded-2xl theme-subpanel border border-amber-500/30 space-y-2">
                                <strong className="text-amber-400 font-black block text-sm">
                                    <span className="lang-ar">5. القاعدة الذهبية: الطلاقة ≠ الحقيقة (Fluency ≠ Truth):</span>
                                    <span className="lang-en">5. Golden Rule: Fluency ≠ Truth (Fact-Checking):</span>
                                </strong>
                                <p className="text-sub">
                                    <span className="lang-ar">لأن النموذج التوليدي يصوغ الجمل بطلاقة وثقة حتى عندما يهلوس، يجب دائماً <strong>التحقق من الحقائق (Fact-checking)</strong> بمراجعة المصادر الأصلية الموثوقة قبل نشر أو اعتماد أي تواريخ أو إحصاءات أو أحكام علمية يصدرها الذكاء الاصطناعي.</span>
                                    <span className="lang-en">Because generative AI writes fluently even when hallucinating, users must always perform <strong>fact-checking</strong> against primary, reliable sources before trusting or publishing AI outputs.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <GenerativeAiLabs />
                <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <div>
                            <span className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">
                                <span className="lang-ar">أنشطة وميزات كتاب الوزارة الرسمية للدرس 7-3</span>
                                <span className="lang-en">Official Lesson 7-3 Textbook Activities</span>
                            </span>
                            <h3 className="text-lg font-black mt-0.5 flex items-center gap-2">
                                <i className="fa-solid fa-graduation-cap text-amber-400"></i>
                                <span className="lang-ar">أنشطة: توقف وفكر • فكر كمهندس • طبق ما تعلمته • نمط الامتحان • فكر وتحدَّ نفسك</span>
                                <span className="lang-en">Pause & Think • Think as an Engineer • In a New Context • Exam Style • Reflect & Challenge</span>
                            </h3>
                        </div>
                        <span className="text-xs text-sub font-mono">ص 68 - ص 74</span>
                    </div>

                    
                    <div className="p-5 rounded-2xl theme-subpanel border border-purple-500/30 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-brain"></i>
                                <span className="lang-ar">💡 جميع أسئلة (توقف وفكر — Pause & Think) للدرس 7-3 (ص 69 - 72)</span>
                                <span className="lang-en">💡 All 3 Pause & Think Questions — Lesson 7-3 (pp. 79 - 82)</span>
                            </span>
                            <button type="button" aria-expanded={!!expandedCards['pt-7-3']} onClick={() => toggleCard('pt-7-3')} className="text-xs font-bold text-purple-400 hover:underline flex items-center gap-1">
                                <span className="lang-ar">عرض الإجابات النموذجية</span><span className="lang-en">Show Model Answers</span>
                                <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['pt-7-3'] ? 'rotate-180' : ''}`}></i>
                            </button>
                        </div>
                        <div className="text-xs font-bold text-slate-200 space-y-1">
                            <p><span className="lang-ar">1. (ص 69): &quot;إذا تُرك نموذج ضخم بمفرده، فقد يجيب بفظاظة أو خارج الموضوع. ما الخطوة التي تعالج ذلك؟&quot;</span><span className="lang-en">1. (p. 79): &quot;Left alone, a huge model may answer rudely or off-point. What step fixes that?&quot;</span></p>
                            <p><span className="lang-ar">2. (ص 71): &quot;إذا بدا النموذج واثقاًوطلقاً في كلامه، فهل يضمن ذلك أنه على صواب؟&quot;</span><span className="lang-en">2. (p. 81): &quot;If a model sounds confident and fluent, does that guarantee it is correct?&quot;</span></p>
                            <p><span className="lang-ar">3. (ص 72): &quot;&apos;معقول إحصائياً (Plausible)&apos; أم &apos;صحيح واقعياً (Correct)&apos; — أيهما يحسّنه النموذج اللغوي فعلياً؟&quot;</span><span className="lang-en">3. (p. 82): &quot;&apos;Plausible&apos; or &apos;correct&apos; — which one does the model actually optimize for?&quot;</span></p>
                        </div>
                        <div id="pt-7-3" className={`p-4 rounded-xl bg-slate-900 border border-purple-500/40 text-xs leading-relaxed text-slate-300 space-y-2 ${expandedCards['pt-7-3'] ? '' : 'hidden'}`}>
                            <p className="lang-ar">💡 <strong>1. خطوة تهذيب استجابات النموذج:</strong> هي الضبط بواسطة <strong>التعلم المعزز من خلال التغذية الراجعة البشرية (RLHF — Reinforcement Learning from Human Feedback)</strong>.<br />💡 <strong>2. هل الطلاقة تضمن الصحة؟</strong> <strong>كلا إطلاقاً!</strong> قد يقع النموذج في <strong>الهلوسة (Hallucination)</strong> فيعرض معلومات خاطئة تماماً بلغة واثقة وسلسة.<br />💡 <strong>3. ما يحسّنه النموذج فعلياً:</strong> النموذج يحسّن اختيار الكلمة <strong>&quot;المعقولة أو المحتملة إحصائياً&quot; (Statistically plausible)</strong> وليس الصواب الواقعي المؤكد.</p>
                            <p className="lang-en">💡 <strong>Model Answers:</strong><br />1. <strong>Tuning by RLHF (Reinforcement Learning from Human Feedback)</strong>.<br />2. <strong>No!</strong> Fluency does not guarantee truth; the model can <strong>hallucinate</strong> false facts confidently.<br />3. It optimizes for what is <strong>statistically plausible</strong>, not guaranteed factual correctness.</p>
                        </div>
                    </div>

                    
                    <div className="p-5 rounded-2xl theme-subpanel border border-emerald-500/30 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-gears"></i>
                                <span className="lang-ar">⚙️ فكر كمهندس: كتابة مقالات عن التاريخ المحلي لموقع المدرسة — كتاب الوزارة ص 73</span>
                                <span className="lang-en">⚙️ Think as an Engineer (Local History Articles for School Website) — Textbook p. 83</span>
                            </span>
                            <button type="button" aria-expanded={!!expandedCards['eng-7-3']} onClick={() => toggleCard('eng-7-3')} className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1">
                                <span className="lang-ar">عرض الحل الهندسي الكامل</span><span className="lang-en">Show Engineering Solution</span>
                                <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['eng-7-3'] ? 'rotate-180' : ''}`}></i>
                            </button>
                        </div>
                        <p className="text-xs font-bold text-slate-200">
                            <span className="lang-ar">&quot;يريد نادٍ مدرسي استخدام روبوت محادثة للذكاء الاصطناعي التوليدي لكتابة مقالات قصيرة عن التاريخ المحلي لموقع المدرسة: 1. ما الجهد الذي يوفره وما الجزء الذي لا يمكن الوثوق به كما هو؟ 2. لماذا قد يخترع النموذج تواريخ أو أسماء بثقة، وكيف تكتشف ذلك؟ 3. ضع قاعدة للنادي قبل النشر، وهل يمنع ضبط RLHF وحده هذه المشكلة؟&quot;</span>
                            <span className="lang-en">&quot;A school club wants to use a generative AI chatbot to write short articles on local history for the school website: 1. What effort does it save, and what part cannot be trusted as-is? 2. Why might it confidently invent dates or names, and how to catch them? 3. Propose one rule before publishing, and explain whether RLHF alone prevents this.&quot;</span>
                        </p>
                        <div id="eng-7-3" className={`p-4 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs leading-relaxed text-slate-300 space-y-2 ${expandedCards['eng-7-3'] ? '' : 'hidden'}`}>
                            <p className="lang-ar">💡 <strong>الحل الهندسي المعتمد:</strong><br />• <strong>1. الفائدة والجزء غير الموثوق:</strong> يوفر الذكاء الاصطناعي جهد صياغة المسودات الأولية وتنظيم الفقرات وتلخيص الأفكار، لكن <strong>لا يمكن الوثوق بالحائق التاريخية الدقيقة (التواريخ، الأسماء، والأحداث المحلية) كما هي دون مراجعة</strong>.<br />• <strong>2. سبب اختراع التواريخ وكيفية اكتشافه:</strong> لأنه يتنبأ بالكلمة أو الرقم التالي <strong>المعقول إحصائياً (Statistically plausible)</strong> في السياق اللغوي وليس الحقيقة التاريخية المؤكدة (<strong>الهلوسة Hallucination</strong>). ونكتشف ذلك بمطابقة كل تاريخ واسم مع السجلات والكتب التاريخية المحلية الموثوقة.<br />• <strong>3. قاعدة النشر وحدود RLHF:</strong> <strong>القاعدة:</strong> &quot;يُمنع نشر أي مقال قبل التحقق البشري من كل حقيقة وتاريخ وتوثيق مصدره الأصلي&quot;. <strong>هل يمنع RLHF ذلك وحده؟</strong> كلا؛ لأن RLHF يجعل أسلوب الإجابة مهذباً ومطابقاً للقصد، لكنه لا يضمن خلو المحتوى من الهلوسة المعلوماتية.</p>
                            <p className="lang-en">💡 <strong>Model Engineering Decision:</strong><br />• <strong>1. Benefit vs. Untrusted Part:</strong> Saves drafting and structuring effort, but specific local dates, names, and historical claims cannot be trusted as-is.<br />• <strong>2. Why It Hallucinates & How to Catch:</strong> It predicts statistically plausible next tokens rather than verified facts. Catch errors by cross-checking every date and claim against trusted local archives.<br />• <strong>3. Club Rule & RLHF Limit:</strong> Rule: Mandatory human fact-checking with cited primary sources before publishing. RLHF makes responses polite and helpful, but does NOT eliminate factual hallucination.</p>
                        </div>
                    </div>

                    
                    <div className="p-5 rounded-2xl theme-subpanel border border-rose-500/30 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-flask"></i>
                                <span className="lang-ar">🌍 طبق ما تعلمته (صورة ملاحظة مكتوبة بخط اليد + قراءة صوتية + تلخيص) — ص 73</span>
                                <span className="lang-en">🌍 In a New Context (Handwritten Note Photo to Audio & Text Summary) — p. 84</span>
                            </span>
                            <button type="button" aria-expanded={!!expandedCards['ctx-7-3']} onClick={() => toggleCard('ctx-7-3')} className="text-xs font-bold text-rose-400 hover:underline flex items-center gap-1">
                                <span className="lang-ar">عرض الإجابة النموذجية</span><span className="lang-en">Reveal Answer</span>
                                <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['ctx-7-3'] ? 'rotate-180' : ''}`}></i>
                            </button>
                        </div>
                        <p className="text-xs font-bold text-slate-200">
                            <span className="lang-ar">&quot;يرفع طالب صورة لملاحظة مكتوبة بخط اليد إلى أداة ذكاء اصطناعي ويطلب منها قراءتها بصوت عالٍ وتلخيصها في نص مكتوب: سمِّ الخاصية التي تتيح لنموذج واحد التعامل مع الصورة والصوت والنص معاً، واشرح بإيجاز كيف يجعل النموذج ذلك ممكناً، واذكر شيئاً واحداً يجب على الطالب الانتباه له.&quot;</span>
                            <span className="lang-en">&quot;A student uploads a photo of a handwritten note to an AI tool and asks it to read the note aloud and summarize it in text: Name the property that lets one model handle image, audio, and text together, explain briefly how the model makes this possible, and state one caution.&quot;</span>
                        </p>
                        <div id="ctx-7-3" className={`p-4 rounded-xl bg-slate-900 border border-rose-500/40 text-xs leading-relaxed text-slate-300 ${expandedCards['ctx-7-3'] ? '' : 'hidden'}`}>
                            <span className="lang-ar">💡 <strong>الحل النموذجي:</strong><br />• <strong>اسم الخاصية:</strong> <strong>تعدد الوسائط (Multimodality)</strong>.<br />• <strong>كيف يجعل النموذج ذلك ممكناً؟</strong> عن طريق تحويل كل نوع من أنواع البيانات (الصورة، النص، والصوت) إلى <strong>تمثيل عددي مشترك (Common numerical representation)</strong> يمكن معالجته بشكل موحد داخل نفس الشبكة.<br />• <strong>ما يجب الانتباه له:</strong> التحقق من عدم إساءة قراءة الكلمات المكتوبة بخط اليد أو هلوسة تفاصيل غير موجودة في الملاحظة الأصلية، وعدم رفع بيانات شخصية أو سرية.</span>
                            <span className="lang-en">💡 <strong>Model Answer:</strong><br />• <strong>Property:</strong> <strong>Multimodality</strong>.<br />• <strong>How It Works:</strong> It converts images, text, and audio into a <strong>common numerical representation</strong> processed within a single unified system.<br />• <strong>Caution:</strong> Verify that messy handwriting was not misread or hallucinated in the summary, and avoid uploading private personal information.</span>
                        </div>
                    </div>

                    
                    <div className="p-5 rounded-2xl theme-subpanel border border-amber-500/30 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-file-pen"></i>
                                <span className="lang-ar">📝 سؤال على نمط الامتحان [6 درجات] + فكر وتحدَّ نفسك — كتاب الوزارة ص 72 و 74</span>
                                <span className="lang-en">📝 Exam-Style Question [6 Marks] & Reflect & Challenge — Textbook pp. 82 & 84</span>
                            </span>
                            <button type="button" aria-expanded={!!expandedCards['exam-7-3']} onClick={() => toggleCard('exam-7-3')} className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1">
                                <span className="lang-ar">عرض نموذج الإجابة وتوزيع الدرجات</span><span className="lang-en">Model Answer & Mark Scheme</span>
                                <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['exam-7-3'] ? 'rotate-180' : ''}`}></i>
                            </button>
                        </div>
                        <p className="text-xs font-bold text-slate-200">
                            <span className="lang-ar">&quot;اشرح لماذا يمكن لنموذج اللغة أن ينتج إجابة سلسة ولكنها خاطئة من حيث الحقائق (الهلوسة). [6 درجات] استعن بـ: اختيار الكلمات المعقولة إحصائياً.&quot;</span>
                            <span className="lang-en">&quot;Explain why a language model can produce a fluent answer that is factually wrong (hallucination). [6 marks] Refer to: choosing statistically plausible words.&quot;</span>
                        </p>
                        <div id="exam-7-3" className={`p-4 rounded-xl bg-slate-900 border border-amber-500/40 text-xs leading-relaxed text-slate-300 space-y-2 ${expandedCards['exam-7-3'] ? '' : 'hidden'}`}>
                            <strong className="text-amber-400 block font-bold"><span className="lang-ar">نموذج الإجابة الكامل للحصول على الدرجة النهائية (6/6):</span><span className="lang-en">Full Mark Scheme (6/6):</span></strong>
                            <ol className="space-y-1.5 list-decimal rtl:pr-4 ltr:pl-4 text-sub">
                                <li><span className="lang-ar"><strong>آلية توليد النص بالتنبؤ بالكلمة التالية [درجتان]:</strong> يولد نموذج اللغة النص عن طريق تعلم الأنماط اللغوية من كميات ضخمة من النصوص، ثم تكرار التنبؤ بالكلمة أو الرمز النصي التالي (Next word/token) الأكثر احتمالاً بعد السياق الحالي.</span><span className="lang-en"><strong>Next-word prediction mechanism [2 marks]:</strong> A language model generates text by learning patterns from vast text corpora and repeatedly predicting the next word/token given the preceding words.</span></li>
                                <li><span className="lang-ar"><strong>المعقولية الإحصائية مقابل الصحة الواقعية [درجتان]:</strong> يختار النموذج في كل خطوة <strong>الكلمة المعقولة إحصائياً (Statistically plausible word)</strong> التي تناسب سياق الجملة نحوياً ولغوياً، ولا يمتلك آلية داخلية للتحقق من الحقيقة الواقعية المؤكدة.</span><span className="lang-en"><strong>Statistically plausible vs. factually true [2 marks]:</strong> Because the model optimizes for the <strong>statistically plausible word</strong> rather than checking factual truth, it can string together natural-sounding sentences containing false facts.</span></li>
                                <li><span className="lang-ar"><strong>ظهور الهلوسة وضرورة التحقق [درجتان]:</strong> نتيجةً لذلك، تبدو الإجابة المتولدة سلسة ومقنعة للغاية في أسلوبها حتى عندما تتضمن وقائع أو مصادر مخترعة (الهلوسة Hallucination)، مما يستلزم التحقق البشري من الحقائق (Fact-checking).</span><span className="lang-en"><strong>Resulting hallucination & fact-checking [2 marks]:</strong> This produces fluent, confident-sounding falsehoods (hallucination), making human fact-checking essential.</span></li>
                            </ol>
                        </div>
                    </div>
                </div>

                
                <div className="space-y-3 pt-2">
                    <h4 className="font-bold text-sm flex items-center gap-2">
                        <i className="fa-solid fa-clone text-purple-400"></i>
                        <span className="lang-ar">بطاقات المراجعة السريعة للدرس 7-3 (المس لقلب البطاقة):</span>
                        <span className="lang-en">Lesson 7-3 Flashcards (Tap to flip):</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                        <div className="flip-card" onClick={(event) => event.currentTarget.classList.toggle('flipped')}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front theme-panel border border-purple-500/30">
                                    <span className="text-2xl mb-1 block">📝</span>
                                    <strong className="text-sm block"><span className="lang-ar">نموذج اللغة (Language Model)</span><span className="lang-en">Language Model</span></strong>
                                    <span className="text-[10px] text-purple-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                </div>
                                <div className="flip-card-back bg-purple-950/90 border border-purple-500 text-slate-200">
                                    <p className="lang-ar">نموذج يتعلم أنماط اللغة من نصوص ضخمة ويولد النص بتكرار التنبؤ بالكلمة أو الرمز التالي (Next token).</p>
                                    <p className="lang-en">Learns patterns from vast text and generates sentences by repeatedly predicting the next word/token.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card" onClick={(event) => event.currentTarget.classList.toggle('flipped')}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front theme-panel border border-rose-500/30">
                                    <span className="text-2xl mb-1 block">🌀</span>
                                    <strong className="text-sm block"><span className="lang-ar">الهلوسة (Hallucination)</span><span className="lang-en">Hallucination</span></strong>
                                    <span className="text-[10px] text-rose-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                </div>
                                <div className="flip-card-back bg-rose-950/90 border border-rose-500 text-slate-200">
                                    <p className="lang-ar">توليد معلومات غير صحيحة واقعياً بأسلوب سلس ومقنع لأن النموذج يختار الكلمات المعقولة إحصائياً.</p>
                                    <p className="lang-en">Generating false information in a fluent, convincing way because the model picks statistically plausible words.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card" onClick={(event) => event.currentTarget.classList.toggle('flipped')}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front theme-panel border border-emerald-500/30">
                                    <span className="text-2xl mb-1 block">🤝</span>
                                    <strong className="text-sm block"><span className="lang-ar">الضبط بطريقة RLHF</span><span className="lang-en">RLHF Tuning</span></strong>
                                    <span className="text-[10px] text-emerald-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                </div>
                                <div className="flip-card-back bg-emerald-950/90 border border-emerald-500 text-slate-200">
                                    <p className="lang-ar">التعلم المعزز من التغذية الراجعة البشرية (3 مراحل: تدريب أولي، تقييم بشري، وضبط بالتعلم المعزز).</p>
                                    <p className="lang-en">Reinforcement Learning from Human Feedback (Initial training &rarr; Human evaluation &rarr; RL tuning).</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card" onClick={(event) => event.currentTarget.classList.toggle('flipped')}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front theme-panel border border-cyan-500/30">
                                    <span className="text-2xl mb-1 block">🎞️</span>
                                    <strong className="text-sm block"><span className="lang-ar">تعدد الوسائط (Multimodality)</span><span className="lang-en">Multimodality</span></strong>
                                    <span className="text-[10px] text-cyan-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                </div>
                                <div className="flip-card-back bg-cyan-950/90 border border-cyan-500 text-slate-200">
                                    <p className="lang-ar">التعامل مع أنواع متعددة من البيانات (نص، صور، صوت، فيديو) بتحويلها إلى تمثيل عددي مشترك.</p>
                                    <p className="lang-en">Handling text, images, audio, and video in one model by converting them into a common numerical representation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="theme-panel border p-6 rounded-3xl space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <h4 className="font-bold text-sm sm:text-base flex items-center gap-2">
                            <i className="fa-solid fa-circle-question text-purple-400"></i>
                            <span className="lang-ar">اختبار تدريبي على الدرس 7-3 (10 أسئلة منهجية من كتاب الوزارة)</span>
                            <span className="lang-en">Lesson 7-3 Practice Quiz (10 Ministry Textbook Questions)</span>
                        </h4>
                        <span className="text-xs text-amber-400 font-bold">
                            <span className="lang-ar">إشراف: م/ عمر محمود</span>
                            <span className="lang-en">Eng. Omar Mahmoud</span>
                        </span>
                    </div>
                    <Unit7LessonQuiz lessonKey="lesson73Questions" />
                </div>

                
                <div className="flex items-center justify-between pt-2 text-xs">
                    <button onClick={() => navigate('lesson-7-2')} className="px-4 py-2 rounded-xl theme-panel border font-bold flex items-center gap-2">
                        <i className="fa-solid fa-arrow-right rtl:fa-arrow-right ltr:fa-arrow-left"></i>
                        <span className="lang-ar">الدرس السابق 7-2</span>
                        <span className="lang-en">Previous 7-2</span>
                    </button>
                    <button onClick={() => navigate('unit-7-solutions')} className="px-5 py-2.5 rounded-xl font-bold bg-amber-500 hover:bg-amber-600 text-white flex items-center gap-2 shadow-md">
                        <span className="lang-ar">حلول تدريبات كتاب الوزارة كاملة</span>
                        <span className="lang-en">Textbook Exercises Solutions</span>
                        <i className="fa-solid fa-arrow-left rtl:fa-arrow-left ltr:fa-arrow-right"></i>
                    </button>
                </div>
            </div>
);
}
