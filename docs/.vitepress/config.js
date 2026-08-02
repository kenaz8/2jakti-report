export default {
  base: "/2jakti-report/",
  title: "2작티 전력분석실",
  description: "리그 오브 레전드 2작티 클랜 공식 전술 아카이브",
  themeConfig: {
    outline: {
      level: [2, 3],
      label: "📌 질문 및 분석 목차"
    },
    nav: [
      { text: "홈으로", link: "/" },
      { text: "🔥 최근 80경기 분석", link: "/report80" },
      { text: "📊 60경기 종합 분석", link: "/clan-profile" }
    ],
    sidebar: [
      {
        text: "📊 종합 전적 리포트",
        items: [
          { text: "🔥 최근 80경기 최신 동향 분석", link: "/report80" },
          { text: "60게임 클랜 종합 분석", link: "/clan-profile" }
        ]
      },
      {
        text: "🚨 심화 전술 진단",
        items: [
          { text: "235게임 역전 불가 성향 진단", link: "/comeback-inability" }
        ]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/kenaz8/2jakti-report" }
    ],
    footer: {
      message: "2작티 전력분석팀 수석 분석관 브리핑",
      copyright: "Copyright © 2026-present 2Jakti Clan"
    }
  }
}
