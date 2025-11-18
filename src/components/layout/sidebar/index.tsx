'use client';

import { sidebarBottomCategories, sidebarCategories } from '@/lib/mockdata'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from '@/components/ui/textarea';
import { authService } from '@/services/auth';
import { ROUTES } from '@/routes';

function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await authService.logout();
    router.push(ROUTES.SIGN_IN);
  }
  return (
    <div className='max-w-[250px] w-full flex flex-col items-start px-[25px] pt-[30px] pb-[100px] bg-gray1'>
      <Image src={"icons/maglo-logo.svg"} alt='maglo-logo' width={120} height={30} />

      <ul className='mt-10 flex h-full flex-col gap-0.5 w-full'>
        {sidebarCategories.map((item) => {
          const activeTab = pathname === item?.url;

          return (
            <li key={item?.id}>
              <Link className={clsx(
                'max-w-[200px] w-full flex items-center justify-start gap-3 font-semibold text-sm rounded-xl py-3.5 px-[15px] hover:text-primary hover:bg-gray3',
                activeTab ? 'bg-primary-color text-primary' : 'text-secondary font-medium'
              )} href={item?.url}>
                <item.icon width={20} height={20} fill={activeTab ? '#1B212D' : '#929EAE'} />
                {item?.name}
              </Link>
            </li>
          )
        })}
      </ul>

      <Dialog>
        <form className='w-full'>
          <DialogTrigger asChild>
            <Button variant="ghost" className='h-12 cursor-pointer max-w-[200px] w-full flex text-secondary font-medium items-center justify-start gap-3 text-sm rounded-xl py-3.5 px-[15px]'>
              <Image src='icons/help.svg' alt="help" width={20} height={20} />
              Help
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Help Center</DialogTitle>
              <DialogDescription>
                How can we help you?
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" name="name" placeholder="Mahfuzul Nabil" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="message">Message</Label>
                <Textarea placeholder="Type your message here." id="message" name="message" />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="ghost" className='h-12 cursor-pointer max-w-[200px] w-full flex text-secondary font-medium items-center justify-start gap-3 text-sm rounded-xl py-3.5 px-[15px]'>
            <Image src='icons/logout.svg' alt="logout" width={20} height={20} />
            Logout
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to logout?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. Do you still want to continue?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction color='red' onClick={handleLogout}>Logout</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div >
  )
}

export default Sidebar
