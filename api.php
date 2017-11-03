<?php
    $guestId = "s70d2d34rta33g7feff7d3r43ewd7s";
    setcookie("gstId", $guestId);
?>
<script>
    function getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    window.parent.postMessage(getCookie('gstId'), "*");
</script>