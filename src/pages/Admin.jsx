import ArchivedExhibitionsManager from "../components/ArchivedExhibitionsManager"
import PaintingsManager from "../components/PaintingsManager"
import ProjectsManager from "../components/ProjectsManager"
import SplashManager from "../components/SplashManager"
import UpcomingExhibitionManager from "../components/UpcomingExhibitionManager"

const Admin = () => {
  return (
    <div>
      <SplashManager />
      <ProjectsManager />
      <PaintingsManager />
      <ArchivedExhibitionsManager />
      <UpcomingExhibitionManager />
    </div>
  )
}

export default Admin;