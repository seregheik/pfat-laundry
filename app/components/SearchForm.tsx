import Form from "next/form";
import SearchFormReset from "@/app/components/SearchFormReset";
import {Search} from "lucide-react"

const SearchForm = ({query}:{query : string | undefined}) => {

    return (
        <Form action="/" scroll={false}  className="search-form">
            <input
                type="text"
                name="search"
                placeholder="Search Startups... "
                className="search-input"
                defaultValue={query}
            />
            <div className="flex gap-2">
                {query && <SearchFormReset searchClassName={".search-form"}/>}
                <button type="submit" className="search-btn text-white">
                  <Search/>
                </button>
            </div>
        </Form>
    )
}
export default SearchForm
