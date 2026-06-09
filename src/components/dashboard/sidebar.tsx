import Link from 'next/link'

export function Sidebar() {
  return (
    <aside className="w-64 border-r">
      <div className="p-6">
        <h2 className="font-heading text-xl font-bold">TreinoSuite</h2>
      </div>

      <nav className="flex flex-col gap-2 px-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/students">Alumnos</Link>
        <Link href="/payments">Pagos</Link>
        <Link href="/settings">Configuración</Link>
      </nav>
    </aside>
  )
}
