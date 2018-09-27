$(function () {

    var topHtml = '<div class="sen-top-content"><div class="sen-nav-div"><ul class="nav-ul">';

    for (var index = 0; index < indexList.top.length; index++) {

        var list = indexList.top[index];
        topHtml = topHtml + '<li class="nav-li"><a href="' + list.href + '" ';
        if (list.target === undefined)
            topHtml = topHtml + '>' + list.title + '</a>';
        else
            topHtml = topHtml + 'target="' + list.target + '">' + list.title + '</a>';
        if (list.item === undefined) {
            topHtml = topHtml + '</li>';
        } else {
            topHtml = topHtml + '<div class="slideDown"><ul>';
            for (var j = 0; j < list.item.length; j++) {
                topHtml = topHtml + '<li><a href="' + list.item[j].href + '">' + list.item[j].title + '</a></li>';
            }
            topHtml = topHtml + '</ul></div></li>';
        }
    }
    topHtml = topHtml + ' </ul></div></div>';
    console.log(topHtml);
    $('.sen-top-div').append(topHtml);

    // 倒序排列
    indexList.item.reverse();
    var html = "";
    for (var i = 0; i < indexList.item.length; i++) {
        var listContent = indexList.item[i];
        html = html + '<div class="content-div"><div class="title"><a href="' + listContent.href + '">' + listContent.title + '</a></div><ul class="textinfo"><img src="' + listContent.img + '"><p>' + listContent.desc + '</p></ul><ul class="time ' + listContent.bgColorClass + '"><div><img src="img/time.svg"><span>' + listContent.time + '</span></div></ul></div>';
    }
    $('.content').append(html);
});