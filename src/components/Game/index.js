import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import 'reactjs-popup/dist/index.css'
import {
  Container,
  ListScoreContainer,
  MainHeading,
  ScoreContainer,
  Score,
  TotalScore,
  RulesButton,
  RockScissorsPaperContainer,
  RockScissorsContainer,
  RockScissorsPaperButton,
  RockScissorsPaperImage,
  PopupContainer,
  CloseButtonRulesImageContainer,
  CloseButton,
  RulesImage,
  ResultContainer,
  PlayerOpponentContainer,
  PlayerContainer,
  Player,
  OpponentContainer,
  Opponent,
  ResultPlayAgainContainer,
  Result,
  PlayAgainButton,
} from './styledComponents'

class Game extends Component {
  state = {
    score: 0,
    isPlaying: true,
    opponentIndex: '',
    playerIndex: '',
    result: '',
  }

  getResult = (playerChoice, opponentChoice) => {
    if (playerChoice[0].id === 'ROCK') {
      switch (opponentChoice.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (playerChoice[0].id === 'PAPER') {
      switch (opponentChoice.id) {
        case 'SCISSORS':
          return 'YOU LOSE'
        case 'ROCK':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (opponentChoice.id) {
        case 'PAPER':
          return 'YOU WON'
        case 'ROCK':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  onRockScissorsPaperButton = id => {
    const {choicesList} = this.props
    const opponentChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    const playerChoice = choicesList.filter(each => each.id === id)
    // console.log(playerChoice[0].id)

    const resultScore = this.getResult(playerChoice, opponentChoice)
    if (resultScore === 'YOU WON') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (resultScore === 'YOU LOSE') {
      this.setState(prevState => ({score: prevState.score - 1}))
    } else {
      this.setState(prevState => ({score: prevState.score}))
    }
    this.setState(prevState => ({
      opponentIndex: opponentChoice,
      playerIndex: playerChoice[0].imageUrl,
      result: resultScore,
      isPlaying: !prevState.isPlaying,
    }))
  }

  onPlayAgain = () => {
    this.setState(prevState => ({isPlaying: !prevState.isPlaying, result: ''}))
  }

  renderPlayingView = () => (
    <RockScissorsPaperContainer>
      <RockScissorsContainer>
        <RockScissorsPaperButton
          type="button"
          data-testid="rockButton"
          id="Rock"
          onClick={() => this.onRockScissorsPaperButton('ROCK')}
        >
          <RockScissorsPaperImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
            alt="ROCK"
            key="ROCK"
          />
        </RockScissorsPaperButton>
        <RockScissorsPaperButton
          type="button"
          data-testid="scissorsButton"
          id="SCISSORS"
          onClick={() => this.onRockScissorsPaperButton('SCISSORS')}
        >
          <RockScissorsPaperImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
            alt="SCISSORS"
            key="SCISSORS"
          />
        </RockScissorsPaperButton>
      </RockScissorsContainer>
      <RockScissorsPaperButton
        type="button"
        data-testid="paperButton"
        id="PAPER"
        onClick={() => this.onRockScissorsPaperButton('PAPER')}
      >
        <RockScissorsPaperImage
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png"
          alt="PAPER"
          key="PAPER"
        />
      </RockScissorsPaperButton>
    </RockScissorsPaperContainer>
  )

  renderResultsView = () => {
    const {opponentIndex, playerIndex, result} = this.state
    return (
      <ResultContainer>
        <PlayerOpponentContainer>
          <PlayerContainer>
            <Player>You</Player>
            <RockScissorsPaperImage src={playerIndex} alt="your choice" />
          </PlayerContainer>
          <OpponentContainer>
            <Opponent>Opponent</Opponent>
            <RockScissorsPaperImage
              src={opponentIndex.imageUrl}
              alt="opponent choice"
            />
          </OpponentContainer>
        </PlayerOpponentContainer>
        <ResultPlayAgainContainer>
          <Result>{result}</Result>
          <PlayAgainButton type="button" onClick={this.onPlayAgain}>
            PLAY AGAIN
          </PlayAgainButton>
        </ResultPlayAgainContainer>
      </ResultContainer>
    )
  }

  renderGameRulesView = () => (
    <PopupContainer>
      <Popup modal trigger={<RulesButton type="button">RULES</RulesButton>}>
        {close => (
          <CloseButtonRulesImageContainer>
            <CloseButton type="button" onClick={() => close()}>
              <RiCloseLine />
            </CloseButton>
            <RulesImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </CloseButtonRulesImageContainer>
        )}
      </Popup>
    </PopupContainer>
  )

  render() {
    const {score, isPlaying} = this.state
    return (
      <Container>
        <ListScoreContainer>
          <MainHeading>
            ROCK <br /> PAPER <br /> SCISSORS
          </MainHeading>
          <ScoreContainer>
            <Score>Score</Score>
            <TotalScore>{score}</TotalScore>
          </ScoreContainer>
        </ListScoreContainer>
        {isPlaying ? this.renderPlayingView() : this.renderResultsView()}
        {this.renderGameRulesView()}
      </Container>
    )
  }
}

export default Game
