import React, {Component} from 'react'
import {Parser} from 'xml2js'
import XmlNode from './XmlNode'

export default class XmlTree extends Component {
    constructor(props) {
        super(props);
        this.setState({
            root: {}
        });
    }

    componentWillMount() {
        const parser = new Parser({
            explicitCharkey: true,
            explicitChildren: true
        });
        parser.parseString(this.props.xmlString, function(err, result) {
            if (err) {
                console.log(err);
            }
            else {
                this.setState({
                    root: result
                });
            }
        }.bind(this));
    }

    render() {
        return (
            <div className='xml-root'>
                {Object.keys(this.state.root).map(childName =>
                    <XmlNode
                        key={childName}
                        name={childName}
                        node={this.state.root[childName]}
                    />
                )}
            </div>
        );
    }
};
