// 词汇数据按照不同类别组织
export interface Word {
  id: number;
  english: string;
  chinese: string;
  pronunciation: string;
  example: string;
  category: string;
}

export const vocabularyData: Word[] = [
  // 外贸相关词汇
  {
    id: 1,
    english: "quotation",
    chinese: "报价单",
    pronunciation: "/kwəʊˈteɪʃn/",
    example: "Could you please send me a quotation for these items?",
    category: "business"
  },
  {
    id: 2,
    english: "negotiate",
    chinese: "谈判，协商",
    pronunciation: "/nɪˈɡəʊʃieɪt/",
    example: "We need to negotiate the terms of the contract.",
    category: "business"
  },
  {
    id: 3,
    english: "shipment",
    chinese: "货运，装运",
    pronunciation: "/ˈʃɪpmənt/",
    example: "The shipment will arrive at the port next week.",
    category: "business"
  },
  {
    id: 4,
    english: "inquiry",
    chinese: "询盘，询价",
    pronunciation: "/ɪnˈkwaɪəri/",
    example: "We received an inquiry about our new product line.",
    category: "business"
  },
  // 日常交际词汇
  {
    id: 5,
    english: "appreciate",
    chinese: "感激，欣赏",
    pronunciation: "/əˈpriːʃieɪt/",
    example: "I really appreciate your help with this matter.",
    category: "daily"
  },
  {
    id: 6,
    english: "schedule",
    chinese: "安排，日程",
    pronunciation: "/ˈʃedjuːl/",
    example: "Let me check my schedule and get back to you.",
    category: "daily"
  },
  {
    id: 7,
    english: "recommend",
    chinese: "推荐，建议",
    pronunciation: "/ˌrekəˈmend/",
    example: "Could you recommend a good restaurant in this area?",
    category: "daily"
  },
  // 电话沟通词汇
  {
    id: 8,
    english: "hold on",
    chinese: "稍等",
    pronunciation: "/həʊld ɒn/",
    example: "Could you hold on for a moment while I check that information?",
    category: "phone"
  },
  {
    id: 9,
    english: "transfer",
    chinese: "转接（电话）",
    pronunciation: "/trænsˈfɜː/",
    example: "I'll transfer you to our technical support team.",
    category: "phone"
  },
  {
    id: 10,
    english: "voicemail",
    chinese: "语音信箱",
    pronunciation: "/ˈvɔɪsmeɪl/",
    example: "Please leave a message in my voicemail if I'm not available.",
    category: "phone"
  },
  // 邮件写作词汇
  {
    id: 11,
    english: "regarding",
    chinese: "关于",
    pronunciation: "/rɪˈɡɑːdɪŋ/",
    example: "I am writing regarding your recent order.",
    category: "email"
  },
  {
    id: 12,
    english: "attachment",
    chinese: "附件",
    pronunciation: "/əˈtætʃmənt/",
    example: "Please find the requested documents in the attachment.",
    category: "email"
  },
  {
    id: 13,
    english: "confirm",
    chinese: "确认",
    pronunciation: "/kənˈfɜːm/",
    example: "Could you please confirm receipt of this email?",
    category: "email"
  },
  {
    id: 14,
    english: "deadline",
    chinese: "截止日期",
    pronunciation: "/ˈdedlaɪn/",
    example: "The deadline for submitting the proposal is next Friday.",
    category: "business"
  },
  {
    id: 15,
    english: "reschedule",
    chinese: "重新安排时间",
    pronunciation: "/ˌriːˈʃedjuːl/",
    example: "We need to reschedule our meeting to next week.",
    category: "daily"
  },
  {
    id: 16,
    english: "clarify",
    chinese: "澄清，说明",
    pronunciation: "/ˈklærɪfaɪ/",
    example: "Could you clarify what you mean by that?",
    category: "daily"
  },
  {
    id: 17,
    english: "invoice",
    chinese: "发票",
    pronunciation: "/ˈɪnvɔɪs/",
    example: "We will send you the invoice once the order is confirmed.",
    category: "business"
  },
  {
    id: 18,
    english: "urgent",
    chinese: "紧急的",
    pronunciation: "/ˈɜːdʒənt/",
    example: "This is an urgent matter that requires immediate attention.",
    category: "email"
  },
  {
    id: 19,
    english: "follow-up",
    chinese: "后续，跟进",
    pronunciation: "/ˈfɒləʊ ʌp/",
    example: "I'll send a follow-up email next week.",
    category: "email"
  },
  {
    id: 20,
    english: "available",
    chinese: "有空的，可用的",
    pronunciation: "/əˈveɪləbl/",
    example: "When would you be available for a phone call?",
    category: "phone"
  }
];