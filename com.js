$(function () {
    var $content = $('.content');
    var $menu = $('#menu');
    var keysList = []
    var blackList = []
    for (let i = 0; i < communityData.length; i++) {
        var $itemGroup = $('<li class="item" id="item' + i + '"></li>')
        $itemGroup.append('<h2 class="item_letter">' + communityData[i].province_name + '</h2>')
        var $itemlist = $('<ul></ul>')
        var li 
        console.log('i', communityData[i].province_name, communityData[i].black_list[0])
        // for (let j = 0; j < communityData[i].black_list.length; j++) {
        //     console.log('j', j, communityData[i].province_name, communityData[i].black_list[0])
            for (let k in communityData[i].black_list[0]) {
                var $communityGroup = $('<li class="community" id="community' + k + '"></li>')
                // $communityGroup.append('<h3 class="item_letter">' + k + '</h3>')
                var $capitalList = $('<ul class="capital"></ul>')
                $itemlist.append('<h3 class="item_letter">' + k + '</h3>')
                console.log('k', k, communityData[i].black_list[0][k])
                for (let l in communityData[i].black_list[0][k]) {
                    // li += '<li>' + communityData[i].black_list[0][k][l].community_name + '</li>'
                    $capitalList.append('<li>' + communityData[i].black_list[0][k][l].community_name + '</li>')
                    console.log('l', l, communityData[i].black_list[0][k][l])
                }
                $communityGroup.append($capitalList)
                $itemlist.append($communityGroup)
            }
        // }
        $itemGroup.append($itemlist)
        $content.append($itemGroup)
    }
    // $.each(communityData, function (index, item) {
    //     // var $itemGroup = $('<li class="item" id="item' + index + '"></li>')
    //     // $itemGroup.append('<h2 class="item_letter">' + item.name + '</h2>')
    //     // $menu.append('<span class="letter" name="#item' + index + '">' + item.name + '</span>')
    //     // $menu.find("span:first-of-type").addClass("current");
    //     // var $itemlist = $('<ul></ul>')
    //     // $.each(item.cities, function (ide, ite) {
    //     //     $itemlist.append('<li>' + ite.name + '</li>')
    //     // })
    //     // $itemGroup.append($itemlist)
    //     // $content.append($itemGroup);
    //     // 配合后端数据库
    //     var $itemGroup = $('<li class="item" id="item' + index + '"></li>')
    //     $itemGroup.append('<h2 class="item_letter">' + item.province_name + '</h2>')
    //     var $itemlist = $('<ul></ul>')
    //     // for (var i = 0; i < item.black_list[0].length; i++) {
    //     //     console.log(i)
    //     // }
    //     // console.log('index', typeof(item.black_list[0]))
    //     // console.log('key', Object.keys(item.black_list[0]))
    //     keysList.push(Object.keys(item.black_list[0]))
    //     $.each(item.black_list, function (idx, ite) {
    //         console.log('j', item.black_list)
    //         var $communityGroup = $('<li class="item" id="ite' + idx + '"></li>')
    //         $communityGroup.append('<h3 class="item_letter">' + Object.keys(item.black_list[0])[0] + '</h2>')
    //         // $itemlist.append('<li>' + ite + '</li>')
    //     })
    //     $itemGroup.append($itemlist)
    //     $content.append($itemGroup)
    //     blackList.push(item.black_list[0])
    // })
    // console.log(keysList)
    // console.log(blackList)
    // var scroll = new BScroll('.wrapper', {
    //     probeType: 2,
    //     mouseWheel: true
    // })
    // scroll.on('scroll', function (pos) {
    //     var scrollTop = $(document).scrollTop();
    //     var contentItems = $("#content").find(".item");
    //     var currentItem = "";
    //     contentItems.each(function () {
    //         var contentItem = $(this);
    //         var offsetTop = contentItem.offset().top;
    //         if (scrollTop > offsetTop - 200) {
    //             currentItem = "#" + contentItem.attr("id");
    //         }
    //         console.log('currentItem', currentItem)
    //     });
    //     if (currentItem != $("#menu").find(".current").attr("name")) {
    //         $("#menu").find(".current").removeClass("current");
    //         $("#menu").find("span[name='" + currentItem + "']").addClass("current");
    //     }
    // });
    // $(".l-cell").delegate("span", "click", function () {
    //     console.log(38, $('.brand-list .item'))
    //     console.log(39, scroll)
    //     var allHeight = 0;
    //     var index = $(".l-cell span").index($(this));
    //     scroll.scrollToElement( $(".brand-list .item").eq(index)[0], '300');
    //     $(this).siblings().removeClass("current").end().addClass("current");
    //     console.log('点击')
    // });
})