import './Renderer.css';

export const Renderer = ({html, css}) => {

  return <>
    <div id='ncwb-renderer'>
      <style dangerouslySetInnerHTML={{ __html: css }}></style>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  </>
}
