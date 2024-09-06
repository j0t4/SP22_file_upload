"use client"
import Image from "next/image";
import useSPPnP from './components/useSPPnP';
import FileUploader from "./components/file_uplader"
export default function Home() {

  const { userProfile } = useSPPnP();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <FileUploader /> 
        <>{`Hello ${userProfile?.Title}`}</>
      </main>
    </div>
  );
}
