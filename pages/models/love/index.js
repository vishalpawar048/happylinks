import { useState } from "react";
import Scene from "./scene";
import Link from "next/link";
import { saveExperiences } from "../../../service/experience";
import Layout from "../../../components/Layout";

export default function Model() {
  const [msg, setmsg] = useState("");
  const [finalMsg, setfinalMsg] = useState("Happy Birthday Sweetheart...");
  const [urlToShare, setUrlToShare] = useState("");
  const [experienceId, setExperienceId] = useState("");

  function applyText(msg) {
    setfinalMsg(msg);
  }

  async function save() {
    let id = await saveExperiences(msg, "love");
    setExperienceId(id);
    setUrlToShare(`${window.location.href}/experience?id=${id}`);
    console.log("process.env.PUBLIC_URL", window.location.href, id);
  }

  return (
    <div>
      <Layout>
        <Scene messege={finalMsg}></Scene>
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
      </Layout>
    </div>
  );
}
