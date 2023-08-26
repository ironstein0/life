'use client';

import DefaultUrqlProvider from "@/components/UrqlProvider";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <DefaultUrqlProvider>
      {children}
    </DefaultUrqlProvider>
  );
}