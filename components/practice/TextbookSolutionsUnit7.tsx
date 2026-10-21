'use client';

import React from 'react';
import {useApp} from '@/components/providers/AppProviders';
export function TextbookSolutionsUnit7(){const {playSfx,setActiveLesson}=useApp();const navigate=(view:Parameters<typeof setActiveLesson>[0])=>{playSfx('click');setActiveLesson(view);window.scrollTo({top:0,behavior:'smooth'})};return (
<div id="view-unit-7-solutions" className="lesson-view space-y-8 animate-fadeIn">

                
                <div className="theme-panel border p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-lg">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="space-y-2 max-w-3xl">
                            <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold flex items-center gap-1.5">
                                <i className="fa-solid fa-book-bookmark"></i>
                                <span className="lang-ar">حلول كتاب الوزارة الرسمية (الوحدة السابعة كاملة)</span>
                                <span className="lang-en">Official Ministry Textbook Solutions (Unit 7)</span>
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-black">
                                <span className="lang-ar">حلول تدريبات وتمارين نهاية دروس الوحدة السابعة</span>
                                <span className="lang-en">Unit 7 Comprehensive Textbook Review Solutions</span>
                            </h2>
                            <p className="text-xs sm:text-sm text-sub leading-relaxed">
                                <span className="lang-ar">كافة الأسئلة والتدريبات والتمارين والأمثلة المحلولة الواردة في كتاب المدرسة للدروس الثلاثة (ص 50 إلى ص 74 عربي / pp. 57 - 85 إنجليزي) محلولة حلاً نموذجياً مفصلاً مع التفسير العلمي، ليضمن الطالب الدرجة النهائية.</span>
                                <span className="lang-en">All review questions, worked examples, Try sections, fill-in-the-blank passages, and end-of-lesson exercises from the official textbook (pp. 57 - 85) solved with complete scientific rationale.</span>
                            </p>
                        </div>

                        
                        <div className="p-4 rounded-2xl theme-subpanel border border-amber-500/30 text-xs space-y-1 shrink-0 w-full md:w-64 shadow-md">
                            <div className="font-bold text-amber-400 flex items-center gap-1.5 text-xs">
                                <i className="fa-solid fa-chalkboard-user"></i>
                                <span className="lang-ar">إعداد وتدقيق الإجابات:</span>
                                <span className="lang-en">Verified Solutions:</span>
                            </div>
                            <div className="font-bold text-sm">
                                <span className="lang-ar">المهندس عمر محمود</span>
                                <span className="lang-en">Eng. Omar Mahmoud</span>
                            </div>
                            <div className="text-[11px] text-amber-400 font-mono">01012306019</div>
                        </div>
                    </div>
                </div>

                
                <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <h3 className="text-lg font-black flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs">أ</span>
                            <span className="lang-ar">حلول فقرات إكمال الفراغات (تمارين 2) وأسئلة المصطلحات (تدرّب 1) للدروس الثلاثة</span>
                            <span className="lang-en">Fill-in-the-Blank Passages (Exercise 2) & Term Questions (Try 1)</span>
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs leading-relaxed">
                        
                        <div className="p-4 rounded-2xl theme-subpanel border border-emerald-500/30 space-y-2">
                            <strong className="text-emerald-400 block font-bold"><span className="lang-ar">1. الدرس 7-1 (كتاب الوزارة ص 56 و 58 / pp. 63 & 66):</span><span className="lang-en">1. Lesson 7-1 (Textbook pp. 63 & 66):</span></strong>
                            <p className="text-sub">
                                <span className="lang-ar">• <strong>فقرة إكمال الفراغات (ص 58):</strong><br />(1/a) <strong>التعلّم الآلي (Machine learning)</strong>، (2/b) <strong>التعلّم الخاضع للإشراف (Supervised learning)</strong>، (3/c) <strong>التصنيف (Classification)</strong>، (4/d) <strong>الانحدار (Regression)</strong>، (5/e) <strong>التعلّم غير الخاضع للإشراف (Unsupervised learning)</strong>، (6/f) <strong>التجميع (Clustering)</strong>، (7/g) <strong>التعلّم المعزز (Reinforcement learning)</strong>، (8/h) <strong>مشكلة الصندوق الأسود (Black-box problem)</strong>.</span>
                                <span className="lang-en">• <strong>Exercise 2 Blanks (p. 66):</strong> (a) machine learning, (b) supervised learning, (c) classification, (d) regression, (e) unsupervised learning, (f) clustering, (g) reinforcement learning, (h) black-box problem.</span>
                            </p>
                            <p className="text-sub border-t border-slate-800 pt-1.5">
                                <span className="lang-ar">• <strong>أسئلة تدرّب 1 (ص 56):</strong><br />1. التعلّم الخاضع للإشراف (Supervised learning)<br />2. التجميع (Clustering)<br />3. السمة (Feature)<br />4. التعلّم المعزز (Reinforcement learning)</span>
                                <span className="lang-en">• <strong>Try 1 (p. 63):</strong> 1. Supervised learning, 2. Clustering, 3. Feature, 4. Reinforcement learning.</span>
                            </p>
                        </div>

                        
                        <div className="p-4 rounded-2xl theme-subpanel border border-cyan-500/30 space-y-2">
                            <strong className="text-cyan-400 block font-bold"><span className="lang-ar">2. الدرس 7-2 (كتاب الوزارة ص 63 و 66 / pp. 72 & 75):</span><span className="lang-en">2. Lesson 7-2 (Textbook pp. 72 & 75):</span></strong>
                            <p className="text-sub">
                                <span className="lang-ar">• <strong>فقرة إكمال الفراغات (ص 66):</strong><br />(1/a) <strong>العُقد / الخلايا العصبية الاصطناعية (Nodes / artificial neurons)</strong>، (2/b) <strong>طبقات (Layers)</strong>، (3/c) <strong>طبقة الإدخال (Input layer)</strong>، (4/d) <strong>الطبقة المخفية (Hidden layer)</strong>، (5/e) <strong>طبقة الإخراج (Output layer)</strong>، (6/f) <strong>الأوزان (Weights)</strong>، (7/g) <strong>التعلم العميق (Deep learning)</strong>، (8/h) <strong>بشكل هرمي / خطوة بخطوة (Hierarchically / step by step)</strong>.</span>
                                <span className="lang-en">• <strong>Exercise 2 Blanks (p. 75):</strong> (a) nodes (or artificial neurons), (b) layers, (c) input layer, (d) hidden layer, (e) output layer, (f) weights, (g) deep learning, (h) step by step (or hierarchically).</span>
                            </p>
                            <p className="text-sub border-t border-slate-800 pt-1.5">
                                <span className="lang-ar">• <strong>أسئلة تدرّب 1 (ص 63):</strong><br />1. الشبكة العصبية (Neural network)<br />2. طبقة الإدخال (Input layer) وطبقة الإخراج (Output layer)<br />3. الوزن (Weight)<br />4. التعلم العميق (Deep learning)</span>
                                <span className="lang-en">• <strong>Try 1 (p. 72):</strong> 1. Neural network, 2. Input layer & Output layer, 3. Weight, 4. Deep learning.</span>
                            </p>
                        </div>

                        
                        <div className="p-4 rounded-2xl theme-subpanel border border-purple-500/30 space-y-2">
                            <strong className="text-purple-400 block font-bold"><span className="lang-ar">3. الدرس 7-3 (كتاب الوزارة ص 71 و 74 / pp. 81 & 84):</span><span className="lang-en">3. Lesson 7-3 (Textbook pp. 81 & 84):</span></strong>
                            <p className="text-sub">
                                <span className="lang-ar">• <strong>فقرة إكمال الفراغات (ص 74):</strong><br />(1/a) <strong>نموذج اللغة (Language model)</strong>، (2/b) <strong>الكلمة التالية / الرمز النصي التالي (Next word / token)</strong>، (3/c) <strong>نموذج اللغة الكبير (Large language model / LLM)</strong>، (4/d) <strong>معلمات النموذج / الأوزان (Parameters)</strong>، (5/e) <strong>التعلم المعزز من التغذية الراجعة البشرية (RLHF)</strong>، (6/f) <strong>تعدد الوسائط (Multimodality)</strong>.</span>
                                <span className="lang-en">• <strong>Exercise 2 Blanks (pp. 84 - 85):</strong> (a) language model, (b) next word (or token), (c) large language model (LLM), (d) parameters, (e) RLHF, (f) multimodality.</span>
                            </p>
                            <p className="text-sub border-t border-slate-800 pt-1.5">
                                <span className="lang-ar">• <strong>أسئلة تدرّب 1 (ص 71):</strong><br />1. نموذج اللغة (Language model)<br />2. نموذج اللغة الكبير (Large language model — LLM)<br />3. كمية بيانات التدريب (Amount of training data) وعدد المعلمات (Number of parameters)<br />4. الهلوسة (Hallucination)</span>
                                <span className="lang-en">• <strong>Try 1 (p. 81):</strong> 1. Language model, 2. Large language model (LLM), 3. Amount of training data & Number of parameters, 4. Hallucination.</span>
                            </p>
                        </div>
                    </div>
                </div>

                
                <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <h3 className="text-lg font-black flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">ب</span>
                            <span className="lang-ar">حلول جميع أسئلة الاختيار من متعدد والمطابقة (تدرّب 2 + تمارين 3) مع التعليل</span>
                            <span className="lang-en">All Textbook Multiple Choice & Matching Solutions (Try 2 & Exercise 3)</span>
                        </h3>
                    </div>

                    <div className="space-y-3 text-xs">
                        <div className="p-4 rounded-2xl theme-subpanel border space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-slate-200"><span className="lang-ar">1. حلول تدرّب 2 وتمارين 3 للدرس 7-1 (أساسيات التعلم الآلي — ص 56 - 58 / pp. 63 - 67)</span><span className="lang-en">1. Lesson 7-1 Try 2 & Exercise 3 Solutions (pp. 63 - 67)</span></span>
                                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold text-[10px]">الدرس 7-1</span>
                            </div>
                            <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-300 space-y-1">
                                <p className="lang-ar">✅ <strong>تدرّب 2 (ص 56 - 57):</strong> (1) الفرق بين البرمجة التقليدية والتعلم الآلي: <strong>(ب / B)</strong> في البرمجة التقليدية يكتب البشر القواعد، بينما في التعلم الآلي يكتشف الحاسوب القواعد من البيانات. • (2) مطابقة النوع: (1/a) تحديد البريد المزعج من رسائل سابقة موسومة = <strong>(أ / A) التعلم الخاضع للإشراف</strong>؛ (2/b) تجميع عملاء متجر إلكتروني بدون وسوم = <strong>(ب / B) التعلم غير الخاضع للإشراف</strong>؛ (3/c) تعلم روبوت المشي بالتجربة والخطأ والمكافآت = <strong>(جـ / C) التعلم المعزز</strong>. • (3) موقف لا يناسبه التعلم الآلي: <strong>(جـ / C)</strong> حساب مجموع عددين صحيحين (قاعدة بسيطة ثابتة). • (4) العبارة غير المناسبة عن التنبيهات: <strong>(جـ / C)</strong> &quot;يمكن للتعلم الآلي دائماً تقديم أحكام عادلة بغض النظر عن جودة بيانات التدريب&quot;.</p>
                                <p className="lang-ar">✅ <strong>تمارين 3 (ص 58):</strong> (1) الفرق بين التصنيف والتجميع: <strong>(ب / B)</strong> يعتمد التصنيف على إجابات صحيحة مُعطاة، بينما يجمع التجميع البيانات المتشابهة بدون إجابات صحيحة. • (2) وصف التعلم المعزز: <strong>(ب / B)</strong> طريقة تعلّم الإجراءات الأفضل بالتجربة والخطأ اعتماداً على المكافآت. • (3) العبارة غير المناسبة عن المزايا والقيود: <strong>(جـ / C)</strong> &quot;يمكن للتعلم الآلي أن يحل تماماً محل الحكم البشري في جميع المجالات&quot;.</p>
                                <p className="lang-en">✅ <strong>Try 2 (pp. 63 - 64):</strong> (1) <strong>B</strong>. (2) a: <strong>A (Supervised)</strong>, b: <strong>B (Unsupervised)</strong>, c: <strong>C (Reinforcement)</strong>. (3) <strong>C</strong> (Sum of two integers). (4) <strong>C</strong>.<br />✅ <strong>Exercise 3 (pp. 66 - 67):</strong> (1) <strong>B</strong>. (2) <strong>B</strong>. (3) <strong>C</strong>.</p>
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl theme-subpanel border space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-slate-200"><span className="lang-ar">2. حلول تدرّب 2 وتمارين 3 للدرس 7-2 (الشبكات العصبية والتعلم العميق — ص 64 - 66 / pp. 72 - 76)</span><span className="lang-en">2. Lesson 7-2 Try 2 & Exercise 3 Solutions (pp. 72 - 76)</span></span>
                                <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 font-bold text-[10px]">الدرس 7-2</span>
                            </div>
                            <div className="p-3 rounded-xl bg-slate-900 border border-cyan-500/40 text-cyan-300 space-y-1">
                                <p className="lang-ar">✅ <strong>تدرّب 2 (ص 64):</strong> (1) ترتيب معالجة طبقات الشبكة العصبية: <strong>(ب / B)</strong> طبقة الإدخال &larr; الطبقة المخفية &larr; طبقة الإخراج. • (2) آلية تدريب الشبكة العصبية: <strong>(ب / B)</strong> عن طريق تعديل الأوزان تدريجياً لتقليل الفرق بين التنبؤ والإجابة الصحيحة، تصبح الشبكة قادرة على التنبؤ الصحيح. • (3) مطابقة سمات التعرف على الوجوه: (1/a) الطبقات الضحلة = <strong>(أ / A) سمات بسيطة كالخطوط وتغيرات اللون</strong>؛ (2/b) الطبقات الوسطى = <strong>(ب / B) أشكال الأجزاء كالعيون والأنف</strong>؛ (3/c) الطبقات العميقة = <strong>(جـ / C) بنية الوجه بأكمله</strong>. • (4) خلفية تطور التعلم العميق: <strong>(ب / B)</strong> توفر كميات كبيرة من البيانات وتحسن القدرة الحاسوبية مثل GPUs.</p>
                                <p className="lang-ar">✅ <strong>تمارين 3 (ص 66):</strong> (1) عمل العقدة (الخلية العصبية): <strong>(ب / B)</strong> تضرب عدة مدخلات في أوزان، وتجمعها، وتمرر النتيجة إلى الطبقة التالية. • (2) خصائص التعلم العميق: <strong>(ب / B)</strong> من خلال تكديس العديد من الطبقات المخفية، يتعلم السمات تلقائياً من البسيطة إلى المعقدة خطوة بخطوة. • (3) ما ليس مجال تطبيق رئيسياً للتعلم العميق: <strong>(جـ / C)</strong> العمليات الحسابية البسيطة على الأعداد الصحيحة.</p>
                                <p className="lang-en">✅ <strong>Try 2 (pp. 72 - 73):</strong> (1) <strong>B</strong> (Input &rarr; Hidden &rarr; Output). (2) <strong>B</strong>. (3) a: <strong>A</strong>, b: <strong>B</strong>, c: <strong>C</strong>. (4) <strong>B</strong>.<br />✅ <strong>Exercise 3 (pp. 75 - 76):</strong> (1) <strong>B</strong>. (2) <strong>B</strong>. (3) <strong>C</strong>.</p>
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl theme-subpanel border space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-slate-200"><span className="lang-ar">3. حلول تدرّب 2 وتمارين 3 للدرس 7-3 (نماذج اللغة الكبيرة والذكاء التوليدي — ص 72 - 74 / pp. 82 - 85)</span><span className="lang-en">3. Lesson 7-3 Try 2 & Exercise 3 Solutions (pp. 82 - 85)</span></span>
                                <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 font-bold text-[10px]">الدرس 7-3</span>
                            </div>
                            <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/40 text-purple-200 space-y-1">
                                <p className="lang-ar">✅ <strong>تدرّب 2 (ص 72):</strong> (1) المبدأ الأساسي لنموذج اللغة: <strong>(ب / B)</strong> يولد الجمل عن طريق تكرار التنبؤ بالكلمة التالية التي يُرجَّح ظهورها. • (2) وصف الهلوسة: <strong>(ب / B)</strong> ظاهرة يولد فيها الذكاء الاصطناعي معلومات لا تتطابق مع الحقائق بطريقة تبدو مقنعة لأن النموذج يختار الكلمات المعقولة إحصائياً. • (3) وصف RLHF: <strong>(ب / B)</strong> طريقة تستخدم تقييمات البشر كمكافآت لضبط النموذج بالتعلم المعزز ليعطي إجابات مرغوبة. • (4) وصف تعدد الوسائط: <strong>(ب / B)</strong> خاصية القدرة على التعامل مع أنواع متعددة من البيانات مثل النص والصور والصوت والفيديو.</p>
                                <p className="lang-ar">✅ <strong>تمارين 3 (ص 74):</strong> (1) لماذا تحدث الهلوسة: <strong>(ب / B)</strong> لأن نموذج اللغة يختار &quot;الكلمة المعقولة إحصائياً&quot; وليس &quot;الكلمة الصحيحة واقعياً&quot;. • (2) الترتيب الصحيح لمراحل RLHF: <strong>(ب / B)</strong> التدريب الأولي &larr; التقييم البشري &larr; الضبط عبر التعلم المعزز. • (3) العبارة غير المناسبة عن استخدام الذكاء التوليدي: <strong>(جـ / C)</strong> &quot;إذا كانت الجملة المتولدة طبيعية وسلسة، فيمكن الوثوق بمحتواها بوصفه صحيحاً&quot;.</p>
                                <p className="lang-en">✅ <strong>Try 2 (p. 82):</strong> (1) <strong>B</strong>. (2) <strong>B</strong>. (3) <strong>B</strong>. (4) <strong>B</strong>.<br />✅ <strong>Exercise 3 (p. 85):</strong> (1) <strong>B</strong>. (2) <strong>B</strong> (Initial training &rarr; Human evaluation &rarr; Tuning by RL). (3) <strong>C</strong>.</p>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="theme-panel border p-6 sm:p-8 rounded-3xl space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <h3 className="text-lg font-black flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs">جـ</span>
                            <span className="lang-ar">أسئلة الصواب والخطأ (الأمثلة المحلولة بالكتاب) مع تصويب الخطأ</span>
                            <span className="lang-en">Worked Examples True/False Questions with Scientific Corrections</span>
                        </h3>
                    </div>

                    <div className="space-y-3 text-xs">
                        <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
                            <span className="font-bold text-slate-200"><span className="lang-ar">1. الدرس 7-1 (ص 55 - 56 / p. 62): (ب) &quot;التجميع هو طريقة نمطية للتعلم الخاضع للإشراف.&quot; و(د) &quot;إذا تم استخدام التعلم الآلي، يمكن دائماً رؤية سبب الحكم بوضوح.&quot;</span><span className="lang-en">1. Lesson 7-1 (p. 62): (B) &quot;Clustering is a representative method of supervised learning&quot; & (D) &quot;With ML, the reason for a judgment can always be clearly seen.&quot;</span></span>
                            <div className="p-3 rounded-xl bg-slate-900 border border-rose-500/40 text-rose-300 font-bold">
                                <span className="lang-ar">❌ (عبارتان خاطئتان) — التصويب: التجميع طريقة نمطية للتعلم غير الخاضع للإشراف (Unsupervised learning)؛ وفي التعلم الآلي غالباً ما يصعب رؤية سبب الحكم بسبب مشكلة الصندوق الأسود (Black-box problem). (العبارتان أ و جـ صحيحتان ○).</span>
                                <span className="lang-en">❌ Both False — Clustering is unsupervised learning; and the black-box problem makes it hard to see the reason for judgments (Statements A and C are True ○).</span>
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
                            <span className="font-bold text-slate-200"><span className="lang-ar">2. الدرس 7-2 (ص 62 - 63 / p. 71): (ب) &quot;قبل التدريب، تكون أوزان الشبكة العصبية مضبوطة بالفعل على القيم المثلى.&quot; و(د) &quot;في التعلم العميق، يجب على البشر تصميم جميع السمات يدوياً واحدة تلو الأخرى.&quot;</span><span className="lang-en">2. Lesson 7-2 (p. 71): (B) &quot;Before training, weights are already set to optimal values&quot; & (D) &quot;In deep learning, humans must design all features by hand.&quot;</span></span>
                            <div className="p-3 rounded-xl bg-slate-900 border border-rose-500/40 text-rose-300 font-bold">
                                <span className="lang-ar">❌ (عبارتان خاطئتان) — التصويب: قبل التدريب تكون الأوزان عشوائية وتُعدَّل أثناء التدريب؛ وفي التعلم العميق تتعلم الشبكة السمات تلقائياً من البيانات دون تصميم بشري يدوي. (العبارتان أ و جـ صحيحتان ○).</span>
                                <span className="lang-en">❌ Both False — Before training, weights are arbitrary; and deep learning automatically learns features from data (Statements A and C are True ○).</span>
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl theme-subpanel border space-y-1.5">
                            <span className="font-bold text-slate-200"><span className="lang-ar">3. الدرس 7-3 (ص 70 - 71 / p. 80): (ب) &quot;لأن نماذج اللغة الكبيرة تتفوق في التحقق من الحقائق، فإنها لا تولد أبداً معلومات كاذبة.&quot; و(د) &quot;تعدد الوسائط يشير إلى نماذج تتعامل مع النص فقط.&quot;</span><span className="lang-en">3. Lesson 7-3 (p. 80): (B) &quot;Because LLMs excel at fact-checking, they never generate false information&quot; & (D) &quot;Multimodality refers to models that handle only text.&quot;</span></span>
                            <div className="p-3 rounded-xl bg-slate-900 border border-rose-500/40 text-rose-300 font-bold">
                                <span className="lang-ar">❌ (عبارتان خاطئتان) — التصويب: نماذج اللغة الكبيرة قد تولد معلومات كاذبة (الهلوسة Hallucination) لأنها تختار الكلمات المعقولة إحصائياً؛ وتعدد الوسائط يعني التعامل مع أنواع متعددة من البيانات (نص، صور، صوت، فيديو). (العبارتان أ و جـ صحيحتان ○).</span>
                                <span className="lang-en">❌ Both False — LLMs can hallucinate false information; and multimodality handles multiple data types like text, images, audio, and video (Statements A and C are True ○).</span>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="flex items-center justify-between pt-2 text-xs">
                    <button onClick={() => navigate('lesson-7-3')} className="px-4 py-2 rounded-xl theme-panel border font-bold flex items-center gap-2">
                        <i className="fa-solid fa-arrow-right rtl:fa-arrow-right ltr:fa-arrow-left"></i>
                        <span className="lang-ar">الدرس السابق 7-3</span>
                        <span className="lang-en">Previous 7-3</span>
                    </button>
                    <button onClick={() => navigate('unit-7-exam')} className="px-6 py-3 rounded-2xl font-bold bg-gradient-to-r from-emerald-600 to-amber-500 text-white flex items-center gap-2 shadow-xl shadow-emerald-500/25">
                        <span className="lang-ar">🏆 خوض اختبار الوحدة السابعة الشامل (25 سؤالاً)</span>
                        <span className="lang-en">🏆 Take Unit 7 Comprehensive Exam (25 Qs)</span>
                        <i className="fa-solid fa-trophy"></i>
                    </button>
                </div>
            </div>
);}
