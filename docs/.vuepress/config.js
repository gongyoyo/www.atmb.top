module.exports = {
    title: '秋之盒 AUTUMNBOX',
    description: '开源免费易用的ADB工具',
    theme: 'reco',
    cache: false,
    configureWebpack: (config, isServer) => {
        if (!isServer) {
            ["link", { rel: "stylesheet" }]            // config.module.rules.push({ test: /\.ts(x?)$/, use: 'ts-loader' });
            // config.module.rules.push({test:/\.js$/,use:'babel-loader',exclude:/node_modules/}); 
        }
    },
    head: [
        // ["link", { rel: "stylesheet", href: "https://cdn.bootcss.com/twitter-bootstrap/4.4.1/css/bootstrap.min.css" }],
        // ['script', { src: "https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js" }]
        // ['script', { src: "https://cdn.bootcss.com/twitter-bootstrap/4.4.1/js/bootstrap.min.js" }]
    ],
    plugins: [
        [
            // // require('./plugins/cnzz/'),
            // 'vuepress-plugin-typescript',
            // {
            //     tsLoaderOptions: {
            //         "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
            //         "module": "commonjs",
            //     },
            // },
            require('./plugins/custom-not-found'),
            '@vuepress/google-analytics',
            {
                'ga': 'UA-113227184-2' // UA-00000000-0
            },
        ]
    ],
    themeConfig: {
        noFoundPageByTencent: false,
        type: 'CustomHome',
        evergreen: true,
        logo: '/images/icon.png',
        nav: [
            { text: '主页', link: '/', icon: "reco-home" },
            { text: '下载', link: '/download/'},
            { text: '指南', link: '/guide/', icon: "reco-document" },
            { text: '拓展模块', link: '/extensions/', icon: "reco-category" },

            {
                text: '关于',
                icon: "reco-other",
                items: [
                    { text: '关于', link: '/about/' },
                    { text: '无偿捐赠', link: '/donate/' },
                ]
            },
            {
                text: '开发',
                icon: 'reco-api',
                items: [
                    { text: '开发文档', link: '/dev/docs/' },
                    { text: '开放源代码', link: '/dev/os/', icon: "reco-github" },
                ]
            }
        ],
        sidebar: {
            "/guide/": [
                {
                    title: '入门',   // 必要的
                    // path: '/guide/',      // 可选的, 应该是一个绝对路径
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 4,    // 可选的, 默认值是 1
                    children: [
                        '/guide/',
                        "/guide/basic/run/",
                        "/guide/basic/adb_fail/",
                        {
                            title: '连接设备',   // 必要的
                            // path: '/guide/',      // 可选的, 应该是一个绝对路径
                            collapsable: false, // 可选的, 默认值是 true,
                            sidebarDepth: 2,    // 可选的, 默认值是 1
                            children: [
                                '/guide/basic/cdev/',
                                '/guide/basic/cdev/chuawei.html'

                            ]
                        },
                        "/guide/basic/dpm/",
                        "/guide/basic/ext/",
                        "/guide/basic/script/",

                    ]
                },
                {
                    title: '进阶',   // 必要的
                    // path: '/guide/',      // 可选的, 应该是一个绝对路径
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [
                        '/guide/advanced/',
                        '/guide/advanced/wifi_delete_x/',
                        '/guide/advanced/jump_google/',
                    ]
                },
                {
                    title: 'ADB',   // 必要的
                    // path: '/guide/',      // 可选的, 应该是一个绝对路径
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [
                        '/guide/adb/',
                        '/guide/adb/install/',
                        '/guide/adb/enable/',
                        '/guide/adb/use/',
                    ]
                }
            ],
            "/extensions/": [
                {
                    title: '拓展模块',   // 必要的
                    sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [
                        '/extensions/',

                    ]
                },
                {
                    title: '拓展模块市场',   // 必要的
                    sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [
                        '/extensions/store/',

                    ]
                }
            ],
            "/dev/docs/": [
                {
                    title: '入门',   // 必要的
                    sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [
                        '/dev/docs/',

                    ]
                },
                {
                    title: '进阶',   // 必要的
                    sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [
                        '/dev/docs/advanced/',
                    ]
                }
            ],
            "/download/": [
                "",
                "beta/"
            ]

        },
        lastUpdated: '最后更新',
        startYear: '2017',
        author: 'AutumnBox',
        valineConfig: {
            placeholder: "建议填写邮箱地址以接收回复。遵守法律法规,理性发言。",
            appId: 'VLA81Yn1kDUEgE9A99Qwnb1u-gzGzoHsz',// your appId
            appKey: 'CpivAcjiG4W9BWNpS2z47X98', // your appKey
        }
    }
}