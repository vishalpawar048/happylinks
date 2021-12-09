import { useState } from "react";
import Scene from "./scene";
import Link from "next/link";
import { saveExperiences } from "../../../service/experience";
import Layout from "../../../components/Layout";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

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
        <Scene type={"model"} messege={finalMsg}></Scene>
        <div style={{ margin: "30px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {/* <input
              name="msg"
              type="text"
              value={msg}
              onChange={(e) => setmsg(e.target.value)}
            /> */}
            <div style={{ marginBottom: "30px" }}>
              <input
                type="text"
                name="name"
                className="question"
                id="nme"
                value={msg}
                onChange={(e) => setmsg(e.target.value)}
                autocomplete="off"
              />
              {/* <label for="nme">
                <span>What's your name?</span>
              </label>
              <textarea
                name="message"
                rows="2"
                className="question"
                id="msg"
                required
                autocomplete="off"
              ></textarea> */}
              <label for="msg">
                <span>What's your message?</span>
              </label>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="button button3d" onClick={() => applyText(msg)}>
              Apply
            </button>
            <button className="button button3d" onClick={() => save()}>
              Save
            </button>
          </div>

          {experienceId ? (
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div class="clipboardContainer">
                  <div id="inviteCode" class="invite-page">
                    <input
                      id="link"
                      value="https://staging.revolutioncredit.com/signupc/VprfEgvNdGuDLdAWBqi7iWAFoxKKpg_yg0hqNGBd2PU?eTypeId=44"
                    ></input>
                    <div id="copy">
                      <ContentCopyIcon></ContentCopyIcon>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "30px",
                }}
              >
                <Link
                  href={{
                    pathname: "/models/love/experience",
                    query: { id: experienceId },
                  }}
                >
                  <a target="_blank" className="button">
                    Visit
                  </a>
                </Link>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </Layout>
    </div>
  );
}
