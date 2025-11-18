import { DashboardIcon, TransactionsIcon, InvoicesIcon, SettingsIcon, MyWalletsIcon } from "@/assets/icons"

export const sidebarCategories = [
  {
    id: 0,
    name: 'Dashboard',
    url: '/dashboard',
    icon: DashboardIcon,
  },
  {
    id: 1,
    name: 'Transactions',
    url: '/dashboard/transactions',
    icon: TransactionsIcon,
  },
  {
    id: 2,
    name: 'Invoices',
    url: '/dashboard/invoices',
    icon: InvoicesIcon,
  },
  {
    id: 3,
    name: 'My Wallets',
    url: '/dashboard/my-wallets',
    icon: MyWalletsIcon,
  },
  {
    id: 4,
    name: 'Settings',
    url: '/dashboard/settings',
    icon: SettingsIcon,
  },
]

export const sidebarBottomCategories = [
  {
    id: 0,
    name: 'Help',
    icon: 'help',
  },
  {
    id: 1,
    name: 'Logout',
    icon: 'logout',
  },
]
