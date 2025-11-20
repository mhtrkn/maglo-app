'use client';

import { HelpIcon, LogoutIcon, MagloIcon } from '@/assets/icons';
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
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from '@/components/ui/textarea';
import { sidebarCategories } from '@/lib/mockdata';
import { ROUTES } from '@/routes';
import { authService } from '@/services/auth';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await authService.logout();
    router.push(ROUTES.SIGN_IN);
  }
  return (
    <div className='max-w-[250px] w-fit md:w-full flex flex-col items-center md:items-start px-1 md:px-[25px] pt-3 md:pt-[30px] md:pb-[100px] bg-gray1'>
      <span className='hidden md:block'>
        <MagloIcon />
      </span>

      <ul className='md:mt-10 flex h-full flex-col gap-3 md:gap-0.5 w-fit md:w-full'>
        {sidebarCategories.map((item) => {
          const activeTab = pathname === item?.url;

          return (
            <li key={item?.id}>
              <Link className={clsx(
                'max-w-[200px] w-fit md:w-full flex items-center justify-start gap-3 text-sm rounded-full md:rounded-xl p-2 md:py-3.5 md:px-[15px] hover:text-primary hover:bg-gray3',
                activeTab ? 'bg-primary-color font-semibold text-primary' : 'text-secondary font-medium'
              )} href={item?.url}>
                <item.icon width={20} height={20} fill={activeTab ? '#1B212D' : '#929EAE'} />
                <span className='hidden md:block'>
                  {item?.name}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>

      <Dialog>
        <form className='w-fit md:w-full'>
          <DialogTrigger asChild>
            <div className='md:h-12 cursor-pointer max-w-[200px] w-fit md:w-full flex text-secondary font-medium items-center justify-start gap-3 text-sm rounded-xl p-2.5 md:py-3.5 md:px-[15px]'>
              <HelpIcon />
              <span className='hidden md:block'>
                Help
              </span>
            </div>
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
                <Button asChild variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div className='md:h-12 cursor-pointer max-w-[200px] w-fit md:w-full flex text-secondary font-medium items-center justify-start gap-3 text-sm rounded-xl p-2.5 md:py-3.5 md:px-[15px]'>
            <LogoutIcon />
            <span className='hidden md:block'>Logout</span>
          </div>
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
