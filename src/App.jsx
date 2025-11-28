import { useEffect, useState } from "react";
import Filter from "./components/filter/Filter";
import Lists from "./components/list/Lists";
import Navbar from "./components/navbar/Navbar";
import Error from "./error/Error";
import useGetApi from "./hooks/useGetApi";
import Loading from "./loading/Loading";

function App() {
  const { data, error, loading } = useGetApi();
  const [skill, setSkill] = useState([]);
  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    if (!skill.length) {
      setAllJobs(data);
    } else {
      setAllJobs(
        data.filter((job) => {
          return skill.every((s) => job.skills.includes(s));
        })
      );
    }
  }, [data, skill.length]);

  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <main className="container pt-[77px] pb-[120px] relative">
        {skill.length > 0 && <Filter skill={skill} setSkill={setSkill} />}
        <Lists data={allJobs} setSkill={setSkill} />
      </main>
    </>
  );
}

export default App;
