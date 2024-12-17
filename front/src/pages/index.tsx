import { ToastContainer } from 'react-toastify';
import FormComponent from "@/components/form-component";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="relative w-screen h-screen isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <ToastContainer />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center flex-col justify-center">
        <div className="flex items-center flex-col">
          <h2 className="text-4xl font-semibold text-white">Determine if a word is palindrome</h2>
          <p className="mt-4 text-lg text-gray-300">
            Insert word and validate if is palindrome
          </p>
          <FormComponent />
        </div>
      </div>
      <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
    </div>
  );
}
