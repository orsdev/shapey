import Colors from "./Colors"
import Shapes from "./Shapes"

const Filters = () => {
  return (
    <section className="filters">
      <h3 className="filters-title">Filters</h3>
      <Shapes />
      <Colors />
    </section>
  )
}

export default Filters;
