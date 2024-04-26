'use client'
// Framer
import {motion} from 'framer-motion';

// Icons
import { IoReturnUpBack, IoLogOutOutline  } from "react-icons/io5";

// Kinde
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";

export default function HeaderBar() {
  return (
    <div className={'grid grid-cols-5 w-full h-20 bg-zinc-800 shadow-md'}>
      {/*BREADCRUMB*/}
      <div
        className={'grid col-start-1 col-span-1 items-center h-full'}
      >
        <motion.div
          className={'grid place-content-center ml-2 w-10 h-10 stroke-white'}
          whileHover={{ scale: 0.9, stroke: '#439b32'}}
          whileTap={{ scale: 0.9, stroke: '#439b32' }}
        >
          <IoReturnUpBack fill={'white'} stroke={'white'} size={25}/>
        </motion.div>
      </div>

      {/*SEARCH*/}
      <div
        className={'grid col-start-2 col-span-3 items-center h-full w-full'}
      >
        <input
          autoComplete="off"
          enterKeyHint="search"
          type="search"
          placeholder="Search"
          className="w-full h-10 px-4 py-2 text-gray-700 bg-white border outline-none border-gray-300 rounded-full focus:ring-primary focus:border-primary shadow-sm placeholder-gray-400"
        />
      </div>

      {/*LOGOUT*/}
      <div
        className={'grid justify-end col-start-5 col-span-1 items-center h-full'}
      >
        <motion.div
          className={'grid place-content-center mr-2 w-10 h-10 stroke-white'}
          whileHover={{ scale: 0.9, stroke: '#439b32'}}
          whileTap={{ scale: 0.9, stroke: '#439b32' }}
        >
          <LogoutLink>
            <IoLogOutOutline  fill={'white'} stroke={'white'} size={25}/>
          </LogoutLink>
        </motion.div>
      </div>
    </div>
  );
}