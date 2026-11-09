(function anonymous(
) {
return async (PuppeteerUtil, query, selector, root, visible) => {
                        const querySelector = PuppeteerUtil.createFunction(query);
                        const node = await querySelector(root ?? document, selector, PuppeteerUtil);
                        return PuppeteerUtil.checkVisibility(node, visible);
                    }
})