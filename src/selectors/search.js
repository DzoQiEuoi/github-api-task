import parseLink from 'parse-link-header';

export const all = state => state.items;
export const link = state => parseLink(state.headers.link);

export const nextUrl = (state) => {
    const { next } = parseLink(state.headers.link) || {};
    return next && next.url || null;
}