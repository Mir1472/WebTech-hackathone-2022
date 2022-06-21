import React, { useState } from "react";
import "./AutoCompleteText.css";

const AutoCompleteText = (props) => {
  const [suggesion, setSuggesion] = useState([]);
  const [text, setText] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleKeyDown = (e) => {
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
