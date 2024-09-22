
interface TitlePageProps {
  style: React.CSSProperties;
  content: string;
}

function TitlePage({ style, content }: TitlePageProps) {

  return (
    <div style = {style} className="primary-theme container-sm d-flex justify-content-center align-items-center vh-100 ">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="display-3 mb-4">jason dong</h1>
          <p className="title-descripton mb-4">
            {content ||"welcome to my portfolio! (pls hire me pls pls pls)"}
          </p>
          <a href="#projects">
            <p className="btn project-button">projects</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TitlePage;
