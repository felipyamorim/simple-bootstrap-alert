(function ( $ ) {
    $.fn.extend({
        alert: function (options) {

            if (typeof options !== "object") {
                throw new Error("É necessário informar um objeto de configuração para inicializar um alerta.");
            }

            var defaults = {
                type: 'success',
                message: null,
                fade: false,
                time: 3000,
                autoClose: {
                    enable: false,
                    type: 'fade',
                    time: 3000
                }
            };

            options = $.extend(defaults, options);

            var templates = {
                div: '<div class="alert alert-' + options.type + ' fade in"></div>',
                closeButton: '<a class="close" data-dismiss="alert" aria-label="close">&times;</a>'
            };

            this.each(function() {
                // create dom
                var $div = $(templates.div)
                    .append(options.message)
                    .append(options.autoClose.enable ? null : templates.closeButton);

                // append to selector
                $(this).append($div);

                if(options.autoClose.enable == true){
                    if(options.autoClose.type == 'fade'){
                        $div.fadeOut(options.time);
                    }else if(options.autoClose.type = 'slide'){
                        $div.slideUp(options.time);
                    }
                }
            });
        }
    });
}( jQuery ));
