"use client";
import Image from "next/image";
import { useState, Fragment } from "react";
// import { Combobox, Transition } from "@headlessui/react";
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  Transition,
} from "@headlessui/react";
import { manufacturers } from "@/constants";
import { SearchManufacturerProps } from "@/types";

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");

  const normalizedQuery = query.toLowerCase().replace(/\s+/g, "");
  const filteredManufacturers =
    normalizedQuery === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item.toLowerCase().replace(/\s+/g, "").includes(normalizedQuery)
        );

  return (
    <div className="search-manufacturer">
   <Combobox
  value={manufacturer}
  onChange={(value) => value && setManufacturer(value)}
>


  <div className="relative" style={{ width: "100%" }}>
    <ComboboxButton className="search-manufacturer__button">
      <Image src="/car-logo.svg" width={20} height={20} alt="Car Logo" />
    </ComboboxButton>

    <ComboboxInput
      className="search-manufacturer__input"
      placeholder="Volkswagen"
      displayValue={() => manufacturer} // отображаем выбранный manufacturer
      onChange={(e) => setQuery(e.target.value)} // фильтруем список
    />

    <Transition
      as={Fragment}
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      afterLeave={() => setQuery("")}
    >
      <ComboboxOptions className="search-manufacturer__options">
        {filteredManufacturers.length === 0 ? (
          <div style={{ padding: "0.5rem 1rem", fontSize: "0.875rem", color: "#6b7280" }}>
            No results
          </div>
        ) : (
          filteredManufacturers.map((item) => (
            <ComboboxOption
              key={item}
              value={item}
              className={({ active }) => `search-manufacturer__option ${active ? "active" : ""}`}
            >
              {({ selected }) => (
                <span style={{ fontWeight: selected ? 600 : 400, display: "block" }}>
                  {item}
                </span>
              )}
            </ComboboxOption>
          ))
        )}
      </ComboboxOptions>
    </Transition>
  </div>
</Combobox>
    </div>
  );
};

export default SearchManufacturer;
