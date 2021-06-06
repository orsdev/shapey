import React from 'react'

const Colors = () => {
  return (
    <section className="colors">
      <h4 className="colors-title">Colors</h4>
      <ul className="colors-type">
        <li>
          <input type="checkbox" name="red" id="red" />
          <label htmlFor="red" className="red" />
        </li>
        <li>
          <input type="checkbox" name="blue" id="blue" />
          <label htmlFor="blue" className="blue" />
        </li>
        <li>
          <input type="checkbox" name="green" id="green" />
          <label htmlFor="green" className="green" />
        </li>
        <li>
          <input type="checkbox" name="yellow" id="yellow" />
          <label htmlFor="yellow" className="yellow" />
        </li>
        <li>
          <input type="checkbox" name="skyblue" id="skyblue" />
          <label htmlFor="skyblue" className="skyblue" />
        </li>
        <li>
          <input type="checkbox" name="gray" id="gray" />
          <label htmlFor="gray" className="gray" />
        </li>
      </ul>
    </section>
  )
}

export default Colors
