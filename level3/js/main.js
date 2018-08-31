Vue.config.productionTip = false;
var leftpanel =new Vue({
    name:leftpanel,
    // el:'#left-area',
    data:{
       message:"what"
    }
});

var pangea = new Vue({
    el:'#pangea',
    template:'<div id="pangea">\
        <div id="decorator">\
                    <div class="deco-rect" id="deco-rect1"></div>\
                    <div class="deco-rect" id="deco-rect2"></div>\
                    <div class="deco-rect" id="deco-rect3"></div>\
            </div>\
            <div id="pangea-container">\
                <div id="left-area">\
                    <leftpanel>\
                    </leftpanel>\
                </div>\
                <div id="right-area"></div>\
            </div>\
    </div>',
    replace:false,
    components:{
        leftpanel:leftpanel,
    },
    data:{
        
    }
});



