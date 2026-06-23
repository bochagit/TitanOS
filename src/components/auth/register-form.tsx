'use client'

import { useActionState } from 'react'
import { register } from '@/actions/auth'
import Link from 'next/link'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'

export default function RegisterForm() {
  const [state, action, pending] = useActionState(register, null)

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
          <form className="space-y-4" action={action}>
            {state?.error && (
              <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">{state.error}</p>
            )}

            <div className="space-y-2">
              <Label htmlFor="fullName">Nombre completo</Label>
              <Input id="fullName" name="fullName" placeholder="John Doe" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="John@email.com" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                minLength={6}
                required
              />
            </div>

            {pending ? (
              <Button className="w-full" disabled>
                <Spinner data-icon="inline-start" />
                Creando cuenta...
              </Button>
            ) : (
              <Button className="w-full" type="submit">
                Registrarse
              </Button>
            )}

            <p className="text-muted-foreground text-center text-sm">
              ¿Ya tenés cuenta?{' '}
              <Link href="/login" className="underline underline-offset-4">
                Iniciar sesión
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}
