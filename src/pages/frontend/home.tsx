import { Button } from '@/components/ui/button'
import React from 'react'

function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <h1 className="font-bold text-3xl">Vite + React + TypeScript + Shadcn UI</h1>
      <Button>Shadcn UI Button</Button>
      <Button variant="outline">Shadcn UI Button</Button>
      </div>
  )
}

export default Home