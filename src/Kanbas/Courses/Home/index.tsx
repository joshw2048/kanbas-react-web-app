import ModuleList from "../Modules/list";
import Status from "./status";


function Home() {
  return (
    <div className="d-flex">
        <div className="me-5">
            <ModuleList />
        </div>
        <div>
            <Status />
        </div>
    </div>
  );
}


export default Home;