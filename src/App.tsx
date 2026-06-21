import SiteLayout from '@/components/layout/SiteLayout'
import Home from '@/pages/Home'

export const routes = [
  {
    path: '/',
    element: <SiteLayout />,
    children: [{ index: true, element: <Home /> }],
  },
]
