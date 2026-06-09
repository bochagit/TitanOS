'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const supabase = createClient()
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      console.error(error)
      return
    }

    setLoading(false)

    const user = data.user
    if (!user) {
      return
    } else {
      router.push('/dashboard')
    }
  }

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
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="tu@correo.com"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            {loading ? (
              <Button className="w-full" disabled>
                <Spinner data-icon="inline-start" />
                Iniciando sesión...
              </Button>
            ) : (
              <Button className="w-full" type="submit">
                Iniciar sesión
              </Button>
            )}
          </form>
        </CardContent>
      </Card>
    </main>
  )
}
