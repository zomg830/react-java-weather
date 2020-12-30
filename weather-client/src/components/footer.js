import React, { Component } from 'react';
import { CtxConsumer } from '../index'

class Footer extends Component {

    state = {
        name: 'Matthew',
        age: 35
    }

    componentDidMount() {
        this.setState({name: 'MyName'})
        //Subscribe to observable
    }

    componentWillUnmount() {
        //Unsubscribe from observable
    }

    changed = e => this.setState({name: e.target.value});

    render() {

        return (
            <CtxConsumer>
                {(context) => (
                    <div>
                        {
                            context.animals.map(animal => {
                                return (
                                    <div key={animal}>
                                        <h1>{animal}</h1>
                                    </div>
                                )
                            })
                        }
                    </div>
                )}
            </CtxConsumer>
        )
    }
}

export default Footer;