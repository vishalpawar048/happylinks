import { useEffect, useState } from "react";
import Love from "./index";
import { useRouter } from "next/router";
import { set } from "date-fns";
import { getExperiences } from "../../../service/experience";
import Link from "next/link";

export default function Modifier({
  applyText,
  save,
  msg,
  urlToShare,
  experienceId,
  setmsg
}) {
  return (
    <div>
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
