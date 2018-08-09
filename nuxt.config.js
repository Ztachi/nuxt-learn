const path = require('path');
const axios = require('axios');
const router = require('./router');
module.exports = {
    router,
    /*
     ** Headers of the page
     */
    head: {
        title: 'nuxt-test',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Nuxt.js project'
            }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }]
    },
    /*
     ** Customize the progress bar color
     */
    loading: {
        color: '#3B8070'
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** Run ESLint on save
         */
        extend(config, {
            isDev,
            isClient
        }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
            return Object.assign({}, config, {
                devtool: 'source-map'
              })
        },
        loaders: [{
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'url-loader',
                query: {
                    limit: 1000, // 1KO
                    name: 'img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 1000, // 1 KO
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            }, {
                test: /\.css/,
                use: ['style-loader',
                    'css-loader',
                    'sprite-loader'
                ]
            }, {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader',
                    'sprite-loader'
                ]
            }
        ],
        //第三方插件加入vendor防止重复打包
        vendor: ['axios'],
        //引入全局mixin
        styleResources: {
            scss: path.resolve(__dirname, './assets/css/_fn.scss'),
        }
    },
    //添加全局css
    css: [{
        src: '~assets/css/common.scss',
        lang: 'scss'
    }],
    //组件缓存
    cache: true,
    //动态路由静态化
    // generate: {
    //     routes: function (callback) {
    //       axios.get('https://my-api/users')
    //       .then((res) => {
    //         var routes = res.data.map((user) => {
    //           return '/users/' + user.id
    //         })
    //         callback(null, routes)
    //       })
    //       .catch(callback)
    //     }
    //   },
    //引入插件
    plugins: ['~/plugins/plugins'],
    //引入代理插件
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/proxy'
    ],
    //设置代理
    proxy: [
        [
            '/api',
            {
                target: 'http://api.cd.pxjy.com/api', // api主机
                pathRewrite: {
                    '^/api': '/'
                }
            }
        ]
    ],
    watchers: {
        webpack: {
            //排除对node_modules文件夹的监听
            ignored: /node_modules/
        }
    },
    analyze: true
}