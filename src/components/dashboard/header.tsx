import { LogoutButton } from '@/components/auth/logout-button'

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b px-6">
      <div>Tu Gimnasio</div>

      <LogoutButton />
    </header>
  )
}
