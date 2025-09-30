"use client";
import React, { useState } from "react";
import { SearchManufacturer } from "./";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type="submit" className={`search-button ${otherClasses}`}>
        <Image
            src="/magnifying-glass.svg"
            alt="magnifying glass"
            width={40}
            height={40}
            className="search-button__image"
        />
    </button>
);

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState("");
    const [model, setModel] = useState("");
    const router = useRouter();
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(manufacturer==='' && model === '') {
            return alert('Please fill in the search bar');
        }
        updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
     }

     const updateSearchParams = ( model: string, manufacturer:string) =>{
        const searchParams = new URLSearchParams(window.location.search);

        if(model){
            searchParams.set('model', model)
        } else{
            searchParams.delete('model')
        }

         if(manufacturer){
            searchParams.set('manufacturer', manufacturer)
        } else{
            searchParams.delete('manufacturer')
        }

        const newPathname=`${window.location.pathname}?${searchParams.toString()}`

        router.push(newPathname, { scroll: false });

     }

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer}
                />
                <SearchButton otherClasses="search-button--mobile" />
            </div>
            <div className="searchbar__item">
                <Image
                    src="/model-icon.png"
                    width={25}
                    height={25}
                    className="searchbar__model-icon"
                    alt="car model"
                />
                <input
                    type="text"
                    name="model"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder="Tiguan"
                    className="searchbar__input"
                />
                <SearchButton otherClasses="search-button--mobile" />
            </div>
            <SearchButton otherClasses="search-button--desktop" />
        </form>
    );
};

export default SearchBar;
