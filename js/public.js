$(function () {
    var a = UrlParam.paramValues("id");
    if (a === undefined)
        return;
    var id = Number(a);
    //1 java 2 android 3 ionic 4 生活 6 视频 7 书籍
    for (var i = 0; i < dataList.length; i++) {
        if (id === dataList[i].id) {
            initData(dataList[i]);
        }
    }

    initArgs();
})

function initData(data) {
    document.title = 'xuan | ' + data.name;
    var html;
    for (var i = 0; i < data.item.length; i++) {

        if (html == undefined)
            html = '<div class="row">';
        else html = html + '<div class="row">';

        var rowDatas = data.item[i].row;

        for (var j = 0; j < rowDatas.length; j++) {
            var rowData = rowDatas[j];
            html = html + '<div class="col-sm-6 col-lg-4 columns"> <div class="columns-item"><div class="item-thumb ' + rowData.bgColorClass + '"></div>' +
                '<div class="item-desc"><p>' + rowData.desc + '</p></div>' +
                '<div class="item-slant reverse-slant ' + rowData.bgColorClass + '"></div>' +
                '<div class="item-slant"><div class="liberxue-title">' + rowData.type + '</div></div>' +
                '<div class="columns-item-bottom"><div class="columns-item-bottom-title">' +
                '<a href="' + rowData.href + '" class="href_music">' + rowData.title + '</a></div>' +
                '<div class="columns-item-bottom-time">' +
                '<a href="javascript:volid(0);" data-hover="' + rowData.time + '">' + rowData.time + '</a>' +
                '<img class="' + rowData.imgClass + '" /></div></div></div></div>';
        }
        html = html + '</div>';
    }
    $(".public-content").append(html);
}

function initArgs() {
    $("._java").attr("src", "../img/java.svg");
    $("._android").attr("src", "../img/android.svg");
    $("._ionic").attr("src", "../img/ionic.svg");
}