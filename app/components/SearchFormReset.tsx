"use client"

import Link from "next/link";

const SearchFormReset = ({searchClassName}:{searchClassName : string}) => {
    function handleReset() {
        const form = document.querySelector(searchClassName) as HTMLFormElement;
        if (form) {form.reset()}
    }
    return (
        <button onClick={handleReset}>
            <Link href="/" className="search-btn text-white">X</Link>
        </button>
    )
}
export default SearchFormReset
