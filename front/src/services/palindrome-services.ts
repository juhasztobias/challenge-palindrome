import axios from "axios";

const palindromeServices = (str: string) => axios.post(
    process.env.NEXT_PUBLIC_BACK_URL + "/palindrome",
    {
        word: str
    }
);

export default palindromeServices;