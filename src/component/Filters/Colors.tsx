import React from 'react'

const Colors_List = [
  'red', 'blue', 'green', 'yellow', 'skyblue', 'gray'
];

const Colors = () => {
  return (
    <section className="colors">
      <h4 className="colors-title">Colors</h4>
      <ul className="colors-type">
        {Colors_List.map((color, index) => (
          <li key={index}>
            <input type="checkbox" name={color} id={color} />
            <label htmlFor={color} className={color} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Colors
