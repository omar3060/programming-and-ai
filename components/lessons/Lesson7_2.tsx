'use client';

import React, { useState } from 'react';
import { useApp } from '@/components/providers/AppProviders';
import { Unit7LessonQuiz } from '@/components/lessons/Unit7LessonQuiz';
import { NeuralNetworkLearningLabs } from '@/components/simulators/NeuralNetworkLearningLabs';

export function Lesson7_2(){
const {playSfx,setActiveLesson}=useApp();const [expandedCards,setExpandedCards]=useState<Record<string,boolean>>({});const [conceptTab,setConceptTab]=useState('layers');const toggleCard=(id:string)=>{playSfx('click');setExpandedCards(current=>({...current,[id]:!current[id]}))};const navigate=(view:Parameters<typeof setActiveLesson>[0])=>{playSfx('click');setActiveLesson(view);window.scrollTo({top:0,behavior:'smooth'})};return (
<div id="view-lesson-7-2" className="lesson-view space-y-8 animate-fadeIn">

                
                <div className="theme-panel border p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-lg">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="space-y-2 max-w-3xl">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold flex items-center gap-1.5">
                                    <i className="fa-solid fa-network-wired"></i>
                                    <span className="lang-ar">الدرس 7-2 (كتاب الوزارة ص 59 - ص 66)</span>
                                    <span className="lang-en">Lesson 7-2 (Textbook pp. 68 - 76)</span>
                                </span>
                                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-bold">
                                    <span className="lang-ar">الشبكات العصبية والتعلم العميق</span>
                                    <span className="lang-en">Neural Networks & Deep Learning</span>
                                </span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-black">
                                <span className="lang-ar">الشبكات العصبية والتعلم العميق (Neural Networks and Deep Learning)</span>
                                <span className="lang-en">Neural Networks and Deep Learning</span>
                            </h2>
                            <p className="text-xs sm:text-sm text-sub leading-relaxed">
                                <span className="lang-ar">شرح تفاعلي شامل للدرس الثاني من الوحدة السابعة: بنية الشبكة العصبية (العقد/الخلايا العصبية Nodes/Neurons، وطبقات الإدخال Input، والمخفية Hidden، والإخراج Output)، آلية عمل الخلية العصبية الواحدة (الأوزان Weights، والانحياز Bias، ودالة التنشيط Activation Function)، مراحل التدريب الثلاث (قبل وأثناء وبعد التدريب باستخدام دالة الخسارة Loss Function والتعميم Generalization)، وكيف يبني التعلم العميق (Deep Learning) السمات بشكل هرمي خطوة بخطوة (من الطبقات الضحلة إلى الوسطى إلى العميقة) بفضل البيانات الضخمة والقدرة الحاسوبية (GPUs/TPUs).</span>
                                <span className="lang-en">Comprehensive interactive breakdown of Lesson 7-2: Neural network structure (nodes/neurons and Input, Hidden, and Output layers), how a single neuron works (weights, bias, sum, non-linear activation function), the 3 training stages (Before, During, and After training via loss function & generalization), and how Deep Learning builds features hierarchically step by step (Shallow &rarr; Middle &rarr; Deep layers) powered by big data and GPUs/TPUs.</span>
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
                            <strong className="text-cyan-400 block font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-bullseye"></i>
                                <span className="lang-ar">أهداف التعلم الرسمية للدرس (ص 59):</span>
                                <span className="lang-en">Official Learning Objectives (p. 68):</span>
                            </strong>
                            <ul className="space-y-1 text-sub">
                                <li>• <span className="lang-ar">وصف بنية الشبكة العصبية (العقد والطبقات)، وشرح كيفية معالجة الخلية العصبية الواحدة لمدخلاتها وكيف يعدّل التدريب الأوزان.</span><span className="lang-en">Describe the structure of a neural network, explain how a single neuron processes inputs, and how training adjusts weights.</span></li>
                                <li>• <span className="lang-ar">شرح ماهية التعلم العميق، وبيان سبب إحداث تكديس العديد من الطبقات المخفية طفرة في أداء الذكاء الاصطناعي.</span><span className="lang-en">Explain what deep learning is, and why stacking many hidden layers brought a leap in AI performance.</span></li>
                            </ul>
                        </div>
                        <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
                            <strong className="text-amber-400 block font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-circle-question"></i>
                                <span className="lang-ar">السؤال الرئيس للدرس (كتاب الوزارة ص 60):</span>
                                <span className="lang-en">Guiding Question (Textbook p. 69):</span>
                            </strong>
                            <p className="text-slate-200 font-medium leading-relaxed">
                                <span className="lang-ar">&quot;كيف تُبنى الشبكة العصبية وتُدرَّب، وما الذي يضيفه جعلها &apos;عميقة&apos;؟&quot;</span>
                                <span className="lang-en">&quot;How is a neural network built and trained, and what does making it &apos;deep&apos; add?&quot;</span>
                            </p>
                        </div>
                    </div>
                </div>

                
                <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-5">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
                        <h3 className="text-lg font-black flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs">١</span>
                            <span className="lang-ar">الشرح التفاعلي لبنية الشبكة العصبية والأوزان ومراحل التدريب (ص 60 - 61)</span>
                            <span className="lang-en">1–2. Interactive Guide: Neural Network Layers, Weights & Training Stages (pp. 69 - 70)</span>
                        </h3>
                        <div className="flex flex-wrap gap-2 text-xs">
                            <button onClick={() => { playSfx('click'); setConceptTab('layers'); }} id="nntab-btn-layers" className={conceptTab === 'layers' ? 'px-3 py-1.5 rounded-xl bg-cyan-600 text-white font-bold transition' : 'px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 font-bold transition'}>
                                🧱 <span className="lang-ar">الطبقات الثلاث والخلية العصبية</span><span className="lang-en">3 Layers & Single Neuron</span>
                            </button>
                            <button onClick={() => { playSfx('click'); setConceptTab('training'); }} id="nntab-btn-training" className={conceptTab === 'training' ? 'px-3 py-1.5 rounded-xl bg-cyan-600 text-white font-bold transition' : 'px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 font-bold transition'}>
                                🎯 <span className="lang-ar">مراحل التدريب الثلاث والأوزان</span><span className="lang-en">3 Training Stages & Weights</span>
                            </button>
                            <button onClick={() => { playSfx('click'); setConceptTab('deep'); }} id="nntab-btn-deep" className={conceptTab === 'deep' ? 'px-3 py-1.5 rounded-xl bg-cyan-600 text-white font-bold transition' : 'px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 font-bold transition'}>
                                🚀 <span className="lang-ar">التعلم العميق والهرمية (GPUs)</span><span className="lang-en">Deep Learning & Hierarchy</span>
                            </button>
                        </div>
                    </div>

                    
                    <div id="nntab-panel-layers" className={`space-y-4 ${conceptTab === 'layers' ? '' : 'hidden'}`}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
                            <div className="p-4 rounded-2xl theme-subpanel border border-cyan-500/30 space-y-2">
                                <strong className="text-cyan-400 font-black block text-sm">
                                    <span className="lang-ar">1. ما الشبكة العصبية (Neural Network)؟ (ص 60):</span>
                                    <span className="lang-en">1. What Is a Neural Network? (p. 69):</span>
                                </strong>
                                <p className="text-sub">
                                    <span className="lang-ar">نموذج رياضى مستوحى من آلية معالجة المعلومات في الخلايا العصبية بدماغ الإنسان، ويتكون من <strong>وحدات حسابية بسيطة تُسمى العُقد أو الخلايا العصبية الاصطناعية (Nodes / Neurons)</strong> مرتبة في <strong>طبقات (Layers)</strong> متتالية.</span>
                                    <span className="lang-en">A mathematical model modeled on information processing in human brain nerve cells, consisting of simple computing units called <strong>nodes (or artificial neurons)</strong> arranged in <strong>layers</strong>.</span>
                                </p>
                            </div>
                            <div className="p-4 rounded-2xl theme-subpanel border border-emerald-500/30 space-y-2">
                                <strong className="text-emerald-400 font-black block text-sm">
                                    <span className="lang-ar">2. كيف تعمل الخلية العصبية الواحدة؟ (ص 60 - 61):</span>
                                    <span className="lang-en">2. How a Single Neuron Processes Inputs (pp. 69 - 70):</span>
                                </strong>
                                <p className="text-sub">
                                    <span className="lang-ar">تضرب الخلية العصبية كل مدخل في <strong>وزن (Weight)</strong> يوضح مدى أهمية ذلك المدخل (ويمكن أن يكون موجباً أو سالباً)، ثم تجمع حواصل الضرب (مع إضافة <strong>انحياز Bias</strong>)، وتمرر المجموع عبر <strong>دالة تنشيط غير خطية (Non-linear Activation Function)</strong> لترسل الناتج إلى الطبقة التالية!</span>
                                    <span className="lang-en">Each neuron multiplies its inputs by <strong>weights</strong> (positive or negative values indicating emphasis), sums them (plus a <strong>bias</strong>), passes the sum through a non-linear <strong>activation function</strong>, and sends the result to the next layer.</span>
                                </p>
                            </div>
                        </div>

                        
                        <div className="overflow-x-auto rounded-2xl border border-slate-800">
                            <table className="w-full text-xs min-w-[600px] border-collapse">
                                <thead>
                                    <tr className="bg-slate-950 text-slate-200 border-b border-slate-800 font-bold">
                                        <th className="p-3 text-start"><span className="lang-ar">الطبقة (Layer)</span><span className="lang-en">Layer</span></th>
                                        <th className="p-3 text-start text-cyan-400"><span className="lang-ar">الدور الوظيفي (Role)</span><span className="lang-en">Role</span></th>
                                        <th className="p-3 text-start text-amber-400"><span className="lang-ar">مثال من كتاب الوزارة (ص 60 / p. 69)</span><span className="lang-en">Textbook Example (p. 69)</span></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800/60 bg-slate-900/40 text-sub">
                                    <tr>
                                        <td className="p-3 font-bold text-white"><span className="lang-ar">1. طبقة الإدخال (Input Layer)</span><span className="lang-en">1. Input Layer</span></td>
                                        <td className="p-3"><span className="lang-ar">تستقبل البيانات الخام من الخارج وتمررها للشبكة.</span><span className="lang-en">Receives data from outside.</span></td>
                                        <td className="p-3"><span className="lang-ar">استقبال قيم البكسلات (Pixel values) الخاصة بصورة.</span><span className="lang-en">Receiving the pixel values of an image.</span></td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-bold text-white"><span className="lang-ar">2. الطبقة المخفية / الوسطى (Hidden / Middle Layer)</span><span className="lang-en">2. Hidden Layer (Middle Layer)</span></td>
                                        <td className="p-3"><span className="lang-ar">تعالج معلومات الإدخال، وتستخرج السمات (Features)، وتحول التمثيلات؛ وقد توجد طبقة واحدة أو عدة طبقات.</span><span className="lang-en">Processes input information, extracts features, and transforms representations (one or many layers).</span></td>
                                        <td className="p-3"><span className="lang-ar">دمج قيم البكسلات لاكتشاف الحواف والأشكال الجزئية.</span><span className="lang-en">Combining pixel values to detect edges and partial shapes.</span></td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-bold text-white"><span className="lang-ar">3. طبقة الإخراج (Output Layer)</span><span className="lang-en">3. Output Layer</span></td>
                                        <td className="p-3"><span className="lang-ar">تُخرج نتيجة المعالجة النهائية كإجابة أو تنبؤ.</span><span className="lang-en">Outputs the result of processing as an answer.</span></td>
                                        <td className="p-3"><span className="lang-ar">إخراج نتيجة التصنيف النهائية مثل &quot;كلب (Dog)&quot; أو &quot;قطة (Cat)&quot;.</span><span className="lang-en">Outputting classification results such as &quot;dog&quot; or &quot;cat&quot;.</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    
                    <div id="nntab-panel-training" className={`space-y-4 ${conceptTab === 'training' ? '' : 'hidden'}`}>
                        <div className="overflow-x-auto rounded-2xl border border-slate-800">
                            <table className="w-full text-xs min-w-[600px] border-collapse">
                                <thead>
                                    <tr className="bg-slate-950 text-slate-200 border-b border-slate-800 font-bold">
                                        <th className="p-3 text-start"><span className="lang-ar">مرحلة التدريب (Stage)</span><span className="lang-en">Training Stage</span></th>
                                        <th className="p-3 text-start text-emerald-400"><span className="lang-ar">حالة الأوزان والتنبؤ (كتاب الوزارة ص 61 / p. 70)</span><span className="lang-en">State of Weights & Predictions (Textbook p. 70)</span></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800/60 bg-slate-900/40 text-sub">
                                    <tr>
                                        <td className="p-3 font-bold text-rose-400"><span className="lang-ar">1. قبل التدريب (Before Training)</span><span className="lang-en">1. Before Training</span></td>
                                        <td className="p-3"><span className="lang-ar">تُضبط الأوزان (Weights) على <strong>قيم عشوائية أولية (Arbitrary values)</strong>، لذا لا تستطيع الشبكة تقديم تنبؤات صحيحة.</span><span className="lang-en">Weights are set to <strong>arbitrary initial values</strong>, so correct predictions cannot be made.</span></td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-bold text-amber-400"><span className="lang-ar">2. أثناء التدريب (During Training)</span><span className="lang-en">2. During Training</span></td>
                                        <td className="p-3"><span className="lang-ar">تُعطى البيانات للشبكة، وتُعدَّل الأوزان تدريجياً بناءً على <strong>الفرق بين تنبؤ الشبكة والإجابة الصحيحة</strong> (يُقاس هذا الفرق بواسطة <strong>دالة الخسارة Loss Function</strong> لتقليل الخطأ).</span><span className="lang-en">Data is given, and weights are gradually adjusted based on the <strong>discrepancy between prediction and correct answer</strong> (measured by a <strong>loss function</strong>).</span></td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-bold text-emerald-400"><span className="lang-ar">3. بعد التدريب (After Training)</span><span className="lang-en">3. After Training</span></td>
                                        <td className="p-3"><span className="lang-ar">بفضل الأوزان المعدّلة، تستطيع الشبكة تقديم تنبؤات صحيحة حتى على <strong>بيانات جديدة لم ترها من قبل (التعميم Generalization)</strong>، ويتم التحقق من ذلك على <strong>بيانات اختبار منفصلة (Separate test data)</strong> للتأكد من عدم حدوث فرط التخصيص (Overfitting).</span><span className="lang-en">With adjusted weights, the network makes correct predictions even on <strong>unseen new data (generalization)</strong>, verified on separate test data to guard against overfitting.</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    
                    <div id="nntab-panel-deep" className={`space-y-4 ${conceptTab === 'deep' ? '' : 'hidden'}`}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                            <div className="p-4 rounded-2xl theme-subpanel border border-cyan-500/30 space-y-1.5">
                                <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold text-[10px]"><span className="lang-ar">المستوى 1: الطبقات الضحلة</span><span className="lang-en">Level 1: Shallow Layers</span></span>
                                <strong className="text-white block text-sm"><span className="lang-ar">السمات البسيطة (Simple Features)</span><span className="lang-en">Simple Features</span></strong>
                                <p className="text-sub"><span className="lang-ar">تستخرج سمات أولية بسيطة مثل <strong>الخطوط والحواف (Lines & edges) وتغيرات اللون</strong> مباشرة من البكسلات.</span><span className="lang-en">Extracts simple features such as <strong>lines, edges, and changes in color</strong>.</span></p>
                            </div>
                            <div className="p-4 rounded-2xl theme-subpanel border border-purple-500/30 space-y-1.5">
                                <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold text-[10px]"><span className="lang-ar">المستوى 2: الطبقات الوسطى</span><span className="lang-en">Level 2: Middle Layers</span></span>
                                <strong className="text-white block text-sm"><span className="lang-ar">أشكال الأجزاء (Shapes of Parts)</span><span className="lang-en">Shapes of Parts</span></strong>
                                <p className="text-sub"><span className="lang-ar">تجمع الخطوط والحواف معاً لتمثيل أجزاء فرعية مثل <strong>العيون والأنف والأذنين</strong> (أو الحلقات والزوايا في الأرقام).</span><span className="lang-en">Combines lines to capture <strong>shapes of parts such as eyes, nose, and ears</strong>.</span></p>
                            </div>
                            <div className="p-4 rounded-2xl theme-subpanel border border-emerald-500/30 space-y-1.5">
                                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10px]"><span className="lang-ar">المستوى 3: الطبقات العميقة</span><span className="lang-en">Level 3: Deep Layers</span></span>
                                <strong className="text-white block text-sm"><span className="lang-ar">البنية الكاملة (Whole Structure)</span><span className="lang-en">Whole Structure</span></strong>
                                <p className="text-sub"><span className="lang-ar">تجمع الأجزاء لتمثيل <strong>بنية الوجه أو الكائن بأكمله</strong> لاتخاذ القرار النهائي في طبقة الإخراج.</span><span className="lang-en">Combines parts to capture the <strong>structure of the whole face or object</strong>.</span></p>
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-slate-950 border border-amber-500/30 text-xs leading-relaxed text-slate-300">
                            <span className="lang-ar">🚀 <strong>لماذا نجح التعلم العميق حديثاً وما مجالاته الثلاثة الكبرى؟ (ص 62 / p. 71):</strong> أصبح التعلم العميق عملياً بفضل عاملين: <strong>(1) توفر كميات هائلة من البيانات (Large amounts of data)</strong>، و<strong>(2) التطور الكبير في القدرة الحاسوبية (GPUs و TPUs)</strong>. وميزته الكبرى أنه <strong>يتعلم السمات تلقائياً من البيانات</strong> دون حاجة البشر لتصميمها يدوياً، مما أحدث طفرة في: ① <strong>التعرف على الصور (Image recognition)</strong>، ② <strong>التعرف على الصوت (Speech recognition)</strong>، ③ <strong>معالجة اللغة الطبيعية (Natural language processing)</strong>.</span>
                            <span className="lang-en">🚀 <strong>Why Deep Learning Succeeded & Its 3 Major Fields (p. 71):</strong> Enabled by <strong>(1) large amounts of data</strong> and <strong>(2) high computational power (GPUs and TPUs)</strong>. It automatically learns features from data without manual human design, transforming ① <strong>Image recognition</strong>, ② <strong>Speech recognition</strong>, and ③ <strong>Natural language processing</strong>.</span>
                        </div>
                    </div>
                </div>

                <NeuralNetworkLearningLabs />
                <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <div>
                            <span className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">
                                <span className="lang-ar">أنشطة وميزات كتاب الوزارة الرسمية للدرس 7-2</span>
                                <span className="lang-en">Official Lesson 7-2 Textbook Activities</span>
                            </span>
                            <h3 className="text-lg font-black mt-0.5 flex items-center gap-2">
                                <i className="fa-solid fa-graduation-cap text-amber-400"></i>
                                <span className="lang-ar">أنشطة: توقف وفكر • فكر كمهندس • طبق ما تعلمته • نمط الامتحان • فكر وتحدَّ نفسك</span>
                                <span className="lang-en">Pause & Think • Think as an Engineer • In a New Context • Exam Style • Reflect & Challenge</span>
                            </h3>
                        </div>
                        <span className="text-xs text-sub font-mono">ص 60 - ص 66</span>
                    </div>

                    
                    <div className="p-5 rounded-2xl theme-subpanel border border-cyan-500/30 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-brain"></i>
                                <span className="lang-ar">💡 جميع أسئلة (توقف وفكر — Pause & Think) للدرس 7-2 (ص 61 - 64)</span>
                                <span className="lang-en">💡 All 5 Pause & Think Questions — Lesson 7-2 (pp. 70 - 73)</span>
                            </span>
                            <button type="button" aria-expanded={!!expandedCards['pt-7-2']} onClick={() => toggleCard('pt-7-2')} className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1">
                                <span className="lang-ar">عرض الإجابات النموذجية</span><span className="lang-en">Show Model Answers</span>
                                <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['pt-7-2'] ? 'rotate-180' : ''}`}></i>
                            </button>
                        </div>
                        <div className="text-xs font-bold text-slate-200 space-y-1">
                            <p><span className="lang-ar">1. (ص 61): &quot;لماذا يساعد تكديس المزيد من الطبقات المخفية على التقاط سمات أكثر تعقيداً؟&quot;</span><span className="lang-en">1. (p. 70): &quot;Why does stacking more hidden layers help capture more complex features?&quot;</span></p>
                            <p><span className="lang-ar">2. (ص 62): &quot;ما الشيئان اللذان كان لا بد من توفرهما قبل أن ينجح التعلم العميق عملياً؟&quot;</span><span className="lang-en">2. (p. 71): &quot;What two things had to become available before deep learning could work in practice?&quot;</span></p>
                            <p><span className="lang-ar">3. (ص 63): &quot;أي طبقة تستقبل البيانات، وأيها تعطي الإجابة النهائية؟&quot;</span><span className="lang-en">3. (p. 72): &quot;Which layer receives data, and which gives the final answer?&quot;</span></p>
                            <p><span className="lang-ar">4. (ص 64): &quot;قبل التدريب، هل الأوزان صحيحة بالفعل؟ ما الذي يغيرها؟ وماذا يتطلب العمق الإضافي من بيانات وقدرة حاسوبية؟&quot;</span><span className="lang-en">4. (p. 73): &quot;Before training, are the weights already correct? What changes them? What does extra depth demand?&quot;</span></p>
                        </div>
                        <div id="pt-7-2" className={`p-4 rounded-xl bg-slate-900 border border-cyan-500/40 text-xs leading-relaxed text-slate-300 space-y-2 ${expandedCards['pt-7-2'] ? '' : 'hidden'}`}>
                            <p className="lang-ar">💡 <strong>1. تكديس الطبقات المخفية:</strong> لأن كل طبقة تبني على مخرجات الطبقة التي تسبقها <strong>بشكل هرمي خطوة بخطوة</strong> (الطبقات الضحلة تلتقط الخطوط والحواف، والوسطى تدمجها في أجزاء كالعيون والأنف، والعميقة تدمجها في بنية الوجه أو الجسم الكامل).<br />💡 <strong>2. الشرطان اللازمان لنجاح التعلم العميق عملياً:</strong> توفر <strong>كميات ضخمة من البيانات (Large amounts of data)</strong>، وتوفر <strong>قدرة حاسوبية عالية جداً مثل وحدات معالجة الرسوميات (GPUs و TPUs)</strong>.<br />💡 <strong>3. استقبال البيانات وإخراج الإجابة:</strong> <strong>طبقة الإدخال (Input layer)</strong> تستقبل البيانات، و<strong>طبقة الإخراج (Output layer)</strong> تعطي الإجابة النهائية.<br />💡 <strong>4. حالة الأوزان ومتطلبات العمق:</strong> قبل التدريب تكون الأوزان عشوائية (غير صحيحة)، والذي يغيرها تدريجياً هو <strong>عملية التدريب (Training)</strong> بناءً على الفرق بين التنبؤ والإجابة الصحيحة. ويتطلب العمق الإضافي <strong>بيانات تدريب أكثر وقدرة حاسوبية ووقتاً أكبر بكثير</strong>.</p>
                            <p className="lang-en">💡 <strong>Model Answers:</strong><br />1. Because layers build features <strong>hierarchically step by step</strong> (shallow = lines/edges &rarr; middle = parts &rarr; deep = whole object).<br />2. <strong>Large amounts of data</strong> and <strong>high computational power (such as GPUs/TPUs)</strong>.<br />3. The <strong>input layer</strong> receives data, and the <strong>output layer</strong> gives the final answer.<br />4. No, weights start arbitrary before training and are adjusted during <strong>training</strong> based on prediction errors. Extra depth demands much more training data and computing power.</p>
                        </div>
                    </div>

                    
                    <div className="p-5 rounded-2xl theme-subpanel border border-emerald-500/30 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-gears"></i>
                                <span className="lang-ar">⚙️ فكر كمهندس: قراءة الأرقام المكتوبة بخط اليد (0-9) في السجلات المدرسية — ص 65</span>
                                <span className="lang-en">⚙️ Think as an Engineer (Handwritten Digits 0–9 from School Registers) — p. 74</span>
                            </span>
                            <button type="button" aria-expanded={!!expandedCards['eng-7-2']} onClick={() => toggleCard('eng-7-2')} className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1">
                                <span className="lang-ar">عرض الحل الهندسي الكامل</span><span className="lang-en">Show Engineering Solution</span>
                                <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['eng-7-2'] ? 'rotate-180' : ''}`}></i>
                            </button>
                        </div>
                        <p className="text-xs font-bold text-slate-200">
                            <span className="lang-ar">&quot;تريد مدرستك أداة تقرأ الأرقام المكتوبة بخط اليد (0–9) من السجلات الممسوحة ضوئياً باستخدام شبكة عصبية عميقة: 1. صمّم الشبكة (ماذا تستقبل طبقة الإدخال، وماذا تفعل الطبقات المخفية، وماذا تخرج طبقة الإخراج؟). 2. تتبّع السمات في الطبقات الضحلة والوسطى والعميقة، وكيف تتغير الأوزان؟ 3. قيّم التكلفة ومخاطر التدريب على خطوط يد مجموعة صغيرة ومرتبة فقط.&quot;</span>
                            <span className="lang-en">&quot;Your school wants a tool that reads handwritten digits (0–9) from scanned registers using a deep neural network: 1. Sketch Input, Hidden, and Output layers. 2. Trace features across shallow, middle, and deep layers, and how weights change. 3. Judge resource requirements and what goes wrong if trained only on a small, tidy set of handwritings.&quot;</span>
                        </p>
                        <div id="eng-7-2" className={`p-4 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs leading-relaxed text-slate-300 space-y-2 ${expandedCards['eng-7-2'] ? '' : 'hidden'}`}>
                            <p className="lang-ar">💡 <strong>الحل الهندسي المعتمد:</strong><br />• <strong>1. تصميم الشبكة:</strong> <strong>طبقة الإدخال:</strong> تستقبل قيم سطوع البكسلات لصورة الرقم الممسوحة ضوئياً. <strong>الطبقات المخفية:</strong> تعالج البكسلات وتستخرج السمات الهندسية للرقم تدريجياً. <strong>طبقة الإخراج:</strong> تحتوي على 10 عُقد تمثل الأرقام من <code className="text-emerald-300">0 إلى 9</code> وتُخرج الرقم ذا الاحتمال الأعلى.<br />• <strong>2. تتبّع السمات وتعديل الأوزان:</strong> <strong>الطبقات الضحلة:</strong> تكتشف الشرطات القصيرة والخطوط المائلة والحواف. <strong>الطبقات الوسطى:</strong> تدمج الخطوط في حلقات دائرية (كما في 0 و 6 و 8 و 9) وتقاطعات وزوايا حادة (كما في 4 و 7). <strong>الطبقات العميقة:</strong> تجمع الأجزاء في شكل الرقم الكامل. وتبدأ الأوزان عشوائية قبل التدريب، ثم تُعدَّل تدريجياً أثناء التدريب لتقليل الفرق بين الرقم المتوقع والرقم الحقيقي.<br />• <strong>3. تقييم التكلفة ومخاطر التحيز:</strong> يتطلب التعلم العميق آلاف الصور المصنفة ومعالجات رسومية سريعة (GPUs). وإذا دُرّب النموذج على خطوط يد قليلة ومرتبة فقط، فسيحدث <strong>فرط تخصيص (Overfitting)</strong> وسيفشل في قراءة الخطوط السريعة أو المائلة في السجلات الحقيقية!</p>
                            <p className="lang-en">💡 <strong>Model Engineering Decision:</strong><br />• <strong>1. Network Sketch:</strong> <strong>Input layer:</strong> Pixel intensity values of the scanned digit image. <strong>Hidden layers:</strong> Extract and combine visual strokes. <strong>Output layer:</strong> 10 nodes outputting the predicted digit class (<code className="text-emerald-300">0–9</code>).<br />• <strong>2. Feature Hierarchy & Weights:</strong> <strong>Shallow layers:</strong> Simple strokes and edges. <strong>Middle layers:</strong> Loops, curves, and intersections. <strong>Deep layers:</strong> Complete digit shapes. Weights start arbitrary and adjust during training to minimize prediction error.<br />• <strong>3. Cost & Risk:</strong> Requires large labeled datasets and GPU compute. Training only on a small, neat handwriting sample causes <strong>overfitting</strong> and poor generalization on messy real-world registers.</p>
                        </div>
                    </div>

                    
                    <div className="p-5 rounded-2xl theme-subpanel border border-rose-500/30 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-flask"></i>
                                <span className="lang-ar">🌍 طبق ما تعلمته (المساعد الصوتي والتعرف على الصوت) — كتاب الوزارة ص 65</span>
                                <span className="lang-en">🌍 In a New Context (Voice Assistant Speech Recognition) — Textbook p. 75</span>
                            </span>
                            <button type="button" aria-expanded={!!expandedCards['ctx-7-2']} onClick={() => toggleCard('ctx-7-2')} className="text-xs font-bold text-rose-400 hover:underline flex items-center gap-1">
                                <span className="lang-ar">عرض الإجابة النموذجية</span><span className="lang-en">Reveal Answer</span>
                                <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['ctx-7-2'] ? 'rotate-180' : ''}`}></i>
                            </button>
                        </div>
                        <p className="text-xs font-bold text-slate-200">
                            <span className="lang-ar">&quot;يستخدم مساعد صوتي على هاتف ذكي التعلم العميق لتحويل الأوامر المنطوقة إلى نص مكتوب: سمِّ مجال التطبيق الذي ينتمي إليه هذا المثال، واشرح بكلماتك كيف تسمح الطبقات وتدريب الأوزان بالتعامل مع أصوات لم يسمعها من قبل، وما المشكلة التي قد تحدث إذا كانت مجموعة بيانات التدريب تفتقر إلى لهجة أو لكنة معينة.&quot;</span>
                            <span className="lang-en">&quot;A voice assistant on a smartphone uses deep learning to turn spoken commands into text: Name the application field this belongs to, explain how layers and weight training let it handle voices it has never heard before, and state one problem if the training dataset lacks a certain dialect or accent.&quot;</span>
                        </p>
                        <div id="ctx-7-2" className={`p-4 rounded-xl bg-slate-900 border border-rose-500/40 text-xs leading-relaxed text-slate-300 ${expandedCards['ctx-7-2'] ? '' : 'hidden'}`}>
                            <span className="lang-ar">💡 <strong>الحل النموذجي:</strong><br />• <strong>مجال التطبيق:</strong> <strong>التعرف على الصوت / الكلام (Speech recognition)</strong>.<br />• <strong>كيف يتعامل مع أصوات جديدة؟</strong> تستخرج الطبقات المتتالية سمات الصوت بشكل هرمي (من الترددات والموجات الصوتية البسيطة في الطبقات الضحلة &larr; المقاطع الصوتية في الوسطى &larr; الكلمات الكاملة في العميقة)، وبعد ضبط الأوزان أثناء التدريب على آلاف المتحدثين، يكتسب النموذج قدرة <strong>التعميم (Generalization)</strong> على أصوات جديدة.<br />• <strong>مشكلة غياب لهجة معينة من التدريب:</strong> سينحاز النموذج ويفشل في التعرف الدقيق على كلام المتحدثين بتلك اللهجة غير الممثلة في بيانات التدريب!</span>
                            <span className="lang-en">💡 <strong>Model Answer:</strong><br />• <strong>Application Field:</strong> <strong>Speech recognition</strong>.<br />• <strong>Handling Unseen Voices:</strong> Stacked layers extract audio features hierarchically (frequencies &rarr; phonemes &rarr; words), and trained weights allow the network to <strong>generalize</strong> to new speakers.<br />• <strong>Missing Dialect Risk:</strong> The assistant will suffer high error rates and fail to accurately transcribe speakers with that underrepresented accent or dialect.</span>
                        </div>
                    </div>

                    
                    <div className="p-5 rounded-2xl theme-subpanel border border-amber-500/30 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-file-pen"></i>
                                <span className="lang-ar">📝 سؤال على نمط الامتحان [6 درجات] — كتاب الوزارة ص 64</span>
                                <span className="lang-en">📝 Exam-Style Question [6 Marks] — Textbook p. 73</span>
                            </span>
                            <button type="button" aria-expanded={!!expandedCards['exam-7-2']} onClick={() => toggleCard('exam-7-2')} className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1">
                                <span className="lang-ar">عرض نموذج الإجابة وتوزيع الدرجات</span><span className="lang-en">Model Answer & Mark Scheme</span>
                                <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${expandedCards['exam-7-2'] ? 'rotate-180' : ''}`}></i>
                            </button>
                        </div>
                        <p className="text-xs font-bold text-slate-200">
                            <span className="lang-ar">&quot;اشرح كيف يمكن لشبكة عصبية ذات خلايا عصبية بسيطة أن تتخذ أحكاماً معقدة، مع الإشارة إلى الأوزان والتدريب. [6 درجات]&quot;</span>
                            <span className="lang-en">&quot;Explain how a neural network with simple neurons can make complex judgments, referring to weights and training. [6 marks]&quot;</span>
                        </p>
                        <div id="exam-7-2" className={`p-4 rounded-xl bg-slate-900 border border-amber-500/40 text-xs leading-relaxed text-slate-300 space-y-2 ${expandedCards['exam-7-2'] ? '' : 'hidden'}`}>
                            <strong className="text-amber-400 block font-bold"><span className="lang-ar">نموذج الإجابة الكامل للحصول على الدرجة النهائية (6/6):</span><span className="lang-en">Full Mark Scheme (6/6):</span></strong>
                            <ol className="space-y-1.5 list-decimal rtl:pr-4 ltr:pl-4 text-sub">
                                <li><span className="lang-ar"><strong>دور الأوزان ودالة التنشيط في كل خلية عصبية [درجتان]:</strong> رغم بساطة الخلية الواحدة، فإنها تضرب مدخلاتها المتعددة في <strong>أوزان (Weights)</strong> تحدد مدى أهمية كل مدخل، وتجمعها وتمررها عبر دالة تنشيط غير خطية إلى الطبقة التالية.</span><span className="lang-en"><strong>Role of weights in each neuron [2 marks]:</strong> Each neuron multiplies multiple inputs by <strong>weights</strong> (reflecting each input&apos;s importance), sums them, and passes the result through an activation function to the next layer.</span></li>
                                <li><span className="lang-ar"><strong>دور التدريب في ضبط الأوزان [درجتان]:</strong> أثناء <strong>التدريب (Training)</strong> على كميات كبيرة من البيانات، يتم تعديل هذه الأوزان تدريجياً لتقليل الفرق (الخطأ) بين تنبؤ الشبكة والإجابة الصحيحة.</span><span className="lang-en"><strong>Role of training in adjusting weights [2 marks]:</strong> During <strong>training</strong>, weights are iteratively adjusted based on the discrepancy between predictions and correct answers.</span></li>
                                <li><span className="lang-ar"><strong>تكديس الطبقات والبناء الهرمي للسمات [درجتان]:</strong> من خلال توصيل عدد كبير من هذه الخلايا في طبقات متتالية (إدخال &larr; طبقات مخفية &larr; إخراج)، تبني الشبكة سمات معقدة خطوة بخطوة (من خطوط بسيطة إلى أجزاء ثم إلى الكائن الكامل)، مما يمكّنها من إصدار أحكام عالية الدقة على بيانات جديدة.</span><span className="lang-en"><strong>Layered hierarchy for complex judgments [2 marks]:</strong> By connecting many neurons across stacked hidden layers, simple features combine step by step into complex representations, enabling accurate judgments on unseen data.</span></li>
                            </ol>
                        </div>
                    </div>
                </div>

                
                <div className="space-y-3 pt-2">
                    <h4 className="font-bold text-sm flex items-center gap-2">
                        <i className="fa-solid fa-clone text-cyan-400"></i>
                        <span className="lang-ar">بطاقات المراجعة السريعة للدرس 7-2 (المس لقلب البطاقة):</span>
                        <span className="lang-en">Lesson 7-2 Flashcards (Tap to flip):</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                        <div className="flip-card" onClick={(event) => event.currentTarget.classList.toggle('flipped')}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front theme-panel border border-cyan-500/30">
                                    <span className="text-2xl mb-1 block">🕸️</span>
                                    <strong className="text-sm block"><span className="lang-ar">طبقات الشبكة العصبية</span><span className="lang-en">Network Layers</span></strong>
                                    <span className="text-[10px] text-cyan-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                </div>
                                <div className="flip-card-back bg-cyan-950/90 border border-cyan-500 text-slate-200">
                                    <p className="lang-ar">طبقة الإدخال تستقبل البيانات، والطبقة المخفية تعالج وتستخرج السمات، وطبقة الإخراج تعطي النتيجة النهائية.</p>
                                    <p className="lang-en">Input layer receives data; Hidden layer processes & extracts features; Output layer gives final answer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card" onClick={(event) => event.currentTarget.classList.toggle('flipped')}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front theme-panel border border-emerald-500/30">
                                    <span className="text-2xl mb-1 block">⚖️</span>
                                    <strong className="text-sm block"><span className="lang-ar">الأوزان (Weights)</span><span className="lang-en">Weights & Bias</span></strong>
                                    <span className="text-[10px] text-emerald-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                </div>
                                <div className="flip-card-back bg-emerald-950/90 border border-emerald-500 text-slate-200">
                                    <p className="lang-ar">قيم عددية تحدد مدى التركيز على كل مدخل؛ تبدأ عشوائية قبل التدريب وتُعدَّل تدريجياً أثناء التدريب لتقليل الخطأ.</p>
                                    <p className="lang-en">Numerical values indicating how much each input is emphasized; adjusted during training to reduce error.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card" onClick={(event) => event.currentTarget.classList.toggle('flipped')}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front theme-panel border border-purple-500/30">
                                    <span className="text-2xl mb-1 block">🧱</span>
                                    <strong className="text-sm block"><span className="lang-ar">التعلم العميق والهرمية</span><span className="lang-en">Deep Learning Hierarchy</span></strong>
                                    <span className="text-[10px] text-purple-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                </div>
                                <div className="flip-card-back bg-purple-950/90 border border-purple-500 text-slate-200">
                                    <p className="lang-ar">تكديس طبقات مخفية عديدة: الضحلة للخطوط والحواف، والوسطى للأجزاء، والعميقة لبنية الوجه أو الكائن الكامل.</p>
                                    <p className="lang-en">Many hidden layers: shallow = lines/edges, middle = parts (eyes/nose), deep = whole face/object structure.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card" onClick={(event) => event.currentTarget.classList.toggle('flipped')}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front theme-panel border border-amber-500/30">
                                    <span className="text-2xl mb-1 block">🚀</span>
                                    <strong className="text-sm block"><span className="lang-ar">عوامل طفرة التعلم العميق</span><span className="lang-en">Deep Learning Enablers</span></strong>
                                    <span className="text-[10px] text-amber-400 mt-2 font-bold"><span className="lang-ar">🔄 انقر للتعريف</span><span className="lang-en">Tap to flip</span></span>
                                </div>
                                <div className="flip-card-back bg-amber-950/90 border border-amber-500 text-slate-200">
                                    <p className="lang-ar">نجح عملياً بفضل توفر كميات ضخمة من البيانات وقدرة حاسوبية فائقة (GPUs/TPUs) في الصور والصوت واللغة.</p>
                                    <p className="lang-en">Became practical due to massive data + high GPU/TPU compute across image, speech, and NLP fields.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="theme-panel border p-6 rounded-3xl space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <h4 className="font-bold text-sm sm:text-base flex items-center gap-2">
                            <i className="fa-solid fa-circle-question text-cyan-400"></i>
                            <span className="lang-ar">اختبار تدريبي على الدرس 7-2 (10 أسئلة منهجية من كتاب الوزارة)</span>
                            <span className="lang-en">Lesson 7-2 Practice Quiz (10 Ministry Textbook Questions)</span>
                        </h4>
                        <span className="text-xs text-amber-400 font-bold">
                            <span className="lang-ar">إشراف: م/ عمر محمود</span>
                            <span className="lang-en">Eng. Omar Mahmoud</span>
                        </span>
                    </div>
                    <Unit7LessonQuiz lessonKey="lesson72Questions" />
                </div>

                
                <div className="flex items-center justify-between pt-2 text-xs">
                    <button onClick={() => navigate('lesson-7-1')} className="px-4 py-2 rounded-xl theme-panel border font-bold flex items-center gap-2">
                        <i className="fa-solid fa-arrow-right rtl:fa-arrow-right ltr:fa-arrow-left"></i>
                        <span className="lang-ar">الدرس السابق 7-1</span>
                        <span className="lang-en">Previous 7-1</span>
                    </button>
                    <button onClick={() => navigate('lesson-7-3')} className="px-5 py-2.5 rounded-xl font-bold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2 shadow-md">
                        <span className="lang-ar">الدرس التالي: 7-3 نماذج اللغة الكبيرة والذكاء التوليدي</span>
                        <span className="lang-en">Next: 7-3 Large Language Models (LLM) & Generative AI</span>
                        <i className="fa-solid fa-arrow-left rtl:fa-arrow-left ltr:fa-arrow-right"></i>
                    </button>
                </div>
            </div>
);
}
