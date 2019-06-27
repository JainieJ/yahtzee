import React, { Component } from "react";
import RuleRow from "./RuleRow";
import "./ScoreTable.css";
import {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance
} from "./Rules";

class ScoreTable extends Component {
  calculateTotal = () => {
    let validValues = [];
    for (let key in this.props.scores) {
      if (this.props.scores[key] !== undefined) {
        validValues.push(this.props.scores[key]);
      }
    }
    return validValues.length === 0
      ? 0
      : validValues.reduce((acc, curr) => acc + curr);
  };
  render() {
    const { scores, doScore } = this.props;
    return (
      <div className="container-fluid">
        <div className="row mx-3">
          <div className="ScoreTable col mx-auto">
            <section className="ScoreTable-section">
              <h2>Upper</h2>
              <table cellSpacing="0">
                <tbody>
                  <RuleRow
                    name="Ones"
                    rule="1 point per 1"
                    score={scores.ones}
                    doScore={evt => doScore("ones", ones.evalRoll)}
                  />
                  <RuleRow
                    name="Twos"
                    rule="2 points per 2"
                    score={scores.twos}
                    doScore={evt => doScore("twos", twos.evalRoll)}
                  />
                  <RuleRow
                    name="Threes"
                    rule="3 points per 3"
                    score={scores.threes}
                    doScore={evt => doScore("threes", threes.evalRoll)}
                  />
                  <RuleRow
                    name="Fours"
                    rule="4 points per 4"
                    score={scores.fours}
                    doScore={evt => doScore("fours", fours.evalRoll)}
                  />
                  <RuleRow
                    name="Fives"
                    rule="5 points per 5"
                    score={scores.fives}
                    doScore={evt => doScore("fives", fives.evalRoll)}
                  />
                  <RuleRow
                    name="Sixes"
                    rule="6 points per 6"
                    score={scores.sixes}
                    doScore={evt => doScore("sixes", sixes.evalRoll)}
                  />
                </tbody>
              </table>
            </section>
            <section className="ScoreTable-section ScoreTable-section-lower">
              <h2>Lower</h2>
              <table cellSpacing="0">
                <tbody>
                  <RuleRow
                    name="Three of Kind"
                    rule="Sum all dice if 3 are the same"
                    score={scores.threeOfKind}
                    doScore={evt =>
                      doScore("threeOfKind", threeOfKind.evalRoll)
                    }
                  />
                  <RuleRow
                    name="Four of Kind"
                    rule="Sum all dice if 4 are the same"
                    score={scores.fourOfKind}
                    doScore={evt => doScore("fourOfKind", fourOfKind.evalRoll)}
                  />
                  <RuleRow
                    name="Full House"
                    rule="25 points for a full house"
                    score={scores.fullHouse}
                    doScore={evt => doScore("fullHouse", fullHouse.evalRoll)}
                  />
                  <RuleRow
                    name="Small Straight"
                    rule="30 points for a small straight"
                    score={scores.smallStraight}
                    doScore={evt =>
                      doScore("smallStraight", smallStraight.evalRoll)
                    }
                  />
                  <RuleRow
                    name="Large Straight"
                    rule="40 points for a large straight"
                    score={scores.largeStraight}
                    doScore={evt =>
                      doScore("largeStraight", largeStraight.evalRoll)
                    }
                  />
                  <RuleRow
                    name="Yahtzee"
                    rule="50 points for yahtzee"
                    score={scores.yahtzee}
                    doScore={evt => doScore("yahtzee", yahtzee.evalRoll)}
                  />
                  <RuleRow
                    name="Chance"
                    rule="Sum of all dice"
                    score={scores.chance}
                    doScore={evt => doScore("chance", chance.evalRoll)}
                  />
                </tbody>
              </table>
            </section>
            <div className="ScoreTable-total">
              <h2>TOTAL SCORE: {this.calculateTotal()}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScoreTable;
