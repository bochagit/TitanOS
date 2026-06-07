export default function WaitingApprovalPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">Cuenta pendiente de activación</h1>

        <p className="text-muted-foreground">
          Tu cuenta fue creada correctamente. Un administrador debe asignarte a un gimnasio antes de
          continuar.
        </p>
      </div>
    </main>
  )
}
