'use client'

import { useActionState } from 'react'
import { login, type AuthState } from '@/actions/auth'
import Link from 'next/link'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'

export default function LoginForm() {
  const [state, formAction, pending] = useActionState<AuthState, FormData>(login, null)

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">TreinoSuite</h1>

          <p className="text-muted-foreground">
            Tus alumnos organizados.
            <br />
            Tu negocio bajo control.
          </p>
        </CardHeader>

        <CardContent>
          <form className="space-y-4" action={formAction}>
            {state?.error && (
              <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">{state.error}</p>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" placeholder="tu@correo.com" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>

            {pending ? (
              <Button className="w-full" disabled>
                <Spinner data-icon="inline-start" />
                Iniciando sesión...
              </Button>
            ) : (
              <Button className="w-full" type="submit">
                Iniciar sesión
              </Button>
            )}

            <p className="text-muted-foreground text-center text-sm">
              ¿No tenés cuenta?{' '}
              <Link href="/register" className="underline underline-offset-4 hover:no-underline">
                Registrarse
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}
