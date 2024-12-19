import usePalindrome from "@/hooks/use-palindrome";
import palindromeServices from "@/services/palindrome-services";
import React, { useState } from "react"
import { toast } from "react-toastify";

const FormComponent = () => {
    const [word, setWord] = useState("");
    const { handleSubmit, isLoading } = usePalindrome();

    return (
        <form className="mt-6 flex max-w-md gap-x-4" onSubmit={handleSubmit}>
            <label htmlFor="word" className="sr-only">
                Word
            </label>
            <input
                id="word"
                name="word"
                type="text"
                required
                value={word}
                onChange={(e) => setWord(e.target.value)}
                placeholder="Enter word"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
            <button
                disabled={isLoading}
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
                Verify
            </button>
        </form>
    )
}
export default FormComponent