import { Sidebar } from '@/components/dashboard/sidebar'
import { Header } from '@/components/dashboard/header'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { DashboardProvider } from '@/contexts/dashboard-context'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const { data: profile, error: profileError } = await supabase
    .from('users')
    .select('*')
    .eq('id', user.id)
    .single()

  if (profileError || !profile) redirect('/login')

  if (profile.status === 'pending') redirect('/waiting-approval')
  if (profile.role === 'admin') redirect('/admin')

  return (
    <DashboardProvider user={user} profile={profile}>
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex flex-1 flex-col">
          <Header />

          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </DashboardProvider>
  )
}
