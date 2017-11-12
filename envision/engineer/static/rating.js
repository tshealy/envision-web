window.onload = function () {
    document.getElementById('button').onclick = function () {
        document.getElementById('modal').style.display = "none"
    };
};
function popupSubmit() {
    alert("You did not meet the required character count for at least one credit. Please review each credit text box highlighted in red before resubmitting.");
}
$(function() {
    var startTime = $.now();

    var charCounts = {
        'No Added Value': 0,
        'Improved': 75,
        'Enhanced': 100,
        'Superior': 150,
        'Conserving': 200,
        'Restorative': 250,
        'Exclude': 50
    };
    //current
    $(".submit").click(function(){
        if(checkCharacterCount() ){
            $("#id_total_time").val( Math.floor(($.now() - startTime) / 1000 ));
            $("form").submit();
        } else {
            popupSubmit();
            return false;
        }

    });

    function checkCharacterCount() {
        var errorCount = 0;
        $.each($("textarea"), function(index, value){
            var requiredCount = parseInt($(value).siblings('.required-count').text());
            if ( $(value).val().length < requiredCount && requiredCount !== 0 ){
                errorCount++;
                $(value).addClass('error');
                console.log(errorCount);
            } else {
                $(value).removeClass('error');
                console.log("no error")
            }
        });
        return errorCount === 0;
    };

    //Default setting required count to 250
    if (parseInt($(".data").html()) === 2){
        $("select").parent().parent().siblings(".row").children(".col-md-6").find(".required-count").text(charCounts['Conserving']);
    };

    $("textarea").keyup(function(){
        var text_and_span = $(this).siblings();
        var current_span = text_and_span.siblings('.current-count');
        var textCount = current_span.text( $(this).val().length);
        return textCount
    });

    $("select").change(function(){
        var row = $(this).parent().parent().siblings(".row");
        var text = $(this).children(':selected').text();
        if (text === "Include") {
            text = $(this).parent().siblings("h4").find("select").children(':selected').text()
        }

        if (text === "Exclude") {
            $(this).parents().siblings("h4").last().children().hide();
        } else {
            $(this).parents().siblings("h4").last().children().show();
        }
        row.children(".col-md-6").find(".required-count").text(charCounts[text]);
    });

    function getLastValue(dropdown) {
        // takes in the selector for the dropdown
        return dropdown.children().last().val();
    };

    function writePossiblePoints(selector, points) {
        // takes in the selector for the place to write
        selector.text(points);
    };

    function possiblePoints() {
        var points = getLastValue( $("#id_RA1_1_loa"));
        writePossiblePoints( $("#ra11-possible-points"), points);

        var points = getLastValue( $("#id_RA1_2_loa"));
        writePossiblePoints( $("#ra12-possible-points"), points);

        var points = getLastValue( $("#id_RA1_4_loa"));
        writePossiblePoints( $("#ra14-possible-points"), points);

        var points = getLastValue( $("#id_RA1_5_loa"));
        writePossiblePoints( $("#ra15-possible-points"), points);

        var points = getLastValue( $("#id_RA1_6_loa"));
        writePossiblePoints( $("#ra16-possible-points"), points);

        var points = getLastValue( $("#id_RA2_2_loa"));
        writePossiblePoints( $("#ra22-possible-points"), points);

        var points = getLastValue( $("#id_RA3_1_loa"));
        writePossiblePoints( $("#ra31-possible-points"), points);

        var points = getLastValue( $("#id_RA3_2_loa"));
        writePossiblePoints( $("#ra32-possible-points"), points);

        var points = getLastValue( $("#id_RA3_3_loa"));
        writePossiblePoints( $("#ra33-possible-points"), points);

        var points = getLastValue( $("#id_NW1_1_loa"));
        writePossiblePoints( $("#nw11-possible-points"), points);

        var points = getLastValue( $("#id_NW2_2_loa"));
        writePossiblePoints( $("#nw22-possible-points"), points);

        var points = getLastValue( $("#id_NW2_3_loa"));
        writePossiblePoints( $("#nw23-possible-points"), points);

        var points = getLastValue( $("#id_NW2_4_loa"));
        writePossiblePoints( $("#nw24-possible-points"), points);

        var points = getLastValue( $("#id_NW3_1_loa"));
        writePossiblePoints( $("#nw31-possible-points"), points);

        var points = getLastValue( $("#id_RR1_1_loa"));
        writePossiblePoints( $("#rr11-possible-points"), points);
    };

    function selectedPoints(){
        // dropdown
        // h4 id  ----------------------- dropdown + :selected
        if (parseInt($(".data").html()) === 2){
            $("#id_RA1_1_loa").val('20').ready(function() {
                $("#ra11-selected-points").text($("#id_RA1_1_loa :selected").val());
            });
        };
        $("#id_RA1_1_loa").change(function() {
            $("#ra11-selected-points").text($("#id_RA1_1_loa :selected").val());
        });
         if (parseInt($(".data").html()) === 2){
            $("#id_RA1_2_loa").val('12').ready(function() {
                $("#ra12-selected-points").text($("#id_RA1_2_loa :selected").val());
            });
        };
        $("#id_RA1_2_loa").change(function() {
            $("#ra12-selected-points").text($("#id_RA1_2_loa :selected").val());
        });
         if (parseInt($(".data").html()) === 2){
            $("#id_RA1_4_loa").val('16').ready(function() {
                $("#ra14-selected-points").text($("#id_RA1_4_loa :selected").val());
            });
        };
        $("#id_RA1_4_loa").change(function() {
            $("#ra14-selected-points").text($("#id_RA1_4_loa :selected").val());
        });

        if (parseInt($(".data").html()) === 2){
            $("#id_RA1_5_loa").val('16').ready(function() {
                $("#ra15-selected-points").text($("#id_RA1_5_loa :selected").val());
            });
        };
        $("#id_RA1_5_loa").change(function() {
            $("#ra15-selected-points").text($("#id_RA1_5_loa :selected").val());
        });
        if (parseInt($(".data").html()) === 2){
            $("#id_RA1_6_loa").val('8').ready(function() {
                $("#ra16-selected-points").text($("#id_RA1_6_loa :selected").val());
            });
        };
        $("#id_RA1_6_loa").change(function() {
            $("#ra16-selected-points").text($("#id_RA1_6_loa :selected").val());
        });
        if (parseInt($(".data").html()) === 2){
            $("#id_RA2_2_loa").val('12').ready(function() {
                $("#ra22-selected-points").text($("#id_RA2_2_loa :selected").val());
            });
        };
        $("#id_RA2_2_loa").change(function() {
            $("#ra22-selected-points").text($("#id_RA2_2_loa :selected").val());
        });
        if (parseInt($(".data").html()) === 2){
            $("#id_RA3_1_loa").val('22').ready(function() {
                $("#ra31-selected-points").text($("#id_RA3_1_loa :selected").val());
            });
        };
        $("#id_RA3_1_loa").change(function() {
            $("#ra31-selected-points").text($("#id_ra3_1_loa :selected").val());
        });
        if (parseInt($(".data").html()) === 2){
            $("#id_RA3_2_loa").val('22').ready(function() {
                $("#ra32-selected-points").text($("#id_RA3_2_loa :selected").val());
            });
        };
        $("#id_RA3_2_loa").change(function() {
            $("#ra32-selected-points").text($("#id_RA3_2_loa :selected").val());
        });
        if (parseInt($(".data").html()) === 2){
            $("#id_RA3_3_loa").val('8').ready(function() {
                $("#ra33-selected-points").text($("#id_RA3_3_loa :selected").val());
            });
        };
        $("#id_RA3_3_loa").change(function() {
            $("#ra33-selected-points").text($("#id_RA3_3_loa :selected").val());
        });
        if (parseInt($(".data").html()) === 2){
            $("#id_NW1_1_loa").val('24').ready(function() {
                $("#nw11-selected-points").text($("#id_NW1_1_loa :selected").val());
            });
        };
        $("#id_NW1_1_loa").change(function() {
            $("#nw11-selected-points").text($("#id_NW1_1_loa :selected").val());
        });

        if (parseInt($(".data").html()) === 2){
            $("#id_NW2_2_loa").val('24').ready(function() {
                $("#nw22-selected-points").text($("#id_NW2_2_loa :selected").val());
            });
        };
        $("#id_NW2_2_loa").change(function() {
            $("#nw22-selected-points").text($("#id_NW2_2_loa :selected").val());
        });

        if (parseInt($(".data").html()) === 2){
            $("#id_NW2_3_loa").val('12').ready(function() {
                $("#nw23-selected-points").text($("#id_NW2_3_loa :selected").val());
            });
        };
        $("#id_NW2_3_loa").change(function() {
            $("#nw23-selected-points").text($("#id_NW2_3_loa :selected").val());
        });

        if (parseInt($(".data").html()) === 2){
            $("#id_NW2_4_loa").val('18').ready(function() {
                $("#nw24-selected-points").text($("#id_NW2_4_loa :selected").val());
            });
        };
        $("#id_NW2_4_loa").change(function() {
            $("#nw24-selected-points").text($("#id_NW2_4_loa :selected").val());
        });

        if (parseInt($(".data").html()) === 2){
            $("#id_NW3_1_loa").val('18').ready(function() {
                $("#nw31-selected-points").text($("#id_NW3_1_loa :selected").val());
            });
        };
        $("#id_NW3_1_loa").change(function() {
            $("#nw31-selected-points").text($("#id_NW3_1_loa :selected").val());
        });

        if (parseInt($(".data").html()) === 2){
            $("#id_RR1_1_loa").val('25').ready(function() {
                $("#rr11-selected-points").text($("#id_RR1_1_loa :selected").val());
            });
        };
        $("#id_RR1_1_loa").change(function() {
            $("#rr11-selected-points").text($("#id_RR1_1_loa :selected").val());
        });

    };
    
    function included(){
        $("#id_RA1_1_inc").change(function(){
           if ($("#id_RA1_1_inc :selected").val() == 1) {
               $("#id_RA1_1_loa").val(0);
               writePossiblePoints( $("#ra11-selected-points"), 0 );
               writePossiblePoints( $("#ra11-possible-points"), 0 );
           }
           else {
               if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
                   writePossiblePoints($("#ra11-possible-points"), getLastValue($("#id_RA1_1_loa")));
                   $("#id_RA1_1_loa").val('20').ready(function () {
                       $("#ra11-selected-points").text($("#id_RA1_1_loa :selected").val());
                       $("select").parent().parent().siblings(".row").children(".col-md-6").find(".required-count").text(charCounts['Conserving']);
                   })
               }
               else {
                   writePossiblePoints( $("#ra11-possible-points"), getLastValue($("#id_RA1_1_loa")) );
                   $("#ra11-selected-points").text($("#id_RA1_1_loa :selected").val());
               };
           };
        });
         $("#id_RA1_2_inc").change(function(){
           if ($("#id_RA1_2_inc :selected").val() == 1) {
               $("#id_RA1_2_loa").val(0);
               writePossiblePoints( $("#ra12-selected-points"), 0 );
               writePossiblePoints( $("#ra12-possible-points"), 0 );
           } else {
               if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
                   writePossiblePoints($("#ra12-possible-points"), getLastValue($("#id_RA1_2_loa")));
                   $("#id_RA1_2_loa").val('12').ready(function () {
                       $("#ra12-selected-points").text($("#id_RA1_2_loa :selected").val());
                       $("select").parent().parent().siblings(".row").children(".col-md-6").find(".required-count").text(charCounts['Conserving']);
                   })
               }
               else {
                   writePossiblePoints( $("#ra12-possible-points"), getLastValue($("#id_RA1_2_loa")) );
                   $("#ra12-selected-points").text($("#id_RA1_2_loa :selected").val());
               };
           };
        });
        $("#id_RA1_4_inc").change(function(){
           if ($("#id_RA1_4_inc :selected").val() == 1) {
               $("#id_RA1_4_loa").val(0);
               writePossiblePoints( $("#ra14-selected-points"), 0 );
               writePossiblePoints( $("#ra14-possible-points"), 0 );
           } else {
               if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
                   writePossiblePoints($("#ra14-possible-points"), getLastValue($("#id_RA1_4_loa")));
                   $("#id_RA1_4_loa").val('16').ready(function () {
                       $("#ra14-selected-points").text($("#id_RA1_4_loa :selected").val());
                       $("select").parent().parent().siblings(".row").children(".col-md-6").find(".required-count").text(charCounts['Conserving']);
                   })
               }
               else {
                   writePossiblePoints( $("#ra14-possible-points"), getLastValue($("#id_RA1_4_loa")) );
                   $("#ra14-selected-points").text($("#id_RA1_4_loa :selected").val());
               };
           };
        });
         $("#id_RA1_5_inc").change(function(){
           if ($("#id_RA1_5_inc :selected").val() == 1) {
               $("#id_RA1_5_loa").val(0);
               writePossiblePoints( $("#ra15-selected-points"), 0 );
               writePossiblePoints( $("#ra15-possible-points"), 0 );
           } else {
               if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
                   writePossiblePoints($("#ra15-possible-points"), getLastValue($("#id_RA1_5_loa")));
                   $("#id_RA1_5_loa").val('16').ready(function () {
                       $("#ra15-selected-points").text($("#id_RA1_5_loa :selected").val());
                       $("select").parent().parent().siblings(".row").children(".col-md-6").find(".required-count").text(charCounts['Restorative']);
                   })
               }
               else {
                   writePossiblePoints( $("#ra15-possible-points"), getLastValue($("#id_RA1_5_loa")) );
                   $("#ra15-selected-points").text($("#id_RA1_5_loa :selected").val());
               };
           };
        });
         $("#id_RA1_6_inc").change(function(){
           if ($("#id_RA1_6_inc :selected").val() == 1) {
               $("#id_RA1_6_loa").val(0);
               writePossiblePoints( $("#ra16-selected-points"), 0 );
               writePossiblePoints( $("#ra16-possible-points"), 0 );
           } else {
               if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
                   writePossiblePoints($("#ra16-possible-points"), getLastValue($("#id_RA1_6_loa")));
                   $("#id_RA1_6_loa").val('8').ready(function () {
                       $("#ra16-selected-points").text($("#id_RA1_6_loa :selected").val());
                       $("select").parent().parent().siblings(".row").children(".col-md-6").find(".required-count").text(charCounts['Conserving']);
                   })
               }
               else {
                   writePossiblePoints( $("#ra16-possible-points"), getLastValue($("#id_RA1_6_loa")) );
                   $("#ra16-selected-points").text($("#id_RA1_6_loa :selected").val());
               };
           };
        });
         $("#id_RA2_2_inc").change(function(){
           if ($("#id_RA2_2_inc :selected").val() == 1) {
               $("#id_RA2_2_loa").val(0);
               writePossiblePoints( $("#ra22-selected-points"), 0 );
               writePossiblePoints( $("#ra22-possible-points"), 0 );
           } else {
               if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
                   writePossiblePoints($("#ra22-possible-points"), getLastValue($("#id_RA2_2_loa")));
                   $("#id_RA2_2_loa").val('12').ready(function () {
                       $("#ra22-selected-points").text($("#id_RA2_2_loa :selected").val());
                       $("select").parent().parent().siblings(".row").children(".col-md-6").find(".required-count").text(charCounts['Conserving']);
                   })
               }
               else {
                   writePossiblePoints( $("#ra22-possible-points"), getLastValue($("#id_RA2_2_loa")) );
                   $("#ra22-selected-points").text($("#id_RA2_2_loa :selected").val());
               };
           };
        });
         $("#id_RA3_1_inc").change(function(){
           if ($("#id_RA3_1_inc :selected").val() == 1) {
               $("#id_RA3_1_loa").val(0);
               writePossiblePoints( $("#ra31-selected-points"), 0 );
               writePossiblePoints( $("#ra31-possible-points"), 0 );
           } else {
               if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
                   writePossiblePoints($("#ra31-possible-points"), getLastValue($("#id_RA3_1_loa")));
                   $("#id_RA3_1_loa").val('22').ready(function () {
                       $("#ra31-selected-points").text($("#id_RA3_1_loa :selected").val());
                       $("select").parent().parent().siblings(".row").children(".col-md-6").find(".required-count").text(charCounts['Restorative']);
                   })
               }
               else {
                   writePossiblePoints( $("#ra31-possible-points"), getLastValue($("#id_RA3_1_loa")) );
                   $("#ra31-selected-points").text($("#id_RA3_1_loa :selected").val());
               };
           };
        });
         $("#id_RA3_2_inc").change(function(){
           if ($("#id_RA3_3_inc :selected").val() == 1) {
               $("#id_RA3_2_loa").val(0);
               writePossiblePoints( $("#ra32-selected-points"), 0 );
               writePossiblePoints( $("#ra32-possible-points"), 0 );
           } else {
               if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
                   writePossiblePoints($("#ra32-possible-points"), getLastValue($("#id_RA3_2_loa")));
                   $("#id_RA3_2_loa").val('22').ready(function () {
                       $("#ra32-selected-points").text($("#id_RA3_2_loa :selected").val());
                       $("select").parent().parent().siblings(".row").children(".col-md-6").find(".required-count").text(charCounts['Restorative']);
                   })
               }
               else {
                   writePossiblePoints( $("#nra32-possible-points"), getLastValue($("#id_RA3_2_loa")) );
                   $("#ra32-selected-points").text($("#id_RA3_2_loa :selected").val());
               };
           };
        });
         $("#id_RA3_3_inc").change(function(){
           if ($("#id_RA3_3_inc :selected").val() == 1) {
               $("#id_RA3_3_loa").val(0);
               writePossiblePoints( $("#ra33-selected-points"), 0 );
               writePossiblePoints( $("#ra33-possible-points"), 0 );
           } else {
               if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
                   writePossiblePoints($("#ra33-possible-points"), getLastValue($("#id_RA3_3_loa")));
                   $("#id_RA3_3_loa").val('8').ready(function () {
                       $("#ra33-selected-points").text($("#id_RA3_3_loa :selected").val());
                       $("select").parent().parent().siblings(".row").children(".col-md-6").find(".required-count").text(charCounts['Conserving']);
                   })
               }
               else {
                   writePossiblePoints( $("#ra33-possible-points"), getLastValue($("#id_RA3_3_loa")) );
                   $("#ra33-selected-points").text($("#id_RA3_3_loa :selected").val());
               };
           };
        });
         $("#id_NW1_1_inc").change(function(){
           if ($("#id_NW1_1_inc :selected").val() == 1) {
               $("#id_NW1_1_loa").val(0);
               writePossiblePoints( $("#nw11-selected-points"), 0 );
               writePossiblePoints( $("#nw11-possible-points"), 0 );
           } else {
               if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
                   writePossiblePoints($("#nw11-possible-points"), getLastValue($("#id_NW1_1_loa")));
                   $("#id_NW1_1_loa").val('24').ready(function () {
                       $("#nw11-selected-points").text($("#id_NW1_1_loa :selected").val());
                       $("select").parent().parent().siblings(".row").children(".col-md-6").find(".required-count").text(charCounts['Restorative']);
                   })
               }
               else {
                   writePossiblePoints( $("#nw11-possible-points"), getLastValue($("#id_NW1_1_loa")) );
                   $("#nw11-selected-points").text($("#id_NW1_1_loa :selected").val());
               };
           };
        });
        $("#id_NW2_2_inc").change(function(){
           if ($("#id_NW2_2_inc :selected").val() == 1) {
               $("#id_NW2_2_loa").val(0);
               writePossiblePoints( $("#nw22-selected-points"), 0 );
               writePossiblePoints( $("#nw22-possible-points"), 0 );
           } else {
               if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
                   writePossiblePoints($("#nw22-possible-points"), getLastValue($("#id_NW2_2_loa")));
                   $("#id_NW2_2_loa").val('24').ready(function () {
                       $("#nw22-selected-points").text($("#id_NW2_2_loa :selected").val());
                       $("select").parent().parent().siblings(".row").children(".col-md-6").find(".required-count").text(charCounts['Restorative']);
                   })
               }
               else {
                   writePossiblePoints( $("#nw22-possible-points"), getLastValue($("#id_NW2_2_loa")) );
                   $("#nw22-selected-points").text($("#id_NW2_2_loa :selected").val());
               };
           };
        });
        $("#id_NW2_3_inc").change(function(){
           if ($("#id_NW2_3_inc :selected").val() == 1) {
               $("#id_NW2_3_loa").val(0);
               writePossiblePoints( $("#nw23-selected-points"), 0 );
               writePossiblePoints( $("#nw23-possible-points"), 0 );
           } else {
               if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
                   writePossiblePoints($("#nw23-possible-points"), getLastValue($("#id_NW2_3_loa")));
                   $("#id_NW2_3_loa").val('12').ready(function () {
                       $("#nw23-selected-points").text($("#id_NW2_3_loa :selected").val());
                       $("select").parent().parent().siblings(".row").children(".col-md-6").find(".required-count").text(charCounts['Restorative']);
                   })
               }
               else {
                   writePossiblePoints( $("#nw23-possible-points"), getLastValue($("#id_NW2_3_loa")) );
                   $("#nw23-selected-points").text($("#id_NW2_3_loa :selected").val());
               };
           };
        });
        $("#id_NW2_4_inc").change(function(){
           if ($("#id_NW2_4_inc :selected").val() == 1) {
               $("#id_NW2_4_loa").val(0);
               writePossiblePoints( $("#nw24-selected-points"), 0 );
               writePossiblePoints( $("#nw24-possible-points"), 0 );
           } else {
               if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
                   writePossiblePoints($("#nw24-possible-points"), getLastValue($("#id_NW2_4_loa")));
                   $("#id_NW2_4_loa").val('18').ready(function () {
                       $("#nw24-selected-points").text($("#id_NW2_4_loa :selected").val());
                       $("select").parent().parent().siblings(".row").children(".col-md-6").find(".required-count").text(charCounts['Restorative']);
                   })
               }
               else {
                   writePossiblePoints( $("#nw24-possible-points"), getLastValue($("#id_NW2_4_loa")) );
                   $("#nw24-selected-points").text($("#id_NW2_4_loa :selected").val());
               };
           };
        });
        $("#id_NW3_1_inc").change(function(){
           if ($("#id_NW3_1_inc :selected").val() == 1) {
               $("#id_NW3_1_loa").val(0);
               writePossiblePoints( $("#nw31-selected-points"), 0 );
               writePossiblePoints( $("#nw31-possible-points"), 0 );
           } else {
               if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
                   writePossiblePoints($("#nw31-possible-points"), getLastValue($("#id_NW3_1_loa")));
                   $("#id_NW3_1_loa").val('18').ready(function () {
                       $("#nw31-selected-points").text($("#id_NW3_1_loa :selected").val());
                       $("select").parent().parent().siblings(".row").children(".col-md-6").find(".required-count").text(charCounts['Restorative']);
                   })
               }
               else {
                   writePossiblePoints( $("#nw31-possible-points"), getLastValue($("#id_NW3_1_loa")) );
                   $("#nw31-selected-points").text($("#id_NW3_1_loa :selected").val());
               };
           };
        });
        $("#id_RR1_1_inc").change(function(){
           if ($("#id_RR1_1_inc :selected").val() == 1) {
               $("#id_RR1_1_loa").val(0);
               writePossiblePoints( $("#rr11-selected-points"), 0 );
               writePossiblePoints( $("#rr11-possible-points"), 0 );
           } else {
               if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
                   writePossiblePoints($("#rr11-possible-points"), getLastValue($("#id_RR1_1_loa")));
                   $("#id_RR1_1_loa").val('25').ready(function () {
                       $("#rr11-selected-points").text($("#id_RR1_1_loa :selected").val());
                       $("select").parent().parent().siblings(".row").children(".col-md-6").find(".required-count").text(charCounts['Restorative']);
                   })
               }
               else {
                   writePossiblePoints( $("#rr11-possible-points"), getLastValue($("#id_RR1_1_loa")) );
                   $("#rr11-selected-points").text($("#id_RR1_1_loa :selected").val());
               };
           };
        });
    };

    function cost() {
        if (parseInt($(".data").html()) === 1 || parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
            $("#id_RA1_1_cost").val('-3').ready(function () {
                $("#RA11-cost").text($("#id_RA1_1_cost :selected").val());
            });
        };

        $("#id_RA1_1_cost").change(function () {
            $("#ra11-cost").text($("#id_RA1_1_cost :selected").val());
        });
        if (parseInt($(".data").html()) === 1 || parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
            $("#id_RA1_2_cost").val('-3').ready(function () {
                $("#ra12-cost").text($("#id_QL1_2_cost :selected").val());
            });
        };

        $("#id_RA1_2_cost").change(function () {
            $("#ra12-cost").text($("#id_RA1_2_cost :selected").val());
        });
        if (parseInt($(".data").html()) === 1 || parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
            $("#id_RA1_4_cost").val('-3').ready(function () {
                $("#ra14-cost").text($("#id_RA1_4_cost :selected").val());
            });
        };

        $("#id_RA1_4_cost").change(function () {
            $("#ra14-cost").text($("#id_RA1_4_cost :selected").val());
        });
        if (parseInt($(".data").html()) === 1 || parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
            $("#id_RA1_5_cost").val('-3').ready(function () {
                $("#ra15-cost").text($("#id_RA1_5_cost :selected").val());
            });
        };

        $("#id_RA1_5_cost").change(function () {
            $("#ra15-cost").text($("#id_RA1_5_cost :selected").val());
        });
        if (parseInt($(".data").html()) === 1 || parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
            $("#id_RA1_6_cost").val('-3').ready(function () {
                $("#ra16-cost").text($("#id_RA1_6_cost :selected").val());
            });
        };

        $("#id_RA1_6_cost").change(function () {
            $("#ra16-cost").text($("#id_RA1_6_cost :selected").val());
        });
        if (parseInt($(".data").html()) === 1 || parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
            $("#id_RA2_2_cost").val('-3').ready(function () {
                $("#ra22-cost").text($("#id_RA2_2_cost :selected").val());
            });
        };

        $("#id_RA2_2_cost").change(function () {
            $("#ra22-cost").text($("#id_RA2_2_cost :selected").val());
        });
        if (parseInt($(".data").html()) === 1 || parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
            $("#id_RA3_1_cost").val('-3').ready(function () {
                $("#ra31-cost").text($("#id_RA3_1_cost :selected").val());
            });
        };

        $("#id_RA3_1_cost").change(function () {
            $("#ra31-cost").text($("#id_RA3_1_cost :selected").val());
        });
        if (parseInt($(".data").html()) === 1 || parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
            $("#id_RA3_2_cost").val('-3').ready(function () {
                $("#ra32-cost").text($("#id_RA3_2_cost :selected").val());
            });
        };

        $("#id_RA3_2_cost").change(function () {
            $("#nw32-cost").text($("#id_RA3_2_cost :selected").val());
        });
        if (parseInt($(".data").html()) === 1 || parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
            $("#id_RA3_3_cost").val('-3').ready(function () {
                $("#ra33-cost").text($("#id_RA3_3_cost :selected").val());
            });
        };

        $("#id_RA3_3_cost").change(function () {
            $("#ra33-cost").text($("#id_RA3_3_cost :selected").val());
        });
        if (parseInt($(".data").html()) === 1 || parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
            $("#id_NW1_1_cost").val('-3').ready(function () {
                $("#nw11-cost").text($("#id_NW1_1_cost :selected").val());
            });
        };

        $("#id_NW1_1_cost").change(function () {
            $("#nw11-cost").text($("#id_NW1_1_cost :selected").val());
        });
        if (parseInt($(".data").html()) === 1 || parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
            $("#id_NW2_2_cost").val('-3').ready(function () {
                $("#nw22-cost").text($("#id_NW2_2_cost :selected").val());
            });
        };

        $("#id_NW2_2_cost").change(function () {
            $("#nw22-cost").text($("#id_NW2_2_cost :selected").val());
        });
        if (parseInt($(".data").html()) === 1 || parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
            $("#id_NW2_3_cost").val('-3').ready(function () {
                $("#nw23-cost").text($("#id_NW2_3_cost :selected").val());
            });
        };

        $("#id_NW2_3_cost").change(function () {
            $("#nw23-cost").text($("#id_NW2_3_cost :selected").val());
        });
        if (parseInt($(".data").html()) === 1 || parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
            $("#id_NW2_4_cost").val('-3').ready(function () {
                $("#nw24-cost").text($("#id_NW2_4_cost :selected").val());
            });
        };

        $("#id_NW2_4_cost").change(function () {
            $("#nw24-cost").text($("#id_NW2_4_cost :selected").val());
        });
        if (parseInt($(".data").html()) === 1 || parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
            $("#id_NW3_1_cost").val('-3').ready(function () {
                $("#nw31-cost").text($("#id_NW3_1_cost :selected").val());
            });
        };

        $("#id_NW3_1_cost").change(function () {
            $("#nw31-cost").text($("#id_NW3_1_cost :selected").val());
        });
        if (parseInt($(".data").html()) === 1 || parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
            $("#id_RR1_1_cost").val('-3').ready(function () {
                $("#rr11-cost").text($("#id_RR1_1_cost :selected").val());
            });
        };

        $("#id_RR1_1_cost").change(function () {
            $("#rr11-cost").text($("#id_RR1_1_cost :selected").val());
        });
    };
     function totalPossiblePoints() {
        var arr = $(".possible-points");
        var total = 0;
        for (var i = 0; i < arr.length; i++) {
            total += parseInt(arr[i].innerHTML);
        };
        $("#total-possible").text(total);
    };

    function totalSelectedPoints() {
        var arr = $(".selected-points");
        var total = 0;
        for (var i = 0; i < arr.length; i++) {
            total += parseInt(arr[i].innerHTML);
        };
        $("#total-selected").text(total);
    };

    $("select").ready(function(){
        setTimeout(function(){
            totalSelectedPoints();
        }, 1);
    });

    $("select").change(function(){
        setTimeout(function(){
            totalPossiblePoints();
            totalSelectedPoints();
        }, 1);
    });

    if (parseInt($(".data").html()) === 2){
        $(".version-two").show();
    };

    if (parseInt($(".data").html()) === 1){
        $(".version-one").show();
    };

    if (parseInt($(".data").html()) === 3){
        $(".version-two").show();
    };

    $("#id_total_time").hide();


    possiblePoints();
    selectedPoints();
    included();
    cost();
    totalPossiblePoints();
    totalSelectedPoints();
});


