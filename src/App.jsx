import { ButtonSubmit } from "./components/ButtonSubmit";
import { Card } from "./components/Card";
import { CardThanks } from "./components/CardThanks";
import { RattingButton } from "./components/RattingButton";
import { Star } from "./components/Star";
import { Text } from "./components/Text";
import { TextThanks } from "./components/TextThanks";
import { Title } from "./components/Title";
import { Wrapper } from "./components/Wrapper";
import { WrapperRattingBtn } from "./components/WrapperRattingBtn";
import "./App.css";
import { useState } from "react";
import { Result } from "./components/Result";
import ThanksImg from "./components/ThanksImg";

function App() {
    const [ratting , setRatting] = useState()
    const [ isSubmited, setIsSubmited] = useState(false)

    const rattingClick = (ratting) => {
      setRatting(ratting)
}

    const submitClick = (e) => {
      e.preventDefault()
      setIsSubmited(true)
}

    return (
        <Wrapper onSubmit={submitClick}>
            {!isSubmited ? (

            <Card>
                <Star/>
                <Title>How did we do?</Title>
                <Text>
                    Please let us knw how we did with your support request. All
                    feedback is appeciated to help us improve our offering!
                </Text>
                <WrapperRattingBtn>
                    {[1, 2, 3, 4, 5].map((number) => {
                        return (
                            <RattingButton onClick={() => rattingClick(number)} type="button" key={number}>{number}</RattingButton>
                        );
                    })}
                </WrapperRattingBtn>
                <ButtonSubmit type="submit">Submit</ButtonSubmit>
            </Card>
            ) : (

              <CardThanks>
                <ThanksImg/>
                <Result>You selected {ratting} out of 5</Result>
                <Title>Thank you!</Title>
                <TextThanks>We appreciate you talking the time to give a rating if you ever need more support, dont hesitate to get in touch!</TextThanks>
              </CardThanks>

            )}
        </Wrapper>
    );
}

export default App;
