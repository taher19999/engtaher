var i18n = {
error1: 'عذرًا ، حدث خطأ في المتصفح أثناء بدء تشغيل الأداة التخطيطية. نوصي باستخدام أحدث إصدارات Firefox و Chrome.',
Ground_connection: 'اتصال الأرض',
Node_label: 'Node label',
Voltage_source: 'Voltage source مصدر فولطية',
Current_source: 'Current source مصدر تيار',
Resistor: ' مقاومة',
Capacitor: ' متسعة',
Inductor: ' محاثة',
Op_Amp: 'Op Amp',
Diode: ' دايود',
NFet: 'NFet',
PFet: 'PFet',
NPN: 'NPN ترانزستر نوع',
PNP: 'PNP ترانزستر نوع',
Voltage_probe: 'المسيار الجهد',
Current_probe: 'المسبار التيار',
drag_onto_diagram: ': اسحب أو اضغط للإدراج',
Help:  "مساعدة: عرض صفحة المساعدة" ,
Grid: "الشبكة: تبديل عرض الشبكة" ,
Link_tip: "الرابط: مشاركة رابط إلى الدائرة" ,
Cut: "قص المكونات المحددة إلى الحافظة" ,
Copy: "نسخ المكونات المحددة إلى الحافظة" ,
Paste: "لصق الحافظة على التخطيطي" ,
Delete: "حذف المكونات المحددة" ,
Rotate: "تدوير المكون المحدد" ,
Save_netlist: "حفظ netlist" ,
Open_netlist: "فتح netlist" ,
Select_netlist: "حدد قائمة الشبكة" ,
Perform_DC_Analysis: "إجراء تحليل DC" ,

DC_Analysis: 'تحليل DC',
Perform_AC_Analysis: "إجراء تحليل AC الصغيرة إشارة" ,
Perform_Transient_Analysis: "إجراء تحليل عابر" ,
Transient_Analysis: "تحليل عابر" ,
Edit_Properties: "تحرير الخصائص" ,
Link: 'رابط',
Sharable_Link: 'شارك ',


Points_per_decade: "عدد النقاط / العقد",
Starting_frequency: "تردد البدء (هرتز)" ,
Ending_frequency: "تردد النهاية (هرتز)" ,
source_for_ac: "اسم V أو أنا مصدر التيار المتردد" ,
AC_Analysis_add_a_voltage_probe: 'تحليل التيار المتردد: إضافة مسبار الجهد إلى الرسم التخطيطي!' ,
AC_Analysis: 'AC تحليل',
Zero_ac_response: "استجابة صفر تيار متردد ، - اللانهاية على مقياس ديسيبل.",
Near_zero_ac_response: "استجابة قريبة من الصفر للتيار المتردد ، إزالة" ,
probe: "التحقيق" ,
// Alerts and warnings from the circuit simulator
Alert: 'تحذير',
ckt_alert1: 'تحذير! تحتوي الدائرة على حلقة مصدر جهد أو مصدر أو مسبار تيار مقصر بسلك ، يرجى إزالة المصدر أو السلك الذي يسبب القصر. ',
ckt_alert2: 'تحذير! قد ينتج عن المحاكي نتائج لا معنى لها أو لا ينتج عن دوائر غير قانونية. ',
ckt_warning1: 'تحذير! يشترك عنصرا دارة بنفس الاسم ',
ckt_alert3: 'الرجاء إجراء اتصال واحد على الأقل بالأرض',
ckt_alert4: 'فشلت طريقة نيوتن ، هل تمتلك مصادرك الحالية مسارًا موصلًا إلى الأرض؟' ,
ckt_alert5: 'فشلت طريقة نيوتن ، قد تكون دائرتك أو قد تكون جهاز محاكاة لدينا.',
ckt_alert6:' فشل DC ، محاولة تحليل عابر من الصفر' ,
ckt_alert7: 'يشير تحليل AC إلى مصدر غير معروف' ,
ckt_alert8: 'فشل تحليل AC ، مصدر غير معروف.',

//ckt_error1: 'Rows of M mismatched to b or cols mismatch to x.',
//ckt_error2: 'Row or columns of A too large for B',
//ckt_error3: 'Row or columns of A too large for C',
//ckt_error4: 'scalea and scaleb must be scalars or Arrays',
//ckt_error5: 'Rows or cols > rows or cols of dest',
//ckt_error6: 'Rows or cols > cols or rows of dest',	    	    

log_Frequency: 'log(Frequency in Hz)',
degrees: 'الدرجة',
AC_Phase: 'AC Phase',
AC_Magnitude: 'AC Magnitude',


Minimum_number_of_timepoints: 'الحد الأدنى لعدد النقاط الزمنية',
Stop_time_seconds: 'وقت التوقف (بالثواني)',
tstop_lbl: 'وقت التوقف',
Transient_Analysis_add_a_probe: 'تحليل عابر: إضافة مسبار إلى الرسم التخطيطي!',

//Use creative phrasing to get this sentence to come out right: 
// alert('The ' + color + ' probe is connected to node ' + '"' + label + '"' + ', which is not an actual circuit node');
The: 'The ',
probe_is_connected_to_node: ' المسبار متصل بالعقدة ',
which_is_not_an_actual_circuit_node: '، وهي ليست عقدة دائرة فعلية.',

Voltage: 'الجهد',
Current: 'التيار',
Time: 'الوقت',
Node_has_two_conflicting_labels: 'تحتوي العقدة على تصنيفين متعارضين: ',

DC_value: 'DC قيمة',

impulse: 'دفعة',
Height: 'الرتفاع',
Width: 'العرض (sec)',

step: 'خطوة',
Initial_value: "القيمة الأولية" ,
Plateau_value: "قيمة الهضبة" ,
Delay_until_step: "تأخير حتى الخطوة (ثانية)" ,
Rise_time: "وقت الصعود (ثانية)" ,

square: 'مربع',
Frequency: 'Frequency (Hz) نردد',
Duty_cycle: 'دورة العمل (%)',

triangle: 'مثلث',
ramp: 'ramp',
Slope: 'ميل (volts/sec)',

pwl: 'pwl',
pwl_repeating: 'pwl (repeating)',
Comma_separated_list: 'قائمة مفصولة بفواصل للأوقات والقيم المتناوبة',

pulse: "نبض" ,
Delay_until_pulse: "تأخير حتى النبض (ثانية)" ,
Time_for_first_transition: "وقت الانتقال الأول (بالثانية)" ,
Time_for_second_transition: "وقت الانتقال الثاني (ثانية)" ,
Pulse_width: "عرض النبض (ثانية)" ,
الفترة: "الفترة (ثانية)" ,

sin: "ساين" ,
Offset_value: "قيمة الإزاحة" ,
السعة: "السعة" ,
Delay_until_sin_starts: "تأخير حتى تبدأ الخطيئة (ثانية)" ,
Phase_offset_degrees: "إزاحة المرحلة (بالدرجات)" ,

Circuit_Sandbox_Help: "مساعدة CIRCUIT SANDBOX" ,
name: 'اسم',
value: 'القيمة ',
label: 'ملصق',
r: 'R',
c: 'C',
l: 'L',
color: 'لون',
offset: 'تاثير',
area: 'مساحة',
type: 'نوع',
normal: 'طبيعي',
ideal: 'مثالي',
is: 'Is',
Vt: 'Vt',
WL: 'W/L',
A: 'A',
Plot_color: 'رسم اللون',
Plot_offset: 'رسم التاثير',
dc: 'dc',

Gain: 'A',
Rin: 'Rin',
Rout: 'Rout',

red: 'احمر',
green: 'اخضر',
blue: 'ازرق',
cyan: 'ازرق سماوي',
magenta: 'أرجواني',
yellow: 'اصفر',
orange: 'برتقالي',
black: 'اسوج',
xaxis: 'x axis',

Ics: 'Ics',
Ies: 'Ies',
alphaF: '\u03B1F',
alphaR: '\u03B1R',
last_line: 'السطر الأخير ، بدون فاصلة'
};

