(async function anonymous(__self,scope
) {
with (scope) { __self.result = document.querySelector(`#${tab}-tab`).textContent }; __self.finished = true; return __self.result;
})