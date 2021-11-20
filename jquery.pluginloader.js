(function ($) {
  $.fn.extend({
    pluginLoader: function (options, arg) {
      this.each(function () {
        new $.pluginLoader(this, options, arg);
      });
      return;
    },
  });

  $.pluginLoader = function (options, arg) {
    if (options && typeof options == "string") {
      if (options == "add") {
        pluginLoader_add(arg);
      }

      return;
    }

    function pluginLoader_add(arg) {
      $("[" + arg.trigger + "]").length > 0 &&
        $.getScript(arg.path, arg.loadFn);

      arg.loadCss.forEach((element) => {
        $("link[href*='" + element + "']").length == 0 &&
          $("head").append(
            "<link rel='stylesheet' id type='text/css' href='" + element + "'>"
          );
      });
    }
  };
})(jQuery);
