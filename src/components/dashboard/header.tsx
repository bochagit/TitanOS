'use client'

import { LogoutButton } from '@/components/auth/logout-button'
import { useDashboard } from '@/contexts/dashboard-context'

export function Header() {
  const { profile } = useDashboard()

  return (
    <header className="flex h-16 items-center justify-between border-b px-6">
      <div>{profile.full_name || 'Mi Gimnasio'}</div>

      <LogoutButton />
    </header>
  )
}
