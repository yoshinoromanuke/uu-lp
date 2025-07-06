'use client'

export default function SkipToContent() {
  const skipToMain = () => {
    const mainContent = document.getElementById('main-content')
    if (mainContent) {
      mainContent.focus()
      mainContent.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <button
      className="skip-to-content"
      onClick={skipToMain}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          skipToMain()
        }
      }}
    >
      メインコンテンツにスキップ
    </button>
  )
}