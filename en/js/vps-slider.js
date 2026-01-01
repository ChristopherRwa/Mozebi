$(function(){

/*============================================================================
  VPS Slider
  ============================================================================*/

    function coustomWidth(){

        var actualWidth = $(".rng-slider-nav").width();
        var cartNum = $(".rng-slider-nav > ul > li").size();
        var width = (actualWidth)/cartNum;
         $(".rng-slider-nav ul li").css({'width':width});
     }
     $(window).resize(function(){
         coustomWidth();
     });
     /*$(window).load(function(){
         coustomWidth();
     });*/

    function rangeSlider(){
        //$(".range-slider").slider();
        var processor = new Array('01', '04', '04', '06', '08', '08');
        var ip_address = new Array('01', '01', '01', '01', '01', '01');
        var ram = new Array('2', '4', '6', '8', '16', '32');
        var band_width = new Array('1', '2', '3', '4', '5', '6');
        var disk_space = new Array('25', '50', '75', '100', '150', '300');
        var total = new Array('20.00', '35.00', '55.00', '70.00', '85.00', '105.00');
        var pIDs = new Array('187', '188', '189', '190', '363', '364'); //

         $("#range-slider-1").slider({
            range: "min",
            value: 1,
            min: 1,
            max: 6,
            slide: function(event, ui) {
                //update(1,ui.value);
                $("#range-slider-value").val(ui.value);
                updatevalues();
                bubleClick();
                sliderActiveValue();
            }

        });

        // pass value to input tag

        function inputValue(){
            var currentValue = $("#range-slider-1").slider("option", "value");
            $("#range-slider-value").val(currentValue);
        }

        inputValue();

        function updatevalues(){
            var currentUiValue = $("#range-slider-value").val();
            $("#processor").html(processor[currentUiValue-1]);
            $("#ip_address").html(ip_address[currentUiValue-1]);
            $("#ram").html(ram[currentUiValue-1]);
            $("#band-width").html(band_width[currentUiValue-1]);
            $("#disk-space").html(disk_space[currentUiValue-1]);
            $("#total").html(total[currentUiValue-1]);
            $(".vps-order-box a.commen-btn").attr("href", "https://my.exonhost.com/web-hosting/order/step2?pid="+pIDs[currentUiValue-1]);

            //fire global event for slider value change
            $(document).trigger("changeSlider");
        }
        updatevalues();

        // buble click

        function bubleClick(){
            var getCurrentValue = $("#range-slider-value").val();
            $(".rng-slider-nav li a").removeClass("now");
            $('.rng-slider-nav li:nth-child('+getCurrentValue+')').find("a").addClass("now");
        }
        bubleClick();

        // update values for buble click


        $(".rng-slider-nav ul li a").click(function(e){
            event.preventDefault();
            var getClickposition = $(this).parent().index()+1;
            $(".rng-slider-nav li a").removeClass("now");
            $(this).addClass("now")
            //console.log(getClickposition);
            $("#range-slider-1").slider("option", "value",getClickposition);
            inputValue();
            updatevalues();
        });

        function sliderActiveValue(){
            $("#range-slider-1").find("span.ui-slider-handle").append('<div class="slider-value"></div>');
            var currentSlideValue = $( "#range-slider-value" ).val();
            $("#range-slider-1 .slider-value").html(currentSlideValue);
        }
        sliderActiveValue();
    }


    jQuery.fn.exists = function(){return this.length>0;}

    if($('#range-slider-1').exists())
    {
        rangeSlider();
    }

/*============================================================================
  VPS Slider eND
  ============================================================================*/

});// main function
