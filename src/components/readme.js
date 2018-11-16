import React from 'react';
import { compose } from 'redux';
import { Converter } from 'showdown'
import sanitize from 'sanitize-html';

const mdconverter = new Converter();

mdconverter.setFlavor('github');

const sanitizationOptions = {
    allowedTags: sanitize.defaults.allowedTags.concat(['img', 'h1', 'h2'])
}

const toHTML = compose(
    html => sanitize(html, sanitizationOptions),
    mdconverter.makeHtml.bind(mdconverter),
    decodeURIComponent,
    escape,
    atob
);

const Readme = ({ readme }) => (
    <article dangerouslySetInnerHTML={{ __html: toHTML(readme.content) }} />
);

export default Readme;