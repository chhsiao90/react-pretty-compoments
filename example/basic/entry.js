var React = require('react');
var ReactDOM = require('react-dom');
var XmlTree = require('react-pretty-components').XmlTree;

fetch('/books.xml')
    .then(resp => resp.text())
    .then(resp => {
        console.log(resp);
        ReactDOM.render((
            <XmlTree xmlString={resp} />
        ), document.getElementById('root'));
    }); 
