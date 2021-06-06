const Shapes_List = ['oval', 'round', 'triangle', 'square', 'rectangle'];

const Shapes = () => {
  return (
    <section className="shapes">
      <h4 className="shapes-title">Shapes</h4>
      <ul className="shapes-type">
        {Shapes_List.map((shape, index) => (
          <li key={index}>
            <input type="checkbox" name={shape} id={shape} />
            <label htmlFor={shape} className={shape}>{shape}</label>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Shapes
