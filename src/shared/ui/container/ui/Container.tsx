'use client'
import { FC, PropsWithChildren } from 'react';

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-[100%] max-w-screen-xl mx-auto px-4">
      {children}
    </div>
  )
};