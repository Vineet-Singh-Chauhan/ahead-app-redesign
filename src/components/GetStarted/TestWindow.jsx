import { useEffect, useState } from "react";
import { filedata } from "./questions";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Button,
  Radio,
  Typography,
} from "@mui/material";

const TestWindow = ({ close }) => {
  const [step, setStep] = useState(0);
  const [questions, setQuestions] = useState(filedata);
  const [currQuestion, setCurrQuestion] = useState(questions[step]);
  const [score, setScore] = useState(0);
  const [givenAnswers, setGivenAnswers] = useState([]);
  const handleNext = () => {
    setStep((e) => ++e);
  };
  const handlePrev = () => {
    setStep((e) => --e);
  };
  const handleSubmit = () => {
    alert(`The score is: ${score}`);
    console.log(score);
    close();
  };
  const handleAns = (ev) => {
    givenAnswers[step] = ev.target.value;
    ev.target.value == currQuestion.ans ? setScore((e) => ++e) : null;
  };

  useEffect(() => {
    setCurrQuestion(questions[step]);
  }, [step, questions]);
  return (
    <form className="flex flex-col bg-white p-10 rounded-lg">
      <Typography variant="h5" component="h2">
        Take a quick Test
      </Typography>
      {
        <FormControl key={currQuestion.id}>
          <FormLabel id="demo-radio-buttons-group-label">
            {currQuestion.title}
          </FormLabel>
          <RadioGroup
            onChange={(e) => handleAns(e)}
            defaultValue={givenAnswers[step] || null}
          >
            {currQuestion.Options.map((e, i) => (
              <FormControlLabel
                key={i}
                value={e}
                control={<Radio />}
                label={e}
              />
            ))}
          </RadioGroup>
        </FormControl>
      }
      <div className="flex justify-between">
        <Button onClick={handlePrev} variant="contained" disabled={step == 0}>
          Previous
        </Button>

        <Button
          onClick={step == questions.length - 1 ? handleSubmit : handleNext}
          variant="contained"
        >
          {step == questions.length - 1 ? "Submit" : "Next"}
        </Button>
      </div>
    </form>
  );
};

export default TestWindow;
