// ============================================
// 会诊排班数据 - 齐鲁医院 2026年8月
// 来源：附件 2026年8月普通会诊排班及反馈表(4).pdf
//
// 层级结构（严格遵循Word表格）：
//   specialty（一级）= Word第1列「专业」
//   entries[] （二级）= Word第2列「普通会诊负责病区」
//     scope:  适用范围 / 子专业名
//     ward:   负责病区
//     location: 位置
//     phone:  院内短号(5位)/手机号(11位)
//     label:  电话类型
// ============================================

var DATA = {
  month: "2026年8月",
  updateDate: "2026-08-01",

  specialties: [

    // ##########################################
    // 🔴 急会诊电话（置顶）
    // 来源：附件2.山东大学齐鲁医院急会诊电话.docx
    // ##########################################
    {
      id: "emergency",
      specialty: "急会诊电话",
      isEmergency: true,
      entries: [
        { scope: "心内科", ward: "", location: "", phone: "18560087756", label: "急会诊" },
        { scope: "呼吸、内分泌、急诊内、消化、肾内、感染科、肝病、风湿", ward: "", location: "", phone: "18560087739", label: "急会诊" },
        { scope: "皮肤科", ward: "", location: "", phone: "18560087719", label: "急会诊" },
        { scope: "重症医学科", ward: "", location: "", phone: "18560087758", label: "急会诊" },
        { scope: "普外科", ward: "", location: "", phone: "18560087753", label: "急会诊" },
        { scope: "小儿外科", ward: "", location: "", phone: "18560084396", label: "急会诊" },
        { scope: "心外科", ward: "", location: "", phone: "18560087736", label: "急会诊" },
        { scope: "胸外科", ward: "", location: "", phone: "18560087735", label: "急会诊" },
        { scope: "骨外科", ward: "", location: "", phone: "18560087732", label: "急会诊" },
        { scope: "泌尿外科", ward: "", location: "", phone: "18560087737", label: "急会诊" },
        { scope: "肾移植", ward: "", location: "", phone: "18560087713", label: "急会诊" },
        { scope: "整形美容烧伤科", ward: "", location: "", phone: "18560087723", label: "急会诊" },
        { scope: "产科", ward: "", location: "", phone: "18560087725", label: "急会诊" },
        { scope: "妇科", ward: "", location: "", phone: "18560082843", label: "急会诊" },
        { scope: "神经内科（齐鲁楼、华美楼）", ward: "", location: "", phone: "18560087757", label: "急会诊" },
        { scope: "神经内科（肿瘤中心、健康楼、综合楼、妇儿楼、济众楼）", ward: "", location: "", phone: "18560086436", label: "急会诊" },
        { scope: "小儿内科", ward: "", location: "", phone: "18560087728", label: "急会诊" },
        { scope: "神经外科", ward: "", location: "", phone: "18560087726", label: "急会诊" },
        { scope: "血液科", ward: "", location: "", phone: "18560087751", label: "急会诊" },
        { scope: "耳鼻咽喉科", ward: "", location: "", phone: "18560087729", label: "急会诊" },
        { scope: "眼科", ward: "", location: "", phone: "18560087731", label: "急会诊" },
        { scope: "口腔科", ward: "", location: "", phone: "18560087750", label: "急会诊" },
        { scope: "心理科", ward: "", location: "", phone: "18560086557", label: "急会诊" },
        { scope: "心电图室", ward: "", location: "", phone: "18560087721", label: "急会诊" },
        { scope: "第一手术室 号码1", ward: "", location: "", phone: "18560085732", label: "手术室" },
        { scope: "第一手术室 号码2（无菌器械室）", ward: "", location: "", phone: "18560080589", label: "手术室" },
        { scope: "第二手术室 号码1", ward: "", location: "", phone: "18560084386", label: "手术室" },
        { scope: "第二手术室 号码2", ward: "", location: "", phone: "18560084387", label: "手术室" },
        { scope: "第一麻醉科", ward: "", location: "", phone: "18560086903", label: "急会诊" },
        { scope: "第二麻醉科", ward: "", location: "", phone: "18560087727", label: "急会诊" },
        { scope: "第四麻醉科", ward: "肿瘤中心、综合楼、健康楼", location: "工作日8:00-17:00", phone: "18560087428", label: "急会诊" }
      ]
    },

    // ==========================================
    // 表1：内科系统 + 肿瘤 + 血液 + 儿科
    // ==========================================

    {
      id: "cardiology",
      specialty: "心血管内科",
      entries: [
        { scope: "华美楼、妇儿楼", ward: "心血管内科三病区", location: "齐鲁楼南塔十二层", phone: "65060", label: "护士站" },
        { scope: "其余病区", ward: "心血管内科一病区", location: "齐鲁楼南塔十一层", phone: "65042", label: "护士站" }
      ]
    },
    {
      id: "respiratory",
      specialty: "呼吸与危重症医学科",
      entries: [
        { scope: "", ward: "呼吸与危重症医学科二病区", location: "齐鲁楼南塔八层", phone: "65261", label: "护士站" }
      ]
    },
    {
      id: "endocrinology",
      specialty: "内分泌与代谢病科",
      entries: [
        { scope: "", ward: "内分泌与代谢病科一病区", location: "齐鲁楼南塔十层", phone: "65030", label: "护士站" }
      ]
    },
    {
      id: "gastroenterology",
      specialty: "消化内科",
      entries: [
        { scope: "8月1日-8月17日", ward: "消化内科一病区", location: "齐鲁楼南塔九层", phone: "65267", label: "护士站" },
        { scope: "8月18日-8月31日", ward: "消化内科二病区", location: "齐鲁楼南塔九层", phone: "65292", label: "护士站" }
      ]
    },
    {
      id: "neurology",
      specialty: "神经内科",
      entries: [
        { scope: "", ward: "神经内科二病区", location: "南塔十三层", phone: "65450", label: "护士站" }
      ]
    },
    {
      id: "hematology",
      specialty: "血液科",
      entries: [
        { scope: "", ward: "中心六病区", location: "济众楼北区西八", phone: "69860", label: "医生办公室" }
      ]
    },
    {
      id: "pediatrics",
      specialty: "小儿内科",
      entries: [
        { scope: "F13东（神经）", ward: "小儿内科一区", location: "", phone: "65921", label: "护士站" },
        { scope: "F13西（血液）", ward: "小儿内科二区", location: "", phone: "65931", label: "护士站" },
        { scope: "F14东（呼吸、消化免疫）", ward: "小儿内科三区", location: "", phone: "65941", label: "护士站" },
        { scope: "F14西（心血管、内分泌、泌尿）", ward: "小儿内科四区", location: "", phone: "65951", label: "护士站" },
        { scope: "F15东（重症）", ward: "小儿内科五区", location: "", phone: "65961", label: "护士站" },
        { scope: "F15西（新生儿）", ward: "小儿内科六区", location: "", phone: "65971", label: "护士站" }
      ]
    },
    {
      id: "oncology-medical",
      specialty: "肿瘤内科",
      entries: [
        { scope: "", ward: "中心四病区", location: "济众楼北区西三", phone: "69841", label: "医生办公室" },
        { scope: "", ward: "中心五病区", location: "济众楼北区西五", phone: "69851", label: "医生办公室" }
      ]
    },
    {
      id: "oncology-radiation",
      specialty: "肿瘤放疗科",
      entries: [
        { scope: "", ward: "中心二病区", location: "济众楼北区东二", phone: "69821", label: "医生办公室" },
        { scope: "", ward: "中心三病区", location: "济众楼北区西二", phone: "69831", label: "医生办公室" },
        { scope: "", ward: "综合三病区", location: "", phone: "69272", label: "医生办公室" }
      ]
    },

    // ==========================================
    // 表2：内科/专科 + 普外科
    // ==========================================

    {
      id: "nephrology",
      specialty: "肾内科",
      entries: [
        { scope: "", ward: "肾内科一病区", location: "齐鲁楼南塔七层", phone: "65246", label: "护士站" }
      ]
    },
    {
      id: "infectious",
      specialty: "感染性疾病科",
      entries: [
        { scope: "", ward: "感染性疾病科", location: "", phone: "69559", label: "护士站" }
      ]
    },
    {
      id: "emergency-medicine",
      specialty: "急诊内科",
      entries: [
        { scope: "", ward: "急诊内科一病区", location: "齐鲁楼南塔五层", phone: "65298", label: "护士站" }
      ]
    },
    {
      id: "toxicology",
      specialty: "中毒与职业病科",
      entries: [
        { scope: "", ward: "中毒与职业病科", location: "", phone: "69940", label: "护士站" },
        { scope: "", ward: "", location: "", phone: "69941", label: "医生办公室" }
      ]
    },
    {
      id: "hepatology",
      specialty: "肝病科",
      entries: [
        { scope: "", ward: "综合一病区", location: "", phone: "69593", label: "医生办公室" }
      ]
    },
    {
      id: "rheumatology",
      specialty: "风湿科",
      entries: [
        { scope: "", ward: "综合五病区", location: "", phone: "69655", label: "医生办公室" }
      ]
    },
    {
      id: "general-practice",
      specialty: "全科医学科",
      entries: [
        { scope: "", ward: "全科医学科病区", location: "", phone: "65981", label: "护士站" }
      ]
    },
    {
      id: "dermatology",
      specialty: "皮肤科",
      entries: [
        { scope: "", ward: "综合二病区", location: "", phone: "69579", label: "医生办公室" }
      ]
    },
    {
      id: "intervention",
      specialty: "介入科",
      entries: [
        { scope: "", ward: "综合二病区", location: "", phone: "69594", label: "医生办公室" }
      ]
    },
    {
      id: "rehab",
      specialty: "康复科",
      entries: [
        { scope: "", ward: "康复科门诊", location: "", phone: "66113", label: "诊室" }
      ]
    },
    {
      id: "tcm",
      specialty: "中医科",
      entries: [
        { scope: "含中医肛肠专业", ward: "东十一病区", location: "", phone: "69423", label: "医生办公室" }
      ]
    },
    {
      id: "pain",
      specialty: "疼痛科",
      entries: [
        { scope: "", ward: "疼痛科病区", location: "", phone: "69417", label: "医生办公室" }
      ]
    },
    {
      id: "acupuncture",
      specialty: "针灸推拿科",
      entries: [
        { scope: "", ward: "针灸科门诊", location: "", phone: "66121", label: "诊室" }
      ]
    },
    {
      id: "psychology",
      specialty: "心理科",
      entries: [
        { scope: "", ward: "心理科门诊", location: "", phone: "66107", label: "诊室" }
      ]
    },

    // --- 普外科（含8个亚专业） ---
    {
      id: "general-surgery",
      specialty: "普外科",
      entries: [
        { scope: "胃肠外科", ward: "F5B病区", location: "", phone: "66331", label: "护士站" },
        { scope: "结直肠外科", ward: "F6D病区", location: "", phone: "66391", label: "护士站" },
        { scope: "胰腺、疝与腹壁外科", ward: "F5D病区", location: "", phone: "66351", label: "护士站" },
        { scope: "乳腺外科", ward: "F6C病区", location: "", phone: "66381", label: "护士站" },
        { scope: "肝胆外一科", ward: "F10B病区", location: "", phone: "66651", label: "护士站" },
        { scope: "肝胆外二科", ward: "F5C病区", location: "", phone: "66341", label: "护士站" },
        { scope: "血管外科", ward: "健康楼中三", location: "", phone: "69565", label: "护士站" },
        { scope: "甲状腺外科", ward: "健康楼中二", location: "", phone: "69936", label: "护士站" }
      ]
    },

    // ==========================================
    // 表3：儿科外科 / 心外 / 胸外 / 骨科 / 泌尿 / 移植 / 妇产 / 神外 / 五官 / 麻醉 / 营养
    // ==========================================

    {
      id: "pediatric-surgery",
      specialty: "小儿外科",
      entries: [
        { scope: "普外、胸外、泌尿", ward: "F12C病区", location: "", phone: "66741", label: "护士站" },
        { scope: "骨科", ward: "F12D病区", location: "", phone: "66751", label: "护士站" }
      ]
    },
    {
      id: "cardiac-surgery",
      specialty: "心外科",
      entries: [
        { scope: "需提前电话联系", ward: "F8D病区", location: "", phone: "66591", label: "护士站" }
      ]
    },
    {
      id: "thoracic-surgery",
      specialty: "胸外科",
      entries: [
        { scope: "", ward: "F10C病区（胸外科一）", location: "", phone: "66661", label: "护士站" }
      ]
    },

    // --- 骨科（含8个亚专业） ---
    {
      id: "orthopedics",
      specialty: "骨科",
      entries: [
        { scope: "创伤骨科", ward: "急诊外科一病区", location: "", phone: "65195", label: "护士站" },
        { scope: "手足及显微外科", ward: "F8B病区", location: "", phone: "66571", label: "护士站" },
        { scope: "脊柱外科", ward: "F7B病区", location: "", phone: "66531", label: "护士站" },
        { scope: "脊柱外科", ward: "F7D病区", location: "", phone: "66551", label: "护士站" },
        { scope: "脊柱外科", ward: "妇儿楼F16西病区", location: "", phone: "65991", label: "护士站" },
        { scope: "关节外科", ward: "F7C病区", location: "", phone: "66541", label: "护士站" },
        { scope: "运动医学科", ward: "骨科东九病区", location: "", phone: "69361", label: "护士站" },
        { scope: "骨肿瘤骨病科", ward: "健康楼北三病区", location: "", phone: "69590", label: "护士站" }
      ]
    },

    {
      id: "urology",
      specialty: "泌尿外科",
      entries: [
        { scope: "", ward: "F11C病区", location: "", phone: "66701", label: "护士站" }
      ]
    },
    {
      id: "transplant",
      specialty: "器官移植科",
      entries: [
        { scope: "肝移植", ward: "F11B病区", location: "", phone: "66691", label: "护士站" },
        { scope: "肾移植", ward: "", location: "", phone: "87713", label: "" }
      ]
    },
    {
      id: "dialysis",
      specialty: "血液净化科",
      entries: [
        { scope: "", ward: "血液透析专病门诊", location: "", phone: "69529", label: "诊室电话" },
        { scope: "", ward: "", location: "", phone: "69528", label: "备用" }
      ]
    },
    {
      id: "plastic-burn",
      specialty: "整形美容烧伤科",
      entries: [
        { scope: "", ward: "东八病区", location: "", phone: "69365", label: "护士站" }
      ]
    },
    {
      id: "obgyn",
      specialty: "妇产科",
      entries: [
        { scope: "妇科", ward: "妇科六病区", location: "", phone: "65912", label: "医生办公室" },
        { scope: "产科", ward: "产科一病区", location: "", phone: "65832", label: "医生办公室" }
      ]
    },
    {
      id: "neurosurgery",
      specialty: "神经外科",
      entries: [
        { scope: "", ward: "F9C病区", location: "", phone: "66621", label: "F9C护士站" }
      ]
    },
    {
      id: "ent",
      specialty: "耳鼻咽喉科",
      entries: [
        { scope: "", ward: "F13C病区", location: "", phone: "66781", label: "护士站" }
      ]
    },
    {
      id: "ophthalmology",
      specialty: "眼科",
      entries: [
        { scope: "", ward: "F12B病区", location: "", phone: "66731", label: "护士站" }
      ]
    },
    {
      id: "stomatology",
      specialty: "口腔科",
      entries: [
        { scope: "", ward: "F13B病区", location: "", phone: "66771", label: "护士站" }
      ]
    },

    // --- 麻醉科（含3个分科） ---
    {
      id: "anesthesia",
      specialty: "麻醉科",
      entries: [
        { scope: "第一麻醉科", ward: "", location: "", phone: "18560086903", label: "手机" },
        { scope: "第二麻醉科", ward: "", location: "", phone: "18560087727", label: "手机" },
        { scope: "第四麻醉科", ward: "肿瘤中心、综合楼、健康楼", location: "工作日8:00-17:00", phone: "18560087428", label: "手机" }
      ]
    },

    {
      id: "nutrition",
      specialty: "营养科",
      entries: [
        { scope: "", ward: "营养科", location: "", phone: "66927", label: "医生办公室" }
      ]
    }
  ]
};