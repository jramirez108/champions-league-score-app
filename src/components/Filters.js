import React from 'react';
import { Button, ButtonGroup } from 'reactstrap'

function Filters(props) {

    return (
        <div className='filter-container'>
            <h5 className="white">Game Filter</h5>
            <ButtonGroup>
                <Button
                    color="primary"
                    outline
                    onClick={props.handler}
                    active={props.showAllMatches === true}
                >
                    All
                </Button>
                <Button
                    color="primary"
                    outline
                    onClick={props.handler}
                    active={props.showAllMatches === false}
                >
                    Completed
                </Button>
            </ButtonGroup>
        </div>
    )
}

export default Filters;