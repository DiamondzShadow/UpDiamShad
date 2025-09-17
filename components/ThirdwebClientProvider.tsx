'use client';

import { ThirdwebProvider } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import { ReactNode } from "react";

// Create the client on the client side
const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "demo-client-id",
});

export function ThirdwebClientProvider({ children }: { children: ReactNode }) {
  return (
    <ThirdwebProvider client={client}>
      {children}
    </ThirdwebProvider>
  );
}