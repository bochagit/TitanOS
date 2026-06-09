'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const handleLogin = () => {
    router.push('/login')
  }

  const handleRegister = () => {
    router.push('/register')
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 flex-col items-center justify-between bg-white px-16 py-32 sm:items-start dark:bg-black">
        <h1 className="max-w-xs text-3xl leading-10 font-semibold tracking-tight text-black dark:text-zinc-50">
          Hola, mundo!
        </h1>

        <div className="flex flex-col justify-center gap-1">
          <Button className="w-fit" onClick={handleLogin}>
            Iniciar sesión
          </Button>

          <Button className="w-fit" onClick={handleRegister}>
            Registrarse
          </Button>
        </div>
      </main>
    </div>
  )
}
