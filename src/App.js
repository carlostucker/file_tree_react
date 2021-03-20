import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Folder name="Desktop" isOpen={false}>
        <Folder name="Music" isOpen={false}>
          <File name="Biggie.mp3" />
          <File name="somebody_once_told_me.mp3" />
        </Folder>
        <Folder name="Images" isOpen={false}>
          <File name="dogs.png" />
          <File name="cats.png" />
        </Folder>
      </Folder>
      <Folder name="Application" />
    </div>
  );
}

const File = (props) => {
  const { name } = props;
  const fileExtension = name.split(".")[1]; //splits string into array of 2 strings before and after .

  const fileIcon = {
    mp3: "audiotrack",
    png: "image",
    mp4: "video_call",
  };

  return (
    <div>
      <span className="material-icons md-18">{fileIcon[fileExtension]}</span>
      {props.name}
    </div>
  );
};

const Folder = ({ name, isOpen, children }) => {
  const [folderOpen, setFolderOpen] = useState(false);

  const direction = folderOpen ? "arrow_drop_down" : "arrow_right";

  return (
    <div>
      <span className="folder" onClick={() => setFolderOpen(!folderOpen)}>
        <span className="material-icons md-18">folder_open</span>
        <span className="material-icons md-18">{direction}</span>
        {name}
      </span>
      {folderOpen ? <div style={{ marginLeft: "17px" }}>{children}</div> : null}
    </div>
  );
};

export default App;
