(async function anonymous(__self,scope
) {
with (scope) { __self.result = copied ? setTimeout(() => copied = false, 3000) : null }; __self.finished = true; return __self.result;
})