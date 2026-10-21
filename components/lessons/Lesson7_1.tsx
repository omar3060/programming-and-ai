'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { Unit7LessonQuiz } from '@/components/lessons/Unit7LessonQuiz';
import { MachineLearningLabs } from '@/components/simulators/MachineLearningLabs';

export function Lesson7_1(){
const {playSfx,setActiveLesson}=useApp();const [expandedCards,setExpandedCards]=useState<Record<string,boolean>>({});const [conceptTab,setConceptTab]=useState('compare');const toggleCard=(id:string)=>{playSfx('click');setExpandedCards(current=>({...current,[id]:!current[id]}))};const navigate=(view:Parameters<typeof setActiveLesson>[0])=>{playSfx('click');setActiveLesson(view);window.scrollTo({top:0,behavior:'smooth'})};return (
<div id="view-lesson-7-1" className="lesson-view space-y-8 animate-fadeIn">

                
                <div className="theme-panel border p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-lg">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="space-y-2 max-w-3xl">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold flex items-center gap-1.5">
                                    <i className="fa-solid fa-robot"></i>
                                    <span className="lang-ar">الدرس 7-1 (كتاب الوزارة ص 50 - ص 58)</span>
                                    <span className="lang-en">Lesson 7-1 (Textbook pp. 57 - 67)</span>
                                </span>
                                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-bold">
                                    <span className="lang-ar">التعلم الآلي والذكاء الاصطناعي</span>
                                    <span className="lang-en">Machine Learning & AI</span>
                                </span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-black">
                                <span className="lang-ar">أساسيات التعلّم الآلي (The Basics of Machine Learning)</span>
                                <span className="lang-en">The Basics of Machine Learning</span>
                            </h2>
                            <p className="text-xs sm:text-sm text-sub leading-relaxed">
                                <span className="lang-ar">شرح تفاعلي شامل للدرس الأول من الوحدة السابعة: كيف يختلف التعلم الآلي عن البرمجة التقليدية، الأنواع الثلاثة الرئيسية للتعلم الآلي (الخاضع للإشراف Supervised، غير الخاضع للإشراف Unsupervised، والمعزز Reinforcement)، التصنيف (Classification) والسمات (Features)، التجميع (Clustering)، التعلم المعزز (الحالة State، الإجراء Action، والمكافأة Reward)، وحدود التعلم الآلي (التحيز في البيانات Bias ومشكلة الصندوق الأسود Black-box problem وأهمية إبقاء الإنسان في الحلقة Human-in-the-loop).</span>
                                <span className="lang-en">Interactive breakdown of Lesson 7-1: Conventional programming vs. Machine Learning, the 3 types of learning (Supervised, Unsupervised, Reinforcement), Classification & Features, Clustering, Reinforcement Learning (State, Action, Reward), and ML limits (data bias, black-box problem, and human-in-the-loop oversight).</span>
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
                            <strong className="text-emerald-400 block font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-bullseye"></i>
                                <span className="lang-ar">أهداف التعلم الرسمية للدرس (ص 50):</span>
                                <span className="lang-en">Official Learning Objectives (p. 57):</span>
                            </strong>
                            <ul className="space-y-1 text-sub">
                                <li>• <span className="lang-ar">شرح فكرة التعلم الآلي وكيف يختلف عن البرمجة العادية، والتمييز بين التعلم الخاضع للإشراف وغير الخاضع للإشراف والتعلم المعزز.</span><span className="lang-en">Explain the idea of machine learning and distinguish supervised, unsupervised, and reinforcement learning.</span></li>
                                <li>• <span className="lang-ar">وصف التصنيف (Classification) والتجميع (Clustering) والتعلم المعزز بأمثلة، وشرح الحدود الناتجة عن تحيز البيانات ومشكلة الصندوق الأسود.</span><span className="lang-en">Describe classification, clustering, and reinforcement learning with examples, and explain limits caused by data bias and the black-box problem.</span></li>
                            </ul>
                        </div>
                        <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
                            <strong className="text-amber-400 block font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-circle-question"></i>
                                <span className="lang-ar">السؤال الرئيس للدرس (كتاب الوزارة ص 51):</span>
                                <span className="lang-en">Guiding Question (Textbook p. 58):</span>
                            </strong>
                            <p className="text-slate-200 font-medium leading-relaxed">
                                <span className="lang-ar">&quot;كيف يحل التعلّم الآلي المشكلات بشكل مختلف عن البرمجة العادية، وما هي أنواعه الرئيسية وحدوده؟&quot;</span>
                                <span className="lang-en">&quot;How does machine learning solve problems differently from ordinary programming, and what are its main types and limits?&quot;</span>
                            </p>
                        </div>
                    </div>
                </div>

                
                <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                        <h3 className="text-lg font-black flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">١</span>
                            <span className="lang-ar">فكرة التعلّم الآلي مقارنة بالبرمجة التقليدية وحدوده (ص 51)</span>
                            <span className="lang-en">1. The Idea of Machine Learning vs. Conventional Programming & Limits (p. 58)</span>
                        </h3>
                        
                        <div className="flex items-center gap-1.5 text-xs">
                            <button onClick={() => { playSfx('click'); setConceptTab('compare'); }} id="ml-tab-compare" className={conceptTab === 'compare' ? 'px-3 py-1.5 rounded-xl bg-emerald-600 text-white font-bold transition' : 'px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 font-bold transition'}>
                                🔄 <span className="lang-ar">البرمجة مقابل التعلم الآلي</span><span className="lang-en">Conventional vs ML</span>
                            </button>
                            <button onClick={() => { playSfx('click'); setConceptTab('limits'); }} id="ml-tab-limits" className={conceptTab === 'limits' ? 'px-3 py-1.5 rounded-xl bg-emerald-600 text-white font-bold transition' : 'px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 font-bold transition'}>
                                ⚠️ <span className="lang-ar">التحيز والصندوق الأسود</span><span className="lang-en">Bias & Black-Box</span>
                            </button>
                        </div>
                    </div>

                    <div id="ml-concept-panel-compare" className={`space-y-4 text-xs leading-relaxed ${conceptTab === 'compare' ? '' : 'hidden'}`}>
                        <p className="text-sub">
                            <span className="lang-ar"><strong>التعلّم الآلي (Machine Learning):</strong> تقنية تتعلّم الأنماط والانتظامات من كميات كبيرة من البيانات بحيث يمكن إصدار أحكام وتنبؤات على بيانات جديدة، وهو الأسلوب الأكثر شيوعاً لبناء أنظمة الذكاء الاصطناعي. يُستخدم في المشكلات التي <strong>يصعب فيها على البشر التعبير عن القواعد بالكلمات</strong> (مثل: التمييز بين صورة قطة وكلب، أو فرز البريد المزعج Spam، أو تحويل الصوت إلى نص).</span>
                            <span className="lang-en"><strong>Machine Learning:</strong> A technology that learns patterns and regularities from large amounts of data to make judgments and predictions on new data. Used where rules are too complex for humans to write in words (e.g., cat vs dog photo, spam filtering, speech-to-text).</span>
                        </p>

                        <div className="overflow-x-auto rounded-2xl border border-slate-800">
                            <table className="w-full text-xs min-w-[600px] border-collapse">
                                <thead>
                                    <tr className="bg-slate-950 text-slate-200 border-b border-slate-800 font-bold">
                                        <th className="p-3 text-start"><span className="lang-ar">النهج (Approach)</span><span className="lang-en">Approach</span></th>
                                        <th className="p-3 text-start text-cyan-400"><span className="lang-ar">ما يقدمه البشر (What humans provide)</span><span className="lang-en">What Humans Provide</span></th>
                                        <th className="p-3 text-start text-emerald-400"><span className="lang-ar">ما يفعله الحاسوب (What the computer does)</span><span className="lang-en">What the Computer Does</span></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800/60 bg-slate-900/40 text-sub">
                                    <tr>
                                        <td className="p-3 font-bold text-white"><span className="lang-ar">البرمجة التقليدية (Conventional Programming)</span><span className="lang-en">Conventional Programming</span></td>
                                        <td className="p-3 font-semibold text-cyan-300"><span className="lang-ar">قواعد القرار (الإجراءات) + بيانات الإدخال</span><span className="lang-en">Decision rules (procedures) + Input data</span></td>
                                        <td className="p-3"><span className="lang-ar">ينتج الإجابات باتباع القواعد المكتوبة يدوياً (مثال: حساب مجموع عددين صحيحين).</span><span className="lang-en">Produces answers by following the rules (e.g., calculating the sum of two integers).</span></td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-bold text-white"><span className="lang-ar">التعلّم الآلي (Machine Learning)</span><span className="lang-en">Machine Learning</span></td>
                                        <td className="p-3 font-semibold text-emerald-300"><span className="lang-ar">كميات كبيرة من البيانات (مع الإجابات الصحيحة حيثما توفرت)</span><span className="lang-en">Large amounts of data (with correct answers, where available)</span></td>
                                        <td className="p-3"><span className="lang-ar"><strong>يكتشف قواعد القرار من البيانات بنفسه</strong> ليحكم على بيانات جديدة.</span><span className="lang-en"><strong>Finds the decision rules from the data on its own</strong> to judge new data.</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div id="ml-concept-panel-limits" className={`grid grid-cols-1 md:grid-cols-3 gap-4 text-xs leading-relaxed ${conceptTab === 'limits' ? '' : 'hidden'}`}>
                        <div className="p-4 rounded-2xl theme-subpanel border border-rose-500/40 space-y-1.5">
                            <strong className="text-rose-400 block font-black"><i className="fa-solid fa-scale-unbalanced"></i> <span className="lang-ar">1. تحيز البيانات (Data Bias):</span><span className="lang-en">1. Data Bias:</span></strong>
                            <p className="text-sub"><span className="lang-ar">تتأثر نتائج النموذج بجودة بيانات التدريب؛ فإذا كانت بيانات التدريب منحرفة أو متحيزة (Biased data)، ستكون أحكام النموذج متحيزة وغير عادلة أيضاً!</span><span className="lang-en">Because training data quality affects results, biased training data leads directly to biased, unfair judgments.</span></p>
                        </div>
                        <div className="p-4 rounded-2xl theme-subpanel border border-amber-500/40 space-y-1.5">
                            <strong className="text-amber-400 block font-black"><i className="fa-solid fa-cube"></i> <span className="lang-ar">2. مشكلة الصندوق الأسود (Black-Box Problem):</span><span className="lang-en">2. Black-Box Problem:</span></strong>
                            <p className="text-sub"><span className="lang-ar">في كثير من نماذج التعلم الآلي، يصعب على البشر رؤية وفهم الأساس أو السبب الدقيق الذي بنى عليه النموذج حكمه.</span><span className="lang-en">The basis for the model&apos;s judgments becomes hard for humans to see or explain.</span></p>
                        </div>
                        <div className="p-4 rounded-2xl theme-subpanel border border-emerald-500/40 space-y-1.5">
                            <strong className="text-emerald-400 block font-black"><i className="fa-solid fa-user-shield"></i> <span className="lang-ar">3. الإنسان في الحلقة (Human-in-the-Loop):</span><span className="lang-en">3. Human-in-the-Loop:</span></strong>
                            <p className="text-sub"><span className="lang-ar">التعلم الآلي ليس حلاً سحرياً (Not a panacea)؛ يجب استخدامه <strong>كأداة تدعم الحكم البشري، وليس بديلاً عنه</strong>، خاصة في القرارات عالية المخاطر.</span><span className="lang-en">ML is not a panacea; use it as a tool that supports human judgment, not as a replacement for it.</span></p>
                        </div>
                    </div>
                </div>

                
                <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <h3 className="text-lg font-black flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs">٢</span>
                            <span className="lang-ar">الأنواع الثلاثة لطرق التعلّم: التصنيف، التجميع، والتعلّم المعزز (ص 52 - 55)</span>
                            <span className="lang-en">2–5. Three Types of Learning: Classification, Clustering, & Reinforcement Learning (pp. 59 - 61)</span>
                        </h3>
                        <span className="text-xs font-mono text-cyan-400 font-bold">Supervised • Unsupervised • RL</span>
                    </div>

                    
                    <div className="overflow-x-auto rounded-2xl border border-slate-800">
                        <table className="w-full text-xs min-w-[650px] border-collapse">
                            <thead>
                                <tr className="bg-slate-950 text-slate-200 border-b border-slate-800 font-bold">
                                    <th className="p-3 text-start"><span className="lang-ar">طريقة التعلّم (Method)</span><span className="lang-en">Learning Method</span></th>
                                    <th className="p-3 text-start text-cyan-400"><span className="lang-ar">البيانات المُعطاة (Data Given)</span><span className="lang-en">Data Given</span></th>
                                    <th className="p-3 text-start text-emerald-400"><span className="lang-ar">ما يُتعلَّم (What is Learned)</span><span className="lang-en">What is Learned</span></th>
                                    <th className="p-3 text-start text-amber-400"><span className="lang-ar">المثال التمثيلي والموقف المناسب (ص 52 - 55)</span><span className="lang-en">Representative Task & Examples (pp. 59 - 61)</span></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/60 bg-slate-900/40 text-sub">
                                <tr>
                                    <td className="p-3 font-bold text-white"><span className="lang-ar">1. التعلّم الخاضع للإشراف</span><br /><span className="text-[11px] font-mono text-emerald-400">Supervised Learning</span></td>
                                    <td className="p-3"><span className="lang-ar">أزواج من المدخلات والإجابة الصحيحة المعروفة مسبقاً (<strong>الوسم Label</strong>).</span><span className="lang-en">Pairs of input and the known correct answer (<strong>label</strong>).</span></td>
                                    <td className="p-3"><span className="lang-ar">قواعد للتنبؤ بالإجابة الصحيحة أو الفئة لبيانات جديدة.</span><span className="lang-en">Rules for predicting the correct answer for new data.</span></td>
                                    <td className="p-3"><span className="lang-ar"><strong>التصنيف (Classification):</strong> فرز البريد إلى &quot;مزعج/عادي&quot;، فرز الصور الطبية، تصنيف الحيوانات (كلب/قطة/طائر)، تصنيف المقالات الإخبارية.</span><span className="lang-en"><strong>Classification:</strong> Sorting spam vs normal email, medical images, animal photos, or news article categories.</span></td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold text-white"><span className="lang-ar">2. التعلّم غير الخاضع للإشراف</span><br /><span className="text-[11px] font-mono text-cyan-400">Unsupervised Learning</span></td>
                                    <td className="p-3"><span className="lang-ar">بيانات الإدخال فقط (<strong>بدون إجابات صحيحة / بدون وسوم No labels</strong>).</span><span className="lang-en">Input data only (<strong>no correct answers / no labels</strong>).</span></td>
                                    <td className="p-3"><span className="lang-ar">البنية الخفية أو المجموعات المتشابهة تلقائياً في البيانات.</span><span className="lang-en">Hidden structure or natural groups in the data.</span></td>
                                    <td className="p-3"><span className="lang-ar"><strong>التجميع (Clustering):</strong> تجميع عملاء متجر إلكتروني حسب تشابه عادات الشراء، أو مستمعي الموسيقى، أو المقالات المتشابهة.</span><span className="lang-en"><strong>Clustering:</strong> Grouping online shop customers by similar purchase patterns or music listeners.</span></td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold text-white"><span className="lang-ar">3. التعلّم المعزز</span><br /><span className="text-[11px] font-mono text-purple-400">Reinforcement Learning</span></td>
                                    <td className="p-3"><span className="lang-ar">الأفعال (Actions) ونتائجها التقييمية (<strong>المكافآت Rewards</strong>) في بيئة.</span><span className="lang-en">Actions and their resulting evaluations (<strong>rewards</strong>).</span></td>
                                    <td className="p-3"><span className="lang-ar">كيفية اختيار الإجراءات الأفضل تدريجياً عبر التجربة والخطأ (Trial & error).</span><span className="lang-en">How to choose actions to obtain better results via trial and error.</span></td>
                                    <td className="p-3"><span className="lang-ar">تعلم تحقيق أعلى نتيجة في لعبة، تعلم روبوت المشي دون سقوط، عمليات القيادة الذاتية الآمنة.</span><span className="lang-en">Game AI achieving high scores, robot learning to walk without falling, self-driving car control.</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs leading-relaxed">
                        <div className="p-4 rounded-2xl theme-subpanel border border-emerald-500/30 space-y-2">
                            <strong className="text-emerald-400 font-black block"><i className="fa-solid fa-tags"></i> <span className="lang-ar">التصنيف والسمات (Classification & Features — ص 53):</span><span className="lang-en">Classification & Features (p. 60):</span></strong>
                            <p className="text-sub"><span className="lang-ar">يمر بمرحلتين: <strong>(1) التدريب (Training):</strong> إيجاد الحد الفاصل وقواعد التصنيف من بيانات موسومة، و<strong>(2) التنبؤ (Prediction):</strong> تصنيف بيانات جديدة. وتُسمى المعلومات المفيدة كدليل للتنبؤ <strong>السمة (Feature)</strong> (مثل أنواع الكلمات وعنوان المرسل وطول النص في البريد المزعج).</span><span className="lang-en">Two stages: <strong>Training</strong> (finding boundary from labeled data) and <strong>Prediction</strong>. A clue in input data useful for prediction is called a <strong>feature</strong> (e.g., suspicious words, sender address, body length).</span></p>
                        </div>

                        <div className="p-4 rounded-2xl theme-subpanel border border-cyan-500/30 space-y-2">
                            <strong className="text-cyan-400 font-black block"><i className="fa-solid fa-object-group"></i> <span className="lang-ar">الفرق الجوهري بين التصنيف والتجميع (ص 54):</span><span className="lang-en">Classification vs. Clustering (p. 61):</span></strong>
                            <p className="text-sub"><span className="lang-ar">يكمن الفرق في <strong>ما إذا كانت الإجابات الصحيحة (الوسوم Labels) مُعطاة مسبقاً أم لا</strong>: في التصنيف الوسوم مُعطاة مسبقاً للتنبؤ بفئة بيانات جديدة، بينما في التجميع الوسوم <strong>غير مُعطاة</strong> ويكتشف الحاسوب بنفسه العناصر المتشابهة، ثم يفسر البشر معنى كل مجموعة.</span><span className="lang-en">The difference lies in whether <strong>correct answers (labels)</strong> are given: Classification has labels given in advance; Clustering has NO labels and finds natural groups that humans then interpret.</span></p>
                        </div>

                        <div className="p-4 rounded-2xl theme-subpanel border border-purple-500/30 space-y-2">
                            <strong className="text-purple-400 font-black block"><i className="fa-solid fa-gamepad"></i> <span className="lang-ar">عناصر التعلّم المعزز الثلاثة (ص 55):</span><span className="lang-en">3 Elements of Reinforcement Learning (p. 61):</span></strong>
                            <p className="text-sub"><span className="lang-ar">① <strong>الحالة (State):</strong> الموقف الذي يوضع فيه الوكيل (الطرف المتعلم Agent).<br />② <strong>الإجراء (Action):</strong> الخيارات التي يمكن اختيارها في ذلك الموقف.<br />③ <strong>المكافأة (Reward):</strong> القيمة العددية المُعطاة كنتيجة للإجراء لتقييم جودته.</span><span className="lang-en">① <strong>State:</strong> Situation the agent is placed in.<br />② <strong>Action:</strong> Choices available in that situation.<br />③ <strong>Reward:</strong> Numerical evaluation given as a result of the action.</span></p>
                        </div>
                    </div>
                </div>

                <MachineLearningLabs />
                <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <div>
                            <span className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">
                                <span className="lang-ar">أنشطة وميزات كتاب الوزارة الرسمية للدرس 7-1</span>
                                <span className="lang-en">Official Lesson 7-1 Textbook Activities</span>
                            </span>
                            <h3 className="text-lg font-black mt-0.5 flex items-center gap-2">
                                <i className="fa-solid fa-graduation-cap text-amber-400"></i>
                                <span className="lang-ar">أنشطة: توقف وفكر • فكر كمهندس • طبق ما تعلمته • نمط الامتحان • فكر وتحدَّ نفسك</span>
                                <span className="lang-en">Pause & Think • Think as an Engineer • In a New Context • Exam Style • Reflect & Challenge</span>
                            </h3>
                        </div>
                        <span className="text-xs text-sub font-mono">ص 53 - ص 58</span>
                    </div>

                    
                    <div className="p-5 rounded-2xl theme-subpanel border border-purple-500/30 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-brain"></i>
                                <span className="lang-ar">💡 جميع أسئلة (توقف وفكر — Pause & Think) للدرس 7-1 (ص 53 - 56)</span>
                                <span className="lang-en">💡 All 3 Pause & Think Questions — Lesson 7-1 (pp. 60 - 63)</span>
                            </span>
                            <button type="button" aria-expanded={!!expandedCards['pt-7-1']} onClick={() => toggleCard('pt-7-1')} className="text-xs font-bold text-purple-400 hover:underline flex items-center gap-1">
                                <span className="lang-ar">عرض الإجابات النموذجية</span><span className="lang-en">Show Model Answers</span>
                                <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['pt-7-1'] ? 'rotate-180' : ''}`}></i>
                            </button>
                        </div>
                        <div className="text-xs font-bold text-slate-200 space-y-1">
                            <p><span className="lang-ar">1. (ص 53): &quot;وسوم مُعطاة أو غير مُعطاة — أي كلمة واحدة تفصل بين التصنيف والتجميع؟&quot;</span><span className="lang-en">1. (p. 60): &quot;Labels given or not given — which one word separates classification from clustering?&quot;</span></p>
                            <p><span className="lang-ar">2. (ص 55): &quot;التعلّم من المكافآت من خلال التجربة والخطأ — أي نوع من الأنواع الثلاثة هو ذلك؟&quot;</span><span className="lang-en">2. (p. 61): &quot;Learning from rewards through trial and error — which of the three types is that?&quot;</span></p>
                            <p><span className="lang-ar">3. (ص 56): &quot;أي مهمة لديها قاعدة بسيطة يمكن للإنسان كتابتها بالفعل — بحيث لا تحتاج إلى تعلّم آلي؟&quot;</span><span className="lang-en">3. (p. 63): &quot;Which task has a simple rule a human can already write — so needs no learning?&quot;</span></p>
                        </div>
                        <div id="pt-7-1" className={`p-4 rounded-xl bg-slate-900 border border-purple-500/40 text-xs leading-relaxed text-slate-300 space-y-2 ${expandedCards['pt-7-1'] ? '' : 'hidden'}`}>
                            <p className="lang-ar">💡 <strong>1. الكلمة الفاصلة بين التصنيف والتجميع:</strong> هي <strong>الوسوم / الإجابات الصحيحة (Labels)</strong>؛ فالتصنيف يتعلم من بيانات ذات وسوم معطاة مسبقاً (خاضع للإشراف)، بينما التجميع يعمل بدون وسوم (غير خاضع للإشراف).<br />💡 <strong>2. التعلم من المكافآت بالتجربة والخطأ:</strong> هو <strong>التعلّم المعزز (Reinforcement Learning)</strong>.<br />💡 <strong>3. المهمة التي لا تحتاج لتعلم آلي:</strong> <strong>حساب مجموع عددين صحيحين (Calculating the sum of two integers)</strong>؛ لأن قاعدتها الحسابية بسيطة وثابتة ويكتبها الإنسان مباشرة بالبرمجة التقليدية.</p>
                            <p className="lang-en">💡 <strong>Model Answers:</strong><br />1. <strong>Labels (correct answers):</strong> Classification learns from labeled data; Clustering groups unlabeled data.<br />2. <strong>Reinforcement learning</strong> learns actions from rewards via trial and error.<br />3. <strong>Calculating the sum of two integers</strong> follows a simple explicit rule written in conventional programming.</p>
                        </div>
                    </div>

                    
                    <div className="p-5 rounded-2xl theme-subpanel border border-emerald-500/30 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-gears"></i>
                                <span className="lang-ar">⚙️ فكر كمهندس: دعم الطلاب واكتشاف عادات الدراسة — كتاب الوزارة ص 57</span>
                                <span className="lang-en">⚙️ Think as an Engineer (Student Support & Study Habits) — Textbook p. 64</span>
                            </span>
                            <button type="button" aria-expanded={!!expandedCards['eng-7-1']} onClick={() => toggleCard('eng-7-1')} className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1">
                                <span className="lang-ar">عرض الحل الهندسي الكامل</span><span className="lang-en">Show Engineering Solution</span>
                                <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['eng-7-1'] ? 'rotate-180' : ''}`}></i>
                            </button>
                        </div>
                        <p className="text-xs font-bold text-slate-200">
                            <span className="lang-ar">&quot;تمتلك مدرستك سنوات من البيانات وتريد مساعدة في مهمتين: (i) الإشارة مبكراً إلى الطلاب الذين قد يحتاجون دعماً إضافياً، و(ii) اكتشاف مجموعات طبيعية من عادات الدراسة لم تكن معروفة من قبل: 1. حدد نوع التعلم المناسب لكل مهمة. 2. حلل مخاطر التحيز والصندوق الأسود. 3. حدد دور الإنسان (Human-in-the-loop).&quot;</span>
                            <span className="lang-en">&quot;Your school wants help with two tasks: (i) flagging students who may need extra support early, and (ii) discovering natural groups of study habits it did not know about: 1. Identify the learning method for each. 2. Analyze bias and black-box risks. 3. Decide the role of the human.&quot;</span>
                        </p>
                        <div id="eng-7-1" className={`p-4 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs leading-relaxed text-slate-300 space-y-2 ${expandedCards['eng-7-1'] ? '' : 'hidden'}`}>
                            <p className="lang-ar">💡 <strong>الحل الهندسي المعتمد:</strong><br />• <strong>1. تحديد الطريقة:</strong> للمهمة (i) نختار <strong>التعلم الخاضع للإشراف — التصنيف (Supervised Learning / Classification)</strong> بالاعتماد على سجلات الحضور والدرجات السابقة الموسومة؛ وللمهمة (ii) نختار <strong>التعلم غير الخاضع للإشراف — التجميع (Unsupervised Learning / Clustering)</strong> لاكتشاف أنماط وعادات الدراسة غير الموسومة.<br />• <strong>2. تحليل المخاطر:</strong> قد تكون بيانات التدريب متحيزة إذا شملت فقط الطلاب الذين طلبوا المساعدة بأنفسهم سابقاً (فتغفل الطلاب الخجولين). وتكمن خطورة <strong>مشكلة الصندوق الأسود</strong> في احتمال معاقبة طالب أو تصنيفه سلبياً دون أن يفهم المعلم سبب إشارة النموذج.<br />• <strong>3. دور الإنسان (الإنسان في الحلقة Human-in-the-loop):</strong> يقتصر دور النموذج على <strong>التنبيه المبكر المساعد</strong>، بينما تظل المراجعة والتحدث مع الطالب واتخاذ القرار التربوي النهائي بيد المعلم البشري دائماً.</p>
                            <p className="lang-en">💡 <strong>Model Engineering Decision:</strong><br />• <strong>1. Method Selection:</strong> Task (i) uses <strong>Supervised Learning (Classification)</strong> trained on historical labeled records; Task (ii) uses <strong>Unsupervised Learning (Clustering)</strong> to find natural groups without prior labels.<br />• <strong>2. Risks:</strong> Training data is biased if it only reflects students who previously asked for help. The <strong>black-box problem</strong> risks unfair treatment if teachers act blindly on a flag without knowing its basis.<br />• <strong>3. Human-in-the-Loop:</strong> Keep teachers in charge of reviewing flags and making support decisions; use the model strictly as an early-warning assistant.</p>
                        </div>
                    </div>

                    
                    <div className="p-5 rounded-2xl theme-subpanel border border-rose-500/30 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-flask"></i>
                                <span className="lang-ar">🌍 طبق ما تعلمته (مراجعة طلبات القروض البنكية) — كتاب الوزارة ص 57</span>
                                <span className="lang-en">🌍 In a New Context (Bank Loan Application Review) — Textbook p. 65</span>
                            </span>
                            <button type="button" aria-expanded={!!expandedCards['ctx-7-1']} onClick={() => toggleCard('ctx-7-1')} className="text-xs font-bold text-rose-400 hover:underline flex items-center gap-1">
                                <span className="lang-ar">عرض الإجابة النموذجية</span><span className="lang-en">Reveal Answer</span>
                                <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['ctx-7-1'] ? 'rotate-180' : ''}`}></i>
                            </button>
                        </div>
                        <p className="text-xs font-bold text-slate-200">
                            <span className="lang-ar">&quot;يريد بنك برنامجاً يقرأ كل طلب قرض ويشير إلى الطلبات التي تبدو محفوفة بالمخاطر ليراجعها موظف بشري. سمِّ نوع التعلّم الذي يمثل هذا، وسمِّ سمة واحدة قد يستخدمها النموذج، واشرح لماذا يجب أن يبقى الموظف في الحلقة بدلاً من ترك النموذج يقرر بمفرده.&quot;</span>
                            <span className="lang-en">&quot;A bank wants software that reads each loan application and flags the ones that look risky for a human officer to review. Name which learning type this is, name one feature the model might use, and explain why the officer must stay in the loop rather than letting the model decide alone.&quot;</span>
                        </p>
                        <div id="ctx-7-1" className={`p-4 rounded-xl bg-slate-900 border border-rose-500/40 text-xs leading-relaxed text-slate-300 ${expandedCards['ctx-7-1'] ? '' : 'hidden'}`}>
                            <span className="lang-ar">💡 <strong>الحل النموذجي:</strong><br />• <strong>نوع التعلم:</strong> <strong>تعلّم خاضع للإشراف — تصنيف (Supervised Learning / Classification)</strong> لأنه يتنبأ بفئة الطلب (محفوف بالمخاطر / آمن) بناءً على سجلات القروض السابقة الموسومة.<br />• <strong>مثال لسمة (Feature):</strong> الدخل الشهري للمتقدم، أو تاريخ سداد القروض السابقة، أو نسبة الدين إلى الدخل.<br />• <strong>لماذا يجب بقاء الموظف البشري في الحلقة (Human-in-the-loop)؟</strong> لأن قرار رفض القرض قرار عالي المخاطر يؤثر في حياة العميل، وقد يعاني النموذج من <strong>تحيز في بيانات التدريب (Data bias)</strong> أو <strong>مشكلة الصندوق الأسود (Black-box problem)</strong> حيث يصعب رؤية سبب الحكم؛ لذا يجب أن يستخدمه الموظف كأداة مساعدة فقط ويتحقق بنفسه قبل القرار النهائي.</span>
                            <span className="lang-en">💡 <strong>Model Answer:</strong><br />• <strong>Learning Type:</strong> <strong>Supervised learning (Classification)</strong>.<br />• <strong>Example Feature:</strong> Applicant&apos;s income, repayment history, or debt-to-income ratio.<br />• <strong>Why Keep the Human Officer in the Loop:</strong> Loan approval is a high-stakes decision; due to potential <strong>training data bias</strong> and the <strong>black-box problem</strong>, a human must review and verify the basis of the flag rather than letting the model decide alone.</span>
                        </div>
                    </div>

                    
                    <div className="p-5 rounded-2xl theme-subpanel border border-amber-500/30 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-file-pen"></i>
                                <span className="lang-ar">📝 سؤال على نمط الامتحان [6 درجات] + تحدي التعرف على الوجوه — كتاب الوزارة ص 56 و 58</span>
                                <span className="lang-en">📝 Exam-Style Question [6 Marks] & Face-Recognition Bias Challenge — Textbook pp. 63 & 66</span>
                            </span>
                            <button type="button" aria-expanded={!!expandedCards['exam-7-1']} onClick={() => toggleCard('exam-7-1')} className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1">
                                <span className="lang-ar">عرض نموذج الإجابة وتوزيع الدرجات</span><span className="lang-en">Model Answer & Mark Scheme</span>
                                <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['exam-7-1'] ? 'rotate-180' : ''}`}></i>
                            </button>
                        </div>
                        <p className="text-xs font-bold text-slate-200">
                            <span className="lang-ar">&quot;اشرح لماذا يجب أن يدعم التعلّم الآلي الحكم البشري بدلاً من استبداله. [6 درجات] راجع: التحيز في البيانات ومشكلة الصندوق الأسود.&quot;</span>
                            <span className="lang-en">&quot;Explain why machine learning should support human judgment rather than replace it. [6 marks] Refer to: bias in data and the black-box problem.&quot;</span>
                        </p>
                        <div id="exam-7-1" className={`p-4 rounded-xl bg-slate-900 border border-amber-500/40 text-xs leading-relaxed text-slate-300 space-y-2 ${expandedCards['exam-7-1'] ? '' : 'hidden'}`}>
                            <strong className="text-amber-400 block font-bold"><span className="lang-ar">نموذج الإجابة الكامل للحصول على الدرجة النهائية (6/6):</span><span className="lang-en">Full Mark Scheme (6/6):</span></strong>
                            <ol className="space-y-1.5 list-decimal rtl:pr-4 ltr:pl-4 text-sub">
                                <li><span className="lang-ar"><strong>أثر التحيز في بيانات التدريب (Bias in data) [درجتان]:</strong> يستخرج التعلم الآلي قواعده مباشرة من بيانات التدريب؛ فإذا كانت البيانات منحرفة أو لا تمثل جميع الفئات بعدالة (مثل تدريب نموذج تعرف على الوجوه على مجموعة واحدة فقط)، فإن أحكام النموذج ستكون متحيزة وخاطئة تجاه الفئات الأخرى.</span><span className="lang-en"><strong>Bias in training data [2 marks]:</strong> ML models learn rules from training data; if the data is skewed or unrepresentative, the model&apos;s predictions will also be biased and unfair.</span></li>
                                <li><span className="lang-ar"><strong>مشكلة الصندوق الأسود (Black-box problem) [درجتان]:</strong> في العديد من نماذج التعلم الآلي يصعب على البشر رؤية الأساس المنطقي الذي استند إليه النموذج في إصدار حكمه، مما يجعل اكتشاف الأخطاء الخفية أمراً صعباً بدون مراجعة.</span><span className="lang-en"><strong>The black-box problem [2 marks]:</strong> The internal basis for a model&apos;s judgment is often opaque and hard for humans to inspect or verify directly.</span></li>
                                <li><span className="lang-ar"><strong>ضرورة الرقابة البشرية (Supporting human judgment) [درجتان]:</strong> لهذه الأسباب، لا يُعد التعلم الآلي حلاً سحرياً معصوماً، بل يجب إبقاء الإنسان في الحلقة (Human-in-the-loop) ليستخدم مخرجات النموذج كأداة مساعدة ويتحمل مسؤولية القرار النهائي.</span><span className="lang-en"><strong>Supporting rather than replacing humans [2 marks]:</strong> Consequently, humans must remain in the loop to check outputs, ensure fairness, and make final high-stakes decisions.</span></li>
                            </ol>
                        </div>
                    </div>
                </div>

                
                <div className="space-y-3 pt-2">
                    <h4 className="font-bold text-sm flex items-center gap-2">
                        <i className="fa-solid fa-clone text-emerald-400"></i>
                        <span className="lang-ar">بطاقات المراجعة السريعة للدرس 7-1 (المس لقلب البطاقة):</span>
                        <span className="lang-en">Lesson 7-1 Flashcards (Tap to flip):</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                        <div className="flip-card" onClick={(event) => event.currentTarget.classList.toggle('flipped')}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front theme-panel border border-emerald-500/30">
                                    <span className="text-2xl mb-1 block">🤖</span>
                                    <strong className="text-sm block"><span className="lang-ar">التعلّم الآلي مقابل البرمجة</span><span className="lang-en">ML vs Programming</span></strong>
                                    <span className="text-[10px] text-emerald-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                </div>
                                <div className="flip-card-back bg-emerald-950/90 border border-emerald-500 text-slate-200">
                                    <p className="lang-ar">في البرمجة التقليدية يكتب البشر القواعد؛ وفي التعلم الآلي يكتشف الحاسوب القواعد بنفسه من البيانات.</p>
                                    <p className="lang-en">In conventional programming humans write rules; in ML the computer finds rules from data on its own.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card" onClick={(event) => event.currentTarget.classList.toggle('flipped')}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front theme-panel border border-cyan-500/30">
                                    <span className="text-2xl mb-1 block">🏷️</span>
                                    <strong className="text-sm block"><span className="lang-ar">التصنيف والسمة</span><span className="lang-en">Classification & Feature</span></strong>
                                    <span className="text-[10px] text-cyan-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                </div>
                                <div className="flip-card-back bg-cyan-950/90 border border-cyan-500 text-slate-200">
                                    <p className="lang-ar">التصنيف (خاضع للإشراف) يتنبأ بالفئة من بيانات موسومة؛ والسمة (Feature) معلومة في المدخلات تعمل كدليل للتنبؤ.</p>
                                    <p className="lang-en">Classification (supervised) predicts classes from labeled data; a feature is an input clue useful for prediction.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card" onClick={(event) => event.currentTarget.classList.toggle('flipped')}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front theme-panel border border-amber-500/30">
                                    <span className="text-2xl mb-1 block">🧩</span>
                                    <strong className="text-sm block"><span className="lang-ar">التجميع والتعلّم المعزز</span><span className="lang-en">Clustering & RL</span></strong>
                                    <span className="text-[10px] text-amber-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                </div>
                                <div className="flip-card-back bg-amber-950/90 border border-amber-500 text-slate-200">
                                    <p className="lang-ar">التجميع (غير خاضع للإشراف) يجمع العناصر المتشابهة بدون وسوم؛ والمعزز يتعلم الإجراءات الأفضل من المكافآت.</p>
                                    <p className="lang-en">Clustering (unsupervised) groups unlabeled items; RL learns better actions from rewards via trial and error.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card" onClick={(event) => event.currentTarget.classList.toggle('flipped')}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front theme-panel border border-rose-500/30">
                                    <span className="text-2xl mb-1 block">📦</span>
                                    <strong className="text-sm block"><span className="lang-ar">التحيز والصندوق الأسود</span><span className="lang-en">Bias & Black-Box</span></strong>
                                    <span className="text-[10px] text-rose-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                </div>
                                <div className="flip-card-back bg-rose-950/90 border border-rose-500 text-slate-200">
                                    <p className="lang-ar">البيانات المتحيزة تنتج أحكاماً متحيزة، والصندوق الأسود يخفي أساس الحكم؛ لذا يدعم التعلم الآلي الحكم البشري ولا يستبدله.</p>
                                    <p className="lang-en">Biased data yields biased judgments, and the black-box hides reasoning; keep a human in the loop.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="theme-panel border p-6 rounded-3xl space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <h4 className="font-bold text-sm sm:text-base flex items-center gap-2">
                            <i className="fa-solid fa-circle-question text-emerald-400"></i>
                            <span className="lang-ar">اختبار تدريبي على الدرس 7-1 (10 أسئلة منهجية من كتاب الوزارة)</span>
                            <span className="lang-en">Lesson 7-1 Practice Quiz (10 Ministry Textbook Questions)</span>
                        </h4>
                        <span className="text-xs text-amber-400 font-bold">
                            <span className="lang-ar">إشراف: م/ عمر محمود</span>
                            <span className="lang-en">Eng. Omar Mahmoud</span>
                        </span>
                    </div>
                    <Unit7LessonQuiz lessonKey="lesson71Questions" />
                </div>

                
                <div className="flex justify-end pt-2 text-xs">
                    <button onClick={() => navigate('lesson-7-2')} className="px-5 py-2.5 rounded-xl font-bold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2 shadow-md">
                        <span className="lang-ar">الدرس التالي: 7-2 الشبكات العصبية والتعلم العميق</span>
                        <span className="lang-en">Next: 7-2 Neural Networks and Deep Learning</span>
                        <i className="fa-solid fa-arrow-left rtl:fa-arrow-left ltr:fa-arrow-right"></i>
                    </button>
                </div>
            </div>
);
}
