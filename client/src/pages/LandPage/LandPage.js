import './LandPage.css'

function LandPage(){
return (
    <div className="landpage">
    <div className="cover">
      <h1>Discover what's out there.</h1>
      <h1>Make your Landpage Attractive</h1>
      <form className="flex-form">
        <label htmlFor="from">
          <i className="ion-location" />
        </label>
        <input type="search" placeholder="Where do you want to go?" />
        <input type="submit" defaultValue="Search" />
      </form>
    </div>
  </div>
)
}
export default LandPage