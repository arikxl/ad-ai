import { LayoutDashboard, Settings2Icon, Video, Videotape, WalletCards } from 'lucide-react'


export const menuOptions = [
    {
        title: 'Dashboard',
        icon: LayoutDashboard,
        path: '/workspace'
    },
    {
        title: 'Create Ad',
        icon: Video,
        path: '/workspace/create-ad'
    },
    {
        title: 'My Videos',
        icon: Videotape,
        path: '/workspace/my-videos'
    },
    {
        title: 'Billing',
        icon: WalletCards,
        path: '/workspace/billing'
    },
    {
        title: 'Settings',
        icon: Settings2Icon,
        path: '/workspace/settings'
    }
]