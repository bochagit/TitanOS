'use client'

import { createContext, useContext } from 'react'
import type { User } from '@supabase/supabase-js'

type Profile = {
  id: string
  full_name: string | null
  email: string | null
  status: string
  role: string
  gym_id: string | null
}

type DashboardContextType = {
  user: User
  profile: Profile
}

const DashboardContext = createContext<DashboardContextType | null>(null)

export function DashboardProvider({
  children,
  user,
  profile,
}: {
  children: React.ReactNode
  user: User
  profile: Profile
}) {
  return <DashboardContext.Provider value={{ user, profile }}>{children}</DashboardContext.Provider>
}

export function useDashboard() {
  const context = useContext(DashboardContext)
  if (!context) throw new Error('useDashboard must be used within DashboardProvider')
  return context
}
