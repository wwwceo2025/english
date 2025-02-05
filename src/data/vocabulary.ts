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
  // 新增商务词汇
  {
    id: 31,
    english: "procurement",
    chinese: "采购，购买",
    pronunciation: "/prəˈkjʊəmənt/",
    example: "Our procurement team is responsible for sourcing new suppliers.",
    category: "business"
  },
  {
    id: 32,
    english: "vendor",
    chinese: "供应商，销售商",
    pronunciation: "/ˈvendə/",
    example: "We are looking for reliable vendors for our new product line.",
    category: "business"
  },
  {
    id: 33,
    english: "logistics",
    chinese: "物流，后勤",
    pronunciation: "/ləˈdʒɪstɪks/",
    example: "The logistics department handles all shipping arrangements.",
    category: "business"
  },
  // 新增日常交际词汇
  {
    id: 34,
    english: "coordinate",
    chinese: "协调，配合",
    pronunciation: "/kəʊˈɔːdɪneɪt/",
    example: "We need to coordinate our efforts to meet the deadline.",
    category: "daily"
  },
  {
    id: 35,
    english: "delegate",
    chinese: "委派，授权",
    pronunciation: "/ˈdelɪɡeɪt/",
    example: "I will delegate these tasks to my team members.",
    category: "daily"
  },
  // 新增电话沟通词汇
  {
    id: 36,
    english: "dial in",
    chinese: "拨号接入",
    pronunciation: "/daɪəl ɪn/",
    example: "Please dial in using the conference number provided.",
    category: "phone"
  },
  {
    id: 37,
    english: "disconnect",
    chinese: "断开连接",
    pronunciation: "/dɪskəˈnekt/",
    example: "The call might disconnect if you move to the basement.",
    category: "phone"
  },
  // 新增邮件写作词汇
  {
    id: 38,
    english: "acknowledge",
    chinese: "确认收到，承认",
    pronunciation: "/əkˈnɒlɪdʒ/",
    example: "Please acknowledge receipt of this important document.",
    category: "email"
  },
  {
    id: 39,
    english: "proceed",
    chinese: "继续进行，处理",
    pronunciation: "/prəˈsiːd/",
    example: "Once you confirm, we will proceed with the order.",
    category: "email"
  },
  {
    id: 40,
    english: "compile",
    chinese: "汇编，整理",
    pronunciation: "/kəmˈpaɪl/",
    example: "I will compile all the information and send it to you.",
    category: "email"
  },
  // 外贸相关词汇
  {
    id: 21,
    english: "purchase order",
    chinese: "采购订单",
    pronunciation: "/ˈpɜːtʃəs ˈɔːdə/",
    example: "We will process your purchase order within 24 hours.",
    category: "business"
  },
  {
    id: 22,
    english: "inventory",
    chinese: "库存",
    pronunciation: "/ˈɪnvəntri/",
    example: "We need to check our inventory before accepting new orders.",
    category: "business"
  },
  {
    id: 23,
    english: "wholesale",
    chinese: "批发",
    pronunciation: "/ˈhəʊlseɪl/",
    example: "We offer wholesale prices for bulk orders.",
    category: "business"
  },
  {
    id: 24,
    english: "customs clearance",
    chinese: "清关",
    pronunciation: "/ˈkʌstəmz ˈklɪərəns/",
    example: "The goods are currently undergoing customs clearance.",
    category: "business"
  },
  {
    id: 25,
    english: "quality control",
    chinese: "质量控制",
    pronunciation: "/ˈkwɒləti kənˈtrəʊl/",
    example: "All products must pass our strict quality control standards.",
    category: "business"
  },
  {
    id: 26,
    english: "postpone",
    chinese: "推迟，延期",
    pronunciation: "/pəˈspəʊn/",
    example: "Due to unforeseen circumstances, we need to postpone the meeting.",
    category: "daily"
  },
  {
    id: 27,
    english: "collaborate",
    chinese: "合作",
    pronunciation: "/kəˈlæbəreɪt/",
    example: "Our teams will collaborate on this project.",
    category: "daily"
  },
  {
    id: 28,
    english: "conference call",
    chinese: "电话会议",
    pronunciation: "/ˈkɒnfərəns kɔːl/",
    example: "Let's schedule a conference call with our international partners.",
    category: "phone"
  },
  {
    id: 29,
    english: "reception",
    chinese: "信号接收",
    pronunciation: "/rɪˈsepʃn/",
    example: "I'm sorry, but the reception is very poor in this area.",
    category: "phone"
  },
  {
    id: 30,
    english: "draft",
    chinese: "草稿",
    pronunciation: "/drɑːft/",
    example: "I'll send you a draft of the email before sending it to the client.",
    category: "email"
  },
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