export function click (selector, timeout = 10000) {
    try{
        cy.get(selector, {timeout: timeout}).should('be.visible').click();
    } catch (e) {
        throw new Error(`Element ${selector} was not clickable after ${timeout} ms : ${e}`);
    }
}

export function clickWxPath (selector, timeout = 10000) {
    try{
        cy.xpath(selector, {timeout: timeout}).should('be.visible').click();
    } catch (e) {
        throw new Error(`Element ${selector} was not clickable after ${timeout} ms : ${e}`);
    }
}

export function type(selector, text, timeout = 10000) {
    try {
        cy.get(selector, {timeout: timeout}).should('be.visible').type(text);
    } catch(e) {
        throw new Error(`Failed to type ${text} on element ${selector} in ${timeout} ms : ${e}`);
    }
}

export function typeWxPath(selector, text, timeout = 10000) {
    try {
        cy.xpath(selector, {timeout: timeout}).should('be.visible').type(text);
    } catch (e) {
        throw new Error(`Failed to type ${text} on element with selector ${selector} in ${timeout} ms : ${e}`);
    }
}