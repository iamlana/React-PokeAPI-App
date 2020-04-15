import React, { useState } from 'react';

export function CookieNotification () {
  const [open, setOpen] = useState(() => !readDismissed())

  function dismiss () {
    saveDismissed()
    setOpen(false)
  }

  if (!open) {
    return null
  }

  return (
    <div className="cookie-notification">
      <p className="cookie-notification__text">
        This website uses cookies.
      </p>
      <button className="cookie-notification__dismiss" onClick={dismiss}>
        Got it!
      </button>
    </div>
  )
}

function readDismissed () {
  return !!localStorage.getItem('cookies-dismissed')
}

function saveDismissed () {
  localStorage.setItem('cookies-dismissed', 'true')
}
