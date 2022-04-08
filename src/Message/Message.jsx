import "./Message.css";
import PropTypes from "prop-types";
import DOMpurify from "dompurify";
import { Editor } from "tinymce";

function Message({ text }) {
  // const {heading,canTravel,cannotTravelHeading} = props
  return (
    <div className="message">
      <div dangerouslySetInnerHTML={{ __html: DOMpurify.sanitize(text) }} />
      {/* <p>{text}</p> */}
    </div>
  );
}
// Message.defaultProps = {
//     customClassName: 'Message-class',
//   }

Message.propTypes = {
  customClassName: PropTypes.string,
};

export default Message;
