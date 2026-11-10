/**
 * RentalPrice AI
 * Client-Side JavaScript with Multi-Language Support (English, Hindi, Marathi)
 */

const translations = {
    en: {
        nav_home: "Home",
        nav_how_it_works: "How It Works",
        nav_insights: "Insights",
        nav_start_prediction: "Start Prediction",

        hero_pill: "MAHARASHTRA URBAN & RURAL VALUATION ENGINE",
        hero_title: "Know the Value of Your Next Rental.",
        hero_subtitle: "AI-powered rental price estimation for Urban, Suburban, and Rural Maharashtra.",
        hero_description: "Estimate the monthly rental value of a residential property using machine learning models trained on property characteristics, location, urban/rural area classification, size, furnishing, amenities and other factors.",
        hero_btn_estimate: "Estimate Rental Price",
        hero_btn_explore: "Explore How It Works",

        demo_badge: "DEMO PREVIEW",
        demo_status: "ACTIVE PIPELINE",
        demo_kicker: "RENTAL ESTIMATE",
        demo_type: "2 BHK Apartment",
        demo_location: "Pune (Urban Core), Maharashtra",
        demo_est_label: "Estimated Monthly Rent",
        demo_period: "/ mo",
        demo_area_label: "Area",
        demo_area_val: "950 sq ft",
        demo_type_label: "Area Type",
        demo_type_val: "Urban",
        demo_parking_label: "Parking",
        demo_parking_val: "Available",
        demo_footer: "AI Estimate • Property Analysis",

        stat_models_num: "3+",
        stat_models_label: "Regression Models",
        stat_factors_num: "13+",
        stat_factors_label: "Property Factors",
        stat_records_num: "3000+",
        stat_records_label: "Training Records",
        stat_speed_num: "Real-Time",
        stat_speed_label: "Prediction",

        why_tag: "VALUATION INTELLIGENCE",
        why_title: "Smarter Rental Decisions Across Regions",
        why_lead: "Rental prices vary significantly between urban city cores, suburban townships, and rural areas. Our machine learning model accounts for geographical classification alongside physical property traits.",
        feat_1_title: "Property Intelligence",
        feat_1_desc: "Analyze size, rooms, furnishing and property characteristics in comprehensive relation to each other.",
        feat_2_title: "Urban vs. Rural Pricing",
        feat_2_desc: "Accounts for location density, distinguishing city cores, suburban developments, and rural village settings.",
        feat_3_title: "Data-Driven Prediction",
        feat_3_desc: "Compare multiple regression models and automatically select the strongest model via R² validation.",

        how_tag: "PROCESS WORKFLOW",
        how_title: "How Rental Price Prediction Works",
        step_1_title: "Property Details",
        step_1_desc: "Enter location, urban/rural classification, and property characteristics.",
        step_2_title: "Data Processing",
        step_2_desc: "The application validates and transforms the property information.",
        step_3_title: "Regression Model",
        step_3_desc: "The trained ML pipeline analyzes the property features.",
        step_4_title: "Rental Estimate",
        step_4_desc: "Receive an estimated monthly rent and indicative range.",

        model_tag: "ENGINEERING PIPELINE",
        model_title: "Built With Regression Models",
        model_lead: "Multiple regression algorithms are trained and compared using Scikit-Learn pipelines to identify the highest performing estimator.",
        m1_tag: "BASELINE",
        m1_title: "Linear Regression",
        m1_cat: "Baseline",
        m1_desc: "Establishes foundational linear relationships between property dimensions and rental rates.",
        m2_tag: "ENSEMBLE",
        m2_title: "Random Forest",
        m2_cat: "Ensemble",
        m2_desc: "Aggregates decision trees to capture non-linear interactions across features and floor plans.",
        m3_tag: "ENSEMBLE",
        m3_title: "Extra Trees",
        m3_cat: "Ensemble",
        m3_desc: "Randomized tree ensemble minimizing variance across regional location and area type categories.",
        best_model_label: "Best Model Selection:",
        best_model_desc: "Automatically selected using validation performance during execution of train_model.py.",

        factors_tag: "FEATURE ATTRIBUTES",
        factors_title: "What Influences the Estimate?",
        factors_lead: "Key property attributes and environmental characteristics influencing monthly rental values.",
        f1_title: "Location",
        f1_desc: "Major urban centres and districts across Maharashtra and top Indian metros.",
        f2_title: "Area Type",
        f2_desc: "Urban city core, suburban townships, or rural village classifications.",
        f3_title: "Property Type",
        f3_desc: "Villas, standalone houses, studio apartments, and 1 RK units.",
        f4_title: "Bedrooms",
        f4_desc: "Accommodates larger families or co-living tenants, directly scaling space utility.",
        f5_title: "Bathrooms",
        f5_desc: "En-suite and dedicated bathroom ratios influence tenant convenience.",
        f6_title: "Area",
        f6_desc: "Larger usable area generally increases rental value.",
        f7_title: "Furnishing",
        f7_desc: "Fully furnished units offer immediate move-in premiums over unfurnished homes.",
        f8_title: "Property Age",
        f8_desc: "Brand-new residential constructions generally command premium rental rates.",
        f9_title: "Floor",
        f9_desc: "Middle and high-rise floors often carry views and natural ventilation appeal.",
        f10_title: "Amenities",
        f10_desc: "Access to lifts, backup power, 24/7 security, gym, and swimming pools.",

        insights_tag: "ANALYTICAL OUTPUT",
        insights_title: "Turn Data Into Property Insights",
        ins_1_title: "Rental Price Estimation",
        ins_1_desc: "Calculates the expected monthly rental price using a trained multi-variable regression pipeline.",
        ins_2_title: "Indicative Estimate Range",
        ins_2_desc: "Provides a contextual boundary window representing local negotiation and seasonal market variance.",
        ins_3_title: "Property Breakdown",
        ins_3_desc: "Visualizes key property attributes relative to typical rental market benchmarks.",

        cta_title: "Ready to Estimate Your Rental Price?",
        cta_desc: "Enter your property details and get an AI-powered rental estimate in seconds.",
        cta_btn: "Start Prediction",

        pred_tag: "LIVE REGRESSION PREDICTION",
        pred_title: "Rental Price Prediction",
        pred_lead: "Enter the property details below to estimate its monthly rental value.",
        block_1_title: "Property & Location Details",
        block_2_title: "Property Condition & Floors",
        block_3_title: "Features & Amenities",
        amenities_subtext: "Select all amenities available at the property:",

        lbl_location: "Location (City / District)",
        lbl_locality_type: "Locality Area Type",
        lbl_property_type: "Property Type",
        lbl_bedrooms: "Bedrooms (BHK)",
        lbl_bathrooms: "Bathrooms",
        lbl_area: "Area (sq ft)",
        lbl_furnishing: "Furnishing Status",
        lbl_property_age: "Property Age (years)",
        lbl_floor_number: "Floor Number",
        lbl_total_floors: "Total Floors",
        lbl_parking: "Parking Space",

        opt_select_city: "Select City/District",
        opt_urban: "Urban (City Core / Commercial Hub)",
        opt_suburban: "Suburban (Outskirts / Town)",
        opt_rural: "Rural (Village / Gram Panchayat)",
        opt_apartment: "Apartment",
        opt_house: "Independent House",
        opt_villa: "Villa",
        opt_studio: "Studio",
        opt_1rk: "1 RK",

        opt_unfurnished: "Unfurnished",
        opt_semi_furnished: "Semi-Furnished",
        opt_fully_furnished: "Fully Furnished",

        opt_parking_yes: "Yes (Dedicated Parking)",
        opt_parking_no: "No Parking",

        amenity_lift: "Lift",
        amenity_security: "Security",
        amenity_gym: "Gym",
        amenity_pool: "Swimming Pool",
        amenity_power: "Power Backup",
        amenity_garden: "Garden",
        amenity_gas: "Gas Pipeline",

        btn_submit_text: "Estimate Rental Price →",
        btn_loading_text: "Analyzing Property...",

        res_badge: "YOUR ESTIMATED MONTHLY RENT",
        res_per_month: "per month",
        res_range_title: "Indicative Estimate Range:",
        res_range_disclaimer: "Based on the property information provided. This range is an indicative estimate, not a statistical confidence interval.",
        res_summary_title: "Property Summary",

        chip_loc: "Location:",
        chip_locality: "Area Type:",
        chip_type: "Type:",
        chip_bhk: "Bedrooms:",
        chip_baths: "Bathrooms:",
        chip_area: "Area:",
        chip_furn: "Furnishing:",
        chip_amenities: "Amenities:",

        res_analysis_title: "Rent Analysis",
        analysis_size_label: "Property Size",
        analysis_amenities_label: "Amenities Profile",
        analysis_condition_label: "Property Condition",

        disclaimer_important: "Important:",
        disclaimer_notice: "This is a machine learning estimate and not an official market valuation.",
        disclaimer_full: "The rental price shown is an ML-generated estimate based on the available training data and submitted property characteristics. It is not a certified property valuation or guaranteed market price. Actual rental prices may vary based on locality, demand, property condition, negotiation and market conditions.",

        footer_brand_sub: "Machine Learning • Flask • Scikit-Learn",
        footer_mission: "Data-driven rental property intelligence for Maharashtra urban and rural regions.",
        footer_copy: "© 2026 RentalPrice AI. All rights reserved."
    },
    hi: {
        nav_home: "होम",
        nav_how_it_works: "यह कैसे काम करता है",
        nav_insights: "विश्लेषण",
        nav_start_prediction: "अनुमान शुरू करें",

        hero_pill: "महाराष्ट्र शहरी एवं ग्रामीण मूल्यांकन इंजन",
        hero_title: "अपने अगले किराए के घर का सटीक मूल्य जानें।",
        hero_subtitle: "महाराष्ट्र के शहरी, उपनगरीय और ग्रामीण क्षेत्रों के लिए AI-संचालित किराए का अनुमान।",
        hero_description: "मशीन लर्निंग मॉडल के उपयोग से आवासीय संपत्ति की विशेषताओं, स्थान, शहरी/ग्रामीण क्षेत्र वर्गीकरण, आकार, सजावट और सुविधाओं के आधार पर सटीक मासिक किराए का अनुमान लगाएं।",
        hero_btn_estimate: "किराए का अनुमान लगाएं",
        hero_btn_explore: "देखें यह कैसे काम करता है",

        demo_badge: "डेमो पूर्वावलोकन",
        demo_status: "सक्रिय मॉडल",
        demo_kicker: "किराए का अनुमान",
        demo_type: "2 बीएचके अपार्टमेंट",
        demo_location: "पुणे (शहरी केंद्र), महाराष्ट्र",
        demo_est_label: "अनुमानित मासिक किराया",
        demo_period: "/ महीना",
        demo_area_label: "क्षेत्रफल",
        demo_area_val: "950 वर्ग फीट",
        demo_type_label: "क्षेत्र का प्रकार",
        demo_type_val: "शहरी",
        demo_parking_label: "पारकिंग",
        demo_parking_val: "उपलब्ध",
        demo_footer: "AI अनुमान • संपत्ति विश्लेषण",

        stat_models_num: "3+",
        stat_models_label: "रिग्रेशन मॉडल",
        stat_factors_num: "13+",
        stat_factors_label: "संपत्ति के कारक",
        stat_records_num: "3000+",
        stat_records_label: "प्रशिक्षण रिकॉर्ड",
        stat_speed_num: "रियल-टाइम",
        stat_speed_label: "त्वरित अनुमान",

        why_tag: "मूल्यांकन बुद्धिमत्ता",
        why_title: "सभी क्षेत्रों में बुद्धिमानी से किराए के निर्णय लें",
        why_lead: "शहरी शहरों के केंद्र, उपनगरीय इलाकों और ग्रामीण गांवों के बीच किराए की कीमतों में बड़ा अंतर होता है। हमारा मशीन लर्निंग मॉडल भौगोलिक श्रेणी और भौतिक गुणों दोनों का ध्यान रखता है।",
        feat_1_title: "संपत्ति बुद्धिमत्ता",
        feat_1_desc: "आकार, कमरे, सजावट और संपत्ति की विशेषताओं का एक दूसरे के संबंध में व्यापक विश्लेषण।",
        feat_2_title: "शहरी बनाम ग्रामीण मूल्य निर्धारण",
        feat_2_desc: "शहरी केंद्र, उपनगरीय विकास और ग्रामीण गांव के परिवेश के अंतर को समझता है।",
        feat_3_title: "डेटा-आधारित सटीक अनुमान",
        feat_3_desc: "कई रिग्रेशन एल्गोरिदम की तुलना करता है और R² मान्यता द्वारा सर्वश्रेष्ठ मॉडल चुनता है।",

        how_tag: "प्रक्रिया प्रवाह",
        how_title: "घर का किराया कैसे अनुमानित किया जाता है",
        step_1_title: "संपत्ति विवरण",
        step_1_desc: "स्थान, शहरी/ग्रामीण प्रकार और संपत्ति की विशेषताएं दर्ज करें।",
        step_2_title: "डेटा प्रोसेसिंग",
        step_2_desc: "एप्लिकेशन संपत्ति की जानकारी को सत्यापित और रूपांतरित करता है।",
        step_3_title: "रिग्रेशन मॉडल",
        step_3_desc: "प्रशिक्षित मशीन लर्निंग पाइपलाइन सुविधाओं का विश्लेषण करती है।",
        step_4_title: "किराए का अनुमान",
        step_4_desc: "अनुमानित मासिक किराया और संभावित मूल्य सीमा प्राप्त करें।",

        model_tag: "इंजीनियरिंग पाइपलाइन",
        model_title: "उन्नत रिग्रेशन मॉडल द्वारा निर्मित",
        model_lead: "सर्वश्रेष्ठ प्रदर्शन करने वाले मॉडल की पहचान करने के लिए Scikit-Learn पाइपलाइन का उपयोग करके कई एल्गोरिदम का परीक्षण किया जाता है।",
        m1_tag: "बेसलाइन",
        m1_title: "लीनियर रिग्रेशन",
        m1_cat: "बेसलाइन",
        m1_desc: "संपत्ति के आकार और किराए की दरों के बीच बुनियादी संबंध स्थापित करता है।",
        m2_tag: "एंसेम्बल",
        m2_title: "रैंडम फॉरेस्ट",
        m2_cat: "एंसेम्बल",
        m2_desc: "विभिन्न विशेषताओं और मंजिलों के बीच गैर-रैखिक संबंधों को समझने के लिए डिसीजन ट्री का उपयोग करता है।",
        m3_tag: "एंसेम्बल",
        m3_title: "एक्स्ट्रा ट्रीज",
        m3_cat: "एंसेम्बल",
        m3_desc: "क्षेत्रीय स्थान और क्षेत्र के प्रकार में विविधता को संतुलित करने वाला एंसेंबल मॉडल।",
        best_model_label: "सर्वश्रेष्ठ मॉडल का चयन:",
        best_model_desc: "train_model.py के निष्पादन के दौरान स्वचालित रूप से चुना जाता है।",

        factors_tag: "विशेषता कारक",
        factors_title: "अनुमान को कौन से कारक प्रभावित करते हैं?",
        factors_lead: "मासिक किराए के मूल्यों को प्रभावित करने वाली प्रमुख संपत्ति और वातावरणीय विशेषताएं।",
        f1_title: "स्थान (शहर/जिल्हा)",
        f1_desc: "महाराष्ट्र के प्रमुख शहर और जिला केंद्र एवं बड़े मेट्रो शहर।",
        f2_title: "क्षेत्र का प्रकार",
        f2_desc: "शहरी मुख्य शहर, उपनगरीय क्षेत्र, या ग्रामीण गांव का वर्गीकरण।",
        f3_title: "संपत्ति का प्रकार",
        f3_desc: "अपार्टमेंट, स्वतंत्र मकान, विला, स्टूडियो और 1 आरके इकाइयां।",
        f4_title: "बेडरूम (BHK)",
        f4_desc: "कमरों की संख्या सीधे रहने के स्थान और किराए को प्रभावित करती है।",
        f5_title: "बाथरूम",
        f5_desc: "बाथरूम का अनुपात किराएदारों की सुविधा और मूल्य को बढ़ाता है।",
        f6_title: "क्षेत्रफल (वर्ग फीट)",
        f6_desc: "अधिक उपयोगी स्थान आम तौर पर किराए के मूल्य को बढ़ाता है।",
        f7_title: "फर्नीचर स्थिति",
        f7_desc: "पूर्ण सुसज्जित (Fully Furnished) घर बिना फर्निचर वाले घरों की तुलना में अधिक किराए पर मिलते हैं।",
        f8_title: "संपत्ति की आयु",
        f8_desc: "नवनिर्मित इमारतें और नए फ्लैट आमतौर पर अधिक किराए पर मिलते हैं।",
        f9_title: "मंजिल",
        f9_desc: "मध्यम और ऊपरी मंजिलों पर हवा और दृश्य की अपील अधिक होती है।",
        f10_title: "सुविधाएं",
        f10_desc: "लिफ्ट, सुरक्षा, पावर बैकअप, जिम और स्विमिंग पूल जैसी सुविधाएं।",

        insights_tag: "विश्लेषणात्मक आउटपुट",
        insights_title: "डेटा को संपत्ति विश्लेषण में बदलें",
        ins_1_title: "किराया मूल्य का अनुमान",
        ins_1_desc: "प्रशिक्षित मल्टी-वेरिएबल रिग्रेशन मॉडल द्वारा अपेक्षित मासिक किराया निर्धारित करता है।",
        ins_2_title: "संभावित अनुमान सीमा",
        ins_2_desc: "स्थानीय मोलभाव और मौसमी बदलावों को दर्शाने वाली मूल्य सीमा प्रदान करता है।",
        ins_3_title: "संपत्ति का विश्लेषण",
        ins_3_desc: "विशिष्ट बाजार बेंचमार्क के सापेक्ष प्रमुख विशेषताओं को दर्शाता है।",

        cta_title: "क्या आप अपने घर के किराए का अनुमान लगाने के लिए तैयार हैं?",
        cta_desc: "अपनी संपत्ति का विवरण दर्ज करें और कुछ ही सेकंड में AI-संचालित अनुमान प्राप्त करें।",
        cta_btn: "अनुमान शुरू करें",

        pred_tag: "लाइव रिग्रेशन अनुमान",
        pred_title: "घर के किराए का अनुमान",
        pred_lead: "मासिक किराए का अनुमान लगाने के लिए नीचे संपत्ति का विवरण भरें।",
        block_1_title: "संपत्ति एवं स्थान का विवरण",
        block_2_title: "संपत्ति की स्थिति एवं मंजिल",
        block_3_title: "सुविधाएं एवं विशेषताएं",
        amenities_subtext: "संपत्ति में उपलब्ध सभी सुविधाओं का चयन करें:",

        lbl_location: "स्थान (शहर / जिला)",
        lbl_locality_type: "क्षेत्र का प्रकार",
        lbl_property_type: "संपत्ति का प्रकार",
        lbl_bedrooms: "बेडरूम (BHK)",
        lbl_bathrooms: "बाथरूम",
        lbl_area: "क्षेत्रफल (वर्ग फीट)",
        lbl_furnishing: "फर्नीचर स्थिति",
        lbl_property_age: "संपत्ति की आयु (वर्ष)",
        lbl_floor_number: "मंजिल क्रमांक",
        lbl_total_floors: "कुल मंजिलें",
        lbl_parking: "पार्किंग की जगह",

        opt_select_city: "शहर/जिला चुनें",
        opt_urban: "शहरी (मुख्य शहर / व्यावसायिक केंद्र)",
        opt_suburban: "उपनगरीय (शहर का बाहरी इलाका)",
        opt_rural: "ग्रामीण (गांव / ग्राम पंचायत)",
        opt_apartment: "अपार्टमेंट",
        opt_house: "स्वतंत्र मकान",
        opt_villa: "विला",
        opt_studio: "स्टूडियो",
        opt_1rk: "1 आरके",

        opt_unfurnished: "बिना फर्नीचर (Unfurnished)",
        opt_semi_furnished: "अर्ध-फर्निश्ड (Semi-Furnished)",
        opt_fully_furnished: "पूर्ण फर्निश्ड (Fully Furnished)",

        opt_parking_yes: "हाँ (आरक्षित पार्किंग)",
        opt_parking_no: "पार्किंग नहीं है",

        amenity_lift: "लिफ्ट",
        amenity_security: "सुरक्षा (Security)",
        amenity_gym: "जिम (Gym)",
        amenity_pool: "स्विमिंग पूल",
        amenity_power: "पावर बैकअप",
        amenity_garden: "बगीचा (Garden)",
        amenity_gas: "गैस पाइपलाइन",

        btn_submit_text: "किराए का अनुमान लगाएं →",
        btn_loading_text: "विश्लेषण हो रहा है...",

        res_badge: "आपका अनुमानित मासिक किराया",
        res_per_month: "प्रति माह",
        res_range_title: "संभावित अनुमान सीमा:",
        res_range_disclaimer: "प्रदान की गई संपत्ति की जानकारी के आधार पर। यह सीमा एक सांकेतिक अनुमान है।",
        res_summary_title: "संपत्ति का सारांश",

        chip_loc: "स्थान:",
        chip_locality: "क्षेत्र प्रकार:",
        chip_type: "प्रकार:",
        chip_bhk: "बेडरूम:",
        chip_baths: "बाथरूम:",
        chip_area: "क्षेत्रफल:",
        chip_furn: "फर्नीचर:",
        chip_amenities: "सुविधाएं:",

        res_analysis_title: "किराया विश्लेषण",
        analysis_size_label: "संपत्ति का आकार",
        analysis_amenities_label: "सुविधाओं का स्तर",
        analysis_condition_label: "संपत्ति की स्थिति",

        disclaimer_important: "महत्वपूर्ण:",
        disclaimer_notice: "यह एक मशीन लर्निंग आधारित अनुमान है, कोई आधिकारिक बाजार मूल्यांकन नहीं।",
        disclaimer_full: "दिखाया गया किराया उपलब्ध डेटा और दी गई जानकारियों पर आधारित एक AI अनुमान है। वास्तविक किराया स्थान, मांग, संपत्ति की स्थिति और मोलभाव के आधार पर भिन्न हो सकता है।",

        footer_brand_sub: "मशीन लर्निंग • फ्लास्क • साइकिट-लर्न",
        footer_mission: "महाराष्ट्र के शहरी और ग्रामीण क्षेत्रों के लिए डेटा-आधारित रियल एस्टेट इंटेलिजेंस।",
        footer_copy: "© 2026 RentalPrice AI. सर्वाधिकार सुरक्षित।"
    },
    mr: {
        nav_home: "होम",
        nav_how_it_works: "हे कसे कार्य करते",
        nav_insights: "विश्लेषण",
        nav_start_prediction: "अंदाज सुरू करा",

        hero_pill: "महाराष्ट्र शहरी व ग्रामीण मूल्यमापन इंजिन",
        hero_title: "तुमच्या पुढील भाड्याच्या घराचे अचूक मूल्य जाणून घ्या.",
        hero_subtitle: "महाराष्ट्र शहरी, उपनगरीय आणि ग्रामीण भागासाठी AI-चलित घरभाडे अंदाज.",
        hero_description: "मशीन लर्निंग मॉडेलच्या सहाय्याने घराची वैशिष्ट्ये, स्थान, शहरी/ग्रामीण क्षेत्र वर्गीकरण, आकार, फर्निचर आणि सुविधांच्या आधारे अंदाजे मासिक भाडे मिळवा.",
        hero_btn_estimate: "भाड्याचा अंदाज घ्या",
        hero_btn_explore: "हे कसे कार्य करते पहा",

        demo_badge: "डेमो पूर्वदृश्य",
        demo_status: "सक्रिय मॉडेल",
        demo_kicker: "भाड्याचा अंदाज",
        demo_type: "२ बीएचके अपार्टमेंट",
        demo_location: "पुणे (शहरी केंद्र), महाराष्ट्र",
        demo_est_label: "अंदाजे मासिक भाडे",
        demo_period: "/ महिना",
        demo_area_label: "क्षेत्रफळ",
        demo_area_val: "९५० चौ. फूट",
        demo_type_label: "परिसर प्रकार",
        demo_type_val: "शहरी",
        demo_parking_label: "पार्किंग",
        demo_parking_val: "उपलब्ध",
        demo_footer: "AI अंदाज • मालमत्ता विश्लेषण",

        stat_models_num: "३+",
        stat_models_label: "रिग्रेशन मॉडेल्स",
        stat_factors_num: "१३+",
        stat_factors_label: "मालमत्ता घटक",
        stat_records_num: "३०००+",
        stat_records_label: "प्रशिक्षण नोंदी",
        stat_speed_num: "रिअल-टाईम",
        stat_speed_label: "झटपट अंदाज",

        why_tag: "मूल्यमापन बुद्धिमत्ता",
        why_title: "सर्व भागांमध्ये हुशारीने घरभाड्याचे निर्णय घ्या",
        why_lead: "मुख्य शहर, उपनगरीय परिसर आणि ग्रामीण भागांमधील घरभाड्यात मोठी तफावत असते. आमचे मशीन लर्निंग मॉडेल भौगोलिक श्रेणी आणि भौतिक वैशिष्ट्ये या दोन्ही घटकांचा विचार करते.",
        feat_1_title: "मालमत्ता बुद्धिमत्ता",
        feat_1_desc: "आकारमान, खोल्या, फर्निचर आणि घराच्या वैशिष्ट्यांचे सर्वसमावेशक विश्लेषण.",
        feat_2_title: "शहरी विरुद्ध ग्रामीण दर",
        feat_2_desc: "मुख्य शहर केंद्र, उपनगरीय वसाहती आणि ग्रामीण भागातील फरकांचा अचूक विचार.",
        feat_3_title: "डेटा-आधारित अंदाज",
        feat_3_desc: "अनेक रिग्रेशन अल्गोरिदमची तुलना करून R² व्हॅलिडेशनद्वारे सर्वोत्तम मॉडेल निवडते.",

        how_tag: "प्रक्रिया प्रवाह",
        how_title: "घरभाड्याचा अंदाज कसा लावला जातो",
        step_1_title: "मालमत्ता तपशील",
        step_1_desc: "स्थान, शहरी/ग्रामीण प्रकार आणि घराची वैशिष्ट्ये प्रविष्ट करा.",
        step_2_title: "डेटा प्रक्रिया",
        step_2_desc: "ॲप्लिकेशन मालमत्तेच्या माहितीची पडताळणी व प्रक्रिया करते.",
        step_3_title: "रिग्रेशन मॉडेल",
        step_3_desc: "प्रशिक्षित मशीन लर्निंग पाइपलाइन वैशिष्ट्यांचे विश्लेषण करते.",
        step_4_title: "भाड्याचा अंदाज",
        step_4_desc: "अंदाजे मासिक भाडे आणि संभाव्य मूल्य श्रेणी मिळवा.",

        model_tag: "इंजिनिअरिंग पाइपलाइन",
        model_title: "प्रगत रिग्रेशन मॉडेल्सद्वारे निर्मित",
        model_lead: "सर्वोत्तम कामगिरी करणाऱ्या मॉडेलची निवड करण्यासाठी Scikit-Learn पाइपलाइन वापरून अनेक अल्गोरिदमची तुलना केली जाते.",
        m1_tag: "बेसलाइन",
        m1_title: "लिनियर रिग्रेशन",
        m1_cat: "बेसलाइन",
        m1_desc: "घराचे क्षेत्रफळ आणि भाड्याचे दर यांमधील मूलभूत संबंध स्पष्ट करते.",
        m2_tag: "एंसेम्बल",
        m2_title: "रँडम फॉरेस्ट",
        m2_cat: "एंसेम्बल",
        m2_desc: "वैविध्यपूर्ण वैशिष्ट्ये आणि मजल्यांमधील संबंध समजून घेण्यासाठी डिसीजन ट्रीचा वापर.",
        m3_tag: "एंसेम्बल",
        m3_title: "एक्स्ट्रा ट्रीज",
        m3_cat: "एंसेम्बल",
        m3_desc: "प्रादेशिक स्थान आणि परिसर प्रकारांमधील फरक संतुलित करणारे मॉडेल.",
        best_model_label: "सर्वोत्तम मॉडेल निवड:",
        best_model_desc: "train_model.py च्या अंमलबजावणी दरम्यान आपोआप निवडले जाते.",

        factors_tag: "वैशिष्ट्य गुणधर्म",
        factors_title: "अंदाजावर कोणत्या घटकांचा प्रभाव पडतो?",
        factors_lead: "मासिक घरभाड्याच्या मूल्यावर प्रभाव टाकणारे प्रमुख घटक.",
        f1_title: "स्थान (शहर/जिल्हा)",
        f1_desc: "महाराष्ट्रातील प्रमुख शहरे व जिल्हा केंद्रे आणि मोठी मेट्रो शहरे.",
        f2_title: "परिसराचा प्रकार",
        f2_desc: "मुख्य शहरी भाग, उपनगरीय परिसर किंवा ग्रामीण गाव वर्गीकरण.",
        f3_title: "मालमत्तेचा प्रकार",
        f3_desc: "अपार्टमेंट, स्वतंत्र घर, व्हिला, स्टुडिओ आणि १ आरके युनिट्स.",
        f4_title: "बेडरूम (BHK)",
        f4_desc: "खोल्यांची संख्या थेट राहण्याची जागा आणि घरभाड्यावर परिणाम करते.",
        f5_title: "बाथरुम",
        f5_desc: "बाथरुमची संख्या आणि उपलब्धता भाडेकरूंच्या सोयीसाठी महत्त्वाची ठरते.",
        f6_title: "क्षेत्रफळ (चौ. फूट)",
        f6_desc: "जास्त क्षेत्रफळ साधारणपणे घरभाड्याचे मूल्य वाढवते.",
        f7_title: "फर्निचर स्थिती",
        f7_desc: "पूर्ण फर्निचर असलेली (Fully Furnished) घरे विनाफर्निचर घरांपेक्षा जास्त भाड्याने जातात.",
        f8_title: "मालमत्तेचे वय",
        f8_desc: "नवीन बांधकामे आणि नवीन फ्लॅट्स साधारणपणे जास्त भाड्याने मिळतात.",
        f9_title: "मजला",
        f9_desc: "मध्यम आणि वरच्या मजल्यांवर हवा आणि निसर्गरम्य देखावा मिळतो.",
        f10_title: "सुविधा",
        f10_desc: "लिफ्ट, सुरक्षा, पॉवर बॅकअप, जिम आणि स्विमिंग पूल यांसारख्या सुविधा.",

        insights_tag: "विश्लेषणात्मक आउटपुट",
        insights_title: "डेटाचे रूपांतर मालमत्ता माहितीमध्ये करा",
        ins_1_title: "घरभाडे अंदाज",
        ins_1_desc: "प्रशिक्षित रिग्रेशन मॉडेलद्वारे अपेक्षित मासिक भाडे निश्चित करते.",
        ins_2_title: "संभाव्य अंदाज श्रेणी",
        ins_2_desc: "स्थानिक वाटाघाटी व बाजारातील बदल दर्शवणारी मूल्य श्रेणी प्रदान करते.",
        ins_3_title: "मालमत्ता सारांश",
        ins_3_desc: "बाजार मानकांशी तुलना करून प्रमुख वैशिष्ट्ये दर्शवते.",

        cta_title: "घरभाड्याचा अंदाज घेण्यासाठी तयार आहात?",
        cta_desc: "तुमच्या घराचा तपशील प्रविष्ट करा आणि काही सेकंदात AI-चलित अंदाज मिळवा.",
        cta_btn: "अंदाज सुरू करा",

        pred_tag: "थेट रिग्रेशन अंदाज",
        pred_title: "घरभाड्याचा अंदाज",
        pred_lead: "मासिक भाड्याचा अंदाज लावण्यासाठी खालील तपशील भरा.",
        block_1_title: "मालमत्ता व स्थान तपशील",
        block_2_title: "मालमत्ता स्थिती व मजले",
        block_3_title: "सुविधा व वैशिष्ट्ये",
        amenities_subtext: "घरामध्ये उपलब्ध असलेल्या सर्व सुविधा निवडा:",

        lbl_location: "स्थान (शहर / जिल्हा)",
        lbl_locality_type: "परिसराचा प्रकार",
        lbl_property_type: "मालमत्तेचा प्रकार",
        lbl_bedrooms: "बेडरूम (BHK)",
        lbl_bathrooms: "बाथरुम",
        lbl_area: "क्षेत्रफळ (चौ. फूट)",
        lbl_furnishing: "फर्निचर स्थिती",
        lbl_property_age: "मालमत्तेचे वय (वर्षे)",
        lbl_floor_number: "मजला क्रमांक",
        lbl_total_floors: "एकूण मजले",
        lbl_parking: "पार्किंगची जागा",

        opt_select_city: "शहर/जिल्हा निवडा",
        opt_urban: "शहरी (मुख्य शहर / व्यावसायिक केंद्र)",
        opt_suburban: "उपनगरीय (शहर परिसर / उपनगर)",
        opt_rural: "ग्रामीण (गाव / ग्रामपंचायत)",
        opt_apartment: "अपार्टमेंट",
        opt_house: "स्वतंत्र घर",
        opt_villa: "व्हिला",
        opt_studio: "स्टुडिओ",
        opt_1rk: "१ आरके",

        opt_unfurnished: "विनाफर्निचर (Unfurnished)",
        opt_semi_furnished: "अर्ध-फर्निचर (Semi-Furnished)",
        opt_fully_furnished: "पूर्ण फर्निचर (Fully Furnished)",

        opt_parking_yes: "होय (राखीव पार्किंग)",
        opt_parking_no: "पार्किंग नाही",

        amenity_lift: "लिफ्ट",
        amenity_security: "सुरक्षा (Security)",
        amenity_gym: "जिम (Gym)",
        amenity_pool: "स्विमिंग पूल",
        amenity_power: "पॉवर बॅकअप",
        amenity_garden: "बाग (Garden)",
        amenity_gas: "गॅस पाइपलाइन",

        btn_submit_text: "भाड्याचा अंदाज घ्या →",
        btn_loading_text: "विश्लेषण सुरू आहे...",

        res_badge: "तुमचा अंदाजे मासिक हप्ता",
        res_per_month: "दरमहा",
        res_range_title: "संभाव्य अंदाज श्रेणी:",
        res_range_disclaimer: "प्रदान केलेल्या माहितीच्या आधारे. ही श्रेणी एक संभाव्य अंदाज आहे.",
        res_summary_title: "मालमत्ता सारांश",

        chip_loc: "स्थान:",
        chip_locality: "परिसर प्रकार:",
        chip_type: "प्रकार:",
        chip_bhk: "बेडरूम:",
        chip_baths: "बाथरुम:",
        chip_area: "क्षेत्रफळ:",
        chip_furn: "फर्निचर:",
        chip_amenities: "सुविधा:",

        res_analysis_title: "भाडे विश्लेषण",
        analysis_size_label: "मालमत्ता आकार",
        analysis_amenities_label: "सुविधा प्रोफाइल",
        analysis_condition_label: "मालमत्ता स्थिती",

        disclaimer_important: "महत्त्वाचे:",
        disclaimer_notice: "हा मशीन लर्निंग आधारित अंदाज आहे, अधिकृत बाजार मूल्यमापन नाही.",
        disclaimer_full: "दाखवलेले घरभाडे उपलब्ध डेटा आणि दिलेल्या माहितीवर आधारित AI अंदाज आहे. मूळ घरभाडे स्थान, मागणी, घराची स्थिती आणि वाटाघाटींनुसार बदलू शकते.",

        footer_brand_sub: "मशीन लर्निंग • फ्लास्क • सायकिट-लर्न",
        footer_mission: "महाराष्ट्रातील शहरी आणि ग्रामीण भागासाठी डेटा-आधारित रिअल इस्टेट इंटेलिजन्स.",
        footer_copy: "© २०२६ RentalPrice AI. सर्व हक्क राखीव."
    }
};

