// App.tsx
import './App.css'
import { Routes, Route } from 'react-router-dom'
import RootLayout from './components/_root/RootLayout'

import Home from './components/_root/pages/Home'
import NosPrestations from './components/_root/pages/NosPrestations'
import InfosUtiles from './components/_root/pages/InfosUtiles'
import ContactezNous from './components/_root/pages/ContactezNous'


import { Toaster } from './components/ui/sonner'


function App() {
  return (
    <>
      <main className="">
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/nos-prestations" element={<NosPrestations />} />
            <Route path="/infos-utiles" element={<InfosUtiles />} />
            <Route path="/contactez-nous" element={<ContactezNous />} />
          </Route>
        </Routes>
        <Toaster position="top-center" richColors />
      </main>
    </>
  )
}

export default App