var strSHelp = "مساعدة CIRCUIT SANDBOX \ n \ n";
var strAddC = "إضافة مكون: اضغط على جزء في حاوية الأجزاء ، ثم اضغط على التخطيطي. \ n \ n";
var strAddW = "إضافة سلك: المس نقطة اتصال (دائرة مفتوحة). اسحب. حرر. \ n \ n";
var strSel = "حدد: اسحب مستطيلًا لتحديد المكونات. \ n (سطح المكتب :) انقر مع الضغط على مفتاح Shift لتضمين مكون آخر. \ n \ n";
var strMove = "نقل: المس واسحب إلى موقع جديد. \ n \ n";
var strDel = "حذف: اضغط للتحديد ، ثم اضغط على أيقونة X أو اضغط على BACKSPACE. \ n \ n";
var strRot = "تدوير / انعكاس: انقر للتحديد ، ثم انقر فوق رمز التدوير أو اكتب الحرف للتدوير 90. كرر لمزيد من التدويرات والانعكاسات (إجمالي 8). \ n \ n";
var strProp = "الخصائص: انقر نقرًا مزدوجًا على أحد المكونات لتغيير خصائصه. \ n \ n"
var strNum = "يمكن إدخال الأرقام باستخدام التدوين الهندسي ، \ n \
T = 10^12, G = 10^9, M = 10^6, k = 10^3\n\
m = 10^-3, u = 10^-6, n = 10^-9, p = 10^-12, f = 10^-15";