let currentLang = 'en';

function applyLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('rental_price_ai_lang', lang);

    const dict = translations[lang];

    // Translate elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    // Sync language selector value
    const langSelect = document.getElementById('lang-select');
    if (langSelect && langSelect.value !== lang) {
        langSelect.value = lang;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Language Switcher
    const langSelect = document.getElementById('lang-select');
    const savedLang = localStorage.getItem('rental_price_ai_lang') || 'en';
    
    if (langSelect) {
        langSelect.value = savedLang;
        langSelect.addEventListener('change', (e) => {
            applyLanguage(e.target.value);
        });
    }

    applyLanguage(savedLang);

    // -------------------------------------------------------------
    // 1. Mobile Menu Toggle
    // -------------------------------------------------------------
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            mobileToggle.classList.toggle('active', isOpen);
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                mobileToggle.classList.remove('active');
            });
        });
    }

    // -------------------------------------------------------------
    // 2. Active Section Highlight on Scroll
    // -------------------------------------------------------------
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu .nav-link');

    if ('IntersectionObserver' in window && sections.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const activeId = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        if (link.getAttribute('href') === `#${activeId}`) {
                            link.classList.add('active');
                        } else {
                            link.classList.remove('active');
                        }
                    });
                }
            });
        }, {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        });

        sections.forEach(sec => observer.observe(sec));
    }

    // -------------------------------------------------------------
    // 3. Form Prediction Logic
    // -------------------------------------------------------------
    const form = document.getElementById('prediction-form');
    const predictBtn = document.getElementById('predict-btn');
    const btnText = predictBtn ? predictBtn.querySelector('.btn-text') : null;
    const btnSpinner = document.getElementById('btn-spinner');
    const errorMessage = document.getElementById('error-message');
    const resultCard = document.getElementById('result-card');
    
    // Result display elements
    const predictionVal = document.getElementById('prediction-val');
    const indicativeRangeVal = document.getElementById('indicative-range-val');
    
    // Summary elements
    const sumLocation = document.getElementById('sum-location');
    const sumLocalityType = document.getElementById('sum-locality-type');
    const sumType = document.getElementById('sum-type');
    const sumBhk = document.getElementById('sum-bhk');
    const sumBaths = document.getElementById('sum-baths');
    const sumArea = document.getElementById('sum-area');
    const sumFurn = document.getElementById('sum-furn');
    const sumParking = document.getElementById('sum-parking');
    const sumAmenities = document.getElementById('sum-amenities');

    // Analysis indicators
    const analysisSizeText = document.getElementById('analysis-size-text');
    const meterSizeFill = document.getElementById('meter-size-fill');
    const analysisAmenitiesText = document.getElementById('analysis-amenities-text');
    const meterAmenitiesFill = document.getElementById('meter-amenities-fill');
    const analysisConditionText = document.getElementById('analysis-condition-text');
    const meterConditionFill = document.getElementById('meter-condition-fill');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            hideError();
            if (resultCard) {
                resultCard.classList.add('hidden');
            }

            // Extract values
            const locationVal = document.getElementById('location')?.value;
            const localityTypeVal = document.getElementById('locality_type')?.value || 'Urban';
            const propertyTypeVal = document.getElementById('property_type')?.value;
            const bedroomsVal = parseInt(document.getElementById('bedrooms')?.value, 10);
            const bathroomsVal = parseInt(document.getElementById('bathrooms')?.value, 10);
            const areaVal = parseFloat(document.getElementById('area_sqft')?.value);
            const furnishingVal = document.getElementById('furnishing')?.value;
            const propertyAgeVal = parseInt(document.getElementById('property_age')?.value, 10);
            const floorNumberVal = parseInt(document.getElementById('floor_number')?.value, 10);
            const totalFloorsVal = parseInt(document.getElementById('total_floors')?.value, 10);
            const parkingVal = parseInt(document.getElementById('parking')?.value, 10);

            // Count selected amenities
            const amenityCheckboxes = document.querySelectorAll('input[name="amenity"]:checked');
            const amenityCount = amenityCheckboxes.length;

            // Validation messages by language
            const errMsgs = {
                en: {
                    location: 'Please select a property location.',
                    locality: 'Please select a locality area type (Urban, Suburban, or Rural).',
                    type: 'Please select a property type.',
                    bedrooms: 'Bedrooms must be between 1 and 10.',
                    bathrooms: 'Bathrooms must be between 1 and 10.',
                    area: 'Area must be between 200 and 10,000 sq ft.',
                    furnishing: 'Please select a furnishing status.',
                    age: 'Property age must be between 0 and 100 years.',
                    floor: 'Floor number must be between 0 and 100.',
                    total_floors: 'Total floors must be between 1 and 100.',
                    floor_overflow: 'Floor number cannot be greater than total floors.',
                    server: 'Failed to calculate rental price estimation.',
                    network: 'Unable to connect to the prediction server. Please try again.'
                },
                hi: {
                    location: 'कृपया संपत्ति का स्थान चुनें।',
                    locality: 'कृपया क्षेत्र का प्रकार चुनें (शहरी, उपनगरीय, या ग्रामीण)।',
                    type: 'कृपया संपत्ति का प्रकार चुनें।',
                    bedrooms: 'बेडरूम की संख्या 1 और 10 के बीच होनी चाहिए।',
                    bathrooms: 'बाथरूम की संख्या 1 और 10 के बीच होनी चाहिए।',
                    area: 'क्षेत्रफल 200 और 10,000 वर्ग फीट के बीच होना चाहिए।',
                    furnishing: 'कृपया फर्नीचर की स्थिति चुनें।',
                    age: 'संपत्ति की आयु 0 से 100 वर्ष के बीच होनी चाहिए।',
                    floor: 'मंजिल संख्या 0 से 100 के बीच होनी चाहिए।',
                    total_floors: 'कुल मंजिलें 1 से 100 के बीच होनी चाहिए।',
                    floor_overflow: 'मंजिल संख्या कुल मंजिलों से अधिक नहीं हो सकती।',
                    server: 'किराए का अनुमान लगाने में विफलता।',
                    network: 'सर्वर से जुड़ने में असमर्थ। कृपया पुनः प्रयास करें।'
                },
                mr: {
                    location: 'कृपया घराचे स्थान निवडा.',
                    locality: 'कृपया परिसराचा प्रकार निवडा (शहरी, उपनगरीय, किंवा ग्रामीण).',
                    type: 'कृपया मालमत्तेचा प्रकार निवडा.',
                    bedrooms: 'बेडरूमची संख्या १ ते १० दरम्यान असावी.',
                    bathrooms: 'बाथरुमची संख्या १ ते १० दरम्यान असावी.',
                    area: 'क्षेत्रफळ २०० ते १०,००० चौ. फूट दरम्यान असावे.',
                    furnishing: 'कृपया फर्निचर स्थिती निवडा.',
                    age: 'मालमत्तेचे वय ० ते १०० वर्षांदरम्यान असावे.',
                    floor: 'मजला क्रमांक ० ते १०० दरम्यान असावा.',
                    total_floors: 'एकूण मजले १ ते १०० दरम्यान असावेत.',
                    floor_overflow: 'मजला क्रमांक एकूण मजल्यांपेक्षा जास्त असू शकत नाही.',
                    server: 'घरभाडे अंदाज काढता आला नाही.',
                    network: 'सर्व्हरशी संपर्क होऊ शकला नाही. कृपया पुन्हा प्रयत्न करा.'
                }
            };

            const langErr = errMsgs[currentLang] || errMsgs.en;

            // Client-side Validations
            if (!locationVal) {
                showError(langErr.location);
                return;
            }

            if (!localityTypeVal) {
                showError(langErr.locality);
                return;
            }

            if (!propertyTypeVal) {
                showError(langErr.type);
                return;
            }

            if (isNaN(bedroomsVal) || bedroomsVal < 1 || bedroomsVal > 10) {
                showError(langErr.bedrooms);
                return;
            }

            if (isNaN(bathroomsVal) || bathroomsVal < 1 || bathroomsVal > 10) {
                showError(langErr.bathrooms);
                return;
            }

            if (isNaN(areaVal) || areaVal < 200 || areaVal > 10000) {
                showError(langErr.area);
                return;
            }

            if (!furnishingVal) {
                showError(langErr.furnishing);
                return;
            }

            if (isNaN(propertyAgeVal) || propertyAgeVal < 0 || propertyAgeVal > 100) {
                showError(langErr.age);
                return;
            }

            if (isNaN(floorNumberVal) || floorNumberVal < 0 || floorNumberVal > 100) {
                showError(langErr.floor);
                return;
            }

            if (isNaN(totalFloorsVal) || totalFloorsVal < 1 || totalFloorsVal > 100) {
                showError(langErr.total_floors);
                return;
            }

            if (floorNumberVal > totalFloorsVal) {
                showError(langErr.floor_overflow);
                return;
            }

            const payload = {
                location: locationVal,
                locality_type: localityTypeVal,
                property_type: propertyTypeVal,
                bedrooms: bedroomsVal,
                bathrooms: bathroomsVal,
                area_sqft: areaVal,
                furnishing: furnishingVal,
                property_age: propertyAgeVal,
                floor_number: floorNumberVal,
                total_floors: totalFloorsVal,
                parking: parkingVal,
                amenity_count: amenityCount
            };

            setLoading(true);

            try {
                const response = await fetch('/predict', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                const result = await response.json();

                if (!response.ok || !result.success) {
                    showError(result.error || langErr.server);
                } else {
                    displayResult(result, payload);
                }
            } catch (err) {
                showError(langErr.network);
            } finally {
                setLoading(false);
            }
        });
    }

    function displayResult(data, inputs) {
        if (!resultCard) return;

        // 1. Rent display in Indian Rupees
        if (predictionVal) {
            predictionVal.textContent = data.formatted_prediction || `₹${data.prediction.toLocaleString('en-IN')}`;
        }

        if (indicativeRangeVal && data.indicative_range) {
            indicativeRangeVal.textContent = data.indicative_range;
        }

        // Translation dictionary for summary values
        const valTrans = {
            Urban: { en: 'Urban', hi: 'शहरी', mr: 'शहरी' },
            Suburban: { en: 'Suburban', hi: 'उपनगरीय', mr: 'उपनगरीय' },
            Rural: { en: 'Rural', hi: 'ग्रामीण', mr: 'ग्रामीण' },
            Apartment: { en: 'Apartment', hi: 'अपार्टमेंट', mr: 'अपार्टमेंट' },
            'Independent House': { en: 'Independent House', hi: 'स्वतंत्र मकान', mr: 'स्वतंत्र घर' },
            Villa: { en: 'Villa', hi: 'विला', mr: 'व्हिला' },
            Studio: { en: 'Studio', hi: 'स्टूडियो', mr: 'स्टुडिओ' },
            '1 RK': { en: '1 RK', hi: '1 आरके', mr: '१ आरके' },
            Unfurnished: { en: 'Unfurnished', hi: 'बिना फर्नीचर', mr: 'विनाफर्निचर' },
            'Semi-Furnished': { en: 'Semi-Furnished', hi: 'अर्ध-फर्निश्ड', mr: 'अर्ध-फर्निचर' },
            'Fully Furnished': { en: 'Fully Furnished', hi: 'पूर्ण फर्निश्ड', mr: 'पूर्ण फर्निचर' },
            Yes: { en: 'Yes (Dedicated Parking)', hi: 'हाँ (आरक्षित पार्किंग)', mr: 'होय (राखीव पार्किंग)' },
            No: { en: 'No Parking', hi: 'पार्किंग नहीं है', mr: 'पार्किंग नाही' }
        };

        const tLocality = valTrans[inputs.locality_type]?.[currentLang] || inputs.locality_type;
        const tType = valTrans[inputs.property_type]?.[currentLang] || inputs.property_type;
        const tFurn = valTrans[inputs.furnishing]?.[currentLang] || inputs.furnishing;
        const tParking = inputs.parking === 1 
            ? (valTrans['Yes']?.[currentLang] || 'Yes') 
            : (valTrans['No']?.[currentLang] || 'No');

        // 2. Populate Property Summary from inputs
        if (sumLocation) sumLocation.textContent = inputs.location;
        if (sumLocalityType) sumLocalityType.textContent = tLocality;
        if (sumType) sumType.textContent = tType;
        if (sumBhk) sumBhk.textContent = `${inputs.bedrooms} BHK`;
        if (sumBaths) sumBaths.textContent = `${inputs.bathrooms}`;
        if (sumArea) sumArea.textContent = `${inputs.area_sqft.toLocaleString('en-IN')} sq ft`;
        if (sumFurn) sumFurn.textContent = tFurn;
        if (sumParking) sumParking.textContent = tParking;
        if (sumAmenities) sumAmenities.textContent = `${inputs.amenity_count} / 7`;

        // 3. Rent Analysis Visual Indicators (Calculated from inputs)
        const areaRatio = Math.min(100, Math.max(10, (inputs.area_sqft / 2500) * 100));
        if (meterSizeFill) meterSizeFill.style.width = `${areaRatio}%`;
        if (analysisSizeText) {
            let sizeCategory = 'Compact';
            if (inputs.area_sqft >= 1800) sizeCategory = 'Expansive';
            else if (inputs.area_sqft >= 1200) sizeCategory = 'Spacious';
            else if (inputs.area_sqft >= 750) sizeCategory = 'Standard';

            const sizeMap = {
                Compact: { en: 'Compact', hi: 'मध्यम / छोटा', mr: 'लहान / मध्यम' },
                Standard: { en: 'Standard', hi: 'मानक (Standard)', mr: 'मानक (Standard)' },
                Spacious: { en: 'Spacious', hi: 'विशाल', mr: 'मोठे / प्रशस्त' },
                Expansive: { en: 'Expansive', hi: 'अत्यंत भव्य', mr: 'अत्यंत भव्य' }
            };

            const tSize = sizeMap[sizeCategory]?.[currentLang] || sizeCategory;
            analysisSizeText.textContent = `${tSize} (${inputs.area_sqft} sq ft)`;
        }

        const amenRatio = Math.min(100, Math.max(8, (inputs.amenity_count / 7) * 100));
        if (meterAmenitiesFill) meterAmenitiesFill.style.width = `${amenRatio}%`;
        if (analysisAmenitiesText) {
            let amenCategory = 'Basic';
            if (inputs.amenity_count >= 5) amenCategory = 'High Feature';
            else if (inputs.amenity_count >= 3) amenCategory = 'Moderate';

            const amenMap = {
                Basic: { en: 'Basic', hi: 'बुनियादी', mr: 'मूलभूत' },
                Moderate: { en: 'Moderate', hi: 'मध्यम', mr: 'मध्यम' },
                'High Feature': { en: 'High Feature', hi: 'उच्च सुविधा युक्त', mr: 'उच्च सुविधा युक्त' }
            };

            const tAmen = amenMap[amenCategory]?.[currentLang] || amenCategory;
            analysisAmenitiesText.textContent = `${tAmen} (${inputs.amenity_count}/7)`;
        }

        const ageScore = Math.max(15, Math.min(100, 100 - (inputs.property_age * 2.8)));
        if (meterConditionFill) meterConditionFill.style.width = `${ageScore}%`;
        if (analysisConditionText) {
            let condCategory = 'Brand New / Modern';
            if (inputs.property_age > 15) condCategory = 'Established / Mature';
            else if (inputs.property_age > 5) condCategory = 'Well-Maintained';

            const condMap = {
                'Brand New / Modern': { en: 'Brand New / Modern', hi: 'नया / आधुनिक', mr: 'नवीन / आधुनिक' },
                'Well-Maintained': { en: 'Well-Maintained', hi: 'अच्छी स्थिति में', mr: 'उत्तम स्थितीत' },
                'Established / Mature': { en: 'Established / Mature', hi: 'पुरानी इमारत', mr: 'जुनी इमारत' }
            };

            const tCond = condMap[condCategory]?.[currentLang] || condCategory;
            analysisConditionText.textContent = `${tCond} (${inputs.property_age} yrs)`;
        }

        // 4. Reveal Card & Smooth Scroll
        resultCard.classList.remove('hidden');
        resultCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function setLoading(isLoading) {
        if (!predictBtn) return;
        predictBtn.disabled = isLoading;
        if (btnText && btnSpinner) {
            const dict = translations[currentLang] || translations.en;
            if (isLoading) {
                btnText.textContent = dict.btn_loading_text || 'Analyzing Property...';
                btnSpinner.classList.remove('hidden');
            } else {
                btnText.textContent = dict.btn_submit_text || 'Estimate Rental Price →';
                btnSpinner.classList.add('hidden');
            }
        }
    }

    function showError(msg) {
        if (!errorMessage) return;
        errorMessage.textContent = msg;
        errorMessage.classList.remove('hidden');
    }

    function hideError() {
        if (!errorMessage) return;
        errorMessage.textContent = '';
        errorMessage.classList.add('hidden');
    }
});
