import React from 'react';
import { useHistory } from "react-router-dom";
import Utils from '../../Utils/GameService';
import { PlayerInfo } from '../PlayerInfo/PlayerInfo'
import Button from '../Common/Button/Button';
import crossIcon from '../../public/icons/cross-icon.svg';
import reloadIcon from '../../public/icons/reload-icon.svg';
import Text from '../Common/Text/Text'
import './GameOver.css';
import { Row, Col } from 'react-bootstrap';

function GameOver() {
  let history = useHistory();
  const scores = Utils.getUserScores() ?? [];
  let latestScore = scores[scores.length - 1] ?? 0;
  console.log(scores);
  const highestScore = Utils.getMaxScore(scores);
  const totalSolved = Utils.getTotalNewWords();
  Utils.saveTotalNewWords(0);
  if (totalSolved < 2) {
    latestScore = 0;
  }


  const handlePlayAgain = (event) => {
    history.push(Utils.REDIRECT_TO_GAME);
    return;
  }
  const handleQuit = (event) => {
    history.push(Utils.REDIRECT_TO_LOGIN);
    return;
  }


  return (
    <Row  >
      <Col md={3}>
        <PlayerInfo />
        <div className="mt-3">

        </div>

      </Col>

      <Col md={6} className="mt-5" >
        <Text
          text={"SCORE : GAME " + scores.length}>
        </Text>
        <div className="score">
          <Text
            text={latestScore}>
          </Text>
        </div>
        {scores.length > 0 &&
          <Text
            text={"Highest score : " + highestScore.minutes + ":" + highestScore.seconds + ":" + highestScore.milliseconds}>
          </Text>
        }



        <Button
          icon={reloadIcon}
          text="PLAY AGAIN"
          onClick={handlePlayAgain} >
        </Button>
        <Button
          icon={crossIcon}
          text="QUIT"
          onClick={handleQuit} >
        </Button>
      </Col>

      <Col md={3}>
        <Text
          text="Fast Fingers">
        </Text>
      </Col>
    </Row>
  );
}


export default GameOver;