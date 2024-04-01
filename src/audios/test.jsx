/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

function test() {
  return (
    <div>
      <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1631817333&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
        <a
          href="https://soundcloud.com/merlin-backus"
          title="Merlin Backus"
          target="_blank"
          style="color: #cccccc; text-decoration: none;" rel="noreferrer"
        >
          Merlin Backus
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/merlin-backus/needs-now-is-love"
          title="Needs Now Is Love"
          target="_blank"
          style="color: #cccccc; text-decoration: none;" rel="noreferrer"
        >
          Needs Now Is Love
        </a>
      </div>
    </div>
  );
}

export default test;
