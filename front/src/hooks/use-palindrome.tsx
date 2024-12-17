import palindromeServices from "@/services/palindrome-services";
import { useState, FormEvent } from "react";
import { toast } from "react-toastify";

const usePalindrome = () => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // @ts-expect-error
        const str = event.target.word.value;

        setLoading(true);
        try {
            const { data } = await palindromeServices(str);
            if (data.isPalindrome) {
                toast(`The word ${str} is palindrome`, { type: "success" })
            } else {
                toast(`The word ${str} isn't palindrome`, { type: "error" })
            }
        } catch (error) {
            toast("Error", { type: "error" })
        }
    }

    return {
        isLoading,
        error,
        handleSubmit
    }
}

export default usePalindrome;