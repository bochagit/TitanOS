import { Card } from '@/components/ui/card'

export function DashboardOverview() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <Card className="p-6">Alumnos</Card>
      <Card className="p-6">Pagos</Card>
      <Card className="p-6">Rutinas</Card>
      <Card className="p-6">Vencimientos</Card>
    </div>
  )
}
