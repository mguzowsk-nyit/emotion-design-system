import React from 'react'
import './DownloadButton.css'

type DownloadButtonProps = {
  href?: string
  filename?: string
  onClick?: () => void
  children?: React.ReactNode
  ariaLabel?: string
  disabled?: boolean
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  href,
  filename = 'download',
  onClick,
  children,
  ariaLabel,
  disabled = false,
}) => {
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return
    if (onClick) onClick()

    if (href) {
      try {
        const res = await fetch(href)
        const blob = await res.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = filename
        document.body.appendChild(a)
        a.click()
        a.remove()
        window.URL.revokeObjectURL(url)
      } catch (err) {
        // keep failure silent; consumer can pass onClick to handle errors
        // still log for developer visibility
        // eslint-disable-next-line no-console
        console.error('Download failed', err)
      }
    }
  }

  const label = children ?? ariaLabel ?? filename

  return (
    <button
      type="button"
      className={`download-button download-button--primary`}
      onClick={handleClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      <span className="download-button__icon" aria-hidden="true">⬇︎</span>
      <span className="download-button__label">{label}</span>
    </button>
  )
}

export default DownloadButton
