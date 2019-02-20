module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 8000,
          base: 'public',
          logger: 'dev',
          hostname: 'localhost',
          middleware: function (connect, options) {
             var proxy = require('grunt-connect-proxy/lib/utils').proxyRequest;
             return [
                // Include the proxy first
                proxy,
                // Serve static files.
                connect.static(options.base),
                // Make empty directories browsable.
                connect.directory(options.base)
             ];
          }
        },
            proxies: [
                {
                    context: '/cortex',
                    host: '10.10.2.202',
                    port: 8080,
                    https: false,
                    xforward: false,
                    headers: {
                        "x-custom-added-header": value
                    },
                    hideHeaders: ['x-removed-header']
                }
            ]
        }
    },
    pkg: grunt.file.readJSON('package.json'),
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-available-tasks');
  grunt.loadNpmTasks('grunt-serve');
  grunt.loadNpmTasks('grunt-connect-proxy');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s).
  grunt.registerTask('default', ['connect']);
  grunt.registerTask('server', function (target) {
        grunt.task.run([
            'clean:server',
            'compass:server',
            'configureProxies:server',
            'connect:server',
            'open',
            'watch'
        ]);
    });

};
