Package.describe({
  summary: "jQuery slimcroll library"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files('jquery-slider.js', 'client');
  api.add_files('jquery.sidr.dark.min.css', 'client');
  api.add_files('jquery.sidr.light.min.css', 'client');
});