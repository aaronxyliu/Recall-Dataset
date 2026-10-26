import $ from "jquery";

// An observable browser fixture, not an instrumented version of the library.
window.fixtureJQuery = $;
const checks = [];
function check(name, value) {
  checks.push({name, passed: Boolean(value)});
}
function addTask(title) {
  const item = $("<li>").text(title).attr("data-title", title).data("task", {title});
  item.append($("<button>").text("Toggle").attr("type", "button"));
  $("#tasks").append(item);
  return item;
}
$("#task-form").on("submit", function (event) {
  event.preventDefault();
  addTask($("#task-title").val());
});
$("#tasks").on("click", "button", function () {
  $(this).closest("li").toggleClass("done");
});
const first = addTask("Inspect bundle");
check("selector-and-text", $("#tasks li").first().text().includes("Inspect bundle"));
check("data-roundtrip", first.data("task").title === "Inspect bundle");
first.find("button").trigger("click");
check("delegated-event", first.hasClass("done"));
$("#task-form").trigger("submit");
check("form-handler", $("#tasks li").length === 2);
check("traversal", first.parent().is("#tasks") && first.siblings().length === 1);
check("extend", $.extend(true, {}, {x:{a:1}}, {x:{b:2}}).x.b === 2);
check("map", $.map([1,2,3], value => value * 2).join(",") === "2,4,6");
const callbacks = $.Callbacks("memory");
let observed = "";
callbacks.add(value => { observed = value; });
callbacks.fire("callback");
check("callbacks", observed === "callback");
$.Deferred(deferred => deferred.resolve("resolved")).done(value => {
  check("deferred", value === "resolved");
});
check("serialize", $("<form><input name='x' value='one'></form>").serialize() === "x=one");
check("param", $.param({x:"one"}) === "x=one");
check("css", first.css("display", "block").css("display") === "block");
window.fixtureResult = {version: $.fn.jquery, checks, passed: checks.every(item => item.passed)};
$("#status").text(`jQuery ${$.fn.jquery}: ${checks.length} checks`);
$("#checks").text(JSON.stringify(window.fixtureResult, null, 2));
