
const Shapes = () => {
  return (
    <section className="shapes">
      <h4 className="shapes-title">Shapes</h4>
      <ul className="shapes-type">
        <li>
          <input type="checkbox" name="oval" id="oval" />
          <label htmlFor="oval">
            Oval
          </label>
        </li>
        <li>
          <input type="checkbox" name="round" id="round" />
          <label htmlFor="round">
            Round
          </label>
        </li>
        <li>
          <input type="checkbox" name="triangle" id="triangle" />
          <label htmlFor="triangle">
            Triangle
          </label>
        </li>
        <li>
          <input type="checkbox" name="square" id="square" />
          <label htmlFor="square">
            Square
          </label>
        </li>
        <li>
          <input type="checkbox" name="rectangle" id="rectangle" />
          <label htmlFor="rectangle">
            Rectangle
          </label>
        </li>
      </ul>
    </section>
  )
}

export default Shapes
