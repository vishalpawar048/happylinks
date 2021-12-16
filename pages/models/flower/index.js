import { useState } from "react";
import Scene from "./scene";
import Link from "next/link";
import { saveExperiences } from "../../../service/experience";
import Layout from "../../../components/Layout";
import Snackbar from "@mui/material/Snackbar";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function Model() {
  const [msg, setmsg] = useState("");
  const [finalMsg, setfinalMsg] = useState("Happy Birthday Sweetheart...");
  const [urlToShare, setUrlToShare] = useState("");
  const [experienceId, setExperienceId] = useState("");
  // const [copySuccess, setCopySuccess] = useState("");

  const [copySuccess, setCopySuccess] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = copySuccess;
  // const textAreaRef = useRef(null);

  async function copyToClip() {
    setCopySuccess({
      open: true,
      vertical: "bottom",
      horizontal: "center",
    });
    // console.log("newState", newState);
    await navigator.clipboard.writeText(urlToShare);
    // setCopySuccess("Copied");
  }

  const handleClose = () => {
    setCopySuccess({ ...copySuccess, open: false });
  };

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
                autoComplete="off"
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
              <label htmlFor="msg">
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
                <div className="clipboardContainer">
                  <div id="inviteCode" className="invite-page">
                    <input
                      id="link"
                      value={urlToShare}
                      onClick={copyToClip}
                      readOnly
                    ></input>
                    <Snackbar
                      anchorOrigin={{ vertical, horizontal }}
                      open={open}
                      onClose={handleClose}
                      message="URL Copied!"
                      key={vertical + horizontal}
                    />
                    {/* {copySuccess ? <div id="copy"></div> : null} */}
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
