import React from 'react';
import TestUtils from 'react-addons-test-utils';

import XmlNode from '../XmlNode';


describe('XmlNode', () => {
    it('show node without child and attr', () => {
        const node = {
            '_': 'value'
        };

        const renderer = TestUtils.createRenderer();
        renderer.render(
            <XmlNode
                key='name'
                name='name'
                node={node} />
        );

        const result = renderer.getRenderOutput();

        expect(result).toEqual(
            <div className='xml-node'>
                <div>
                    <span className='xml-node-name'>&lt;{'name'}{[]}&gt;</span>
                    <span className='xml-node-value'>value</span>
                    <span className='xml-node-name'>&lt;&#47;{'name'}&gt;</span>
                </div>
            </div>
        );
    });

    it('show node with attrs and not child', () => {
        const node = {
            '_': 'value',
            '$': {
                'attr1': 'value1',
                'attr2': 'value2',
            }
        };

        const renderer = TestUtils.createRenderer();
        renderer.render(
            <XmlNode
                key='name'
                name='name'
                node={node} />
        );

        const result = renderer.getRenderOutput();

        const expectedAttrs = [ 
            <span className='xml-node-attr'>
                <span className='xml-node-attr-name'>&nbsp;{'attr1'}</span>
                <span className='xml-node-symbol'>&#61;</span>
                <span className='xml-node-attr-value'>&quot;{'value1'}&quot;</span>
            </span>,
            <span className='xml-node-attr'>
                <span className='xml-node-attr-name'>&nbsp;{'attr2'}</span>
                <span className='xml-node-symbol'>&#61;</span>
                <span className='xml-node-attr-value'>&quot;{'value2'}&quot;</span>
            </span>,
        ];
        expect(result).toEqual(
            <div className='xml-node'>
                <div>
                    <span className='xml-node-name'>&lt;{'name'}{expectedAttrs}&gt;</span>
                    <span className='xml-node-value'>value</span>
                    <span className='xml-node-name'>&lt;&#47;{'name'}&gt;</span>
                </div>
            </div>
        );
    });
});
