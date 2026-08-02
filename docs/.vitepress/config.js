export default {
  base: "/2jakti-report/",
  title: "2작티 전력분석실",
  description: "리그 오브 레전드 2작티 클랜 공식 전술 아카이브",
  themeConfig: {
    outline: {
      level: 2,
      label: "📌 2작티 전술 분석 목차"
    },
    nav: [
      { text: "홈으로", link: "/" },
      { text: "🔥 최근 80경기 분석", link: "/20260803옵젝서폿" }
    ],
    sidebar: [
      {
        text: "🏆 2작티 전술 분석 아카이브",
        items: [
          { text: "🔥 최근 80경기 최신 동향 분석", link: "/20260803옵젝서폿" }
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
