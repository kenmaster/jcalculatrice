<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Fcalc</title>
        <link type="text/css" rel="stylesheet" href="css/fcalc.css"/>
        <link type="text/css" rel="stylesheet" href="css/style.css"/>
        <link type="image/x-icon" href="img/icon_calculator.png" rel="shortcut icon"/>

        <script type="text/javascript" src="js/mootools.js"></script>
        <script type="text/javascript" src="js/fcalc.js"></script>
        <script src="js/cufon-yui.js" type="text/javascript"></script>
        <script src="js/League_Gothic_400.font.js" type="text/javascript"></script>
        <script type="text/javascript">
            Cufon.replace('h1, h2, h3, h4', {hover: true});
        </script>
        <!-- FOR IPHONE/IPOD -->
        <link rel="apple-touch-icon" href="/images/logo.jpg" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-startup-image" href="/images/chargement.jpg" />     
        <!-- END FOR IPHONE/IPOD -->
    </head>

    <body class="wrapper">
        <header id="head"><h1 id="logo">fCalc</h1></header>  
        <div id="calculatrice"></div>
        <footer id="foot">By Frantz DARIBO - Tous droits réservés.</footer>
    </body>

    <script type="text/javascript">
        new Fcalc('calculatrice');
    </script>
</html>