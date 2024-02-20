import styled from 'styled-components'

export const Container = styled.div`
  background-color: #223a5f;
  color: #ffffff;
  height: 100vh;
  width: 100%;
  padding-top: 3%;
`
export const ListScoreContainer = styled.div`
  font-family: Bree Serif;
  border: 1px solid #ffffff;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 0px 10%;
  @media (max-width: 600px) {
    width: 90%;
    margin: 0px 5%;
  }
`
export const MainHeading = styled.h1`
  font-size: 18px;
  margin-left: 3%;
`
export const ScoreContainer = styled.div`
  align-self: center;
  color: #223a5f;
  height: max-content;
  width: 100px;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 5px;
  margin-right: 3%;
  text-align: center;
`
export const Score = styled.p`
  margin-bottom: 1%;
  margin-top: 1%;
`
export const TotalScore = styled.p`
  font-family: Roboto;
  font-size: 28px;
  font-weight: 500;
  margin-top: 0%;
  margin-bottom: 0px;
`
export const RulesButton = styled.button`
  width: 70px;
  height: 30px;
  background-color: #ffffff;
  color: #223a5f;
  border-radius: 5px;
  border: 1px solid #ffffff;
  font-family: Bree Serif;
  margin-left: 100%;
  cursor: pointer;
`
export const RockScissorsPaperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3%;
  @media (max-width: 600px) {
    margin-top: 9%;
  }
`
export const RockScissorsContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    width: 70%;
  }
`
export const RockScissorsPaperButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const RockScissorsPaperImage = styled.img`
  height: 180px;
  @media (max-width: 600px) {
    height: 100px;
  }
`
export const PopupContainer = styled.div`
  height: 80vh;
  width: 80vw;
`
export const CloseButtonRulesImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
`
export const CloseButton = styled.button`
  border: none;
  outline: none;
  align-self: flex-end;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
`
export const RulesImage = styled.img`
  height: 100%;
  width: 100%;
  background-size: cover;
`
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  padding-top: 1%;
  font-family: Roboto;
`
export const PlayerOpponentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  @media (max-width: 600px) {
    width: 70%;
  }
`
export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Player = styled.p`
  font-size: 24px;
  margin-bottom: 3px;
  font-weight: 500;
`
export const OpponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Opponent = styled.p`
  font-size: 24px;
  margin-bottom: 3px;
  font-weight: 500;
`
export const ResultPlayAgainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Result = styled.p`
  font-size: 28px;
  font-weight: bold;
`
export const PlayAgainButton = styled.button`
  align-self: center;
  width: 108px;
  height: 34px;
  background-color: #ffffff;
  color: #223a5f;
  border-radius: 5px;
  border: 1px solid #ffffff;
  font-family: Roboto;
  cursor: pointer;
`
