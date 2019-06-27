import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
  render() {
    const { name, rule, score, doScore } = this.props;
    const disabled = score !== undefined;
    const rowClass = disabled ? "RuleRow-disabled" : "RuleRow-active";
    return (
      <tr className={`RuleRow ${rowClass}`} onClick={disabled ? null : doScore}>
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{disabled ? score : rule}</td>
      </tr>
    );
  }
}

export default RuleRow;
