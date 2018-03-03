import React from "react";
import { css } from "emotion";
export default function Minecraft() {
  return (
    <div
      className={css`
        display: flex;
      `}
    >
      <h1>About My Minecraft account</h1>
      <section>
        <img
          src="https://pm1.narvii.com/5800/751c8d132d5d45829c5910c728eb708ba1cc1db6_hq.jpg"
          width="70"
        />
        <div>Rank</div>{" "}
        <p>
          My Rank in the minecraft server hypixel is MVP+. You can fly around
          the lobby and have lots of cool gadlets and animatied hats for free.
          Also, you get discount for your Craft Mystery Boxes.
        </p>
        <div>Name</div>{" "}
        <p>
          My Minecraft username is Jinnyy. You can use this to party me or
          friend request me.
        </p>
        <img
          src="https://i.ytimg.com/vi/AyWOqZfBSBo/maxresdefault.jpg"
          width="100"
        />
        <div>Resource Pack</div> <p>Two of my cool texture packs.</p>{" "}
        <a href="https://www.youtube.com/redirect?event=video_description&v=be05e-dUIUo&redir_token=-dfCzV6vJtP7Fe_pDDKMKTa5Xst8MTUxMDcyNjY1NkAxNTEwNjQwMjU2&q=http%3A%2F%2Fwww.mediafire.com%2Ffile%2Fdt1ahcg65ccb7rr%2F%25C2%25A7bDynamic%2B%25C2%25A77Duo%2B%25C2%25A78Revamp%2B%25C2%25A78%255B%25C2%25A7732x%25C2%25A78%255D.zip ">
          1. Dynamic Duo pack
        </a>
        <a href="https://www.youtube.com/watch?v=_LFws3ZQJrI ">
          2. Time Deo's pack
        </a>
      </section>
      <section
        className={css`
          background: white;
          width: 30%;
          margin-left: 1rem;
          display: flex;
          color: purple;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
        `}
      >
        <div>
          <img src="https://minecraft.net/static/pages/img/servers/servers-hub-3.3048acef5b82.png" />
        </div>
      </section>
    </div>
  );
}
