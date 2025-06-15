import { Outlet } from 'react-router-dom'

import Bottombar from '@/components/shared/Bottombar'
import Topbar from '@/components/shared/Topbar'

const RootLayout = () => {
  return (
    <div className="">
      <Topbar />
      <div className="">
        <section className="flex-1 h-full md:pt-0 pt-16 pb-20 px-6">
          <Outlet />
        </section>
        <Bottombar />
      </div>
      
    </div>
  )
}

export default RootLayout