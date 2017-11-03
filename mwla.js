const frameId = "page_hit";
const pageHitUrl = "api.php";

var mwla = {
    exec: function () {
        if(!document.getElementById(frameId)){
            var frame = this.createFrame();
            document.body.appendChild(frame);

            var form = this.createForm();
            document.body.appendChild(form);
            form.submit();
        } else {
            this.exec();
        }
    },
    createForm: function () {
        var params = _params.shift();
        var form = document.createElement('form');
        form.id  = frameId + "_form"; form.target = frameId; form.action = pageHitUrl; form.method = "POST";

        for(var p in params)
            if (params.hasOwnProperty(p)) {
                var element = document.createElement('input');
                element.name = p.slice(1);
                element.value = params[p];

                form.appendChild(element);
            }
        return form;
    },
    createFrame: function () {
        var frame = document.createElement('iframe');
        frame.id = frameId;
        frame.name = frameId;
        frame.style.display = "none";
        frame.src = "#";
        return frame;
    },
    clear: function () {
        var frame = document.getElementById(frameId);
        frame.parentNode.removeChild(frame);
        var form = document.getElementById(frameId + "_form");
        form.parentNode.removeChild(form);
    }
};

var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

eventer(messageEvent,function(e) {
    document.cookie = "gstId=" + e.data;
    mwla.clear();
},false);

mwla.exec();