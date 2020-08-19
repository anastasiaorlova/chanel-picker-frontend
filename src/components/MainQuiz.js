import React from "react";
import quizdata from './data'

class MainQuiz extends React.Component {

state = {
currentQuestion: 0,
myAnswer: null,
options: [],
score: 0,
disabled: true,
isEnd: false
};

loadQuizData = () => {
// console.log(quizData[0].question)
this.setState(() => {
    return {
    questions: quizdata[this.state.currentQuestion].question,
    answer: quizdata[this.state.currentQuestion].answer,
    options: quizdata[this.state.currentQuestion].options
    };
});
};

componentDidMount() {
this.loadQuizData();
}
nextQuestionHandler = () => {
// console.log('test')
const { myAnswer, answer, score } = this.state;

if (myAnswer === answer) {
    this.setState({
    score: score + 1
    });
}

this.setState({
    currentQuestion: this.state.currentQuestion + 1
});
console.log(this.state.currentQuestion);
};

componentDidUpdate(prevProps, prevState) {
if (this.state.currentQuestion !== prevState.currentQuestion) {
    this.setState(() => {
    return {
        disabled: true,
        questions: quizdata[this.state.currentQuestion].question,
        options: quizdata[this.state.currentQuestion].options,
        answer: quizdata[this.state.currentQuestion].answer
    };
    });
}
}
//check answer
checkAnswer = answer => {
this.setState({ myAnswer: answer, disabled: false });
};
finishHandler = () => {
if (this.state.currentQuestion === quizdata.length - 1) {
    this.setState({
    isEnd: true
    });
}
if (this.state.myAnswer === this.state.answer) {
    this.setState({
    score: this.state.score + 1
    });
}
};
render() {
const { options, myAnswer, currentQuestion, isEnd } = this.state;

if (isEnd) {
    return (
    <div className="result">
        <center><img src="https://i.imgur.com/3F58yJh.png" alt="red" width="500"/></center>
        <h3>You did it! Your final score is {this.state.score} points </h3>
        <div>
        <h4>The correct answers for the questions were...</h4>
        <ul>
            {quizdata.map((item, index) => (
            <li className="ui floating message options" key={index}>
                <i className="i">{item.question}</i> - {item.answer}
            </li>
            ))}
        </ul>
        </div>
    </div>
    );
} else {
    return (
    <div className="App">
        <h3>{this.state.questions} </h3>
        <span>{`Questions ${currentQuestion} out of ${quizdata.length -
        1} remaining `}</span>
        {options.map(option => (
        <p
            key={option.id}
            className={`ui floating message options
        ${myAnswer === option ? "selected" : null}
        `}
            onClick={() => this.checkAnswer(option)}
        >
            {option}
        </p>
        ))}
        {currentQuestion < quizdata.length - 1 && (
        <button
            className="next"
            disabled={this.state.disabled}
            onClick={this.nextQuestionHandler}
        >
            Next
        </button>
        )}
        {/* //adding a finish button */}
        {currentQuestion === quizdata.length - 1 && (
        <button className="finish" onClick={this.finishHandler}>
            Finish
        </button>
        )}
    </div>
    
    );
}
}


}

export default MainQuiz;