import { useState } from 'react';
import styles from "../styles/imageGallery.module.css";

interface dataProps {
  data : string[]
  pickedd : string
  onUserClick: (index: string) => void;
}

export default function FilterDropdown( {data, onUserClick, pickedd}: dataProps) {

    const [filterDropdown, setFilterdropdown] = useState(false)

  return (
    <div className={styles.dropdown}>

          <button onClick={()=> setFilterdropdown(!filterDropdown)}>
              { pickedd ? pickedd : "Filter By" }
            </button>
            {filterDropdown && <div className={styles.activeDropdown}>
              <div>
                {
                  data.map((item, index)=> (
                    <button key={index} onClick={() => (onUserClick(item), setFilterdropdown(false))}>{item}</button>
                  ))
                }
              </div>
            </div>}

        </div>
  )
}
