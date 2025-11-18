import { DashboardIcon, TransactionsIcon, InvoicesIcon, SettingsIcon, MyWalletsIcon } from "@/assets/icons"
import { ROUTES } from "@/routes"

export const sidebarCategories = [
  {
    id: 0,
    name: 'Dashboard',
    url: ROUTES.DASHBOARD,
    icon: DashboardIcon,
  },
  {
    id: 1,
    name: 'Transactions',
    url: ROUTES.TRANSACTIONS,
    icon: TransactionsIcon,
  },
  {
    id: 2,
    name: 'Invoices',
    url: ROUTES.INVOICES,
    icon: InvoicesIcon,
  },
  {
    id: 3,
    name: 'My Wallets',
    url: ROUTES.MY_WALLETS,
    icon: MyWalletsIcon,
  },
  {
    id: 4,
    name: 'Settings',
    url: ROUTES.SETTINGS,
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

export const transactions = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
]
