$(function () {
    var a = UrlParam.paramValues("id");
    if (a === undefined)
        return;
    var index = Number(a);
    console.log(index);
})