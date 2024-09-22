import AboutMe from "./components/AboutMe";
import MenuBar from "./components/MenuBar";
import Projects from "./components/Projects";
import SocialMedia from "./components/SocialMedia";
import TitlePage from "./components/TitlePage";
import WebsiteEnd from "./components/WebsiteEnd";
import {useState} from "react";
import  handleUserCommand from "./components/scripts/ChatHelper";

function App() {
  const [titlePageStyle, setTitlePageStyle] = useState<React.CSSProperties>({});
  const [titlePageContent, setTitlePageContent] = useState<string>("welcome to my portfolio! (pls hire me pls pls pls)");
  const [aboutMeStyle, setAboutMeStyle] = useState<React.CSSProperties>({});
  const [aboutMeContent, setAboutMeContent] = useState<string>("");

  const updateStyle = (component: string, style: React.CSSProperties) => {
    console.log("updating style...");
    switch (component) {
      case 'TitlePage':
        setTitlePageStyle(style);
        console.log(titlePageStyle);
        break;
      case 'AboutMe':
        setAboutMeStyle(style);
        break;
      // Add more later
      default:
        console.warn(`Unknown component: ${component}`);
    }
  };

  const updateContent = (component: string, content: string) => {
    switch (component) {
      case 'TitlePage':
        setTitlePageContent(content);
        break;
      case 'AboutMe':
        setAboutMeContent(content);
        break;
      default:
        console.warn(`Unknown component: ${component}`);
    }
  };
  const onSend = async (message: string) => {
    console.log("sending to handle user command...");
    await handleUserCommand(message, { updateStyle, updateContent });
  };

  return (
    <div className="position-relative">
      <MenuBar onSend={onSend}/>
      <SocialMedia />
      <TitlePage style ={titlePageStyle} content={titlePageContent}/>
      <AboutMe  style ={aboutMeStyle} content={aboutMeContent}/>
      <Projects />
      <WebsiteEnd />

    </div>
  );
}
export default App;
