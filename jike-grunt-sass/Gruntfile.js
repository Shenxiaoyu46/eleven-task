module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: { // Task 
            dist: { // Target 
                options: { // Target options 
                    style: 'expanded'
                },
                files: { // Dictionary of files 
                    'stylesheet/index.css': 'dest/jike.scss' // 'destination': 'source' 
                }
            }
        },
        cssmin: {
            css: {
                src:'stylesheet/index.css',
                dest:'dest/all.min.css'
            }

        },
        uglify: {
            options: {
                banner: '/*!create by <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            static_mapppings: {
                files: [{
                    src: 'js/careerpaths.js',
                    dest: 'build/careerpaths.min.js'
                },{
                    src: 'js/company.js',
                    dest: 'build/company.min.js'
                },{
                    src: 'js/course.js',
                    dest: 'build/course.min.js'
                },{
                    src: 'js/gotop.js',
                    dest: 'build/gotop.min.js'
                },{
                    src: 'js/knowledge.js',
                    dest: 'build/knowledge.min.js'
                },{
                    src: 'js/navigation.js',
                    dest: 'build/navigation.min.js'
                },{
                    src: 'js/recommend.js',
                    dest: 'build/recommend.min.js'
                },{
                    src: 'js/search.js',
                    dest: 'build/search.min.js'
                },{
                    src: 'js/topshow.js',
                    dest: 'build/topshow.min.js'
                },{
                    src: 'js/wiki.js',
                    dest: 'build/wiki.min.js'
                }],
            }
        },
        concat: {
            bar: {
                src: ['build/*.js'],
                dest: 'dest/all.min.js',
            }
        },
        watch: {
            files: ['dest/all.min.js'],
            tasks: ['uglify', 'concat']
        }
    });


    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-css');
    // 默认被执行的任务列表。
    grunt.registerTask('default', ['sass','cssmin','uglify','concat','watch']);
};
