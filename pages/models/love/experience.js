import { useEffect, useState } from "react";
import Love from "./index";
import { useRouter } from "next/router";
import { set } from "date-fns";
import { getExperiences } from "../../../service/experience";

export default function Experience() {
  const [messege, setMessege] = useState("");
  const router = useRouter();
  const id = router.query.id ? router.query.id : "";
  console.log("router.query", id);

  useEffect(() => {
    async function getExperiencesData() {
      if (id) {
        let data = await getExperiences(id);
        console.log("messege", data.messege);

        setMessege(data.messege);
      }
    }
    getExperiencesData(id);
  }, [id]);
  return <Love fromExperience={true} messege={messege}></Love>;
}
