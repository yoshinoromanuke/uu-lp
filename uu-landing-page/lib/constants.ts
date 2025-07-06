// Business Constants
export const BUSINESS_INFO = {
  companyName: 'UU株式会社',
  tagline: '実行支援型グロースコンサルティング',
  email: 'contact@uu-growth.com',
  phone: '03-1234-5678',
} as const

// Target Metrics
export const TARGET_METRICS = {
  monthlyLeads: 20,
  conversionRate: 2.5, // %
  dealRate: 40, // %
  closingRate: 25, // %
  averageContractValue: 2000000, // 円
  contractDuration: 6, // months
} as const

// Success Metrics
export const SUCCESS_METRICS = {
  averageGrowthRate: 200, // %
  supportedCompanies: 8,
  totalRevenue: 3000000000, // 30億円
  caseStudies: 3,
} as const

// Case Studies Data
export const CASE_STUDIES = [
  {
    id: 1,
    category: 'BtoBtoCプラットフォーム',
    stage: 'シリーズB',
    challenge: '成長の踊り場、何をすれば伸びるか不明',
    discovery: '課金CVRが業界平均の半分',
    actions: ['ファネル分析', 'ボトルネック改善', 'クリエイティブPDCA'],
    results: {
      revenue: { before: 100, after: 200 },
      cvr: { before: 100, after: 200 },
      ltv: { before: 100, after: 200 },
    },
    resultText: '売上・課金CVR・LTV全て前年比200%成長',
  },
  {
    id: 2,
    category: 'EdTechユニコーン',
    stage: 'toC展開',
    challenge: 'toBからtoC展開時のグロース戦略不在',
    discovery: 'ターゲットの深層ニーズとポジショニングのズレ',
    actions: ['提供価値の再定義', 'プロモーション戦略立案', '実行支援'],
    results: {
      foundation: true,
    },
    resultText: 'toC事業の立ち上げ基盤構築完了',
  },
  {
    id: 3,
    category: 'マッチングサービス',
    stage: 'シリーズA',
    challenge: 'LTV向上の打ち手が不明',
    discovery: 'マッチング率が先行指標として機能',
    actions: ['重要指標の可視化', 'プロダクト改善', 'データ分析基盤構築'],
    results: {
      cvr: { before: 100, after: 180 },
    },
    resultText: '課金CVR180%改善',
  },
] as const

// Differentiation Points
export const DIFFERENTIATORS = [
  {
    id: 1,
    title: '実行まで踏み込む',
    description: '戦略だけでなく、施策の初期設計・実装まで支援',
    details: '週1定例MTG + 重要施策の実行サポート',
    icon: 'implementation',
  },
  {
    id: 2,
    title: '再現性のあるメソッド',
    description: '3つの事業立ち上げ（最大年間流通30億円）',
    details: '2つの事業売却で実証済みの勝ちパターン',
    icon: 'method',
  },
  {
    id: 3,
    title: 'あらゆるフェーズに対応',
    description: '0→1：MVP設計、初期ユーザー獲得',
    details: '1→10：PMF後のグロース戦略、スケール',
    icon: 'phase',
  },
] as const

// Problem Points
export const PROBLEM_POINTS = [
  '施策を打っているが、どれが効いているか分からない',
  'データは豊富にあるが、次の一手が見えない',
  '競合は成長しているのに、自社の成長が鈍化している',
  '社内に実行リソースはあるが、方向性が定まらない',
] as const

// Approach Steps
export const APPROACH_STEPS = [
  {
    id: 1,
    phase: '勝ちパターンの発見',
    duration: '1-2週目',
    activities: [
      'NSM（最重要指標）の特定',
      'CVユーザーと非CVユーザーの行動差分析',
      'マジックナンバーの発見',
    ],
  },
  {
    id: 2,
    phase: '施策の優先順位付け',
    duration: '3-4週目',
    activities: [
      'LTV向上施策とCAC改善施策の整理',
      'インパクト×実現可能性マトリクス',
      'クイックウィンの特定',
    ],
  },
  {
    id: 3,
    phase: '高速PDCA実行',
    duration: '5週目〜',
    activities: [
      '週次定例での進捗確認と軌道修正',
      'SQL/スプレッドシートでの効果検証',
      '次の打ち手の具体設計',
    ],
  },
] as const

// Profile
export const PROFILE = {
  name: '柴田 吉史朗',
  title: '実行支援型グロースコンサルタント',
  education: '京都大学工学部卒',
  experience: [
    '創業メンバーとして3つの事業を立ち上げ、2事業を売却まで導いた実績',
    'BtoBtoCプラットフォーム：年間流通30億円規模の事業責任者',
    'CGM×サブスクモデル：1年で数億円規模のGMVを達成',
    '支援実績：シード〜シリーズB 8社',
  ],
} as const

// Form Options
export const FORM_OPTIONS = {
  challenges: [
    '成長が鈍化している',
    'KPIが改善しない',
    '施策の効果が不明',
    '組織・実行の課題',
    'その他',
  ],
  consultationTiming: [
    '今すぐ相談したい',
    '1ヶ月以内',
    '3ヶ月以内',
    '情報収集中',
  ],
} as const