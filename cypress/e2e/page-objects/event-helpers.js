export async function click (selector, timeout = 10000) {
    try{
        await cy.get(selector, {timeout: timeout}).should('be.visible').click();
    } catch (e) {
        throw new Error(`Element ${selector} was not clickable after ${timeout} ms : ${e}`);
    }
}

export async function type(selector, text, timeout = 10000) {
    try {
        await cy.get(selector, {timeout: timeout}).should('be.visible').type(text);
    } catch(e) {
        throw new Error(`Failed to type ${text} on element ${selector} in ${timeout} ms : ${e}`);
    }
}