// import React from "react";
// import "./AutoCompleteText.css";

// export default class AutoCompleteText extends React.Component {

//   const [suggesion, setSuggesion] = useState([]);
//   const [text, setText] = useState("");
//   const [selectedIndex, setSelectedIndex] = useState(0)

//  const handleKeyDown = (e) => {
//     // const { SelectedIndex, suggesions } = this.state;

//     if (e.keyCode === 40 && SelectedIndex !== suggesions.length - 1) {
//       // down key
//       setSelectedIndex(SelectedIndex + 1);
//     } else if (e.keyCode === 38 && SelectedIndex !== 0) {
//       // up key
//       setSelectedIndex(SelectedIndex - 1);
//     } else if (e.keyCode === 27) {
//       // escape key
//       setSuggesion([]);
//       setText("")
//       setSelectedIndex(0);
//     } else if (e.keyCode === 13) {
//       // enter key
//       if (e.target.value !== "") {
//         suggestionSelected(suggesions[SelectedIndex]);
//       }
//     }
//   };

//   onTextChanged = (e) => {
//     const { items } = this.props;
//     const value = e.target.value;
//     let suggesions = [];
//     if (value.length > 0) {
//       const regex = new RegExp(`${value}`, "i");
//       suggesions = items.sort().filter((c) => regex.test(c.title));
//     }
//     this.setState(() => ({ suggesions, text: value, SelectedIndex: 0 }));
//   };

//   const suggestionSelected = (value) => {
//     this.props.setCourse(value);
//     setSuggesion([]);
//       setText("")
//   }

//   const renderSuggestion = () => {
//     // const { suggesions, SelectedIndex } = this.state;

//     if (suggesions.length === 0) {
//       return null;
//     }

//     return (
//       <ul>
//         {suggesions.map((item, i) => (
//           <li
//             key={i}
//             onClick={() => suggestionSelected(item)}
//             className={i === SelectedIndex ? "selected" : ""}
//           >
//             {item.title}
//           </li>
//         ))}
//       </ul>
//     );
//   }

//   render() {
//     // const { text } = this.state;
//     // const { handleKeyDown } = this;
//     return (
//       <div className="AutoCompleteText">
//         <input
//           value={text}
//           onChange={this.onTextChanged}
//           onKeyDown={handleKeyDown}
//           type="text"
//           style={{ width: "350px" }}
//         />
//         {renderSuggestion()}
//       </div>
//     );
//   }
// }

import React, { useState } from "react";
import "./AutoCompleteText.css";

const AutoCompleteText = (props) => {
  const [suggesion, setSuggesion] = useState([]);
  const [text, setText] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleKeyDown = (e) => {
    // const { SelectedIndex, suggesions } = this.state;

    if (e.keyCode === 40 && selectedIndex !== suggesion.length - 1) {
      // down key
      setSelectedIndex(selectedIndex + 1);
    } else if (e.keyCode === 38 && selectedIndex !== 0) {
      // up key
      setSelectedIndex(selectedIndex - 1);
    } else if (e.keyCode === 27) {
      // escape key
      setSuggesion([]);
      setText("");
      setSelectedIndex(0);
    } else if (e.keyCode === 13) {
      // enter key
      if (e.target.value !== "") {
        suggestionSelected(suggesion[selectedIndex]);
      }
    }
  };

  const onTextChanged = (e) => {
    const { items } = props;
    const value = e.target.value;
    let suggesions = [];
    if (value.length > 0) {
      const regex = new RegExp(`${value}`, "i");
      suggesions = items.sort().filter((c) => regex.test(c.title));
    }
    setSuggesion(suggesions);
    setText(value);
    setSelectedIndex(0);
  };

  const suggestionSelected = (value) => {
    props.setCourse(value);
    setSuggesion([]);
    setText("");
  };

  const renderSuggestion = () => {
    // const { suggesions, SelectedIndex } = this.state;

    if (suggesion.length === 0) {
      return null;
    }

    return (
      <ul>
        {suggesion.map((item, i) => (
          <li
            key={i}
            onClick={() => suggestionSelected(item)}
            className={i === selectedIndex ? "selected" : ""}
          >
            {item.title}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="AutoCompleteText">
      <input
        value={text}
        onChange={onTextChanged}
        onKeyDown={handleKeyDown}
        type="text"
        style={{ width: "350px" }}
      />
      {renderSuggestion()}
    </div>
  );
};

export default AutoCompleteText;
