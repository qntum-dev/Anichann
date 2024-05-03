import { META } from "@consumet/extensions";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchCard from "./SearchCard";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const anilist = new META.Anilist();
  const fetchSearchData = async () => {
    console.log("loading--------->" + loading);
    const data = await anilist.search(searchQuery);

    console.log(data);
    if (data) {
      console.log("here");
      setSearchData(data.results);
    }

    console.log("loading--------->" + loading);
  };
  async function handleSearch() {
    setLoading(true);

    await fetchSearchData();
    if (searchData) {
      console.log(searchData);
      setLoading(false);
    }
  }

  return (
    <div className="w-full lg:w-[30%] flex flex-col gap-2">
      <div className="flex gap-2">
        <input
          className="w-full h-8 pl-8 rounded-md placeholder:font-semibold placeholder:text-gray-600"
          placeholder="Search anime"
          type="text"
          value={searchQuery}
          onChange={(evt) => {
            setSearchQuery(evt.target.value);
          }}
          onKeyDown={(evt) => {
            if (evt.key === "Enter") {
              handleSearch();
              // setIsSearched(true);
              // setSearchQuery(evt.target.value);
            }
          }}
        />
        <button
          className="bg-white h-8 w-8 flex items-center justify-center rounded-md"
          onClick={() => {
            //   setIsSearched(true);

            //   setSearchQuery(evt.target.value);
            handleSearch();
          }}
        >
          <FaSearch />
        </button>
      </div>

      <div className="w-[92dvw]">
        {loading ? (
          <div className="">loading....</div>
        ) : (
          searchData && (
            <div className="overflow-x-auto custom-scrollbar p-2">
                <SearchCard searchData={searchData} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SearchBar;
