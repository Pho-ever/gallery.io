import { useState } from 'react';
import styles from "../styles/imageGallery.module.css";


type Option = {
  key: string;
  value: string;
};
interface dataProps {
  data : Option[]
  onChange: (selectedValue: string) => void;
}

export default function FilterDropdown( { data, onChange }: dataProps) {

    // const [filterDropdown, setFilterdropdown] = useState(false)
    const [selectedValue, setSelectedValue] = useState<string>('');


    // const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //   const selectedKey = event.target.value;
    //   const selectedOption = data.find(option => option.key === selectedKey);
    //   setSelectedValue(selectedOption ? selectedOption.value : '');
    // };

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      event.preventDefault()
      const value = event.target.value;
      setSelectedValue(value);
      onChange(value);
    }

  return (
    <div className={styles.dropdown}>

          {/* <button onClick={()=> setFilterdropdown(!filterDropdown)}>
              { pickedd ? pickedd : "Filter By" }
            </button>
            {filterDropdown && <div className={styles.activeDropdown}>
              <div>
                {
                  data.map((item, index)=> (
                    // eslint-disable-next-line no-sequences
                    <button key={index} onClick={() => (onUserClick(item), setFilterdropdown(false))}>{item}</button>
                  ))
                }
              </div>
            </div>} */}

                <select onChange={handleChange} value={selectedValue}>
                  {data.map(options => (
                      <option key={options.key} value={options.value}>
                      {options.key}
                    </option>
                  ))}
                </select>

        </div>
  )
}
