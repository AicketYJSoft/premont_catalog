import React, { useState } from 'react'
import PremontLotionIntroPage from '@/pages/PremontLotionIntroPage.jsx'
import PremontCreamIntroPage from '@/pages/PremontCreamIntroPage.jsx'
import PremontAmpouleIntroPage from '@/pages/PremontAmpouleIntroPage.jsx'
import { Button } from '@/components/ui/button'

export default function App() {
  const [tab, setTab] = useState('lotion')
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="font-semibold">Premont React Pages</h1>
          <nav className="flex gap-2">
            <Button variant={tab==='lotion'?'default':'outline'} onClick={() => setTab('lotion')}>로션</Button>
            <Button variant={tab==='cream'?'default':'outline'} onClick={() => setTab('cream')}>크림</Button>
            <Button variant={tab==='ampoule'?'default':'outline'} onClick={() => setTab('ampoule')}>앰플</Button>
          </nav>
        </div>
      </header>
      <main>
        {tab==='lotion' && <PremontLotionIntroPage />}
        {tab==='cream' && <PremontCreamIntroPage />}
        {tab==='ampoule' && <PremontAmpouleIntroPage />}
      </main>
    </div>
  )
}