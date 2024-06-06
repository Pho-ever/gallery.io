import { useState } from 'react';
import styles from "../styles/imageGallery.module.css";

export default function FilterDropdown() {

    const [filterDropdown, setFilterdropdown] = useState(false)

  return (
    <div className={styles.dropdown}>
          <button onClick={()=> setFilterdropdown(!filterDropdown)}>
              Filter
            </button>

            { filterDropdown && <div className={styles.activeDropdown}>
              <p>hello</p>
              <p>hello</p>
              <p>hello</p>
              <p>hello</p>
            </div>}
        </div>
  )
}
