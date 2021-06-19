$(document).ready(function(){
    $("#submit").click(function(){
        $("#reversetab").removeClass('active');
        $("#nearlysortedtab").removeClass('active');
        $("#uniquetab").removeClass('active');
        $("#randomtab").addClass('active');
        document.getElementById("data").innerHTML = document.getElementById("timerandom").innerHTML;
        document.getElementById("comparisons").innerHTML = document.getElementById("comprandom").innerHTML;
        document.getElementById("swaps").innerHTML = document.getElementById("swapsrandom").innerHTML;
        // destroy();
        graph();
        document.getElementById("reverse").style.display="none";
        document.getElementById("nearlysorted").style.display="none";
        document.getElementById("unique").style.display="none";
        document.getElementById("random").style.display="inline";
    })
    $("#randomtab").click(function(){
        $("#reversetab").removeClass('active');
        $("#nearlysortedtab").removeClass('active');
        $("#uniquetab").removeClass('active');
        $("#randomtab").addClass('active');
        document.getElementById("data").innerHTML = document.getElementById("timerandom").innerHTML;
        document.getElementById("comparisons").innerHTML = document.getElementById("comprandom").innerHTML;
        document.getElementById("swaps").innerHTML = document.getElementById("swapsrandom").innerHTML;
        // destroy();
        graph();
        document.getElementById("reverse").style.display="none";
        document.getElementById("nearlysorted").style.display="none";
        document.getElementById("unique").style.display="none";
        document.getElementById("random").style.display="inline";
        // $("#reverse").addClass('fade');
        // $("#nearlysorted").addClass('fade');
        // $("#unique").addClass('fade');
        // $("#random").removeClass('fade');
        // $("#random").addClass('active');
    })
    $("#reversetab").click(function(){
        $("#nearlysortedtab").removeClass('active');
        $("#uniquetab").removeClass('active');
        $("#randomtab").removeClass('active');
        $("#reversetab").addClass('active');
        document.getElementById("data").innerHTML = document.getElementById("timereverse").innerHTML;
        document.getElementById("comparisons").innerHTML = document.getElementById("compreverse").innerHTML;
        document.getElementById("swaps").innerHTML = document.getElementById("swapsreverse").innerHTML;
        // destroy();
        graph();
        document.getElementById("reverse").style.display="inline";
        document.getElementById("nearlysorted").style.display="none";
        document.getElementById("unique").style.display="none";
        document.getElementById("random").style.display="none";
        // $("#reverse").removeClass('fade');
        // $("#nearlysorted").addClass('fade');
        // $("#unique").addClass('fade');
        // $("#random").addClass('fade');
        // $("#reverse").addClass('active');    
    })    
    $("#nearlysortedtab").click(function(){
        $("#reversetab").removeClass('active');
        $("#uniquetab").removeClass('active');
        $("#randomtab").removeClass('active');
        $("#nearlysortedtab").addClass('active');
        document.getElementById("data").innerHTML = document.getElementById("timenearlysorted").innerHTML;
        document.getElementById("comparisons").innerHTML = document.getElementById("compnearlysorted").innerHTML;
        document.getElementById("swaps").innerHTML = document.getElementById("swapsnearlysorted").innerHTML;
        // destroy();
        graph();
        document.getElementById("reverse").style.display="none";
        document.getElementById("nearlysorted").style.display="inline";
        document.getElementById("unique").style.display="none";
        document.getElementById("random").style.display="none";        
        // $("#reverse").addClass('fade');
        // $("#nearlysorted").removeClass('fade');
        // $("#unique").addClass('fade');
        // $("#random").addClass('fade');
        // $("#nearlysorted").addClass('active');
    })
    $("#uniquetab").click(function(){
        $("#reversetab").removeClass('active');
        $("#nearlysortedtab").removeClass('active');
        $("#randomtab").removeClass('active');
        $("#uniquetab").addClass('active');
        document.getElementById("data").innerHTML = document.getElementById("timeunique").innerHTML;
        document.getElementById("comparisons").innerHTML = document.getElementById("compunique").innerHTML;
        document.getElementById("swaps").innerHTML = document.getElementById("swapsunique").innerHTML;
        // destroy();
        graph();
        document.getElementById("reverse").style.display="none";
        document.getElementById("nearlysorted").style.display="none";
        document.getElementById("unique").style.display="inline";
        document.getElementById("random").style.display="none";        
        // $("#reverse").addClass('fade');
        // $("#nearlysorted").addClass('fade');
        // $("#unique").removeClass('fade');
        // $("#random").addClass('fade');
        // $("#unique").addClass('active');    
    })
})