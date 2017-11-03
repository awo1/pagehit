var xhr = null;
var mwla = {
    init: function () {
        if(!xhr) {
            xhr = new XMLHttpRequest();
        }
    },
    send: function () {
        this.init();
        if(xhr.readyState == 0) {
            xhr.open('GET', '/Test/test.php?' + _params.shift().temp, true);
            xhr.send();
        }else{
            this.send();
        }
    }
};

// {% set track_domain = get_setting_value('track_domain') %}
// <script>
// function pageHit(url, referer, isPopup, demoGameId) {
//     $("body").queue(function () {
//         var $this = $(this);
//
//         var data = {
//             url: url,
//             referer: referer,
//             popup: isPopup,
//             utmTags: '{{ get_utmtags()|raw }}',
//             refCode: '{{ get_refcode_page_open() }}'
//         };
//
//         var headers = {};
//         {% if app.user %}
//         headers["Auth-token"] = "{{ get_user_jwt(app.user) }}";
//         {% endif %}
//
//         if (demoGameId) {
//             data.demoGame = demoGameId;
//         }
//
//         $.ajax({
//             type: "POST",
//             url: '//{{ track_domain }}/api/v11/hits?projectId={{ multiwl_id }}',
//             data: JSON.stringify(data),
//             headers: headers,
//             xhrFields: {
//                 withCredentials: true
//             },
//             success: function (response) {
//                 if (
//                     response['data']['{{ guest_id_cookie }}'] !== 'undefined' &&
//                     response['data']['{{ guest_id_cookie }}'] !== getCookie('{{ guest_id_cookie }}')
//                 ) {
//                     setCookie('{{ guest_id_cookie }}', response['data']['{{ guest_id_cookie }}'], {expires: 31556926});
//                 }
//             }
//         }).always(function () {
//             $this.dequeue();
//         });
//     });
// }
// </script>