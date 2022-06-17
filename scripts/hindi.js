



import {navBar} from "../components/navbar.js"
let n = document.getElementById("sbsbemaindiv")
n.innerHTML = navBar()


import {fooTer} from "../components/footer.js"
let f = document.getElementById("footermaindiv")
f.innerHTML = fooTer()



let News=[
  {
  "id": "1568",
  "title": "अग्निपथ योजना के खिलाफ उत्तर प्रदेश में विरोध जारी, ट्रेनों को युवा बना रहे निशाना ",
  "image": "https://img.etimg.com/thumb/msid-92270784,width-1200,height-900,resizemode-4,imgsize-696406/agneepath-scheme-protest-live-updates-bihar-up-rajasthan-mp-haryana-uttarakhand-delhi-kashmir-army-bharti.jpg",
  "description": "Agnipath Protest In Uttarpradesh: अग्निपथ सेना भर्ती योजना को लेकर उत्तर प्रदेश में दूसरे दिन भी युवाओं का प्रदर्शन जारी है। शुक्रवार सुबह ही युवाओं के साथ कुछ उपद्रवियों ने बलिया रेलवे स्टेशन पर धावा बोल दिया। जहां ट्रेनों में तोड़फोड़ की गई। ",
  "full_content": "",
  "published_date": "2022-06-17",
  "url": "https://navbharattimes.indiatimes.com/state/uttar-pradesh/lucknow/agnipath-scheme-protest-in-uttarpradesh-today-ballia-lucknow-gorakhpur-agra-up-hindi-news/articleshow/92270854.cms"
  },
  {
  "id": "1543",
  "title": "Bihar Agnipath Live Update : बिहार में आज फिर फूंकी गई ट्रेनें, अग्निपथ के नाम पर अभ्यर्थियों का उत्पात ",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiGpvGHmZu7GktukNVQf9Djm1ENVsZ29lNNA&usqp=CAU",
  "description": "बिहार में बवाल का आज तीसरा दिन है। उपद्रव का दायरा बढ़ता जा रहा है। भारतीय सेना में अग्निपथ नाम की योजना केंद्र की नरेंद्र मोदी सरकार ने मंगलवार को घोषणा की थी। सरकार ने इसे ऐतिहासिक बताते हुए कहा कि इससे सेना में क्रांतिकारी बदलाव आएगा। योजना का ऐलान होने के अगले ही दिन बिहार में सेना भर्ती की तैयारी करने वाले सैकड़ों युवा इसके खिलाफ सड़कों पर उतर आए। लगातार तीसरे दिन भी जारी है। ",
  "full_content": "",
  "published_date": "2022-06-17",
  "url": "https://navbharattimes.indiatimes.com/state/bihar/patna/agnipath-scheme-army-candidates-agitation-in-bihar-train-burnt/articleshow/92270211.cms"
  },
  {
  "id": "1542",
  "title": "कैसे एक छोटे से सुराग से पंजाब पुलिस ने मूसेवाला हत्याकांड की साजिश का किया पर्दाफाश? जानिए अब तक क्‍या-क्‍या हुआ ",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm0lJmP8fJSurBZxrXpKQ_t3IP1j1PGEzHSg&usqp=CAU",
  "description": "पुलिस ने हत्‍या के लिए इस्‍तेमाल की गई महिंद्रा बोलेरो, टोयोटा कोरोला और ऑल्टो कार समेत सभी वाहन बरामद कर लिए हैं। टोयोटा कोरोला में सवार हमलावरों ने बंदूक की नोक पर एक सफेद ऑल्टो कार को चुराया जो घटना के दौरान क्षतिग्रस्त हो गई और सफेद बोलेरो के बाद खारा बरनाला गांव की ओर भाग गए। सफेद ऑल्टो भी 30 मई, 2022 को जिला मोगा में धर्मकोट के पास लावारिस पाया गया था और सीसीटीवी फुटेज से आरोपी के रास्‍तों का पता लगाया गया। ",
  "full_content": "",
  "published_date": "2022-06-17",
  "url": "https://navbharattimes.indiatimes.com/state/punjab-and-haryana/chandigarh/sidhu-moose-wala-murder-case-how-punjab-police-exposed-the-conspiracy-with-a-small-clue/articleshow/92268848.cms"
  },
  {
  "id": "1515",
  "title": "अ‍ग्निपथ पर बिहार में सियासत की अग्निपरीक्षा, जेडीयू ने झाड़ा पल्ला...बीजेपी लाचार क्‍यों? ",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8aLG9kVglkZMZaOhYvvQR14LPe-YuEevJg&usqp=CAU",
  "description": "बिहार में छात्रों के उग्र प्रदर्शन और हिंसा पर उतारू सेना अभ्यर्थियों के विरोध को देखते हुए बीजेपी बेबस सी नजर आ रही है। दरअसल बीजेपी शासित राज्‍यों अग्निवीरों के‍ लिए केंद्र की नौकरी के बाद राज्‍य की सेवा में प्राथमिकता देने का ऑफर दिया है। मगर बीजेपी गंठबंधन वाले राज्‍य बिहार में अग्निवीरों को ऐसा कोई भी ऑफर नहीं दिया गया है। ",
  "full_content": "",
  "published_date": "2022-06-17",
  "url": "https://navbharattimes.indiatimes.com/state/bihar/patna/on-agneepath-the-litmus-test-of-politics-in-bihar-jdu-shrugged-off-why-bjp-helpless/articleshow/92262453.cms"
  },
  {
  "id": "1512",
  "title": "मोबाइल पर गेम खेलने को लेकर भाई से विवाद, गुस्से में बहन ने लगा ली फांसी ",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm0lJmP8fJSurBZxrXpKQ_t3IP1j1PGEzHSg&usqp=CAU",
  "description": "Mobile Game And Crime: मोबाइल गेम की लत बच्चों का भविष्य चैपट कर रही है। दिन रात मोबाइल गेम खेलने वाले बच्चे बीमार हो रहे हैं और उनके व्यवहार में चिड़चिड़ापन देखने को मिलता है। ऐसे ही बांदा के एक मामले में 10 साल की बच्ची की जान चली गई। बच्ची ने गेम खेलने को लेकर आत्महत्या कर ली। ",
  "full_content": "",
  "published_date": "2022-06-17",
  "url": "https://navbharattimes.indiatimes.com/state/uttar-pradesh/others/mobile-game-dispute-between-brother-sister-angry-10-year-old-girl-commit-suicide-in-banda-up-hindi-news/articleshow/92268971.cms"
  },
  {
  "id": "1334",
  "title": "गहलोत ने की अग्निपथ को तत्काल वापस लेने की मांग, युवाओं से हिंसा का रास्ता न अपनाने की अपील ",
  "image": "https://spiderimg.amarujala.com/cdn-cgi/image/width=414,height=233,fit=cover,f=auto/assets/images/2022/06/16/750x506/agnipath-scheme_1655367656.jpeg",
  "description": "Agnipath Scheme : राजस्थान में अग्निपथ योजना के विरोध में हुए विरोध प्रदर्शन को लेकर मुख्यमंत्री अशोक गहलोत ने ट्वीट कर युवा वर्ग से अपील की है। उन्होंने कहा है कि पूरे देश में जिस तरह युवा आक्रोशित होकर विरोध प्रदर्शन कर रहे हैं। उसे देखते हुए इस योजना को केन्द्र सरकार अविलंब वापस लेना चाहिए। मैं युवाओं से अपील करता हूं कि विरोध में हिंसा का रास्ता ना अपनाएं। ",
  "full_content": "",
  "published_date": "2022-06-17",
  "url": "https://navbharattimes.indiatimes.com/state/rajasthan/jaipur/agnipath-scheme-cm-ashok-gehlot-appeal-to-youth-not-to-indulge-in-any-kind-of-violence/articleshow/92262801.cms"
  },
  {
  "id": "1303",
  "title": "Agnipath Scheme : अग्निपथ के विरोध में नीतीश की पार्टी जेडीयू! ललन सिंह बोले- केंद्र सरकार फिर से करे विचार ",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVsTF9acNCQ421JxFf35N9OAGI5M5EwpmCew&usqp=CAU",
  "description": "Agnipath Scheme : जेडीयू के राष्ट्रीय अध्यक्ष ललन सिंह ने कहा है कि अग्निपथ योजना के निर्णय से बिहार सहित देशभर के नौजवानों, युवाओं एवं छात्रों के मन में असंतोष, निराशा व अंधकारमय भविष्य (बेरोजगारी) का डर स्पष्ट दिखने लगा है। केंद्र सरकार को अग्निवीर योजना पर अविलंब पुनर्विचार करना चाहिए। ",
  "full_content": "",
  "published_date": "2022-06-17",
  "url": "https://navbharattimes.indiatimes.com/state/bihar/patna/nitish-party-jdu-in-protest-against-agnipath-lalan-singh-said-central-government-should-consider-again/articleshow/92262697.cms"
  },
  {
  "id": "1273",
  "title": "IAS पूजा सिंघल का करीबी विशाल चौधरी लापता! निशिकांत दुबे ने जताई हत्या की आशंका ",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZJ4RBfPvMbRqsbA_uswOcYBQ4rF6xnOk0tw&usqp=CAU",
  "description": "बीजेपी सांसद ने कहा कि झारखंड के भ्रष्टाचार, जिसके यहां प्रवर्त्तन निदेशालय के रेड में मुख्यमंत्री के प्रधान सचिव सहित अन्य पदाधिकारियों व राजनेता का लीलाओं का कारनामा उजागर हुआ था, वैसे विशाल चौधरी लापता हैं, कहीं उनकी हत्या तो नहीं हो गयी। ",
  "full_content": "",
  "published_date": "2022-06-16",
  "url": "https://navbharattimes.indiatimes.com/state/jharkhand/ranchi/ias-pooja-singhal-close-aide-vishal-chaudhary-missing/articleshow/92262194.cms"
  },
  {
  "id": "1272",
  "title": "कश्मीर में 6 जगहों पर NIA का तलाशी अभियान, टेरर फंड‍िंग को लेकर ऐक्‍शन ",
  "image": "https://spiderimg.amarujala.com/cdn-cgi/image/width=414,height=233,fit=cover,f=auto/assets/images/2022/06/16/750x506/agnipath-scheme_1655367656.jpeg",
  "description": "Jammu Kashmir Latest News: राष्ट्रीय जांच एजेंसी (एनआईए) ने जमात-ए-इस्लामी (जेईआई) से जुड़े टेरर फंड‍िंंग मामले में गुरुवार को कश्मीर में छह स्थानों पर तलाशी ली। एनआईए के एक प्रवक्ता ने कहा कि जम्मू-कश्मीर के बारामूला, बडगाम और श्रीनगर जिलों में छह स्थानों पर जेईआई के पदाधिकारियों और सदस्यों के परिसरों में तलाशी अभियान चलाया गया। ",
  "full_content": "",
  "published_date": "2022-06-16",
  "url": "https://navbharattimes.indiatimes.com/state/jammu-and-kashmir/srinagar/nia-search-operation-at-six-places-in-kashmir-action-on-terror-funding/articleshow/92262323.cms"
  },
  {
  "id": "1244",
  "title": "महंत यति नरसिंहानंद नजरबंद, नूपुर शर्मा के समर्थन में की थी जामा मस्जिद जाने की घोषणा ",
  "image": "https://static.langimg.com/thumb/msid-92261606,imgsize-47350,width-700,height-525,resizemode-75/navbharat-times.jpg",
  "description": "नूपुर शर्मा के बयान के बाद इस्लाम धर्म के लोगों का गुस्सा आसमान पर पहुंच गया। यह मामला देश में ही नहीं, बल्कि विदेशों में भी गूंज उठा। खासतौर से उत्तर प्रदेश के चलते कई जिलों में शांति व्यवस्था भंग हुई। उधर, डासना स्थित देवी मंदिर के महंत एवं श्री पंचदशनाम जूना अखाड़े के महामंडलेश्वर यति नरसिंहानंद गिरी महाराज भी नूपुर शर्मा के समर्थन में उतर आए और उन्होंने बाकायदा घोषणा कर डाली कि वह खुद 17 जून यानी जुमे की नमाज के दौरान दिल्ली की जामा मस्जिद पहुंचेंगे। ",
  "full_content": "",
  "published_date": "2022-06-16",
  "url": "https://navbharattimes.indiatimes.com/state/uttar-pradesh/ghaziabad/mahant-yeti-narasimhanand-giri-maharaj-house-arrest-supported-nupur-sharma/articleshow/92261555.cms"
  },
  {
  "id": "1242",
  "title": "Bihar Politics : जेडीयू में कोल्ड वार, क्या RCP की खामोशी पार्टी में लाएगा भूचाल? ",
  "image": "https://spiderimg.amarujala.com/cdn-cgi/image/width=414,height=233,fit=cover,f=auto/assets/images/2022/06/16/750x506/agnipath-scheme_1655367656.jpeg",
  "description": "Cold war in JDU : तूफान से पहले शांति और बाद सन्नाटा होता है। कुछ इसी तरह का परिदृश्य आज कल जेडीयू में दिख रहा है। लेकिन जो दिख रहा है, वह हकीकत नहीं है। ये कहा जा सकता है आरसीपी गुट की खामोशी बता रही है, देर से ही सही जेडीयू में भूचाल आने वाला है। ",
  "full_content": "",
  "published_date": "2022-06-16",
  "url": "https://navbharattimes.indiatimes.com/state/bihar/patna/cold-war-in-jdu-party-on-the-verge-of-collapse/articleshow/92261537.cms"
  },
  {
  "id": "1241",
  "title": "शादी से पहले दाढ़ी कटवाने का फरमान, अब दूल्हा क्लीन शेव नहीं तो शादी भी नहीं! ",
  "image": "",
  "description": "Grooms Beard Not Allowed : राजस्थान के पाली में कुमावत समाज की एक बैठक में 19 गांवों के लोगों कई फैसले लिए हैं। सबसे चर्चित फैसला शादी में दूल्हे का क्लीन शेव होना जरूरी है। इस फैसले से जहां युवा वर्ग में बहस छिड़ी है वहीं समाज के बुजुर्ग लोगों ने दाढ़ी में शादी के चलन की खिलाफत की है। ",
  "full_content": "",
  "published_date": "2022-06-16",
  "url": "https://navbharattimes.indiatimes.com/state/rajasthan/jodhpur/grooms-beard-not-allowed-in-kumawat-samaj-of-pali-clean-shave-mandatory/articleshow/92259211.cms"
  },
  {
  "id": "1214",
  "title": "अग्निपथ स्‍कीम के विरोध-प्रदर्शन से यूपी में रेल सेवाओं पर पड़ा असर, यहां जानिए पूरी डिटेल ",
  "image": "",
  "description": "पूर्वोत्तर रेलवे वाराणसी मंडल में 16 जून को कई ट्रेनें प्रभावित रहीं। एक ट्रेन को रद्द भी करना पड़ा, जबकि दर्जनों ट्रेनों को कंट्रोल कर संचालित किया गया। अग्निपथ स्‍कीम को लेकर युवाओं के विरोध प्रदर्शन के चलते रेल सेवाओं पर असर पड़ा है। बिहार में कई ट्रेनों में आग लगा दिया गया। ",
  "full_content": "",
  "published_date": "2022-06-16",
  "url": "https://navbharattimes.indiatimes.com/state/uttar-pradesh/varanasi/agnipath-scheme-protest-various-trains-affected-in-varanasi-division/articleshow/92260818.cms"
  },
  {
  "id": "1213",
  "title": "सेना भर्ती की नई अग्निपथ योजना पर हैरान पंजाब के पूर्व CM कैप्टन अमरिंदर सिंह, कहा- क्यों पड़ी ऐसी जरूरत ",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5kW-kbfyJsF4XsLEcJh8b4bl8C-gaa6I9g&usqp=CAU",
  "description": "Punjab Latest News: पंजाब के पूर्व मुख्यमंत्री और बीजेपी के सहयोगी कैप्टन अमरिंदर सिंह (Capt Amarinder Singh) ने केंद्र सरकार को अग्निपथ योजना पर फ‍िर से अमल करने की सलाह दी है। कैप्‍टन ने कहा क‍ि सशस्त्र बलों में भर्ती के लिए केंद्र की नई अग्निपथ योजना पर फ‍िर से व‍िचार क‍िया जाना चाह‍िए। साथ ही आश्चर्य जताया कि सरकार को इस तरह के मौलिक बदलाव करने की जरूरत क्यों पड़ी। ",
  "full_content": "",
  "published_date": "2022-06-16",
  "url": "https://navbharattimes.indiatimes.com/state/punjab-and-haryana/chandigarh/former-punjab-cm-captain-amarinder-singh-reaction-to-new-agneepath-scheme-for-army-recruitment/articleshow/92260188.cms"
  },
  {
  "id": "1187",
  "title": "सिलाई मशीन से फोड़ा था सिर, 100 नंबर नहीं डायल कर पाए अखलाक.... बेटी ने बताई लिचिंग की कहानी ",
  "image": "",
  "description": "Akhlaq Mob Lynching Case: मॉब लिंचिंग में मारे गए मोहम्मद अखलाक पर हमलावरों ने पहले सिलाई मशीन से हमला किया था। वह पुलिस को फोन करने की कोशिश कर रहे थे लेकिन हाथापाई के कारण 100 नंबर नहीं डायल कर पाए। गुरुवार को कोर्ट में मामले की गवाही देते हुए अखलाक की बेटी शाइस्ता ने ये बातें कहीं। ",
  "full_content": "",
  "published_date": "2022-06-16",
  "url": "https://navbharattimes.indiatimes.com/state/uttar-pradesh/noida/akhlaq-hit-with-sewing-machine-tried-to-dial-100-but-could-not-type-said-daughter-shaista/articleshow/92259078.cms"
  },
  {
  "id": "1185",
  "title": "चूहे के कब्‍जे में था 5 लाख का सोना, बीच में बड़ापाव, मुंबई पुल‍िस ने कैसे क‍िया बरामद, अजब है दास्तां ",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5kW-kbfyJsF4XsLEcJh8b4bl8C-gaa6I9g&usqp=CAU",
  "description": "Mumbai Latest News: मुंबई पुलिस (Mumbai Police) ने दिंडोशी इलाके से कचरे के ढेर से 10 तोला सोना बरामद किया है। सोने की इस थैली को सूखा पाव समझकर एक भिखारी ने कचरे में फेंक दिया था। उसके बाद सोने की थैली को लेकर एक चूहा इधर-उधर घूम रहा था। ऐसा सीसीटीवी फुटेज में कैद हो गया। सीसीटीवी की मदद से मुंबई पुलिस ने कचरे के ढेर से सोने से भरे गहने वाली थैली को बरामद क‍िया। ",
  "full_content": "",
  "published_date": "2022-06-16",
  "url": "https://navbharattimes.indiatimes.com/metro/mumbai/other-news/mumbai-police-recovered-10-tola-gold-from-clutches-of-mouse-know-whole-matter/articleshow/92259020.cms"
  },
  {
  "id": "1162",
  "title": "प्रधानमंत्री मोदी, गृहमंत्री शाह के खिलाफ याच‍िका खार‍िज, बॉम्‍बे हाईकोर्ट ने लगाया 500 रुपये का जुर्माना ",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5kW-kbfyJsF4XsLEcJh8b4bl8C-gaa6I9g&usqp=CAU",
  "description": "Bombay High Court Latest News: बॉम्‍बे हाईकोर्ट की नागपुर बेंच (Nagpur Bench of Bombay High Court) ने प्रधानमंत्री नरेंद्र मोदी (Narendra Modi) और केंद्रीय गृह मंत्री अमित शाह (Amit Shah) जन प्रतिनिधित्व अधिनियम,1951 के तहत अयोग्य करार देने की मांग करने वाली एक पुनर्विचार याचिका खारिज कर दी। यह याचिका जस्‍ट‍िस सुनिल शुक्रे और जस्‍ट‍िस अनिल किलोर की बेंच ने खारिज की। ",
  "full_content": "",
  "published_date": "2022-06-16",
  "url": "https://navbharattimes.indiatimes.com/state/maharashtra/nagpur/petition-against-pm-narendra-modi-home-minister-amit-shah-dismissed-bombay-high-court-fined-rs-500/articleshow/92258121.cms"
  },
  {
  "id": "1161",
  "title": "National Herald Case: कांग्रेस ने जयपुर में राजभवन का सांकेतिक घेराव किया, डोटासरा बोले-यह झूठा मामला बनाया गया है ",
  "image": "",
  "description": "केंद्र सरकार की कथित दमनकारी नीतियों तथा प्रवर्तन निदेशालय (ईडी) द्वारा कांग्रेस नेता राहुल गांधी को तलब किए जाने के खिलाफ कांग्रेस नेताओं व कार्यकर्ताओं ने बृहस्पतिवार को यहां राजधानी में राजभवन का सांकेतिक घेराव कर प्रदर्शन किया। कांग्रेस नेताओं और कार्यकर्ताओं ने राजभवन के पास सिविल लाइंस फाटक पर धरना दिया। ",
  "full_content": "",
  "published_date": "2022-06-16",
  "url": "https://navbharattimes.indiatimes.com/state/rajasthan/jaipur/congress-workers-do-a-symbolic-gherao-of-the-raj-bhavan-in-jaipur/articleshow/92251541.cms"
  },
  {
  "id": "1160",
  "title": "विधायकों पर हमले, पार्टी दफ्तर को फूंका... बिहार में अग्निपथ की आंच में झुलस रही BJP, नीतीश मौन ",
  "image": "",
  "description": "Agnipath Scheme : बिहार में दो दिनों से सेना की नई भर्ती स्कीम अग्निपथ का विरोध जारी है। बक्सर, आरा, मुजफ्फरपुर, जहानाबाद, नवादा, छपरा, सिवान और बेगूसराय समेत कई जिलों में भारी बवाल हुआ है। गुरुवार को प्रदर्शनकारियों ने बिहार के 17 जिलों में प्रदर्शन किया। इस दौरान जमकर बवाल काटा। ",
  "full_content": "",
  "published_date": "2022-06-16",
  "url": "https://navbharattimes.indiatimes.com/state/bihar/patna/agnipath-scheme-bjp-on-target-of-protesters-with-government-properties-what-is-the-meaning-of-nitish-silence/articleshow/92258801.cms"
  },
  {
  "id": "1139",
  "title": "अग्निपथ की आग से झुलसा आधा बिहार, 17 जिलों में तोड़फोड और आगजनी, 5 ट्रेनें फूंकी, नवादा में BJP कार्यालय में लगाई आग ",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq1-Z4ZUPT0Ll7jFrsoesditc9-omnm1B79A&usqp=CAU",
  "description": "Agneepath Scheme : बिहार के छात्र सेना में चार साल की भर्ती वाली अग्निपथ योजना से नाराज हैं। छात्रों का कहना है कि चार साल की नौकरी के बाद 25 प्रतिशत छात्रों को तो नौकरी मिल जाएगी, लेकिन 75 फीसदी लोग बेरोजगार हो जाएंगे। ",
  "full_content": "",
  "published_date": "2022-06-16",
  "url": "https://navbharattimes.indiatimes.com/state/bihar/patna/agneepath-bihar-student-protest-demolition-and-arson-in-17-districts-5-trains-torched-bjp-office-set-on-fire-in-nawada/articleshow/92256976.cms"
  },
  {
  "id": "1138",
  "title": "अग्निपथ मुद्दे पर प्रदर्शन केंद्र का मसला, बिहार सरकार कुछ भी नहीं करेगी? नीतीश के मंत्री ने दिया ये जवाब ",
  "image": "",
  "description": "भारतीय सेना में अग्निपथ नाम की योजना का केंद्र की नरेंद्र मोदी सरकार ने मंगलवार को घोषणा की थी। सरकार ने इसे ऐतिहासिक बताते हुए कहा कि इससे सेना में क्रांतिकारी बदलाव आएगा। योजना का ऐलान होने के अगले ही दिन बिहार में सेना भर्ती की तैयारी करने वाले सैकड़ों युवा इसके खिलाफ सड़कों पर उतर आए। लगातार दूसरे दिन भी बवाल हुआ ",
  "full_content": "",
  "published_date": "2022-06-16",
  "url": "https://navbharattimes.indiatimes.com/state/bihar/patna/agnipath-scheme-agitation-in-bihar-nitish-kumar-minister-raised-question-on-central-government/articleshow/92257276.cms"
  },
  {
  "id": "1137",
  "title": "अग्निपथ योजना के विरोध में पलवल में हिंसा, DC आवास पर पथराव, फायर‍िंग-लाठीचार्ज ",
  "image": "",
  "description": "Palwal Latest News: द‍िल्‍ली से सटे हर‍ियाणा के पलवल में अग्निपथ योजना के विरोध जोरदार प्रदर्शन (Agnipath protest in Palwal ) क‍िया गया। पलवल में कुछ प्रदर्शनकार‍ियों ने डीसी आवास पर पथराव क‍िया। इस पर वहां तैनात पुलिसकर्मियों ने पथराव कर रहे प्रदर्शनकारियों को चेतावनी देने के लिए हवाई फायरिंग की। प्रदर्शनकारी पास में ही विरोध कर रहे थे। इस दौरान कुछ पुलिसकर्मी घायल भी हुए हैं और पुलिस वाहनों में तोड़फोड़ की गई है। ",
  "full_content": "",
  "published_date": "2022-06-16",
  "url": "https://navbharattimes.indiatimes.com/state/punjab-and-haryana/faridabad/violence-in-palwal-against-agneepath-scheme-stone-pelting-at-dc-residence-firing-lathi-charge/articleshow/92257258.cms"
  },
  {
  "id": "1136",
  "title": "ड्रोन ड्रिल, फ्लैग मार्च, चप्पे-चप्पे पर नजर... जुमे की नमाज को लेकर सहारनपुर से गोरखपुर तक अलर्ट ",
  "image": "",
  "description": "उत्तर प्रदेश में बीते दिनों जुमे की नमाज के बाद भड़की हिंसा को देखते हुए पुलिस इस बार सतर्क है। कल जुमे की नमाज है और पुलिस ने प्रदेश के हर हिस्से में सुरक्षा व्यवस्था चाक-चौबंद कर दी है। ",
  "full_content": "",
  "published_date": "2022-06-16",
  "url": "https://navbharattimes.indiatimes.com/metro/lucknow/administration/uttar-pradesh-police-alert-for-juma-namaz-to-prevent-any-violence/articleshow/92257988.cms"
  },
  {
  "id": "1114",
  "title": "Bihar Politics : अजय आलोक जी आपने सही लिखा है... गिरिराज सिंह ने क्यों ठोकी पीठ? जानिए ",
  "image": "",
  "description": "जेडीयू के फायर ब्रांड नेता अजय आलोक की पार्टी से छुट्टी हो गई। प्रवक्‍ता पद से हटाए जाने के बाद से अजय आलोक वैचारिक रूप से बीजपी के ज्‍यादा नजदीक नजर आ रहे थे। अगर उनके ट्विटर पोस्‍ट पर निगाह डाली जाए तो उनके ज्यादातर विचार जेडीयू से मेल नहीं खाते थे। अब गिरिराज सिंह ने उनकी पीठ ठोकी है। ",
  "full_content": "",
  "published_date": "2022-06-16",
  "url": "https://navbharattimes.indiatimes.com/state/bihar/patna/giriraj-singh-support-ajay-alok-said-you-have-written-right-population-control-law/articleshow/92255413.cms"
  },
  {
  "id": "1113",
  "title": "केंद्रीय मंत्री वीके सिंह कहा-अग्निपथ योजना का एजेंडा पता नहीं, नूपुर शर्मा पर बोले मामले को तूल न दें ",
  "image": "",
  "description": "Agnipath Scheme: उत्तर प्रदेश के बुलंदशहर में गरीब कल्याण सम्मेलन में केंद्रीय मंत्री जनरल वीके सिंह ने सभा को संबोधित किया। यहां उनके साथ सांसद लक्ष्मीकांत वाजपेयी भी मौजूद थे। वीके सिंह ने कहा कि अग्निपथ योजना से जुड़े एजेंडा के बारे में उन्हें पता नहीं है। वहीं लोगों को नूपुर शर्मा से जुड़े बयान को तूल न देने की बात कही। ",
  "full_content": "",
  "published_date": "2022-06-16",
  "url": "https://navbharattimes.indiatimes.com/state/uttar-pradesh/bulandshahr/agnipath-scheme-union-minister-general-vk-singh-says-dont-know-about-in-bulandshahr/articleshow/92254107.cms"
  },
  {
  "id": "1112",
  "title": "एक रसगुल्ले को लेकर टूट गई शादी, जानिए UP की इस बारात में आखिर क्‍या हुआ? ",
  "image": "",
  "description": "बाराती ने हलवाई पर रसगुल्‍ला कम देने का आरोप लगाया तो विवाद शुरू हो गया। देखते ही देखते बात मारपीट तक पहुंच गई। बारातियों में भगदड़ मच गई। कई बाराती रात में ही वापस अपने गांव लौट गए। बाद में लड़की पक्ष ने शादी से इनकार कर दिया। पुलिस ने बंधक बनाकर रखे गए दो बारातियों को भी मुक्‍त करवाया। ",
  "full_content": "",
  "published_date": "2022-06-16",
  "url": "https://navbharattimes.indiatimes.com/state/uttar-pradesh/meerut/marriage-break-due-to-rasgulla-in-sambhal/articleshow/92256707.cms"
  },
  {
  "id": "1111",
  "title": "इंडो-नेपाल बॉर्डर पर फर्जी वीजा के साथ अमेरिकी अरेस्‍ट, 2016 से भारत में रह रहा था ",
  "image": "",
  "description": "Maharajganj News: भारत नेपाल के सोनौली सीमा पर एक अमेरिकी नागरिक को कूटरचित बीजा व पासपोर्ट के साथ पुलिस ने गिरफ्तार किया है। अमेरिकी नागरिक 2016 में अमेरिका से भारत आया था। ",
  "full_content": "",
  "published_date": "2022-06-16",
  "url": "https://navbharattimes.indiatimes.com/state/uttar-pradesh/gorakhpur/a-us-citizen-arrested-with-fake-visa-at-indo-nepal-border/articleshow/92255909.cms"
  },
  {
  "id": "1088",
  "title": "राजस्थान में अग्निपथ स्कीम को लेकर बढ़ी रार, जयपुर , अजमेर भीलवाड़ा और सीकर में काटा बवाल, तस्वीरों से समझिये हाल ",
  "image": "",
  "description": "जयपुर:केंद्र सरकार की अग्निपथ योजना के विरोध का असर अब राजस्थान में भी दिखने लगा है। प्रदेश की राजधानी जयपुर के साथ अजमेर, भीलवाड़ा, सीकर, बूंदी और भरतपुर में भी इसका विरोध देखने को मिला है। गुरुवार को युवाओं के साथ यहां आरएलपी की ओर से विभिन्न जिलों के कलेक्ट्रेट के बाहर विरोध प्रदर्शन देखने को मिला। यह भी जानकारी मिली है कि कई जगह सरकार की अग्निपथ स्कीम का विरोध कर रहे युवाओं की पुलिस से कई जगह झड़प हुई है। तस्वीरों के जरिए देखिये हाल। ",
  "full_content": "",
  "published_date": "2022-06-16",
  "url": "https://navbharattimes.indiatimes.com/state/rajasthan/jaipur/agnipath-scheme-protest-in-rajasthan-army-candidates-anger-see-pics/articleshow/92251385.cms"
  },
  {
  "id": "1085",
  "title": "केशव मौर्य को चंदा लेकर फॉर्च्यूनर गिफ्ट करूंगी... जानिए UP की मंत्री सोनम किन्नर ने क्‍यों कही ये बात ",
  "image": "",
  "description": "बीजेपी सरकार में मंत्री सोनम किन्नर ने ऐलान किया है कि अगर महान दल के मुखिया केशव देव बीजेपी में शामिल हो जाएं तो वह उन्हें एक फॉर्च्यूनर गिफ्ट करेंगी। इसके लिए वह किन्नरों से 10-10 हजार का चंदा लेंगी। बीते विधानसभा चुनाव में समाजवादी पार्टी और महान दल ने एक साथ बीजेपी के खिलाफ चुनाव लड़ा था। इस दौरान सपा ने दिवाली पर केशव देव को एक फॉर्च्यूनर गाड़ी गिफ्ट की थी। बाद में एमएलसी चुनावों को लेकर दोनों दलों के रिश्तों में खटास आई ",
  "full_content": "",
  "published_date": "2022-06-16",
  "url": "https://navbharattimes.indiatimes.com/metro/lucknow/politics/bjp-minister-sonam-kinnar-to-gift-fortuner-to-keshav-dev-maurya-with-collecting-donation/articleshow/92253444.cms"
  },
  {
  "id": "1084",
  "title": "जिस घर से अफजल निकलेगा, उसमें घुसकर मारेंगे... जुमे की नमाज के बाद हिंसा पर VHP का प्रोटेस्ट ",
  "image": "",
  "description": "नुपूर शर्मा के खिलाफ विरोध प्रदर्शन के दौरान हिंसा के विरोध में विश्व हिंदू परिषद और बजरंग दल के कार्यकर्ताओं ने प्रदर्शन किया। उन्होंने इस दौरान जिस घर में अफजल निकलेगा, वहां घुसकर मारेंगे के नारे लगाए। ",
  "full_content": "",
  "published_date": "2022-06-16",
  "url": "https://navbharattimes.indiatimes.com/state/uttar-pradesh/meerut/prayagraj-violence-bajrang-dal-and-vhp-protest-in-west-up-against-violence-in-prayagraj-and-kanpur/articleshow/92254344.cms"
  },
  {
  "id": "1083",
  "title": "हम गोली खाने को करें 4 साल की नौकरी, ये AC में बैठे करेंगे 40 साल राज... गुरुग्राम में नेताओं पर भड़के युवा, हाइवे जाम, स्थिति तनावपूर्ण ",
  "image": "",
  "description": "Gurgaon Latest News: केंद्र की ओर से इस सप्ताह की शुरुआत में संविदा के आधार पर सैनिकों की भर्ती के लिए शुरू की गई अग्निपथ योजना के विरोध अग्निपथ योजना (Agnipath Protest in Gurgaon)में गुरुवार को बड़ी संख्या में गुरुग्राम और रेवाड़ी के बिलासपुर और सिधरावाली इलाकों के युवा सड़कों पर उतर आए। ",
  "full_content": "",
  "published_date": "2022-06-16",
  "url": "https://navbharattimes.indiatimes.com/state/punjab-and-haryana/gurgaon/agnipath-protest-in-gurgaon-causes-massive-traffic-jam-youth-said-this-thing/articleshow/92254353.cms"
  },
 
 ];
 localStorage.setItem('News',JSON.stringify(News))
//console.log(data);

let data = JSON.parse(localStorage.getItem('News'))
console.log(data)


 JSON.parse(localStorage.getItem('coffee')) || []
  
data.forEach(function(el){
  let container = document.getElementById("search_div");
  //container.innerHTML = null;

  let heading = document.createElement("div")
    heading.setAttribute("class","search_div_grid")
    

    let img = document.createElement("img");
    img.src = el.image;
    img.setAttribute("id", "image");
  
    let h3 = document.createElement("h3");
    h3.innerText = el.title;
    h3.style.textAlign="center"
    h3.setAttribute("id","h3")
    h3.addEventListener('click',function(){
      addtocart(el)
    })


    let p = document.createElement("p")
    p.innerText=el.description
    p.style.textAlign="center"
    p.setAttribute("class","P")

    heading.append(img,h3,p,)
     container.append( heading);
}) 
function addtocart(el){
  console.log(el)
  data.push(el)
  localStorage.setItem('coffee',JSON.stringify(data));
  window.location.href="fullnews.html"    
}

// //append()