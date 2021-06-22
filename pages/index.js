import styles from "../styles/Home.module.css";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function Home() {
    return (
        <>
            {/* Main container */}
            <Container className={`p-4 mt-sm-5 shadow rounded ${styles.mainContainer}`} fluid="sm">
                <h1>Hello world!</h1>
                <hr/>
                <p>This is a template app that uses React, Next.js and Bootstrap.</p>

                Useful links:
                <ul style={{marginTop: "5px"}}>
                    <li><a href="https://reactjs.org/docs/getting-started.html">React docs</a></li>
                    <li><a href="https://nextjs.org/docs">Next.js docs</a></li>
                    <li><a href="https://github.com/react-bootstrap/code-sandbox-examples/blob/master/README.md">React-Bootstrap examples</a></li>
                    <li><a href="https://getbootstrap.com/docs/4.6/examples/">Bootstrap examples</a></li>
                    <li><a href="https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss">Bootstrap SASS variables</a> (customize them on <i>styles/boostrap.scss</i>)</li>
                </ul>
            </Container>

            {/* Sticky footer */}
            <footer className={`py-2 ${styles.footer}`}>
                <Row>
                    <Col xs={12}>
                        <span className="text-muted">By Talendar</span>
                    </Col>
                    <Col xs={12}>
                        <span className="text-muted">&lt; Check some of my projects on <a href="https://github.com/Talendar">GitHub</a> &gt;</span>
                    </Col>
                </Row>
            </footer>
        </>
    )
}