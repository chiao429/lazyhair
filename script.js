$(document).ready(function(){
    var mySwiper = new Swiper ( ".swiper-container", {
        direction: "horizontal",
        speed:200,
        slidesPerView: 'auto',
        freeMode : true,
        freeModeMomentumRatio : 0.7,
        freeModeMomentumVelocityRatio :0.7,
        scrollbar: {
            el: ".swiper-scrollbar", // 捲軸物件
            hide: true,
        }
    })

    $('.change_tab').click(function(){
        $('#main_page').toggle();
        $('#food_page').toggle();
    })

    $('.to_main_tab').click(function(){
        $('#main_page').show();
        $('#food_page').hide();
    })

    var food_model = new Vue({
        el: '#food_page',
        data: {
            food_data: [],
            index_of_click: 0,
        },
        created: function(){
            $.ajax({
                url: './data/shops_zh-tw.json',
                type: 'get',
                success: function(response){
                    food_model.food_data = response;
                }
            })
        },
        method: {
        }
    })
});
      