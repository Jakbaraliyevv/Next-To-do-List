"use client";
import { FormData } from "@/components/form";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const [show, setShow] = useState(true);
  const router = useRouter();

  return (
    <AlertDialog open={show}>
      <AlertDialogContent>
        <button
          onClick={() => {
            setShow(false);
            router.back();
          }}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X className="!w-[2em] !h-[2em]" />
        </button>

        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            <FormData />
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default Login;
