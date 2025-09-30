"use client"

import { useState } from "react";
import Image from "next/image";
import { Listbox, Transition, ListboxButton,ListboxOption,ListboxOptions} from "@headlessui/react";
import { CustomFilterProps } from "@/types";
import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/utils";

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const router= useRouter();
  const [selected, setSelected] = useState(options[0]);
  const handleUpdateParams =(e:{title:string, value:string}) =>{
    const newPathName=updateSearchParams(title,e.value.toLowerCase());

    router.push(newPathName, { scroll: false });

  }



  return (
<div className="custom-filter__wrapper" style={{ position: 'relative', display: 'inline-block' }}>
  <Listbox value={selected} 
  onChange={(e) =>{
    setSelected(e);
    handleUpdateParams(e);
  }}>
    <ListboxButton className="custom-filter__btn">
      {selected.title}
    </ListboxButton>

    <Transition
      as="div"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div style={{ position: 'absolute', top: '100%', left: 0, width: '100%', zIndex: 20 }}>
        <ListboxOptions className="custom-filter__options">
          {options.map((option) => (
            <ListboxOption
              key={option.value}
              value={option}
              className={({ active, selected }) => `
                custom-filter__option
                ${active ? 'active' : ''}
                ${selected ? 'selected' : ''}
              `}
            >
              {option.title}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Transition>
  </Listbox>
</div>

  );
};

export default CustomFilter;
