'use client'

import { logout } from '@/actions/auth'
import { Button } from '@/components/ui/button'

export function LogoutButton() {
  return (
    <form action={logout}>
      <Button variant="destructive">Cerrar sesión</Button>
    </form>
  )
}
