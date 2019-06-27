import React, { Component } from "react";
import "./Die.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix
} from "@fortawesome/free-solid-svg-icons";
const icons = [
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix
];

class Die extends Component {
  static defaultProps = {
    val: 6
  };
  lock = () => {
    this.props.handleClick(this.props.idx);
  };
  render() {
    const { val, locked, isRolling, disabled } = this.props;
    const rolling = isRolling ? "Die-rolling" : "";
    return (
      <FontAwesomeIcon
        icon={icons[val - 1]}
        size="4x"
        className={locked ? "Die Die-locked" : `Die ${rolling}`}
        onClick={isRolling ? null : this.lock}
        disabled={disabled}
      />
    );
  }
}

export default Die;
