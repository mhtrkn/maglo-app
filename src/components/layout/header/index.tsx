"use client";

import { NotificationIcon, SearchIcon } from "@/assets/icons";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { useUserData } from "@/hooks/useUserData";
import { RefreshCcwIcon } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"

function Header() {
  const pathname = usePathname();
  const tabName = pathname.split('/').filter(Boolean).pop();
  const { user } = useUserData();

  return (
    <div className='w-full flex flex-row items-center md:max-w-[1110px]'>
      <h2 className='text-base md:text-[25px] font-semibold text-primary capitalize'>
        {tabName}
      </h2>

      <div className='flex-1 w-full flex items-center justify-end gap-2 md:gap-[45px]'>
        <Dialog>
          <DialogTrigger className="cursor-pointer">
            <SearchIcon />
          </DialogTrigger>
          <DialogContent className="min-h-80 flex flex-col">
            <DialogTitle>
              <Label htmlFor="search" className="text-sm font-medium text-primary">Search</Label>
            </DialogTitle>
            <Input id="search" name="search" type="search" placeholder="Search anything what you want.." className="-mt-2" />
            <Separator className="w-full mt-2" />
            <div>
              <span className="text-sm font-medium text-primary">
                Recent Searches
              </span>
              <div className="flex w-full flex-wrap gap-2 mt-2 p-0">
                <Badge variant="outline">Dashboard</Badge>
                <Badge variant="outline">Transactions</Badge>
                <Badge variant="outline">Invoices</Badge>
                <Badge variant="outline">My Wallet</Badge>
                <Badge variant="outline">Settings</Badge>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Popover>
          <PopoverTrigger asChild className="cursor-pointer">
            <NotificationIcon />
          </PopoverTrigger>
          <PopoverContent className="w-80 absolute -right-5 p-0">
            <Empty className="from-muted/50 to-background h-full bg-linear-to-b from-30%">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <NotificationIcon />
                </EmptyMedia>
                <EmptyTitle>No Notifications</EmptyTitle>
                <EmptyDescription>
                  You&apos;re all caught up. New notifications will appear here.
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <Button variant="outline" size="sm">
                  <RefreshCcwIcon />
                  Refresh
                </Button>
              </EmptyContent>
            </Empty>
          </PopoverContent>
        </Popover>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center justify-center gap-1 md:gap-3 md:gap-7 bg-gray1 py-1.5 h-full px-2 md:pl-[7px] md:pr-[15px] rounded-full">
              <div className="flex items-center gap-0 md:gap-3">
                <Image src={"/images/profile-photo.png"} alt="" width={36} height={36} />
                <span className="font-semibold text-xs md:text-sm text-primary">
                  <span className="hidden md:block">
                    {user?.data?.fullName}
                  </span>
                </span>
              </div>
              <Image src={"icons/dropdown.svg"} width={17} height={17} alt="" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-fit md:w-56" align="start">
            <DropdownMenuLabel className="hidden md:block">{user?.data?.email}</DropdownMenuLabel>
            <DropdownMenuLabel className="block md:hidden">{user?.data?.fullName}</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Transactions
              </DropdownMenuItem>
              <DropdownMenuItem>
                Invoices
              </DropdownMenuItem>
              <DropdownMenuItem>
                My Wallets
              </DropdownMenuItem>
              <DropdownMenuItem>
                Settings
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default Header
