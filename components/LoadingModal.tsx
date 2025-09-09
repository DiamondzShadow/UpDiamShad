"use client";

import { Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { useLoading } from "@/hooks/useLoading";

export default function LoadingModal() {
  const { isLoading, loadingMessage, loadingTitle } = useLoading();

  return (
    <Dialog open={isLoading} onOpenChange={() => {}}>
      <DialogContent className="bg-black border-gray-800 text-white max-w-sm">
        <div className="flex flex-col items-center justify-center py-8">
          <Loader2 className="h-12 w-12 text-purple-400 animate-spin mb-4" />
          <h3 className="text-lg font-semibold mb-2">
            {loadingTitle || "Loading"}
          </h3>
          <p className="text-gray-400 text-center text-sm">
            {loadingMessage || "Please wait..."}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
