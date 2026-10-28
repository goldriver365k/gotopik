// 화면(src)과 서버 함수(netlify)가 함께 쓰는 데이터 형태

/** 비즈니스 프로필: AI 직원 모두가 공유하는 "회사 기억" */
export interface BusinessProfile {
  id: string
  name: string
  /** 무엇을 하는 회사인지 */
  description: string
  /** 주요 고객 */
  audience: string
  /** 말투·톤 */
  tone: string
  /** 꼭 지킬 규칙 (금지어, 표기법 등) */
  rules: string
  /** 대화 중에 "기억하기"로 모은 사실들 */
  memories: Memory[]
  createdAt: number
}

export interface Memory {
  id: string
  text: string
  /** 기억을 저장한 직원 id (직접 입력이면 null) */
  employeeId: string | null
  createdAt: number
}

export type Role = 'user' | 'assistant'

export interface ChatMessage {
  id: string
  role: Role
  content: string
  createdAt: number
}

export interface Conversation {
  id: string
  profileId: string
  employeeId: string
  title: string
  messages: ChatMessage[]
  updatedAt: number
}

/** /.netlify/functions/chat 요청 본문 */
export interface ChatRequest {
  employeeId: string
  profile: Pick<BusinessProfile, 'name' | 'description' | 'audience' | 'tone' | 'rules'> & { memories: string[] }
  messages: { role: Role; content: string }[]
}

export interface ChatResponse {
  reply: string
}
