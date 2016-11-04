import React, {Component} from 'react';

export default class XmlNode extends Component {

    render() {
        const {
            name, node
        } = this.props;

        const makeNodeWithChildren = function(node, nodeName) {
            const attrs = makeAttrs(node['$'] || {});
            const content = Object
                .keys(node['$$'])
                .map(childName => (
                    <XmlNode
                        key={childName}
                        name={childName}
                        node={node['$$'][childName]} />
            ));
            return (
                <div>
                    <span className='xml-node-name'>&lt;{nodeName}{attrs}&gt;</span>
                    <div className='xml-node-indent'>
                        {content}
                    </div>
                    <span className='xml-node-name'>&lt;&#47;{nodeName}&gt;</span>
                </div>
            );
        };

        const makeNodeWithoutChildren = function(node, nodeName) {
            const attrs = makeAttrs(node['$'] || {});
            return (
                <div>
                    <span className='xml-node-name'>&lt;{nodeName}{attrs}&gt;</span>
                    <span className='xml-node-value'>{node['_']}</span>
                    <span className='xml-node-name'>&lt;&#47;{nodeName}&gt;</span>
                </div>
            );
        };

        const makeAttrs = function(attrs) {
            return Object
                .keys(attrs)
                .map(k => (
                    <span className='xml-node-attr'>
                        <span className='xml-node-attr-name'>&nbsp;{k}</span>
                        <span className='xml-node-symbol'>&#61;</span>
                        <span className='xml-node-attr-value'>&quot;{attrs[k]}&quot;</span>
                    </span>
            ));
        };

        var content;
        if (node instanceof Array) {
            var children = [];
            for (var i = 0; i < node.length; i++) {
                const childNode = node[i];
                if (childNode['$$']) {
                    children.push(makeNodeWithChildren(childNode, name));
                }
                else {
                    children.push(makeNodeWithoutChildren(childNode, name));
                }
            }
            content = (
                <div>
                    {children}
                </div>
            );
        }
        else if (node instanceof Object && node['$$']) {
            content = makeNodeWithChildren(node, name);
        }
        else {
            content = makeNodeWithoutChildren(node, name);
        }

        return (
            <div className='xml-node'>
                {content}
            </div>
        );
    }
}

