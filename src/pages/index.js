import React from "react"
import Avatar from "avataaars"
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Container, Row, Col } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import "./index.css"

export default function Home() {
  return (
    <>
      <header className="text-center">
        <Container>
          <Row>
            <Col>
              <div className="mt-3">
                <Avatar
                  avatarStyle="Circle"
                  topType="ShortHairShortRound"
                  accessoriesType="Blank"
                  hairColor="BrownDark"
                  facialHairType="Blank"
                  clotheType="ShirtCrewNeck"
                  clotheColor="Heather"
                  eyeType="Wink"
                  eyebrowType="UpDownNatural"
                  mouthType="Smile"
                  skinColor="Pale"
                />
              </div>
              <h1 className="mt-4 animatedH1">Hi, my name is Jannis!</h1>
              <h2>
                I am a Junior Front-End Developer & Customer Experience
                Enthusiast
              </h2>
              <p className="mt-3">
                Voluptate voluptate dolore elit aute consectetur ullamco
                cupidatat amet adipisicing ipsum. Esse ullamco voluptate
                consectetur sunt mollit qui culpa ex consectetur minim ea velit.
                Adipisicing occaecat tempor Lorem culpa aute voluptate occaecat
                officia ad nostrud irure mollit reprehenderit. Laboris pariatur
                cupidatat sunt labore fugiat ipsum tempor excepteur labore ea
                velit nisi ad. Velit velit proident occaecat enim incididunt
                fugiat occaecat duis dolore nisi fugiat non.
              </p>
              <Button className="mt-3" outline color="info">
                Send me an email!
              </Button>
              <div className="mt-5">
                <p className="mb-0">Scroll to learn more about me!</p>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  )
}
