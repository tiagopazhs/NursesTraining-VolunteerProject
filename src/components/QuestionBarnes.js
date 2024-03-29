import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Questions from "./Questions";
import TypeWriter from "./TypeWriter";

export default function QuestionBarnes() {

    const [textNumber, setTextNumber] = useState(2)

    const [type1, setType1] = useState(false)
    const [type2, setType2] = useState(true)
    const [type3, setType3] = useState(true)
    const [type4, setType4] = useState(true)
    const [type5, setType5] = useState(true)
    const [type6, setType6] = useState(true)
    const [type7, setType7] = useState(true)
    const [hideButton, setHideButton] = useState(false)
    const [hideQuestion, setHideQuestion] = useState(true)
    const [textButton, setTextButton] = useState('NEXT')

    function answerQuestion(){
        setType1(true)
        setType2(true)
        setType3(true)
        setType4(true)
        setType5(true)
        setType6(true)
        setHideButton(true)
        setHideQuestion(false)
    }

    function nextQuestion() {
        switch (textNumber) {
            case 2:
                setType2(false);
                setTextNumber(textNumber + 1);
                break;
            case 3:
                setType3(false);
                setTextNumber(textNumber + 1);
                break;
            case 4:
                setType4(false);
                setTextNumber(textNumber + 1);
                break;
            case 5:
                setType5(false);
                setTextNumber(textNumber + 1);
                break;
            case 6:
                setType6(false);
                setTextNumber(textNumber + 1);
                break;
            case 7:
                setType7(false);
                setTextNumber(textNumber + 1);
                setTextButton('Show options')
                break;
            case 8:
                answerQuestion()
                break;
        }
    }

    return (
        <Box alignItems="center" style={{ width: '100%'}}>
            <TypeWriter end={!type2} hidden={type1} boldText={'You:'} fixedText={''} text={'Hi Mr. Barnes!'} />
            <TypeWriter end={!type3} hidden={type2} boldText={'Mr. Barnes:'} fixedText={''} text={'Hi!'} />
            <TypeWriter end={!type4} hidden={type3} boldText={'You:'} fixedText={'According to your medical record, you are discharged and should follow these wound care instructions with '} text={'wet-to-dry dressings two times a day.'} />
            <TypeWriter end={!type4} hidden={type4} boldText={'Mr. Barnes'} fixedText={''} text={' ...starts to cry 😭.'} />
            <TypeWriter end={!type5} hidden={type5} boldText={'You:'} fixedText={''} text={'Mr. Barnes, are you okay?'} />
            <TypeWriter end={!type6} hidden={type6} boldText={'Mr. Barnes:'} fixedText={'My wife passed away three months ago. I do not drive. I have no way of changing '} text={'bandages or getting supplies 😭.'} />
            <TypeWriter end={!type7} hidden={type7} boldText={'Choose between the following options what is the best way to respond to Mr. Barnes...'} fixedText={''} text={''} />
            <Button hidden={hideButton} onClick={() => nextQuestion(textNumber)}
                variant="contained" disableElevation style={{ height: '2.5vw', minHeight: '28px', width: '70%', marginLeft: '15%', marginTop: '15px', backgroundColor: '#005681', boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)' }} >
                {textButton}
            </Button>
            <Questions hidden={hideQuestion}/>
        </Box>
    )
}