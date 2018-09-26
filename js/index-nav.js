$(function () {

    var topHtml = '<div class="sen-top-content"><div class="sen-nav-div"><ul class="nav-ul">';

    for (let index = 0; index < indexList.top.length; index++) {

        var list = indexList.top[index];
        if (topHtml === undefined)
            topHtml = '<li class="nav-li"><a href="' + list.href + '">' + list.title + '</a>';
        else topHtml = topHtml + '<li class="nav-li"><a href="' + list.href + '">' + list.title + '</a>';

        if (list.item === undefined) {
            topHtml = topHtml + '</li>';
        } else {
            topHtml = topHtml + '<div class="slideDown"><ul>';
            for (let index = 0; index < list.item.length; index++) {
                topHtml = topHtml + '<li><a href="' + list.item[index].href + '">' + list.item[index].title + '</a></li>';
            }
            topHtml = topHtml + '</ul></div></li>';
        }
    }
    topHtml = topHtml + ' </ul></div></div>';
    console.log(topHtml);
    $('.sen-top-div').append(topHtml);

    // 倒序排列
    indexList.item.reverse();
    console.log(indexList.item);
    var html = "";
    for (let index = 0; index < indexList.item.length; index++) {
        var list = indexList.item[index];
        html = html + '<div class="content-div"><div class="title"><a href="' + list.href + '">' + list.title + '</a></div><ul class="textinfo"><img src="' + list.img + '"><p>' + list.desc + '</p></ul><ul class="time ' + list.bgColorClass + '"><div><img src="img/time.svg"><span>' + list.time + '</span></div></ul></div>';
    }
    $('.content').append(html);
})