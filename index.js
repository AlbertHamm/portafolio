$(".descripcionProyecto").hide()

$(document).ready(function(){

    $("#iconogithub").click(function() {
        window.open('https://github.com/AlbertHamm', '_blank');
    })

    $("#iconotelegram").click(function() {
        window.open('https://t.me/+584245848445', '_blank');
    })

    $("#iconowhatsapp").click(function() {
        window.open('https://wa.me/584245848445', '_blank');
    })

    $("#iconotelefono").click(function() {
        window,open('tel:+584245848445')
    })

    $("#iconocorreo").click(function() {
        window,open('mailto:alberthamm@outlook.com')
    })

    $("#iconoubicacion").click(function() {
        window,open('https://maps.app.goo.gl/TAVVTYEerE96cy4X8')
    })

    $("#proyecto1").click(function() {
        Ocultar()
        if (!$(this).find(".descripcionProyecto").is(":visible")) {
            $(this).find(".descripcionProyecto").slideDown();
            $(this).css("background-image", "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.753)), url(img/proyecto1.gif)")
        }
    })
    $("#proyecto2").click(function() {
        Ocultar()
        if (!$(this).find(".descripcionProyecto").is(":visible")) {
            $(this).find(".descripcionProyecto").slideDown();
            $(this).css("background-image", "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.753)), url(img/proyecto2.gif)")
        }
    })
    $("#proyecto3").click(function() {
        Ocultar()
        if (!$(this).find(".descripcionProyecto").is(":visible")) {
            $(this).find(".descripcionProyecto").slideDown();
            $(this).css("background-image", "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.753)), url(img/proyecto3.gif)")
        }
    })
    $("#proyecto4").click(function() {
        Ocultar()
        if (!$(this).find(".descripcionProyecto").is(":visible")) {
            $(this).find(".descripcionProyecto").slideDown();
            $(this).css("background-image", "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.753)), url(img/proyecto4.gif)")
        }
    })
    
    function Ocultar() {
        $(".descripcionProyecto").slideUp();
        $("#proyecto1").css("background-image", "url(img/proyecto1.gif)")
        $("#proyecto2").css("background-image", "url(img/proyecto2.gif)")
        $("#proyecto3").css("background-image", "url(img/proyecto3.gif)")
        $("#proyecto4").css("background-image", "url(img/proyecto4.gif)")
    }
});