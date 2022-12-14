import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './Jumbotron.scss'

const Jumbotron = () => {
    return (
        <div className="content">
            <h1 className="title1">Explore</h1>
            <h1 className="title2">your amazing city together</h1>
            <p>Find great place to holiday</p>
            <div className="row">
                <div className="col-md-10 m-auto">
                    <InputGroup className="search">
                    <Form.Control aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <Button variant="outline-secondary" id="button-addon2" className="bg-warning border border-warning text-white">Search</Button>
                    </InputGroup>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;