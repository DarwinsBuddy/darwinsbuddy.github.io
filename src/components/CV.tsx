import cvData from '../assets/data.json'
type CV = {
  id: number,
  title: string,
  cover: string,
  author: string
}
export function CV() {
  return (
    <div className="container">
      <div className="cv">
        {cvData.map((cv: CV) =>
          <div className="card" key={cv.id}>
            <img src={cv.cover} alt="" />
            <div className="details">
              <h2>{cv.title}</h2>
              <h4>{cv.author}</h4>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}