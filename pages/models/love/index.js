import { useEffect, useState } from "react";
import Scene from "./scene";
import { useRouter } from "next/router";
import { set } from "date-fns";
import Link from "next/link";
import { getExperiences, saveExperiences } from "../../../service/experience";

export default function Model() {
  console.log("In Model");
  const [msg, setmsg] = useState("");
  const [finalMsg, setfinalMsg] = useState("Happy Birthday Sweetheart...");
  const [urlToShare, setUrlToShare] = useState("");
  const [experienceId, setExperienceId] = useState("");

  function applyText(msg) {
    console.log("-------msgmsg", msg);
    setfinalMsg(msg);
    console.log("-------finalMsg", finalMsg);
  }

  async function save() {
    let id = await saveExperiences(msg, "love");
    setExperienceId(id);
    setUrlToShare(`${window.location.href}/experience?id=${id}`);
    console.log("process.env.PUBLIC_URL", window.location.href, id);
  }

  return (
    <div>
      <Scene fromExperience={false} messege={finalMsg}></Scene>
      <input
        name="msg"
        type="text"
        value={msg}
        onChange={(e) => setmsg(e.target.value)}
      />
      <button onClick={() => applyText(msg)}>Apply</button>
      <button onClick={() => save()}>Save</button>
      <div>
        <Link
          href={{
            pathname: "/models/love/experience",
            query: { id: experienceId },
          }}
        >
          <a target="_blank">{urlToShare}</a>
        </Link>
      </div>
    </div>
  );
}
