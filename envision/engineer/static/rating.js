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
        'Improved': 100,
        'Enhanced': 150,
        'Superior': 200,
        'Conserving': 250,
        'Restorative': 300,
        'Exclude': 70,
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
    if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3){
        $("select").parent().siblings(".row").find(".required-count").text(charCounts['Restorative']);
    };
    //Popup for not meeting restorative
    //if ($("select").parent().siblings(".row").find(".required-count").text() == 'Restorative') {
    //    $("#arrows").hide()
    //};

    //character count for textarea

    $("textarea").keyup(function(){
        var text_and_span = $(this).siblings();
        var current_span = text_and_span.siblings('.current-count');
        var textCount = current_span.text( $(this).val().length);
        return textCount
    });

    $("select").change(function(){
        var row = $(this).parent().siblings(".row");
        var text = $(this).children(':selected').text();
        if (text === "Include") {
            text = $(this).parent().siblings("h4").find("select").children(':selected').text()
        }

        if (text === "Exclude") {
            $(this).parents().siblings("h4").last().children().hide();
        } else {
            $(this).parents().siblings("h4").last().children().show();
        }
        row.find(".required-count").text(charCounts[text]);
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
        var points = getLastValue( $("#id_QL1_2_loa"));
        writePossiblePoints( $("#ql12-possible-points"), points);

        var points = getLastValue( $("#id_QL2_3_loa"));
        writePossiblePoints( $("#ql23-possible-points"), points);

        var points = getLastValue( $("#id_QL2_5_loa"));
        writePossiblePoints( $("#ql25-possible-points"), points);

        var points = getLastValue( $("#id_QL3_2_loa"));
        writePossiblePoints( $("#ql32-possible-points"), points);

        var points = getLastValue( $("#id_QL3_3_loa"));
        writePossiblePoints( $("#ql33-possible-points"), points);

        var points = getLastValue( $("#id_NW1_2_loa"));
        writePossiblePoints( $("#nw12-possible-points"), points);

        var points = getLastValue( $("#id_NW2_3_loa"));
        writePossiblePoints( $("#nw23-possible-points"), points);

        var points = getLastValue( $("#id_NW3_4_loa"));
        writePossiblePoints( $("#nw34-possible-points"), points);

        var points = getLastValue( $("#id_CR1_1_loa"));
        writePossiblePoints( $("#cr11-possible-points"), points);

        var points = getLastValue( $("#id_CR2_2_loa"));
        writePossiblePoints( $("#cr22-possible-points"), points);

    };

    function selectedPoints(){
        // dropdown
        // h4 id  ----------------------- dropdown + :selected
        if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3){
            $("#id_QL1_2_loa").val('16').ready(function() {
                $("#ql12-selected-points").text($("#id_QL1_2_loa :selected").val());
            });
        };
        $("#id_QL1_2_loa").change(function() {
            $("#ql12-selected-points").text($("#id_QL1_2_loa :selected").val());
            if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 1) {
                if ($("#id_QL1_2_loa :selected").val() != 16) {
                    $("#dialog_ql_1_2_2").dialog();
                }
            }
            if (parseInt($(".data").html()) === 3 ) {
             if ($("#id_QL1_2_loa :selected").val() == 16) {
                $( "#dialog_ql_1_2_3" ).dialog();
            }
           }
        });
         if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3){
            $("#id_QL2_3_loa").val('11').ready(function() {
                $("#ql23-selected-points").text($("#id_QL2_3_loa :selected").val());
            });
        };
        $("#id_QL2_3_loa").change(function() {
            $("#ql23-selected-points").text($("#id_QL2_3_loa :selected").val());
         //if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3){
         //   $("#id_QL2_5_loa").val('15').ready(function() {
         //       $("#ql25-selected-points").text($("#id_QL2_5_loa :selected").val());
            if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 1) {
                if ($("#id_QL2_3_loa :selected").val() != 11) {
                    $("#dialog_ql_2_3_2").dialog();
                }
            }
            if (parseInt($(".data").html()) === 3 ) {
             if ($("#id_QL2_3_loa :selected").val() == 11) {
                //alert('<msg>');
                $( "#dialog_ql_2_3_3" ).dialog();
            }
           }
            });
        if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3){
            $("#id_QL2_5_loa").val('15').ready(function() {
                $("#ql25-selected-points").text($("#id_QL2_5_loa :selected").val());
            });
        };
        $("#id_QL2_5_loa").change(function() {
            $("#ql25-selected-points").text($("#id_QL2_5_loa :selected").val());
            if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 1) {
                if ($("#id_QL2_5_loa :selected").val() != 15) {
                    $("#dialog_ql_2_5_2").dialog();
                }
            }
            if (parseInt($(".data").html()) === 3 ) {
             if ($("#id_QL2_5_loa :selected").val() == 15) {
                //alert('<msg>');
                $( "#dialog_ql_2_5_3" ).dialog();
            }
           }
        });

        if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3){
            $("#id_QL3_2_loa").val('14').ready(function() {
                $("#ql32-selected-points").text($("#id_QL3_2_loa :selected").val());
            });
        };
        $("#id_QL3_2_loa").change(function() {
            $("#ql32-selected-points").text($("#id_QL3_2_loa :selected").val());
            if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 1) {
                if ($("#id_QL3_2_loa :selected").val() != 14) {
                    $("#dialog_ql_3_2_2").dialog();
                }
            }
            if (parseInt($(".data").html()) === 3 ) {
             if ($("#id_QL3_2_loa :selected").val() == 14) {
                //alert('<msg>');
                $( "#dialog_ql_3_2_3" ).dialog();
            }
           }
            });
        if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3){
            $("#id_QL3_3_loa").val('13').ready(function() {
                $("#ql33-selected-points").text($("#id_QL3_3_loa :selected").val());
            });
        };
        $("#id_QL3_3_loa").change(function() {
            $("#ql33-selected-points").text($("#id_QL3_3_loa :selected").val());
            if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 1) {
                if ($("#id_QL3_3_loa :selected").val() != 13) {
                    $("#dialog_ql_3_3_2").dialog();
                }
            }
            if (parseInt($(".data").html()) === 3 ) {
             if ($("#id_QL3_3_loa :selected").val() == 13) {
                //alert('<msg>');
                $( "#dialog_ql_3_3_3" ).dialog();
            }
           }
            });
        if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3){
            $("#id_NW1_2_loa").val('18').ready(function() {
                $("#nw12-selected-points").text($("#id_NW1_2_loa :selected").val());
            });
        };
        $("#id_NW1_2_loa").change(function() {
            $("#nw12-selected-points").text($("#id_NW1_2_loa :selected").val());
            if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 1) {
                if ($("#id_NW1_2_loa :selected").val() != 18) {
                    $("#dialog_nw_1_2_2").dialog();
                }
            }
            if (parseInt($(".data").html()) === 3 ) {
             if ($("#id_NW1_2_loa :selected").val() == 18) {
                //alert('<msg>');
                $( "#dialog_nw_1_2_3" ).dialog();
            }
           }
        });
        if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3){
            $("#id_NW2_3_loa").val('18').ready(function() {
                $("#nw23-selected-points").text($("#id_NW2_3_loa :selected").val());
            });
        };
        $("#id_NW2_3_loa").change(function() {
            $("#nw23-selected-points").text($("#id_NW2_3_loa :selected").val());
            if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 1) {
                if ($("#id_NW2_3_loa :selected").val() != 18) {
                    $("#dialog_nw_2_3_2").dialog();
                }
            }
            if (parseInt($(".data").html()) === 3 ) {
             if ($("#id_NW2_3_loa :selected").val() == 18) {
                //alert('<msg>');
                $( "#dialog_nw_2_3_3" ).dialog();
            }
           }
        });
        if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3){
            $("#id_NW3_4_loa").val('19').ready(function() {
                $("#nw34-selected-points").text($("#id_NW3_4_loa :selected").val());
            });
        };
        $("#id_NW3_4_loa").change(function() {
            $("#nw34-selected-points").text($("#id_NW3_4_loa :selected").val());
            if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 1) {
                if ($("#id_NW3_4_loa :selected").val() != 19) {
                    $("#dialog_nw_3_4_2").dialog();
                }
            }
            if (parseInt($(".data").html()) === 3 ) {
             if ($("#id_NW3_4_loa :selected").val() == 19) {
                //alert('<msg>');
                $( "#dialog_nw_3_4_3" ).dialog();
            }
           }
        });
        if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3){
            $("#id_CR1_1_loa").val('25').ready(function() {
                $("#cr11-selected-points").text($("#id_CR1_1_loa :selected").val());
            });
        };
        $("#id_CR1_1_loa").change(function() {
            $("#cr11-selected-points").text($("#id_CR1_1_loa :selected").val());
            if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 1) {
                if ($("#id_CR1_1_loa :selected").val() != 25) {
                    $("#dialog_cr_1_1_2").dialog();
                }
            }
            if (parseInt($(".data").html()) === 3 ) {
             if ($("#id_CR1_1_loa :selected").val() == 25) {
                //alert('<msg>');
                $( "#dialog_cr_1_1_3" ).dialog();
            }
           }
        });
        if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3){
            $("#id_CR2_2_loa").val('20').ready(function() {
                $("#cr22-selected-points").text($("#id_CR2_2_loa :selected").val());
            });
        };
        $("#id_CR2_2_loa").change(function() {
            $("#cr22-selected-points").text($("#id_CR2_2_loa :selected").val());
            if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 1) {
                if ($("#id_CR2_2_loa :selected").val() != 20) {
                    $("#dialog_cr_2_2_2").dialog();
                }
            }
            if (parseInt($(".data").html()) === 3 ) {
             if ($("#id_CR2_2_loa :selected").val() == 20) {
                //alert('<msg>');
                $( "#dialog_cr_2_2_3" ).dialog();
            }
           }
        });

    };


    function included(){
        $("#id_QL1_2_inc").change(function(){
           if ($("#id_QL1_2_inc :selected").val() == 1) {
               $("#id_QL1_2_loa").val(0);
               writePossiblePoints( $("#ql12-selected-points"), 0 );
               writePossiblePoints( $("#ql12-possible-points"), 0 );
           }
           else {
               if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
                   writePossiblePoints($("#ql12-possible-points"), getLastValue($("#id_QL1_2_loa")));
                   $("#id_QL1_2_loa").val('16').ready(function () {
                       $("#ql12-selected-points").text($("#id_QL1_2_loa :selected").val());
                       $("select").parent().siblings(".row").find(".required-count").text(charCounts['Restorative']);
                   })
               }
               else {
                   writePossiblePoints( $("#ql12-possible-points"), getLastValue($("#id_QL1_2_loa")) );
                   $("#ql12-selected-points").text($("#id_QL1_2_loa :selected").val());
               };
           };
        });
         $("#id_QL2_3_inc").change(function(){
           if ($("#id_QL2_3_inc :selected").val() == 1) {
               $("#id_QL2_3_loa").val(0);
               writePossiblePoints( $("#ql23-selected-points"), 0 );
               writePossiblePoints( $("#ql23-possible-points"), 0 );
           } else {
               if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
                   writePossiblePoints($("#ql23-possible-points"), getLastValue($("#id_QL2_3_loa")));
                   $("#id_QL2_3_loa").val('11').ready(function () {
                       $("#ql23-selected-points").text($("#id_QL2_3_loa :selected").val());
                       $("select").parent().siblings(".row").find(".required-count").text(charCounts['Restorative']);
                   })
               }
               else {
                   writePossiblePoints( $("#ql23-possible-points"), getLastValue($("#id_QL2_3_loa")) );
                   $("#ql23-selected-points").text($("#id_QL2_3_loa :selected").val());
               };
           };
        });
        $("#id_QL2_5_inc").change(function(){
           if ($("#id_QL2_5_inc :selected").val() == 1) {
               $("#id_QL2_5_loa").val(0);
               writePossiblePoints( $("#ql25-selected-points"), 0 );
               writePossiblePoints( $("#ql25-possible-points"), 0 );
           } else {
               if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
                   writePossiblePoints($("#ql25-possible-points"), getLastValue($("#id_QL2_5_loa")));
                   $("#id_QL2_5_loa").val('15').ready(function () {
                       $("#ql25-selected-points").text($("#id_QL2_5_loa :selected").val());
                       $("select").parent().siblings(".row").find(".required-count").text(charCounts['Restorative']);
                   })
               }
               else {
                   writePossiblePoints( $("#ql25-possible-points"), getLastValue($("#id_QL2_5_loa")) );
                   $("#ql25-selected-points").text($("#id_QL2_5_loa :selected").val());
               };
           };
        });
         $("#id_QL3_2_inc").change(function(){
           if ($("#id_QL3_2_inc :selected").val() == 1) {
               $("#id_QL3_2_loa").val(0);
               writePossiblePoints( $("#ql32-selected-points"), 0 );
               writePossiblePoints( $("#ql32-possible-points"), 0 );
           } else {
               if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
                   writePossiblePoints($("#ql32-possible-points"), getLastValue($("#id_QL3_2_loa")));
                   $("#id_QL3_2_loa").val('14').ready(function () {
                       $("#ql32-selected-points").text($("#id_QL3_2_loa :selected").val());
                       $("select").parent().siblings(".row").find(".required-count").text(charCounts['Restorative']);
                   })
               }
               else {
                   writePossiblePoints( $("#ql32-possible-points"), getLastValue($("#id_QL3_2_loa")) );
                   $("#ql32-selected-points").text($("#id_QL3_2_loa :selected").val());
               };
           };
        });
         $("#id_QL3_3_inc").change(function(){
           if ($("#id_QL3_3_inc :selected").val() == 1) {
               $("#id_QL3_3_loa").val(0);
               writePossiblePoints( $("#ql33-selected-points"), 0 );
               writePossiblePoints( $("#ql33-possible-points"), 0 );
           } else {
               if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
                   writePossiblePoints($("#ql33-possible-points"), getLastValue($("#id_QL3_3_loa")));
                   $("#id_QL3_3_loa").val('18').ready(function () {
                       $("#ql33-selected-points").text($("#id_QL3_3_loa :selected").val());
                       $("select").parent().siblings(".row").find(".required-count").text(charCounts['Restorative']);
                   })
               }
               else {
                   writePossiblePoints( $("#ql33-possible-points"), getLastValue($("#id_QL3_3_loa")) );
                   $("#ql33-selected-points").text($("#id_QL3_3_loa :selected").val());
               };
           };
        });
         $("#id_NW1_2_inc").change(function(){
           if ($("#id_NW1_2_inc :selected").val() == 1) {
               $("#id_NW1_2_loa").val(0);
               writePossiblePoints( $("#nw12-selected-points"), 0 );
               writePossiblePoints( $("#nw12-possible-points"), 0 );
           } else {
               if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
                   writePossiblePoints($("#nw12-possible-points"), getLastValue($("#id_NW1_2_loa")));
                   $("#id_NW1_2_loa").val('18').ready(function () {
                       $("#nw12-selected-points").text($("#id_NW1_2_loa :selected").val());
                       $("select").parent().siblings(".row").find(".required-count").text(charCounts['Restorative']);
                   })
               }
               else {
                   writePossiblePoints( $("#nw12-possible-points"), getLastValue($("#id_NW1_2_loa")) );
                   $("#nw12-selected-points").text($("#id_NW1_2_loa :selected").val());
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
                   $("#id_NW2_3_loa").val('18').ready(function () {
                       $("#nw23-selected-points").text($("#id_NW2_3_loa :selected").val());
                       $("select").parent().siblings(".row").find(".required-count").text(charCounts['Restorative']);
                   })
               }
               else {
                   writePossiblePoints( $("#nw23-possible-points"), getLastValue($("#id_NW2_3_loa")) );
                   $("#nw23-selected-points").text($("#id_NW2_3_loa :selected").val());
               };
           };
        });
         $("#id_NW3_4_inc").change(function(){
           if ($("#id_NW3_4_inc :selected").val() == 1) {
               $("#id_NW3_4_loa").val(0);
               writePossiblePoints( $("#nw34-selected-points"), 0 );
               writePossiblePoints( $("#nw34-possible-points"), 0 );
           } else {
               if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
                   writePossiblePoints($("#nw34-possible-points"), getLastValue($("#id_NW3_4_loa")));
                   $("#id_NW3_4_loa").val('19').ready(function () {
                       $("#nw34-selected-points").text($("#id_NW3_4_loa :selected").val());
                       $("select").parent().siblings(".row").find(".required-count").text(charCounts['Restorative']);
                   })
               }
               else {
                   writePossiblePoints( $("#nw34-possible-points"), getLastValue($("#id_NW3_4_loa")) );
                   $("#nw34-selected-points").text($("#id_NW3_4_loa :selected").val());
               };
           };
        });
         $("#id_CR1_1_inc").change(function(){
           if ($("#id_CR1_1_inc :selected").val() == 1) {
               $("#id_CR1_1_loa").val(0);
               writePossiblePoints( $("#cr11-selected-points"), 0 );
               writePossiblePoints( $("#cr11-possible-points"), 0 );
           } else {
               if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
                   writePossiblePoints($("#cr11-possible-points"), getLastValue($("#id_CR1_1_loa")));
                   $("#id_CR1_1_loa").val('25').ready(function () {
                       $("#cr11-selected-points").text($("#id_CR1_1_loa :selected").val());
                       $("select").parent().siblings(".row").find(".required-count").text(charCounts['Restorative']);
                   })
               }
               else {
                   writePossiblePoints( $("#cr11-possible-points"), getLastValue($("#id_CR1_1_loa")) );
                   $("#cr11-selected-points").text($("#id_CR1_1_loa :selected").val());
               };
           };
        });
         $("#id_CR2_2_inc").change(function(){
           if ($("#id_CR2_2_inc :selected").val() == 1) {
               $("#id_CR2_2_loa").val(0);
               writePossiblePoints( $("#cr22-selected-points"), 0 );
               writePossiblePoints( $("#cr22-possible-points"), 0 );
           } else {
               if (parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
                   writePossiblePoints($("#cr22-possible-points"), getLastValue($("#id_CR2_2_loa")));
                   $("#id_CR2_2_loa").val('20').ready(function () {
                       $("#cr22-selected-points").text($("#id_CR2_2_loa :selected").val());
                       $("select").parent().siblings(".row").find(".required-count").text(charCounts['Restorative']);
                   })
               }
               else {
                   writePossiblePoints( $("#cr22-possible-points"), getLastValue($("#id_CR2_2_loa")) );
                   $("#cr22-selected-points").text($("#id_CR2_2_loa :selected").val());
               };
           };
        });
    };

    function cost() {
        if (parseInt($(".data").html()) === 1 || parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
            $("#id_QL1_2_cost").val('0').ready(function () {
                $("#ql12-cost").text($("#id_QL1_2_cost :selected").val());
            });
        };

        $("#id_QL1_2_cost").change(function () {
            $("#ql12-cost").text($("#id_QL1_2_cost :selected").val());
        });
        if (parseInt($(".data").html()) === 1 || parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
            $("#id_QL2_3_cost").val('0').ready(function () {
                $("#ql23-cost").text($("#id_QL2_3_cost :selected").val());
            });
        };

        $("#id_QL2_3_cost").change(function () {
            $("#ql23-cost").text($("#id_QL2_3_cost :selected").val());
        });
        if (parseInt($(".data").html()) === 1 || parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
            $("#id_QL2_5_cost").val('0').ready(function () {
                $("#ql25-cost").text($("#id_QL2_5_cost :selected").val());
            });
        };

        $("#id_QL2_5_cost").change(function () {
            $("#ql25-cost").text($("#id_QL2_5_cost :selected").val());
        });
        if (parseInt($(".data").html()) === 1 || parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
            $("#id_QL3_2_cost").val('0').ready(function () {
                $("#ql32-cost").text($("#id_QL3_2_cost :selected").val());
            });
        };

        $("#id_QL3_2_cost").change(function () {
            $("#ql32-cost").text($("#id_QL3_2_cost :selected").val());
        });
        if (parseInt($(".data").html()) === 1 || parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
            $("#id_QL3_3_cost").val('0').ready(function () {
                $("#ql33-cost").text($("#id_QL3_3_cost :selected").val());
            });
        };

        $("#id_QL3_3_cost").change(function () {
            $("#ql33-cost").text($("#id_QL3_3_cost :selected").val());
        });
        if (parseInt($(".data").html()) === 1 || parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
            $("#id_NW1_2_cost").val('0').ready(function () {
                $("#nw12-cost").text($("#id_NW1_2_cost :selected").val());
            });
        };

        $("#id_NW1_2_cost").change(function () {
            $("#nw12-cost").text($("#id_NW1_2_cost :selected").val());
        });
        if (parseInt($(".data").html()) === 1 || parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
            $("#id_NW2_3_cost").val('0').ready(function () {
                $("#nw23-cost").text($("#id_NW2_3_cost :selected").val());
            });
        };

        $("#id_NW2_3_cost").change(function () {
            $("#nw12-cost").text($("#id_NW1_2_cost :selected").val());
        });
        if (parseInt($(".data").html()) === 1 || parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
            $("#id_NW3_4_cost").val('0').ready(function () {
                $("#nw34-cost").text($("#id_NW3_4_cost :selected").val());
            });
        };

        $("#id_NW3_4_cost").change(function () {
            $("#nw34-cost").text($("#id_NW3_4_cost :selected").val());
        });
        if (parseInt($(".data").html()) === 1 || parseInt($(".data").html()) === 2 || parseInt($(".data").html()) === 3) {
            $("#id_CR1_1_cost").val('0').ready(function () {
                $("#cr11-cost").text($("#id_CR1_1_cost :selected").val());
            });
        };

        $("#id_CR2_2_cost").change(function () {
            $("#cr22-cost").text($("#id_CR2_2_cost :selected").val());
        });
        $("#id_CR2_2_cost").change(function () {
            $("#cr22-cost").text($("#id_CR2_2_cost :selected").val());
        });
    };
     function totalPossibelPoints() {
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
            totalPossibelPoints();
            totalSelectedPoints();
        }, 1);
    });

    if (parseInt($(".data").html()) === 2){
        $(".version-two-three").show();
        $(".disclosure-top-box").show();
    };

    if (parseInt($(".data").html()) === 3){
        $(".version-two-three").show();
    };

    $("#id_total_time").hide();


    possiblePoints();
    selectedPoints();
    included();
    cost();
    totalPossibelPoints();
    totalSelectedPoints();

});



